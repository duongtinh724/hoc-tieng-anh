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
  choice("g1", "Nam is my brother. ___ is 15.", "He", ["She", "It"], "Một người nam dùng He.", "grammar"),
  choice("g2", "Lan is a teacher. ___ is kind.", "She", ["He", "They"], "Một người nữ dùng She.", "grammar"),
  choice("g3", "The book is new. ___ is new.", "It", ["They", "We"], "Đồ vật dùng It.", "grammar"),
  choice("g4", "My parents are at home. ___ are happy.", "They", ["He", "She"], "Nhiều người dùng They.", "grammar"),
  choice("g5", "My friend and I are students. ___ are students.", "We", ["They", "You"], "Tôi và người khác dùng We.", "grammar"),
  choice("g6", "I ___ happy.", "am", ["is", "are"], "I đi với am.", "grammar"),
  choice("g7", "She ___ tired.", "is", ["am", "are"], "She đi với is.", "grammar"),
  choice("g8", "They ___ busy.", "are", ["is", "am"], "They đi với are.", "grammar"),
  choice("g9", "He is a doctor. Đây là câu…", "khẳng định + danh từ", ["phủ định", "câu hỏi"], "He is a doctor nói anh ấy là ai.", "grammar"),
  choice("g10", "We are at home. at home là…", "nơi chốn", ["câu hỏi", "phủ định"], "at home nói ở đâu.", "grammar"),
  choice("g11", "I ___ sad.", "am not", ["isn't", "don't"], "I dùng am not. Không dùng don't với to be.", "grammar"),
  choice("g12", "She ___ busy.", "isn't", ["aren't", "am not"], "She is not viết tắt isn't.", "grammar"),
  choice("g13", "They ___ hungry.", "aren't", ["isn't", "am not"], "They are not viết tắt aren't.", "grammar"),
  choice("g14", "___ you happy?", "Are", ["Is", "Am"], "You đảo Are lên đầu.", "grammar"),
  choice("g15", "Are you a student? (Yes)", "Yes, I am.", ["Yes, you are.", "Yes, I are."], "Are you…? trả lời bằng I.", "grammar"),
  choice("g16", "Is he tired? (No)", "No, he isn't.", ["No, he aren't.", "No, he am not."], "Is he…? trả lời No, he isn't.", "grammar"),
  choice("g17", "My name ___ Nam.", "is", ["am", "are"], "My name đi với is.", "grammar"),
  choice("g18", "I am fifteen years ___.", "old", ["from", "live"], "Tuổi: I am … years old.", "grammar"),
  choice("g19", "I ___ in Hanoi.", "live", ["am live", "lives"], "Nơi ở: I live in …", "grammar"),
  choice("g20", "I am ___ Vietnam.", "from", ["live", "name"], "Quê: I am from …", "grammar"),
  choice("l1", "Bạn nghe thấy câu nào?", "He is a student.", ["She is a student.", "They are a student."], "Câu nghe là He is a student.", "listen", { listenText: "He is a student." }),
  choice("l2", "Bạn nghe thấy câu nào?", "I am not tired.", ["I am tired.", "She am not tired."], "Câu nghe có not.", "listen", { listenText: "I am not tired." }),
  choice("l3", "Bạn nghe thấy câu nào?", "Are you happy?", ["Is you happy?", "Are she happy?"], "Câu nghe là Are you happy?", "listen", { listenText: "Are you happy?" }),
  choice("l4", "Bạn nghe thấy câu nào?", "Yes, I am.", ["Yes, you are.", "Yes, I are."], "Trả lời ngắn dùng I.", "listen", { listenText: "Yes, I am." }),
  choice("l5", "Bạn nghe thấy câu nào?", "My name is Nam.", ["My name am Nam.", "My name are Nam."], "Câu nghe là My name is Nam.", "listen", { listenText: "My name is Nam." }),
  choice("r1", "Nam is a…", "student", ["teacher", "doctor"], "Câu: I am a student.", "reading", { passageId: "p1" }),
  choice("r2", "Nam is from…", "Vietnam", ["Hanoi", "school"], "Câu: I am from Vietnam.", "reading", { passageId: "p1" }),
  choice("r3", "Nam lives in…", "Hanoi", ["Vietnam", "school"], "Câu: I live in Hanoi.", "reading", { passageId: "p1" }),
  choice("r4", "She isn't…", "busy", ["a student", "Nam"], "Câu: She isn't busy.", "reading", { passageId: "p1" }),
  choice("r5", "Are they at home? The answer is…", "Yes, they are.", ["No, they aren't.", "Yes, I am."], "Câu: Yes, they are.", "reading", { passageId: "p1" }),
];

export const practiceDay07: PracticeLesson = {
  meta: { ...createPracticeMeta(7, 'Kiểm tra tuần 1'), totalScreens: 1 },
  hints: {
    rules: getRulesForDay(7, ""),
    vocabulary: [
      { en: "am / is / are", vi: "to be" },
      { en: "isn't / aren't", vi: "phủ định" },
      { en: "yes / no", vi: "trả lời ngắn" },
      { en: "name", vi: "tên" },
      { en: "from", vi: "đến từ" },
    ],
  },
  screens: [
    {
      type: "quiz",
      title: 'Kiểm tra tuần 1' + "\nKiểm tra",
      instruction: "25 questions. 30 minutes. 18 correct answers is a pass.\n25 câu, 30 phút. Đúng từ 18 câu là đạt.",
      passScore: 18,
      timeLimitSeconds: 30 * 60,
      passages: [
        {
          id: "p1",
          title: "Đoạn đọc",
          text: "My name is Nam. I am fifteen years old. I am from Vietnam. I live in Hanoi. I am a student. She isn't busy. Are they at home? Yes, they are.",
        },
      ],
      questions,
    },
  ],
};
