# 语言教学原语（Pedagogical Primitives）

知识点回答"要学会什么"，原语回答"学习者对什么对象做什么动作、系统怎样回应、留下什么证据、证据最多能说明什么"。这一层把 `curriculum/{en,ja,zh}` 的知识点接到可复用的教学互动上。

## 三个层次

| 层 | 文件 | 是什么 |
| --- | --- | --- |
| 原语 | `primitives.json` | 跨语言的教学设计契约，规定动作、回应、检查、证据和边界。不是按钮或组件，也不是一节课 |
| 实现 | `implementations[]` | 原语在某种语言里的可运行版本。现有实现是 `edu-ai-builders/language-learning-asset-library` 的英语 asset（`cNN-*`），这里只引用、不复制 |
| 绑定 | `../{lang}/primitive-map.json` | 每个知识点用哪几个原语，以及这一次具体比较什么、用什么材料、检查什么 |

`status` 的取值：

- `implemented-en`：有可运行的英语实现。
- `partial`：现有实现只覆盖一部分，比如只有阅读方向。
- `spec`：只有契约，还没有任何实现。这类原语就是"需要新建"的缺口。

## 原语契约字段

| 字段 | 说明 |
| --- | --- |
| `id` `name` `nameEn` `family` `oneLine` | 标识。`family` 是学习困难所在的领域，见 `families` |
| `difficulty` | 解决的具体困难，写到能观察的程度。不是"语法不好"，而是"读的时候跳过词尾" |
| `object` | 学习者从头到尾持续处理的那个对象：一段录音、一份自己的稿子、一张场景图。整个原语都作用在它上面 |
| `requires` | 进入前学习者必须已有的东西；没有就退到 `fallback` |
| `learnerAction` | 通常三步：①结构摆出来，学习者必须动手改它；②锁定的分类，逐题判断，最后一类是"反向那一半"；③自己产出，被可执行检查卡住 |
| `systemResponse` | 每个动作之后系统改变了什么：载体上的什么东西变了，不是"显示对错" |
| `ui` | `screen`（一屏上有什么、怎么排）、`interactions`（键盘与触屏操作）、`childVariant`、`adultVariant`、`accessibility` |
| `trigger` | `kcSignals`：知识点的哪些特征把它路由到这里；`learnerSignals`：学习者的行为或老师的原话；`contraindications`：什么情况下不该用 |
| `check` | `rules`：可执行的检查，要求两头同时卡（既卡太弱，也卡投机）；`independence`：怎样区分独立完成和看过提示或答案后的完成 |
| `evidence` | `events`：用 asset library 的 evidence-event 词表；`retained`：留在载体上的痕迹；`licensed`：这些证据最多能支持什么判断，形如 `{claim, maxStrength: suspected/tentative/supported, minObservations}`；`prohibited`：不许据此推出的判断 |
| `scaffold` | `hints`：由轻到重的提示阶梯；`fade`：什么时候撤掉支持 |
| `reverseHalf` | 反向那一半：教一个倾向，就要给出它的边界或反例 |
| `failureModes` | `{failure, mitigation, test}`：会怎样失效、怎样防、用什么对抗样例测 |
| `stacksWith` | 纵向叠合：哪些原语可以在同一个对象、同一次操作里一起起作用，以及怎样起作用 |
| `next` `fallback` | 顺下去接哪个；做不动退到哪个（`null` 表示没有更浅的一步） |
| `languages` | `en` `ja` `zh` 各自的参数：对立集合、材料来源、语言特有的陷阱 |

## 绑定文件

`curriculum/{lang}/primitive-map.json`：

```json
{"lang": "ja", "map": [
  {"kc": "kt:ja-wa-ga-contrast", "uses": [
    {"primitive": "prim:choose-by-intent", "role": "primary",
     "binding": "对立集合 は/が；材料是一问一答和民间故事开头；检查新信息位置是否选が、对比句是否选は"}
  ]}
]}
```

- 每个知识点至少一个 `primary`，最多三个原语。
- `binding` 只写这个知识点特有的部分：比较什么、用什么材料、检查什么。原语契约里已经写过的通用内容不要重复。

## 检查

```sh
python3 curriculum/primitives/check.py   # 契约字段、引用、三种语言的绑定覆盖 -> coverage.md
```

## 来源与边界

- 契约形式综合了四处来源：
  - asset library 的 `ontology.md`：三步结构、锁定分类、反向那一半、两头同时卡。
  - asset library 的 `runtime/asset-index.json`：material、signal、next、fallback。
  - EduOS 的 `primitive.yaml`：适用条件、可推出的判断及其最大强度、被禁止的反馈。
  - math-viz-kit 的原语候选写法。
- 这是一套候选的设计语言，不是经过验证的分类，也不声称已有学习效果。
- `spec` 状态的原语没有经过实际学习者使用。
