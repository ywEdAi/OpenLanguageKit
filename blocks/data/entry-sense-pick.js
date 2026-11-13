/* Data packs for blocks/entry-sense-pick.html (prim:entry-sense-pick): entry-sense-pick-en, entry-sense-pick-zh.
 * (No ja pack: no Japanese KC binds this primitive in curriculum/ja/primitive-map.json.)
 *
 * Pack format
 *   entries  { <entryId>: { head, forms?, homs: [{py, senses}], phrases?: [{head, py?, senses}] } }
 *            A small learner's-dictionary entry written for this pack (not copied from any dictionary).
 *            homs = homographs under one head (zh 地道 dìdào / dìdao); an English entry has one hom whose py is the IPA.
 *            forms = regex that finds the word in a sentence the learner writes (step 3); default: head.
 *            sense: { id (unique within the entry), pos/posEn, reg?/regEn?, def (target language), zh | en (gloss in the
 *            interface language: en pack has zh glosses, never shown in English mode; zh pack has en glosses, shown only
 *            in English mode), ex (example in the entry), ex2 (second example, used only in step 3 "which sentence uses
 *            the same sense", where the entry is not shown) }
 *   items    [{ id, kc, entry, s, target, pos, lookup, answer, phrase?, why?, clues, noGloss?, note?/noteEn?, col? }]
 *            s = the sentence; zh sentences are segmented with "/" (tokens the learner can click as the clue),
 *            English sentences are split on spaces. target = the word(s) as they appear in s.
 *            pos = part of speech of the target here ("phrase" when the answer is a phrase sense).
 *            lookup = { answers: [dictionary forms, or pinyin for zh], chain/chainEn: how the form goes back,
 *                       wrong?: { <typed>: {msg, msgEn} } }
 *            answer = accepted sense ids. Two ids = both senses fit (reverse half: only a wider context decides; the
 *            other one must be ruled out as "this one also fits"). phrase = true: no single-word sense fits and the
 *            answer is in the phrase entries (reverse half).
 *            why = { <senseId>: [accepted reasons] } overrides the default (different part of speech → pos or meaning;
 *            same part of speech → meaning or collocation, plus register if the sense has a reg label).
 *            Reasons: pos | collocation | register | meaning | alsoFits.
 *            clues = tokens of s (lower case, no punctuation) the page accepts as the decisive clue.
 *            noGloss = hide glosses on this item (some items must be done from the target-language definitions only).
 *            col = a suggested collocation for the notebook (placeholder only).
 *   The right sense is the first sense of its entry in at most a third of the items.
 *   review/reviewEn  items a native-speaking teacher should check; not used in drills.
 * All definitions, examples and sentences were written for this pack.
 */
