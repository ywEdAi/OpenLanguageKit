# 教学原语覆盖报告

由 `python3 curriculum/primitives/check.py` 生成，不要手改。

每一格是"以它为主要原语的知识点数 / 作为辅助的知识点数"。

| 原语 | 领域 | 状态 | 实现 | en | ja | zh |
| --- | --- | --- | --- | ---: | ---: | ---: |
| 最小对立辨音 `prim:sound-contrast` | 感知与发音 | 部分实现 | `en-sound-contrast`, `ja-sound-contrast`, `zh-sound-contrast` | 5 / 5 | 12 / 4 | 2 / 3 |
| 声调与音高轮廓 `prim:contour-match` | 感知与发音 | 有实现 | `zh-tones`, `ja-pitch` | 3 / 4 | 4 / 0 | 2 / 1 |
| 节奏与停顿跟读 `prim:rhythm-shadow` | 感知与发音 | 有英语实现 | c56 | 3 / 4 | 2 / 8 | 0 / 1 |
| 录下来自己转写 `prim:record-self-transcribe` | 感知与发音 | 有英语实现 | c55 | 1 / 5 | 0 / 1 | 1 / 2 |
| 音形对应拼读 `prim:sound-spelling-blend` | 文字与解码 | 有实现 | `ja-hiragana-grid`, `ja-katakana-grid`, `ja-blend`, `zh-pinyin-grid`, `zh-blend`, `en-alphabet`, `en-phonics`, `en-blend`, `fr-alphabet`, `fr-blend` | 6 / 0 | 5 / 3 | 1 / 1 |
| 字形构件与书写 `prim:character-anatomy` | 文字与解码 | 部分实现 | `zh-hanzi-parts`, `ja-kanji-parts` | 1 / 0 | 2 / 5 | 7 / 3 |
| 注音逐步撤除 `prim:reading-aid-fade` | 文字与解码 | 部分实现 | `ja-reading-aid-fade`, `zh-reading-aid-fade`, `en-reading-aid-fade`, `en-reading-aid-fade-ipa` | 0 / 3 | 0 / 7 | 1 / 3 |
| 拆词与语素族 `prim:word-shape-split` | 文字与解码 | 有英语实现 | c28 | 3 / 2 | 0 / 2 | 1 / 5 |
| 先回想，再对照 `prim:recall-before-reveal` | 词汇与语块 | 部分实现 | c12 | 6 / 9 | 5 / 4 | 9 / 1 |
| 语块采集与搭配 `prim:chunk-harvest` | 词汇与语块 | 有英语实现 | c02, c05 | 5 / 9 | 1 / 4 | 5 / 6 |
| 用法边界裁判 `prim:usage-boundary` | 词汇与语块 | 有英语实现 | c04 | 18 / 26 | 13 / 20 | 4 / 33 |
| 场景词群走一遍 `prim:scene-walkthrough` | 词汇与语块 | 有英语实现 | c06 | 15 / 11 | 6 / 5 | 4 / 3 |
| 计量方式：量词与可数性 `prim:classifier-match` | 词汇与语块 | 部分实现 | `en-classifier-match`, `ja-classifier-match`, `zh-classifier-match` | 6 / 2 | 1 / 1 | 2 / 1 |
| 语境猜词与查跳 `prim:context-guess` | 词汇与语块 | 有英语实现 | c26, c27 | 2 / 0 | 1 / 1 | 2 / 4 |
| 意义靠形式 `prim:form-for-meaning` | 语法形式 | 有英语实现 | c13 | 9 / 30 | 21 / 23 | 19 / 8 |
| 变形规则用于新词 `prim:paradigm-apply` | 语法形式 | 部分实现 | `ja-paradigm-apply-masu`, `ja-paradigm-apply-te`, `ja-paradigm-apply-ta`, `ja-paradigm-apply-nai`, `ja-paradigm-apply-adj`, `en-paradigm-apply-plural`, `en-paradigm-apply-third`, `en-paradigm-apply-past`, `en-paradigm-apply-ing`, `en-paradigm-apply-comp`, `en-paradigm-apply-wug`, `zh-paradigm-apply-vredup`, `zh-paradigm-apply-aredup`, `zh-paradigm-apply-anota` | 24 / 14 | 60 / 28 | 3 / 2 |
| 对立形式按意图选择 `prim:choose-by-intent` | 语法形式 | 有英语实现 | c14, c15, c20 | 51 / 29 | 61 / 47 | 28 / 22 |
| 语序槽位 `prim:slot-order` | 语法形式 | 部分实现 | `en-slot-order`, `ja-slot-order`, `zh-slot-order` | 7 / 3 | 10 / 2 | 16 / 6 |
| 格与语义角色标记 `prim:role-marking` | 语法形式 | 部分实现 | `en-role-marking`, `ja-role-marking`, `zh-role-marking` | 2 / 1 | 19 / 14 | 7 / 3 |
| 时间轴上的时与体 `prim:aspect-timeline` | 语法形式 | 部分实现 | c35 | 12 / 17 | 12 / 21 | 7 / 8 |
| 修饰挂在哪儿 `prim:attach-position` | 语法形式 | 有英语实现 | c18, c21 | 9 / 3 | 6 / 2 | 2 / 1 |
| 句子组合与拆分 `prim:combine-unpack` | 句子与篇章 | 有英语实现 | c16, c19, c44, c59 | 13 / 9 | 5 / 8 | 8 / 6 |
| 削到主干 `prim:strip-skeleton` | 句子与篇章 | 有英语实现 | c22, c29, c30 | 5 / 4 | 2 / 5 | 3 / 3 |
| 指代与同指链 `prim:reference-chain` | 句子与篇章 | 有英语实现 | c23, c24 | 1 / 4 | 1 / 3 | 0 / 1 |
| 篇章功能与形状 `prim:discourse-map` | 句子与篇章 | 有英语实现 | c25, c32 | 10 / 15 | 2 / 12 | 6 / 4 |
| 预测下一步 `prim:predict-next` | 句子与篇章 | 有英语实现 | c33, c49, `en-story-frames`, `zh-story-frames` | 1 / 8 | 3 / 13 | 0 / 9 |
| 来源、立场与确定度 `prim:source-stance` | 句子与篇章 | 有英语实现 | c31, c34, c53 | 9 / 4 | 4 / 7 | 3 / 9 |
| 听到的与原文对齐 `prim:transcript-diff` | 听取信息 | 有英语实现 | c47, c50 | 4 / 3 | 1 / 5 | 4 / 1 |
| 听取数字与关键信息 `prim:listen-for-data` | 听取信息 | 有英语实现 | c51, c48 | 5 / 11 | 2 / 8 | 3 / 6 |
| 听指令做动作 `prim:listen-and-do` | 听取信息 | 部分实现 | `en-listen-and-do`, `ja-listen-and-do`, `zh-listen-and-do` | 3 / 10 | 0 / 4 | 2 / 6 |
| 交际回合与分支 `prim:exchange-script` | 交际与得体 | 部分实现 | `en-exchange-script`, `ja-exchange-script`, `zh-exchange-script` | 34 / 19 | 36 / 24 | 16 / 11 |
| 语域与礼貌校准 `prim:register-calibrate` | 交际与得体 | 部分实现 | c17, c42 | 16 / 31 | 17 / 30 | 5 / 17 |
| 信息差提问 `prim:info-gap` | 交际与得体 | 有英语实现 | c58 | 3 / 16 | 0 / 6 | 1 / 4 |
| 文化情境判读 `prim:culture-incident` | 交际与得体 | 部分实现 | `en-culture-incident`, `ja-culture-incident`, `zh-culture-incident` | 2 / 4 | 3 / 14 | 2 / 4 |
| 先写再对照 `prim:attempt-then-compare` | 产出与修改 | 有英语实现 | c37 | 2 / 14 | 4 / 6 | 0 / 6 |
| 一次改一类 `prim:one-fix-revision` | 产出与修改 | 有英语实现 | c36, c40 | 2 / 6 | 0 / 5 | 1 / 5 |
| 看图描述与核对 `prim:picture-describe` | 产出与修改 | 部分实现 | `en-picture-talk`, `zh-picture-talk` | 5 / 9 | 2 / 2 | 3 / 2 |
| 排序与复述 `prim:sequence-retell` | 产出与修改 | 部分实现 | `en-story-frames`, `zh-story-frames` | 3 / 3 | 4 / 1 | 4 / 1 |
| 扩展成段 `prim:grow-text` | 产出与修改 | 有英语实现 | c38, c46, c39, c45 | 6 / 6 | 1 / 5 | 1 / 3 |
| 换个情境再用 `prim:carry-across` | 迁移 | 有英语实现 | c57 | 2 / 1 | 6 / 2 | 0 / 4 |
| 真实单据扫读 `prim:real-document-scan` | 迁移 | 部分实现 | `en-real-document-scan`, `ja-real-document-scan`, `zh-real-document-scan` | 5 / 5 | 4 / 12 | 2 / 3 |
| 梯度定位 `prim:scale-place` | 语法形式 | 部分实现 | c34, c17 | 15 / 3 | 6 / 5 | 3 / 0 |
| 视点与方向 `prim:viewpoint-direction` | 语法形式 | 部分实现 | `en-viewpoint-direction`, `ja-viewpoint-direction`, `zh-viewpoint-direction` | 2 / 1 | 6 / 7 | 3 / 0 |
| 后句限制核对 `prim:clause-constraint` | 语法形式 | 部分实现 | `en-clause-constraint`, `ja-clause-constraint`, `zh-clause-constraint` | 3 / 1 | 18 / 2 | 5 / 0 |
| 口语词连到文字 `prim:oral-to-print` | 文字与解码 | 部分实现 | `zh-oral-to-print`, `en-oral-to-print` | 0 / 2 | 0 / 0 | 1 / 0 |
| 音素意识游戏 `prim:oral-sound-play` | 感知与发音 | 部分实现 | `en-oral-sound-play`, `ja-oral-sound-play`, `zh-oral-sound-play` | 1 / 0 | 0 / 1 | 0 / 1 |
| 读音选择 `prim:reading-select` | 文字与解码 | 部分实现 | `ja-reading-select`, `zh-reading-select` | 0 / 0 | 6 / 1 | 0 / 2 |
| 同形异义核对 `prim:false-friend-check` | 词汇与语块 | 部分实现 | `ja-false-friend-check`, `en-false-friend-check` | 1 / 0 | 2 / 9 | 0 / 0 |
| 翻译与中介对齐 `prim:cross-language-align` | 迁移 | 部分实现 | `en-cross-language-align`, `zh-cross-language-align`, `ja-cross-language-align` | 1 / 0 | 1 / 0 | 2 / 0 |
| 数位体系转换 `prim:number-system-map` | 词汇与语块 | 部分实现 | `en-number-system-map`, `zh-number-system-map` | 1 / 1 | 0 / 0 | 1 / 0 |
| 变体对照 `prim:variety-map` | 交际与得体 | 部分实现 | `en-variety-map`, `ja-variety-map`, `zh-variety-map` | 1 / 1 | 2 / 1 | 1 / 0 |
| 字面与言外之意 `prim:figurative-decode` | 句子与篇章 | 部分实现 | `en-figurative-decode`, `zh-figurative-decode`, `ja-figurative-decode` | 2 / 2 | 2 / 1 | 4 / 0 |
| 词典义项选择 `prim:entry-sense-pick` | 词汇与语块 | 部分实现 | `en-entry-sense-pick`, `zh-entry-sense-pick` | 1 / 0 | 0 / 0 | 0 / 1 |
| 输入法转换 `prim:ime-convert` | 文字与解码 | 部分实现 | `ja-ime-convert`, `zh-ime-convert` | 0 / 0 | 1 / 0 | 0 / 1 |
| 会话修复与接应 `prim:repair-and-backchannel` | 交际与得体 | 部分实现 | `en-repair-and-backchannel`, `ja-repair-and-backchannel`, `zh-repair-and-backchannel` | 4 / 0 | 2 / 0 | 2 / 0 |
| 按真实格式填写 `prim:template-write` | 产出与修改 | 部分实现 | `en-template-write`, `ja-template-write`, `zh-template-write` | 2 / 0 | 2 / 0 | 2 / 0 |

