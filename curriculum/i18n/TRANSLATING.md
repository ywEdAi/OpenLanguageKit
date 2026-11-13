# Translating OpenLanguageKit course content: Chinese → English

You translate one chunk: a JSON object `{ "<path>": "<Chinese string>" }` in `curriculum/i18n/work/in/<chunk>.json`. Write `curriculum/i18n/work/out/<chunk>.json` with exactly the same keys and the English string as each value. Nothing else in the file.

The material is a knowledge base for people who build language-learning apps and for teachers: knowledge points (KCs) for three courses — English (`kcs-en`, for Chinese-speaking learners), Japanese (`kcs-ja`) and Chinese as a second language (`kcs-zh`) — plus design contracts for practice activities (`primitives`), the per-KC binding of an activity (`map-*`), learning-path units (`path-*`) and course tracks (`tracks-*`). The path tells you the field: `label` (short title), `description`, `forms/N` (pattern lines), `mastery/N` (can-do criteria), `commonErrors/N`, `boundaries/N` (what is out of scope / where else it is covered), `examples/N/zh` (a gloss of an example sentence), `binding`, `goal`, `rationale`, and for primitives `learnerAction`, `systemResponse`, `ui/*`, `trigger/*`, `check/*`, `evidence/*`, `scaffold/*`, `failureModes/*`, etc.

## Rules
1. **Faithful, complete, plain.** Same content, same level of detail, same caveats. No additions, no summarising, no marketing tone. Match the terseness: a label stays a label (Title-less sentence case, no final period), list lines stay one line.
2. **Translate only the instruction language.** Chinese that explains → English. Material in the language being taught stays exactly as written:
   - English course: English words, patterns, starred errors (`*in Monday`) stay as they are.
   - Japanese course: all Japanese (kana, kanji words, patterns like Vますか, 〜てください) stays untouched. Chinese glosses of Japanese words become English glosses.
   - Chinese course: the Chinese words/sentences/patterns being taught stay in Chinese characters (e.g. `"会"表示…（会游泳、会开车）` → `会 expresses a learned skill (会游泳, 会开车)`). You may add pinyin or a short English gloss in parentheses the first time a cited form appears in a string if it helps an English-speaking reader, but never replace the characters. Starred wrong sentences stay in Chinese.
   - `examples/N/zh` in the Japanese course is a Chinese translation of a Japanese sentence: give a natural English translation of the sentence's meaning.
3. **Keep every identifier and symbol byte-for-byte**: `kt:…`, `prim:…`, `ped:…` ids, unit ids (`a1-08`), field names in backticks, IPA, `*` error stars, `／` alternatives, arrows, numbers, percentages, level names (A1, N5, HSK), brand/source titles (《いろどり》 keep the original title). Chinese level names in the Chinese course: 一级…九级 → "Level 1" … "Level 9"; 初等/中等/高等 → elementary/intermediate/advanced.
4. **Learner references**: the English course is written for Chinese-speaking learners; keep that ("Chinese-speaking learners often…", "Mandarin has no …"). 母语 = first language (L1). 传承/继承语 learner = heritage learner.
5. Punctuation: English punctuation and straight quotes; keep Japanese/Chinese punctuation inside cited target-language material.
6. If a source string looks wrong or ambiguous, translate what it says and mention the key in your final report; don't fix it.

## Glossary (use consistently)
知识点 knowledge point (KC) · 教学原语 / 原语 pedagogical primitive / primitive · 积木 block · 学习路径 learning path · 课程方案 track · 单元 unit · 先修 prerequisite · 来源单元 source unit · 证据 evidence · 首次作答 first attempt · 提示 hint · 提示后完成 completed after a hint (assisted) · 独立完成 independent · 支架 scaffold · 撤除/淡出 fade · 反向那一半 the reverse half · 载体 the object (the thing on screen the learner acts on) · 语块 chunk · 搭配 collocation · 语域 register · 得体 appropriate / appropriacy · 语篇 discourse · 篇章 text · 指代 reference · 听辨 discriminate (by ear) · 拼读 blending / decoding · 认读 recognise and read aloud · 听写 dictation · 跟读 shadowing · 最小对立 minimal pair / minimal contrast · 声调 tone · 变调 tone sandhi · 声母/韵母 initial / final · 部件 component (of a character) · 声旁/形旁 phonetic / semantic component · 多音字 character with more than one reading · 量词 classifier (measure word) · 助词 particle · 假名 kana · 拍 mora · 敬语 keigo (honorific language) · 授受 giving and receiving verbs · 文型 sentence pattern · 体/体貌 aspect · 能做到 can-do · 能… (in mastery lines) "Can …" · 不纳入/不涵盖 not covered here · 见 kt:… see kt:… · 学习者 learner · 家长 parent · 课堂 classroom · 易错 common error · 口语/书面语 spoken / written · 真人录音 human recording · 合成语音 synthetic speech (TTS).
Say "AI", not "agent".

## Check before you finish
Run: `python3 curriculum/i18n/strings.py check <in file> <out file>` (from the repository root) — it must report missing 0, extra 0, ids lost 0. For `kcs-en`, `map-en`, `path-en`, `tracks-en` and `primitives` chunks it also lists strings that still contain Chinese characters: each of those must be a deliberate citation of a Chinese/Japanese form, not leftover untranslated text.

## Workflow

```sh
python3 curriculum/i18n/strings.py export curriculum/i18n/work   # untranslated or stale strings -> work/in/<name>-NN.json
# translate each work/in/X.json into work/out/X.json, checking each pair as you go
python3 curriculum/i18n/strings.py merge curriculum/i18n/work    # -> curriculum/i18n/en/<name>.json
python3 curriculum/i18n/strings.py status                        # every file should show missing 0, stale 0
```

`work/` is scratch space and is not committed. Only `curriculum/i18n/en/*.json` is. Each entry there is `"<path>": ["<hash of the Chinese string>", "<English>"]`; when the Chinese source changes, the entry shows up as stale and is exported again. The Chinese files stay the source; never edit them as part of translating.
