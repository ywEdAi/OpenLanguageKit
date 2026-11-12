/* Tone / pitch data packs for blocks/tone-contour.html.
 *   tones-zh: Mandarin tones on the Chao five-level scale (1 = lowest, 5 = highest).
 *   pitch-ja: Tokyo-standard pitch accent, mora by mora, always shown with a following particle.
 * Any item may carry `audio: "url"` (a real recording); it then replaces speech synthesis for that item. */

KT_DATA["tones-zh"] = {
 "review": ["变调题的\"实际读音\"按规范描写，个人和方言读法会有差别", "浏览器语音对\"一\"\"不\"变调和半三声的处理要试听确认"],
  id: 'tones-zh', lang: 'zh', speech: 'zh-CN',
  title: '普通话声调',
  subtitle: '把声调画成线：竖轴是五度（1 最低、5 最高），一个字一格。先看线听音，再听音选线，最后看写的调和说的调哪里不一样。',
  kcs: ['kt:zh-pinyin-tones', 'kt:zh-tone-sandhi', 'kt:zh-pinyin-erhua'],
  ttsNote: '声音来自浏览器的语音合成，单字和常用词一般准确，变调多数也会自动处理，但机器音不一定都对。数据里给某一项加上 audio（真人录音地址）就会改放录音。本页只放音，不录音、不打分。',
  contours: {
    '1': { label: '一声', name: '阴平：高平', chao: [5, 5], child: '平路' },
    '2': { label: '二声', name: '阳平：中升', chao: [3, 5], child: '上坡' },
    '3': { label: '三声', name: '上声：降升（单念或在句末）', chao: [2, 1, 4], child: '山谷' },
    '3h': { label: '半三声', name: '半上：只降不升（在别的字前面）', chao: [2, 1], child: '下到谷底' },
    '4': { label: '四声', name: '去声：全降', chao: [5, 1], child: '下坡' },
    '0': { label: '轻声', name: '又短又轻，高低跟着前一个字', chao: null, child: '小圆点' }
  },
  /* level of a neutral-tone dot after each tone (start = said on its own) */
  neutralAfter: { '1': 2, '2': 3, '3': 4, '3h': 4, '4': 1, start: 3 },
  sets: [
    { id: 'ma', label: 'mā má mǎ mà ma', items: [
      { text: '妈', py: 'mā', t: '1' }, { text: '麻', py: 'má', t: '2' }, { text: '马', py: 'mǎ', t: '3' }, { text: '骂', py: 'mà', t: '4' },
      { text: '吗', py: 'ma', t: '0', note: '轻声单念时没有固定高低，这里画在中间；放在词里看前一个字，见“妈妈”。' }] },
    { id: 'tang', label: '汤 糖 躺 烫', items: [
      { text: '汤', py: 'tāng', t: '1' }, { text: '糖', py: 'táng', t: '2' }, { text: '躺', py: 'tǎng', t: '3' }, { text: '烫', py: 'tàng', t: '4' }] },
    { id: 'yi', label: '衣 姨 椅 亿', items: [
      { text: '衣', py: 'yī', t: '1' }, { text: '姨', py: 'yí', t: '2' }, { text: '椅', py: 'yǐ', t: '3' }, { text: '亿', py: 'yì', t: '4' }] },
    { id: 'ba', label: '八 拔 靶 爸', items: [
      { text: '八', py: 'bā', t: '1' }, { text: '拔', py: 'bá', t: '2' }, { text: '靶', py: 'bǎ', t: '3' }, { text: '爸', py: 'bà', t: '4' }] },
    { id: 'tong', label: '通 同 桶 痛', items: [
      { text: '通', py: 'tōng', t: '1' }, { text: '同', py: 'tóng', t: '2' }, { text: '桶', py: 'tǒng', t: '3' }, { text: '痛', py: 'tòng', t: '4' }] },
    { id: 'shi', label: '诗 十 史 是', items: [
      { text: '诗', py: 'shī', t: '1' }, { text: '十', py: 'shí', t: '2' }, { text: '史', py: 'shǐ', t: '3' }, { text: '是', py: 'shì', t: '4' }] },
    { id: 'wu', label: '屋 无 五 雾', items: [
      { text: '屋', py: 'wū', t: '1' }, { text: '无', py: 'wú', t: '2' }, { text: '五', py: 'wǔ', t: '3' }, { text: '雾', py: 'wù', t: '4' }] },
    { id: 'pairs', label: '买/卖 汤/糖 二声/三声', items: [
      { text: '买', py: 'mǎi', t: '3', note: '买 mǎi：先往下走。' }, { text: '卖', py: 'mài', t: '4', note: '卖 mài：从最高一路降到底。' },
      { text: '鱼', py: 'yú', t: '2', note: '二声从中间往上走，起点比三声高。' }, { text: '雨', py: 'yǔ', t: '3', note: '三声先压到最低，单念时才再升起来。' }] },
    { id: 'neutral', label: '轻声词', items: [
      { text: '妈妈', py: 'māma', t: '1 0' }, { text: '爷爷', py: 'yéye', t: '2 0' }, { text: '姐姐', py: 'jiějie', t: '3h 0' }, { text: '爸爸', py: 'bàba', t: '4 0' }] }
  ],
  /* disyllabic words: tones = what is written (原调), surface = what is said. Covers all 4×4 pairs plus each tone + neutral. */
  words: [
    { id: 'feiji', text: '飞机', py: 'fēijī', tones: ['1', '1'], surface: ['1', '1'] },
    { id: 'xingqi', text: '星期', py: 'xīngqī', tones: ['1', '1'], surface: ['1', '1'] },
    { id: 'huanying', text: '欢迎', py: 'huānyíng', tones: ['1', '2'], surface: ['1', '2'] },
    { id: 'zhongguo', text: '中国', py: 'Zhōngguó', tones: ['1', '2'], surface: ['1', '2'] },
    { id: 'qianbi', text: '铅笔', py: 'qiānbǐ', tones: ['1', '3'], surface: ['1', '3'] },
    { id: 'kaishui', text: '开水', py: 'kāishuǐ', tones: ['1', '3'], surface: ['1', '3'] },
    { id: 'yinyue', text: '音乐', py: 'yīnyuè', tones: ['1', '4'], surface: ['1', '4'] },
    { id: 'tianqi', text: '天气', py: 'tiānqì', tones: ['1', '4'], surface: ['1', '4'] },
    { id: 'mama', text: '妈妈', py: 'māma', tones: ['1', '0'], surface: ['1', '0'] },
    { id: 'zhuozi', text: '桌子', py: 'zhuōzi', tones: ['1', '0'], surface: ['1', '0'] },
    { id: 'mingtian', text: '明天', py: 'míngtiān', tones: ['2', '1'], surface: ['2', '1'] },
    { id: 'xiongmao', text: '熊猫', py: 'xióngmāo', tones: ['2', '1'], surface: ['2', '1'] },
    { id: 'xuexi', text: '学习', py: 'xuéxí', tones: ['2', '2'], surface: ['2', '2'] },
    { id: 'yinhang', text: '银行', py: 'yínháng', tones: ['2', '2'], surface: ['2', '2'] },
    { id: 'pingguo', text: '苹果', py: 'píngguǒ', tones: ['2', '3'], surface: ['2', '3'] },
    { id: 'niunai', text: '牛奶', py: 'niúnǎi', tones: ['2', '3'], surface: ['2', '3'] },
    { id: 'xuexiao', text: '学校', py: 'xuéxiào', tones: ['2', '4'], surface: ['2', '4'] },
    { id: 'tongshi', text: '同事', py: 'tóngshì', tones: ['2', '4'], surface: ['2', '4'] },
    { id: 'pengyou', text: '朋友', py: 'péngyou', tones: ['2', '0'], surface: ['2', '0'] },
    { id: 'putao', text: '葡萄', py: 'pútao', tones: ['2', '0'], surface: ['2', '0'] },
    { id: 'laoshi', text: '老师', py: 'lǎoshī', tones: ['3', '1'], surface: ['3h', '1'] },
    { id: 'meitian', text: '每天', py: 'měitiān', tones: ['3', '1'], surface: ['3h', '1'] },
    { id: 'lvyou', text: '旅游', py: 'lǚyóu', tones: ['3', '2'], surface: ['3h', '2'] },
    { id: 'youming', text: '有名', py: 'yǒumíng', tones: ['3', '2'], surface: ['3h', '2'] },
    { id: 'shuiguo', text: '水果', py: 'shuǐguǒ', tones: ['3', '3'], surface: ['2', '3'] },
    { id: 'xizao', text: '洗澡', py: 'xǐzǎo', tones: ['3', '3'], surface: ['2', '3'] },
    { id: 'kaoshi', text: '考试', py: 'kǎoshì', tones: ['3', '4'], surface: ['3h', '4'] },
    { id: 'haokan', text: '好看', py: 'hǎokàn', tones: ['3', '4'], surface: ['3h', '4'] },
    { id: 'yizi', text: '椅子', py: 'yǐzi', tones: ['3', '0'], surface: ['3h', '0'] },
    { id: 'xihuan', text: '喜欢', py: 'xǐhuan', tones: ['3', '0'], surface: ['3h', '0'] },
    { id: 'qiche', text: '汽车', py: 'qìchē', tones: ['4', '1'], surface: ['4', '1'] },
    { id: 'mianbao', text: '面包', py: 'miànbāo', tones: ['4', '1'], surface: ['4', '1'] },
    { id: 'wenti', text: '问题', py: 'wèntí', tones: ['4', '2'], surface: ['4', '2'] },
    { id: 'daxue', text: '大学', py: 'dàxué', tones: ['4', '2'], surface: ['4', '2'] },
    { id: 'diannao', text: '电脑', py: 'diànnǎo', tones: ['4', '3'], surface: ['4', '3'] },
    { id: 'tiaowu', text: '跳舞', py: 'tiàowǔ', tones: ['4', '3'], surface: ['4', '3'] },
    { id: 'zaijian', text: '再见', py: 'zàijiàn', tones: ['4', '4'], surface: ['4', '4'] },
    { id: 'dianshi', text: '电视', py: 'diànshì', tones: ['4', '4'], surface: ['4', '4'] },
    { id: 'baba', text: '爸爸', py: 'bàba', tones: ['4', '0'], surface: ['4', '0'] },
    { id: 'xiexie', text: '谢谢', py: 'xièxie', tones: ['4', '0'], surface: ['4', '0'] }
  ],
  rules: {
    '33': '两个三声相连，前一个读成二声。',
    '3h': '三声在一声、二声、四声和轻声前面只降不升，读半三声（21）。',
    'bu4': '“不”在四声前面读二声 bú。',
    'bu': '“不”在一声、二声、三声前面读原调 bù，不变。',
    'yi4': '“一”在四声前面读二声 yí。',
    'yi': '“一”在一声、二声、三声前面读四声 yì。',
    'yi1': '“一”单念、数数、表示序数（第一、一月）时读原调 yī，不变。'
  },
  /* written = 字典调（拼音按《汉语拼音正词法》标原调）; actual = 说出来的调 */
  sandhi: [
    { id: 'nihao', text: '你好', py: 'nǐ hǎo', written: ['3', '3'], actual: ['2', '3'], rule: '33' },
    { id: 'shuiguo', text: '水果', py: 'shuǐguǒ', written: ['3', '3'], actual: ['2', '3'], rule: '33' },
    { id: 'keyi', text: '可以', py: 'kěyǐ', written: ['3', '3'], actual: ['2', '3'], rule: '33' },
    { id: 'yusan', text: '雨伞', py: 'yǔsǎn', written: ['3', '3'], actual: ['2', '3'], rule: '33' },
    { id: 'laohu', text: '老虎', py: 'lǎohǔ', written: ['3', '3'], actual: ['2', '3'], rule: '33' },
    { id: 'laoshi', text: '老师', py: 'lǎoshī', written: ['3', '1'], actual: ['3h', '1'], rule: '3h' },
    { id: 'henmang', text: '很忙', py: 'hěn máng', written: ['3', '2'], actual: ['3h', '2'], rule: '3h' },
    { id: 'kaoshi', text: '考试', py: 'kǎoshì', written: ['3', '4'], actual: ['3h', '4'], rule: '3h' },
    { id: 'bushi', text: '不是', py: 'bù shì', written: ['4', '4'], actual: ['2', '4'], rule: 'bu4' },
    { id: 'buqu', text: '不去', py: 'bù qù', written: ['4', '4'], actual: ['2', '4'], rule: 'bu4' },
    { id: 'budui', text: '不对', py: 'bù duì', written: ['4', '4'], actual: ['2', '4'], rule: 'bu4' },
    { id: 'buchi', text: '不吃', py: 'bù chī', written: ['4', '1'], actual: ['4', '1'], rule: 'bu' },
    { id: 'bulai', text: '不来', py: 'bù lái', written: ['4', '2'], actual: ['4', '2'], rule: 'bu' },
    { id: 'buhao', text: '不好', py: 'bù hǎo', written: ['4', '3'], actual: ['4', '3'], rule: 'bu' },
    { id: 'yiyang', text: '一样', py: 'yīyàng', written: ['1', '4'], actual: ['2', '4'], rule: 'yi4' },
    { id: 'yiban', text: '一半', py: 'yībàn', written: ['1', '4'], actual: ['2', '4'], rule: 'yi4' },
    { id: 'yitian', text: '一天', py: 'yī tiān', written: ['1', '1'], actual: ['4', '1'], rule: 'yi' },
    { id: 'yinian', text: '一年', py: 'yī nián', written: ['1', '2'], actual: ['4', '2'], rule: 'yi' },
    { id: 'yiqi', text: '一起', py: 'yīqǐ', written: ['1', '3'], actual: ['4', '3'], rule: 'yi' },
    { id: 'diyi', text: '第一', py: 'dì-yī', written: ['4', '1'], actual: ['4', '1'], rule: 'yi1' },
    { id: 'yiyue', text: '一月', py: 'yīyuè', written: ['1', '4'], actual: ['1', '4'], rule: 'yi1' },
    { id: 'shiyi', text: '十一', py: 'shíyī', written: ['2', '1'], actual: ['2', '1'], rule: 'yi1' }
  ],
  reverse: '写的调和说的调不一定一样：拼音按规范标原调（nǐ hǎo、bù shì、yī tiān），说出来是 ní hǎo、bú shì、yì tiān。有的教材直接标实际读音，看到 bú shì 不要以为“不”的字典调是二声。本页“变调”里上面一行是写的，下面一行是说的。'
};

