/* Data packs for blocks/listen-and-do.html (prim:listen-and-do): listen-and-do-en, listen-and-do-ja, listen-and-do-zh.
 *
 * The two scenes are drawn by the page as inline SVG and are the same for every language:
 *   room   a box, a table, a chair, a boy facing you with both hands out, a closed door and an open window (fixed);
 *          six movable things that start on a rug in random order:
 *            ballBig, ballSmall (white until coloured), cupRed, cupBlue, book, pencil.
 *          places (spot ids): box-in, box-next, table-on, table-under, chair-on, chair-under,
 *            boy-left (by the boy's LEFT hand = on YOUR right, he faces you), boy-right.
 *          colours: red, blue, yellow, green.
 *   map    you stand at the bottom of a street, facing up. Two corners (c1, c2). 14 identical, unnamed buildings:
 *            M0L M0R (before the first corner, left / right), M1L M1R (between the corners), M2L M2R (after the second);
 *            W1N W1S E1N E1S (down the first side street: W = turn left, E = turn right; N = upper side, S = lower side);
 *            W2N W2S E2N E2S (the same for the second corner).
 *          After turning left (walking west) your right is N; after turning right (walking east) your right is S.
 *
 * Pack format
 *   speech, title(En), subtitle(En), voiceNote(En), kcs[]
 *   join       how segments are joined into the sentence that is spoken (" " for en, "" for ja / zh).
 *   items      [{id, scene: 'room' | 'map', seg: [[text, flash?], ...], kcs[], child?, rev?, note?, noteEn?, ...}]
 *              seg = the instruction cut into phrases; while it is replayed phrase by phrase in step 2, the thing
 *              named by `flash` (an object id, a spot id, 'door', 'window', 'boy', 'c1', 'c2', 'c:<colour>') blinks.
 *              room items: steps [{t: 'move', obj, spot} | {t: 'colour', obj, color}], order? (the steps must be done
 *                in this order), forbid? [obj ids that must not be touched], cond? {fact: 'door-open' | 'window-open'}
 *                (the door is closed and the window is open, so a door condition means: do nothing).
 *              map items: answer = building id.
 *              rev = the reverse half: a part not to do (negation), a condition that is not met, or a direction
 *                seen from the boy's side.
 *   compose    target-language word cards for step 3 (the learner builds an instruction; the page carries it out
 *              literally): put / colour templates with {np} {place} {colour}; np order and joiner; nouns, sizes,
 *              colour adjectives (colorAdj), colour results (colorTo) and place phrases (places).
 *   review     items a native teacher should check (reviewEn parallel).
 * All sentences are original.
 */
