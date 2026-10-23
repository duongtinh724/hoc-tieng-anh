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
  choice("g1", "Từ nào là danh từ chỉ địa điểm?", "Hospital", ["Teacher", "Book"], "Hospital là bệnh viện, một địa điểm.", "grammar"),
  choice("g2", "Dạng số nhiều của box là gì?", "Boxes", ["Boxs", "Boxies"], "box thêm -es: boxes.", "grammar"),
  choice("g3", "I am ___ student.", "a", ["an", "the"], "student bắt đầu bằng âm phụ âm, dùng a.", "grammar"),
  choice("g4", "She is ___ English teacher.", "an", ["a", "—"], "English bắt đầu bằng âm nguyên âm, dùng an.", "grammar"),
  choice("g5", "I have a dog. ___ dog is very cute.", "The", ["A", "An"], "Đã nhắc con chó rồi thì dùng The.", "grammar"),
  choice("g6", "Câu nào nói về chó nói chung?", "I like dogs.", ["I like a dogs.", "I like dog."], "Nói chung không dùng a và dùng số nhiều dogs.", "grammar"),
  choice("g7", "Một quyển sách ở gần: ___ is a book.", "This", ["These", "Those"], "Một vật ở gần dùng This.", "grammar"),
  choice("g8", "Nhiều chiếc xe ở xa: ___ are cars.", "Those", ["That", "This"], "Nhiều vật ở xa dùng Those.", "grammar"),
  choice("g9", "These ___ my books.", "are", ["is", "am"], "These đi với are.", "grammar"),
  choice("g10", "Chọn câu đúng.", "He is a doctor.", ["He are a doctor.", "He is an doctor."], "He đi với is. doctor dùng a.", "grammar"),
  choice("g11", "Dạng số nhiều của child là gì?", "Children", ["Childs", "Childes"], "child → children.", "grammar"),
  choice("g12", "Chọn câu hỏi đúng.", "Are these your books?", ["Is these your books?", "Are this your book?"], "These đi với Are.", "grammar"),
  choice("g13", "Chọn câu phủ định đúng.", "They aren't students.", ["They isn't students.", "They not are students."], "They dùng aren't.", "grammar"),
  choice("g14", "Chọn câu đúng.", "This is an umbrella.", ["This is a umbrella.", "These is an umbrella."], "umbrella dùng an. This đi với is.", "grammar"),
  choice("g15", "Chọn câu đúng.", "Those are my friends.", ["Those is my friends.", "That are my friends."], "Those đi với are.", "grammar"),
  choice("l1", "Bạn nghe thấy câu nào?", "He is a doctor.", ["He are a doctor.", "He is an doctor."], "Câu nghe là He is a doctor.", "listen", { listenText: "He is a doctor." }),
  choice("l2", "Bạn nghe thấy câu nào?", "This is an apple.", ["This is a apple.", "These is an apple."], "an apple.", "listen", { listenText: "This is an apple." }),
  choice("l3", "Bạn nghe thấy câu nào?", "The books are new.", ["The books is new.", "A books are new."], "Số nhiều đi với are.", "listen", { listenText: "The books are new." }),
  choice("l4", "Bạn nghe thấy câu nào?", "Those are cars.", ["Those is cars.", "That are cars."], "Those are cars.", "listen", { listenText: "Those are cars." }),
  choice("l5", "Bạn nghe thấy câu nào?", "I like dogs.", ["I like a dogs.", "I like the dog."], "Nói chung: I like dogs.", "listen", { listenText: "I like dogs." }),
  choice("r1", "Nam is a…", "student", ["teacher", "doctor"], "Câu: I am a student.", "reading", { passageId: "p1" }),
  choice("r2", "The book is…", "new", ["old", "blue"], "Câu: The book is new.", "reading", { passageId: "p1" }),
  choice("r3", "These are…", "books", ["a book", "book"], "Câu: These are books.", "reading", { passageId: "p1" }),
  choice("r4", "Those are…", "cars", ["a car", "car"], "Câu: Those are cars.", "reading", { passageId: "p1" }),
  choice("r5", "They aren't…", "teachers", ["students", "books"], "Câu: They aren't teachers.", "reading", { passageId: "p1" }),
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
      instruction: "25 questions. 20 minutes. 15 correct answers is a pass.\n25 câu, 20 phút. Đúng từ 15 câu là đạt. 15 câu đầu là bài kiểm tra tuần.",
      passScore: 15,
      timeLimitSeconds: 30 * 60,
      passages: [
        {
          id: "p1",
          title: "Đoạn đọc",
          text: "I am a student. I have a book. The book is new. These are books. Those are cars. They aren't teachers.",
        },
      ],
      questions,
    },
  ],
};
