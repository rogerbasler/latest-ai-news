#!/usr/bin/env python3
"""Instagram Stories (header and footer kept inside the safe zone, about 250 px from top and bottom)

Instagram Stories (1080 x 1920) for the weekly edition in the thinkRoger look.

Usage: python3 -I automation/instagram_stories.py podcast/stories.json <font_dir> <out_dir>

Font dir must contain Anton-Regular.ttf, PermanentMarker-Regular.ttf, Montserrat-VF.ttf
(from github.com/google/fonts). The spec is JSON:
{
  "date_label": "NOV 22, 2026",
  "stories": [
    {"type": "title", "headline": "Intelligence gets [cheaper]. Control does not.", "sub": "...", "note": "..."},
    {"type": "story", "kicker": "AI News of the Week", "headline": "... [emphasis] ...",
     "fact": "one or two short sentences", "note": "short pink annotation", "source": "The Register"},
    {"type": "cta", "headline": "...", "lines": ["...", "..."], "note": "..."}
  ]
}
Words in [brackets] are set in cobalt blue. Output: story_01.png ... plus JPG copies.
"""
import json, os, random, sys
from PIL import Image, ImageDraw, ImageFilter, ImageFont

W, H = 1080, 1920
PAPER = (242, 237, 227)
INK = (17, 17, 17)
BLUE = (22, 93, 255)
PINK = (255, 20, 144)
SCRAP = (252, 250, 245)
M = 84  # side margin


def font(d, name, size, wght=None):
    f = ImageFont.truetype(os.path.join(d, name), size)
    if wght is not None:
        try:
            f.set_variation_by_axes([wght])
        except Exception:
            pass
    return f


def tokens(text):
    """Split into (word, is_blue) keeping [bracket] spans blue."""
    out, blue = [], False
    for w in text.split():
        start = w.startswith("[")
        end = w.endswith("]") or w.rstrip(".,:;?!").endswith("]")
        if start:
            blue = True
        clean = w.replace("[", "").replace("]", "")
        out.append((clean, blue))
        if end:
            blue = False
    return out


def wrap_tokens(draw, toks, f, maxw):
    lines, cur = [], []
    for t in toks:
        trial = " ".join(w for w, _ in cur + [t])
        if cur and draw.textlength(trial, font=f) > maxw:
            lines.append(cur)
            cur = [t]
        else:
            cur.append(t)
    if cur:
        lines.append(cur)
    return lines


def wrap(draw, text, f, maxw):
    return [" ".join(w for w, _ in l) for l in wrap_tokens(draw, [(w, False) for w in text.split()], f, maxw)]


def fit_headline(draw, text, fd, maxw, maxh, start=170, minimum=80):
    toks = tokens(text.upper())
    size = start
    while size >= minimum:
        f = font(fd, "Anton-Regular.ttf", size)
        lines = wrap_tokens(draw, toks, f, maxw)
        lh = int(size * 1.02)
        if len(lines) * lh <= maxh:
            return f, lines, lh
        size -= 6
    f = font(fd, "Anton-Regular.ttf", minimum)
    return f, wrap_tokens(draw, toks, f, maxw), int(minimum * 1.02)


def draw_headline(draw, f, lines, lh, x, y):
    for line in lines:
        cx = x
        for i, (w, blue) in enumerate(line):
            word = w + (" " if i < len(line) - 1 else "")
            draw.text((cx, y), word, font=f, fill=BLUE if blue else INK)
            cx += draw.textlength(word, font=f)
        y += lh
    return y


