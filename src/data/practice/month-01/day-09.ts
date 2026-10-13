import { getRulesForDay } from "@/data/curriculum/month-01/day-rules";
import { createPracticeMeta } from "@/data/practice/shared";
import type { PracticeLesson } from "@/types/practice";

export const practiceDay09: PracticeLesson = {
  meta: { ...createPracticeMeta(9, "Số ít và số nhiều"), totalScreens: 8 },
  hints: {
    rules: getRulesForDay(9, ""),
    vocabulary: [
      { en: "book", vi: "sách" },
      { en: "pen", vi: "bút" },
      { en: "bag", vi: "cặp" },
      { en: "student", vi: "học sinh" },
      { en: "friend", vi: "bạn" },
    ],
  },
  screens: [
    {
      type: "match",
      title: "Match the words.\nNối từ.",
      instruction: "Match each word with a picture.\nNối từ với ảnh.",
      words: [
        { id: "w-book", label: "book" },
        { id: "w-pen", label: "pen" },
        { id: "w-bag", label: "bag" },
        { id: "w-student", label: "student" },
        { id: "w-friend", label: "friend" },
      ],
      pairs: [
        { id: "p-book", imageUrl: "/images/practice/nouns-photo/book.jpg", imageAlt: "sách", label: "sách", correctWordId: "w-book" },
        { id: "p-pen", imageUrl: "/images/practice/nouns-photo/pen.jpg", imageAlt: "bút", label: "bút", correctWordId: "w-pen" },
        { id: "p-bag", imageUrl: "/images/practice/nouns-photo/bag.jpg", imageAlt: "cặp", label: "cặp", correctWordId: "w-bag" },
        { id: "p-student", imageUrl: "/images/practice/nouns-photo/student.jpg", imageAlt: "học sinh", label: "học sinh", correctWordId: "w-student" },
        { id: "p-friend", imageUrl: "/images/practice/tobe/friend.jpg", imageAlt: "bạn", label: "bạn", correctWordId: "w-friend" },
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
        { id: "c-1", label: "It is a book.", correctCategoryId: "cat-a" },
        { id: "c-2", label: "They are books.", correctCategoryId: "cat-a" },
        { id: "c-3", label: "It is a pen.", correctCategoryId: "cat-a" },
        { id: "c-4", label: "They are pens.", correctCategoryId: "cat-a" },
        { id: "c-5", label: "He is a student.", correctCategoryId: "cat-a" },
        { id: "c-x", label: "I like music.", correctCategoryId: "cat-b" },
      ],
    },
    {
      type: "sentence-drag",
      title: "Fill the sentence.\nĐiền vào câu.",
      instruction: "Drag a word into the blank.\nKéo từ vào chỗ trống.",
      wordBank: [
        { id: "s1", label: "is" },
        { id: "s2", label: "are" },
        { id: "s3", label: "is" },
        { id: "s4", label: "are" },
      ],
      sentences: [
        { id: "sd1", parts: [{ kind: "text", value: "It " }, { kind: "blank", id: "b1", correctWordId: "s1" }, { kind: "text", value: " a book." }] },
        { id: "sd2", parts: [{ kind: "text", value: "They " }, { kind: "blank", id: "b2", correctWordId: "s2" }, { kind: "text", value: " books." }] },
        { id: "sd3", parts: [{ kind: "text", value: "It " }, { kind: "blank", id: "b3", correctWordId: "s3" }, { kind: "text", value: " a pen." }] },
        { id: "sd4", parts: [{ kind: "text", value: "They " }, { kind: "blank", id: "b4", correctWordId: "s4" }, { kind: "text", value: " pens." }] },
      ],
    },
    {
      type: "dropdown",
      title: "Choose the word.\nChọn từ đúng.",
      instruction: "Choose the correct word.\nChọn từ đúng.",
      questions: [
        { id: "q1", parts: [{ kind: "text", value: "It is a " }, { kind: "select", id: "q1a", correctOptionId: "q1-ok", options: [{ id: "q1-ok", label: "book" }, { id: "q1-no", label: "pen" }] }, { kind: "text", value: "." }] },
        { id: "q2", parts: [{ kind: "text", value: "They are " }, { kind: "select", id: "q2a", correctOptionId: "q2-ok", options: [{ id: "q2-ok", label: "books" }, { id: "q2-no", label: "book" }] }, { kind: "text", value: "." }] },
        { id: "q3", parts: [{ kind: "text", value: "It is a " }, { kind: "select", id: "q3a", correctOptionId: "q3-ok", options: [{ id: "q3-ok", label: "pen" }, { id: "q3-no", label: "book" }] }, { kind: "text", value: "." }] },
        { id: "q4", parts: [{ kind: "text", value: "They are " }, { kind: "select", id: "q4a", correctOptionId: "q4-ok", options: [{ id: "q4-ok", label: "pens" }, { id: "q4-no", label: "book" }] }, { kind: "text", value: "." }] },
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
        { id: "sen-1", label: "Câu 1", lines: [{ id: "s10", text: "It" }, { id: "s11", text: "is" }, { id: "s12", text: "a" }, { id: "s13", text: "book" }], correctOrder: ["s10", "s11", "s12", "s13"] },
        { id: "sen-2", label: "Câu 2", lines: [{ id: "s20", text: "They" }, { id: "s21", text: "are" }, { id: "s22", text: "books" }], correctOrder: ["s20", "s21", "s22"] },
        { id: "sen-3", label: "Câu 3", lines: [{ id: "s30", text: "It" }, { id: "s31", text: "is" }, { id: "s32", text: "a" }, { id: "s33", text: "pen" }], correctOrder: ["s30", "s31", "s32", "s33"] },
        { id: "sen-4", label: "Câu 4", lines: [{ id: "s40", text: "They" }, { id: "s41", text: "are" }, { id: "s42", text: "pens" }], correctOrder: ["s40", "s41", "s42"] },
        { id: "sen-5", label: "Câu 5", lines: [{ id: "s50", text: "He" }, { id: "s51", text: "is" }, { id: "s52", text: "a" }, { id: "s53", text: "student" }], correctOrder: ["s50", "s51", "s52", "s53"] },
      ],
    },
    {
      type: "reading-fill",
      title: "Fill the line.\nĐiền vào dòng.",
      instruction: "Type the missing word.\nGõ từ còn thiếu.",
      passage: "It is a book. They are books. It is a pen. They are pens. He is a student.",
      prompts: [
        { id: "rf1", label: "It ___ a book.", correctAnswers: ["is"] },
        { id: "rf2", label: "They ___ books.", correctAnswers: ["are"] },
        { id: "rf3", label: "It ___ a pen.", correctAnswers: ["is"] },
        { id: "rf4", label: "They ___ pens.", correctAnswers: ["are"] },
      ],
    },
    {
      type: "dictation",
      title: "Translate into English.\nDịch sang tiếng Anh.",
      instruction: "Read the Vietnamese sentence and write it in English.\nĐọc câu tiếng Việt rồi viết câu tiếng Anh.",
      items: [
        { id: "dic-1", text: "It is a book.", hint: "Nó là một quyển sách." },
        { id: "dic-2", text: "They are books.", hint: "Chúng là những quyển sách." },
        { id: "dic-3", text: "It is a pen.", hint: "Nó là một cây bút." },
        { id: "dic-4", text: "They are pens.", hint: "Chúng là những cây bút." },
        { id: "dic-5", text: "He is a student.", hint: "Anh ấy là một học sinh." },
      ],
    },
    {
      type: "self-writing",
      title: "Write about you.\nViết về bạn.",
      instruction: "Write 3 sentences about you.\nViết 3 câu về bạn.",
      promptHints: ["It is a book."],
      sampleTitle: "Bài gợi ý",
      sample: "It is a book.\nThey are books.\nIt is a pen.\nThey are pens.",
    },
  ],
};
