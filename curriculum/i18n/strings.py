#!/usr/bin/env python3
"""English edition of the course content.

The Chinese JSON files are the source. English lives in curriculum/i18n/en/<name>.json as
{ "<path>": ["<hash of the Chinese string>", "<English>"] }, so a changed Chinese string makes its
translation stale instead of silently wrong. build.py uses apply() to write dist/data.en.js.

  python3 curriculum/i18n/strings.py status          coverage per file (missing / stale)
  python3 curriculum/i18n/strings.py export DIR [N]  write untranslated strings as DIR/in/<name>-NN.json chunks (~N Chinese chars)
  python3 curriculum/i18n/strings.py merge DIR       read DIR/out/<name>-NN.json ({path: English}) into en/<name>.json
"""
import hashlib, json, re, sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
CUR = HERE.parent
CJK = re.compile(r'[一-鿿]')
KANA = re.compile(r'[぀-ヿ]')

# name -> (file, language of the course or None)
FILES = {'primitives': ('primitives/primitives.json', None)}
for _l in ('en', 'ja', 'zh'):
    FILES['kcs-' + _l] = (f'{_l}/kcs.json', _l)
    FILES['map-' + _l] = (f'{_l}/primitive-map.json', _l)
    FILES['path-' + _l] = (f'{_l}/path.json', _l)
    FILES['tracks-' + _l] = (f'{_l}/tracks.json', _l)

# never translated: identifiers, controlled vocabulary, target-language material, already-English fields
SKIP_KEYS = {'id', 'term', 'reading', 'nameEn', 'sourceUnits', 'legacyIds', 'notions', 'itemTypes',
             'component', 'unit', 'section', 'family', 'status', 'languages', 'implementations', 'kc', 'primitive',
             'role', 'strength', 'events', 'maxStrength', 'basis', 'scheme', 'level', 'lang', 'language', 'ja', 'en'}


def h(s):
    return hashlib.sha1(s.encode('utf-8')).hexdigest()[:8]


def seg(o, i):
    if isinstance(o, dict):
        for k in ('id', 'kc', 'primitive'):
            if isinstance(o.get(k), str):
                return o[k]
    return str(i)


def walk(o, lang, path=(), in_example=False):
    """yield (path tuple, container, key, string) for every translatable string"""
    if isinstance(o, dict):
        for k, v in o.items():
            if k in SKIP_KEYS or (k in ('kcs', 'units') and v and isinstance(v[0], str)):
                continue
            ex = in_example or k == 'examples'
            if isinstance(v, str):
                # example sentences: `zh` is the gloss in the English and Japanese courses, the target in the Chinese course
                if in_example and k == 'zh' and lang != 'ja':
                    continue
                if CJK.search(v):
                    yield path + (k,), o, k, v
            else:
                yield from walk(v, lang, path + (k,), ex)
    elif isinstance(o, list):
        for i, v in enumerate(o):
            if isinstance(v, str):
                if CJK.search(v):
                    yield path + (str(i),), o, i, v
            else:
                yield from walk(v, lang, path + (seg(v, i),), in_example)


def load(name):
    f, lang = FILES[name]
    return json.loads((CUR / f).read_text(encoding='utf-8')), lang


def overlay(name):
    p = HERE / 'en' / (name + '.json')
    return json.loads(p.read_text(encoding='utf-8')) if p.exists() else {}


def items(name, data=None):
    if data is None:
        data, lang = load(name)
    else:
        lang = FILES[name][1]
    seen = {}
    for path, box, key, s in walk(data, lang):
        k = '/'.join(path)
        assert k not in seen, f'{name}: duplicate path {k}'
        seen[k] = 1
        yield k, box, key, s


def apply(name, data):
    """Replace translatable strings in `data` (a parsed copy of the source file) in place. Returns (done, missing, stale)."""
    ov = overlay(name)
    lang = FILES[name][1]
    done = missing = stale = 0
    for k, box, key, s in list(items(name, data)):
        t = ov.get(k)
        if not t:
            missing += 1
        elif t[0] != h(s):
            stale += 1
        else:
            box[key] = t[1]
            done += 1
    return done, missing, stale


