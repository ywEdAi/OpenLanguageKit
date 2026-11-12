# Course knowledge base contract (schema v2)

> English translation of [SCHEMA.md](SCHEMA.md). The Chinese file is the one the validators read; if the two differ, the Chinese file wins.

This directory builds, for each language, a **knowledge base that can be used directly as a course backbone**. Taking English alone, it should answer three questions:

1. Which knowledge points must be mastered to learn English (A1–C1)? Is anything missing?
2. What is learned first, what later, and why?
3. How do you tell that a knowledge point has been learned?

Its purpose is to serve as the knowledge tracing benchmark for a course: a product adjusts the path in real time according to learner performance, but the adjustment needs a reference. This directory provides that reference. Cross-language comparison comes later; the `notions` field on each knowledge point is the interface reserved for it.

The v1 graph and prototype under `content/` are left untouched, as legacy data and a source reference.

## Three layers and the "nothing missing" guarantee

```
来源单元（分母） ──映射──▶ 知识点 KC ──编排──▶ 学习路径（级别 → 单元 → KC 顺序）
source-units.json         kcs.json               path.json
```

Reading the diagram: source units (the denominator) ──mapped to──▶ knowledge points (KCs) ──arranged into──▶ the learning path (level → unit → KC order).

**Source units** are the denominator for completeness. They exist before the knowledge points and must not be back-filled afterwards from generated nodes. The English denominator is:

| Source | Units | Notes |
| --- | ---: | --- |
| Core Inventory Appendix E | 269 | Numbered items 1–203 × level, taken item by item from the PDF |
| Items found only in the overview table / scenarios | 4 | Not listed separately in Appendix E, but present in the overview table on page 6 or in Appendix B |
| Rows found only in Appendix D | 4 | The level shading could not be read; `level: null` |
| The five CEFR scenarios in Appendix B | 51 | Strategic competence, functions and grammar in the scenario, listening / speaking / reading / writing activities |
| Appendix C text types | 56 | 33 written + 23 spoken |
| Supplementary categories `sup:*` | 15 | Parts not listed in the Core Inventory but included in CEFR linguistic competence: alphabet, spelling, punctuation, segments, prosody, connected speech, inflectional morphology, syntax, word formation, politeness conventions, accent varieties, mediation |
| Audit supplements `sup:*` (group `audit-2026-11`) | 20 | Category-level gaps found by the audit that planned courses for six types of learner: Threshold 1990 communicative themes and CEFR domains, social / attitudinal / suasive functions, phonics and handwriting, phonemic awareness and phonetic symbols, Pre-A1 activities for young children, gap-filling for reference and sentence patterns. See `en/EVALUATION.md` |

`check.py` requires every source unit to map to at least one knowledge point. A knowledge point may be finer than a source item (for example, splitting "Past simple" into regular forms, irregular past forms, the pronunciation of -ed, and did questions), but a source item must not be dropped or merged out of sight.

## Knowledge points (KCs)

A knowledge point is the smallest unit that **can be taught on its own, tested on its own, and have its mastery tracked on its own**.

