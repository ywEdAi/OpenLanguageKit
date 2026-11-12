# 图片、连环画、动画和声音放在哪儿

把 56 个原语、14 条课程方案和现有积木过了一遍，回答三个问题：这四种媒介各自该进哪些学习活动；现有契约是否已经写了它；要不要新增原语。结论先说：

- **绝大多数情况不需要新原语。** 不少原语的契约已经把图、连着的画或动画写成了学习对象（`object`）或儿童版的载体（`ui.childVariant`），缺的是实现，不是设计。
- **两个积木已经做出来**：`blocks/picture-talk.html`（看图说话，`prim:picture-describe`）和 `blocks/story-frames.html`（连环画，`prim:sequence-retell`，画与画之间用 `prim:predict-next` 押注）。两个原语的状态都只到 `partial`。
- **值得新增的只有两个**：看变化说变化、对白与转述互换。见第 4 节。
- **图要先有清单，再有画。** 一张图能用来核对，前提是有一份学习者看不到的元素清单（有什么、几个、在哪儿、在做什么）。先生成图再补清单，清单一定对不上。两个积木的做法是清单和 SVG 写在同一个数据文件里。

## 1. 单幅图

图是学习者从头到尾处理的那个对象，而不是配图。判断标准：把图拿掉，这个活动还能不能做。

| 用法 | 原语与契约字段 | 现状 |
| --- | --- | --- |
| 看图说或写，再对图核对 | `prim:picture-describe` · `object`（场景图加元素清单）、`check.rules`、`reverseHalf` | **已做**：picture-talk |
| 听指令在图上点、拖、摆 | `prim:listen-and-do` · `object`（可操作的场景） | 只有契约。picture-talk 的“指认”只是它的第 1 步里最浅的一种（点），不能算实现 |
| 把图里的名词连到角色，再选助词或介词 | `prim:role-marking` · `object`（场景图加一句话） | 只有契约。**同一幅公园图可以直接复用**，要补的是每个名词的角色数据 |
| 俯视图上定“我在哪儿”，再选来／去、あげる／くれる | `prim:viewpoint-direction` · `object` | 只有契约，需要另画俯视图 |
| 物品桌配量词盒子 | `prim:classifier-match` · `object`、`ui.screen` | 只有契约。物品图可以很小，适合批量画 |
| 图卡代替文字（学前、不识字） | `prim:sound-contrast`、`prim:oral-sound-play` · `object`；`prim:form-for-meaning`、`prim:transcript-diff`、`prim:entry-sense-pick`、`prim:figurative-decode` · `ui.childVariant` | 都没有带图的实现 |
| 孩子自己的图配“我的话” | `prim:oral-to-print` · `object` | 只有契约。图必须来自学习者，不能生成 |
| 图表 | `prim:picture-describe`（kt:en-fn-describe-trends、kt:zh-fn-describe-data 绑在这里）、`prim:grow-text` · `ui.screen` | 英语有 c46。图表本身就是数据，清单是现成的，最适合数据驱动 |

对 picture-talk 的扩展，按价值排序：

1. **第二幅图。** 契约的撤除条件是“连续两幅图的首稿达标后不再给句型框”，一幅图做不到。
2. **盲画布**（契约 `systemResponse` 第 3 条）：学习者写一句，页面只按受控词表把东西摆出来。现在只在说错位置时出现一个半透明副本，是它的一小半。
3. **在同一幅图上实现 `prim:listen-and-do`**：把元素做成可拖的，指令用“把猫放到长椅上”。这样方位介词（kt:en-prepositions-place 的主要原语）就有了页面。
4. **日语数据包。** kt:ja-spatial-nouns、kt:ja-fn-describe-town 可以绑；います／あります 的区分正好用得上清单里的“人／动物／东西”。

不适合用生成图的地方：`prim:real-document-scan`（菜单、时刻表、告示）。它要的是真实单据的版式，生成一张“像真的”单据等于伪造材料，文字还常常是错的。这类应当排版制作，并注明是仿制。

## 2. 连着的几幅画

画与画之间的关系是学习内容：先后、因果、转折、回头补说。

