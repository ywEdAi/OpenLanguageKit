# 语言入门积木（blocks）

给想做语言学习的人用的现成积木：可以给自己用，可以给孩子用，也可以嵌进你自己的应用。最早的一批积木覆盖文字和语音的入门层（五十音、拼音和声调、英语字母和自然拼读、法语字母组合、汉字部件）；2026-11-12 起，课程用到的 56 种教学原语里原先只有契约的 24 种也各有一个积木，覆盖语法形式、听、交际、读写单据、翻译等。这 24 个都只实现了契约的一部分，没做到的地方和待核对的内容见 `GAPS.md`。

- 没有依赖，不联网。双击 HTML 就能打开，也能放进 iframe。
- 一个积木对应一种教学动作，换一个数据包就换一种语言。加一种语言通常只需要写一个数据文件。
- 每个积木都会记录学习证据：第一次作答单独保留，独立答对和看过提示后答对分开计算。
- 只放音，不录音，不给发音打分。声音来自浏览器的语音合成，任何一项都可以换成真人录音。

## 现有积木

| 积木 | 教学原语 | 做什么 | 数据包 |
| --- | --- | --- | --- |
| `sound-grid.html` 音节表 / 字母表 | 音形对应拼读 | 把一个文字系统按声音排成表。四个模式：浏览（点格听音，同行同列一起亮）、听音找字、形近辨认、遮住回想 | `kana-hiragana` `kana-katakana` `pinyin` `alphabet-en` `phonics-en` `alphabet-fr` |
| `blend.html` 拼读 | 音形对应拼读 | 一个音一个格子：先一格一格读，再连起来；换一个音变出新词；听音摆字；"规则外"单独练不按规则读的词 | `blend-en` `blend-fr` `blend-ja` `blend-zh` |
| `tone-contour.html` 声调与音高 | 声调与音高轮廓 | 把音高画成线：看线听音、听音选线、变调先预测再听（写的调和说的调不一样） | `tones-zh` `pitch-ja` |
| `hanzi-parts.html` 汉字部件 | 字形构件与书写 | 拆字（结构图、表意和表音部件）、拼字、同族字（声旁什么时候失效）、猜一猜没见过的字 | `hanzi-zh` `kanji-ja` |
| `picture-talk.html` 看图说话 | 看图描述与核对 | 一幅场景图上做四件事：指认（听句子点图，图上没有的要说没有）、描述（首稿锁定后连到图上，核对名字、位置、数量，再用词卡补说没说到的）、判断（位置不对、数量不对、动作和状态弄混、只是推断）、提问（排出问句，页面按图的元素清单回答） | `picture-en` `picture-zh` |
| `story-frames.html` 连环画 | 排序与复述（画与画之间用“预测下一步”） | 六幅画一个故事：先押下一幅再揭晓、按发生的先后排序（有一幅是补叙）、放连接词、看三步动画说过程、撤掉文字复述 | `story-en` `story-zh` |
| `classifier-match.html` 量词与可数性 | 计量方式：量词与可数性 | 把桌上的东西放进量词、助数词或“能不能直接数”的盒子，再给每个盒子选共同点；放进“个／つ”这类通用盒子不算错，只标黄并说出更常用的量词。第二步给新东西选盒子，判断按规律、规律之外、两个都行还是不用量词，日语再选读音，英语再选 many / much 等；第三步按真实任务拼一张购物单或点单，一律用通用量词超过六成算回避。 | `classifier-match-en` `classifier-match-ja` `classifier-match-zh` |
| `clause-constraint.html` 连接形式与后句限制 | 后句限制核对 | 连接形式固定，一张张试后句卡并判断成立与否，不成立时说出被违反的限制，学习者自己的限制表随之点亮；然后只换连接形式，从锁定的几类限制（后句类型、时态与时间、主语、都成立但意思不同）中选出原因；最后在请求、建议等情境下写整句，页面按连接形式和句末类型做确定性检查。 | `clause-constraint-en` `clause-constraint-ja` `clause-constraint-zh` |
| `ime-convert.html` 输入法转换：选对同音字 | 输入法转换 | 模拟输入法（候选来自数据包，不是真的输入法）：用罗马字或拼音打出一句话，空格转换、数字键选候选，输入条下保留“键入→候选→选定”的轨迹；最终文字必须和目标逐字一致，同音错会连线到决定用字的词，读音打错（nn、wo、ü→v）会给出正确按键。第 2 步给标出的地方分类（对／同音错／读音打错／字形混入／两种都可以），判同音错时要点出语境词，句子里混有自己第 1 步打的句子；第 3 步候选打乱、提交前不显示轨迹，再和第 1 步同组的选择对比。 | `ime-convert-ja` `ime-convert-zh` |
| `listen-and-do.html` 听指令做动作 | 听指令做动作 | 听一条指令，在手绘的房间里移动或涂色，或在街区地图上点出要去的房子；第一步不判对错，第二步分段回放、看闪的地方，自己判断差在哪一类（拿错东西、大小颜色、位置、顺序、多做漏做；路口数、拐向、左右）；第三步反过来用词卡拼一条指令，页面照字面执行，说得有歧义就会做错。 | `listen-and-do-en` `listen-and-do-ja` `listen-and-do-zh` |
| `oral-sound-play.html` 音素意识游戏 | 音素意识游戏 | 全程不出现文字，只有图和声音：拍出一个词有几个音节、几拍或几个音；把一格换掉或去掉，看变成哪张图（或不是词）；比一比两个词押韵、开头、拍数哪里一样；最后自己说一个词，由听者判断。 | `oral-sound-play-en` `oral-sound-play-ja` `oral-sound-play-zh` |
| `paradigm-apply.html` 变形规则用于新词 | 变形规则用于新词 | 先把学过的词按变法分组归纳出规则，再给没见过的词判类、打字写出形式；写错时沿推导链指出在哪一步分叉。一个数据包里有好几组规则（ます形、て形、复数、过去式、重叠……），同一个词的各种形式长成一行变形表；另有放进句子和“规则的边界”两个模式。 | `paradigm-apply-en` `paradigm-apply-ja` `paradigm-apply-zh` |
| `reading-aid-fade.html` 注音逐步撤除 | 注音逐步撤除 | 注音（振假名、拼音、音标、拼读点线）默认藏起来，读不出再点开看；抽查在注音出现前作答，每个词两段不同材料里没偷看读对才撤注音，读错就恢复。另有错误归类和“不该撤的注音”两个模式。 | `reading-aid-fade-ja` `reading-aid-fade-zh` `reading-aid-fade-en` `reading-aid-fade-en-ipa` |
| `reading-select.html` 按语境选读音 | 读音选择 | 短文里标出几处同形字词，给每处选读音并选一条依据（词性、所在的词、数字量词、前后的音、意思、要单独记），读音和依据都对才算通过；再把同一字形放进新句子判断读音变不变，最后自己造一句让它读两个音。 | `reading-select-ja` `reading-select-zh` |
| `role-marking.html` 角色与标记 | 格与语义角色标记 | 在一张场景图上先把每个名词连到它的角色（做事的人、对象、地点、到达点、工具、同伴……），再选助词或介词；选错时图按所选标记的意思重画，最后问这个标记由角色、动词还是母语分法决定，并用新图自己组一句至少三个角色的话。 | `role-marking-en` `role-marking-ja` `role-marking-zh` |
| `slot-order.html` 语序槽位 | 语序槽位 | 先在看不到槽名的轨道上把词块排成句子（点击、拖动或方向键），第一次排序单独保存；然后给每个词块贴槽名，页面指出违反了哪条位置规则，可展开学习者母语的语序轨道对照。另有判句（含“换了位置也对”）和自己造句后贴槽名抽查。 | `slot-order-en` `slot-order-ja` `slot-order-zh` |
| `sound-contrast.html` 最小对立辨音 | 最小对立辨音 | 两个词只差一个音：先听出是哪一个（混入“一样／不一样”题），再分清“换了一个词”“同一个词换了读法”和“第三个词”，最后说给同伴听，看对方能不能分辨；侧栏的对立矩阵按两边分别累计。 | `sound-contrast-en` `sound-contrast-ja` `sound-contrast-zh` |
| `viewpoint-direction.html` 视点与方向 | 视点与方向 | 先在场景图上把“我”（👁）放到位置上、画出箭头（谁给谁、往哪儿走、谁受了影响），再选授受、来去或被动形式；选错时图上出现一只红色虚线的眼睛，告诉你听的人会以为你站在哪儿。第二步事情不变、“我”挪位置，判断形式要变、不用变还是两种都行；第三步讲两件自己的事，一来一去。 | `viewpoint-direction-en` `viewpoint-direction-ja` `viewpoint-direction-zh` |
| `cross-language-align.html` 翻译与中介对齐 | 翻译与中介对齐 | 三步：原文按意义块切好，旁边放着逐词直译稿，逐块决定保留还是改掉（人名、数字处逐词稿本来就对）；给别人的转述逐行标注处理方式（换说法、增补、删冗余、删了不该删的、加了意见）；最后为指定听者写转述，页面按关键词核对关键块、意见词和逐词照搬。 | `cross-language-align-en` `cross-language-align-ja` `cross-language-align-zh` |
| `culture-incident.html` 文化情境判读 | 文化情境判读 | 读一段四到六句的小误会（配人物关系卡），先点出从哪一句开始不对劲并写一句解释（锁定）；再逐题判断属于哪一类（说法本身／礼貌或称呼／话题或时机／客套或言外之意／其实没有文化误会），揭示双方心里的想法，与第一次解释并排对照；最后改写那一句：从预写的改写里选，选中的改写会重演到对方的新回应，并给出可接受改写的特点让学习者对照自己写的句子。 | `culture-incident-en` `culture-incident-ja` `culture-incident-zh` |
| `entry-sense-pick.html` 词典义项选择 | 词典义项选择 | 从句子里的形式写出要查的词典形（汉语写出这句里的读音，多音词按读音分词条），词条打开后在几个义项里选一个，给其余每个义项一个锁定的排除理由，并点出原句里的线索词；每组都有两个义项都说得通的句子和必须转查短语的句子。之后用自己的话改写放回原句、挑出同一义项的新句、自己写一句，记进带原句和义项编号的生词本。 | `entry-sense-pick-en` `entry-sense-pick-zh` |
| `exchange-script.html` 交际回合与分支 | 交际回合与分支 | 一段有目的的对话（打电话、借东西、点餐、投诉、婉拒邀请），每一回合选一句，对方按预先写好的分支接话；结局显示事情办成没有、关系怎么样；回看时给自己每一句归类再看别的分支；最后在关键回合不看选项自己说，自选用了哪一步，和范例并排对照。 | `exchange-script-en` `exchange-script-ja` `exchange-script-zh` |
| `false-friend-check.html` 同形异义核对 | 同形异义核对 | 先只看词形写下按母语字面的猜测（锁定、不计分），再打开真实例句标出相同、偏移（要选偏在哪儿）或完全不同；每组至少三分之一是真同义词，把它们判成“完全不同”会提示过度防备；然后在三个句子里挑出只有真实义才说得通的一句并自己写一句，做过的词归进自己的假朋友表。 | `false-friend-check-ja` `false-friend-check-en` |
| `figurative-decode.html` 字面与言外之意 | 字面与言外之意 | 一段语境里分三步：先锁定字面层，再判断落差类型（比喻、夸张、反话、暗示、固定习语或就是字面意思）并选出真正的意思，最后在语境里点出线索；另有同一句两种语境、用对了吗两个模式，儿童版看图选意思。 | `figurative-decode-en` `figurative-decode-ja` `figurative-decode-zh` |
| `number-system-map.html` 数位体系转换 | 数位体系转换 | 一张数量卡上先估、再算、再读：只看源语言的句子（不给阿拉伯数字）在数轴上点出量级并锁定；再在数字之间点出目标语的分隔位置（英语三位逗号、中文四位万线）并选最高一级；最后用目标语写出完整的数量，页面把它解析回数字，显示“你写的是 X，原数是 Y”。另有“规则之外”（年份、电话、成数、分数、复数 -s、零、一万以内）和“自己的数”两种模式。 | `number-system-map-en` `number-system-map-zh` |
| `oral-to-print.html` 口语词连到文字 | 口语词连到文字 | 从孩子已经会说的话出发：选一张图，看“我的话”写成字，点着听、点着读，放上识字墙；再听一个提示，在三张没有图、没有拼音的卡里找出说过的字或词（有时一张都没有），判断它在新组合里意思变没变、是不是只是长得像；最后读给家人听，由听的人记下听懂没有。另有“说的和写的”：同音字、不规则拼写、口语形式。 | `oral-to-print-en` `oral-to-print-zh` |
| `real-document-scan.html` 真实单据扫读 | 真实单据扫读 | 在虚构但版式真实的菜单、时刻表、告示和表格上完成一个改述过的任务：先点答案所在的区域（首次选区保留），再点出那一条并逐项判断条件（符合／不符合／有例外），单据上没有答案时选“单据上没有”和下一步怎么做，最后把找到的信息填进一条要发出的消息。 | `real-document-scan-en` `real-document-scan-ja` `real-document-scan-zh` |
| `repair-and-backchannel.html` 会话修复与接应 | 会话修复与接应 | 一段预先写好的对话里埋着麻烦时刻（说太快、生词、数字、等你接话、跑题、要插话），也有看似麻烦其实不用打断的时刻；修复按钮一直在，选一种修复再选说法，对方按你的修复回应，没修复的会在结局里出错；回看时给自己的做法归类；第 3 步没有按钮自己说；第 4 步反过来判断对方的“嗯”是不是答应。 | `repair-and-backchannel-en` `repair-and-backchannel-ja` `repair-and-backchannel-zh` |
| `template-write.html` 按真实格式填写 | 按真实格式填写 | 按虚构身份的情境卡在仿真表格、便条、聊天界面和邮件上直接写，第一稿锁定；再逐栏自己判断（合格／格式不对／内容不对／放错栏／缺了／该留空），然后看页面的确定性核对、读的人看到的样子（如手机通知只显示开头）和范文；最后同一件事换一个收件人重写，两版一样不算通过。语气和语法页面不判，记为自评。 | `template-write-en` `template-write-ja` `template-write-zh` |
| `variety-map.html` 变体对照 | 变体对照 | 同一意思的几种变体（英式／美式、共通语／关西方言、日本字形／简体／繁体、简体／繁体、大陆／台湾／香港用语）做成没有标签的卡片，分进各自的列，另有“各变体通用”和“不是变体，是错误”两列；放进去后标出决定变体的那个部分。然后在具体场合里逐句判断最合适、也可以、不得体还是错误，看对方的反应；最后整段改写或逐空选字，页面按受控词表标色，混用即不通过，简繁一对多的字成对出现。 | `variety-map-en` `variety-map-ja` `variety-map-zh` |

