#!/usr/bin/env python3
"""Generate the README visuals (English in assets/readme/, Chinese in assets/readme/zh/).
Edit the copy or numbers here, then run: python3 assets/readme/make.py"""
from pathlib import Path
from xml.sax.saxutils import escape as x

HERE = Path(__file__).parent
SANS = "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans', 'Noto Sans CJK SC', sans-serif"
MONO = "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
BG, INK, MUTED, LINE, EDGE = "#faf7f1", "#20222b", "#62657a", "#e7e2d7", "#ddd5c5"
ACCENT, VIOLET = "#3d4fe0", "#8a4fe0"
PEACH, SKY, LAV, SAGE = "#f8dfcb", "#d8e8f7", "#e7e1f8", "#dce9d6"

NUM = {"kcs": "950", "prims": "56", "pages": "96", "tracks": "14"}

T = {
 "en": {
  "eyebrow": "OPEN KNOWLEDGE LAYER  ·  ENGLISH  ·  日本語  ·  中文",
  "desc": ["What to teach, in what order, and how to", "practise it. Ready for your app, your lesson,", "or your coding AI."],
  "stats": [("kcs", "knowledge points"), ("prims", "practice types"), ("pages", "ready pages"), ("tracks", "course tracks")],
  "cards": [("KNOWLEDGE POINT", "ひらがな  Hiragana", "A1 · first unit · no prerequisites"),
            ("PRACTICE TYPE", "Sound–spelling blend", "hear it, build it, write it"),
            ("READY PAGE", "Hiragana chart", "blocks/sound-grid.html")],
  "hero_title": "OpenLanguageKit", "hero_desc": "OpenLanguageKit: an open knowledge layer for English, Japanese and Chinese courses. One real chain is shown: a knowledge point, the practice type bound to it, and the ready page that runs it.",
  "flow_title": "How OpenLanguageKit turns a learner into a plan",
  "flow_desc": "Four steps: you describe the learner; the planner picks knowledge points in order; each one gets a practice type; where a page is ready it is attached. The output is blueprint.json and PLAN.md.",
  "steps": [("1 · YOU SAY", "Who is learning", None, ["language, age, goal,", "minutes a day"]),
            ("2 · PLANNER PICKS", "Knowledge points", "kcs", ["the ones this learner", "needs, in order"]),
            ("3 · EACH ONE GETS", "A practice type", "prims", ["do · respond ·", "check · evidence"]),
            ("4 · WHERE READY", "A page to run", "pages", ["plain HTML,", "no dependencies"])],
  "out": "blueprint.json  +  PLAN.md",
  "out_note": ["A week-by-week plan: what to teach, which practice,", "which page — and what still has to be built."],
  "out_label": "YOU GET",
 },
 "zh": {
  "eyebrow": "开放的知识层  ·  ENGLISH  ·  日本語  ·  中文",
  "desc": ["教什么、按什么顺序教、怎么练。", "可以直接用在你的 app、你的课，", "或者交给写代码的 AI。"],
  "stats": [("kcs", "个知识点"), ("prims", "种练习方式"), ("pages", "个现成页面"), ("tracks", "套课程方案")],
  "cards": [("知识点", "ひらがな  平假名", "A1 · 第一单元 · 没有先修"),
            ("练习方式", "音形拼合", "听音、拼出来、写下来"),
            ("现成页面", "平假名五十音表", "blocks/sound-grid.html")],
  "hero_title": "OpenLanguageKit", "hero_desc": "OpenLanguageKit：英语、日语、中文课程的开放知识层。图中是一条真实的链：一个知识点、绑定的练习方式、可以直接运行的页面。",
  "flow_title": "OpenLanguageKit 怎样把学习者变成一份计划",
  "flow_desc": "四步：你描述学习者；规划器按顺序选出知识点；每个知识点配一种练习方式；有现成页面的就挂上。输出 blueprint.json 和 PLAN.md。",
  "steps": [("1 · 你来说", "谁在学", None, ["语言、年龄、目标、", "每天几分钟"]),
            ("2 · 规划器选出", "知识点", "kcs", ["这位学习者需要的，", "按先修关系排好"]),
            ("3 · 每个配上", "一种练习方式", "prims", ["怎么做 · 怎么回应", "怎么检查 · 证据"]),
            ("4 · 有就挂上", "能运行的页面", "pages", ["纯 HTML，", "没有依赖"])],
  "out": "blueprint.json  +  PLAN.md",
  "out_note": ["一份按周排好的计划：教什么、用哪种练习、", "用哪个页面，以及还有什么要自己做。"],
  "out_label": "你拿到",
 },
}

def txt(xp, y, s, size, fill=INK, weight=400, font=SANS, anchor="start", extra=""):
    return f'<text x="{xp}" y="{y}" font-family="{font}" font-size="{size}" font-weight="{weight}" fill="{fill}" text-anchor="{anchor}" {extra}>{x(s)}</text>'

def card(xp, y, w, h, fill):
    return (f'<rect x="{xp}" y="{y + 6}" width="{w}" height="{h}" rx="18" fill="{EDGE}"/>'
            f'<rect x="{xp}" y="{y}" width="{w}" height="{h}" rx="18" fill="{fill}"/>')

