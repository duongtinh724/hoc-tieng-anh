import { getRulesForDay } from "@/data/curriculum/month-01/day-rules";
import { createPracticeMeta } from "@/data/practice/shared";
import type { PracticeLesson } from "@/types/practice";

export const practiceDay02: PracticeLesson = {
  meta: { ...createPracticeMeta(2, "To be: am, is, are"), totalScreens: 8 },
  hints: {
    rules: getRulesForDay(2, ""),
    vocabulary: [
      { en: "student", vi: "học sinh" },
      { en: "teacher", vi: "giáo viên" },
      { en: "friend", vi: "bạn" },
      { en: "happy", vi: "vui" },
      { en: "sad", vi: "buồn" },
    ],
  },
  screens: [
    {
      type: "match",
      title: "Match the words.\nNối từ.",
      instruction: "Match each word with a picture.\nNối từ với ảnh.",
      words: [
        { id: "w-student", label: "student" },
        { id: "w-teacher", label: "teacher" },
        { id: "w-friend", label: "friend" },
        { id: "w-happy", label: "happy" },
        { id: "w-sad", label: "sad" },
      ],
      pairs: [
        { id: "p-student", imageUrl: "/images/practice/nouns-photo/student.jpg", imageAlt: "học sinh", label: "học sinh", correctWordId: "w-student" },
        { id: "p-teacher", imageUrl: "/images/practice/nouns-photo/teacher.jpg", imageAlt: "giáo viên", label: "giáo viên", correctWordId: "w-teacher" },
        { id: "p-friend", imageUrl: "/images/practice/tobe/friend.jpg", imageAlt: "bạn", label: "bạn", correctWordId: "w-friend" },
        { id: "p-happy", imageUrl: "/images/practice/adjectives/happy.jpg", imageAlt: "vui", label: "vui", correctWordId: "w-happy" },
        { id: "p-sad", imageUrl: "/images/practice/adjectives/sad.jpg", imageAlt: "buồn", label: "buồn", correctWordId: "w-sad" },
      ],
    },
    {
      type: "categorize",
      title: "Sort the words.\nPhân loại từ.",
      instruction: "Drag each word into a group.\nKéo từ vào một nhóm.",
      categories: [
        { id: "cat-a", label: "Có am / is / are" },
        { id: "cat-b", label: "Không có am / is / are" },
      ],
      items: [
        { id: "c-1", label: "I am a student.", correctCategoryId: "cat-a" },
        { id: "c-2", label: "You are my friend.", correctCategoryId: "cat-a" },
        { id: "c-3", label: "He is a student.", correctCategoryId: "cat-a" },
        { id: "c-4", label: "She is a teacher.", correctCategoryId: "cat-a" },
        { id: "c-5", label: "It is a book.", correctCategoryId: "cat-a" },
        { id: "c-x", label: "I like music.", correctCategoryId: "cat-b" },
      ],
    },
    {
      type: "sentence-drag",
      title: "Fill the sentence.\nĐiền vào câu.",
      instruction: "Drag a word into the blank.\nKéo từ vào chỗ trống.",
      wordBank: [
        { id: "s1", label: "am" },
        { id: "s2", label: "are" },
        { id: "s3", label: "is" },
        { id: "s4", label: "is" },
      ],
      sentences: [
        { id: "sd1", parts: [{ kind: "text", value: "I " }, { kind: "blank", id: "b1", correctWordId: "s1" }, { kind: "text", value: " a student." }] },
        { id: "sd2", parts: [{ kind: "text", value: "You " }, { kind: "blank", id: "b2", correctWordId: "s2" }, { kind: "text", value: " my friend." }] },
        { id: "sd3", parts: [{ kind: "text", value: "He " }, { kind: "blank", id: "b3", correctWordId: "s3" }, { kind: "text", value: " a student." }] },
        { id: "sd4", parts: [{ kind: "text", value: "She " }, { kind: "blank", id: "b4", correctWordId: "s4" }, { kind: "text", value: " a teacher." }] },
      ],
    },
    {
      type: "dropdown",
      title: "Choose the word.\nChọn từ đúng.",
      instruction: "Choose the correct word.\nChọn từ đúng.",
      questions: [
        { id: "q1", parts: [{ kind: "text", value: "I am a " }, { kind: "select", id: "q1a", correctOptionId: "q1-ok", options: [{ id: "q1-ok", label: "student" }, { id: "q1-no", label: "book" }] }, { kind: "text", value: "." }] },
        { id: "q2", parts: [{ kind: "text", value: "You are my " }, { kind: "select", id: "q2a", correctOptionId: "q2-ok", options: [{ id: "q2-ok", label: "friend" }, { id: "q2-no", label: "book" }] }, { kind: "text", value: "." }] },
        { id: "q3", parts: [{ kind: "text", value: "He is a " }, { kind: "select", id: "q3a", correctOptionId: "q3-ok", options: [{ id: "q3-ok", label: "student" }, { id: "q3-no", label: "book" }] }, { kind: "text", value: "." }] },
        { id: "q4", parts: [{ kind: "text", value: "She is a " }, { kind: "select", id: "q4a", correctOptionId: "q4-ok", options: [{ id: "q4-ok", label: "teacher" }, { id: "q4-no", label: "book" }] }, { kind: "text", value: "." }] },
      ],
    },
    {
      type: "reorder",
      layout: "horizontal",
      title: "Order the sentence.\nSắp xếp câu.",
      instruction: "Drag the words into a line.\nKéo các từ thành câu đúng.",
      lines: [],
      correctOrder: [],
      sentences: [
        { id: "sen-1", label: "Câu 1", lines: [{ id: "s10", text: "I" }, { id: "s11", text: "am" }, { id: "s12", text: "a" }, { id: "s13", text: "student" }], correctOrder: ["s10", "s11", "s12", "s13"] },
        { id: "sen-2", label: "Câu 2", lines: [{ id: "s20", text: "You" }, { id: "s21", text: "are" }, { id: "s22", text: "my" }, { id: "s23", text: "friend" }], correctOrder: ["s20", "s21", "s22", "s23"] },
        { id: "sen-3", label: "Câu 3", lines: [{ id: "s30", text: "He" }, { id: "s31", text: "is" }, { id: "s32", text: "a" }, { id: "s33", text: "student" }], correctOrder: ["s30", "s31", "s32", "s33"] },
        { id: "sen-4", label: "Câu 4", lines: [{ id: "s40", text: "She" }, { id: "s41", text: "is" }, { id: "s42", text: "a" }, { id: "s43", text: "teacher" }], correctOrder: ["s40", "s41", "s42", "s43"] },
        { id: "sen-5", label: "Câu 5", lines: [{ id: "s50", text: "It" }, { id: "s51", text: "is" }, { id: "s52", text: "a" }, { id: "s53", text: "book" }], correctOrder: ["s50", "s51", "s52", "s53"] },
      ],
    },
    {
      type: "reading-fill",
      title: "Fill the line.\nĐiền vào dòng.",
      instruction: "Type the missing word.\nGõ từ còn thiếu.",
      passage: "I am a student. You are my friend. He is a student. She is a teacher. It is a book.",
      prompts: [
        { id: "rf1", label: "I ___ a student.", correctAnswers: ["am"] },
        { id: "rf2", label: "You ___ my friend.", correctAnswers: ["are"] },
        { id: "rf3", label: "He ___ a student.", correctAnswers: ["is"] },
        { id: "rf4", label: "She ___ a teacher.", correctAnswers: ["is"] },
      ],
    },
    {
      type: "dictation",
      title: "Translate into English.\nDịch sang tiếng Anh.",
      instruction: "Read the Vietnamese sentence and write it in English.\nĐọc câu tiếng Việt rồi viết câu tiếng Anh.",
      items: [
        { id: "dic-1", text: "I am a student.", hint: "Tôi là học sinh." },
        { id: "dic-2", text: "You are my friend.", hint: "Bạn là bạn tôi." },
        { id: "dic-3", text: "He is a student.", hint: "Anh ấy là học sinh." },
        { id: "dic-4", text: "She is a teacher.", hint: "Cô ấy là giáo viên." },
        { id: "dic-5", text: "It is a book.", hint: "Nó là quyển sách." },
      ],
    },
    {
      type: "self-writing",
      title: "Write about you.\nViết về bạn.",
      instruction: "Write 3 sentences about you.\nViết 3 câu về bạn.",
      promptHints: ["I am a student."],
      sampleTitle: "Bài gợi ý",
      sample: "I am a student.\nYou are my friend.\nHe is a student.\nShe is a teacher.",
    },
  ],
};
