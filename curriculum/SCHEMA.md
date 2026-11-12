# 课程知识库契约（schema v2）

本目录给每种语言建一套**可以直接当课程骨架用的知识库**。单看英语时，它应当回答三个问题：

1. 学会英语（A1–C1）要掌握哪些知识点？有没有漏？
2. 先学什么、后学什么，为什么？
3. 怎样判断一个知识点学会了？

它的用途是做课程的 knowledge tracing 基准：产品按学习者表现实时调整路径，但调整要有一个参照。本目录提供的就是这个参照。跨语言比较放在之后，每个知识点上的 `notions` 字段是为它预留的接口。

`content/` 下的 v1 图谱和原型保留不动，作为旧数据和来源参考。

## 三层结构与"不漏"的保证

```
来源单元（分母） ──映射──▶ 知识点 KC ──编排──▶ 学习路径（级别 → 单元 → KC 顺序）
source-units.json         kcs.json               path.json
```

**来源单元**是完整性的分母，先于知识点存在，不能事后按生成的节点去凑。英语的分母是：

| 来源 | 单元数 | 说明 |
| --- | ---: | --- |
| Core Inventory 附录 E | 269 | 1–203 编号条目 × 级别，逐条取自 PDF |
| 总览表 / 情景中独有的条目 | 4 | 附录 E 没有单列，但第 6 页总览表或附录 B 有 |
| 附录 D 独有行 | 4 | 级别底纹无法读取，`level: null` |
| 附录 B 五个 CEFR 情景 | 51 | 策略能力、情景中的功能与语法、听说读写活动 |
| 附录 C 文本类型 | 56 | 书面 33 类 + 口头 23 类 |
| 补充类别 `sup:*` | 15 | Core Inventory 未列、但 CEFR 语言能力包含的部分：字母、拼写、标点、音段、韵律、连续语流、屈折形态、句法、构词、礼貌规约、口音变体、中介 |
| 审计补充 `sup:*`（group `audit-2026-11`） | 20 | 按六类学习者排课审计发现的成类缺口：Threshold 1990 交际主题与 CEFR 领域、社交/态度/劝使功能、自然拼读与书写、音素意识与音标、Pre-A1 低龄活动、指代与句型补漏。见 `en/EVALUATION.md` |

`check.py` 要求每个来源单元至少映射到一个知识点。知识点可以比来源条目更细（例如把 "Past simple" 拆成规则变化、不规则过去式、-ed 读音、did 疑问），但不能把一个来源条目丢掉或合并到看不见。

## 知识点（KC）

一个知识点是**可以单独教、单独测、单独追踪掌握度**的最小单位。

| 字段 | 含义 |
| --- | --- |
| `id` | 稳定 ID `kt:en-<slug>`。与 v1 对应的节点记在 `legacyIds` |
| `label` / `term` | 中文名 / 目标语中的术语或代表形式（英语用英文术语，日语用日语术语） |
| `component` | 属于哪类语言能力，见下表。十类互斥 |
| `unit` / `section` | 在默认路径中首次引入的单元与级别 |
| `sourceUnits` | 映射到的来源单元 |
| `levels` | 由来源单元推出的级别依据：`framework_placement`（Core Inventory 的教学位置）或 `editorial_estimate`（补充类知识点的编辑性估计） |
| `placementNote` | 默认路径的引入级别与来源级别不一致时，必须写明理由 |
| `prerequisites` | 先修。`required` 指不掌握它就无法正确理解或产出本知识点；`helpful` 指有帮助但不必须 |
| `notions` | 本知识点表达的意义类别（受控词表，见下）。跨语言比较的接口 |
| `description` | 它是什么、表达什么意义（中文） |
| `forms` | 形式模式或代表性语言项。词汇类给核心词示例，不追求词典式穷举 |
| `examples` | 原创例句，`{<语言代码>, zh}`，如英语 `{en, zh}`、日语 `{ja, reading, zh}`（`reading` 为假名读音，可选）、中文 `{zh, reading, en}`（`reading` 为拼音，`en` 为英文释义） |
| `mastery` | 可观察的掌握标准，按"识别 → 受控产出 → 情境运用"递进 |
| `itemTypes` | 适合测这个知识点的题型（受控词表） |
| `commonErrors` | 常见错误，含中文母语者的典型迁移错误 |
| `boundaries` | 不包括什么、容易和哪个知识点混淆 |
| `examLevels` | 可选。考试等级的编辑性估计，如日语 `[{"scheme": "JLPT", "level": "N4"}]`，一律 `editorial_estimate` |
| `citations` | 由 `sourceUnits` 与 v1 引用自动生成，带 `locator` 和 `verification` |

### component：十类语言能力

依据 CEFR 对交际语言能力的划分（语言能力、社会语言能力、语用能力），再加上策略和活动：

| 值 | 内容 |
| --- | --- |
| `grammatical` | 形态与句法：时体、情态、句型、限定词、从句 |
| `lexical` | 词汇集、搭配、短语动词、构词 |
| `topic` | 话题领域（同时是词汇域和内容域） |
| `phonological` | 音段、重音、语调、连续语流 |
| `orthographic` | 字母、拼写、标点 |
| `functional` | 交际功能：问候、请求、表达观点、互动管理 |
| `discourse` | 语篇组织：连接词、路标、衔接 |
| `sociolinguistic` | 礼貌、语域、变体 |
| `strategic` | 补救、计划、推测生词等策略 |
| `activity` | 听说读写与中介的任务能力，以文本类型和情景为单位 |

听说读写是**运用维度**，记在 `activity` 类知识点和 `itemTypes` 里，不作为语法和词汇的上级分类。

