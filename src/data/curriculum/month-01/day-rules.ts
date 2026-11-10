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
    rule("Đại từ (Pron) thay tên khi làm chủ ngữ (S).", [
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
    rule("Chủ ngữ (S) + am / is / are + phần còn lại", [
      ["I am a student.", "Tôi là học sinh."],
      ["She is happy.", "Cô ấy vui."],
      ["They are at home.", "Họ ở nhà."],
    ]),
    rule("+ danh từ (N): I am a student.\n+ tính từ (Adj): She is happy.\n+ nơi chốn: They are at home.", [
      ["He is a doctor.", "Anh ấy là bác sĩ."],
      ["She is beautiful.", "Cô ấy xinh đẹp."],
      ["We are at home.", "Chúng tôi ở nhà."],
    ]),
  ],
  4: [
    rule("Chủ ngữ (S) + am / is / are + not + phần còn lại\nis not → isn't\nare not → aren't\nam not — không viết tắt", [
      ["I am not tired.", "Tôi không mệt."],
      ["He isn't a teacher.", "Anh ấy không phải giáo viên."],
      ["They aren't hungry.", "Họ không đói."],
    ]),
    rule("Không dùng don't hoặc doesn't với to be (V tobe).", [
      ["She isn't at home.", "Cô ấy không ở nhà."],
      ["We aren't busy.", "Chúng tôi không bận."],
    ]),
  ],
  5: [
    rule("Câu hỏi: Am / Is / Are + chủ ngữ (S) + …?\nYes, + chủ ngữ (S) + am / is / are.\nNo, + chủ ngữ (S) + am / is / are + not.", [
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
    rule("Ôn\nI am. He / She / It is. You / We / They are.\nPhủ định: am not, isn't, aren't.\nCâu hỏi: Am / Is / Are + chủ ngữ (S)?", [
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
    rule("Danh từ (N) gọi tên người, vật hoặc nơi.\nNgười: teacher, student, doctor\nVật: book, phone, table\nNơi: school, hospital, park", [
      ["teacher — giáo viên", "người"],
      ["book — quyển sách", "vật"],
      ["school — trường học", "nơi"],
    ]),
    rule("Chủ ngữ (S) + am / is / are + danh từ (N)", [
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
    rule("a / an + danh từ (N) đếm được số ít\na + âm phụ âm: a book, a teacher, a university\nan + âm nguyên âm: an apple, an egg, an hour", [
      ["I am a student.", "Tôi là một học sinh."],
      ["This is an apple.", "Đây là một quả táo."],
      ["an hour — h không phát âm", "một giờ"],
    ]),
    rule("Sai: I am student.\nĐúng: I am a student.\nKhông dùng a/an trước danh từ (N) số nhiều.", [
      ["She is a teacher.", "Cô ấy là một giáo viên."],
      ["books — không nói a books", "những quyển sách"],
    ]),
  ],
  11: [
    rule("Lần đầu, chưa xác định: a / an\nLần sau, đã biết: the", [
      ["I have a book. The book is blue.", "Tôi có một quyển sách. Quyển sách màu xanh."],
      ["I have a dog. The dog is small.", "Tôi có một con chó. Con chó nhỏ."],
    ]),
    rule("Nói chung thì không mạo từ (Art).\nI like + danh từ (N) số nhiều\nDanh từ (N) không đếm được đứng một mình", [
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
    rule("Số ít: He is a teacher.\nSố nhiều: They are students.\nThis / That + is + a/an + danh từ (N)\nThese / Those + are + danh từ (N) số nhiều", [
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
      text: "Công thức: chủ ngữ (S) + động từ (V). Chưa thêm -s.",
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
      text: "Công thức: chủ ngữ (S) + động từ (V) + tân ngữ (O).",
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
      text: "Vị trí 1: trước danh từ (N) — a big house\nVị trí 2: sau to be (V tobe) — She is happy.\nVị trí 3: sau look / seem / feel — She looks happy.",
      example: "It is a big house.",
      exampleVi: "Đó là ngôi nhà to.",
      examples: [
        { en: "a beautiful girl", vi: "một cô gái xinh đẹp" },
        { en: "The house is big.", vi: "Ngôi nhà to." },
        { en: "He seems tired.", vi: "Anh ấy có vẻ mệt." },
      ],
    },
    {
      text: "Poss. Adj đứng trước danh từ (N): my, your, his, her, its, our, their.",
      example: "This is my book.",
      exampleVi: "Đây là sách của tôi.",
      table: {
        headers: ["Đại từ nhân xưng", "Tính từ sở hữu", "Nghĩa"],
        rows: [
          ["I", "my", "của tôi"],
          ["You", "your", "của bạn"],
          ["He", "his", "của anh ấy"],
          ["She", "her", "của cô ấy"],
          ["It", "its", "của nó"],
          ["We", "our", "của chúng tôi"],
          ["They", "their", "của họ"],
        ],
      },
      note: "Không đứng một mình.\nThis is my book. (Đúng)\nThis book is my. (Sai)",
      examples: [
        { en: "This is my book.", vi: "Đây là sách của tôi." },
        { en: "That is your pen.", vi: "Kia là bút của bạn." },
      ],
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
      text: "Ôn chủ ngữ (S) + động từ (V), tân ngữ (O), have/has, There is/are.",
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
      text: "What → cái gì / điều gì?\nHỏi sự vật, sự việc, thông tin.\nWhat is this? — Đây là cái gì?",
      example: "What is this?",
      exampleVi: "Đây là cái gì?",
      examples: [
        { en: "What is this? → It's a book.", vi: "Đây là cái gì? → Nó là quyển sách." },
        { en: "What do you do? → I'm a student.", vi: "Bạn làm nghề gì? → Tôi là học sinh." },
      ],
      table: {
        headers: ["Câu hỏi", "Nghĩa"],
        rows: [
          ["What is your name?", "Bạn tên gì?"],
          ["What time is it?", "Bây giờ là mấy giờ?"],
          ["What happened?", "Chuyện gì đã xảy ra?"],
          ["What are you doing?", "Bạn đang làm gì?"],
          ["What do you think?", "Bạn nghĩ gì?"],
          ["What would you like?", "Bạn muốn gì?"],
        ],
      },
    },
    {
      text: "Who → ai?\nHỏi về người.\nWho is she? — Cô ấy là ai?",
      example: "Who is she?",
      exampleVi: "Cô ấy là ai?",
      examples: [
        { en: "Who is he? → He's my friend.", vi: "Anh ấy là ai? → Anh ấy là bạn tôi." },
        { en: "Who do you live with? → I live with my family.", vi: "Bạn sống cùng ai? → Tôi sống cùng gia đình." },
      ],
      table: {
        headers: ["Câu hỏi", "Nghĩa"],
        rows: [
          ["Who are you?", "Bạn là ai?"],
          ["Who is your teacher?", "Giáo viên của bạn là ai?"],
          ["Who is calling?", "Ai đang gọi điện?"],
          ["Who do you live with?", "Bạn sống cùng ai?"],
          ["Who did you meet yesterday?", "Hôm qua bạn gặp ai?"],
          ["Who helps you?", "Ai giúp bạn?"],
        ],
      },
    },
    {
      text: "Where → ở đâu?\nHỏi địa điểm, vị trí.\nWhere is the book? — Quyển sách ở đâu?",
      example: "Where is the book?",
      exampleVi: "Quyển sách ở đâu?",
      examples: [
        { en: "Where do you live? → I live here.", vi: "Bạn sống ở đâu? → Tôi sống ở đây." },
        { en: "Where is my phone?", vi: "Điện thoại của tôi ở đâu?" },
      ],
      table: {
        headers: ["Câu hỏi", "Nghĩa"],
        rows: [
          ["Where are you?", "Bạn đang ở đâu?"],
          ["Where do you live?", "Bạn sống ở đâu?"],
          ["Where do you work?", "Bạn làm việc ở đâu?"],
          ["Where are you going?", "Bạn đang đi đâu?"],
          ["Where did you go yesterday?", "Hôm qua bạn đã đi đâu?"],
          ["Where is my phone?", "Điện thoại của tôi ở đâu?"],
        ],
      },
    },
  ],
  23: [
    {
      text: "When → khi nào?\nHỏi thời gian: ngày, tháng, năm, thời điểm.\nWhen is the class? — Lớp học khi nào?",
      example: "When is the class?",
      exampleVi: "Lớp học khi nào?",
      examples: [
        { en: "When do you wake up? → I wake up at 6 a.m.", vi: "Bạn thức dậy khi nào? → Tôi thức dậy lúc 6 giờ sáng." },
        { en: "When is your birthday? → My birthday is in June.", vi: "Sinh nhật của bạn là khi nào? → Sinh nhật tôi vào tháng Sáu." },
      ],
      table: {
        headers: ["Câu hỏi", "Nghĩa"],
        rows: [
          ["When do you get up?", "Bạn thức dậy khi nào?"],
          ["When do you go to work?", "Khi nào bạn đi làm?"],
          ["When do you study English?", "Khi nào bạn học tiếng Anh?"],
          ["When did you arrive?", "Bạn đã đến khi nào?"],
          ["When did you start learning English?", "Bạn bắt đầu học tiếng Anh khi nào?"],
          ["When will you travel?", "Khi nào bạn sẽ đi du lịch?"],
          ["When is the meeting?", "Cuộc họp diễn ra khi nào?"],
        ],
      },
    },
    {
      text: "Why → tại sao?\nHỏi lý do hoặc nguyên nhân.\nWhy are you tired? — Tại sao bạn mệt?",
      example: "Why are you tired?",
      exampleVi: "Tại sao bạn mệt?",
      examples: [
        { en: "Why do you study English? → Because I like English.", vi: "Tại sao bạn học tiếng Anh? → Vì tôi thích tiếng Anh." },
        { en: "Why do you exercise? → Because I want to stay healthy.", vi: "Tại sao bạn tập thể dục? → Vì tôi muốn khỏe." },
      ],
      table: {
        headers: ["Câu hỏi", "Nghĩa"],
        rows: [
          ["Why are you late?", "Tại sao bạn đến muộn?"],
          ["Why do you like English?", "Tại sao bạn thích tiếng Anh?"],
          ["Why are you learning English?", "Tại sao bạn đang học tiếng Anh?"],
          ["Why did you leave early?", "Tại sao bạn rời đi sớm?"],
          ["Why don't you exercise?", "Tại sao bạn không tập thể dục?"],
          ["Why are you tired?", "Tại sao bạn mệt?"],
          ["Why do you want to change your job?", "Tại sao bạn muốn đổi công việc?"],
        ],
      },
    },
    {
      text: "How → như thế nào / bằng cách nào?\nHỏi cách thức, tình trạng hoặc mức độ.\nHow are you? — Bạn khỏe không?",
      example: "How are you?",
      exampleVi: "Bạn khỏe không?",
      examples: [
        { en: "How are you? → I'm fine, thank you.", vi: "Bạn khỏe không? → Tôi khỏe, cảm ơn." },
        { en: "How do you practice English? → I listen and speak every day.", vi: "Bạn luyện tiếng Anh như thế nào? → Tôi nghe và nói mỗi ngày." },
      ],
      table: {
        headers: ["Câu hỏi", "Nghĩa"],
        rows: [
          ["How are you?", "Bạn khỏe không?"],
          ["How do you go to work?", "Bạn đi làm bằng cách nào?"],
          ["How do you learn English?", "Bạn học tiếng Anh như thế nào?"],
          ["How was your weekend?", "Cuối tuần của bạn thế nào?"],
          ["How did you get here?", "Bạn đến đây bằng cách nào?"],
          ["How do you feel?", "Bạn cảm thấy thế nào?"],
          ["How can I improve my English?", "Làm sao tôi có thể cải thiện tiếng Anh?"],
        ],
      },
    },
  ],
  24: [
    {
      text: "IN / ON / AT dễ nhầm.\nin: bên trong · on: trên bề mặt · at: tại địa điểm",
      example: "The book is on the table.",
      exampleVi: "Quyển sách ở trên bàn.",
      examples: [
        { en: "The book is on the table.", vi: "Quyển sách ở trên bàn." },
        { en: "I am at home.", vi: "Tôi đang ở nhà." },
        { en: "She is in the kitchen.", vi: "Cô ấy ở trong bếp." },
      ],
      table: {
        headers: ["Giới từ", "Cách dùng", "Ví dụ"],
        rows: [
          ["in", "Bên trong không gian", "in the room"],
          ["on", "Trên bề mặt", "on the table"],
          ["at", "Tại một địa điểm", "at school"],
        ],
      },
      note: "IN: in the room, in the kitchen, in the car, in Vietnam, in Ho Chi Minh City.\nON: on the table, on the floor, on the wall, on the ceiling.\nAT: at home, at school, at work, at the bus station, at the airport.",
    },
    {
      text: "under — dưới\nnext to / beside — bên cạnh\nbetween — ở giữa hai người/vật",
      example: "The cat is under the chair.",
      exampleVi: "Con mèo ở dưới ghế.",
      examples: [
        { en: "The cat is under the chair.", vi: "Con mèo ở dưới ghế." },
        { en: "I sit beside my friend.", vi: "Tôi ngồi bên cạnh bạn." },
        { en: "The school is between the bank and the park.", vi: "Trường học ở giữa ngân hàng và công viên." },
      ],
    },
    {
      text: "behind — phía sau\nin front of — phía trước\nabove — phía trên (không cần chạm)\nover — phía trên, vượt qua",
      example: "There is a tree in front of my house.",
      exampleVi: "Có một cái cây phía trước nhà tôi.",
      examples: [
        { en: "The garden is behind my house.", vi: "Khu vườn ở phía sau nhà tôi." },
        { en: "There is a tree in front of my house.", vi: "Có một cái cây phía trước nhà tôi." },
        { en: "The clock is above the door.", vi: "Đồng hồ ở phía trên cửa." },
        { en: "The plane is flying over the city.", vi: "Máy bay đang bay trên thành phố." },
      ],
    },
  ],
  25: [
    {
      text: "IN / ON / AT chỉ thời gian.\nin: tháng, năm, mùa, buổi · on: thứ, ngày · at: giờ, thời điểm",
      example: "I go to school at 7 a.m.",
      exampleVi: "Tôi đi học lúc 7 giờ sáng.",
      table: {
        headers: ["Giới từ", "Cách dùng", "Ví dụ"],
        rows: [
          ["in", "Tháng", "in January"],
          ["in", "Năm", "in 2026"],
          ["in", "Mùa", "in summer"],
          ["in", "Buổi trong ngày", "in the morning"],
          ["on", "Thứ trong tuần", "on Monday"],
          ["on", "Ngày tháng", "on May 5th"],
          ["on", "Thứ + buổi", "on Sunday morning"],
          ["at", "Giờ cụ thể", "at 7 o'clock"],
          ["at", "Buổi tối", "at night"],
          ["at", "Thời điểm", "at noon"],
        ],
      },
      note: "Mẹo: IN → tháng, năm, mùa, buổi.\nON → thứ, ngày.\nAT → giờ, thời điểm cụ thể.",
    },
    {
      text: "Ví dụ thường gặp",
      example: "I usually get up in the morning.",
      exampleVi: "Tôi thường dậy vào buổi sáng.",
      examples: [
        { en: "I go to school at 7 a.m.", vi: "Tôi đi học lúc 7 giờ sáng." },
        { en: "My birthday is in October.", vi: "Sinh nhật tôi vào tháng Mười." },
        { en: "I play football on Sunday.", vi: "Tôi đá bóng vào chủ nhật." },
        { en: "I usually get up in the morning.", vi: "Tôi thường dậy vào buổi sáng." },
        { en: "We have English lessons on Monday morning.", vi: "Chúng tôi học tiếng Anh vào sáng thứ Hai." },
      ],
    },
  ],
  26: [
    {
      text: "Am / Is / Are + chủ ngữ (S) + …?\nĐưa am / is / are lên đầu câu.",
      example: "Are you a student?",
      exampleVi: "Bạn là học sinh phải không?",
      examples: [
        { en: "Are you a student?", vi: "Bạn là học sinh phải không?" },
        { en: "Is he a teacher?", vi: "Anh ấy là giáo viên phải không?" },
        { en: "Is she happy?", vi: "Cô ấy vui phải không?" },
        { en: "Are they friends?", vi: "Họ là bạn phải không?" },
      ],
      table: {
        headers: ["Câu khẳng định", "Câu hỏi"],
        rows: [
          ["You are happy.", "Are you happy?"],
          ["She is a student.", "Is she a student?"],
          ["They are at home.", "Are they at home?"],
          ["He is tall.", "Is he tall?"],
        ],
      },
      note: "I → am. He / She / It → is. You / We / They → are.",
    },
    {
      text: "WH + am / is / are + chủ ngữ (S) + …?\nWhat / Who / Where / How",
      example: "What is your name?",
      exampleVi: "Bạn tên gì?",
      table: {
        headers: ["Từ hỏi", "Nghĩa", "Ví dụ"],
        rows: [
          ["What", "Cái gì", "What is this?"],
          ["Who", "Ai", "Who is she?"],
          ["Where", "Ở đâu", "Where are you?"],
          ["How", "Như thế nào", "How are you?"],
        ],
      },
      examples: [
        { en: "What is your name?", vi: "Bạn tên gì?" },
        { en: "Who is your teacher?", vi: "Giáo viên của bạn là ai?" },
        { en: "Where is my book?", vi: "Sách của tôi ở đâu?" },
        { en: "How are you?", vi: "Bạn khỏe không?" },
      ],
      note: "Học thuộc: What is your name? How old are you? Where are you from? Who is your best friend? What is this? How are you?\nWhere do you live? sẽ học ở phần do / does.",
    },
    {
      text: "Câu hỏi Yes / No\nYes, I am. / No, I'm not.",
      example: "Are you happy?",
      exampleVi: "Bạn vui phải không?",
      examples: [
        { en: "Are you happy? → Yes, I am.", vi: "Bạn vui không? → Vâng." },
        { en: "Is she your sister? → Yes, she is.", vi: "Cô ấy là chị bạn phải không? → Vâng." },
        { en: "Are they students? → No, they aren't.", vi: "Họ là học sinh phải không? → Không." },
        { en: "Is he a doctor? → No, he isn't.", vi: "Anh ấy là bác sĩ phải không? → Không." },
      ],
      table: {
        headers: ["Câu hỏi", "Yes", "No"],
        rows: [
          ["Are you...?", "Yes, I am.", "No, I'm not."],
          ["Is he...?", "Yes, he is.", "No, he isn't."],
          ["Is she...?", "Yes, she is.", "No, she isn't."],
          ["Are they...?", "Yes, they are.", "No, they aren't."],
        ],
      },
    },
  ],
  27: [
    {
      text: "4 bước đọc hiểu\n1. Đọc tiêu đề — đoán nội dung.\n2. Đọc đoạn — gạch từ đã biết.\n3. Đọc câu hỏi — cần tìm gì?\n4. Tìm thông tin trong đoạn.",
      example: "My name is Nam.",
      exampleVi: "Tên tôi là Nam.",
    },
    {
      text: "Từ để hỏi khi đọc",
      example: "What is his name?",
      exampleVi: "Anh ấy tên gì?",
      table: {
        headers: ["Từ hỏi", "Nghĩa", "Cần tìm"],
        rows: [
          ["Who", "Ai", "Người"],
          ["What", "Cái gì", "Sự vật, hoạt động"],
          ["Where", "Ở đâu", "Địa điểm"],
          ["When", "Khi nào", "Thời gian"],
          ["How old", "Bao nhiêu tuổi", "Tuổi"],
          ["How many", "Bao nhiêu", "Số lượng"],
          ["What time", "Mấy giờ", "Thời gian cụ thể"],
        ],
      },
    },
    {
      text: "5 chủ đề đọc gần: bản thân, gia đình, trường, ngày thường, sở thích",
      example: "I am a student.",
      exampleVi: "Tôi là học sinh.",
      table: {
        headers: ["Chủ đề", "Từ cần biết"],
        rows: [
          ["About me", "name, age, live, student"],
          ["Family", "father, mother, brother, sister"],
          ["School", "teacher, student, classroom, subject"],
          ["Daily routine", "get up, go to school, have lunch"],
          ["Hobbies", "football, music, swimming, reading"],
        ],
      },
      note: "Favourite = yêu thích. Subject = môn học. From … to … = từ … đến …\nFour people = bốn người. Small house = ngôi nhà nhỏ. Love = yêu thương.",
    },
  ],
  28: [
    {
      text: "Ôn to be (V tobe), a/an, this/that, have/has, There is, câu hỏi, in/on/at.",
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
      text: "Hiện tại đơn (Present Simple) nói thói quen, sự thật, sở thích.",
      example: "I get up at 6 a.m.",
      exampleVi: "Tôi thức dậy lúc 6 giờ.",
      examples: [
        { en: "I get up at 6 a.m.", vi: "Thói quen: Tôi thức dậy lúc 6 giờ." },
        { en: "She goes to school every day.", vi: "Thói quen: Cô ấy đi học mỗi ngày." },
        { en: "The sun rises in the east.", vi: "Sự thật: Mặt trời mọc ở hướng Đông." },
        { en: "I like English.", vi: "Sở thích: Tôi thích tiếng Anh." },
        { en: "He loves football.", vi: "Sở thích: Cậu ấy thích bóng đá." },
      ],
    },
    {
      text: "To be (V tobe): S + am / is / are + …\nI am · He/She/It is · You/We/They are",
      example: "I am a student.",
      exampleVi: "Tôi là học sinh.",
      table: {
        headers: ["Tiếng Anh", "Tiếng Việt"],
        rows: [
          ["I am a student.", "Tôi là học sinh."],
          ["She is beautiful.", "Cô ấy xinh đẹp."],
          ["He is a teacher.", "Anh ấy là giáo viên."],
          ["They are happy.", "Họ vui vẻ."],
          ["We are friends.", "Chúng tôi là bạn bè."],
        ],
      },
      note: "To be (V tobe) đi với danh từ, tính từ hoặc nơi chốn.\nI am a student. (danh từ)\nShe is happy. (tính từ)\nThey are at school. (nơi chốn)",
    },
    {
      text: "Động từ thường (V): I / You / We / They + V nguyên mẫu",
      example: "I play football.",
      exampleVi: "Tôi chơi bóng đá.",
      examples: [
        { en: "I play football.", vi: "Tôi chơi bóng đá." },
        { en: "You like music.", vi: "Bạn thích nhạc." },
        { en: "We study English.", vi: "Chúng tôi học tiếng Anh." },
        { en: "They go to school.", vi: "Họ đi học." },
      ],
      note: "He / She / It + V-s. Ví dụ: She goes to school every day. Học kỹ ngày 30.",
    },
  ],
  30: [
    {
      text: "He / She / It là chủ ngữ (S) số ít.\nNam = he · Lan = she · the dog = it",
      example: "He is Nam.",
      exampleVi: "Anh ấy là Nam.",
      table: {
        headers: ["Đại từ", "Nghĩa", "Ví dụ"],
        rows: [
          ["He", "Anh ấy / cậu ấy", "He is Nam."],
          ["She", "Cô ấy", "She is Lan."],
          ["It", "Nó (đồ vật, con vật)", "It is a cat."],
        ],
      },
      note: "Tên riêng hoặc danh từ số ít cũng chia như he / she / it.\nNam = he. Lan = she. My father = he. My mother = she. The dog = it.",
    },
    {
      text: "He / She / It + V-s/es\nI play football. → He plays football.",
      example: "He plays football.",
      exampleVi: "Anh ấy chơi bóng đá.",
      table: {
        headers: ["Chủ ngữ (S)", "Động từ (V)", "Câu"],
        rows: [
          ["I", "play", "I play football."],
          ["He", "plays", "He plays football."],
          ["They", "like", "They like music."],
          ["She", "likes", "She likes music."],
        ],
      },
      examples: [
        { en: "I eat rice. → He eats rice.", vi: "Tôi ăn cơm. → Anh ấy ăn cơm." },
        { en: "They watch TV. → She watches TV.", vi: "Họ xem TV. → Cô ấy xem TV." },
        { en: "We go to school. → He goes to school.", vi: "Chúng tôi đi học. → Anh ấy đi học." },
      ],
    },
    {
      text: "Cách thêm -s / -es",
      example: "She studies English.",
      exampleVi: "Cô ấy học tiếng Anh.",
      table: {
        headers: ["Quy tắc", "Cách chia", "Ví dụ"],
        rows: [
          ["Thông thường", "+ s", "play → plays"],
          ["o, ch, sh, ss, x, z", "+ es", "watch → watches · go → goes"],
          ["Phụ âm + y", "y → ies", "study → studies"],
          ["Nguyên âm + y", "+ s", "play → plays · enjoy → enjoys"],
          ["Đặc biệt", "have → has · be → is", "He has a bicycle."],
        ],
      },
      note: "He plays football. She likes English. He goes to school. She watches TV. He studies English. He has a bicycle. She is a student.",
    },
  ],
};

export function getRulesForDay(day: number, fallbackRule: string): RuleItem[] {
  const rules = DAY_RULES[day];
  if (rules) return rules;
  return splitRuleSegments(fallbackRule).map((text) => ({ text, example: "—" }));
}