KT_DATA["pitch-ja"] = {
  id: 'pitch-ja', lang: 'ja', speech: 'ja-JP',
  title: '日语高低音调',
  subtitle: '东京标准语的音调是“高”和“低”两级，按拍（假名）一格一格排。每个词后面都接一个 が，因为有的词只有在助词上才看得出区别。',
  kcs: ['kt:ja-sound-pitch', 'kt:ja-sound-compound-accent', 'kt:ja-sound-loan-accent'],
  particle: 'が',
  ttsNote: '日语语音合成读音调常常不准：最小对立词（箸／橋／端）有时会读成一样，后接助词的高低也可能读错。请以图上的高低点为准，有条件的话给每个词加 audio（真人录音地址）。这里以东京型为参照，其他方言的读法不算错。',
  rule: '日语的“重音”是音高往下掉的地方，不是读得更重、更长。第 1 拍和第 2 拍高低一定不同；一个词里掉下来以后就不再升高。图里的 ＼ 标出掉下来的位置：没有 ＼ 的叫平板型，后面的 が 也是高的；＼ 在最后一拍后面的叫尾高型，单念和平板型一样，接上 が 才听得出 が 变低。',
  patterns: { '0': '平板型', '1': '頭高型', mid: '中高型', last: '尾高型' },
  /* accent = 下降核的位置：0 = 平板（不降），k = 第 k 拍之后下降。morae 按拍切分。读音按 NHK 日本語発音アクセント辞典式的东京音；拿不准的放在 review 里，不进练习。 */
  groups: [
    { id: 'hashi', label: 'はし：箸／橋／端', words: [
      { id: 'hashi-1', word: '箸', kana: 'はし', morae: ['は', 'し'], accent: 1, gloss: '筷子' },
      { id: 'hashi-2', word: '橋', kana: 'はし', morae: ['は', 'し'], accent: 2, gloss: '桥' },
      { id: 'hashi-0', word: '端', kana: 'はし', morae: ['は', 'し'], accent: 0, gloss: '边、端' }] },
    { id: 'ame', label: 'あめ：雨／飴', words: [
      { id: 'ame-1', word: '雨', kana: 'あめ', morae: ['あ', 'め'], accent: 1, gloss: '雨' },
      { id: 'ame-0', word: '飴', kana: 'あめ', morae: ['あ', 'め'], accent: 0, gloss: '糖' }] },
    { id: 'kaki', label: 'かき：牡蠣／柿', words: [
      { id: 'kaki-1', word: '牡蠣', kana: 'かき', morae: ['か', 'き'], accent: 1, gloss: '牡蛎' },
      { id: 'kaki-0', word: '柿', kana: 'かき', morae: ['か', 'き'], accent: 0, gloss: '柿子' }] },
    { id: 'hana', label: 'はな：花／鼻（要靠 が 区分）', words: [
      { id: 'hana-2', word: '花', kana: 'はな', morae: ['は', 'な'], accent: 2, gloss: '花' },
      { id: 'hana-0', word: '鼻', kana: 'はな', morae: ['は', 'な'], accent: 0, gloss: '鼻子' }] },
    { id: 'kami', label: 'かみ：神／紙', words: [
      { id: 'kami-1', word: '神', kana: 'かみ', morae: ['か', 'み'], accent: 1, gloss: '神' },
      { id: 'kami-2', word: '紙', kana: 'かみ', morae: ['か', 'み'], accent: 2, gloss: '纸' }] },
    { id: 'sake', label: 'さけ：鮭／酒', words: [
      { id: 'sake-1', word: '鮭', kana: 'さけ', morae: ['さ', 'け'], accent: 1, gloss: '三文鱼' },
      { id: 'sake-0', word: '酒', kana: 'さけ', morae: ['さ', 'け'], accent: 0, gloss: '酒' }] },
    { id: 'four', label: '三拍词的四种型', words: [
      { id: 'inochi', word: '命', kana: 'いのち', morae: ['い', 'の', 'ち'], accent: 1, gloss: '生命' },
      { id: 'anata', word: 'あなた', kana: 'あなた', morae: ['あ', 'な', 'た'], accent: 2, gloss: '你' },
      { id: 'otoko', word: '男', kana: 'おとこ', morae: ['お', 'と', 'こ'], accent: 3, gloss: '男人' },
      { id: 'sakana', word: '魚', kana: 'さかな', morae: ['さ', 'か', 'な'], accent: 0, gloss: '鱼' }] },
    { id: 'common', label: '常用词', words: [
      { id: 'neko', word: '猫', kana: 'ねこ', morae: ['ね', 'こ'], accent: 1, gloss: '猫' },
      { id: 'inu', word: '犬', kana: 'いぬ', morae: ['い', 'ぬ'], accent: 2, gloss: '狗' },
      { id: 'yama', word: '山', kana: 'やま', morae: ['や', 'ま'], accent: 2, gloss: '山' },
      { id: 'mizu', word: '水', kana: 'みず', morae: ['み', 'ず'], accent: 0, gloss: '水' },
      { id: 'sakura', word: '桜', kana: 'さくら', morae: ['さ', 'く', 'ら'], accent: 0, gloss: '樱花' },
      { id: 'onna', word: '女', kana: 'おんな', morae: ['お', 'ん', 'な'], accent: 3, gloss: '女人' },
      { id: 'nihon', word: '日本', kana: 'にほん', morae: ['に', 'ほ', 'ん'], accent: 2, gloss: '日本' },
      { id: 'tomodachi', word: '友達', kana: 'ともだち', morae: ['と', 'も', 'だ', 'ち'], accent: 0, gloss: '朋友' },
      { id: 'otouto', word: '弟', kana: 'おとうと', morae: ['お', 'と', 'う', 'と'], accent: 4, gloss: '弟弟' }] },
    { id: 'loan', label: '外来语（倒数第 3 拍开始降）', note: '多数外来语从倒数第 3 拍后面往下掉；如果那一拍是长音 ー、ン、ッ，就往前挪一拍。和英语原词的重音位置无关。', words: [
      { id: 'terebi', word: 'テレビ', kana: 'テレビ', morae: ['テ', 'レ', 'ビ'], accent: 1, gloss: '电视' },
      { id: 'kamera', word: 'カメラ', kana: 'カメラ', morae: ['カ', 'メ', 'ラ'], accent: 1, gloss: '相机' },
      { id: 'nyuusu', word: 'ニュース', kana: 'ニュース', morae: ['ニュ', 'ー', 'ス'], accent: 1, gloss: '新闻' },
      { id: 'doraibu', word: 'ドライブ', kana: 'ドライブ', morae: ['ド', 'ラ', 'イ', 'ブ'], accent: 2, gloss: '兜风' },
      { id: 'hanbaagaa', word: 'ハンバーガー', kana: 'ハンバーガー', morae: ['ハ', 'ン', 'バ', 'ー', 'ガ', 'ー'], accent: 3, gloss: '汉堡' },
      { id: 'konpyuutaa', word: 'コンピューター', kana: 'コンピューター', morae: ['コ', 'ン', 'ピュ', 'ー', 'タ', 'ー'], accent: 3, gloss: '电脑' },
      { id: 'amerika', word: 'アメリカ', kana: 'アメリカ', morae: ['ア', 'メ', 'リ', 'カ'], accent: 0, gloss: '美国（平板，是例外）' }] },
    { id: 'compound', label: '复合词（只剩一个下降）', note: '两个词合成一个词时只保留一个下降，位置多由后一半决定；以“語”结尾的语言名多是平板型。', words: [
      { id: 'natsuyasumi', word: '夏休み', kana: 'なつやすみ', morae: ['な', 'つ', 'や', 'す', 'み'], accent: 3, gloss: '暑假' },
      { id: 'nihonryouri', word: '日本料理', kana: 'にほんりょうり', morae: ['に', 'ほ', 'ん', 'りょ', 'う', 'り'], accent: 4, gloss: '日本菜' },
      { id: 'keitaidenwa', word: '携帯電話', kana: 'けいたいでんわ', morae: ['け', 'い', 'た', 'い', 'で', 'ん', 'わ'], accent: 5, gloss: '手机' },
      { id: 'nihongo', word: '日本語', kana: 'にほんご', morae: ['に', 'ほ', 'ん', 'ご'], accent: 0, gloss: '日语' },
      { id: 'eigo', word: '英語', kana: 'えいご', morae: ['え', 'い', 'ご'], accent: 0, gloss: '英语' }] }
  ],
  /* 拿不准或词典给出多种读法的词：不进练习，等母语者核对 */
  review: [
    { word: '卵', kana: 'たまご', candidates: [2, 0], note: '词典多列 2（中高），也有 0；不进练习。' },
    { word: 'コーヒー', kana: 'コーヒー', candidates: [3, 1], note: '课程 KC 例句写作 コ＼ーヒー（1），词典常见 3；需要核对后再定。' },
    { word: '心', kana: 'こころ', candidates: [2, 3], note: '中高和尾高都有记录。' },
    { word: '頭', kana: 'あたま', candidates: [3, 2], note: '尾高和中高都有记录。' },
    { word: '蜘蛛／雲', kana: 'くも', candidates: [1, 1], note: '两个词都是頭高，不构成最小对立，不能当成“雲／蜘蛛 靠音调区分”的例子。' }
  ],
  reverse: '假名不标音调：はし 三个词写法一样。尾高型（橋）和平板型（端）单念时听起来几乎相同，只有接 が、を 时才分开，所以练习里总带着 が。字典里的数字（[0][1][2]…）就是这里的 ＼ 位置。'
};