| 用法 | 原语与契约字段 | 现状 |
| --- | --- | --- |
| 排顺序、放连接、复述 | `prim:sequence-retell` · `object`（4–6 幅图，其中一处讲述顺序不等于发生顺序） | **已做**：story-frames |
| 先押下一幅，再揭晓 | `prim:predict-next` · `ui.childVariant`（三格连环画，两张方向牌） | **已做**：story-frames 的“预测” |
| 开始做／正在做／做完了 | `prim:aspect-timeline` · `ui.childVariant`（三格连环画） | 英语只有阅读方向。**story-frames 的三步动画就是这三格**，补一组“这一格用哪个形式”的题就能接上 |
| 一件事切成 4–6 个时刻走一遍 | `prim:scene-walkthrough` · `object`（时刻线）、`ui.childVariant`（时刻线用图片） | 英语有实现，没有图。看病、点菜、问路最值得画 |
| 开头—经过—结尾 | `prim:discourse-map` · `ui.childVariant`（三格故事） | 英语实现是议论文，没有儿童版 |
| 跨文化误会小事件 | `prim:culture-incident` · `ui.screen`（漫画分格或对话气泡） | 只有契约。画里的表情和距离是判断依据，文字写不出来 |
| 对话按回合分支 | `prim:exchange-script` · `ui.childVariant`（带图的整句、表情脸结局） | 只有契约。契约没写成分格，但对方的反应画出来比写出来清楚，属于扩展 |
| 两件事接成一句、故事接龙 | `prim:combine-unpack`、`prim:clause-constraint` · `ui.childVariant` | 没有儿童版 |
| 把代词拖到图上的人或物 | `prim:reference-chain` · `ui.childVariant` | 没有儿童版 |

对 story-frames 的扩展：

1. **第二个故事**，同样带一处补叙。契约的撤除条件跨两个故事。
2. **一个“过程”数据包**（做菜或办手续，契约的 `ui.adultVariant`）。这样 kt:zh-fn-instructions（先……把……然后……）就能绑上；现在的故事里没有“把”字句，所以没有绑。
3. **日语数据包**：kt:ja-te-sequence、kt:ja-fn-weekend-past。补叙用 ～ていた。
4. **同时发生**的一处（while、一边……一边、ながら）。契约的反向那一半提到了它，这个故事里没有，目前只作为一张“放不对”的连接牌出现。

连环画对生成图片的要求比单幅图高得多：同一个角色要在六幅里长得一样。这里的做法是把角色写成带参数的函数（位置、倾斜、表情），不依赖生成。

## 3. 动画

动画只在“变化本身是学习内容”时值得做。其余情况它是装饰，而且会让人只看不说。

| 用法 | 原语与契约字段 | 判断 |
| --- | --- | --- |
| 一个动作分几步，说成过程 | `prim:sequence-retell` · `object`（“一个短故事或一段过程”） | **已做**：story-frames 的“过程”。三步都看过才能排句子 |
| 正在进行和已经完成的差别 | `prim:aspect-timeline` · `ui.childVariant` | 最该做。静态图分不清“在穿”和“穿着”，动画一停就分清了 |
| 东西朝谁移动 | `prim:viewpoint-direction` · `ui.childVariant`（会滑动的礼物或小球） | 契约已写 |
| 学习者写指令，画面照字面执行 | `prim:listen-and-do` · `learnerAction` 第 3 步 | 契约已写，是动画最有价值的用法之一：说错了，画面就做错 |
| 拼合时的滑道、声调的小车、剪开复合词 | `prim:sound-spelling-blend`、`prim:contour-match`、`prim:word-shape-split` · `ui.childVariant` | 现有积木的扩展，属于反馈动效 |
| 笔顺 | `prim:character-anatomy` · `ui.screen` | 契约已写，但笔画数据的许可证没核对，现在不做 |
| 示范动作给孩子看 | `prim:listen-and-do` · `ui.childVariant` 明确写了“不播放示范动画，避免模仿” | **不要做** |

所有动画都要能一步一步地停，并且在系统设置了“减少动态效果”时退化成分步的静态画面。story-frames 是这样做的。

## 4. 声音

现有积木的声音全部来自浏览器语音合成，只放音。这一点不变。

- **声音是对象的原语**（`prim:sound-contrast`、`prim:rhythm-shadow`、`prim:transcript-diff`、`prim:listen-for-data`、`prim:predict-next` 听力版）需要多位真人录音，合成音不够。数据包里每一句都留了 `audio` 字段。
- **图加声音**的组合已经在两个新积木里：听句子指图、听故事排图。它们的证据只说明“在这幅图上听懂了这一句”。
- **非语言的声音**（开门、下雨、脚步）可以做“听声音猜发生了什么”，练 must have、可能、ようだ。这不需要新原语：它是 `prim:scale-place`（确定度的梯子）的材料，证据越弱，选的格子越低。
- **口头产出**页面听不到，也不该假装听得到。两个积木的做法是：说完由学习者自己或搭档对照清单，结果记为自评，和答对分开计数。

## 5. 值得新增的原语（两个）

### 看变化，说变化（暂名 `prim:spot-the-change`）

