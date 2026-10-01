import type { RuleItem } from "@/types/lesson";
import { splitRuleSegments } from "@/lib/format-rule";

export const DAY_RULES: Record<number, RuleItem[]> = {
  1: [
    { text: "I đi với am.", example: "I am Huy.", exampleVi: "Tôi là Huy." },
    {
      text: "Giới thiệu tên: My name is + tên.",
      example: "My name is Minh.",
      exampleVi: "Tên tôi là Minh.",
    },
    {
      text: "Viết tên không dấu: An, Minh, Khoa.",
      example: "Tên Huy viết: Huy (không dấu).",
    },
  ],
  2: [
    {
      text: "Tuổi: I am + số + years old.",
      example: "I am fifteen years old.",
      exampleVi: "Tôi mười lăm tuổi.",
    },
    { text: "thirteen là 13.", example: "thirteen → 13" },
    {
      text: "thirty là 30, hôm nay chưa dùng thirty.",
      example: "Hôm nay chỉ học đến twenty (20).",
    },
  ],
  3: [
    {
      text: "I → am.",
      example: "I am a student.",
      exampleVi: "Tôi là học sinh.",
    },
    {
      text: "He / she / it → is.",
      example: "She is my friend.",
      exampleVi: "Cô ấy là bạn tôi.",
    },
    {
      text: "You / we / they → are.",
      example: "They are students.",
      exampleVi: "Họ là học sinh.",
    },
  ],
  4: [
    {
      text: "This = vật gần tay.",
      example: "This is a book.",
      exampleVi: "Đây là quyển sách. (cầm trên tay)",
    },
    {
      text: "That = vật ở xa.",
      example: "That is a chair.",
      exampleVi: "Đó là cái ghế. (ghế ở xa)",
    },
    {
      text: "This is a + đồ vật.",
      example: "This is a pen.",
      exampleVi: "Đây là cây bút.",
    },
  ],
  5: [
    {
      text: "Nghe âm đầu. Âm a, e, i, o, u thì dùng an.",
      example: "an apple, an egg, an orange",
      exampleVi: "một quả táo, một quả trứng, một quả cam",
    },
    {
      text: "Âm còn lại dùng a.",
      example: "a book, a pen, a desk",
      exampleVi: "một quyển sách, một cây bút, một cái bàn",
    },
    {
      text: "an hour vì nghe «au».",
      example: "an hour",
      exampleVi: "một giờ",
    },
    {
      text: "a university vì nghe «diu».",
      example: "a university",
      exampleVi: "một trường đại học",
    },
  ],
  6: [
    {
      text: "Màu đứng sau is: My bag is black.",
      example: "Your pen is red.",
      exampleVi: "Bút của bạn màu đỏ.",
    },
    {
      text: "my của tôi, your của bạn, his của nam, her của nữ.",
      example: "His book is blue. / Her ruler is green.",
      exampleVi: "Sách của anh ấy màu xanh dương. / Thước của cô ấy màu xanh lá.",
    },
  ],
  7: [
    {
      text: "5 phút cuối mới đối đáp án.",
      example: "Làm xong 25 phút rồi mới mở đáp án.",
    },
    {
      text: "Câu sai: chép lại câu đúng 3 lần.",
      example: "Sai She are → chép She is my friend. × 3",
      exampleVi: "Sai She are → chép She is my friend. (Cô ấy là bạn tôi.) × 3",
    },
  ],
  8: [
    { text: "Số chục: twenty 20, thirty 30, forty 40, fifty 50, sixty 60.", example: "forty → 40, fifty → 50" },
    {
      text: "45 = forty-five.",
      example: "He is forty-five years old.",
      exampleVi: "Anh ấy bốn mươi lăm tuổi.",
    },
  ],
  9: [
    {
      text: "I, you, we, they + have.",
      example: "I have a brother. / We have a dog.",
      exampleVi: "Tôi có một anh/em. / Chúng tôi có một con chó.",
    },
    {
      text: "He, she, it + has.",
      example: "She has a phone. / My father has a motorbike.",
      exampleVi: "Cô ấy có điện thoại. / Bố tôi có xe máy.",
    },
  ],
  10: [
    {
      text: "I / you / we / they + like.",
      example: "I like football. / They like films.",
      exampleVi: "Tôi thích bóng đá. / Họ thích phim.",
    },
    {
      text: "He / she + likes.",
      example: "He likes music. / My mother likes rice.",
      exampleVi: "Anh ấy thích nhạc. / Mẹ tôi thích cơm.",
    },
  ],
  11: [
    {
      text: "Ngôi I không thêm -s.",
      example: "I study English.",
      exampleVi: "Tôi học tiếng Anh. (không I studys)",
    },
    {
      text: "every day đứng cuối câu.",
      example: "I study English every day.",
      exampleVi: "Tôi học tiếng Anh mỗi ngày.",
    },
    {
      text: "at + giờ.",
      example: "I get up at six. / I sleep at ten.",
      exampleVi: "Tôi dậy lúc sáu giờ. / Tôi ngủ lúc mười giờ.",
    },
  ],
  12: [
    {
      text: "at + giờ.",
      example: "I go to school at seven o'clock.",
      exampleVi: "Tôi đi học lúc bảy giờ.",
    },
    {
      text: "in the morning / afternoon / evening.",
      example: "I study in the evening.",
      exampleVi: "Tôi học vào buổi tối.",
    },
    {
      text: "half past six = 6 giờ 30.",
      example: "I get up at half past six.",
      exampleVi: "Tôi dậy lúc sáu giờ rưỡi.",
    },
  ],
  13: [
    {
      text: "don't đứng ngay trước động từ: don't like, don't play, don't go.",
      example: "I don't watch TV at night.",
      exampleVi: "Tôi không xem TV vào buổi tối.",
    },
    {
      text: "I do my homework vẫn là câu khẳng định, do nghĩa là làm.",
      example: "I do my homework every day.",
      exampleVi: "Tôi làm bài tập về nhà mỗi ngày.",
    },
  ],
  14: [
    {
      text: "20 phút viết, 5 phút đọc to, 5 phút đối mẫu.",
      example: "Viết 8 câu → đọc to → phụ huynh đối cấu trúc.",
    },
    {
      text: "Chấm cấu trúc, chưa trừ lỗi chính tả nhỏ.",
      example: "I go to school in the morning.",
      exampleVi: "Tôi đi học vào buổi sáng. → đúng cấu trúc là 1 điểm.",
    },
  ],
  15: [
    {
      text: "Hầu hết thêm -s.",
      example: "He plays football. / She studies English.",
      exampleVi: "Anh ấy chơi bóng đá. / Cô ấy học tiếng Anh.",
    },
    {
      text: "Tận o, ch, sh, s, x thêm -es: go → goes, watch → watches.",
      example: "He goes to school. / She watches TV.",
      exampleVi: "Anh ấy đi học. / Cô ấy xem TV.",
    },
    {
      text: "Phụ âm + y thành -ies: study → studies.",
      example: "She studies math.",
      exampleVi: "Cô ấy học toán.",
    },
    {
      text: "play → plays.",
      example: "Minh plays football every Sunday.",
      exampleVi: "Minh chơi bóng đá mỗi Chủ nhật.",
    },
  ],
  16: [
    {
      text: "Do + I/you/we/they.",
      example: "Do you like music?",
      exampleVi: "Bạn có thích nhạc không?",
    },
    {
      text: "Does + he/she/it.",
      example: "Does he play football?",
      exampleVi: "Anh ấy có chơi bóng đá không?",
    },
    {
      text: "Sau Does, động từ bỏ -s: Does he play.",
      example: "Does she study English?",
      exampleVi: "Cô ấy có học tiếng Anh không? (không Does she studies)",
    },
    {
      text: "Trả lời ngắn nhắc lại Do/Does, không nhắc động từ chính.",
      example: "Do you like rice? — Yes, I do.",
      exampleVi: "Bạn có thích cơm không? — Có, tôi thích.",
    },
  ],
  17: [
    {
      text: "Trả lời không được mỗi một từ.",
      example: "Where do you live? — I live in Hanoi.",
      exampleVi: "Bạn sống ở đâu? — Tôi sống ở Hà Nội.",
    },
    {
      text: "What cái gì, Where ở đâu, When khi nào, Who ai, Why tại sao, Because bởi vì.",
      example: "Why are you late? — Because I miss the bus.",
      exampleVi: "Tại sao bạn đến muộn? — Vì tôi lỡ xe buýt.",
    },
  ],
  18: [
    {
      text: "in + thành phố hoặc nhà.",
      example: "I live in Hanoi. / He is in the house.",
      exampleVi: "Tôi sống ở Hà Nội. / Anh ấy ở trong nhà.",
    },
    {
      text: "near + địa điểm.",
      example: "I live near the school.",
      exampleVi: "Tôi sống gần trường.",
    },
    {
      text: "far from + địa điểm.",
      example: "My house is far from the city.",
      exampleVi: "Nhà tôi xa thành phố.",
    },
  ],
  19: [
    {
      text: "There is + một vật.",
      example: "There is a book on the desk.",
      exampleVi: "Có một quyển sách trên bàn.",
    },
    {
      text: "There are + nhiều vật.",
      example: "There are two windows in my room.",
      exampleVi: "Có hai cửa sổ trong phòng tôi.",
    },
    {
      text: "This is a book = đây là quyển sách.",
      example: "This is my book.",
      exampleVi: "Đây là sách của tôi.",
    },
    {
      text: "There is a book = có một quyển sách.",
      example: "There is a book in my bag.",
      exampleVi: "Có một quyển sách trong túi tôi.",
    },
  ],
  20: [
    {
      text: "on = trên bề mặt.",
      example: "The book is on the desk.",
      exampleVi: "Quyển sách ở trên bàn.",
    },
    {
      text: "in = bên trong.",
      example: "The pen is in the bag.",
      exampleVi: "Cây bút ở trong túi.",
    },
    {
      text: "under = bên dưới.",
      example: "The cat is under the chair.",
      exampleVi: "Con mèo ở dưới ghế.",
    },
    {
      text: "next to = bên cạnh.",
      example: "The school is next to my house.",
      exampleVi: "Trường ở cạnh nhà tôi.",
    },
    {
      text: "behind = đằng sau.",
      example: "The tree is behind the house.",
      exampleVi: "Cây ở sau nhà.",
    },
    {
      text: "at vẫn dành cho giờ.",
      example: "I get up at six.",
      exampleVi: "Tôi dậy lúc sáu giờ.",
    },
  ],
  21: [
    {
      text: "Khoanh câu sai và viết lại câu đúng bên dưới.",
      example: "Sai: She have a sister. → She has a sister.",
      exampleVi: "Sai: She have a sister. → She has a sister. (Cô ấy có một chị/em gái.)",
    },
    {
      text: "Đây là cách chữa sẽ dùng khi luyện đề.",
      example: "Luyện tập chữa bài mỗi ngày sau bài tập.",
    },
  ],
  22: [
    {
      text: "Sau can và can't là động từ nguyên mẫu: He can swim. He can't cook.",
      example: "I can swim. / I can't speak English well.",
      exampleVi: "Tôi biết bơi. / Tôi không nói tiếng Anh giỏi.",
    },
    {
      text: "Không thêm -s, không thêm to.",
      example: "He can play football.",
      exampleVi: "Anh ấy biết chơi bóng đá. (không He can plays / can to play)",
    },
  ],
  23: [
    {
      text: "Tính từ đứng sau am/is/are: He is tall. The bag is new. I am tired.",
      example: "She is happy. / My room is small.",
      exampleVi: "Cô ấy vui. / Phòng tôi nhỏ.",
    },
  ],
  24: [
    {
      text: "Thêm -s.",
      example: "two books, three pens",
      exampleVi: "hai quyển sách, ba cây bút",
    },
    {
      text: "Tận s, x, ch, sh thêm -es.",
      example: "two boxes, three watches",
      exampleVi: "hai hộp, ba đồng hồ",
    },
    {
      text: "Phụ âm + y thành -ies.",
      example: "two babies, three cities",
      exampleVi: "hai em bé, ba thành phố",
    },
    {
      text: "Học thuộc: man/men, woman/women, child/children, person/people.",
      example: "one man → two men / one child → two children",
      exampleVi: "một người đàn ông → hai người đàn ông / một em bé → hai em bé",
    },
    {
      text: "people đã là số nhiều.",
      example: "Many people are in the park.",
      exampleVi: "Nhiều người ở trong công viên.",
    },
  ],
  25: [
    {
      text: "some trong câu có.",
      example: "I have some rice. / There is some milk.",
      exampleVi: "Tôi có chút cơm. / Có chút sữa.",
    },
    {
      text: "any trong câu hỏi và câu không.",
      example: "Do you have any eggs? / I don't have any bread.",
      exampleVi: "Bạn có trứng không? / Tôi không có bánh mì.",
    },
    {
      text: "rice, milk, water, bread không thêm -s và không dùng a/an.",
      example: "I like rice.",
      exampleVi: "Tôi thích cơm. (không a rice / rices)",
    },
  ],
  26: [
    {
      text: "Viết hoa tên thứ.",
      example: "Monday, Tuesday, Wednesday…",
      exampleVi: "Thứ Hai, Thứ Ba, Thứ Tư…",
    },
    {
      text: "on + thứ.",
      example: "I study English on Monday.",
      exampleVi: "Tôi học tiếng Anh vào thứ Hai.",
    },
    {
      text: "in the evening vẫn dùng in, không dùng on.",
      example: "I do homework in the evening.",
      exampleVi: "Tôi làm bài tập vào buổi tối.",
    },
    {
      text: "yesterday = hôm qua, tháng này chỉ nhận nghĩa, chưa kể chuyện quá khứ.",
      example: "I went to school yesterday.",
      exampleVi: "Tôi đã đi học hôm qua. (chưa học cấu trúc)",
    },
  ],
  27: [
    {
      text: "Đọc to một lần, đọc thầm một lần, gạch từ đã biết, rồi mới trả lời.",
      example: "Đọc đoạn → gạch school, teacher → trả lời câu hỏi.",
    },
    {
      text: "Trả lời có chủ ngữ và động từ.",
      example: "Where does Minh live? — He lives near his school.",
      exampleVi: "Minh sống ở đâu? — Anh ấy sống gần trường.",
    },
  ],
  28: [
    {
      text: "Trước chỗ trống có a/the thì thường cần danh từ chỉ người: student, player, teacher, singer.",
      example: "He is a ___ → student",
      exampleVi: "Anh ấy là một ___ → học sinh",
    },
    {
      text: "Chỗ trống là hành động của he/she thì cần động từ thêm -s: studies, plays, teaches, sings.",
      example: "She ___ English. → teaches",
      exampleVi: "Cô ấy ___ tiếng Anh. → dạy",
    },
  ],
  29: [
    {
      text: "Vỗ tay vào âm tiết in hoa.",
      example: "TEAcher → vỗ tay vào TEA",
      exampleVi: "giáo viên → vỗ tay vào TEA",
    },
    {
      text: "Đuôi -s: sau p, t, k, f đọc /s/ (books, cats).",
      example: "books /buks/, cats /kæts/",
      exampleVi: "sách, mèo (phát âm /s/)",
    },
    {
      text: "Sau âm hữu thanh đọc /z/ (dogs, pens).",
      example: "dogs /dɒgz/, pens /penz/",
      exampleVi: "chó, bút (phát âm /z/)",
    },
    {
      text: "Sau s, ch, sh, x đọc thêm âm /iz/ (watches, boxes).",
      example: "watches /ˈwɒtʃɪz/",
      exampleVi: "đồng hồ (phát âm /iz/)",
    },
  ],
  30: [
    { text: "Không mở vở.", example: "Gấp vở trước khi làm bài kiểm tra." },
    {
      text: "Chữa vào hôm sau, 10 phút, trước khi học quá khứ đơn.",
      example: "Sáng hôm sau: chữa bài 10 phút rồi mới học bài mới.",
    },
    { text: "Phụ huynh đối đáp án.", example: "Bố/mẹ đối đáp án phần A và B." },
    {
      text: "Câu viết chấm đúng cấu trúc.",
      example: "I am fifteen years old.",
      exampleVi: "Tôi mười lăm tuổi. → đúng cấu trúc = 1 điểm.",
    },
  ],
};

export function getRulesForDay(day: number, fallbackRule: string): RuleItem[] {
  const rules = DAY_RULES[day];
  if (rules) return rules;

  return splitRuleSegments(fallbackRule).map((text) => ({
    text,
    example: "—",
  }));
}
