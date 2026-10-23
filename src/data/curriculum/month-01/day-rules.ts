import type { RuleItem } from "@/types/lesson";
import { splitRuleSegments } from "@/lib/format-rule";

function rule(text: string, pairs: [string, string][]): RuleItem {
  return {
    text,
    example: pairs[0][0],
    exampleVi: pairs[0][1],
    examples: pairs.map(([en, vi]) => ({ en, vi })),
  };
}

export const DAY_RULES: Record<number, RuleItem[]> = {
  1: [
    rule("Đại từ thay tên khi làm chủ ngữ.", [
      ["Nam is a student. → He is a student.", "Nam là học sinh. → Anh ấy là học sinh."],
      ["Lan is my friend. → She is my friend.", "Lan là bạn tôi. → Cô ấy là bạn tôi."],
      ["The book is new. → It is new.", "Quyển sách mới. → Nó mới."],
    ]),
    rule("I — người nói\nYou — người nghe\nHe — một người nam\nShe — một người nữ\nIt — đồ vật, con vật, sự việc\nWe — người nói và người khác\nThey — nhiều người hoặc sự vật", [
      ["My parents are at home. → They are at home.", "Bố mẹ tôi ở nhà. → Họ ở nhà."],
      ["My brother and I are happy. → We are happy.", "Anh trai tôi và tôi vui. → Chúng tôi vui."],
    ]),
  ],
  2: [
    rule("I + am\nHe / She / It + is\nYou / We / They + are", [
      ["I am happy.", "Tôi vui."],
      ["She is tired.", "Cô ấy mệt."],
      ["They are busy.", "Họ bận."],
    ]),
    rule("Viết tắt\nI am → I'm\nHe is → He's\nShe is → She's\nIt is → It's\nYou are → You're\nWe are → We're\nThey are → They're", [
      ["I'm fine.", "Tôi khỏe."],
      ["She's tired.", "Cô ấy mệt."],
      ["They're busy.", "Họ bận."],
    ]),
  ],
  3: [
    rule("Chủ ngữ + am / is / are + phần còn lại", [
      ["I am a student.", "Tôi là học sinh."],
      ["She is happy.", "Cô ấy vui."],
      ["They are at home.", "Họ ở nhà."],
    ]),
    rule("+ danh từ: I am a student.\n+ tính từ: She is happy.\n+ nơi chốn: They are at home.", [
      ["He is a doctor.", "Anh ấy là bác sĩ."],
      ["She is beautiful.", "Cô ấy xinh đẹp."],
      ["We are at home.", "Chúng tôi ở nhà."],
    ]),
  ],
  4: [
    rule("Chủ ngữ + am / is / are + not + phần còn lại\nis not → isn't\nare not → aren't\nam not — không viết tắt", [
      ["I am not tired.", "Tôi không mệt."],
      ["He isn't a teacher.", "Anh ấy không phải giáo viên."],
      ["They aren't hungry.", "Họ không đói."],
    ]),
    rule("Không dùng don't hoặc doesn't với to be.", [
      ["She isn't at home.", "Cô ấy không ở nhà."],
      ["We aren't busy.", "Chúng tôi không bận."],
    ]),
  ],
  5: [
    rule("Câu hỏi: Am / Is / Are + chủ ngữ + …?\nYes, + chủ ngữ + am / is / are.\nNo, + chủ ngữ + am / is / are + not.", [
      ["Are you happy? — Yes, I am.", "Bạn vui không? — Vâng."],
      ["Is he a student? — No, he isn't.", "Anh ấy là học sinh không? — Không."],
      ["Are they at home? — Yes, they are.", "Họ ở nhà không? — Vâng."],
    ]),
    rule("Are you …? → trả lời bằng I, không dùng you.", [
      ["Are you a student? — Yes, I am.", "Bạn là học sinh không? — Vâng, tôi là."],
      ["Are you happy? — No, I'm not.", "Bạn vui không? — Không, tôi không."],
    ]),
  ],
  6: [
    rule("My name is …\nI am … years old.\nI am from …\nI live in …", [
      ["My name is Nam.", "Tên tôi là Nam."],
      ["I am fifteen years old.", "Tôi 15 tuổi."],
      ["I am from Vietnam.", "Tôi đến từ Việt Nam."],
      ["I live in Hanoi.", "Tôi sống ở Hà Nội."],
    ]),
    rule("I am a student.\nMy family is …\nMy hobby is …", [
      ["I am a student.", "Tôi là học sinh."],
      ["My family is small.", "Gia đình tôi nhỏ."],
      ["My hobby is football.", "Sở thích của tôi là bóng đá."],
    ]),
  ],
  7: [
    rule("Ôn\nI am. He / She / It is. You / We / They are.\nPhủ định: am not, isn't, aren't.\nCâu hỏi: Am / Is / Are + chủ ngữ?", [
      ["I am a student.", "Tôi là học sinh."],
      ["She isn't busy.", "Cô ấy không bận."],
      ["Are you a student? — Yes, I am.", "Bạn là học sinh không? — Vâng."],
    ]),
    rule("Giới thiệu\nMy name is …\nI am … years old.\nKhông học từ mới.", [
      ["My name is Nam.", "Tên tôi là Nam."],
      ["I am fifteen years old.", "Tôi 15 tuổi."],
    ]),
  ],
  8: [
    rule("Danh từ gọi tên người, vật hoặc nơi.\nNgười: teacher, student, doctor\nVật: book, phone, table\nNơi: school, hospital, park", [
      ["teacher — giáo viên", "người"],
      ["book — quyển sách", "vật"],
      ["school — trường học", "nơi"],
    ]),
    rule("Chủ ngữ + am / is / are + danh từ", [
      ["I am a student.", "Tôi là học sinh."],
      ["He is a doctor.", "Anh ấy là bác sĩ."],
      ["They are teachers.", "Họ là giáo viên."],
    ]),
  ],
  9: [
    rule("Số ít = một. Số nhiều = từ hai trở lên.\n+ s: book → books\n+ es: bus → buses, box → boxes\nphụ âm + y → ies: baby → babies", [
      ["one book → two books", "một sách → hai sách"],
      ["one bus → two buses", "một xe buýt → hai xe buýt"],
      ["one baby → two babies", "một em bé → hai em bé"],
    ]),
    rule("Bất quy tắc\nchild → children\nman → men\nwoman → women\nperson → people\nSố nhiều đi với are.", [
      ["The book is new.", "Quyển sách mới."],
      ["The books are new.", "Những quyển sách mới."],
      ["The children are here.", "Những đứa trẻ ở đây."],
    ]),
  ],
  10: [
    rule("a / an + danh từ đếm được số ít\na + âm phụ âm: a book, a teacher, a university\nan + âm nguyên âm: an apple, an egg, an hour", [
      ["I am a student.", "Tôi là một học sinh."],
      ["This is an apple.", "Đây là một quả táo."],
      ["an hour — h không phát âm", "một giờ"],
    ]),
    rule("Sai: I am student.\nĐúng: I am a student.\nKhông dùng a/an trước danh từ số nhiều.", [
      ["She is a teacher.", "Cô ấy là một giáo viên."],
      ["books — không nói a books", "những quyển sách"],
    ]),
  ],
  11: [
    rule("Lần đầu, chưa xác định: a / an\nLần sau, đã biết: the", [
      ["I have a book. The book is blue.", "Tôi có một quyển sách. Quyển sách màu xanh."],
      ["I have a dog. The dog is small.", "Tôi có một con chó. Con chó nhỏ."],
    ]),
    rule("Nói chung thì không mạo từ.\nI like + danh từ số nhiều\nDanh từ không đếm được đứng một mình", [
      ["I like dogs.", "Tôi thích chó."],
      ["Water is important.", "Nước rất quan trọng."],
      ["English is useful.", "Tiếng Anh hữu ích."],
    ]),
  ],
  12: [
    rule("This + is — một, gần\nThat + is — một, xa\nThese + are — nhiều, gần\nThose + are — nhiều, xa", [
      ["This is a pen.", "Đây là một chiếc bút."],
      ["That is a car.", "Kia là một chiếc ô tô."],
      ["These are books.", "Đây là những quyển sách."],
      ["Those are cars.", "Kia là những chiếc ô tô."],
    ]),
  ],
  13: [
    rule("Số ít: He is a teacher.\nSố nhiều: They are students.\nThis / That + is + a/an + danh từ\nThese / Those + are + danh từ số nhiều", [
      ["This is a book.", "Đây là một quyển sách."],
      ["These are books.", "Đây là những quyển sách."],
      ["She is not a doctor.", "Cô ấy không phải bác sĩ."],
      ["Are they students?", "Họ là học sinh không?"],
    ]),
  ],
  14: [
    rule("Ôn, không từ mới\na book / an apple / an hour\nI have a dog. The dog is small.\nThis is … / These are …\nThose are …", [
      ["He is a doctor.", "Anh ấy là bác sĩ."],
      ["This is an umbrella.", "Đây là một chiếc ô."],
      ["Those are my friends.", "Kia là bạn tôi."],
      ["They aren't students.", "Họ không phải học sinh."],
    ]),
  ],
  15: [
    {
      text: "I study. You go. We play. They read.",
      example: "I study.",
      exampleVi: "Tôi học.",
    },
    {
      text: "Viết câu ngắn: chủ ngữ rồi đến hành động. Chưa thêm -s.",
      example: "You go to school.",
      exampleVi: "Bạn đi học.",
    },
  ],
  16: [
    {
      text: "I like music. We study English. They play football.",
      example: "I like music.",
      exampleVi: "Tôi thích nhạc.",
    },
    {
      text: "Thêm vật sau động từ.",
      example: "We study English.",
      exampleVi: "Chúng tôi học tiếng Anh.",
    },
  ],
  17: [
    {
      text: "I have a book. She has a pen.",
      example: "I have a book.",
      exampleVi: "Tôi có một quyển sách.",
    },
    {
      text: "I, you, we, they + have. He, she, it + has.",
      example: "You have a pen.",
      exampleVi: "Bạn có một cây bút.",
    },
  ],
  18: [
    {
      text: "There is a book. There are pens.",
      example: "There is a book.",
      exampleVi: "Có một quyển sách.",
    },
    {
      text: "There is + một vật. There are + nhiều vật.",
      example: "There are pens.",
      exampleVi: "Có những cây bút.",
    },
  ],
  19: [
    {
      text: "a big house. This is my book. That is your pen.",
      example: "It is a big house.",
      exampleVi: "Đó là ngôi nhà to.",
    },
    {
      text: "Tính từ đứng trước danh từ. my, your, his, her đứng trước danh từ.",
      example: "It is a small bag.",
      exampleVi: "Đó là cái cặp nhỏ.",
    },
  ],
  20: [
    {
      text: "Dùng I am, She is, I have, There is.",
      example: "I have a family.",
      exampleVi: "Tôi có một gia đình.",
    },
    {
      text: "Viết câu đơn về gia đình, trường và nhà.",
      example: "He is my father.",
      exampleVi: "Ông ấy là bố tôi.",
    },
  ],
  21: [
    {
      text: "Ôn chủ ngữ + động từ, tân ngữ, have/has, There is/are.",
      example: "I study English.",
      exampleVi: "Tôi học tiếng Anh.",
    },
    {
      text: "Kiểm tra cấu trúc câu. Không học từ mới.",
      example: "They play football.",
      exampleVi: "Họ chơi bóng.",
    },
  ],
  22: [
    {
      text: "What is this? Who is she? Where is the book?",
      example: "What is this?",
      exampleVi: "Đây là cái gì?",
    },
    {
      text: "Hỏi cái gì, ai, ở đâu.",
      example: "It is a book.",
      exampleVi: "Nó là quyển sách.",
    },
  ],
  23: [
    {
      text: "When is the class? Why are you sad? How are you?",
      example: "When is the class?",
      exampleVi: "Lớp học khi nào?",
    },
    {
      text: "Hỏi khi nào, tại sao, như thế nào.",
      example: "It is in the morning.",
      exampleVi: "Vào buổi sáng.",
    },
  ],
  24: [
    {
      text: "in the bag. on the bag. at school. under the book.",
      example: "The pen is in the bag.",
      exampleVi: "Bút ở trong cặp.",
    },
    {
      text: "in, on, at, under nói vật ở đâu.",
      example: "The book is on the bag.",
      exampleVi: "Sách ở trên cặp.",
    },
  ],
  25: [
    {
      text: "in the morning. on Monday. at 7.",
      example: "I study in the morning.",
      exampleVi: "Tôi học vào buổi sáng.",
    },
    {
      text: "in + buổi. on + thứ. at + giờ.",
      example: "We have class on Monday.",
      exampleVi: "Chúng tôi có lớp vào thứ Hai.",
    },
  ],
  26: [
    {
      text: "Where is the book? What is this? Who is she?",
      example: "Where is the book?",
      exampleVi: "Sách ở đâu?",
    },
    {
      text: "Từ để hỏi + am/is/are + chủ ngữ.",
      example: "What is this?",
      exampleVi: "Đây là cái gì?",
    },
  ],
  27: [
    {
      text: "Đọc câu hỏi trước, rồi tìm câu trong đoạn có cùng từ.",
      example: "I am Nam.",
      exampleVi: "Tôi là Nam.",
    },
    {
      text: "Đọc một đoạn dễ và trả lời câu hỏi.",
      example: "I am a student.",
      exampleVi: "Tôi là học sinh.",
    },
  ],
  28: [
    {
      text: "Ôn to be, a/an, this/that, have/has, There is, câu hỏi, in/on/at.",
      example: "I am a student.",
      exampleVi: "Tôi là học sinh.",
    },
    {
      text: "Kiểm tra 4 tuần đầu. Không học từ mới.",
      example: "It is a book.",
      exampleVi: "Nó là quyển sách.",
    },
  ],
  29: [
    {
      text: "I / You / We / They + động từ. I study every day.",
      example: "I study every day.",
      exampleVi: "Tôi học mỗi ngày.",
    },
    {
      text: "Nói việc lặp lại với I, you, we, they. Chưa thêm -s.",
      example: "You go to school.",
      exampleVi: "Bạn đi học.",
    },
  ],
  30: [
    {
      text: "He likes music. She studies English. I like music không thêm -s.",
      example: "He likes music.",
      exampleVi: "Anh ấy thích nhạc.",
    },
    {
      text: "Với he, she, it thêm -s. like → likes. study → studies. go → goes.",
      example: "She studies English.",
      exampleVi: "Cô ấy học tiếng Anh.",
    },
  ],
};

export function getRulesForDay(day: number, fallbackRule: string): RuleItem[] {
  const rules = DAY_RULES[day];
  if (rules) return rules;
  return splitRuleSegments(fallbackRule).map((text) => ({ text, example: "—" }));
}
