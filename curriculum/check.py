"""Validate a language's course knowledge base against curriculum/SCHEMA.md.

Usage: python3 curriculum/check.py en [--allow-missing-content]
Exits non-zero with a list of every violation; prints warnings that need editorial review.
"""
import re
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from build import assemble, level_scale  # noqa: E402

COMPONENTS = {'grammatical', 'lexical', 'topic', 'phonological', 'orthographic', 'functional', 'discourse',
              'sociolinguistic', 'strategic', 'activity'}
SCHEMA = (Path(__file__).resolve().parent / 'SCHEMA.md').read_text()


def vocabulary(heading):
    block = SCHEMA.split(heading, 1)[1].split('\n\n', 2)[1]
    return {w.strip() for w in block.split('·')}


NOTIONS = vocabulary('### notions：意义类别（跨语言接口）')
ITEM_TYPES = vocabulary('### itemTypes')


def check(lang, allow_missing_content=False):
    g = assemble(lang)
    LEVELS = level_scale(g['path'])[1]
    errors, warnings = [], []
    kcs = {k['id']: k for k in g['kcs']}
    units = {u['id']: u for u in g['sourceUnits']}
    if len(kcs) != len(g['kcs']):
        errors.append('duplicate KC ids')
    if len(units) != len(g['sourceUnits']):
        errors.append('duplicate source unit ids')

    # 1. exhaustive: every source unit is mapped to at least one KC
    for u in g['sourceUnits']:
        if not u['kcIds']:
            errors.append(f"unmapped source unit {u['id']} ({u['label']})")
        if u['sourceId'] not in {s['id'] for s in g['sources']}:
            errors.append(f"source unit {u['id']} cites unknown source {u['sourceId']}")
        if not u.get('locator'):
            errors.append(f"source unit {u['id']} has no locator")
        if u['origin'] == 'supplement' and not u.get('rationale'):
            errors.append(f"supplement unit {u['id']} has no rationale")

    # 2. path: every KC introduced exactly once, in the unit it declares
    order = {}
    for pu in g['path']['units']:
        for kid in pu['kcs']:
            if kid in order:
                errors.append(f'{kid} introduced twice in path')
            order[kid] = len(order)
            if kid not in kcs:
                errors.append(f"path unit {pu['id']} lists unknown KC {kid}")
            elif kcs[kid]['unit'] != pu['id'] or kcs[kid]['section'] != pu['section']:
                errors.append(f'{kid} unit/section disagrees with path')
    for kid in kcs:
        if kid not in order:
            errors.append(f'{kid} missing from path')
    sections = [s['id'] for s in g['path']['sections']]
    if sections != sorted(sections, key=LEVELS.index):
        errors.append('path sections out of CEFR order')

    # 3. KC fields and prerequisites
    for kid, k in kcs.items():
        if not re.fullmatch(rf'kt:{lang}-[a-z0-9]+(?:-[a-z0-9]+)*', kid):
            errors.append(f'bad id {kid}')
        if k['component'] not in COMPONENTS:
            errors.append(f"{kid}: unknown component {k['component']}")
        for n in k['notions']:
            if n not in NOTIONS:
                errors.append(f'{kid}: notion {n} not in SCHEMA vocabulary')
        if not k['sourceUnits']:
            errors.append(f'{kid}: no source units')
        for uid in k['sourceUnits']:
            if uid not in units:
                errors.append(f'{kid}: unknown source unit {uid}')
        for c in k['citations']:
            if not c.get('locator'):
                errors.append(f'{kid}: citation without locator')
        for p in k['prerequisites']:
            if p['id'] not in kcs:
                errors.append(f"{kid}: unknown prerequisite {p['id']}")
            elif p['id'] == kid:
                errors.append(f'{kid}: self prerequisite')
            elif p['strength'] == 'required' and order.get(p['id'], 0) > order.get(kid, 0):
                errors.append(f"{kid}: required prerequisite {p['id']} comes later in the path")
            elif p['strength'] == 'helpful' and order.get(p['id'], 0) > order.get(kid, 0):
                warnings.append(f"{kid}: helpful prerequisite {p['id']} comes later in the path")
            if p['strength'] not in ('required', 'helpful'):
                errors.append(f"{kid}: bad prerequisite strength {p['strength']}")
        placed = [l['level'] for l in k['levels'] if l['basis'] == 'framework_placement']
        if placed and not k.get('placementNote') and LEVELS.index(k['section']) < LEVELS.index(min(placed, key=LEVELS.index)):
            warnings.append(f"{kid}: introduced at {k['section']} but source places it at {min(placed, key=LEVELS.index)}")
        if placed and not k.get('placementNote') and LEVELS.index(k['section']) > LEVELS.index(min(placed, key=LEVELS.index)) + 1:
            warnings.append(f"{kid}: introduced at {k['section']}, more than one level after source placement {min(placed, key=LEVELS.index)}")

        # 4. teaching content
        missing = []
        if not k.get('description'): missing.append('description')
        if not k.get('forms'): missing.append('forms')
        if len(k.get('examples', [])) < 2: missing.append('examples>=2')
        if len(k.get('mastery', [])) < 2: missing.append('mastery>=2')
        if not k.get('itemTypes'): missing.append('itemTypes')
        if not k.get('boundaries'): missing.append('boundaries')
        if missing:
            (warnings if allow_missing_content else errors).append(f"{kid}: missing {', '.join(missing)}")
        for t in k.get('itemTypes', []):
            if t not in ITEM_TYPES:
                errors.append(f'{kid}: itemType {t} not in SCHEMA vocabulary')
        for ex in k.get('examples', []):
            gloss = 'en' if lang == 'zh' else 'zh'
            if not (isinstance(ex, dict) and ex.get(lang) and ex.get(gloss)):
                errors.append(f'{kid}: example must have {lang} and {gloss}')

    # 5. course tracks: alternative orderings for learner profiles must be coherent on their own
    for t in g['tracks']:
        assumed = {k for k in kcs if t.get('assumes') and LEVELS.index(kcs[k]['section']) <= LEVELS.index(t['assumes'])}
        seen = set(assumed)
        for st in t['stages']:
            for kid in st['kcs']:
                if kid not in kcs:
                    errors.append(f"track {t['id']}: unknown KC {kid}")
                    continue
                if kid in seen:
                    errors.append(f"track {t['id']}: {kid} listed twice or already assumed")
                for p in kcs[kid]['prerequisites']:
                    if p['strength'] == 'required' and p['id'] not in seen:
                        errors.append(f"track {t['id']}: {kid} needs {p['id']} earlier in the track")
                seen.add(kid)
        for f in ('learner', 'goal', 'entry', 'adapt'):
            if not t.get(f):
                errors.append(f"track {t['id']}: missing {f}")
    return g, errors, warnings


if __name__ == '__main__':
    lang = next((a for a in sys.argv[1:] if not a.startswith('--')), 'en')
    graph, errors, warnings = check(lang, '--allow-missing-content' in sys.argv)
    for w in warnings:
        print('WARN ', w)
    for e in errors:
        print('ERROR', e)
    s = graph['stats']
    print(f"{lang}: {s['kcs']} KCs, {s['sourceUnitsMapped']}/{s['sourceUnits']} source units mapped, "
          f"{s['requiredEdges']} required + {s['helpfulEdges']} helpful prerequisites, "
          f"{s['contentComplete']} KCs with content; {len(errors)} errors, {len(warnings)} warnings")
    sys.exit(1 if errors else 0)
