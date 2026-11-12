"""Assemble a language's course knowledge base and bundle the viewer.

Usage: python3 curriculum/build.py [lang ...]   (default: every curriculum/<lang>/kcs.json)
Writes curriculum/<lang>/graph.json, curriculum/<lang>/coverage.md and dist/data.js (the bundle a site or app loads).
"""
import json
import sys
from collections import Counter, defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parent
REPO = ROOT.parent
LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']


def read(path):
    return json.loads(Path(path).read_text())


def load(lang):
    base = ROOT / lang
    return {
        'sources': {s['id']: s for s in read(base / 'sources.json')['sources']},
        'units': read(base / 'source-units.json')['units'],
        'kcs': read(base / 'kcs.json')['kcs'],
        'path': read(base / 'path.json'),
        'tracks': read(base / 'tracks.json')['tracks'] if (base / 'tracks.json').exists() else [],
    }


def legacy_citations(lang):
    """Citations inherited from the v1 graph (other than the Core Inventory overview), keyed by legacy node id.
    Snapshot in curriculum/legacy-citations.json; the v1 graph itself lives in the archived KnowledgeTraceGraph repo."""
    snap = ROOT / 'legacy-citations.json'
    return read(snap).get(lang, {}) if snap.exists() else {}


def level_scale(path):
    """(scheme, ordered levels) for a language: CEFR unless path.json declares its own scale."""
    return path.get('levelScheme', 'CEFR'), path.get('levels', LEVELS)


def assemble(lang):
    data = load(lang)
    scheme, scale = level_scale(data['path'])
    units = {u['id']: u for u in data['units']}
    legacy = legacy_citations(lang)
    pmap_path = ROOT / lang / 'primitive-map.json'
    pmap = {e['kc']: e['uses'] for e in json.loads(pmap_path.read_text())['map']} if pmap_path.exists() else {}
    kcs = []
    for kc in data['kcs']:
        kc = dict(kc)
        kc['primitives'] = pmap.get(kc['id'], [])
        citations, levels = [], []
        for uid in kc['sourceUnits']:
            unit = units[uid]
            if unit['origin'] == 'supplement':
                citations.append({'sourceId': unit['sourceId'], 'locator': unit['locator'], 'supportType': 'editorial_synthesis',
                                  'verification': 'unverified', 'note': unit['rationale']})
            else:
                citations.append({'sourceId': unit['sourceId'], 'locator': f"{unit['locator']} · {unit['label']}",
                                  'supportType': 'framework_scope', 'verification': unit.get('verification', 'content_checked'),
                                  'note': '支持该条目属于框架范围及其教学级别；本知识点的说明、例句与掌握标准为原创编辑内容。'})
                if unit['level']:
                    levels.append({'scheme': scheme, 'level': unit['level'], 'basis': 'framework_placement',
                                   'sourceId': unit['sourceId'], 'locator': unit['locator']})
        for lid in kc.get('legacyIds', []):
            for c in legacy.get(lid, []):
                if c['sourceId'] in data['sources'] and c not in citations:
                    citations.append(c)
        seen = set()
        levels = [l for l in levels if not (l['level'] in seen or seen.add(l['level']))]
        levels.sort(key=lambda l: scale.index(l['level']))
        if not levels:
            levels = [{'scheme': scheme, 'level': kc['section'], 'basis': 'editorial_estimate', 'sourceId': None,
                       'locator': f"path.json · {kc['unit']}", 'note': '来源未给出级别，按默认路径位置估计。'}]
        kc['citations'] = citations
        kc['levels'] = levels
        kc['revisitLevels'] = [l['level'] for l in levels if scale.index(l['level']) > scale.index(kc['section'])]
        kcs.append(kc)
    dependents = defaultdict(list)
    for k in kcs:
        for p in k['prerequisites']:
            dependents[p['id']].append({'id': k['id'], 'strength': p['strength']})
    for k in kcs:
        k['dependents'] = dependents[k['id']]
    mapped = defaultdict(list)
    for k in kcs:
        for uid in k['sourceUnits']:
            mapped[uid].append(k['id'])
    for u in data['units']:
        u['kcIds'] = mapped[u['id']]
    stats = {
        'kcs': len(kcs),
        'pathUnits': len(data['path']['units']),
        'sourceUnits': len(data['units']),
        'sourceUnitsMapped': sum(bool(u['kcIds']) for u in data['units']),
        'byComponent': dict(Counter(k['component'] for k in kcs)),
        'bySection': dict(Counter(k['section'] for k in kcs)),
        'byOrigin': dict(Counter(u['origin'] for u in data['units'])),
        'requiredEdges': sum(p['strength'] == 'required' for k in kcs for p in k['prerequisites']),
        'helpfulEdges': sum(p['strength'] == 'helpful' for k in kcs for p in k['prerequisites']),
        'tracks': len(data['tracks']),
        'kcsWithPrimitives': sum(bool(k['primitives']) for k in kcs),
        'contentComplete': sum(bool(k.get('description')) and len(k.get('examples', [])) >= 2 and len(k.get('mastery', [])) >= 2 for k in kcs),
    }
    return {'schemaVersion': 2, 'language': lang, 'stats': stats, 'sources': list(data['sources'].values()),
            'sourceUnits': data['units'], 'path': data['path'], 'tracks': data['tracks'], 'kcs': kcs}