def paper_texture(img, seed):
    rnd = random.Random(seed)
    noise = Image.effect_noise((W, H), 18).convert("L")
    noise = noise.point(lambda v: 128 + (v - 128) // 3)
    tex = Image.merge("RGB", (noise, noise, noise))
    img = Image.blend(img, Image.composite(img, tex, Image.new("L", (W, H), 215)), 0.35)
    d = ImageDraw.Draw(img)
    # halftone dots in one corner
    cx, cy = (W - 60, 260) if seed % 2 else (60, H - 380)
    for gx in range(-260, 261, 22):
        for gy in range(-260, 261, 22):
            dist = (gx * gx + gy * gy) ** 0.5
            if dist < 260:
                r = max(0.0, 7 * (1 - dist / 260))
                if r > 0.6:
                    d.ellipse([cx + gx - r, cy + gy - r, cx + gx + r, cy + gy + r], fill=(205, 199, 188))
    # a few rough paint strokes
    for _ in range(3):
        x0 = rnd.randint(0, W)
        y0 = rnd.randint(0, H)
        d.line([(x0, y0), (x0 + rnd.randint(-200, 200), y0 + rnd.randint(-40, 40))], fill=(226, 220, 208), width=rnd.randint(18, 40))
    return img


def scrap(img, box, angle, seed):
    x0, y0, x1, y1 = box
    w, h = x1 - x0, y1 - y0
    layer = Image.new("RGBA", (w + 80, h + 80), (0, 0, 0, 0))
    ld = ImageDraw.Draw(layer)
    ld.rectangle([46, 50, 46 + w, 50 + h], fill=(0, 0, 0, 55))
    ld.rectangle([40, 40, 40 + w, 40 + h], fill=SCRAP + (255,))
    # tape
    ld.rectangle([40 + w // 2 - 70, 26, 40 + w // 2 + 70, 62], fill=(22, 93, 255, 150))
    layer = layer.rotate(angle, resample=Image.BICUBIC, expand=False)
    img.paste(layer, (x0 - 40, y0 - 40), layer)


def scribble(draw, x, y, w, seed):
    rnd = random.Random(seed)
    pts = [(x + i * w / 12, y + rnd.randint(-6, 6)) for i in range(13)]
    draw.line(pts, fill=PINK, width=7, joint="curve")


def header(draw, fd, date_label, idx, total):
    lab = font(fd, "Montserrat-VF.ttf", 34, 800)
    small = font(fd, "Montserrat-VF.ttf", 28, 600)
    draw.text((M, 250), "#thinkRoger", font=lab, fill=INK)
    t = f"AI NEWS WEEKLY  |  {date_label}"
    draw.text((W - M - draw.textlength(t, font=small), 256), t, font=small, fill=INK)
    draw.line([(M, 310), (W - M, 310)], fill=INK, width=4)
    seg = (W - 2 * M - (total - 1) * 10) / total
    for i in range(total):
        xa = M + i * (seg + 10)
        draw.rectangle([xa, 326, xa + seg, 332], fill=BLUE if i == idx else (200, 194, 183))


def footer(draw, fd, left):
    small = font(fd, "Montserrat-VF.ttf", 28, 600)
    draw.line([(M, H - 330), (W - M, H - 330)], fill=INK, width=3)
    draw.text((M, H - 305), left, font=small, fill=INK)
    r = "thinkroger.substack.com"
    draw.text((W - M - draw.textlength(r, font=small), H - 305), r, font=small, fill=INK)


def kicker(draw, fd, text, y):
    f = font(fd, "Montserrat-VF.ttf", 34, 800)
    t = text.upper()
    tw = draw.textlength(t, font=f)
    draw.rectangle([M - 6, y - 8, M + tw + 26, y + 52], fill=BLUE)
    draw.text((M + 10, y), t, font=f, fill=(255, 255, 255))
    return y + 90


def note(draw, fd, text, x, y, maxw=760):
    f = font(fd, "PermanentMarker-Regular.ttf", 50)
    lines = wrap(draw, text, f, maxw)
    for l in lines:
        draw.text((x, y), l, font=f, fill=PINK)
        y += 64
    scribble(draw, x, y + 6, min(maxw, draw.textlength(lines[-1], font=f)), len(text))
    return y + 40


def body_block(img, draw, fd, text, y, seed, size=42):
    f = font(fd, "Montserrat-VF.ttf", size, 500)
    maxw = W - 2 * M - 80
    lines = wrap(draw, text, f, maxw)
    lh = int(size * 1.42)
    h = len(lines) * lh + 80
    scrap(img, (M, y, W - M, y + h), angle=(-1.2 if seed % 2 else 1.0), seed=seed)
    draw = ImageDraw.Draw(img)
    ty = y + 40
    for l in lines:
        draw.text((M + 40, ty), l, font=f, fill=INK)
        ty += lh
    return draw, y + h


BOTTOM = H - 370  # content must end above the footer line


def body_height(draw, fd, text, size=42):
    f = font(fd, "Montserrat-VF.ttf", size, 500)
    return len(wrap(draw, text, f, W - 2 * M - 80)) * int(size * 1.42) + 80


def note_height(draw, fd, text):
    if not text:
        return 0
    f = font(fd, "PermanentMarker-Regular.ttf", 50)
    return len(wrap(draw, text, f, 760)) * 64 + 40 + 50


def render(spec, fd, out):
    os.makedirs(out, exist_ok=True)
    stories = spec["stories"]
    total = len(stories)
    paths = []
    for i, s in enumerate(stories):
        img = paper_texture(Image.new("RGB", (W, H), PAPER), i + 3)
        d = ImageDraw.Draw(img)
        header(d, fd, spec["date_label"], i, total)
        t = s["type"]
        if t == "title":
            y = kicker(d, fd, "This week in AI", 430)
            room = BOTTOM - (y + 10) - 80 - (body_height(d, fd, s["sub"], 40) if s.get("sub") else 0) - note_height(d, fd, s.get("note"))
            f, lines, lh = fit_headline(d, s["headline"], fd, W - 2 * M, min(720, room), start=200)
            y = draw_headline(d, f, lines, lh, M, y + 10)
            if s.get("sub"):
                d, y = body_block(img, d, fd, s["sub"], y + 80, i, size=40)
            if s.get("note"):
                note(d, fd, s["note"], M + 10, y + 50)
            footer(d, fd, "Swipe for 5 stories")
        elif t == "story":
            y = kicker(d, fd, s["kicker"], 430)
            room = BOTTOM - (y + 10) - 80 - body_height(d, fd, s["fact"]) - note_height(d, fd, s.get("note"))
            f, lines, lh = fit_headline(d, s["headline"], fd, W - 2 * M, min(600, room), start=160)
            y = draw_headline(d, f, lines, lh, M, y + 10)
            d, y = body_block(img, d, fd, s["fact"], y + 80, i)
            if s.get("note"):
                note(d, fd, s["note"], M + 10, y + 50)
            footer(d, fd, "Source: " + s["source"])
        else:
            y = kicker(d, fd, s.get("kicker", "Listen and read"), 430)
            lf = font(fd, "Montserrat-VF.ttf", 44, 700)
            lines_h = sum(len(wrap(d, l, lf, W - 2 * M)) * 62 + 26 for l in s["lines"]) + 60
            room = BOTTOM - (y + 10) - lines_h - note_height(d, fd, s.get("note"))
            f, lines, lh = fit_headline(d, s["headline"], fd, W - 2 * M, min(640, room), start=170)
            y = draw_headline(d, f, lines, lh, M, y + 10)
            lf = font(fd, "Montserrat-VF.ttf", 44, 700)
            y += 60
            for l in s["lines"]:
                for wl in wrap(d, l, lf, W - 2 * M):
                    d.text((M, y), wl, font=lf, fill=INK)
                    y += 62
                y += 26
            if s.get("note"):
                note(d, fd, s["note"], M + 10, y + 30)
            footer(d, fd, "Presented by Roger Basler de Roca")
        p = os.path.join(out, f"story_{i + 1:02d}.png")
        img.save(p)
        img.convert("RGB").save(p[:-4] + ".jpg", quality=92)
        paths.append(p)
    return paths


if __name__ == "__main__":
    spec = json.load(open(sys.argv[1], encoding="utf-8"))
    for p in render(spec, sys.argv[2], sys.argv[3]):
        print(p)
