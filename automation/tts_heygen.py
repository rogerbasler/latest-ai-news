#!/usr/bin/env python3
"""Podcast audio for Latest AI News with HeyGen (v3 Speech API).

Runs in GitHub Actions (workflow .github/workflows/podcast.yml), because the
weekly Claude run cannot reach the HeyGen API.

- Reads the spoken script from podcast/script.txt (plain text, paragraphs
  separated by blank lines).
- Voice from automation/voice.json. If it says "auto", the public HeyGen voice
  library is filtered for English male voices and the first match is stored in
  voice.json, so the voice stays the same every week. No voice ID is invented.
- The script is split into chunks, each chunk is synthesised, the parts are
  joined with ffmpeg into client/public/podcast/latest-episode.mp3.
- The real duration is written into client/src/data/sampleData.ts.
- Without HEYGEN_API_KEY or on API errors the previous audio stays untouched
  and the script exits with an error.

Usage: python3 automation/tts_heygen.py
"""
import json
import os
import re
import subprocess
import sys
import time
from pathlib import Path

import requests

ROOT = Path(__file__).resolve().parent.parent
SCRIPT = ROOT / "podcast" / "script.txt"
VOICE_FILE = ROOT / "automation" / "voice.json"
OUT = ROOT / "client" / "public" / "podcast" / "latest-episode.mp3"
DATA = ROOT / "client" / "src" / "data" / "sampleData.ts"
WORK = ROOT / "podcast" / ".parts"
API = "https://api.heygen.com/v3"
CHUNK_CHARS = 1500


def log(msg):
    print(msg, file=sys.stderr, flush=True)


def headers():
    key = os.environ.get("HEYGEN_API_KEY")
    if not key:
        raise RuntimeError("HEYGEN_API_KEY is missing")
    return {"x-api-key": key, "Content-Type": "application/json"}


def load_cfg():
    if VOICE_FILE.exists():
        return json.loads(VOICE_FILE.read_text(encoding="utf-8"))
    return {"voice": "auto", "speed": 1.0, "language": "en"}


def list_voices(gender):
    voices = []
    for name in ["English", "Multilingual"]:
        token = None
        while True:
            params = {"type": "public", "gender": gender, "language": name, "limit": 100}
            if token:
                params["token"] = token
            r = requests.get(f"{API}/voices", headers=headers(), params=params, timeout=30)
            if r.status_code != 200:
                log(f"voice list {name}: HTTP {r.status_code} {r.text[:200]}")
                break
            data = r.json()
            voices += data.get("data", [])
            token = data.get("next_token")
            if not data.get("has_more") or not token:
                break
    return list({v["voice_id"]: v for v in voices}.values())


def pick_voice(cfg):
    voice = cfg.get("voice")
    if isinstance(voice, dict) and voice.get("voice_id"):
        log(f"configured voice: {voice.get('name')} ({voice['voice_id']})")
        return voice
    cands = list_voices(cfg.get("gender", "male"))
    style = ["news", "professional", "clear", "natural", "confident", "calm", "narrat"]
    cands.sort(key=lambda v: (-sum(w in v["name"].lower() for w in style), v["name"]))
    if not cands:
        raise RuntimeError("no matching HeyGen voice found")
    for v in cands[:3]:
        log(f"candidate: {v['name']} | {v['voice_id']} | {v.get('language')} | {v.get('preview_audio_url')}")
    top = cands[0]
    voice = {"name": top["name"], "voice_id": top["voice_id"], "language": top.get("language")}
    cfg["voice"] = voice
    VOICE_FILE.write_text(json.dumps(cfg, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    log(f"chosen voice: {voice['name']} ({voice['voice_id']})")
    return voice


def chunks(text):
    paras = [p.strip() for p in re.split(r"\n\s*\n", text) if p.strip()]
    out, cur = [], ""
    for p in paras:
        if cur and len(cur) + len(p) + 2 > CHUNK_CHARS:
            out.append(cur)
            cur = p
        else:
            cur = f"{cur}\n\n{p}" if cur else p
    if cur:
        out.append(cur)
    return out


def synth(text, voice_id, cfg, path):
    body = {"text": text, "voice_id": voice_id, "speed": cfg.get("speed", 1.0),
            "language": cfg.get("language", "en")}
    for _ in range(4):
        r = requests.post(f"{API}/voices/speech", headers=headers(), json=body, timeout=180)
        if r.status_code == 200:
            audio = requests.get(r.json()["data"]["audio_url"], timeout=120)
            audio.raise_for_status()
            path.write_bytes(audio.content)
            return
        if r.status_code == 429:
            time.sleep(int(r.headers.get("Retry-After", "10")))
            continue
        if r.status_code in (502, 503, 504):
            time.sleep(5)
            continue
        raise RuntimeError(f"HeyGen HTTP {r.status_code}: {r.text[:300]}")
    raise RuntimeError("HeyGen: too many failed attempts")


def duration(path):
    out = subprocess.run(["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of",
                          "default=nw=1:nk=1", str(path)], capture_output=True, text=True)
    return float(out.stdout.strip() or 0)


def main():
    text = SCRIPT.read_text(encoding="utf-8").strip()
    if len(text.split()) < 300:
        raise RuntimeError("podcast/script.txt is missing or too short")
    cfg = load_cfg()
    voice = pick_voice(cfg)
    WORK.mkdir(parents=True, exist_ok=True)
    parts = []
    for i, chunk in enumerate(chunks(text)):
        p = WORK / f"part-{i:02d}.mp3"
        synth(chunk, voice["voice_id"], cfg, p)
        parts.append(p)
        time.sleep(0.5)
    lst = WORK / "concat.txt"
    lst.write_text("\n".join(f"file '{p.name}'" for p in parts), encoding="utf-8")
    tmp = WORK / "episode.mp3"
    subprocess.run(["ffmpeg", "-y", "-f", "concat", "-safe", "0", "-i", str(lst), "-vn",
                    "-acodec", "libmp3lame", "-ab", "128k", "-ar", "44100", "-ac", "1", str(tmp)],
                   check=True, capture_output=True)
    secs = duration(tmp)
    if secs < 120:
        raise RuntimeError(f"audio too short ({secs:.0f} s), previous episode kept")
    OUT.write_bytes(tmp.read_bytes())
    for f in WORK.iterdir():
        f.unlink()
    WORK.rmdir()
    mmss = f"{int(secs // 60)}:{int(secs % 60):02d}"
    data = DATA.read_text(encoding="utf-8")
    data, n = re.subn(r'duration:\s*"[^"]*"', f'duration: "{mmss}"', data, count=1)
    data = re.sub(r"\n\s*audioPending:\s*true,", "", data)
    DATA.write_text(data, encoding="utf-8")
    print(f"{len(parts)} chunks, duration {mmss}, voice {voice['name']}")


if __name__ == "__main__":
    try:
        main()
    except Exception as e:  # noqa: BLE001
        log(f"ERROR: {e}")
        sys.exit(1)
