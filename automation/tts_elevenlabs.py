#!/usr/bin/env python3
"""Podcast audio for Latest AI News with ElevenLabs, in Roger Basler de Roca's cloned voice.

Runs in GitHub Actions (workflow .github/workflows/podcast.yml), because the
weekly Claude run cannot reach the ElevenLabs API.

- Reads the spoken script from podcast/script.txt (plain text, paragraphs
  separated by blank lines).
- Appends the AI disclosure from automation/voice.json as the final paragraph,
  so every episode ends with it, whatever the weekly script contains.
- Voice, model and voice settings come from automation/voice.json.
- The text is split into chunks at paragraph boundaries. Each chunk is
  synthesised with the neighbouring text as context (previous_text/next_text),
  so intonation stays continuous. The parts are joined with ffmpeg into
  client/public/podcast/latest-episode.mp3.
- The real duration is written into client/src/data/sampleData.ts.
- Without ELEVENLABS_API_KEY or on API errors the previous audio stays
  untouched and the script exits with an error.

Usage: python3 automation/tts_elevenlabs.py
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
API = "https://api.elevenlabs.io/v1"
CHUNK_CHARS = 2500
CONTEXT_CHARS = 500


def log(msg):
    print(msg, file=sys.stderr, flush=True)


def headers():
    key = os.environ.get("ELEVENLABS_API_KEY")
    if not key:
        raise RuntimeError("ELEVENLABS_API_KEY is missing")
    return {"xi-api-key": key, "Content-Type": "application/json", "Accept": "audio/mpeg"}


def load_cfg():
    cfg = json.loads(VOICE_FILE.read_text(encoding="utf-8"))
    if not cfg.get("voice", {}).get("voice_id"):
        raise RuntimeError("automation/voice.json has no voice.voice_id")
    return cfg


def full_text(cfg):
    text = SCRIPT.read_text(encoding="utf-8").strip()
    if len(text.split()) < 300:
        raise RuntimeError("podcast/script.txt is missing or too short")
    disclosure = (cfg.get("disclosure") or "").strip()
    if disclosure and disclosure not in text:
        text = f"{text}\n\n{disclosure}"
    return text


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


def synth(text, prev_text, next_text, cfg, path):
    voice_id = cfg["voice"]["voice_id"]
    body = {
        "text": text,
        "model_id": cfg.get("model_id", "eleven_multilingual_v2"),
        "voice_settings": cfg.get("voice_settings", {}),
    }
    if cfg.get("language"):
        body["language_code"] = cfg["language"]
    if prev_text:
        body["previous_text"] = prev_text[-CONTEXT_CHARS:]
    if next_text:
        body["next_text"] = next_text[:CONTEXT_CHARS]
    url = f"{API}/text-to-speech/{voice_id}"
    params = {"output_format": "mp3_44100_128"}
    for attempt in range(5):
        r = requests.post(url, headers=headers(), params=params, json=body, timeout=300)
        if r.status_code == 200 and r.content:
            path.write_bytes(r.content)
            return
        if r.status_code == 429 or r.status_code >= 500:
            wait = int(r.headers.get("Retry-After", "0") or 0) or 5 * (attempt + 1)
            log(f"ElevenLabs HTTP {r.status_code}, retrying in {wait} s")
            time.sleep(wait)
            continue
        if r.status_code == 400 and "language_code" in body and "language" in r.text.lower():
            body.pop("language_code")
            continue
        raise RuntimeError(f"ElevenLabs HTTP {r.status_code}: {r.text[:300]}")
    raise RuntimeError("ElevenLabs: too many failed attempts")


def duration(path):
    out = subprocess.run(["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of",
                          "default=nw=1:nk=1", str(path)], capture_output=True, text=True)
    return float(out.stdout.strip() or 0)


def main():
    cfg = load_cfg()
    parts_text = chunks(full_text(cfg))
    WORK.mkdir(parents=True, exist_ok=True)
    parts = []
    for i, chunk in enumerate(parts_text):
        prev_text = parts_text[i - 1] if i > 0 else ""
        next_text = parts_text[i + 1] if i + 1 < len(parts_text) else ""
        p = WORK / f"part-{i:02d}.mp3"
        synth(chunk, prev_text, next_text, cfg, p)
        parts.append(p)
        log(f"chunk {i + 1}/{len(parts_text)} done ({len(chunk)} chars)")
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
    data = re.sub(r'duration:\s*"[^"]*"', f'duration: "{mmss}"', data, count=1)
    data = re.sub(r"\n\s*audioPending:\s*true,", "", data)
    DATA.write_text(data, encoding="utf-8")
    print(f"{len(parts)} chunks, duration {mmss}, voice {cfg['voice'].get('name')}")


if __name__ == "__main__":
    try:
        main()
    except Exception as e:  # noqa: BLE001
        log(f"ERROR: {e}")
        sys.exit(1)
