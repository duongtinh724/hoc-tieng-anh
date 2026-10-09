import type { RuleItem } from "@/types/lesson";
import { splitRuleSegments } from "@/lib/format-rule";

export const DAY_RULES: Record<number, RuleItem[]> = {
  1: [
    {
      text: "S (chủ ngữ) = người hoặc vật làm việc trong câu. S đứng đầu câu.",
      example: "I study English.",
      exampleVi: "Tôi học tiếng Anh. I là chủ ngữ.",
    },
    {
      text: "I = tôi. You = bạn. Hai từ này là chủ ngữ.",
      example: "You go to school.",
      exampleVi: "Bạn đi học. You là chủ ngữ.",
    },
    {
      text: "He = một bạn trai. She = một bạn gái. It = một vật hoặc con vật.",
      example: "He like music. It — a book.",
      exampleVi: "Anh ấy thích nhạc. Nó là một quyển sách. Chưa thêm -s.",
    },
    {
      text: "We = chúng tôi. They = họ. Dùng khi nói về nhiều người.",
      example: "They play football.",
      exampleVi: "Họ chơi bóng đá. They là chủ ngữ.",
    },
  ],
  2: [
    {
      text: "Noun (danh từ) = tên của người, vật hoặc nơi. Danh từ không phải hành động.",
      example: "student = học sinh, book = sách, school = trường.",
      exampleVi: "student là người, book là vật, school là nơi.",
    },
    {
      text: "Danh từ có thể đứng sau a, hoặc đứng sau động từ.",
      example: "a book. I read a book.",
      exampleVi: "một quyển sách. Tôi đọc sách.",
    },
    {
      text: "a + danh từ đếm được số ít.",
      example: "a pen, a bag, a house",
      exampleVi: "một cây bút, một cái cặp, một ngôi nhà.",
    },
  ],
  3: [
    {
      text: "V (động từ) = hành động hoặc việc ai đó làm.",
      example: "eat = ăn, go = đi, study = học.",
      exampleVi: "I eat breakfast. Tôi ăn sáng. eat là động từ.",
    },
    {
      text: "Câu ngắn: S + V. Chủ ngữ đứng trước, động từ đứng ngay sau.",
      example: "I study. You go to school.",
      exampleVi: "Tôi học. Bạn đi học.",
    },
    {
      text: "Hôm nay chỉ dùng I, You, We, They + động từ, không thêm -s.",
      example: "We play football. They like music.",
      exampleVi: "Chúng tôi chơi bóng. Họ thích nhạc.",
    },
  ],
  4: [
    {
      text: "Adj (tính từ) = từ mô tả danh từ: to, nhỏ, tốt, mới, cũ, vui.",
      example: "big, small, good, new, old, happy",
      exampleVi: "big = to, small = nhỏ, good = tốt.",
    },
    {
      text: "Tính từ đứng ngay trước danh từ: a + tính từ + danh từ.",
      example: "a big house. a good book.",
      exampleVi: "một ngôi nhà lớn. một quyển sách hay.",
    },
    {
      text: "Tính từ không đứng một mình thành câu. Luôn đi kèm danh từ.",
      example: "a small pen. happy students.",
      exampleVi: "một cây bút nhỏ. những học sinh vui.",
    },
  ],
  5: [
    { text: "Cấu trúc S + V.", example: "I study. / We work." },
    { text: "Chủ ngữ + động từ (nguyên mẫu).", example: "Nam studies → chưa học -s, dùng: Nam study (luyện cấu trúc)" },
  ],
  6: [
    { text: "Cấu trúc S + V + O.", example: "I study English.", exampleVi: "Tôi học tiếng Anh." },
    { text: "O = tân ngữ (nhận hành động).", example: "We like music." },
  ],
  7: [
    { text: "Không mở vở khi làm bài.", example: "Gấp vở trước phần A." },
    { text: "Mục tiêu ≥ 12/20 ý.", example: "Dưới 10: học lại ngày 3 và ngày 5." },
  ],
  8: [
    { text: "I → am.", example: "I am Nam.", exampleVi: "Tôi là Nam." },
    { text: "He / She / It → is.", example: "She is a teacher." },
    { text: "You / We / They → are.", example: "They are students." },
  ],
  9: [
    { text: "I am + danh từ/tính từ.", example: "I am a student.", exampleVi: "Tôi là học sinh." },
    { text: "You are + ...", example: "You are my friend." },
  ],
  10: [
    { text: "He is / She is / It is.", example: "He is Nam.", exampleVi: "Anh ấy là Nam." },
    { text: "It is + danh từ.", example: "It is a book.", exampleVi: "Đó là một quyển sách." },
  ],
  11: [
    { text: "We are / They are.", example: "We are students." },
    { text: "They are + danh từ số nhiều.", example: "They are teachers." },
  ],
  12: [
    { text: "Phủ định: am/is/are + not.", example: "I am not tired.", exampleVi: "Tôi không mệt." },
    { text: "Viết tắt: isn't, aren't.", example: "She isn't happy. / They aren't here." },
  ],
  13: [
    { text: "Câu hỏi: Am/Is/Are lên đầu.", example: "Are you a student?", exampleVi: "Bạn là học sinh à?" },
    { text: "Trả lời: Yes, I am. / No, I am not.", example: "Is he Nam? — Yes, he is." },
  ],
  14: [
    { text: "Kiểm tra to be — không mở vở.", example: "≥ 12/16 ý để sang tuần 3." },
    { text: "Sai nhiều → học lại ngày 8 và 12.", example: "Chép lại câu đúng 3 lần." },
  ],
  15: [
    { text: "Số ít → số nhiều thường thêm -s.", example: "book → books, pen → pens" },
    { text: "Bất quy tắc: man → men, child → children.", example: "one child, two children" },
  ],
  16: [
    { text: "a + phụ âm (hoặc âm không phải nguyên âm).", example: "a book, a pen, a house" },
  ],
  17: [
    { text: "an + nguyên âm (a, e, i, o, u).", example: "an apple, an egg, an orange" },
    { text: "an hour (âm câm h).", example: "an hour" },
  ],
  18: [
    { text: "the = đã biết / duy nhất.", example: "Open the door.", exampleVi: "Mở cái cửa." },
    { text: "The book is on the desk.", example: "Quyển sách ở trên bàn." },
  ],
  19: [
    { text: "some = một ít (câu khẳng định).", example: "I have some books." },
    { text: "any = câu hỏi/phủ định.", example: "Do you have any pens? (học kỹ tháng 2)" },
  ],
  20: [
    { text: "This = cái này (gần, số ít).", example: "This is a pen." },
    { text: "That = cái kia (xa, số ít).", example: "That is a house." },
  ],
  21: [
    { text: "These = những cái này (gần, số nhiều).", example: "These are books." },
    { text: "Those = những cái kia (xa, số nhiều).", example: "Those are pens." },
  ],
  22: [
    { text: "What = cái gì.", example: "What is your name?", exampleVi: "Bạn tên là gì?" },
    { text: "What is + danh từ?", example: "What is this? — This is a book." },
  ],
  23: [
    { text: "Where = ở đâu.", example: "Where is the book?", exampleVi: "Sách ở đâu?" },
    { text: "Where is + danh từ?", example: "The book is on the desk." },
  ],
  24: [
    { text: "When = khi nào.", example: "When is your birthday?" },
    { text: "When + to be / (tháng 2: When do you...?)", example: "When is the test?" },
  ],
  25: [
    { text: "Who = ai.", example: "Who is she?", exampleVi: "Cô ấy là ai?" },
    { text: "Who is + danh từ?", example: "She is my teacher." },
  ],
  26: [
    { text: "Why = tại sao.", example: "Why are you sad?" },
    { text: "Trả lời: Because + câu.", example: "Because I am tired." },
  ],
  27: [
    { text: "How are you? = Bạn khỏe không?", example: "I am fine, thank you." },
    { text: "How old are you? = Bao nhiêu tuổi?", example: "I am fifteen years old." },
  ],
  28: [
    { text: "Ôn toàn tháng 1 — không từ mới.", example: "≥ 16/20 ý trước ngày 29–30." },
  ],
  29: [
    { text: "30 câu cố định — luyện đọc, điền, dịch.", example: "≥ 24/30 trước ngày 30." },
    { text: "Where do you live? — học thuộc mẫu câu (giải thích do/does tháng 2).", example: "I live in Bắc Ninh." },
  ],
  30: [
    { text: "Không mở vở.", example: "Gấp vở trước khi làm bài kiểm tra." },
    { text: "Chỉ kiến thức tháng 1 — không -s, không past, không have/has.", example: "≥ 12/20 sang tháng 2." },
    { text: "Dưới 12: ôn ngày 8, 16, 22.", example: "Chữa bài 10 phút sáng hôm sau." },
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