KT_DATA["entry-sense-pick-en"] = {
  "id": "entry-sense-pick-en", "lang": "en", "speech": "en-GB",
  "title": "英语查词典：选对义项", "titleEn": "English dictionary: picking the right sense",
  "subtitle": "先把句子里的形式还原成词典形，再在多个义项里选出这句话用的那一个，说明其他义项为什么不对。有的句子两个义项都说得通，有的要去查短语。", "subtitleEn": "Take the form in the sentence back to its dictionary form, pick the sense this sentence uses, and say why the others do not fit. In some sentences two senses both fit; in some you need the phrase entry.",
  "entries": {
    "light": {"head": "light", "forms": "\\b(light|lights|lighter|lightest|lit|lighted)\\b", "homs": [{"py": "/laɪt/", "senses": [
      {"id": "s1", "pos": "n", "def": "the brightness from the sun, a fire or a lamp that lets you see", "zh": "光、光线", "ex": "There isn't enough light in here to read.", "ex2": "Plants need light and water to grow."},
      {"id": "s2", "pos": "n", "def": "a lamp or other thing that gives light", "zh": "灯", "ex": "Please turn off the lights when you leave.", "ex2": "The traffic lights turned red."},
      {"id": "s3", "pos": "adj", "def": "not heavy; easy to lift or carry", "zh": "轻的", "ex": "This chair is light enough for a child to carry.", "ex2": "The box was so light that I thought it was empty."},
      {"id": "s4", "pos": "adj", "def": "(of a colour) pale, not dark", "zh": "浅色的", "ex": "She painted the kitchen light green.", "ex2": "He has light brown eyes."},
      {"id": "s5", "pos": "v", "def": "to make something start to burn", "zh": "点燃", "ex": "We lit a fire on the beach.", "ex2": "Can you light the candles on the cake?"}]}]},
    "run": {"head": "run", "forms": "\\b(run|runs|ran|running)\\b", "homs": [{"py": "/rʌn/", "senses": [
      {"id": "s1", "pos": "v", "def": "to move quickly on your feet, faster than walking", "zh": "跑", "ex": "The children ran across the playground.", "ex2": "How fast can you run 100 metres?"},
      {"id": "s2", "pos": "v", "def": "to be in charge of a business, shop or organisation", "zh": "经营、管理", "ex": "Her parents run a small restaurant.", "ex2": "Who runs the school library?"},
      {"id": "s3", "pos": "v", "def": "(of buses or trains) to travel on a route at regular times", "zh": "（车辆）按班次运行", "ex": "The trains don't run on Christmas Day.", "ex2": "This bus runs between the airport and the city centre."},
      {"id": "s4", "pos": "v", "def": "(of a machine or engine) to work; to be on", "zh": "（机器）运转", "ex": "Don't touch the machine while it's running.", "ex2": "The car runs on electricity."},
      {"id": "s5", "pos": "n", "def": "a time when you run, especially for exercise", "zh": "跑步", "ex": "I go for a run every morning.", "ex2": "After a long run, I always drink lots of water."}]}],
      "phrases": [
        {"head": "run out (of something)", "senses": [{"id": "p1", "pos": "phr v", "def": "to use all of something so that there is none left", "zh": "用完", "ex": "We've run out of bread.", "ex2": "My phone ran out of battery in the middle of the call."}]},
        {"head": "run into somebody", "senses": [{"id": "p2", "pos": "phr v", "def": "to meet somebody by chance", "zh": "偶然碰到", "ex": "I ran into my old teacher at the station.", "ex2": "Guess who I ran into at the supermarket!"}]}]},
    "fair": {"head": "fair", "forms": "\\b(fair|fairer|fairest|fairs)\\b", "homs": [{"py": "/feə/", "senses": [
      {"id": "s1", "pos": "adj", "def": "treating people equally or in the right way", "zh": "公平的", "ex": "The teacher is strict but fair.", "ex2": "Is it fair that she gets more money for the same work?"},
      {"id": "s2", "pos": "adj", "def": "(of hair or skin) pale or light in colour", "zh": "（头发）浅色的、金色的；（皮肤）白皙的", "ex": "He has fair skin and burns easily in the sun.", "ex2": "Both of the twins have fair hair."},
      {"id": "s3", "pos": "n", "def": "an event where people or companies show and sell things", "zh": "展销会、交易会", "ex": "Over two hundred publishers came to the book fair.", "ex2": "We bought our sofa at a furniture fair."},
      {"id": "s4", "pos": "adj", "reg": "formal", "regEn": "formal", "def": "(of weather) dry and fine", "zh": "（天气）晴朗的", "ex": "The forecast says it will be fair and warm tomorrow.", "ex2": "We sailed home in fair weather."}]}]},
    "change": {"head": "change", "forms": "\\b(change|changes|changed|changing)\\b", "homs": [{"py": "/tʃeɪndʒ/", "senses": [
      {"id": "s1", "pos": "v", "def": "to become different, or to make something different", "zh": "变化、改变", "ex": "The town has changed a lot since I was a child.", "ex2": "She changed her hairstyle."},
      {"id": "s2", "pos": "v", "def": "to stop using one thing and use another instead (change trains, change clothes)", "zh": "换", "ex": "I need to change my shoes before we go out.", "ex2": "You have to change buses at the hospital."},
      {"id": "s3", "pos": "n", "def": "coins; or the money you get back when you pay more than the price [U]", "zh": "零钱；找回的钱", "ex": "Here's ten pounds. Keep the change.", "ex2": "Have you got any change for the parking machine?"},
      {"id": "s4", "pos": "n", "def": "something that is different from before [C]", "zh": "变化", "ex": "There has been a change of plan.", "ex2": "Moving to the city was a big change for us."}]}]},
    "child": {"head": "child", "forms": "\\b(child|children)\\b", "homs": [{"py": "/tʃaɪld/ (pl. children)", "senses": [
      {"id": "s1", "pos": "n", "def": "a young person who is not yet an adult", "zh": "儿童、小孩", "ex": "The museum is free for children under twelve.", "ex2": "As a child, I lived by the sea."},
      {"id": "s2", "pos": "n", "def": "a son or daughter, of any age", "zh": "子女", "ex": "They have three children, all at university.", "ex2": "Her children are now in their forties."}]}]},
    "match": {"head": "match", "forms": "\\b(match|matches|matched|matching)\\b", "homs": [{"py": "/mætʃ/", "senses": [
      {"id": "s1", "pos": "n", "def": "a game in which two players or teams play against each other", "zh": "比赛", "ex": "We watched the tennis match on TV.", "ex2": "Our team lost the match 2–1."},
      {"id": "s2", "pos": "n", "def": "a small stick of wood that makes a flame when you rub it on a rough surface", "zh": "火柴", "ex": "Keep matches away from children.", "ex2": "He struck a match to see in the dark."},
      {"id": "s3", "pos": "v", "def": "to look good together because of colour, pattern or style", "zh": "相配", "ex": "Those shoes don't match your dress.", "ex2": "The curtains match the sofa."},
      {"id": "s4", "pos": "v", "def": "to be the same as something else", "zh": "相符、一致", "ex": "His fingerprints match the ones on the glass.", "ex2": "Your answer doesn't match the one in the book."}]}]},
    "take": {"head": "take", "forms": "\\b(take|takes|took|taken|taking)\\b", "homs": [{"py": "/teɪk/", "senses": [
      {"id": "s1", "pos": "v", "def": "to carry something, or go with somebody, to another place", "zh": "带去、拿去", "ex": "Take an umbrella with you.", "ex2": "I took my little sister to the zoo."},
      {"id": "s2", "pos": "v", "def": "to need a certain amount of time", "zh": "花费（时间）", "ex": "The journey takes about two hours.", "ex2": "It took me a week to finish the book."},
      {"id": "s3", "pos": "v", "def": "to get hold of something with your hands", "zh": "拿、握", "ex": "She took my hand and led me inside.", "ex2": "Take a card from the pile."},
      {"id": "s4", "pos": "v", "def": "to use a bus, train, taxi and so on", "zh": "乘坐", "ex": "We took a taxi to the hotel.", "ex2": "I usually take the train to work."}]}],
      "phrases": [{"head": "take off", "senses": [
        {"id": "p1", "pos": "phr v", "def": "(of a plane) to leave the ground and start flying", "zh": "起飞", "ex": "Our flight took off an hour late.", "ex2": "Please switch off your phone before the plane takes off."},
        {"id": "p2", "pos": "phr v", "def": "to remove a piece of clothing", "zh": "脱下（衣服）", "ex": "Take off your shoes at the door.", "ex2": "He took off his wet socks."}]}]},
    "bank": {"head": "bank", "forms": "\\b(bank|banks)\\b", "homs": [{"py": "/bæŋk/", "senses": [
      {"id": "s1", "pos": "n", "def": "a business that keeps money for people and lends money", "zh": "银行", "ex": "I opened an account at the bank.", "ex2": "The bank closes at four on Fridays."},
      {"id": "s2", "pos": "n", "def": "the land along the side of a river", "zh": "河岸", "ex": "We had a picnic on the bank of the river.", "ex2": "Ducks were sleeping on the bank."},
      {"id": "s3", "pos": "n", "def": "a place where something is stored to be used later", "zh": "库", "ex": "The hospital needs more blood for its blood bank.", "ex2": "The school keeps a bank of old exam papers."}]}]},
    "kind": {"head": "kind", "forms": "\\b(kind|kinds|kinder|kindest)\\b", "homs": [{"py": "/kaɪnd/", "senses": [
      {"id": "s1", "pos": "n", "def": "a type or sort", "zh": "种类", "ex": "What kind of films do you like?", "ex2": "This kind of bird only lives on islands."},
      {"id": "s2", "pos": "adj", "def": "friendly, generous and caring", "zh": "友善的、好心的", "ex": "It was kind of you to help.", "ex2": "Our neighbours have always been kind to us."}]}]},
    "left": {"head": "left", "forms": "\\bleft\\b", "homs": [{"py": "/left/", "senses": [
      {"id": "s1", "pos": "adj, adv", "posEn": "adj, adv", "def": "on or towards the side of your body that is west when you face north", "zh": "左边的；向左", "ex": "Turn left at the end of the street.", "ex2": "She writes with her left hand."},
      {"id": "s2", "pos": "n", "def": "the left side or direction", "zh": "左边", "ex": "The school is on the left.", "ex2": "In Britain, cars drive on the left."}]}]},
    "leave": {"head": "leave", "forms": "\\b(leave|leaves|left|leaving)\\b", "homs": [{"py": "/liːv/", "senses": [
      {"id": "s1", "pos": "v", "def": "to go away from a place or person", "zh": "离开", "ex": "The train leaves at 8:15.", "ex2": "She left home at eighteen."},
      {"id": "s2", "pos": "v", "def": "to put something somewhere and not take it with you, often by mistake", "zh": "落下、遗留", "ex": "I left my keys at the office.", "ex2": "Don't leave your bag on the seat."},
      {"id": "s3", "pos": "v", "def": "to let something stay as it is", "zh": "让……保持", "ex": "Leave the window open, please.", "ex2": "Leave the dishes; I'll wash them later."}]}]}
  },
  "items": [
    {"id": "light-bag", "kc": "kt:en-str-dictionary-learning", "entry": "light", "s": "She carried a light bag up the stairs.", "target": "light", "pos": "adj",
     "lookup": {"answers": ["light"], "chain": "原形，直接查 light", "chainEn": "already the dictionary form"}, "answer": ["s3"], "clues": ["carried", "bag", "stairs", "up"], "col": "a light bag"},
    {"id": "light-turn", "kc": "kt:en-str-dictionary-learning", "entry": "light", "s": "Can you turn on the light? It's dark in here.", "target": "light", "pos": "n",
     "lookup": {"answers": ["light"], "chain": "原形，直接查 light", "chainEn": "already the dictionary form"}, "answer": ["s2"], "clues": ["turn", "on", "dark"],
     "why": {"s1": ["meaning", "collocation"]}, "note": "光本身（①）不能“打开”，能 turn on 的是灯。", "noteEn": "Brightness itself (①) cannot be turned on; a lamp can.", "col": "turn on the light"},
    {"id": "light-blue", "kc": "kt:en-str-dictionary-learning", "entry": "light", "s": "He wore a light blue shirt to the party.", "target": "light", "pos": "adj", "noGloss": true,
     "lookup": {"answers": ["light"], "chain": "原形，直接查 light", "chainEn": "already the dictionary form"}, "answer": ["s4"], "clues": ["blue"], "col": "light blue"},
    {"id": "lighter-case", "kc": "kt:en-str-dictionary-learning", "entry": "light", "s": "The lighter suitcase is mine; the heavy one is yours.", "target": "lighter", "pos": "adj",
     "lookup": {"answers": ["light"], "chain": "lighter ← light + -er（比较级）", "chainEn": "lighter ← light + -er (comparative)"}, "answer": ["s3"], "clues": ["heavy", "suitcase"], "col": "a lighter suitcase"},
    {"id": "runs-hotel", "kc": "kt:en-str-dictionary-learning", "entry": "run", "s": "My uncle runs a small hotel by the sea.", "target": "runs", "pos": "v",
     "lookup": {"answers": ["run"], "chain": "runs ← run + -s（第三人称单数）", "chainEn": "runs ← run + -s (third person singular)"}, "answer": ["s2"], "clues": ["hotel", "small", "uncle"], "col": "run a hotel"},
    {"id": "run-buses", "kc": "kt:en-str-dictionary-learning", "entry": "run", "s": "The buses run every ten minutes during the day.", "target": "run", "pos": "v", "noGloss": true,
     "lookup": {"answers": ["run"], "chain": "原形，直接查 run", "chainEn": "already the dictionary form"}, "answer": ["s3"], "clues": ["buses", "every", "minutes"], "col": "buses run every ten minutes"},
    {"id": "running-train", "kc": "kt:en-str-dictionary-learning", "entry": "run", "s": "She was running to catch the train.", "target": "running", "pos": "v",
     "lookup": {"answers": ["run"], "chain": "running ← run + n + -ing（短元音后双写 n）", "chainEn": "running ← run + n + -ing (n doubled after a short vowel)", "wrong": {"runn": {"msg": "词典里没有 runn。双写的 n 是加 -ing 时多出来的。", "msgEn": "There is no runn in the dictionary. The second n was added with -ing."}}}, "answer": ["s1"], "clues": ["catch", "train"], "col": "run to catch a train"},
    {"id": "ran-out", "kc": "kt:en-str-dictionary-learning", "entry": "run", "s": "We ran out of milk, so I had my coffee black.", "target": "ran out of", "pos": "phrase", "phrase": true,
     "lookup": {"answers": ["run", "run out", "run out of"], "chain": "ran ← run（不规则过去式）；后面的 out of 提示是短语", "chainEn": "ran ← run (irregular past); out of after it suggests a phrase"}, "answer": ["p1"], "clues": ["milk", "out", "of", "black"], "col": "run out of milk"},
    {"id": "fair-cake", "kc": "kt:en-str-dictionary-learning", "entry": "fair", "s": "It isn't fair — he got more cake than me!", "target": "fair", "pos": "adj",
     "lookup": {"answers": ["fair"], "chain": "原形，直接查 fair", "chainEn": "already the dictionary form"}, "answer": ["s1"], "clues": ["more", "than", "got", "isn't"], "col": "it isn't fair"},
    {"id": "fair-hair", "kc": "kt:en-str-dictionary-learning", "entry": "fair", "s": "She has fair hair and blue eyes.", "target": "fair", "pos": "adj",
     "lookup": {"answers": ["fair"], "chain": "原形，直接查 fair", "chainEn": "already the dictionary form"}, "answer": ["s2"], "clues": ["hair", "eyes", "blue"], "col": "fair hair"},
    {"id": "fair-book", "kc": "kt:en-str-dictionary-learning", "entry": "fair", "s": "We met lots of writers at the book fair last weekend.", "target": "fair", "pos": "n",
     "lookup": {"answers": ["fair"], "chain": "原形，直接查 fair", "chainEn": "already the dictionary form"}, "answer": ["s3"], "clues": ["book", "writers", "met", "at", "the"], "col": "a book fair"},
    {"id": "change-bus", "kc": "kt:en-str-dictionary-learning", "entry": "change", "s": "I need some change for the bus.", "target": "change", "pos": "n",
     "lookup": {"answers": ["change"], "chain": "原形，直接查 change", "chainEn": "already the dictionary form"}, "answer": ["s3"], "clues": ["some", "bus"], "why": {"s4": ["meaning", "collocation"]}, "col": "some change"},
    {"id": "changed-trains", "kc": "kt:en-str-dictionary-learning", "entry": "change", "s": "We changed trains at the next station.", "target": "changed", "pos": "v", "noGloss": true,
     "lookup": {"answers": ["change"], "chain": "changed ← change + -d（过去式）", "chainEn": "changed ← change + -d (past tense)"}, "answer": ["s2"], "clues": ["trains", "station"], "col": "change trains"},
    {"id": "children-grown", "kc": "kt:en-str-dictionary-learning", "entry": "child", "s": "Their children are all grown up and have jobs now.", "target": "children", "pos": "n",
     "lookup": {"answers": ["child"], "chain": "children ← child（不规则复数）", "chainEn": "children ← child (irregular plural)", "wrong": {"childs": {"msg": "child 的复数不是加 -s。词典里没有 childs。", "msgEn": "child does not take -s in the plural. There is no childs in the dictionary."}}}, "answer": ["s2"], "clues": ["grown", "jobs", "their", "up"], "col": "their grown-up children"},
    {"id": "children-noisy", "kc": "kt:en-str-dictionary-learning", "entry": "child", "s": "Our neighbour's children are very noisy.", "target": "children", "pos": "n",
     "lookup": {"answers": ["child"], "chain": "children ← child（不规则复数）", "chainEn": "children ← child (irregular plural)"}, "answer": ["s1", "s2"], "clues": ["neighbour's", "noisy", "our"],
     "note": "说的是邻居的子女，多半也是小孩；只有这一句定不下来。", "noteEn": "They are the neighbour's sons and daughters, and probably young too; this sentence alone cannot decide.", "col": "noisy children"},
    {"id": "match-candle", "kc": "kt:en-str-dictionary-learning", "entry": "match", "s": "Have you got a match? I want to light the candles.", "target": "match", "pos": "n",
     "lookup": {"answers": ["match"], "chain": "原形，直接查 match", "chainEn": "already the dictionary form"}, "answer": ["s2"], "clues": ["light", "candles", "got"], "col": "strike a match"},
    {"id": "matches-tie", "kc": "kt:en-str-dictionary-learning", "entry": "match", "s": "That tie matches your shirt really well.", "target": "matches", "pos": "v", "noGloss": true,
     "lookup": {"answers": ["match"], "chain": "matches ← match + -es（第三人称单数）", "chainEn": "matches ← match + -es (third person singular)"}, "answer": ["s3"], "clues": ["tie", "shirt", "well"], "why": {"s4": ["meaning"]}, "col": "match your shirt"},
    {"id": "took-off-plane", "kc": "kt:en-str-dictionary-learning", "entry": "take", "s": "The plane took off at six in the morning.", "target": "took off", "pos": "phrase", "phrase": true,
     "lookup": {"answers": ["take", "take off"], "chain": "took ← take（不规则过去式）；后面的 off 提示是短语", "chainEn": "took ← take (irregular past); off after it suggests a phrase", "wrong": {"took": {"msg": "took 是变形，词典里要查它的原形。", "msgEn": "took is an inflected form; look up its dictionary form."}}}, "answer": ["p1"], "clues": ["plane"], "col": "the plane took off"},
    {"id": "take-off-coat", "kc": "kt:en-str-dictionary-learning", "entry": "take", "s": "Take off your coat and sit down.", "target": "take off", "pos": "phrase", "phrase": true,
     "lookup": {"answers": ["take", "take off"], "chain": "原形 take；后面的 off 提示是短语", "chainEn": "take is the dictionary form; off after it suggests a phrase"}, "answer": ["p2"], "clues": ["coat", "your"], "col": "take off your coat"},
    {"id": "bank-saturday", "kc": "kt:en-str-dictionary-learning", "entry": "bank", "s": "On Saturday morning the bank was full of people.", "target": "bank", "pos": "n",
     "lookup": {"answers": ["bank"], "chain": "原形，直接查 bank", "chainEn": "already the dictionary form"}, "answer": ["s1", "s2"], "clues": ["full", "people", "saturday", "morning"],
     "note": "银行里人很多、河岸上人很多都说得通；要看前后文。", "noteEn": "A crowded bank and a crowded river bank both make sense; you need the text around it.", "col": "the bank was full"},
    {"id": "kind-music", "kc": "kt:en-str-dictionary-learning", "entry": "kind", "s": "What kind of music do you like?", "target": "kind", "pos": "n", "noGloss": true,
     "lookup": {"answers": ["kind"], "chain": "原形，直接查 kind", "chainEn": "already the dictionary form"}, "answer": ["s1"], "clues": ["what", "of", "music"], "col": "what kind of"},
    {"id": "left-bag", "kc": "kt:en-str-dictionary-learning", "entry": "leave", "s": "She left her phone on the bus.", "target": "left", "pos": "v",
     "lookup": {"answers": ["leave"], "chain": "left ← leave（不规则过去式），不是“左边”的 left", "chainEn": "left ← leave (irregular past), not left as in “left side”",
       "wrong": {"left": {"msg": "left 这个词条讲的是“左边”，放进这句讲不通。这里的 left 会不会是另一个词的变形？", "msgEn": "The entry left is about the left side; it makes no sense here. Could this left be a form of another word?"}}}, "answer": ["s2"], "clues": ["phone", "on", "bus", "her"], "col": "leave something on the bus"},
    {"id": "left-turn", "kc": "kt:en-str-dictionary-learning", "entry": "left", "s": "Turn left at the end of the street.", "target": "left", "pos": "adv",
     "lookup": {"answers": ["left"], "chain": "原形，直接查 left（这里不是 leave 的过去式）", "chainEn": "already the dictionary form (not the past of leave here)",
       "wrong": {"leave": {"msg": "leave 的义项都是“离开、留下”，放进 Turn ___ 讲不通。", "msgEn": "The senses of leave are about going away or leaving things; they make no sense after Turn."}}}, "answer": ["s1"], "clues": ["turn", "street", "end"], "why": {"s2": ["pos", "meaning"]}, "col": "turn left"}
  ],
  "review": [
    "fair 的“天气晴朗”义项标为 formal，课堂上可能需要说明它较少用",
    "children-noisy、bank-saturday 两句设计为两个义项都说得通，请确认没有一般读者都会偏向的那一个",
    "change ③ 的定义合并了“零钱”和“找回的钱”两层意思",
    "light ⑤ 的过去式 lit／lighted 都收在 forms 里"
  ],
  "reviewEn": [
    "fair (of weather) is labelled formal; a class may need to be told it is not common",
    "children-noisy and bank-saturday are meant to fit two senses; please confirm ordinary readers do not lean to one",
    "change ③ combines “coins” and “money you get back” in one definition",
    "both lit and lighted are accepted as forms of light ⑤"
  ]
};