def head(w, h, title, desc):
    return (f'<svg xmlns="http://www.w3.org/2000/svg" width="{w}" height="{h}" viewBox="0 0 {w} {h}" role="img" aria-labelledby="title desc">'
            f'<title id="title">{x(title)}</title><desc id="desc">{x(desc)}</desc>'
            f'<defs><linearGradient id="g" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="{ACCENT}"/><stop offset="1" stop-color="{VIOLET}"/></linearGradient></defs>'
            f'<rect width="{w}" height="{h}" rx="28" fill="{BG}"/><rect x="1" y="1" width="{w-2}" height="{h-2}" rx="27" fill="none" stroke="{LINE}" stroke-width="2"/>')

def hero(t):
    o = [head(1200, 440, t["hero_title"], t["hero_desc"])]
    o.append('<g id="title-block">')
    o.append(txt(64, 82, t["eyebrow"], 18, MUTED, 600, MONO, extra='letter-spacing="1"'))
    o.append(txt(62, 164, "OpenLanguageKit", 72, "url(#g)", 800, extra='letter-spacing="-2"'))
    for i, line in enumerate(t["desc"]):
        o.append(txt(64, 218 + i * 36, line, 26, INK, 500))
    o.append(f'<rect x="64" y="322" width="620" height="2" fill="{LINE}"/>')
    for i, (k, label) in enumerate(t["stats"]):
        xp = 64 + i * 164
        o.append(txt(xp, 372, NUM[k], 36, INK, 800))
        o.append(txt(xp, 400, label, 18, MUTED, 500))
    o.append('</g><g id="real-chain">')
    cx, cw, ch = 792, 344, 104
    ys = [44, 166, 288]
    fills = [SKY, LAV, SAGE]
    o.append(f'<path d="M760 {ys[0] + ch / 2} V {ys[2] + ch / 2}" stroke="url(#g)" stroke-width="4" stroke-linecap="round" fill="none"/>')
    for y, fill, (eye, title, sub) in zip(ys, fills, t["cards"]):
        o.append(card(cx, y, cw, ch, fill))
        o.append(f'<circle cx="760" cy="{y + ch / 2}" r="11" fill="{BG}" stroke="{ACCENT}" stroke-width="4"/>')
        o.append(f'<path d="M771 {y + ch / 2} H {cx}" stroke="{ACCENT}" stroke-width="3"/>')
        o.append(txt(cx + 22, y + 32, eye, 16, MUTED, 700, MONO, extra='letter-spacing="1.5"'))
        o.append(txt(cx + 22, y + 63, title, 25, INK, 700))
        o.append(txt(cx + 22, y + 88, sub, 18, MUTED, 500, MONO if "/" in sub else SANS))
    o.append('</g></svg>')
    return "".join(o)

def flow(t):
    o = [head(1200, 470, t["flow_title"], t["flow_desc"])]
    fills = [PEACH, SKY, LAV, SAGE]
    w, hgt, y0 = 252, 232, 44
    xs = [48, 332, 616, 900]
    for i, (xp, fill, (eye, title, num, lines)) in enumerate(zip(xs, fills, t["steps"])):
        o.append(card(xp, y0, w, hgt, fill))
        o.append(txt(xp + 22, y0 + 38, eye, 16, MUTED, 700, MONO, extra='letter-spacing="1"'))
        o.append(txt(xp + 22, y0 + 76, title, 24, INK, 800))
        if num:
            o.append(txt(xp + 22, y0 + 136, NUM[num], 52, "url(#g)", 800))
        else:
            # three blocks in a speech bubble: the project's mark, standing in for "your sentence"
            bx, by = xp + 22, y0 + 98
            o.append(f'<rect x="{bx}" y="{by}" width="92" height="40" rx="12" fill="{BG}" stroke="{INK}" stroke-width="3"/>'
                     f'<path d="M{bx + 18} {by + 39} l-4 13 l16 -13" fill="{BG}" stroke="{INK}" stroke-width="3" stroke-linejoin="round"/>')
            for j, c in enumerate([ACCENT, VIOLET, "#e0693a"]):
                o.append(f'<rect x="{bx + 14 + j * 23}" y="{by + 12}" width="17" height="17" rx="4" fill="{c}"/>')
        for j, line in enumerate(lines):
            o.append(txt(xp + 22, y0 + 176 + j * 28, line, 20, INK, 500))
        if i < 3:
            ax = xp + w + 6
            o.append(f'<path d="M{ax} {y0 + hgt / 2} h20 m-8 -8 l8 8 l-8 8" stroke="{ACCENT}" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>')
    by = 330
    o.append(f'<path d="M600 {y0 + hgt + 8} V {by}" stroke="{ACCENT}" stroke-width="4" stroke-linecap="round"/>')
    o.append(f'<rect x="48" y="{by + 6}" width="1104" height="96" rx="18" fill="#141624"/><rect x="48" y="{by}" width="1104" height="96" rx="18" fill="{INK}"/>')
    o.append(txt(76, by + 38, t["out_label"], 16, "#a9b1f3", 700, MONO, extra='letter-spacing="1.5"'))
    o.append(txt(76, by + 72, t["out"], 24, "#ffffff", 700, MONO))
    for j, line in enumerate(t["out_note"]):
        o.append(txt(500, by + 42 + j * 30, line, 21, "#ecedf4", 500))
    o.append('</svg>')
    return "".join(o)

for lang, t in T.items():
    d = HERE if lang == "en" else HERE / lang
    d.mkdir(exist_ok=True)
    (d / "hero.svg").write_text(hero(t) + "\n", encoding="utf-8")
    (d / "how-it-works.svg").write_text(flow(t) + "\n", encoding="utf-8")
    print("wrote", d / "hero.svg", d / "how-it-works.svg")
