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
  choice("g1", "___ study English.", "I", ["She", "It"], "I đi với động từ nguyên mẫu: I study. She/It phải thêm -s, nhưng tuần này chưa học -s.", "grammar"),
  choice("g2", "___ go to school. (bạn)", "You", ["He", "It"], "“Bạn” là You. You đứng đầu câu, động từ giữ nguyên: You go.", "grammar"),
  choice("g3", "___ like music. (một bạn trai)", "He", ["I", "They"], "Một bạn trai là He. They là nhiều người, I là tôi.", "grammar"),
  choice("g4", "___ read books. (một bạn gái)", "She", ["We", "It"], "Một bạn gái là She. We là chúng tôi, It là vật hoặc con vật.", "grammar"),
  choice("g5", "___ play football. (họ)", "They", ["He", "She"], "“Họ” là They. He và She chỉ một người.", "grammar"),
  choice("g6", "Người đi học là…", "student", ["school", "book"], "student = học sinh. school là trường, book là sách.", "grammar"),
  choice("g7", "Người dạy học là…", "teacher", ["student", "pen"], "teacher = giáo viên. student là học sinh, pen là bút.", "grammar"),
  choice("g8", "We go to ___.", "school", ["music", "good"], "go to + nơi chốn. school là trường. music là âm nhạc, good là tính từ.", "grammar"),
  choice("g9", "I ___ English.", "study", ["book", "small"], "Chỗ trống cần động từ. study = học. book là danh từ, small là tính từ.", "grammar"),
  choice("g10", "a ___ bag (nhỏ)", "small", ["school", "go"], "“Nhỏ” là tính từ small, đứng trước danh từ: a small bag.", "grammar"),
  choice("g11", "Một cái bút dùng đại từ…", "It", ["They", "We"], "Vật dùng It. They là nhiều người, We là chúng tôi.", "grammar"),
  choice("g12", "___ study English. (chúng tôi)", "We", ["He", "She"], "“Chúng tôi” là We. He và She chỉ một người.", "grammar"),
  choice("g13", "I ___ breakfast.", "eat", ["book", "small"], "eat là động từ “ăn”. book là danh từ, small là tính từ.", "grammar"),
  choice("g14", "They ___ football.", "play", ["school", "good"], "play là động từ “chơi”. school là nơi chốn, good là tính từ.", "grammar"),
  choice("g15", "I ___ at home.", "work", ["pen", "big"], "work là động từ “làm việc”. pen là danh từ, big là tính từ.", "grammar"),
  choice("g16", "a ___ book (tốt)", "good", ["go", "they"], "“Tốt” là good. Cụm đúng: a good book.", "grammar"),
  choice("g17", "a ___ house (to)", "big", ["eat", "we"], "“To” là big. big đứng trước house.", "grammar"),
  choice("g18", "I like ___. (âm nhạc)", "music", ["study", "small"], "music là tân ngữ, đứng sau like. study là động từ.", "grammar"),
  choice("g19", "We read ___.", "books", ["go", "happy"], "books là danh từ, tân ngữ của read. go là động từ.", "grammar"),
  choice("g20", "Trong câu I read books, động từ là…", "read", ["I", "books"], "I là chủ ngữ, read là động từ, books là tân ngữ.", "grammar"),

  choice("l1", "Bạn nghe thấy câu nào?", "I study English.", ["I like music.", "We go to school."], "Câu nghe là I study English. study là học, English là tiếng Anh.", "listen", { listenText: "I study English." }),
  choice("l2", "Bạn nghe thấy câu nào?", "You go to school.", ["You read books.", "They play football."], "Câu nghe là You go to school. go to school là đi học.", "listen", { listenText: "You go to school." }),
  choice("l3", "Bạn nghe thấy câu nào?", "They like music.", ["They like books.", "We like music."], "Câu nghe bắt đầu bằng They và kết thúc bằng music.", "listen", { listenText: "They like music." }),
  choice("l4", "Bạn nghe thấy câu nào?", "I read books.", ["I read a book.", "We read books."], "Câu nghe là I read books, chủ ngữ I, động từ read.", "listen", { listenText: "I read books." }),
  choice("l5", "Bạn nghe thấy câu nào?", "We play football.", ["We study English.", "They play football."], "Câu nghe là We play football. play football là chơi bóng đá.", "listen", { listenText: "We play football." }),

  choice("r1", "Who studies English?", "We", ["I", "They"], "Câu đầu: We study English. We là chúng tôi.", "reading", { passageId: "p1" }),
  choice("r2", "I go to school at…", "7", ["6", "8"], "Câu thứ hai viết I go to school at 7.", "reading", { passageId: "p1" }),
  choice("r3", "They like…", "music", ["books", "football"], "They like music. like là thích, music là âm nhạc.", "reading", { passageId: "p1" }),
  choice("r4", "We read…", "books", ["music", "football"], "We read books. read là đọc.", "reading", { passageId: "p1" }),
  choice("r5", "They play…", "football", ["music", "English"], "Câu cuối: They play football.", "reading", { passageId: "p1" }),
];

export const practiceDay07: PracticeLesson = {
  meta: { ...createPracticeMeta(7, "Kiểm tra tuần 1"), totalScreens: 1 },
  hints: {
    rules: getRulesForDay(7, ""),
    vocabulary: [
      { en: "student", vi: "học sinh" },
      { en: "teacher", vi: "giáo viên" },
      { en: "school", vi: "trường" },
      { en: "study", vi: "học" },
      { en: "like", vi: "thích" },
      { en: "read", vi: "đọc" },
      { en: "small", vi: "nhỏ" },
      { en: "big", vi: "to" },
      { en: "good", vi: "tốt" },
      { en: "new", vi: "mới" },
    ],
  },
  screens: [
    {
      type: "quiz",
      title: "Week 1 test\nKiểm tra tuần 1",
      instruction:
        "30 questions: 20 grammar, 5 listening, 5 reading. You have 30 minutes. 6/10 is a pass.\n30 câu: 20 ngữ pháp, 5 nghe, 5 đọc. Làm trong 30 phút. Đạt từ 6/10.",
      passScore: 18,
      timeLimitSeconds: 30 * 60,
      passages: [
        {
          id: "p1",
          title: "A school day",
          text: "We study English. I go to school at 7. They like music. We read books. They play football.",
        },
      ],
      questions,
    },
  ],
};
