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
  choice("g1", 'I ___ Nam.', 'am', ['is', 'are'], 'I đi với am.', "grammar"),
  choice("g2", 'You ___ my friend.', 'are', ['am', 'is'], 'You đi với are.', "grammar"),
  choice("g3", 'He ___ a student.', 'is', ['am', 'are'], 'He đi với is.', "grammar"),
  choice("g4", 'She ___ a teacher.', 'is', ['are', 'am'], 'She đi với is.', "grammar"),
  choice("g5", 'It ___ a book.', 'is', ['are', 'am'], 'Vật dùng It is.', "grammar"),
  choice("g6", 'We ___ students.', 'are', ['is', 'am'], 'We đi với are.', "grammar"),
  choice("g7", 'They ___ happy.', 'are', ['is', 'am'], 'They đi với are.', "grammar"),
  choice("g8", 'I am ___ sad.', 'not', ["isn't", "aren't"], "I am not. isn't dùng với he/she/it.", "grammar"),
  choice("g9", 'She ___ tired.', "isn't", ["aren't", 'am not'], "She is not viết tắt isn't.", "grammar"),
  choice("g10", 'They ___ here.', "aren't", ["isn't", 'am not'], "They are not viết tắt aren't.", "grammar"),
  choice("g11", '___ you a student?', 'Are', ['Is', 'Am'], 'You đảo Are lên đầu.', "grammar"),
  choice("g12", '___ she happy?', 'Is', ['Are', 'Am'], 'She đảo Is lên đầu.', "grammar"),
  choice("g13", 'Yes, I ___.', 'am', ['are', 'is'], 'Are you...? trả lời Yes, I am.', "grammar"),
  choice("g14", 'No, he ___.', "isn't", ["aren't", 'am not'], "Is he...? trả lời No, he isn't.", "grammar"),
  choice("g15", 'Một bạn trai là…', 'He', ['She', 'They'], 'Một bạn trai dùng He.', "grammar"),
  choice("g16", 'Một vật là…', 'It', ['We', 'They'], 'Vật dùng It.', "grammar"),
  choice("g17", 'Nhiều người là…', 'They', ['He', 'She'], 'Nhiều người dùng They.', "grammar"),
  choice("g18", 'Tôi là…', 'I', ['You', 'It'], 'Tôi là I.', "grammar"),
  choice("g19", 'I am a ___.', 'student', ['are', 'is'], 'student là học sinh.', "grammar"),
  choice("g20", 'She is a ___.', 'teacher', ['am', 'are'], 'teacher là giáo viên.', "grammar"),
  choice("l1", 'Bạn nghe thấy câu nào?', 'I am Nam.', ['I am not Nam.', 'You are Nam.'], 'Câu nghe là I am Nam.', "listen", { listenText: 'I am Nam.' }),
  choice("l2", 'Bạn nghe thấy câu nào?', 'She is a teacher.', ['She is a student.', 'He is a teacher.'], 'Câu nghe là She is a teacher.', "listen", { listenText: 'She is a teacher.' }),
  choice("l3", 'Bạn nghe thấy câu nào?', 'Are you a student?', ['Is you a student?', 'Are she a student?'], 'Câu nghe là Are you a student?', "listen", { listenText: 'Are you a student?' }),
  choice("l4", 'Bạn nghe thấy câu nào?', 'They are happy.', ['They is happy.', 'They am happy.'], 'Câu nghe là They are happy.', "listen", { listenText: 'They are happy.' }),
  choice("l5", 'Bạn nghe thấy câu nào?', 'I am not sad.', ['I am sad.', 'She am not sad.'], 'Câu nghe có not.', "listen", { listenText: 'I am not sad.' }),
  choice("r1", 'Nam is a…', 'student', ['teacher', 'book'], 'Câu: I am a student.', "reading", { passageId: "p1" }),
  choice("r2", 'You are my…', 'friend', ['teacher', 'book'], 'Câu: You are my friend.', "reading", { passageId: "p1" }),
  choice("r3", 'She is a…', 'teacher', ['student', 'friend'], 'Câu: She is a teacher.', "reading", { passageId: "p1" }),
  choice("r4", 'They are…', 'happy', ['sad', 'tired'], 'Câu: They are happy.', "reading", { passageId: "p1" }),
  choice("r5", 'Nam is not…', 'sad', ['a student', 'Nam'], 'Câu: I am not sad.', "reading", { passageId: "p1" }),
];

export const practiceDay07: PracticeLesson = {
  meta: { ...createPracticeMeta(7, 'Kiểm tra tuần 1'), totalScreens: 1 },
  hints: {
    rules: getRulesForDay(7, ""),
    vocabulary: [
      { en: "student", vi: "học sinh" },
      { en: "teacher", vi: "giáo viên" },
      { en: "happy", vi: "vui" },
      { en: "tired", vi: "mệt" },
      { en: "friend", vi: "bạn" },
    ],
  },
  screens: [
    {
      type: "quiz",
      title: 'Kiểm tra tuần 1' + "\nKiểm tra",
      instruction: '30 questions. 30 minutes. 6/10 is a pass.\n30 câu, 30 phút. Đạt từ 6/10.',
      passScore: 18,
      timeLimitSeconds: 30 * 60,
      passages: [
        { id: "p1", title: "Đoạn đọc", text: 'I am Nam. I am a student. You are my friend. She is a teacher. They are happy. I am not sad.' },
      ],
      questions,
    },
  ],
};