KT_DATA["listen-and-do-en"] = {
  "id": "listen-and-do-en", "lang": "en", "speech": "en-US", "join": " ",
  "title": "听指令做动作（英语）", "titleEn": "Listen and do (English)",
  "subtitle": "听一句指令，在画面上做一个动作。先只做不判，再回放对照差在哪，最后自己拼一条指令让页面照做。", "subtitleEn": "Hear an instruction and do it in the picture. First just act, with no marking; then replay and find what differs; finally build an instruction yourself and let the page carry it out literally.",
  "voiceNote": "指令由浏览器语音合成朗读，一个说话人、安静环境：在这里听懂，不等于在嘈杂的教室或街上也听得懂。", "voiceNoteEn": "Instructions are read by browser speech synthesis: one speaker, no background noise. Understanding them here does not mean you will in a noisy classroom or street.",
  "kcs": ["kt:en-skill-listen-and-do", "kt:en-prepositions-place", "kt:en-imperatives", "kt:en-skill-listen-directions"],
  "items": [
    {"id": "r1", "scene": "room", "child": true, "kcs": ["kt:en-skill-listen-and-do", "kt:en-prepositions-place"], "seg": [["Put"], ["the small ball", "ballSmall"], ["in the box.", "box-in"]], "steps": [{"t": "move", "obj": "ballSmall", "spot": "box-in"}]},
    {"id": "r2", "scene": "room", "child": true, "kcs": ["kt:en-skill-listen-and-do"], "seg": [["Colour"], ["the big ball", "ballBig"], ["red.", "c:red"]], "steps": [{"t": "colour", "obj": "ballBig", "color": "red"}]},
    {"id": "r3", "scene": "room", "child": true, "kcs": ["kt:en-prepositions-place"], "seg": [["Put"], ["the book", "book"], ["under the table.", "table-under"]], "steps": [{"t": "move", "obj": "book", "spot": "table-under"}]},
    {"id": "r4", "scene": "room", "child": true, "kcs": ["kt:en-prepositions-place"], "seg": [["Put"], ["the pencil", "pencil"], ["on the chair.", "chair-on"]], "steps": [{"t": "move", "obj": "pencil", "spot": "chair-on"}]},
    {"id": "r5", "scene": "room", "child": true, "kcs": ["kt:en-skill-listen-and-do"], "seg": [["Colour"], ["the small ball", "ballSmall"], ["blue.", "c:blue"]], "steps": [{"t": "colour", "obj": "ballSmall", "color": "blue"}]},
    {"id": "r6", "scene": "room", "child": true, "kcs": ["kt:en-skill-listen-and-do", "kt:en-prepositions-place"], "seg": [["Put"], ["the blue cup", "cupBlue"], ["on the table.", "table-on"]], "steps": [{"t": "move", "obj": "cupBlue", "spot": "table-on"}]},
    {"id": "r7", "scene": "room", "kcs": ["kt:en-skill-listen-and-do", "kt:en-prepositions-place"], "seg": [["Put"], ["the red cup", "cupRed"], ["under the chair.", "chair-under"]], "steps": [{"t": "move", "obj": "cupRed", "spot": "chair-under"}]},
    {"id": "r8", "scene": "room", "rev": true, "kcs": ["kt:en-imperatives", "kt:en-prepositions-place"], "seg": [["Don't touch"], ["the red cup.", "cupRed"], ["Put"], ["the blue cup", "cupBlue"], ["next to the box.", "box-next"]], "steps": [{"t": "move", "obj": "cupBlue", "spot": "box-next"}], "forbid": ["cupRed"],
     "note": "前半句是“别碰红杯子”：红杯子一下也不能动。", "noteEn": "The first part says not to touch the red cup: it must not move at all."},
    {"id": "r9", "scene": "room", "rev": true, "kcs": ["kt:en-skill-listen-and-do"], "seg": [["If the door is open,", "door"], ["put"], ["the book", "book"], ["on the chair.", "chair-on"]], "steps": [{"t": "move", "obj": "book", "spot": "chair-on"}], "cond": {"fact": "door-open"},
     "note": "门是关着的，条件不成立，所以什么都不用做。", "noteEn": "The door is closed, so the condition is not met and nothing should be done."},
    {"id": "r10", "scene": "room", "kcs": ["kt:en-skill-listen-and-do", "kt:en-prepositions-place"], "seg": [["If the window is open,", "window"], ["put"], ["the pencil", "pencil"], ["in the box.", "box-in"]], "steps": [{"t": "move", "obj": "pencil", "spot": "box-in"}], "cond": {"fact": "window-open"},
     "note": "窗户开着，条件成立，要照做。", "noteEn": "The window is open, so the condition is met and you do it."},
    {"id": "r11", "scene": "room", "rev": true, "kcs": ["kt:en-prepositions-place"], "seg": [["Put"], ["the big ball", "ballBig"], ["by the boy's left hand.", "boy-left"]], "steps": [{"t": "move", "obj": "ballBig", "spot": "boy-left"}],
     "note": "男孩面朝你，他的左手在你的右边。", "noteEn": "The boy faces you, so his left hand is on your right."},
    {"id": "r12", "scene": "room", "kcs": ["kt:en-skill-listen-and-do", "kt:en-prepositions-place"], "seg": [["Put"], ["the pencil", "pencil"], ["under the chair,", "chair-under"], ["then put"], ["the book", "book"], ["on the table.", "table-on"]], "steps": [{"t": "move", "obj": "pencil", "spot": "chair-under"}, {"t": "move", "obj": "book", "spot": "table-on"}], "order": true},
    {"id": "r13", "scene": "room", "kcs": ["kt:en-skill-listen-and-do"], "seg": [["First colour"], ["the small ball", "ballSmall"], ["green,", "c:green"], ["then put it"], ["on the table.", "table-on"]], "steps": [{"t": "colour", "obj": "ballSmall", "color": "green"}, {"t": "move", "obj": "ballSmall", "spot": "table-on"}], "order": true},
    {"id": "r14", "scene": "room", "kcs": ["kt:en-prepositions-place"], "seg": [["Put"], ["the big ball", "ballBig"], ["under the table.", "table-under"]], "steps": [{"t": "move", "obj": "ballBig", "spot": "table-under"}]},
    {"id": "r15", "scene": "room", "rev": true, "kcs": ["kt:en-imperatives", "kt:en-skill-listen-and-do"], "seg": [["Don't move"], ["the book.", "book"], ["Colour"], ["the big ball", "ballBig"], ["yellow.", "c:yellow"]], "steps": [{"t": "colour", "obj": "ballBig", "color": "yellow"}], "forbid": ["book"],
     "note": "书不能动，只给大球涂色。", "noteEn": "Leave the book where it is; only colour the big ball."},
    {"id": "m1", "scene": "map", "kcs": ["kt:en-skill-listen-directions"], "seg": [["Go straight and"], ["take the first left.", "c1"], ["It's on your right."]], "answer": "W1N"},
    {"id": "m2", "scene": "map", "kcs": ["kt:en-skill-listen-directions"], "seg": [["Take the second right.", "c2"], ["It's on your left."]], "answer": "E2N"},
    {"id": "m3", "scene": "map", "kcs": ["kt:en-skill-listen-directions"], "seg": [["Go straight on"], ["past the second corner.", "c2"], ["It's on your right."]], "answer": "M2R"},
    {"id": "m4", "scene": "map", "kcs": ["kt:en-skill-listen-directions"], "seg": [["Take the first right.", "c1"], ["It's on your right."]], "answer": "E1S"},
    {"id": "m5", "scene": "map", "kcs": ["kt:en-skill-listen-directions"], "seg": [["Go past the first corner.", "c1"], ["It's on your left."]], "answer": "M1L"},
    {"id": "m6", "scene": "map", "rev": true, "kcs": ["kt:en-skill-listen-directions", "kt:en-imperatives"], "seg": [["Don't turn at the first corner.", "c1"], ["Turn left at the second corner.", "c2"], ["It's on your left."]], "answer": "W2S",
     "note": "第一个路口不拐。往左拐以后，你的左边是下面那一排。", "noteEn": "No turn at the first corner. After turning left, your left is the lower row."},
    {"id": "m7", "scene": "map", "kcs": ["kt:en-skill-listen-directions"], "seg": [["Turn right at the second corner.", "c2"], ["It's the building on your right."]], "answer": "E2S"},
    {"id": "m8", "scene": "map", "kcs": ["kt:en-skill-listen-directions"], "seg": [["It's on your left,"], ["before the first corner.", "c1"]], "answer": "M0L"}
  ],
  "compose": {
    "put": "Put the {np} {place}.", "colour": "Colour the {np} {colour}.",
    "np": ["size", "color", "noun"], "npJoin": " ",
    "nouns": {"ball": "ball", "cup": "cup", "book": "book", "pencil": "pencil"},
    "sizes": {"big": "big", "small": "small"},
    "colorAdj": {"red": "red", "blue": "blue", "yellow": "yellow", "green": "green"},
    "colorTo": {"red": "red", "blue": "blue", "yellow": "yellow", "green": "green"},
    "places": {"box-in": "in the box", "box-next": "next to the box", "table-on": "on the table", "table-under": "under the table", "chair-on": "on the chair", "chair-under": "under the chair", "boy-left": "by the boy's left hand", "boy-right": "by the boy's right hand"}
  },
  "review": ["by the boy's left hand：是否所有英语使用者都按男孩自己的左右理解（这里假定是）", "Take the second right 在英式和美式里都指“第二个路口往右”", "Colour（英式拼写）与 Color：朗读相同"],
  "reviewEn": ["by the boy's left hand: do all English speakers read it from the boy's own point of view (assumed here)?", "Take the second right means “turn right at the second corner” in both British and American English", "Colour (British spelling) and Color are read the same"]
};