`registry.js` 列出了所有积木、数据包，以及绑定到课程知识点的现成页面（artifact）。

## 打开

```
blocks/sound-grid.html?set=kana-hiragana
blocks/blend.html?set=blend-ja&mode=read
blocks/tone-contour.html?set=tones-zh&mode=sandhi
blocks/hanzi-parts.html?set=hanzi-zh&char=清
blocks/picture-talk.html?set=picture-en&mode=describe
blocks/story-frames.html?set=story-zh&mode=order
```

通用参数：

| 参数 | 含义 |
| --- | --- |
| `set` | 数据包 id（必填） |
| `mode` | 打开时的模式，取值见各积木的模式按钮 |
| `variant=child` | 儿童版：更大的点击区、更少的选项、更慢的语速 |
| `kc` | 课程知识点 id，会写进每条学习证据 |
| `focus` | 只练一部分。sound-grid 是逗号分隔的行 id，如 `focus=a,k,s`；blend 是 `tags` 里的一个键 |
| `lang` | 界面语言（说明、按钮、反馈用的语言，不是要学的语言）：`lang=zh` 或 `lang=en`。见下面“界面语言” |

页面跟随系统的浅色或深色设置。

## 界面语言

每个积木都有中文和英文两套界面。要学的语言由数据包决定，界面语言由积木自己判断，顺序是：

