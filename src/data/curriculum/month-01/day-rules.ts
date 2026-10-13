import type { RuleItem } from "@/types/lesson";
import { splitRuleSegments } from "@/lib/format-rule";

export const DAY_RULES: Record<number, RuleItem[]> = {
  1: [
    {
      text: "I = tôi · You = bạn · He = anh ấy · She = cô ấy · It = vật hoặc con vật · We = chúng tôi · They = họ.",
      example: "I",
      exampleVi: "tôi",
    },
    {
      text: "Nhận ra I, you, he, she, it, we, they đứng đầu câu.",
      example: "You",
      exampleVi: "bạn",
    },
  ],
  2: [
    {
      text: "I + am.\nHe / She / It + is.\nYou / We / They + are.",
      example: "I am a student.",
      exampleVi: "Tôi là học sinh.",
    },
    {
      text: "Chọn đúng am, is hoặc are sau đại từ.",
      example: "You are my friend.",
      exampleVi: "Bạn là bạn tôi.",
    },
  ],
  3: [
    {
      text: "I am + …\nHe / She / It is + …\nYou / We / They are + …",
      example: "I am Nam.",
      exampleVi: "Tôi là Nam.",
    },
    {
      text: "Viết câu khẳng định: đại từ + am/is/are + từ còn lại.",
      example: "I am fifteen.",
      exampleVi: "Tôi 15 tuổi.",
    },
  ],
  4: [
    {
      text: "I am not.\nHe / She / It is not (isn't).\nYou / We / They are not (aren't).",
      example: "I am not sad.",
      exampleVi: "Tôi không buồn.",
    },
    {
      text: "Thêm not sau am, is, are.",
      example: "He is not busy.",
      exampleVi: "Anh ấy không bận.",
    },
  ],
  5: [
    {
      text: "Are you …? — Yes, I am. / No, I'm not.\nIs he / she / it …? — Yes, he is. / No, he isn't.\nAre we / they …? — Yes, they are. / No, they aren't.",
      example: "Are you a student?",
      exampleVi: "Bạn là học sinh phải không?",
    },
    {
      text: "Đảo am/is/are lên trước chủ ngữ. Trả lời ngắn Yes hoặc No.",
      example: "Yes, I am.",
      exampleVi: "Vâng, tôi là.",
    },
  ],
  6: [
    {
      text: "I am + tên. I am fifteen years old. I am a student.",
      example: "I am Nam.",
      exampleVi: "Tôi là Nam.",
    },
    {
      text: "Nói tên, tuổi và mình là học sinh bằng câu đơn giản.",
      example: "I am fifteen years old.",
      exampleVi: "Tôi 15 tuổi.",
    },
  ],
  7: [
    {
      text: "Ôn I am / You are / He is / We are / They are, phủ định not, câu hỏi đảo am/is/are.",
      example: "I am a student.",
      exampleVi: "Tôi là học sinh.",
    },
    {
      text: "Kiểm tra đại từ và to be. Không học từ mới.",
      example: "Are you happy?",
      exampleVi: "Bạn vui phải không?",
    },
  ],
  8: [
    {
      text: "Danh từ không phải hành động. student là người, book là vật, school là nơi.",
      example: "I am a student.",
      exampleVi: "Tôi là học sinh.",
    },
    {
      text: "Biết danh từ là tên người, vật hoặc nơi.",
      example: "She is a teacher.",
      exampleVi: "Cô ấy là giáo viên.",
    },
  ],
  9: [
    {
      text: "Một vật: a book.\nNhiều vật: books.\nstudent → students.",
      example: "It is a book.",
      exampleVi: "Nó là một quyển sách.",
    },
    {
      text: "Đổi danh từ số ít sang số nhiều bằng -s.",
      example: "They are books.",
      exampleVi: "Chúng là những quyển sách.",
    },
  ],
  10: [
    {
      text: "a book, a pen, a student. an apple, an egg.",
      example: "It is a book.",
      exampleVi: "Nó là một quyển sách.",
    },
    {
      text: "a trước phụ âm, an trước nguyên âm a, e, i, o, u.",
      example: "It is a pen.",
      exampleVi: "Nó là một cây bút.",
    },
  ],
  11: [
    {
      text: "The book = quyển sách ấy. I like music = nói chung, không dùng the.",
      example: "The book is here.",
      exampleVi: "Quyển sách ở đây.",
    },
    {
      text: "the khi người nghe đã biết vật đó. Không mạo từ khi nói chung.",
      example: "She is the teacher.",
      exampleVi: "Cô ấy là giáo viên đó.",
    },
  ],
  12: [
    {
      text: "This/these = gần. That/those = xa.",
      example: "This is a book.",
      exampleVi: "Đây là một quyển sách.",
    },
    {
      text: "this/that cho một vật. these/those cho nhiều vật.",
      example: "That is a pen.",
      exampleVi: "Kia là một cây bút.",
    },
  ],
  13: [
    {
      text: "It is a book. They are books. These are students.",
      example: "It is a book.",
      exampleVi: "Nó là một quyển sách.",
    },
    {
      text: "Ghép danh từ, số nhiều và to be trong cùng một câu.",
      example: "They are books.",
      exampleVi: "Chúng là sách.",
    },
  ],
  14: [
    {
      text: "Ôn a/an/the, số nhiều, this/that/these/those và to be.",
      example: "It is an apple.",
      exampleVi: "Nó là một quả táo.",
    },
    {
      text: "Kiểm tra danh từ và mạo từ. Không học từ mới.",
      example: "The book is here.",
      exampleVi: "Quyển sách ở đây.",
    },
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