KT_DATA["listen-and-do-ja"] = {
  "id": "listen-and-do-ja", "lang": "ja", "speech": "ja-JP", "join": "",
  "title": "听指令做动作（日语）", "titleEn": "Listen and do (Japanese)",
  "subtitle": "听～てください 的指令，在画面上做一个动作。注意 ～ないでください 是“不要做”，～たら 是有条件的。", "subtitleEn": "Hear a ～てください instruction and do it in the picture. Note that ～ないでください means “do not”, and ～たら sets a condition.",
  "voiceNote": "指令由浏览器日语语音合成朗读，一个说话人、安静环境。", "voiceNoteEn": "Instructions are read by browser Japanese speech synthesis: one speaker, no background noise.",
  "kcs": ["kt:ja-skill-listen-basic", "kt:ja-fn-directions"],
  "items": [
    {"id": "r1", "scene": "room", "child": true, "kcs": ["kt:ja-skill-listen-basic"], "seg": [["小さいボールを", "ballSmall"], ["はこの中に", "box-in"], ["入れてください。"]], "steps": [{"t": "move", "obj": "ballSmall", "spot": "box-in"}]},
    {"id": "r2", "scene": "room", "child": true, "kcs": ["kt:ja-skill-listen-basic"], "seg": [["大きいボールを", "ballBig"], ["赤く", "c:red"], ["ぬってください。"]], "steps": [{"t": "colour", "obj": "ballBig", "color": "red"}]},
    {"id": "r3", "scene": "room", "child": true, "kcs": ["kt:ja-skill-listen-basic"], "seg": [["本を", "book"], ["つくえの下に", "table-under"], ["置いてください。"]], "steps": [{"t": "move", "obj": "book", "spot": "table-under"}]},
    {"id": "r4", "scene": "room", "child": true, "kcs": ["kt:ja-skill-listen-basic"], "seg": [["えんぴつを", "pencil"], ["いすの上に", "chair-on"], ["置いてください。"]], "steps": [{"t": "move", "obj": "pencil", "spot": "chair-on"}]},
    {"id": "r5", "scene": "room", "child": true, "kcs": ["kt:ja-skill-listen-basic"], "seg": [["小さいボールを", "ballSmall"], ["青く", "c:blue"], ["ぬってください。"]], "steps": [{"t": "colour", "obj": "ballSmall", "color": "blue"}]},
    {"id": "r6", "scene": "room", "child": true, "kcs": ["kt:ja-skill-listen-basic"], "seg": [["青いコップを", "cupBlue"], ["つくえの上に", "table-on"], ["置いてください。"]], "steps": [{"t": "move", "obj": "cupBlue", "spot": "table-on"}]},
    {"id": "r7", "scene": "room", "kcs": ["kt:ja-skill-listen-basic"], "seg": [["赤いコップを", "cupRed"], ["いすの下に", "chair-under"], ["置いてください。"]], "steps": [{"t": "move", "obj": "cupRed", "spot": "chair-under"}]},
    {"id": "r8", "scene": "room", "rev": true, "kcs": ["kt:ja-skill-listen-basic"], "seg": [["赤いコップは", "cupRed"], ["さわらないでください。"], ["青いコップを", "cupBlue"], ["はこのとなりに", "box-next"], ["置いてください。"]], "steps": [{"t": "move", "obj": "cupBlue", "spot": "box-next"}], "forbid": ["cupRed"],
     "note": "～ないでください 是“不要”：红杯子一下也不能动。", "noteEn": "～ないでください means “do not”: the red cup must not move at all."},
    {"id": "r9", "scene": "room", "rev": true, "kcs": ["kt:ja-skill-listen-basic"], "seg": [["ドアが開いていたら、", "door"], ["本を", "book"], ["いすの上に", "chair-on"], ["置いてください。"]], "steps": [{"t": "move", "obj": "book", "spot": "chair-on"}], "cond": {"fact": "door-open"},
     "note": "门关着，～たら 的条件不成立，什么都不用做。", "noteEn": "The door is closed, so the ～たら condition is not met: do nothing."},
    {"id": "r10", "scene": "room", "kcs": ["kt:ja-skill-listen-basic"], "seg": [["まどが開いていたら、", "window"], ["えんぴつを", "pencil"], ["はこの中に", "box-in"], ["入れてください。"]], "steps": [{"t": "move", "obj": "pencil", "spot": "box-in"}], "cond": {"fact": "window-open"},
     "note": "窗户开着，条件成立，要照做。", "noteEn": "The window is open, so the condition is met: do it."},
    {"id": "r11", "scene": "room", "rev": true, "kcs": ["kt:ja-skill-listen-basic"], "seg": [["大きいボールを", "ballBig"], ["男の子の左手のそばに", "boy-left"], ["置いてください。"]], "steps": [{"t": "move", "obj": "ballBig", "spot": "boy-left"}],
     "note": "男孩面朝你，他的左手在你的右边。", "noteEn": "The boy faces you, so his left hand is on your right."},
    {"id": "r12", "scene": "room", "kcs": ["kt:ja-skill-listen-basic"], "seg": [["えんぴつを", "pencil"], ["いすの下に", "chair-under"], ["置いてから、"], ["本を", "book"], ["つくえの上に", "table-on"], ["置いてください。"]], "steps": [{"t": "move", "obj": "pencil", "spot": "chair-under"}, {"t": "move", "obj": "book", "spot": "table-on"}], "order": true},
    {"id": "r13", "scene": "room", "kcs": ["kt:ja-skill-listen-basic"], "seg": [["小さいボールを", "ballSmall"], ["緑に", "c:green"], ["ぬってから、"], ["つくえの上に", "table-on"], ["置いてください。"]], "steps": [{"t": "colour", "obj": "ballSmall", "color": "green"}, {"t": "move", "obj": "ballSmall", "spot": "table-on"}], "order": true},
    {"id": "r14", "scene": "room", "kcs": ["kt:ja-skill-listen-basic"], "seg": [["大きいボールを", "ballBig"], ["つくえの下に", "table-under"], ["置いてください。"]], "steps": [{"t": "move", "obj": "ballBig", "spot": "table-under"}]},
    {"id": "r15", "scene": "room", "rev": true, "kcs": ["kt:ja-skill-listen-basic"], "seg": [["本は", "book"], ["うごかさないでください。"], ["大きいボールを", "ballBig"], ["黄色く", "c:yellow"], ["ぬってください。"]], "steps": [{"t": "colour", "obj": "ballBig", "color": "yellow"}], "forbid": ["book"],
     "note": "本は うごかさないで：书不能动。", "noteEn": "本は うごかさないで: the book must not move."},
    {"id": "m1", "scene": "map", "kcs": ["kt:ja-fn-directions"], "seg": [["まっすぐ行って、"], ["一つ目の角を", "c1"], ["左に曲がってください。"], ["右側にあります。"]], "answer": "W1N"},
    {"id": "m2", "scene": "map", "kcs": ["kt:ja-fn-directions"], "seg": [["二つ目の角を", "c2"], ["右に曲がってください。"], ["左側にあります。"]], "answer": "E2N"},
    {"id": "m3", "scene": "map", "kcs": ["kt:ja-fn-directions"], "seg": [["まっすぐ行って、"], ["二つ目の角を過ぎてください。", "c2"], ["右側にあります。"]], "answer": "M2R"},
    {"id": "m4", "scene": "map", "kcs": ["kt:ja-fn-directions"], "seg": [["一つ目の角を", "c1"], ["右に曲がってください。"], ["右側にあります。"]], "answer": "E1S"},
    {"id": "m5", "scene": "map", "kcs": ["kt:ja-fn-directions"], "seg": [["一つ目の角を過ぎると、", "c1"], ["左側にあります。"]], "answer": "M1L"},
    {"id": "m6", "scene": "map", "rev": true, "kcs": ["kt:ja-fn-directions"], "seg": [["一つ目の角は", "c1"], ["曲がらないでください。"], ["二つ目の角を", "c2"], ["左に曲がって、"], ["左側です。"]], "answer": "W2S",
     "note": "一つ目の角は曲がらないで：第一个路口不拐。往左拐以后，左侧是下面那一排。", "noteEn": "一つ目の角は曲がらないで: no turn at the first corner. After turning left, your left is the lower row."},
    {"id": "m7", "scene": "map", "kcs": ["kt:ja-fn-directions"], "seg": [["二つ目の角を", "c2"], ["右に曲がってください。"], ["右側です。"]], "answer": "E2S"},
    {"id": "m8", "scene": "map", "kcs": ["kt:ja-fn-directions"], "seg": [["一つ目の角の手前、", "c1"], ["左側にあります。"]], "answer": "M0L"}
  ],
  "compose": {
    "put": "{np}を{place}。", "colour": "{np}を{colour}ぬってください。",
    "np": ["size", "color", "noun"], "npJoin": "",
    "nouns": {"ball": "ボール", "cup": "コップ", "book": "本", "pencil": "えんぴつ"},
    "sizes": {"big": "大きい", "small": "小さい"},
    "colorAdj": {"red": "赤い", "blue": "青い", "yellow": "黄色い", "green": "緑の"},
    "colorTo": {"red": "赤く", "blue": "青く", "yellow": "黄色く", "green": "緑に"},
    "places": {"box-in": "はこの中に入れてください", "box-next": "はこのとなりに置いてください", "table-on": "つくえの上に置いてください", "table-under": "つくえの下に置いてください", "chair-on": "いすの上に置いてください", "chair-under": "いすの下に置いてください", "boy-left": "男の子の左手のそばに置いてください", "boy-right": "男の子の右手のそばに置いてください"}
  },
  "review": ["画面上的桌子叫 つくえ 是否合适（也可能说 テーブル）", "大きい赤いボール 和 赤い大きいボール 的语序：拼指令时固定为“大小＋颜色＋名词”", "緑にぬって／緑色にぬって 哪个更自然", "男の子の左手のそば：是否会被理解成“从你看过去的左边”", "一つ目の角の手前 对初级学习者是否太难", "合成语音读 開いていたら（あいていたら）、本（ほん）是否正确"],
  "reviewEn": ["Whether つくえ suits the table in the picture (テーブル is also possible)", "Word order 大きい赤いボール vs 赤い大きいボール: the composer always uses size + colour + noun", "Which is more natural: 緑にぬって or 緑色にぬって", "Whether 男の子の左手のそば could be read as “the left as you see it”", "Whether 一つ目の角の手前 is too hard for beginners", "Whether synthesis reads 開いていたら (あいていたら) and 本 (ほん) correctly"]
};

