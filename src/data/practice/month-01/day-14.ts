import { getRulesForDay } from "@/data/curriculum/month-01/day-rules";
import { createPracticeMeta } from "@/data/practice/shared";
import type { PracticeLesson, QuizQuestion } from "@/types/practice";

function choice(
  id: string,
  prompt: string,
  correct: string,
  wrong: [string, string],
  explanation: string,
  section: QuizQuestion["section"],
  extra?: Partial<QuizQuestion>,
): QuizQuestion {
  return {
    id,
    prompt,
    explanation,
    section,
    correctOptionId: `${id}-a`,
    options: [
      { id: `${id}-a`, label: correct },
      { id: `${id}-b`, label: wrong[0] },
      { id: `${id}-c`, label: wrong[1] },
    ],
    ...extra,
  };
}

const questions: QuizQuestion[] = [
  choice("g1", 'It is ___ book.', 'a', ['an', 'the'], 'book bắt đầu bằng phụ âm, dùng a.', "grammar"),
  choice("g2", 'It is ___ apple.', 'an', ['a', 'are'], 'apple bắt đầu bằng nguyên âm, dùng an.', "grammar"),
  choice("g3", 'It is ___ egg.', 'an', ['a', 'are'], 'egg bắt đầu bằng nguyên âm, dùng an.', "grammar"),
  choice("g4", 'She is ___ student.', 'a', ['an', 'are'], 'student dùng a.', "grammar"),
  choice("g5", '___ book is here. (quyển ấy)', 'The', ['A', 'An'], 'Đã biết quyển nào thì dùng The.', "grammar"),
  choice("g6", 'I like ___. (nói chung)', 'music', ['the music', 'a music'], 'Nói chung không dùng the.', "grammar"),
  choice("g7", 'Một quyển sách, nhiều là…', 'books', ['book', 'a books'], 'Thêm -s: books.', "grammar"),
  choice("g8", 'Một học sinh, nhiều là…', 'students', ['student', 'studentes'], 'Thêm -s: students.', "grammar"),
  choice("g9", 'Gần, một vật:', 'This', ['These', 'Those'], 'This là một vật ở gần.', "grammar"),
  choice("g10", 'Xa, một vật:', 'That', ['Those', 'These'], 'That là một vật ở xa.', "grammar"),
  choice("g11", 'Gần, nhiều vật:', 'These', ['This', 'That'], 'These đi với nhiều vật ở gần.', "grammar"),
  choice("g12", 'Xa, nhiều vật:', 'Those', ['This', 'That'], 'Those đi với nhiều vật ở xa.', "grammar"),
  choice("g13", 'This ___ a pen.', 'is', ['are', 'am'], 'Một vật dùng is.', "grammar"),
  choice("g14", 'Those ___ books.', 'are', ['is', 'am'], 'Nhiều vật dùng are.', "grammar"),
  choice("g15", 'student là…', 'học sinh', ['trường', 'sách'], 'student là người đi học.', "grammar"),
  choice("g16", 'school là…', 'trường', ['bút', 'sách'], 'school là nơi.', "grammar"),
  choice("g17", 'book là…', 'sách', ['học sinh', 'trường'], 'book là vật.', "grammar"),
  choice("g18", 'They ___ students.', 'are', ['is', 'am'], 'They đi với are.', "grammar"),
  choice("g19", 'It ___ a bag.', 'is', ['are', 'am'], 'It đi với is.', "grammar"),
  choice("g20", 'We are at ___.', 'school', ['a', 'an'], 'school là trường.', "grammar"),
  choice("l1", 'Bạn nghe thấy câu nào?', 'This is a book.', ['These is a book.', 'This are a book.'], 'Câu nghe là This is a book.', "listen", { listenText: 'This is a book.' }),
  choice("l2", 'Bạn nghe thấy câu nào?', 'It is an apple.', ['It is a apple.', 'It are an apple.'], 'an apple.', "listen", { listenText: 'It is an apple.' }),
  choice("l3", 'Bạn nghe thấy câu nào?', 'The book is here.', ['A book is here?', 'Book are here.'], 'The book is here.', "listen", { listenText: 'The book is here.' }),
  choice("l4", 'Bạn nghe thấy câu nào?', 'These are pens.', ['This are pens.', 'These is pens.'], 'These are pens.', "listen", { listenText: 'These are pens.' }),
  choice("l5", 'Bạn nghe thấy câu nào?', 'They are students.', ['They is students.', 'They am students.'], 'They are students.', "listen", { listenText: 'They are students.' }),
  choice("r1", 'This is a…', 'book', ['pen', 'bag'], 'Câu đầu: This is a book.', "reading", { passageId: "p1" }),
  choice("r2", 'That is a…', 'pen', ['book', 'apple'], 'Câu: That is a pen.', "reading", { passageId: "p1" }),
  choice("r3", 'These are…', 'bags', ['bag', 'book'], 'Câu: These are bags.', "reading", { passageId: "p1" }),
  choice("r4", 'It is an…', 'apple', ['book', 'pen'], 'Câu: It is an apple.', "reading", { passageId: "p1" }),
  choice("r5", 'They are…', 'students', ['student', 'teacher'], 'Câu: They are students.', "reading", { passageId: "p1" }),
];

export const practiceDay14: PracticeLesson = {
  meta: { ...createPracticeMeta(14, 'Kiểm tra tuần 2'), totalScreens: 1 },
  hints: {
    rules: getRulesForDay(14, ""),
    vocabulary: [
      { en: "book", vi: "sách" },
      { en: "apple", vi: "táo" },
      { en: "pen", vi: "bút" },
      { en: "student", vi: "học sinh" },
      { en: "bag", vi: "cặp" },
    ],
  },
  screens: [
    {
      type: "quiz",
      title: 'Kiểm tra tuần 2' + "\nKiểm tra",
      instruction: '30 questions. 30 minutes. 6/10 is a pass.\n30 câu, 30 phút. Đạt từ 6/10.',
      passScore: 18,
      timeLimitSeconds: 30 * 60,
      passages: [
        { id: "p1", title: "Đoạn đọc", text: 'This is a book. That is a pen. These are bags. It is an apple. The book is here. They are students.' },
      ],
      questions,
    },
  ],
};
