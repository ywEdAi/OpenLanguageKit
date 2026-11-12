# 语言入门积木（blocks）

给想做语言学习的人用的现成积木：可以给自己用，可以给孩子用，也可以嵌进你自己的应用。积木覆盖文字和语音的入门层，包括五十音、拼音和声调、英语字母和自然拼读、法语字母组合、汉字部件。

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

页面跟随系统的浅色或深色设置。

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

页面加载完成时会发一条 `{kind: 'ready', meta, params}`。

## 加一种语言

以韩文为例，它的辅音和元音拼成方块字，正好适合音节表：

1. 新建 `data/hangul.js`，写 `KT_DATA["hangul"] = {...}`。格式照 `data/kana.js`：
   - `tables`：每张表有 `rows`（辅音），可选的 `cols`（元音），以及 `cells`。
   - 每个 cell 有 `id`、`glyph`、`roman`、`row`、`col`，可选 `say`、`note`、`example`、`audio`。
   - 再写 `confusables`（易混组）和 `reverse`（表外的情况）。
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