1. 地址里的 `?lang=en` 或 `?lang=zh`；
2. `localStorage['atlas-lang']`（OpenLangKit 网站的语言开关写在这里；积木只读不写，放在同一个域名下就会跟着开关走）；
3. 浏览器语言：`zh` 开头用中文，其余用英文。

嵌进你自己的页面时，想固定语言就在地址里带上 `lang`。运行时把结果放在 `KTBlock.lang`（`'zh'` 或 `'en'`），并设置 `<html lang>`。

- 界面文字写在各个积木页面里：`KTBlock.L('中文', 'English')`。
- 数据包里用界面语言写的文字（释义、提示、说明、标题）在中文旁边加一个英文的平行字段，页面用 `KTBlock.t(obj, 'note')` 读取：
  - 字符串字段 `x` 旁边加 `xEn`，例如 `"note": "…", "noteEn": "…"`、`title` / `titleEn`；
  - 字符串数组或映射 `x` 旁边加平行的 `xEn`（长度或键相同，缺的一项回退到中文）；
  - 放在语言键 `zh` 下面的释义，旁边加 `en`。
- 没有英文的地方显示中文。要学的语言本身（假名、汉字、拼音、例词、例句）不翻译。
- 教英语的数据包里，例词的中文释义在英文界面下不显示。
- `registry.js` 里同样有平行字段：积木的 `titleEn`、`doesEn`，现成页面（artifact）的 `titleEn`、`noteEn`。`catalog.js` 的 `KTCatalog({..., lang})` 按界面语言给出覆盖情况的标签、语言名和页面标题（不传 `lang` 时用 `window.ATLAS_LANG`，再没有就是中文）。

