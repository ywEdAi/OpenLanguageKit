# OpenLanguageKit

[English](README.md) · 中文

做语言学习 app 或备课时可以直接拿来用的知识层：英语、日语、中文三门课的知识点和先修关系，56 种教学原语的设计契约，一组零依赖的教学积木，以及把学习者画像变成蓝图的规划器。没有依赖：Python 3 标准库和原生 JS。

网站（首页、开始创建、Teacher Space、案例、原理、课程浏览器、工作台）在另一个仓库，它只是这些内容的一种呈现方式：网站自己不保存这里的任何文件，每次部署时从本仓库拉取，所以这里是唯一的一份。

## 里面有什么

| 目录 | 内容 | 入口 |
| --- | --- | --- |
| `curriculum/<en\|ja\|zh>/` | 知识点（`kcs.json`）、学习路径（`path.json`）、课程方案（`tracks.json`）、来源单元、知识点到原语的绑定 | `curriculum/SCHEMA.md` |
| `curriculum/primitives/` | 教学原语契约：学习者做什么、系统怎样回应、怎么检查、证据能说明什么 | `curriculum/primitives/README.md` |
| `blocks/` | 数据驱动的教学积木（HTML 页面 + 数据包 + 运行时），`registry.js` 登记每个页面绑定的知识点 | `blocks/README.md` |
| `blueprint/` | 规划器（浏览器和 Node 都能跑）和命令行 `plan.js` | `BLUEPRINT.md` |
| `pedagogy/` | 学习科学图谱（`ped:` 命名空间），规划器引用它作为设计依据 | `pedagogy/README.md` |
| `dist/data.js` | 生成的数据包：`window.CURRICULUM`、`window.PRIMITIVES`、`window.ASSET_LIBRARY` | 由 `curriculum/build.py` 生成 |

## 怎么用

```sh
sh check.sh                                   # 重新生成并跑全部检查
node blueprint/plan.js --list                 # 语言和课程方案
node blueprint/plan.js --lang ja --track ja-hobby --age 8-12 --who child --minutes 15 --days 5 --device tablet --out my-plan
```

- 给写代码的 AI 用：让它先读 `AGENTS.md` 和 `BLUEPRINT.md`。
- 在自己的页面里用：加载 `dist/data.js`、`blocks/registry.js`、`blocks/catalog.js`、`blueprint/science.js`、`blueprint/planner.js`；积木页面可以直接用 iframe 嵌入。
- 积木可以直接用浏览器打开，例如 `blocks/sound-grid.html?set=hiragana`。

## 需要知道的

- 日语和中文的内容还在等教师审核，清单在 `curriculum/REVIEW.md`；每个数据包里的 `review` 列表是等母语者核对的条目。
- 原语状态为 `spec` 表示只有设计契约，还没有页面。
- 英语的现成页面来自另一个仓库 edu-ai-builders/language-learning-asset-library，这里只按 id 引用，没有复制。
- `curriculum/legacy-citations.json` 是从第一版图谱继承来的引用快照；第一版图谱本身留在旧仓库里。
- 课程内容（知识点的说明、例句、教学原语契约）目前用中文写成，英文版在做；文档已有英文版（`*.en.md`），校验脚本读取的是中文文件，两者不一致时以中文为准。

## 许可

整个仓库（数据、文档、代码）采用 [CC BY-NC 4.0](LICENSE)（署名—非商业性使用 4.0 国际）。

- 个人、教学、研究等**非商业用途免费**。使用时请署名：写明 OpenLanguageKit，附上本仓库和许可协议的链接，并说明是否做过修改。
- **商业使用需要另行取得作者的付费授权**，包括出售基于这些内容做的 app、课程或服务，或把它用在营利产品里。动手之前请先联系，见 [COMMERCIAL.md](COMMERCIAL.md)。
- 作为来源引用的第三方大纲（例如 British Council / EAQUALS Core Inventory、GF 0025-2021）归各自的权利人所有；本许可只覆盖这里原创的内容。