## 缺口：主要原语还没有任何实现的知识点

这些知识点的核心困难落在只有契约的原语上，是新建实现的优先清单。

### en：0 / 353 个知识点


### ja：0 / 386 个知识点


### zh：0 / 211 个知识点


## 绑定时发现的、现有原语都不太合适的知识点

- en · 考虑听者效果来计划表达（`kt:en-str-plan`）：按听众预先规划内容与顺序；register-calibrate 只调措辞，attempt-then-compare 只事后对照，新增原语中也没有面向听众画像的规划 建议：audience-plan：给定听众画像，先排信息顺序与术语取舍，再由“听众”提问检验哪里跟不上
- ja · 竖排与原稿纸格式（`kt:ja-orth-genkou`）：原稿纸格式是版面规则（每格一字、段首空格、标点与拗促音占格），real-document-scan 只是查找，没有‘按版面规则排版并被逐格核对’的原语 建议：新原语 layout-grid：在格子版面上排文字，系统逐格核对占格规则（也可用于竖排、书法格、汉字田字格）
- ja · 问候的身体语言与场合（`kt:ja-soc-bowing-etiquette`）：鞠躬深浅与时机是身体动作，现有原语都以语言输出为证据，culture-incident 只能判读不能练动作 建议：新原语 gesture-match：看场景选出或摆出合适的非语言动作（鞠躬角度、递名片方式），由场景规则核对