## 嵌进你自己的页面

```html
<iframe id="block" src="blocks/sound-grid.html?set=pinyin&variant=child" width="100%" height="680"></iframe>
<script>
  const frame = document.getElementById('block');
  window.addEventListener('message', e => {
    // only trust the iframe you embedded, from the origin you serve it from; `source: 'kt-block'` alone proves nothing
    if (e.source !== frame.contentWindow || e.origin !== location.origin) return;
    if (e.data && e.data.source === 'kt-block' && e.data.kind === 'event') {
      console.log(e.data.event, e.data.summary);   // render with textContent, never innerHTML
    }
  });
</script>
```

每个动作都会发一条消息：`{source: 'kt-block', kind: 'event', event, summary}`。

- `event.event_type` 来自 asset library 的证据事件词表：view select highlight drag drop connect disconnect reorder submit revise request_hint reveal compare explain retry complete。
- 一道题的第一次作答发 `submit`，之后发 `retry`。`payload.assisted` 表示作答前是否用过提示或看过答案。
- `summary` 汇总了第一次作答数、独立答对数、提示后答对数、第一次答错数，以及单独计数的自评题（遮住回想时学习者自己判断，不算作答）。积木里格子和词卡的颜色与这份汇总来自同一份第一次作答记录（`B.status(id)`）。