KT_DATA["entry-sense-pick-zh"] = {
  "id": "entry-sense-pick-zh", "lang": "zh", "speech": "zh-CN",
  "title": "汉语查词典：读音和义项", "titleEn": "Chinese dictionary: reading and sense",
  "subtitle": "先按这句话里的读音找到词条（多音词读音不同，词条也不同），再在几个义项里选出这句话用的那一个，并说明其他义项为什么不对。", "subtitleEn": "Find the entry by how the word is read in this sentence (a word with two readings has two entries), then pick the sense the sentence uses and say why the others do not fit.",
  "entries": {
    "didao": {"head": "地道", "homs": [
      {"py": "dìdào", "senses": [{"id": "s1", "pos": "名", "posEn": "n", "def": "在地面下挖成的通道", "en": "an underground tunnel", "ex": "地道的出口在一片树林里。", "ex2": "这条地道可以一直通到河边。"}]},
      {"py": "dìdao", "senses": [
        {"id": "s2", "pos": "形", "posEn": "adj", "def": "真正是有名的产地出产的", "en": "genuinely from the place known for it (of produce, medicinal herbs)", "ex": "药店里卖的都是地道药材。", "ex2": "这是从产地直接运来的地道枸杞。"},
        {"id": "s3", "pos": "形", "posEn": "adj", "def": "真正的，纯正的", "en": "genuine, authentic", "ex": "她的英语说得很地道。", "ex2": "这家小馆的川菜做得很地道。"},
        {"id": "s4", "pos": "形", "posEn": "adj", "def": "（工作或材料）实在，够标准", "en": "(of work or materials) solid, up to standard", "ex": "这张桌子做工很地道。", "ex2": "他干活儿一向地道，从不偷工减料。"}]}]},
    "jingshen": {"head": "精神", "homs": [
      {"py": "jīngshén", "senses": [
        {"id": "s1", "pos": "名", "posEn": "n", "def": "人的意识、思维和一般心理状态", "en": "mind; mental state", "ex": "他最近精神压力很大。", "ex2": "精神上的支持对病人很重要。"},
        {"id": "s2", "pos": "名", "posEn": "n", "def": "宗旨，主要的意义", "en": "the essence or main idea (of a document, a speech)", "ex": "这篇文章的精神是鼓励创新。", "ex2": "我们要按照文件的精神办事。"}]},
      {"py": "jīngshen", "senses": [
        {"id": "s3", "pos": "名", "posEn": "n", "def": "表现出来的活力", "en": "energy, vigour", "ex": "睡了一觉，他精神好多了。", "ex2": "打起精神来，还有最后一公里！"},
        {"id": "s4", "pos": "形", "posEn": "adj", "def": "有活力，有生气；（样子）英俊、利落", "en": "lively; smart-looking", "ex": "这孩子大眼睛，看起来很精神。", "ex2": "他穿上制服显得特别精神。"}]}]},
    "dayi": {"head": "大意", "homs": [
      {"py": "dàyì", "senses": [{"id": "s1", "pos": "名", "posEn": "n", "def": "主要的意思", "en": "the general idea, the gist", "ex": "先读一遍，了解文章的大意。", "ex2": "讲座我只听懂了大意。"}]},
      {"py": "dàyi", "senses": [{"id": "s2", "pos": "形", "posEn": "adj", "def": "疏忽，不注意", "en": "careless", "ex": "开车可不能大意。", "ex2": "他一时大意，把钥匙锁在了屋里。"}]}]},
    "pianyi": {"head": "便宜", "homs": [
      {"py": "piányi", "senses": [
        {"id": "s1", "pos": "形", "posEn": "adj", "def": "价钱低", "en": "cheap, inexpensive", "ex": "这件衣服很便宜。", "ex2": "网上买书比书店便宜。"},
        {"id": "s2", "pos": "名", "posEn": "n", "def": "不应该得到的好处", "en": "an advantage one should not have (占便宜: take advantage)", "ex": "他总想占小便宜。", "ex2": "这种便宜不能占。"},
        {"id": "s3", "pos": "动", "posEn": "v", "def": "使得到好处（常指放过某人）", "en": "to let someone off lightly; to benefit someone", "ex": "这次就便宜你了，下次可不行。", "ex2": "这么一来，倒便宜了他。"}]},
      {"py": "biànyí", "senses": [
        {"id": "s4", "pos": "形", "posEn": "adj", "reg": "书面", "regEn": "written", "def": "方便合适（多用于“便宜行事”）", "en": "as one sees fit (mainly in 便宜行事)", "ex": "情况紧急，可以便宜行事。", "ex2": "他到了当地，获准便宜行事。"}]}]},
    "yisi": {"head": "意思", "homs": [{"py": "yìsi", "senses": [
      {"id": "s1", "pos": "名", "posEn": "n", "def": "语言文字的意义", "en": "meaning (of words)", "ex": "这个词是什么意思？", "ex2": "这句话的意思不太清楚。"},
      {"id": "s2", "pos": "名", "posEn": "n", "def": "意见，愿望", "en": "what someone means or wants", "ex": "我的意思是明天再去。", "ex2": "你们的意思我明白了。"},
      {"id": "s3", "pos": "名", "posEn": "n", "def": "指礼品所代表的心意", "en": "a token of goodwill (said of a small gift)", "ex": "这是我们的一点意思，请收下。", "ex2": "东西不多，就是一点意思。"},
      {"id": "s4", "pos": "名", "posEn": "n", "def": "趣味，情趣", "en": "interest, fun", "ex": "这本小说很有意思。", "ex2": "天天做同样的事，真没意思。"}]}],
      "phrases": [{"head": "不好意思", "py": "bù hǎoyìsi", "senses": [
        {"id": "p1", "pos": "形", "posEn": "adj", "def": "害羞，难为情", "en": "shy, embarrassed", "ex": "被大家一夸，她有点不好意思。", "ex2": "他不好意思开口借钱。"},
        {"id": "p2", "pos": "客套话", "posEn": "polite phrase", "def": "表示歉意", "en": "sorry; excuse me (polite apology)", "ex": "不好意思，让您久等了。", "ex2": "不好意思，借过一下。"}]}]},
    "bawo": {"head": "把握", "homs": [{"py": "bǎwò", "senses": [
      {"id": "s1", "pos": "动", "posEn": "v", "def": "握，拿", "en": "to hold, grip", "ex": "他稳稳地把握着方向盘。", "ex2": "老船工把握着船舵，一句话也不说。"},
      {"id": "s2", "pos": "动", "posEn": "v", "def": "抓住（抽象的东西）", "en": "to seize, grasp (an opportunity, the main point)", "ex": "要把握机会。", "ex2": "这篇文章他把握住了重点。"},
      {"id": "s3", "pos": "名", "posEn": "n", "def": "成功的可靠性", "en": "certainty of success, confidence", "ex": "这件事我没有把握。", "ex2": "他有十足的把握通过考试。"}]}]},
    "xiaohua": {"head": "消化", "homs": [{"py": "xiāohuà", "senses": [
      {"id": "s1", "pos": "动", "posEn": "v", "def": "食物在体内变成能被吸收的养分", "en": "to digest (food)", "ex": "吃得太快不好消化。", "ex2": "这种食物容易消化。"},
      {"id": "s2", "pos": "动", "posEn": "v", "def": "比喻理解、吸收学到的知识", "en": "to take in, absorb (knowledge)", "ex": "这么多内容，一时消化不了。", "ex2": "上完课，要花时间消化笔记。"}]}]},
    "baofu": {"head": "包袱", "homs": [{"py": "bāofu", "senses": [
      {"id": "s1", "pos": "名", "posEn": "n", "def": "包东西用的布", "en": "a cloth for wrapping things", "ex": "她用一块包袱把衣服包好。", "ex2": "包袱皮是蓝底白花的。"},
      {"id": "s2", "pos": "名", "posEn": "n", "def": "用布包起来的包儿", "en": "a bundle wrapped in cloth", "ex": "他背着一个包袱出了门。", "ex2": "老人打开包袱，拿出几件旧衣服。"},
      {"id": "s3", "pos": "名", "posEn": "n", "def": "比喻某种负担", "en": "a burden, a weight on one's mind", "ex": "他放下了思想包袱，轻松多了。", "ex2": "家里的债成了他的包袱。"},
      {"id": "s4", "pos": "名", "posEn": "n", "def": "相声、小品等里面的笑料", "en": "a punchline (in comic dialogue)", "ex": "演员抖了个包袱，全场大笑。", "ex2": "这个小品的包袱不太好笑。"}]}]},
    "menkan": {"head": "门槛", "homs": [{"py": "ménkǎn", "senses": [
      {"id": "s1", "pos": "名", "posEn": "n", "def": "门框下面挨着地面的横木或长石", "en": "a doorsill, a threshold", "ex": "进门小心，别被门槛绊倒。", "ex2": "老房子的门槛很高。"},
      {"id": "s2", "pos": "名", "posEn": "n", "def": "比喻进入某个范围的标准或条件", "en": "the bar for entry, requirements", "ex": "这家公司招人的门槛很高。", "ex2": "政府想降低创业的门槛。"}]}]},
    "shenru": {"head": "深入", "homs": [{"py": "shēnrù", "senses": [
      {"id": "s1", "pos": "动", "posEn": "v", "def": "进入事物的内部或中心", "en": "to go deep into (a place, a group)", "ex": "医生深入农村，给村民看病。", "ex2": "摄制组深入森林拍了三个月。"},
      {"id": "s2", "pos": "形", "posEn": "adj", "def": "深刻，透彻", "en": "thorough, in-depth", "ex": "这篇文章分析得很深入。", "ex2": "双方进行了深入的交流。"}]}]},
    "qianti": {"head": "前提", "homs": [{"py": "qiántí", "senses": [
      {"id": "s1", "pos": "名", "posEn": "n", "reg": "术语", "regEn": "technical", "def": "逻辑推理中，由它推出另一个判断的判断", "en": "a premise (in logic)", "ex": "前提错了，结论也靠不住。", "ex2": "这个推理的大前提有问题。"},
      {"id": "s2", "pos": "名", "posEn": "n", "def": "事物发生或发展的先决条件", "en": "a precondition", "ex": "健康是一切的前提。", "ex2": "以不影响学习为前提，可以去打工。"}]}]},
    "huo": {"head": "火", "homs": [{"py": "huǒ", "senses": [
      {"id": "s1", "pos": "名", "posEn": "n", "def": "东西燃烧时发出的光和焰", "en": "fire, flame", "ex": "他用火柴点着了火。", "ex2": "山上起火了。"},
      {"id": "s2", "pos": "形", "posEn": "adj", "reg": "口语", "regEn": "colloquial", "def": "兴旺，受欢迎", "en": "popular, booming (colloquial)", "ex": "这家店生意特别火。", "ex2": "这部电影最近很火。"},
      {"id": "s3", "pos": "名/动", "posEn": "n/v", "def": "怒气；发怒", "en": "anger; to get angry", "ex": "有话好好说，别发火。", "ex2": "他一听这话就火了。"}]}]},
    "zou": {"head": "走", "homs": [{"py": "zǒu", "senses": [
      {"id": "s1", "pos": "动", "posEn": "v", "def": "人或鸟兽的脚交互向前移动", "en": "to walk", "ex": "我们走着去学校吧。", "ex2": "孩子刚学会走。"},
      {"id": "s2", "pos": "动", "posEn": "v", "def": "离开，去", "en": "to leave, to go", "ex": "时间不早了，我该走了。", "ex2": "他昨天就走了，回老家去了。"},
      {"id": "s3", "pos": "动", "posEn": "v", "reg": "婉辞", "regEn": "euphemism", "def": "指人死", "en": "to pass away", "ex": "老人走得很安详。", "ex2": "他父亲去年冬天走了。"},
      {"id": "s4", "pos": "动", "posEn": "v", "def": "（亲友之间）来往", "en": "to visit (relatives, friends)", "ex": "春节期间，大家忙着走亲戚。", "ex2": "两家人一直走得很近。"}]}]},
    "da": {"head": "打", "homs": [{"py": "dǎ", "senses": [
      {"id": "s1", "pos": "动", "posEn": "v", "def": "用手或器具撞击物体", "en": "to hit, strike", "ex": "他在台上打鼓。", "ex2": "有话好好说，不许打人。"},
      {"id": "s2", "pos": "动", "posEn": "v", "def": "发出，发送", "en": "to send out (a call)", "ex": "我给妈妈打了个电话。", "ex2": "到了给我打个电话。"},
      {"id": "s3", "pos": "动", "posEn": "v", "def": "举，提", "en": "to hold up (an umbrella, a lantern)", "ex": "外面下雨，打把伞吧。", "ex2": "他打着灯笼走在前面。"},
      {"id": "s4", "pos": "动", "posEn": "v", "def": "做某种游戏或运动", "en": "to play (a ball game, cards)", "ex": "下午我们去打篮球。", "ex2": "他们在打扑克。"}]}],
      "phrases": [{"head": "打招呼", "py": "dǎ zhāohu", "senses": [
        {"id": "p1", "pos": "动", "posEn": "v", "def": "用语言或动作表示问候", "en": "to greet", "ex": "他笑着跟邻居打招呼。", "ex2": "见了面总得打个招呼。"},
        {"id": "p2", "pos": "动", "posEn": "v", "def": "（事先或事后）就某件事通知对方", "en": "to let someone know (in advance)", "ex": "要请假的话，先跟老师打个招呼。", "ex2": "这事我已经跟他打过招呼了。"}]}]},
    "kai": {"head": "开", "homs": [{"py": "kāi", "senses": [
      {"id": "s1", "pos": "动", "posEn": "v", "def": "使关着的东西不再关着", "en": "to open", "ex": "请把窗户开开。", "ex2": "门开着，你直接进来吧。"},
      {"id": "s2", "pos": "动", "posEn": "v", "def": "驾驶", "en": "to drive (a vehicle)", "ex": "他每天开车上班。", "ex2": "你会开船吗？"},
      {"id": "s3", "pos": "动", "posEn": "v", "def": "举行（会议等）", "en": "to hold (a meeting)", "ex": "我们下午三点开会。", "ex2": "学校明天开运动会。"},
      {"id": "s4", "pos": "动", "posEn": "v", "def": "开设，建立", "en": "to open, set up (a shop, a business)", "ex": "她在学校旁边开了一家书店。", "ex2": "这家公司是去年才开的。"}]}],
      "phrases": [{"head": "开夜车", "py": "kāi yèchē", "senses": [
        {"id": "p1", "pos": "动", "posEn": "v", "def": "为了赶时间，夜里继续工作或学习", "en": "to work or study late into the night", "ex": "考试前别总开夜车。", "ex2": "为了赶报告，他开了一夜车。"}]}]}
  },
  "items": [
    {"id": "didao-beijing", "kc": "kt:zh-lex-l7-core", "entry": "didao", "s": "他/说/一口/地道/的/北京话/。", "target": "地道", "pos": "形",
     "lookup": {"answers": ["dìdao"], "chain": "这里读 dìdao，“道”读轻声；读 dìdào 是另一个词条", "chainEn": "read dìdao here, with a neutral tone on 道; dìdào is another entry"}, "answer": ["s3"], "clues": ["北京话", "说", "一口"], "why": {"s2": ["meaning", "collocation"]}, "col": "地道的北京话"},
    {"id": "didao-work", "kc": "kt:zh-lex-l7-core", "entry": "didao", "s": "这/活儿/干/得/真/地道/。", "target": "地道", "pos": "形",
     "lookup": {"answers": ["dìdao"], "chain": "这里读 dìdao，“道”读轻声", "chainEn": "read dìdao, with a neutral tone on 道"}, "answer": ["s4"], "clues": ["活儿", "干"], "col": "活儿干得地道"},
    {"id": "didao-tunnel", "kc": "kt:zh-lex-l7-core", "entry": "didao", "s": "战争/时期/，/村民/们/挖/了/很多/地道/。", "target": "地道", "pos": "名",
     "lookup": {"answers": ["dìdào"], "chain": "这里读 dìdào，两个字都是第四声", "chainEn": "read dìdào, both syllables in the fourth tone"}, "answer": ["s1"], "clues": ["挖", "战争", "村民"], "col": "挖地道"},
    {"id": "jingshen-tired", "kc": "kt:zh-lex-l7-core", "entry": "jingshen", "s": "他/昨晚/没/睡好/，/今天/一点儿/精神/也/没有/。", "target": "精神", "pos": "名",
     "lookup": {"answers": ["jīngshen"], "chain": "这里读 jīngshen，“神”读轻声", "chainEn": "read jīngshen, with a neutral tone on 神"}, "answer": ["s3"], "clues": ["睡好", "没", "昨晚", "一点儿"], "why": {"s1": ["meaning"]}, "col": "没有精神"},
    {"id": "jingshen-meeting", "kc": "kt:zh-lex-l7-core", "entry": "jingshen", "s": "大家/要/认真/领会/这次/会议/的/精神/。", "target": "精神", "pos": "名", "noGloss": true,
     "lookup": {"answers": ["jīngshén"], "chain": "这里读 jīngshén", "chainEn": "read jīngshén"}, "answer": ["s2"], "clues": ["会议", "领会"], "col": "领会会议精神"},
    {"id": "jingshen-suit", "kc": "kt:zh-lex-l7-core", "entry": "jingshen", "s": "他/穿/上/西装/，/显得/很/精神/。", "target": "精神", "pos": "形",
     "lookup": {"answers": ["jīngshen"], "chain": "这里读 jīngshen，“神”读轻声", "chainEn": "read jīngshen, with a neutral tone on 神"}, "answer": ["s4"], "clues": ["很", "显得", "西装"], "col": "显得很精神"},
    {"id": "dayi-exam", "kc": "kt:zh-lex-l7-core", "entry": "dayi", "s": "这次/考试/我/太/大意/了/，/看错/了/好几/道/题/。", "target": "大意", "pos": "形",
     "lookup": {"answers": ["dàyi"], "chain": "这里读 dàyi，“意”读轻声；读 dàyì 是“主要的意思”", "chainEn": "read dàyi, with a neutral tone on 意; dàyì means “the gist”"}, "answer": ["s2"], "clues": ["看错", "太", "了"], "col": "太大意了"},
    {"id": "dayi-gist", "kc": "kt:zh-lex-l7-core", "entry": "dayi", "s": "请/用/一句话/概括/这段/文字/的/大意/。", "target": "大意", "pos": "名",
     "lookup": {"answers": ["dàyì"], "chain": "这里读 dàyì", "chainEn": "read dàyì"}, "answer": ["s1"], "clues": ["概括", "文字", "这段"], "col": "段落大意"},
    {"id": "pianyi-zhan", "kc": "kt:zh-lex-l7-core", "entry": "pianyi", "s": "别/总/想着/占/别人/的/便宜/。", "target": "便宜", "pos": "名",
     "lookup": {"answers": ["piányi"], "chain": "这里读 piányi，“宜”读轻声", "chainEn": "read piányi, with a neutral tone on 宜"}, "answer": ["s2"], "clues": ["占", "别人"], "col": "占便宜"},
    {"id": "pianyi-xingshi", "kc": "kt:zh-lex-l7-core", "entry": "pianyi", "s": "上级/允许/他/根据/情况/便宜行事/。", "target": "便宜行事", "pos": "形",
     "lookup": {"answers": ["biànyí", "biànyí xíngshì"], "chain": "这里读 biànyí：“便”读 biàn（方便的便）", "chainEn": "read biànyí: 便 as in 方便"}, "answer": ["s4"], "clues": ["允许", "根据", "情况", "上级"], "col": "便宜行事"},
    {"id": "yisi-gift", "kc": "kt:zh-lex-l7-core", "entry": "yisi", "s": "这/是/我们/的/一点/意思/，/请/收下/。", "target": "意思", "pos": "名",
     "lookup": {"answers": ["yìsi"], "chain": "yìsi，“思”读轻声", "chainEn": "yìsi, with a neutral tone on 思"}, "answer": ["s3"], "clues": ["收下", "一点", "请"], "col": "一点意思"},
    {"id": "yisi-intent", "kc": "kt:zh-lex-l7-core", "entry": "yisi", "s": "他/的/意思/是/先/不/告诉/家里人/。", "target": "意思", "pos": "名", "noGloss": true,
     "lookup": {"answers": ["yìsi"], "chain": "yìsi，“思”读轻声", "chainEn": "yìsi, with a neutral tone on 思"}, "answer": ["s2"], "clues": ["他", "先", "告诉", "是"], "col": "他的意思是……"},
    {"id": "buhaoyisi-sorry", "kc": "kt:zh-lex-l7-core", "entry": "yisi", "s": "麻烦/你/跑/一趟/，/真/不好意思/。", "target": "不好意思", "pos": "phrase", "phrase": true,
     "lookup": {"answers": ["yìsi", "bùhǎoyìsi"], "chain": "可以查 意思 yìsi，再找短语“不好意思”", "chainEn": "look up 意思 yìsi, then the phrase 不好意思"}, "answer": ["p2"], "clues": ["麻烦", "跑", "一趟"], "col": "真不好意思"},
    {"id": "bawo-sure", "kc": "kt:zh-lex-l7-core", "entry": "bawo", "s": "这次/比赛/我/很/有/把握/。", "target": "把握", "pos": "名",
     "lookup": {"answers": ["bǎwò"], "chain": "bǎwò", "chainEn": "bǎwò"}, "answer": ["s3"], "clues": ["有", "很"], "col": "有把握"},
    {"id": "bawo-chance", "kc": "kt:zh-lex-l7-core", "entry": "bawo", "s": "年轻人/要/把握/好/每/一次/机会/。", "target": "把握", "pos": "动",
     "lookup": {"answers": ["bǎwò"], "chain": "bǎwò", "chainEn": "bǎwò"}, "answer": ["s2"], "clues": ["机会"], "why": {"s1": ["meaning", "collocation"]}, "col": "把握机会"},
    {"id": "xiaohua-class", "kc": "kt:zh-lex-l7-core", "entry": "xiaohua", "s": "老师/讲/得/太快/，/学生/来不及/消化/。", "target": "消化", "pos": "动",
     "lookup": {"answers": ["xiāohuà"], "chain": "xiāohuà", "chainEn": "xiāohuà"}, "answer": ["s2"], "clues": ["老师", "讲", "学生", "太快"], "col": "消化知识"},
    {"id": "baofu-burden", "kc": "kt:zh-lex-l7-core", "entry": "baofu", "s": "失败/一次/没/什么/，/别/背上/思想/包袱/。", "target": "包袱", "pos": "名",
     "lookup": {"answers": ["bāofu"], "chain": "bāofu，“袱”读轻声", "chainEn": "bāofu, with a neutral tone on 袱"}, "answer": ["s3"], "clues": ["思想", "失败"], "col": "思想包袱"},
    {"id": "baofu-joke", "kc": "kt:zh-lex-l7-core", "entry": "baofu", "s": "这段/相声/的/包袱/一个/接/一个/，/观众/笑/个/不停/。", "target": "包袱", "pos": "名", "noGloss": true,
     "lookup": {"answers": ["bāofu"], "chain": "bāofu，“袱”读轻声", "chainEn": "bāofu, with a neutral tone on 袱"}, "answer": ["s4"], "clues": ["相声", "观众", "笑"], "col": "抖包袱"},
    {"id": "menkan-job", "kc": "kt:zh-lex-l7-core", "entry": "menkan", "s": "这个/行业/门槛/很/高/，/没有/经验/很/难/进入/。", "target": "门槛", "pos": "名",
     "lookup": {"answers": ["ménkǎn"], "chain": "ménkǎn（也写作“门坎”）", "chainEn": "ménkǎn (also written 门坎)"}, "answer": ["s2"], "clues": ["行业", "经验", "进入"], "col": "门槛很高"},
    {"id": "shenru-study", "kc": "kt:zh-lex-l7-core", "entry": "shenru", "s": "我们/需要/对/这个/问题/做/更/深入/的/研究/。", "target": "深入", "pos": "形",
     "lookup": {"answers": ["shēnrù"], "chain": "shēnrù", "chainEn": "shēnrù"}, "answer": ["s2"], "clues": ["研究", "更", "的", "问题"], "col": "深入的研究"},
    {"id": "shenru-area", "kc": "kt:zh-lex-l7-core", "entry": "shenru", "s": "记者/深入/灾区/，/采访/了/很多/受灾/群众/。", "target": "深入", "pos": "动",
     "lookup": {"answers": ["shēnrù"], "chain": "shēnrù", "chainEn": "shēnrù"}, "answer": ["s1"], "clues": ["灾区", "记者"], "col": "深入灾区"},
    {"id": "qianti-quality", "kc": "kt:zh-lex-l7-core", "entry": "qianti", "s": "在/保证/质量/的/前提/下/，/尽量/降低/成本/。", "target": "前提", "pos": "名",
     "lookup": {"answers": ["qiántí"], "chain": "qiántí", "chainEn": "qiántí"}, "answer": ["s2"], "clues": ["保证", "质量", "下", "在"], "why": {"s1": ["register", "meaning"]}, "col": "在……的前提下"},
    {"id": "huo-song", "kc": "kt:zh-lex-l7-core", "entry": "huo", "s": "这/首/歌/一夜之间/就/火/了/。", "target": "火", "pos": "形",
     "lookup": {"answers": ["huǒ"], "chain": "huǒ", "chainEn": "huǒ"}, "answer": ["s2"], "clues": ["歌", "一夜之间"], "col": "歌火了"},
    {"id": "huo-ambiguous", "kc": "kt:zh-lex-l7-core", "entry": "huo", "s": "听说/他/火/了/。", "target": "火", "pos": "形",
     "lookup": {"answers": ["huǒ"], "chain": "huǒ", "chainEn": "huǒ"}, "answer": ["s2", "s3"], "clues": ["听说", "了"],
     "note": "可能是“他出名了”，也可能是“他发火了”；只看这一句定不下来。", "noteEn": "It could be “he has become famous” or “he got angry”; this sentence alone cannot decide.", "col": "他火了"},
    {"id": "zou-hospital", "kc": "kt:zh-lex-l7-core", "entry": "zou", "s": "我/到/医院/的/时候/，/老人/已经/走/了/。", "target": "走", "pos": "动",
     "lookup": {"answers": ["zǒu"], "chain": "zǒu", "chainEn": "zǒu"}, "answer": ["s2", "s3"], "clues": ["医院", "老人", "已经"],
     "note": "可能是老人已经离开医院，也可能是委婉地说老人去世了；要看上下文。", "noteEn": "Either the old man had already left the hospital, or, said gently, he had died; the context decides.", "col": "已经走了"},
    {"id": "zou-relatives", "kc": "kt:zh-lex-l7-core", "entry": "zou", "s": "过年/的/时候/，/我们/常/去/走/亲戚/。", "target": "走", "pos": "动",
     "lookup": {"answers": ["zǒu"], "chain": "zǒu", "chainEn": "zǒu"}, "answer": ["s4"], "clues": ["亲戚", "过年"], "col": "走亲戚"},
    {"id": "dazhaohu-greet", "kc": "kt:zh-lex-l7-core", "entry": "da", "s": "他/见到/老师/就/主动/打招呼/。", "target": "打招呼", "pos": "phrase", "phrase": true,
     "lookup": {"answers": ["dǎ", "dǎzhāohu"], "chain": "可以查 打 dǎ，再找短语“打招呼”", "chainEn": "look up 打 dǎ, then the phrase 打招呼"}, "answer": ["p1"], "clues": ["见到", "老师", "主动"], "col": "跟人打招呼"},
    {"id": "dazhaohu-inform", "kc": "kt:zh-lex-l7-core", "entry": "da", "s": "这/件/事/你/得/先/跟/经理/打/个/招呼/。", "target": "打 招呼", "pos": "phrase", "phrase": true,
     "lookup": {"answers": ["dǎ", "dǎzhāohu"], "chain": "“打个招呼”是“打招呼”中间加了“个”；查 打 dǎ，再找短语", "chainEn": "打个招呼 is 打招呼 with 个 inserted; look up 打 dǎ, then the phrase"}, "answer": ["p2"], "clues": ["先", "这", "件", "事", "经理"], "col": "先打个招呼"},
    {"id": "kaiyeche", "kc": "kt:zh-lex-l7-core", "entry": "kai", "s": "他/最近/天天/开夜车/，/准备/考试/。", "target": "开夜车", "pos": "phrase", "phrase": true,
     "lookup": {"answers": ["kāi", "kāiyèchē"], "chain": "可以查 开 kāi，再找短语“开夜车”", "chainEn": "look up 开 kāi, then the phrase 开夜车"}, "answer": ["p1"], "clues": ["考试", "准备", "天天"], "col": "开夜车"},
    {"id": "kai-shop", "kc": "kt:zh-lex-l7-core", "entry": "kai", "s": "她/在/学校/附近/开/了/一家/书店/。", "target": "开", "pos": "动",
     "lookup": {"answers": ["kāi"], "chain": "kāi", "chainEn": "kāi"}, "answer": ["s4"], "clues": ["书店", "一家"], "why": {"s1": ["meaning", "collocation"]}, "col": "开书店"}
  ],
  "review": [
    "大意 表示“疏忽”时读 dàyi（轻声），也有人读 dàyì；“粗心大意”里一般读 dàyì。本练习只接受 dàyi，请老师确认",
    "精神 表示“活力”“有生气”时读 jīngshen，表示“意识、宗旨”时读 jīngshén；口语里区分不严格",
    "地道 dìdao 的 ②（产地）和 ③（纯正）在“地道的北京话”里按 ③ 计；也有老师会接受 ②",
    "火 表示“受欢迎”标为口语形容词，“火了”在这里按这个义项计",
    "“听说他火了”“老人已经走了”设计为两个义项都说得通",
    "部首查字没有做：只做了按拼音找词条"
  ],
  "reviewEn": [
    "大意 meaning “careless” is read dàyi (neutral tone); some speakers say dàyì, and in 粗心大意 it is usually dàyì. Only dàyi is accepted here; please confirm",
    "精神 is read jīngshen for “energy, lively” and jīngshén for “mind, essence”; in speech the line is not strict",
    "地道 dìdao ② (place of origin) and ③ (authentic): 地道的北京话 is scored as ③; some teachers would accept ②",
    "火 “popular” is labelled a colloquial adjective, and 火了 here is scored under that sense",
    "听说他火了 and 老人已经走了 are designed so that two senses fit",
    "Looking up characters by radical is not done here; only lookup by pinyin"
  ]
};