### notions：意义类别（跨语言接口）

existence · identity-classification · identity · possession · quantity · quality-description · space-location · space-motion · time-location · time-frequency · time-duration · aspect-progress · aspect-completion · sequence · comparison · reference-person · reference-deixis · reference-definiteness · ability · permission · obligation · necessity · possibility-probability · volition-desire · intention-plan · prediction · condition · counterfactual · cause-reason · purpose · result · contrast-concession · addition · reported-speech · evaluation-attitude · emphasis-focus · politeness-register · negation · questioning · directive-request · causation · change-of-state · social-ritual · discourse-organisation · interaction-management

这套词表是为日语、中文接入预留的：同一个 notion 下，不同语言的知识点就是同一意义的不同编码方式。

### itemTypes

recognize-choice · form-fill · transform · error-correct · order-words · match · listen-discriminate · listen-comprehend · read-comprehend · dictation · read-aloud · translate-zh-target · script-reading · script-writing · situated-production-spoken · situated-production-written · role-play

## 学习路径

`path.json` 分为级别（section，A1–C1）→ 单元（unit）→ 知识点顺序。每个单元有一个可观察的交际目标 `goal`，以及排在这里的理由 `rationale`。

- 每个知识点在默认路径里**只引入一次**；来源单元覆盖到的更高级别，由 `revisitLevels` 自动记录为复现。
- `required` 先修必须排在本知识点之前，`check.py` 会检查。
- 第一个单元是入口：不依赖任何语法就能完成真实交际（字母、声音、问候、请人重复）。之后每个单元都要说明为什么排在这里。
- 默认路径是参照基准，不是唯一顺序。Core Inventory 自述"不规定教学顺序"；顺序判断是本项目的编辑性设计，依据写在每个单元的 `rationale` 里。

## 课程方案（tracks）

`tracks.json` 为不同学习者画像（年龄、识字情况、目标）各排一套课：阶段 → 知识点顺序，并写明学习者、目标、入口理由和适配说明（`learner` / `goal` / `entry` / `adapt`）。课程方案只做选择和重排，不新增知识点；`assumes` 声明默认已掌握主路径某级别及以下的全部知识点。

`check.py` 对每套方案单独检查：`required` 先修必须在本方案中更早出现，或已被 `assumes` 覆盖。默认路径能排通，并不说明换一种顺序也排得通。课程方案就是用来暴露这类问题的，也用来检查有没有成类的缺口。

## 日语与中文的分母

三种语言共用同一套结构：知识点字段、十类 component、notions、itemTypes 和校验规则都一样。但分母各自取自本语言最权威、本轮实际取得的来源。来源单元的 `verification` 字段如实记录核对程度：`content_checked` 表示读过正文，`index_checked` 表示只读过目录或标题，`unverified` 表示来源未取得、只按结构建立。

**日语** `ja/`：273 个来源单元，CEFR A1–C1，每个知识点另附 JLPT 等级估计（`examLevels`，编辑性估计）。

| 来源 | 单元数 | 核对 |
| --- | ---: | --- |
| TUFS 日本語文法 ステップ一覧 | 95 | content_checked（v1 已逐条读卡片） |
| 『いろどり』入門・初級1・初級2・初中級各课 | 73 | index_checked（2026-11-08 读取课题与话题） |
| TUFS 日本語発音 实践篇目录 | 19 | content_checked |
| JF「文法を楽しく」专题 | 18 | content_checked / index_checked |
| 城西国際大学 N1 课程功能单元 | 11 | index_checked |
| JLPT N5–N1 读、听能力描述 | 10 | content_checked |
| JF 使役 / 使役受身教材、TUFS かな | 3 | index_checked / content_checked |
| 补充类别 `sup:*` | 44 | unverified：中级文型（复合助词、证据性、体貌补充等）、汉字分级、书面语体、敬语运用、写作与口语活动等，每条写明理由 |

已知缺口：
- 中级（N3–N2）没有公开的逐项文型清单，由补充类别按功能覆盖。
- Irodori 官方文型 Excel 与 Can-do 检查表尚未逐项解析。

**中文** `zh/`：58 个来源单元。分级用《国际中文教育中文水平等级标准》（GF 0025-2021）的"三等九级"，`path.json` 中声明为 `levelScheme: GF0025-2021`，不套用 CEFR。

| 来源 | 单元数 | 核对 |
| --- | ---: | --- |
| GF 0025-2021 的结构：音节、各级汉字、各级词汇、语法十二类、听说读写译、话题任务 | 43 | unverified：教育部公告页与 chinesetest.cn 均未能读取正文 |
| 补充类别 `sup:*` | 15 | unverified：社交功能、礼貌与称呼、语体、社会文化、方言与繁简、中介、策略、职业领域 |

中文分母是三种语言中最弱的：
- 只到类别级，没有到 572 个语法点的逐项级。
- 拿到标准附录 A 原文后，应把 `std:g-*` 类别单元拆成逐项单元，重新跑 `check.py`，看哪些语法点没有知识点。

## 边界

- Core Inventory 的级别是"教学最相关的位置"，不是掌握保证，也不是考试要求（原文 "Teaching not testing"）。
- 补充类知识点的级别是编辑性估计。
- 中文说明、例句、掌握标准和常见错误都是原创内容，尚未经过教师审核或学习者试验。
- CEFR Companion Volume 2020 本轮未取得（官方 PDF 返回 403），听说读写与中介活动的分级描述有待用它校准。

## 命令

```sh
python3 curriculum/check.py en   # 也可以是 ja、zh；结构、分母覆盖、先修顺序、内容完整性、课程方案
python3 curriculum/build.py      # 生成 dist/data.js
```