页面加载完成时会发一条 `{kind: 'ready', meta, params, lang}`（`lang` 是界面语言）。

## 加一种语言

以韩文为例，它的辅音和元音拼成方块字，正好适合音节表：

1. 新建 `data/hangul.js`，写 `KT_DATA["hangul"] = {...}`。格式照 `data/kana.js`：
   - `tables`：每张表有 `rows`（辅音），可选的 `cols`（元音），以及 `cells`。
   - 每个 cell 有 `id`、`glyph`、`roman`、`row`、`col`，可选 `say`、`note`、`example`、`audio`。
   - 再写 `confusables`（易混组）和 `reverse`（表外的情况）。
   - 界面语言的文字（`title`、`subtitle`、`note`、行和列的 `label`、释义等）旁边可以加英文的 `…En` 字段，见上面“界面语言”；不加就显示中文。
2. 在 `registry.js` 的 `packs` 里加一行：`"hangul": {"file": "data/hangul.js", "block": "sound-grid", "lang": "ko"}`。
3. 打开 `sound-grid.html?set=hangul`。

其他积木的数据格式写在各自数据文件的开头：`data/blend.js`、`data/tones.js`、`data/hanzi.js`、`data/picture-talk.js`、`data/story-frames.js`。

看图说话和连环画的数据分两层：场景（`KT_SCENES`，不分语言：原创的内嵌 SVG，加一份学习者看不到的清单——有什么、几个、在哪儿、在做什么，或者画的讲述顺序和发生顺序）和语言包（`KT_DATA`，一种语言一份）。换语言不用重画。页面对学习者自己写的句子只按语言包里的受控词表做确定性核对，判断不了的会直接说。拼音表是多声调格子的例子，见 `data/pinyin.js` 里的 `tones` 字段。

