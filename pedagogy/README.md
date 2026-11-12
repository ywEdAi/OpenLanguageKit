# 语言学习 pedagogy 与 learning sciences 图谱

这份初版帮助设计者查明一项教学选择依赖什么主张、有什么证据、在哪些条件下不能外推。语言内容由同工作区的 `content/` 管理。本目录只保存教学与学习研究，不把语篇关系、语法知识和学习理论合并成一种节点。

`graph.json` 是数据入口。`evaluation.md` 记录科学边界、schema 取舍与独立审核。`content-links.json` 保存等待确认的内容匹配。`validate.py` 用 Python 标准库检查结构。`decisions.tsv` 保存本次研究的关键决定。

## 初版覆盖范围

图谱覆盖输入、注意、noticing、输出、互动、反馈、检索练习、间隔、迁移、技能习得，以及显性与隐性知识、陈述与程序记忆模型。Krashen i+1、Vygotsky 最近发展区和 scaffolding 分别建模。来源以原作者文献、出版社页面、大学存档与官方研究索引为主。核实日期为 2026-11-07。

这是有选择的研究起点。它没有做系统综述、效应量汇总或理论排名。某条来源可核实，不表示该来源的全部结论获得共识。`sources[].access` 说明本次读到正文相关段落、摘要还是书目记录。

## 数据契约

顶层保持 `schemaVersion: 1`、`nodes` 和 `edges`。节点 ID 使用稳定的 `ped:` 命名空间。已公开的 ID 不随中文标签变化。

| 字段 | 含义 |
| --- | --- |
| `kind` | `theory`、`hypothesis`、`effect`、`practice` 或 `mechanism`。类型不表示证据强弱。 |
| `subtype` | 必要时保留知识构念、结果构念等细分，避免把构念误读成已证实的因果机制。 |
| `evidenceStatus` | 有限的编辑性证据状态。定义在 `evidenceStatusDefinitions`，不是 GRADE 评级或自动评分。 |
| `description` | 该节点具体指什么。理论主张使用“提出”或“假设”。 |
| `evidenceScope` | 本轮实际来源涉及的任务、语言、测量与可外推范围。 |
| `limitations` | 争议、测量限制及不可推导的结论。 |
| `sources` | 标题、可访问来源 URL、年份、来源角色与本次访问程度。 |
| `language` | 固定为 `shared`，表示跨内容图谱共享的研究目录，不表示效果在所有语言中相同。 |

边的 `relation` 由 `relationDefinitions` 定义。`basis` 区分 `theoretical_claim`、`empirical_finding`、`conceptual_distinction` 和 `design_inference`。`note` 限定这条边具体表达的主张，`sources` 支持该限定主张。设计推论的来源是启发来源，不是本产品已有效的证明。边不是先修顺序，不自动传递因果关系。

固定五种 `kind` 无法完整表达所有学习科学对象。初版将“显性与隐性知识区别”和“迁移”放入 `mechanism`，同时强制写出 `subtype`。界面应展示 subtype。后续若要查询严格的机制本体，应升级 schema，而不是把这些构念当作因果机制。

## 与语言内容交叉链接

内容图谱使用 `kt:`，研究图谱使用 `ped:`。跨图谱边放在 `content-links.json`，不放进研究图谱的内部 `edges`。

当前候选匹配有语义条件、目标语言、相关 pedagogy ID 和任务建议。候选没有内容 ID，也没有实际 `source` 与 `target` 边。C33、C59 是外部资产代码，不能冒充 `kt:` 节点。确认内容图谱真实 ID 后，才可将候选转为实际关联，并保存核对依据。

本轮不实现第二套网站。原 chat 可以直接读取这两个 JSON，提供 pedagogy tab 与搜索。搜索建议包含 `label`、`aliases`、`description`、`limitations` 和候选语义。详情应同时显示 `kind`、`subtype`、`evidenceStatus`、来源及边的 `basis`，不能只显示一个无条件的“科学支持”标签。

## 复核入口

在项目根目录运行 `python3 pedagogy/validate.py`。校验器从自身目录读取数据，因此也能用绝对路径运行。

结构校验不能判断论文是否支持主张，也不能证明学习效果。科学复核结果与未完成事项在 [evaluation.md](evaluation.md)。
