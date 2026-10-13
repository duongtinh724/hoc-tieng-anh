import { getRulesForDay } from "@/data/curriculum/month-01/day-rules";
import { createPracticeMeta } from "@/data/practice/shared";
import type { PracticeLesson } from "@/types/practice";

export const practiceDay18: PracticeLesson = {
  meta: { ...createPracticeMeta(18, "There is / There are"), totalScreens: 8 },
  hints: {
    rules: getRulesForDay(18, ""),
    vocabulary: [
      { en: "book", vi: "sách" },
      { en: "pen", vi: "bút" },
      { en: "bag", vi: "cặp" },
      { en: "school", vi: "trường" },
      { en: "house", vi: "nhà" },
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
        { id: "w-school", label: "school" },
        { id: "w-house", label: "house" },
      ],
      pairs: [
        { id: "p-book", imageUrl: "/images/practice/nouns-photo/book.jpg", imageAlt: "sách", label: "sách", correctWordId: "w-book" },
        { id: "p-pen", imageUrl: "/images/practice/nouns-photo/pen.jpg", imageAlt: "bút", label: "bút", correctWordId: "w-pen" },
        { id: "p-bag", imageUrl: "/images/practice/nouns-photo/bag.jpg", imageAlt: "cặp", label: "cặp", correctWordId: "w-bag" },
        { id: "p-school", imageUrl: "/images/practice/nouns-photo/school.jpg", imageAlt: "trường", label: "trường", correctWordId: "w-school" },
        { id: "p-house", imageUrl: "/images/practice/nouns-photo/house.jpg", imageAlt: "nhà", label: "nhà", correctWordId: "w-house" },
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
        { id: "c-1", label: "There is a book.", correctCategoryId: "cat-a" },
        { id: "c-2", label: "There are pens.", correctCategoryId: "cat-a" },
        { id: "c-3", label: "There is a bag.", correctCategoryId: "cat-a" },
        { id: "c-4", label: "There is a school.", correctCategoryId: "cat-a" },
        { id: "c-5", label: "There are books.", correctCategoryId: "cat-a" },
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
        { id: "s4", label: "is" },
      ],
      sentences: [
        { id: "sd1", parts: [{ kind: "text", value: "There " }, { kind: "blank", id: "b1", correctWordId: "s1" }, { kind: "text", value: " a book." }] },
        { id: "sd2", parts: [{ kind: "text", value: "There " }, { kind: "blank", id: "b2", correctWordId: "s2" }, { kind: "text", value: " pens." }] },
        { id: "sd3", parts: [{ kind: "text", value: "There " }, { kind: "blank", id: "b3", correctWordId: "s3" }, { kind: "text", value: " a bag." }] },
        { id: "sd4", parts: [{ kind: "text", value: "There " }, { kind: "blank", id: "b4", correctWordId: "s4" }, { kind: "text", value: " a school." }] },
      ],
    },
    {
      type: "dropdown",
      title: "Choose the word.\nChọn từ đúng.",
      instruction: "Choose the correct word.\nChọn từ đúng.",
      questions: [
        { id: "q1", parts: [{ kind: "text", value: "There is a " }, { kind: "select", id: "q1a", correctOptionId: "q1-ok", options: [{ id: "q1-ok", label: "book" }, { id: "q1-no", label: "pen" }] }, { kind: "text", value: "." }] },
        { id: "q2", parts: [{ kind: "text", value: "There are " }, { kind: "select", id: "q2a", correctOptionId: "q2-ok", options: [{ id: "q2-ok", label: "pens" }, { id: "q2-no", label: "book" }] }, { kind: "text", value: "." }] },
        { id: "q3", parts: [{ kind: "text", value: "There is a " }, { kind: "select", id: "q3a", correctOptionId: "q3-ok", options: [{ id: "q3-ok", label: "bag" }, { id: "q3-no", label: "book" }] }, { kind: "text", value: "." }] },
        { id: "q4", parts: [{ kind: "text", value: "There is a " }, { kind: "select", id: "q4a", correctOptionId: "q4-ok", options: [{ id: "q4-ok", label: "school" }, { id: "q4-no", label: "book" }] }, { kind: "text", value: "." }] },
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
        { id: "sen-1", label: "Câu 1", lines: [{ id: "s10", text: "There" }, { id: "s11", text: "is" }, { id: "s12", text: "a" }, { id: "s13", text: "book" }], correctOrder: ["s10", "s11", "s12", "s13"] },
        { id: "sen-2", label: "Câu 2", lines: [{ id: "s20", text: "There" }, { id: "s21", text: "are" }, { id: "s22", text: "pens" }], correctOrder: ["s20", "s21", "s22"] },
        { id: "sen-3", label: "Câu 3", lines: [{ id: "s30", text: "There" }, { id: "s31", text: "is" }, { id: "s32", text: "a" }, { id: "s33", text: "bag" }], correctOrder: ["s30", "s31", "s32", "s33"] },
        { id: "sen-4", label: "Câu 4", lines: [{ id: "s40", text: "There" }, { id: "s41", text: "is" }, { id: "s42", text: "a" }, { id: "s43", text: "school" }], correctOrder: ["s40", "s41", "s42", "s43"] },
        { id: "sen-5", label: "Câu 5", lines: [{ id: "s50", text: "There" }, { id: "s51", text: "are" }, { id: "s52", text: "books" }], correctOrder: ["s50", "s51", "s52"] },
      ],
    },
    {
      type: "reading-fill",
      title: "Fill the line.\nĐiền vào dòng.",
      instruction: "Type the missing word.\nGõ từ còn thiếu.",
      passage: "There is a book. There are pens. There is a bag. There is a school. There are books.",
      prompts: [
        { id: "rf1", label: "There ___ a book.", correctAnswers: ["is"] },
        { id: "rf2", label: "There ___ pens.", correctAnswers: ["are"] },
        { id: "rf3", label: "There ___ a bag.", correctAnswers: ["is"] },
        { id: "rf4", label: "There ___ a school.", correctAnswers: ["is"] },
      ],
    },
    {
      type: "dictation",
      title: "Translate into English.\nDịch sang tiếng Anh.",
      instruction: "Read the Vietnamese sentence and write it in English.\nĐọc câu tiếng Việt rồi viết câu tiếng Anh.",
      items: [
        { id: "dic-1", text: "There is a book.", hint: "Có một quyển sách." },
        { id: "dic-2", text: "There are pens.", hint: "Có những cây bút." },
        { id: "dic-3", text: "There is a bag.", hint: "Có một cái cặp." },
        { id: "dic-4", text: "There is a school.", hint: "Có một trường." },
        { id: "dic-5", text: "There are books.", hint: "Có những quyển sách." },
      ],
    },
    {
      type: "self-writing",
      title: "Write about you.\nViết về bạn.",
      instruction: "Write 3 sentences about you.\nViết 3 câu về bạn.",
      promptHints: ["There is a book."],
      sampleTitle: "Bài gợi ý",
      sample: "There is a book.\nThere are pens.\nThere is a bag.\nThere is a school.",
    },
  ],
};