写数据时注意：

- 读音完全相同、只听声音分不出写法的字（如 じ／ぢ、お／を）写进 `homophones`，听音题都算对，也不会拿来做听辨题。
- `say` 是语音合成要读的文字，要保证它真的读成你想要的音。例如单个英语音素合成不出来，就用例词；拼音不要选多音字。
- 不确定的内容放进数据包的 `review` 列表，不要放进练习题。
- 每个数据包都要写"反向那一半"，也就是规则在哪里失效：不按拼读规则读的常用词、声旁不再表音的字、写的调和说的调不一样的词。

## 设计约定

这些约定来自 `curriculum/primitives/` 里的原语契约：

- **第一次作答不会被覆盖。** 之后的作答算重试；用过提示或看过答案，都单独记为"提示后完成"。
- **检查同时卡两头**：答得太弱不算过，投机取巧也不算过。例如听音选线时，先听整词也算提示；变调题必须先预测，再放音。
- **不使用 AI 聊天，不给语音打分。** 需要听真人说的地方，交给真人听者或学习者自己对照。
- **儿童版不是简化的成人版。** 选项更少、目标更大、有图，不加积分。
- **页面听不到学习者说话。** 看图说话和连环画里口头说的部分，由学习者自己或搭档对照后记为自评，和答对分开计数。

## 来源与许可

- 数据由编写者根据通用语言知识自行编写。看图说话和连环画的图是在数据文件里手写的原创 SVG，没有使用外部图片。汉字部件没有使用 KanjiVG、Make Me a Hanzi、CHISE 或 Unihan IDS，因为这些数据集的许可证还没有核对。所以这里没有笔顺动画。
- 每个数据包的 `review` 列表是待母语者核对的条目：声调、音高、笔画数、法语读音等。
- 机器合成的声音可能读错，尤其是日语音高和单独的音素。
- 许可：CC BY-NC 4.0，非商业用途免费，商业使用需另行授权（见仓库根目录的 `LICENSE` 和 `COMMERCIAL.md`）。`curriculum/primitives/` 引用的 asset library 是 MIT 许可。

## 检查

```sh
python3 curriculum/primitives/check.py   # 也会检查 registry.js：积木文件、数据包、绑定的知识点是否存在
```

浏览所有积木和它们绑定的知识点，用工作台：`python3 workspace/serve.py`，然后打开 `http://127.0.0.1:4180/workspace/`。