- **学习者看到**：同一个场景的两个状态（左右两幅，或一段从 A 到 B 的动画）。猫从桌子下面到了长椅上，鸭子少了一只，天黑了，来了一个人。
- **用语言做什么**：先自己找出变了什么并说出来，每一处变化一句；再判断每处变化属于哪一类——出现、消失、移动、变成——最后一类是反向那一半：没变的不能说成变了，看不出是谁做的要用被动或无主句。
- **系统怎样回应**：清单不是元素清单，而是**差异清单**。说到的变化在两幅图上同时亮起，没说到的保持原样；说“出现”却指着一个原本就在的东西时，两幅图上的那个东西并排闪。
- **为什么现有原语盖不住**：`prim:picture-describe` 的检查全是静态的（位置、数量、动作或状态），一幅图里没有“变化”这件事。`prim:aspect-timeline` 给的是写好的事件，让学习者放到时间轴上再选形式，学习者不需要自己发现变化。`prim:sequence-retell` 管的是多件事的先后。
- **谁会用到**：kt:zh-le-modal-basic（下雨了、我饿了）、kt:zh-existential-sentences 里表示出现和消失的那一半（前面来了一个人、搬走了两个人，picture-talk 没有覆盖）、kt:ja-naru-change、kt:ja-result-tearu、kt:en-present-perfect 的结果用法。这些知识点现在大多挂在 `prim:aspect-timeline` 上，而它在三种语言里都没有产出方向的实现。
- **实现成本**：低。在公园场景里加第二个状态和一份差异清单，页面可以从 picture-talk 改出来。

### 对白与转述互换（暂名 `prim:bubble-to-report`）

- **学习者看到**：两格画。第一格里一个人物在气泡里说了一句话（“我明天来这儿找你”），画面交代了谁对谁说、在哪儿、哪一天。第二格换了时间、地点或说话人。
- **用语言做什么**：站在第二格的位置把那句话转述出来。逐项判断：人称要不要换、时间词要不要换、地点词要不要换、时态要不要退——最后一项是反向那一半：同一天同一地点转述时什么都不用换；日语和中文不退时态，英语母语者和中文母语者在这里错的方向相反。
- **系统怎样回应**：原话里的每个指示成分（我、明天、这儿、will）各是一个槽。学习者改一个，第二格画面上对应的东西就标出来（日历翻了一页，“这儿”的箭头指向另一个地方）；没改而该改的槽，画面上显示“按你的话，他明天还要来”。
- **为什么现有原语盖不住**：kt:en-reported-statements 现在挂在 `prim:paradigm-apply`，只练时态怎么退，不练为什么退。`prim:viewpoint-direction` 管的是授受和来去的方向，不管时间和人称。`prim:source-stance` 是阅读方向，认出哪句是转述。没有一个原语的对象是“同一句话换了说的人、时间和地点”。
- **谁会用到**：kt:en-reported-statements、kt:en-reported-questions、kt:ja-quotation（～と言っていました）、中文的“他说他……”“他让我……”。
- **为什么需要画**：决定要不要换的信息——谁、哪天、在哪儿——全在情境里。用文字交代这些，题目就变成了阅读题。

### 考虑过、判断不需要新增的

| 想法 | 归到哪里 |
| --- | --- |
| 一人描述，另一人照着画或摆 | `prim:picture-describe` 第 3 步，以及 `prim:info-gap` |
| 图和句子对不上，找茬 | `prim:picture-describe` 第 2 步的锁定类别。picture-talk 的“判断”就是它 |
| 给无声动画配旁白 | `prim:sequence-retell` 叠 `prim:rhythm-shadow`。页面听不到，没有可执行的检查，不单独成立 |
| 图片词典、看图认词 | `prim:listen-and-do` 加 `prim:recall-before-reveal` 的儿童版 |
| 听声音猜场景 | `prim:scale-place` 的材料 |
| 给连环画填对白 | `prim:exchange-script`。只有“再转述出来”那一步是新的，见上 |

## 6. 按课程方案看

- **学前和小学低段**（en `young-early`、zh `zh-heritage-kids`）：不识字或刚识字，图和声音是唯一的载体。`prim:oral-sound-play`、`prim:sound-contrast`、`prim:listen-and-do` 三个都还只有契约，是这条线上最大的缺口，比再做一幅好看的图重要。
- **小学和青少年**（en `young-primary`、`teen`，ja `ja-hobby`）：看图说话和连环画正好在这一段。接下来该补的是 `prim:aspect-timeline` 的三格画和上面两个新原语。
- **成人生活类**（en `adult-everyday`、ja `ja-life`、zh `zh-adult-beginner`）：最值得画的是 `prim:scene-walkthrough` 的时刻线和 `prim:culture-incident` 的分格。单据类不要生成。
- **职场、学术、备考**（en `adult-work`、`academic`，ja `ja-business`、`ja-exam-study`，zh `zh-business`、`zh-academic`）：有用的视觉材料只有图表和幻灯片。给议论文配插图没有学习价值，不建议做。

## 7. 边界

- 两个新积木各只有一幅图、一个故事，都没有经过学习者使用。
- 页面对学习者自己写的句子只做受控词表上的确定性核对：名字、方位词、数量词、连接词、几种固定的错法。它不理解句子，判断不了的地方会直接说判断不了。
- 说对了图上的东西不等于句子合乎语法；排对了顺序不等于会复述。这两条分别写在两个原语的 `evidence.prohibited` 里，页面上也照样写了。