def status():
    bad = 0
    for name in FILES:
        data, _ = load(name)
        d, m, s = apply(name, data)
        ov = overlay(name)
        live = {k for k, *_ in items(name)}
        orphan = len(set(ov) - live)
        print(f'{name:12} translated {d:6}  missing {m:6}  stale {s:4}  orphaned {orphan}')
        bad += m + s
    return bad


def export(out, size):
    out = Path(out); (out / 'in').mkdir(parents=True, exist_ok=True); (out / 'out').mkdir(exist_ok=True)
    for name in FILES:
        ov = overlay(name)
        todo = [(k, s) for k, _, _, s in items(name) if not ov.get(k) or ov[k][0] != h(s)]
        chunk, n, idx = {}, 0, 1
        def flush():
            nonlocal chunk, n, idx
            if chunk:
                (out / 'in' / f'{name}-{idx:02d}.json').write_text(json.dumps(chunk, ensure_ascii=False, indent=1), encoding='utf-8')
                idx += 1; chunk = {}; n = 0
        prev = None
        for k, s in todo:
            top = k.split('/')[1] if '/' in k else k          # keep one KC / primitive / unit together
            if n >= size and top != prev:
                flush()
            chunk[k] = s; n += len(CJK.findall(s)); prev = top
        flush()
        print(name, len(todo), 'strings', idx - 1, 'chunks')


def merge(out):
    out = Path(out); (HERE / 'en').mkdir(exist_ok=True)
    problems = 0
    for name in FILES:
        src = {k: s for k, _, _, s in items(name)}
        ov = overlay(name)
        lang = FILES[name][1]
        for f in sorted((out / 'out').glob(name + '-[0-9][0-9].json')):
            tr = json.loads(f.read_text(encoding='utf-8'))
            want = json.loads((out / 'in' / f.name).read_text(encoding='utf-8'))
            for k in want:
                t = tr.get(k)
                if not isinstance(t, str) or not t.strip():
                    print('MISSING', f.name, k); problems += 1; continue
                if k not in src:
                    continue
                ov[k] = [h(src[k]), t.strip()]
            extra = set(tr) - set(want)
            if extra:
                print('EXTRA keys ignored', f.name, len(extra))
        if ov:
            (HERE / 'en' / (name + '.json')).write_text(json.dumps(ov, ensure_ascii=False, indent=0, sort_keys=True) + '\n', encoding='utf-8')
    return problems


def check_chunk(inp, outp):
    """for translators: python3 strings.py check IN OUT"""
    a = json.loads(Path(inp).read_text(encoding='utf-8')); b = json.loads(Path(outp).read_text(encoding='utf-8'))
    bad = [k for k in a if not isinstance(b.get(k), str) or not b[k].strip()]
    extra = [k for k in b if k not in a]
    ids = re.compile(r'(?:kt|prim|ped):[A-Za-z0-9_-]+')
    lost = [k for k in a if k in b and isinstance(b[k], str) and set(ids.findall(a[k])) - set(ids.findall(b[k]))]
    lang = Path(inp).name.split('-')[1] if Path(inp).name.split('-')[0] in ('kcs', 'map', 'path', 'tracks') else None
    cjk = [k for k in a if k in b and isinstance(b[k], str) and CJK.search(b[k]) and not CJK.search(re.sub(r'[぀-ヿ]', '', '')) ]
    print(f'{Path(outp).name}: {len(a)} strings, missing {len(bad)}, extra {len(extra)}, ids lost {len(lost)}')
    for k in bad[:20]: print('  missing', k)
    for k in lost[:20]: print('  id lost', k)
    if lang in (None, 'en'):
        left = [k for k in a if k in b and isinstance(b[k], str) and CJK.search(b[k])]
        print(f'  strings still containing Chinese characters: {len(left)} (expected 0 unless a Chinese/Japanese form is being cited)')
        for k in left[:15]: print('   ', k, '=>', b[k][:80])
    return 1 if bad or extra or lost else 0


if __name__ == '__main__':
    cmd = sys.argv[1] if len(sys.argv) > 1 else 'status'
    if cmd == 'status': status()
    elif cmd == 'export': export(sys.argv[2], int(sys.argv[3]) if len(sys.argv) > 3 else 9000)
    elif cmd == 'merge': sys.exit(1 if merge(sys.argv[2]) else 0)
    elif cmd == 'check': sys.exit(check_chunk(sys.argv[2], sys.argv[3]))
