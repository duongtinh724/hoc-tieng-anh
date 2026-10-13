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
  choice("g1", 'I ___ English.', 'study', ['studies', 'am'], 'I + động từ, chưa thêm -s.', "grammar"),
  choice("g2", 'They ___ football.', 'play', ['plays', 'is'], 'They + động từ nguyên mẫu.', "grammar"),
  choice("g3", 'We ___ books.', 'read', ['reads', 'are'], 'We + read.', "grammar"),
  choice("g4", 'I like ___.', 'music', ['like', 'go'], 'music là tân ngữ.', "grammar"),
  choice("g5", 'We study ___.', 'English', ['study', 'are'], 'English là môn học.', "grammar"),
  choice("g6", 'I ___ a book.', 'have', ['has', 'is'], 'I đi với have.', "grammar"),
  choice("g7", 'She ___ a pen.', 'has', ['have', 'are'], 'She đi với has.', "grammar"),
  choice("g8", 'They ___ friends.', 'have', ['has', 'is'], 'They đi với have.', "grammar"),
  choice("g9", 'There ___ a book.', 'is', ['are', 'am'], 'Một vật: There is.', "grammar"),
  choice("g10", 'There ___ pens.', 'are', ['is', 'am'], 'Nhiều vật: There are.', "grammar"),
  choice("g11", 'This is ___ book.', 'my', ['I', 'me'], 'Tính từ sở hữu my đứng trước danh từ.', "grammar"),
  choice("g12", 'That is ___ pen.', 'your', ['you', 'are'], 'your = của bạn.', "grammar"),
  choice("g13", 'a ___ house (to)', 'big', ['school', 'go'], 'big là tính từ.', "grammar"),
  choice("g14", 'He is my ___.', 'father', ['have', 'are'], 'father là bố.', "grammar"),
  choice("g15", 'She is my ___.', 'mother', ['has', 'is'], 'mother là mẹ.', "grammar"),
  choice("g16", 'I study at ___.', 'school', ['music', 'happy'], 'school là nơi.', "grammar"),
  choice("g17", 'I eat ___.', 'rice', ['read', 'go'], 'rice là cơm.', "grammar"),
  choice("g18", 'You drink ___.', 'water', ['play', 'am'], 'water là nước.', "grammar"),
  choice("g19", 'There is a ___.', 'house', ['are', 'have'], 'house là nhà.', "grammar"),
  choice("g20", 'We ___ happy.', 'are', ['is', 'have'], 'We are.', "grammar"),
  choice("l1", 'Bạn nghe thấy câu nào?', 'I study English.', ['I studies English.', 'She study English.'], 'I study English.', "listen", { listenText: 'I study English.' }),
  choice("l2", 'Bạn nghe thấy câu nào?', 'She has a book.', ['She have a book.', 'I has a book.'], 'She has a book.', "listen", { listenText: 'She has a book.' }),
  choice("l3", 'Bạn nghe thấy câu nào?', 'There are pens.', ['There is pens.', 'There am pens.'], 'There are pens.', "listen", { listenText: 'There are pens.' }),
  choice("l4", 'Bạn nghe thấy câu nào?', 'I like music.', ['I likes music.', 'She like music.'], 'I like music.', "listen", { listenText: 'I like music.' }),
  choice("l5", 'Bạn nghe thấy câu nào?', 'This is my house.', ['This are my house.', 'This is I house.'], 'This is my house.', "listen", { listenText: 'This is my house.' }),
  choice("r1", 'I study…', 'English', ['music', 'rice'], 'Câu: I study English.', "reading", { passageId: "p1" }),
  choice("r2", 'I like…', 'music', ['English', 'school'], 'Câu: I like music.', "reading", { passageId: "p1" }),
  choice("r3", 'She has a…', 'book', ['books', 'pen'], 'Câu: She has a book.', "reading", { passageId: "p1" }),
  choice("r4", 'There is a…', 'house', ['pens', 'students'], 'Câu: There is a house.', "reading", { passageId: "p1" }),
  choice("r5", 'This is my…', 'school', ['father', 'music'], 'Câu: This is my school.', "reading", { passageId: "p1" }),
];

export const practiceDay21: PracticeLesson = {
  meta: { ...createPracticeMeta(21, 'Kiểm tra tuần 3'), totalScreens: 1 },
  hints: {
    rules: getRulesForDay(21, ""),
    vocabulary: [
      { en: "study", vi: "học" },
      { en: "music", vi: "nhạc" },
      { en: "book", vi: "sách" },
      { en: "house", vi: "nhà" },
      { en: "family", vi: "gia đình" },
    ],
  },
  screens: [
    {
      type: "quiz",
      title: 'Kiểm tra tuần 3' + "\nKiểm tra",
      instruction: '30 questions. 30 minutes. 6/10 is a pass.\n30 câu, 30 phút. Đạt từ 6/10.',
      passScore: 18,
      timeLimitSeconds: 30 * 60,
      passages: [
        { id: "p1", title: "Đoạn đọc", text: 'I study English. I like music. She has a book. There is a house. This is my school. We are happy.' },
      ],
      questions,
    },
  ],
};