| Field | Meaning |
| --- | --- |
| `id` | Stable ID `kt:en-<slug>`. Corresponding v1 nodes are recorded in `legacyIds` |
| `label` / `term` | Chinese name / the term or representative form in the target language (English terms for English, Japanese terms for Japanese) |
| `component` | Which kind of language competence it belongs to; see the table below. The ten kinds are mutually exclusive |
| `unit` / `section` | The unit and level where it is first introduced in the default path |
| `sourceUnits` | The source units it maps to |
| `levels` | The level basis derived from the source units: `framework_placement` (the Core Inventory's teaching position) or `editorial_estimate` (an editorial estimate for supplementary knowledge points) |
| `placementNote` | Required, with a stated reason, when the level of introduction in the default path differs from the source level |
| `prerequisites` | Prerequisites. `required` means this knowledge point cannot be correctly understood or produced without it; `helpful` means it helps but is not necessary |
| `notions` | The meaning categories this knowledge point expresses (controlled vocabulary, see below). The interface for cross-language comparison |
| `description` | What it is and what meaning it expresses (in Chinese) |
| `forms` | Form patterns or representative language items. Lexical knowledge points give examples of core words and do not aim at dictionary-style exhaustiveness |
| `examples` | Original example sentences, `{<language code>, zh}`: for English `{en, zh}`, for Japanese `{ja, reading, zh}` (`reading` is the kana reading, optional), for Chinese `{zh, reading, en}` (`reading` is pinyin, `en` is the English gloss) |
| `mastery` | Observable mastery criteria, progressing through "recognition → controlled production → situated use" |
| `itemTypes` | Item types suited to testing this knowledge point (controlled vocabulary) |
| `commonErrors` | Common errors, including typical transfer errors of native Chinese speakers |
| `boundaries` | What is not included, and which knowledge point it is easily confused with |
| `examLevels` | Optional. Editorial estimates of exam levels, e.g. for Japanese `[{"scheme": "JLPT", "level": "N4"}]`; always `editorial_estimate` |
| `citations` | Generated automatically from `sourceUnits` and v1 citations, with `locator` and `verification` |

### component: ten kinds of language competence

Based on the CEFR division of communicative language competence (linguistic, sociolinguistic and pragmatic competence), plus strategies and activities:

| Value | Content |
| --- | --- |
| `grammatical` | Morphology and syntax: tense and aspect, modality, sentence patterns, determiners, clauses |
| `lexical` | Lexical sets, collocations, phrasal verbs, word formation |
| `topic` | Topic areas (both a vocabulary domain and a content domain) |
| `phonological` | Segments, stress, intonation, connected speech |
| `orthographic` | Alphabet, spelling, punctuation |
| `functional` | Communicative functions: greeting, requesting, expressing opinions, managing interaction |
| `discourse` | Discourse organisation: connectives, signposting, cohesion |
| `sociolinguistic` | Politeness, register, varieties |
| `strategic` | Strategies such as repair, planning, guessing unknown words |
| `activity` | Task competence in listening, speaking, reading, writing and mediation, with text types and scenarios as the unit |

Listening, speaking, reading and writing are the **dimension of use**. They are recorded in `activity` knowledge points and in `itemTypes`, not used as a parent category above grammar and vocabulary.

### notions: meaning categories (the cross-language interface)

existence · identity-classification · identity · possession · quantity · quality-description · space-location · space-motion · time-location · time-frequency · time-duration · aspect-progress · aspect-completion · sequence · comparison · reference-person · reference-deixis · reference-definiteness · ability · permission · obligation · necessity · possibility-probability · volition-desire · intention-plan · prediction · condition · counterfactual · cause-reason · purpose · result · contrast-concession · addition · reported-speech · evaluation-attitude · emphasis-focus · politeness-register · negation · questioning · directive-request · causation · change-of-state · social-ritual · discourse-organisation · interaction-management

This vocabulary is reserved for bringing in Japanese and Chinese: under the same notion, the knowledge points of different languages are different ways of encoding the same meaning.

### itemTypes

recognize-choice · form-fill · transform · error-correct · order-words · match · listen-discriminate · listen-comprehend · read-comprehend · dictation · read-aloud · translate-zh-target · script-reading · script-writing · situated-production-spoken · situated-production-written · role-play

## Learning path

`path.json` is divided into levels (section, A1–C1) → units (unit) → knowledge point order. Each unit has an observable communicative goal, `goal`, and a reason for being placed where it is, `rationale`.

- Each knowledge point is **introduced only once** in the default path; higher levels covered by its source units are recorded automatically as revisits in `revisitLevels`.
- `required` prerequisites must be placed before the knowledge point; `check.py` checks this.
- The first unit is the entry point: real communication that can be completed without depending on any grammar (letters, sounds, greetings, asking someone to repeat). Every unit after that must explain why it is placed where it is.
- The default path is a reference benchmark, not the only order. The Core Inventory itself says it "does not prescribe a teaching order"; the ordering judgments are this project's editorial design, and their basis is written in each unit's `rationale`.

## Tracks (tracks)

`tracks.json` lays out one course for each learner profile (age, literacy, goal): stages → knowledge point order, stating the learner, the goal, the reason for the entry point and the adaptation notes (`learner` / `goal` / `entry` / `adapt`). A track only selects and reorders; it adds no knowledge points. `assumes` declares that all knowledge points at and below a given level of the main path are taken as already mastered.

`check.py` checks each track separately: `required` prerequisites must appear earlier in the same track, or be covered by `assumes`. That the default path can be sequenced does not mean a different order can be. Tracks exist to expose this kind of problem, and also to check for category-level gaps.

## The denominators for Japanese and Chinese

The three languages share one structure: knowledge point fields, the ten components, notions, itemTypes and the validation rules are all the same. But each denominator is taken from the most authoritative sources for that language that were actually obtained in this round. The `verification` field of a source unit records truthfully how far it was checked: `content_checked` means the body text was read, `index_checked` means only the table of contents or headings were read, `unverified` means the source was not obtained and the unit was built from its structure only.

**Japanese** `ja/`: 273 source units, CEFR A1–C1; each knowledge point also carries a JLPT level estimate (`examLevels`, an editorial estimate).

| Source | Units | Verification |
| --- | ---: | --- |
| TUFS 日本語文法 ステップ一覧 | 95 | content_checked (the cards were read one by one in v1) |
| 『いろどり』入門・初級1・初級2・初中級, each lesson | 73 | index_checked (lesson titles and topics read on 2026-11-08) |
| TUFS 日本語発音, table of contents of the practice section | 19 | content_checked |
| JF「文法を楽しく」 special topics | 18 | content_checked / index_checked |
| 城西国際大学 N1 course functional units | 11 | index_checked |
| JLPT N5–N1 reading and listening competence descriptions | 10 | content_checked |
| JF causative / causative-passive teaching materials, TUFS かな | 3 | index_checked / content_checked |
| Supplementary categories `sup:*` | 44 | unverified: intermediate sentence patterns (compound particles, evidentiality, additional aspect items, etc.), graded kanji, written style, use of honorifics (keigo), writing and speaking activities, etc.; each one states its rationale |

Known gaps:
- There is no public itemised list of sentence patterns for the intermediate levels (N3–N2); the supplementary categories cover them by function.
- The official Irodori sentence-pattern Excel file and Can-do checklist have not yet been parsed item by item.

**Chinese** `zh/`: 58 source units. Levels use the "three stages, nine levels" (三等九级) of the *Chinese Proficiency Grading Standards for International Chinese Language Education* (《国际中文教育中文水平等级标准》, GF 0025-2021), declared in `path.json` as `levelScheme: GF0025-2021`; CEFR is not applied.

| Source | Units | Verification |
| --- | ---: | --- |
| The structure of GF 0025-2021: syllables, characters per level, vocabulary per level, the twelve grammar categories, listening / speaking / reading / writing / translation, topics and tasks | 43 | unverified: the body text could not be read from either the Ministry of Education announcement page or chinesetest.cn |
| Supplementary categories `sup:*` | 15 | unverified: social functions, politeness and forms of address, register, sociocultural knowledge, dialects and traditional / simplified characters, mediation, strategies, occupational domains |

The Chinese denominator is the weakest of the three languages:
- It only reaches category level, not the item level of the 572 grammar points.
- Once the original text of the standard's Appendix A is obtained, the `std:g-*` category units should be split into item-level units and `check.py` rerun, to see which grammar points have no knowledge point.

## Boundaries

- A Core Inventory level is "the position most relevant for teaching"; it is not a guarantee of mastery, nor an exam requirement (the original says "Teaching not testing").
- The levels of supplementary knowledge points are editorial estimates.
- The Chinese explanations, example sentences, mastery criteria and common errors are all original content and have not yet been reviewed by teachers or trialled with learners.
- The CEFR Companion Volume 2020 was not obtained in this round (the official PDF returned 403); the level descriptors for listening, speaking, reading, writing and mediation activities still need to be calibrated against it.

## Commands

```sh
python3 curriculum/check.py en   # 也可以是 ja、zh；结构、分母覆盖、先修顺序、内容完整性、课程方案
python3 curriculum/build.py      # 生成 dist/data.js
```

The comments say: `check.py` also accepts `ja` or `zh`, and checks structure, denominator coverage, prerequisite order, content completeness and tracks; `build.py` generates `dist/data.js`.