KT_DATA["listen-and-do-zh"] = {
  "id": "listen-and-do-zh", "lang": "zh", "speech": "zh-CN", "join": "",
  "title": "听指令做动作（汉语）", "titleEn": "Listen and do (Mandarin)",
  "subtitle": "听一句“把……放在……”或问路的指令，在画面上做一个动作。注意“别／不要”和“如果……就……”。", "subtitleEn": "Hear a 把…放在… instruction or directions and do it in the picture. Watch for 别 / 不要 (don't) and 如果…就… (if… then…).",
  "voiceNote": "指令由浏览器普通话语音合成朗读，一个说话人、安静环境。", "voiceNoteEn": "Instructions are read by browser Mandarin speech synthesis: one speaker, no background noise.",
  "kcs": ["kt:zh-skill-listen-basic", "kt:zh-locatives", "kt:zh-ba-placement", "kt:zh-imperatives", "kt:zh-fn-directions"],
  "items": [
    {"id": "r1", "scene": "room", "child": true, "kcs": ["kt:zh-skill-listen-basic", "kt:zh-ba-placement", "kt:zh-locatives"], "seg": [["把"], ["小球", "ballSmall"], ["放进箱子里。", "box-in"]], "steps": [{"t": "move", "obj": "ballSmall", "spot": "box-in"}]},
    {"id": "r2", "scene": "room", "child": true, "kcs": ["kt:zh-skill-listen-basic"], "seg": [["把"], ["大球", "ballBig"], ["涂成红色。", "c:red"]], "steps": [{"t": "colour", "obj": "ballBig", "color": "red"}]},
    {"id": "r3", "scene": "room", "child": true, "kcs": ["kt:zh-ba-placement", "kt:zh-locatives"], "seg": [["把"], ["书", "book"], ["放在桌子下面。", "table-under"]], "steps": [{"t": "move", "obj": "book", "spot": "table-under"}]},
    {"id": "r4", "scene": "room", "child": true, "kcs": ["kt:zh-ba-placement", "kt:zh-locatives"], "seg": [["把"], ["铅笔", "pencil"], ["放在椅子上。", "chair-on"]], "steps": [{"t": "move", "obj": "pencil", "spot": "chair-on"}]},
    {"id": "r5", "scene": "room", "child": true, "kcs": ["kt:zh-skill-listen-basic"], "seg": [["把"], ["小球", "ballSmall"], ["涂成蓝色。", "c:blue"]], "steps": [{"t": "colour", "obj": "ballSmall", "color": "blue"}]},
    {"id": "r6", "scene": "room", "child": true, "kcs": ["kt:zh-ba-placement", "kt:zh-locatives"], "seg": [["把"], ["蓝色的杯子", "cupBlue"], ["放在桌子上。", "table-on"]], "steps": [{"t": "move", "obj": "cupBlue", "spot": "table-on"}]},
    {"id": "r7", "scene": "room", "kcs": ["kt:zh-ba-placement", "kt:zh-locatives"], "seg": [["把"], ["红色的杯子", "cupRed"], ["放在椅子下面。", "chair-under"]], "steps": [{"t": "move", "obj": "cupRed", "spot": "chair-under"}]},
    {"id": "r8", "scene": "room", "rev": true, "kcs": ["kt:zh-imperatives", "kt:zh-ba-placement"], "seg": [["别动"], ["红色的杯子。", "cupRed"], ["把"], ["蓝色的杯子", "cupBlue"], ["放在箱子旁边。", "box-next"]], "steps": [{"t": "move", "obj": "cupBlue", "spot": "box-next"}], "forbid": ["cupRed"],
     "note": "“别动红色的杯子”：红杯子一下也不能动。", "noteEn": "别动红色的杯子 means “don't touch the red cup”: it must not move at all."},
    {"id": "r9", "scene": "room", "rev": true, "kcs": ["kt:zh-skill-listen-basic"], "seg": [["如果门开着，", "door"], ["就把"], ["书", "book"], ["放在椅子上。", "chair-on"]], "steps": [{"t": "move", "obj": "book", "spot": "chair-on"}], "cond": {"fact": "door-open"},
     "note": "门关着，条件不成立，什么都不用做。", "noteEn": "The door is closed, so the condition is not met: do nothing."},
    {"id": "r10", "scene": "room", "kcs": ["kt:zh-skill-listen-basic", "kt:zh-locatives"], "seg": [["如果窗户开着，", "window"], ["就把"], ["铅笔", "pencil"], ["放进箱子里。", "box-in"]], "steps": [{"t": "move", "obj": "pencil", "spot": "box-in"}], "cond": {"fact": "window-open"},
     "note": "窗户开着，条件成立，要照做。", "noteEn": "The window is open, so the condition is met: do it."},
    {"id": "r11", "scene": "room", "rev": true, "kcs": ["kt:zh-locatives"], "seg": [["把"], ["大球", "ballBig"], ["放在男孩左手旁边。", "boy-left"]], "steps": [{"t": "move", "obj": "ballBig", "spot": "boy-left"}],
     "note": "男孩面朝你，他的左手在你的右边。", "noteEn": "The boy faces you, so his left hand is on your right."},
    {"id": "r12", "scene": "room", "kcs": ["kt:zh-ba-placement", "kt:zh-locatives"], "seg": [["先把"], ["铅笔", "pencil"], ["放在椅子下面，", "chair-under"], ["再把"], ["书", "book"], ["放在桌子上。", "table-on"]], "steps": [{"t": "move", "obj": "pencil", "spot": "chair-under"}, {"t": "move", "obj": "book", "spot": "table-on"}], "order": true},
    {"id": "r13", "scene": "room", "kcs": ["kt:zh-skill-listen-basic", "kt:zh-ba-placement"], "seg": [["先把"], ["小球", "ballSmall"], ["涂成绿色，", "c:green"], ["再把它"], ["放在桌子上。", "table-on"]], "steps": [{"t": "colour", "obj": "ballSmall", "color": "green"}, {"t": "move", "obj": "ballSmall", "spot": "table-on"}], "order": true},
    {"id": "r14", "scene": "room", "kcs": ["kt:zh-ba-placement", "kt:zh-locatives"], "seg": [["把"], ["大球", "ballBig"], ["放在桌子下面。", "table-under"]], "steps": [{"t": "move", "obj": "ballBig", "spot": "table-under"}]},
    {"id": "r15", "scene": "room", "rev": true, "kcs": ["kt:zh-imperatives", "kt:zh-skill-listen-basic"], "seg": [["不要动"], ["书。", "book"], ["把"], ["大球", "ballBig"], ["涂成黄色。", "c:yellow"]], "steps": [{"t": "colour", "obj": "ballBig", "color": "yellow"}], "forbid": ["book"],
     "note": "“不要动书”：书不能动。", "noteEn": "不要动书 means “don't move the book”."},
    {"id": "m1", "scene": "map", "kcs": ["kt:zh-fn-directions"], "seg": [["一直往前走，"], ["到第一个路口", "c1"], ["往左拐，"], ["在你的右边。"]], "answer": "W1N"},
    {"id": "m2", "scene": "map", "kcs": ["kt:zh-fn-directions"], "seg": [["到第二个路口", "c2"], ["往右拐，"], ["在你的左边。"]], "answer": "E2N"},
    {"id": "m3", "scene": "map", "kcs": ["kt:zh-fn-directions"], "seg": [["一直往前走，"], ["过两个路口，", "c2"], ["在你的右边。"]], "answer": "M2R"},
    {"id": "m4", "scene": "map", "kcs": ["kt:zh-fn-directions"], "seg": [["到第一个路口", "c1"], ["往右拐，"], ["在你的右边。"]], "answer": "E1S"},
    {"id": "m5", "scene": "map", "kcs": ["kt:zh-fn-directions"], "seg": [["过了第一个路口，", "c1"], ["在你的左边。"]], "answer": "M1L"},
    {"id": "m6", "scene": "map", "rev": true, "kcs": ["kt:zh-fn-directions", "kt:zh-imperatives"], "seg": [["第一个路口", "c1"], ["不要拐，"], ["到第二个路口", "c2"], ["往左拐，"], ["在你的左边。"]], "answer": "W2S",
     "note": "第一个路口不拐。往左拐以后，你的左边是下面那一排。", "noteEn": "No turn at the first corner. After turning left, your left is the lower row."},
    {"id": "m7", "scene": "map", "kcs": ["kt:zh-fn-directions"], "seg": [["到第二个路口", "c2"], ["往右拐，"], ["就在右边。"]], "answer": "E2S"},
    {"id": "m8", "scene": "map", "kcs": ["kt:zh-fn-directions"], "seg": [["还没到第一个路口，", "c1"], ["就在你的左边。"]], "answer": "M0L"}
  ],
  "compose": {
    "put": "把{np}{place}。", "colour": "把{np}涂成{colour}。",
    "np": ["color", "size", "noun"], "npJoin": "",
    "nouns": {"ball": "球", "cup": "杯子", "book": "书", "pencil": "铅笔"},
    "sizes": {"big": "大", "small": "小"},
    "colorAdj": {"red": "红色的", "blue": "蓝色的", "yellow": "黄色的", "green": "绿色的"},
    "colorTo": {"red": "红色", "blue": "蓝色", "yellow": "黄色", "green": "绿色"},
    "places": {"box-in": "放进箱子里", "box-next": "放在箱子旁边", "table-on": "放在桌子上", "table-under": "放在桌子下面", "chair-on": "放在椅子上", "chair-under": "放在椅子下面", "boy-left": "放在男孩左手旁边", "boy-right": "放在男孩右手旁边"}
  },
  "review": ["“放在男孩左手旁边”是否会被理解成“从你看过去的左边”", "拼指令时“红色的大球”这种组合（颜色＋大小＋名词）是否自然", "“过两个路口”是否明确指走过第二个路口以后", "“还没到第一个路口，就在你的左边”是否自然", "合成语音读“涂成”“放进”是否正确"],
  "reviewEn": ["Whether 放在男孩左手旁边 could be read as “the left as you see it”", "Whether combinations such as 红色的大球 (colour + size + noun) sound natural in the composer", "Whether 过两个路口 clearly means after passing the second corner", "Whether 还没到第一个路口，就在你的左边 sounds natural", "Whether synthesis reads 涂成 and 放进 correctly"]
};