def coverage_markdown(graph):
    by_id = {k['id']: k for k in graph['kcs']}
    s = graph['stats']
    lines = [f"# 课程知识库覆盖核对 · {graph['language']}", '',
             f"来源单元 {s['sourceUnits']} 个，已映射 {s['sourceUnitsMapped']} 个；知识点 {s['kcs']} 个，分布在 {s['pathUnits']} 个路径单元中。", '',
             '本文件由 `curriculum/build.py` 生成，请勿手改。', '',
             '| 来源单元 | 级别 | 类别 | 条目 | 映射到的知识点 |', '| --- | --- | --- | --- | --- |']
    for u in graph['sourceUnits']:
        kcs = '、'.join(f"{by_id[k]['label']}（`{k}`）" for k in u['kcIds']) or '**未映射**'
        cells = [f"`{u['id']}`", u['level'] or '—', u['category'], u['label'], kcs]
        lines.append('| ' + ' | '.join(str(c).replace('|', '\\|') for c in cells) + ' |')
    return '\n'.join(lines) + '\n'


def main(langs):
    bundle = {}
    for lang in langs:
        graph = assemble(lang)
        (ROOT / lang / 'graph.json').write_text(json.dumps(graph, ensure_ascii=False, indent=1) + '\n')
        (ROOT / lang / 'coverage.md').write_text(coverage_markdown(graph))
        bundle[lang] = graph
        print(lang, json.dumps(graph['stats'], ensure_ascii=False))
    text = json.dumps(bundle, ensure_ascii=False)
    text = text.replace('<', '\\u003c').replace('\u2028', '\\u2028').replace('\u2029', '\\u2029')
    (REPO / 'dist').mkdir(exist_ok=True)
    prim_path = ROOT / 'primitives/primitives.json'
    prims = json.loads(prim_path.read_text()) if prim_path.exists() else {'families': {}, 'primitives': []}
    ptext = json.dumps(prims, ensure_ascii=False)
    ptext = ptext.replace('<', '\\u003c').replace('\u2028', '\\u2028').replace('\u2029', '\\u2029')
    atext = json.dumps(asset_library_snapshot(), ensure_ascii=False)
    atext = atext.replace('<', '\\u003c').replace('\u2028', '\\u2028').replace('\u2029', '\\u2029')
    (REPO / 'dist/data.js').write_text('window.CURRICULUM = ' + text + ';\nwindow.PRIMITIVES = ' + ptext +
                                         ';\nwindow.ASSET_LIBRARY = ' + atext + ';\n')


ASSET_LIBRARY = Path.home() / 'Documents/edu-ai-builders/language-learning-asset-library'


def asset_library_snapshot():
    """Id, name and entry page of each asset-library asset. Refreshed from a local checkout when present,
    otherwise read from the committed snapshot so the workspace works without the sibling repo."""
    snap = ROOT / 'primitives/asset-library-index.json'
    src = ASSET_LIBRARY / 'runtime/asset-index.json'
    if src.exists():
        assets = [{k: a.get(k) for k in ('id', 'code', 'zh', 'en', 'group', 'open')}
                  for a in json.loads(src.read_text())['assets']]
        data = {'repo': 'https://github.com/edu-ai-builders/language-learning-asset-library',
                'license': 'MIT', 'assets': assets}
        snap.write_text(json.dumps(data, ensure_ascii=False, indent=1) + '\n')
    return json.loads(snap.read_text()) if snap.exists() else {'repo': None, 'assets': []}


if __name__ == '__main__':
    main(sys.argv[1:] or sorted(p.parent.name for p in ROOT.glob('*/kcs.json')))
