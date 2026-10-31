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
  choice("g1", 'I ___ a student.', 'am', ['is', 'are'], 'I đi với am.', "grammar"),
  choice("g2", 'It is ___ book.', 'a', ['an', 'are'], 'book dùng a.', "grammar"),
  choice("g3", 'It is ___ apple.', 'an', ['a', 'the'], 'apple dùng an.', "grammar"),
  choice("g4", '___ is the book?', 'Where', ['What', 'Who'], 'Hỏi ở đâu dùng Where.', "grammar"),
  choice("g5", '___ is she?', 'Who', ['Where', 'When'], 'Hỏi ai dùng Who.', "grammar"),
  choice("g6", '___ is this?', 'What', ['Who', 'Where'], 'Hỏi cái gì dùng What.', "grammar"),
  choice("g7", 'I study ___ the morning.', 'in', ['on', 'at'], 'Buổi trong ngày dùng in.', "grammar"),
  choice("g8", 'Class is ___ Monday.', 'on', ['in', 'at'], 'Thứ trong tuần dùng on.', "grammar"),
  choice("g9", 'School is ___ 7.', 'at', ['in', 'on'], 'Giờ dùng at.', "grammar"),
  choice("g10", 'The pen is ___ the bag.', 'in', ['on', 'at'], 'Trong cặp dùng in.', "grammar"),
  choice("g11", 'She ___ a pen.', 'has', ['have', 'is'], 'She đi với has.', "grammar"),
  choice("g12", 'There ___ books.', 'are', ['is', 'am'], 'Nhiều vật: There are.', "grammar"),
  choice("g13", 'These ___ bags.', 'are', ['is', 'am'], 'These đi với are.', "grammar"),
  choice("g14", 'This ___ a book.', 'is', ['are', 'am'], 'This đi với is.', "grammar"),
  choice("g15", 'Are you a student? Yes, I ___.', 'am', ['are', 'is'], 'Trả lời ngắn với I là am.', "grammar"),
  choice("g16", 'I am ___ tired.', 'not', ["isn't", "aren't"], 'I am not.', "grammar"),
  choice("g17", 'They ___ football.', 'play', ['plays', 'is'], 'They không thêm -s.', "grammar"),
  choice("g18", 'I ___ music.', 'like', ['likes', 'are'], 'I không thêm -s: I like.', "grammar"),
  choice("g19", 'This is ___ book.', 'my', ['I', 'me'], 'my đứng trước danh từ.', "grammar"),
  choice("g20", '___ are you?', 'How', ['Where', 'What'], 'How are you? hỏi sức khỏe.', "grammar"),
  choice("g21", 'He ___ to school.', 'goes', ['go', 'going'], 'He thêm -s: goes.', "grammar"),
  choice("g22", 'I ___ English every day.', 'study', ['studies', 'studying'], 'I không thêm -s.', "grammar"),
  choice("g23", 'The book is ___ the table.', 'on', ['in', 'at'], 'Trên bàn dùng on.', "grammar"),
  choice("g24", 'Class is ___ Monday.', 'on', ['in', 'at'], 'Thứ trong tuần dùng on.', "grammar"),
  choice("g25", '___ is your name?', 'What', ['Who', 'Where'], 'Hỏi tên dùng What.', "grammar"),
  choice("g26", 'They ___ students.', "aren't", ["isn't", "am not"], "They dùng aren't.", "grammar"),
  choice("g27", 'There ___ a bag.', 'is', ['are', 'am'], 'Một vật: There is.', "grammar"),
  choice("g28", 'Does she like music? Yes, she ___.', 'does', ['do', 'is'], 'Does she…? trả lời she does.', "grammar"),
  choice("g29", 'I get up ___ 6 a.m.', 'at', ['in', 'on'], 'Giờ dùng at.', "grammar"),
  choice("g30", 'This is ___ pen.', 'my', ['I', 'me'], 'my đứng trước danh từ.', "grammar"),
  choice("l1", 'Bạn nghe thấy câu nào?', 'I am a student.', ['I are a student.', 'I is a student.'], 'I am a student.', "listen", { listenText: 'I am a student.' }),
  choice("l2", 'Bạn nghe thấy câu nào?', 'Where is the school?', ['Where are the school?', 'What is the school?'], 'Where is the school?', "listen", { listenText: 'Where is the school?' }),
  choice("l3", 'Bạn nghe thấy câu nào?', 'I study in the morning.', ['I study on the morning.', 'I study at the morning.'], 'in the morning.', "listen", { listenText: 'I study in the morning.' }),
  choice("l4", 'Bạn nghe thấy câu nào?', 'She has a pen.', ['She have a pen.', 'She is a pen.'], 'She has a pen.', "listen", { listenText: 'She has a pen.' }),
  choice("l5", 'Bạn nghe thấy câu nào?', 'There is a book.', ['There are a book.', 'There am a book.'], 'There is a book.', "listen", { listenText: 'There is a book.' }),
  choice("r1", 'Nam is a…', 'student', ['teacher', 'book'], 'I am a student.', "reading", { passageId: "p1" }),
  choice("r2", 'He studies at…', 'school', ['home', 'book'], 'I study at school.', "reading", { passageId: "p1" }),
  choice("r3", 'He studies in the…', 'morning', ['Monday', 'bag'], 'in the morning.', "reading", { passageId: "p1" }),
  choice("r4", 'There is a…', 'book', ['books', 'pens'], 'There is a book.', "reading", { passageId: "p1" }),
  choice("r5", 'She has a…', 'pen', ['book', 'school'], 'She has a pen.', "reading", { passageId: "p1" }),
];

export const practiceDay28: PracticeLesson = {
  meta: { ...createPracticeMeta(28, 'Kiểm tra nền tảng'), totalScreens: 1 },
  hints: {
    rules: getRulesForDay(28, ""),
    vocabulary: [
      { en: "student", vi: "học sinh" },
      { en: "book", vi: "sách" },
      { en: "school", vi: "trường" },
      { en: "morning", vi: "buổi sáng" },
      { en: "family", vi: "gia đình" },
    ],
  },
  screens: [
    {
      type: "quiz",
      title: 'Kiểm tra nền tảng' + "\nKiểm tra",
      instruction: '40 questions. 30 minutes. 24 correct answers is a pass.\n40 câu, 30 phút. Đúng từ 24 câu là đạt.',
      passScore: 24,
      timeLimitSeconds: 30 * 60,
      passages: [
        { id: "p1", title: "Đoạn đọc", text: 'I am Nam. I am a student. I study at school in the morning. There is a book. Where is the school? She has a pen.' },
      ],
      questions,
    },
  ],
};
