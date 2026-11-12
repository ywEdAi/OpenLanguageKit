# Pedagogical primitives for language teaching (Pedagogical Primitives)

> English translation of [README.md](README.md). The Chinese file is the source; if the two differ, it wins.

A knowledge point answers "what must be learned"; a primitive answers "what action the learner performs on what object, how the system responds, what evidence is left, and the most that evidence can show". This layer connects the knowledge points of `curriculum/{en,ja,zh}` to reusable teaching interactions.

## Three layers

| Layer | File | What it is |
| --- | --- | --- |
| Primitive | `primitives.json` | A cross-language teaching-design contract that specifies the action, the response, the check, the evidence and the boundaries. It is not a button or a component, and not a lesson |
| Implementation | `implementations[]` | A runnable version of a primitive in one language. The existing implementations are the English assets (`cNN-*`) of `edu-ai-builders/language-learning-asset-library`; they are only referenced here, not copied |
| Binding | `../{lang}/primitive-map.json` | Which primitives each knowledge point uses, and what exactly is compared, what material is used and what is checked this time |

Values of `status`:

- `implemented-en`: there is a runnable English implementation.
- `partial`: the existing implementation covers only part of it, for example only the reading direction.
- `spec`: contract only, with no implementation at all yet. These primitives are the gaps that "need to be built".

## Primitive contract fields

| Field | Description |
| --- | --- |
| `id` `name` `nameEn` `family` `oneLine` | Identification. `family` is the area where the learning difficulty lies; see `families` |
| `difficulty` | The specific difficulty it addresses, written down to something observable. Not "weak grammar" but "skips word endings when reading" |
| `object` | The object the learner keeps working on from start to finish: a recording, a draft of their own, a scene picture. The whole primitive acts on it |
| `requires` | What the learner must already have before entering; without it, fall back to `fallback` |
| `learnerAction` | Usually three steps: (1) a structure is laid out and the learner must change it by hand; (2) locked categories, judged item by item, the last category being "the reverse half"; (3) the learner's own production, held by an executable check |
| `systemResponse` | What the system changes after each action: what changes on the object, not "show right or wrong" |
| `ui` | `screen` (what is on one screen and how it is laid out), `interactions` (keyboard and touch operations), `childVariant`, `adultVariant`, `accessibility` |
| `trigger` | `kcSignals`: which features of a knowledge point route it here; `learnerSignals`: learner behaviour or a teacher's own words; `contraindications`: when it should not be used |
| `check` | `rules`: executable checks, required to hold both ends at once (catching both too-weak answers and gaming); `independence`: how to tell independent completion from completion after seeing a hint or the answer |
| `evidence` | `events`: uses the asset library's evidence-event vocabulary; `retained`: the traces left on the object; `licensed`: the most these pieces of evidence can support, in the form `{claim, maxStrength: suspected/tentative/supported, minObservations}`; `prohibited`: judgments that must not be inferred from them |
| `scaffold` | `hints`: the hint ladder, from light to heavy; `fade`: when support is withdrawn |
| `reverseHalf` | The reverse half: when you teach a tendency, you must give its boundary or counterexamples |
| `failureModes` | `{failure, mitigation, test}`: how it can fail, how to prevent that, and which adversarial cases to test with |
| `stacksWith` | Vertical stacking: which primitives can work together on the same object in the same operation, and how |
| `next` `fallback` | Which one follows next; which one to fall back to when the learner cannot do it (`null` means there is no shallower step) |
| `languages` | Parameters for each of `en` `ja` `zh`: contrast sets, sources of material, language-specific traps |

## Binding files

`curriculum/{lang}/primitive-map.json`:

```json
{"lang": "ja", "map": [
  {"kc": "kt:ja-wa-ga-contrast", "uses": [
    {"primitive": "prim:choose-by-intent", "role": "primary",
     "binding": "对立集合 は/が；材料是一问一答和民间故事开头；检查新信息位置是否选が、对比句是否选は"}
  ]}
]}
```

(The `binding` text in this example reads: "contrast set は/が; the material is question-and-answer pairs and folk-tale openings; check whether が is chosen in the new-information position and は in contrastive sentences".)

- Each knowledge point has at least one `primary` and at most three primitives.
- `binding` states only what is specific to this knowledge point: what is compared, what material is used, what is checked. Do not repeat general content already written in the primitive contract.

## Checks

```sh
python3 curriculum/primitives/check.py   # 契约字段、引用、三种语言的绑定覆盖 -> coverage.md
```

(The comment says: contract fields, references, and binding coverage for the three languages -> coverage.md.)

## Sources and boundaries

- The form of the contract combines four sources:
  - The asset library's `ontology.md`: the three-step structure, locked categories, the reverse half, holding both ends at once.
  - The asset library's `runtime/asset-index.json`: material, signal, next, fallback.
  - EduOS's `primitive.yaml`: conditions of applicability, licensed judgments and their maximum strength, prohibited feedback.
  - The way math-viz-kit writes its primitive candidates.
- This is a candidate design language, not a validated taxonomy, and it does not claim any existing learning effect.
- Primitives with `spec` status have not been used by actual learners.
