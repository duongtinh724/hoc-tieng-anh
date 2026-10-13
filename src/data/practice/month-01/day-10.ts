import { getRulesForDay } from "@/data/curriculum/month-01/day-rules";
import { createPracticeMeta } from "@/data/practice/shared";
import type { PracticeLesson } from "@/types/practice";

export const practiceDay10: PracticeLesson = {
  meta: { ...createPracticeMeta(10, "Mạo từ a / an"), totalScreens: 8 },
  hints: {
    rules: getRulesForDay(10, ""),
    vocabulary: [
      { en: "book", vi: "sách" },
      { en: "pen", vi: "bút" },
      { en: "apple", vi: "táo" },
      { en: "egg", vi: "trứng" },
      { en: "bag", vi: "cặp" },
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
        { id: "w-i", label: "i" },
        { id: "w-you", label: "you" },
      ],
      pairs: [
        { id: "p-book", imageUrl: "/images/practice/nouns-photo/book.jpg", imageAlt: "sách", label: "sách", correctWordId: "w-book" },
        { id: "p-pen", imageUrl: "/images/practice/nouns-photo/pen.jpg", imageAlt: "bút", label: "bút", correctWordId: "w-pen" },
        { id: "p-bag", imageUrl: "/images/practice/nouns-photo/bag.jpg", imageAlt: "cặp", label: "cặp", correctWordId: "w-bag" },
        { id: "p-i", imageUrl: "/images/practice/pronouns/i.jpg", imageAlt: "i", label: "i", correctWordId: "w-i" },
        { id: "p-you", imageUrl: "/images/practice/pronouns/you.jpg", imageAlt: "you", label: "you", correctWordId: "w-you" },
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
        { id: "c-2", label: "It is a pen.", correctCategoryId: "cat-a" },
        { id: "c-3", label: "It is an apple.", correctCategoryId: "cat-a" },
        { id: "c-4", label: "It is an egg.", correctCategoryId: "cat-a" },
        { id: "c-5", label: "She is a student.", correctCategoryId: "cat-a" },
        { id: "c-x", label: "I like music.", correctCategoryId: "cat-b" },
      ],
    },
    {
      type: "sentence-drag",
      title: "Fill the sentence.\nĐiền vào câu.",
      instruction: "Drag a word into the blank.\nKéo từ vào chỗ trống.",
      wordBank: [
        { id: "s1", label: "is" },
        { id: "s2", label: "is" },
        { id: "s3", label: "is" },
        { id: "s4", label: "is" },
      ],
      sentences: [
        { id: "sd1", parts: [{ kind: "text", value: "It " }, { kind: "blank", id: "b1", correctWordId: "s1" }, { kind: "text", value: " a book." }] },
        { id: "sd2", parts: [{ kind: "text", value: "It " }, { kind: "blank", id: "b2", correctWordId: "s2" }, { kind: "text", value: " a pen." }] },
        { id: "sd3", parts: [{ kind: "text", value: "It " }, { kind: "blank", id: "b3", correctWordId: "s3" }, { kind: "text", value: " an apple." }] },
        { id: "sd4", parts: [{ kind: "text", value: "It " }, { kind: "blank", id: "b4", correctWordId: "s4" }, { kind: "text", value: " an egg." }] },
      ],
    },
    {
      type: "dropdown",
      title: "Choose the word.\nChọn từ đúng.",
      instruction: "Choose the correct word.\nChọn từ đúng.",
      questions: [
        { id: "q1", parts: [{ kind: "text", value: "It is a " }, { kind: "select", id: "q1a", correctOptionId: "q1-ok", options: [{ id: "q1-ok", label: "book" }, { id: "q1-no", label: "pen" }] }, { kind: "text", value: "." }] },
        { id: "q2", parts: [{ kind: "text", value: "It is a " }, { kind: "select", id: "q2a", correctOptionId: "q2-ok", options: [{ id: "q2-ok", label: "pen" }, { id: "q2-no", label: "book" }] }, { kind: "text", value: "." }] },
        { id: "q3", parts: [{ kind: "text", value: "It is an " }, { kind: "select", id: "q3a", correctOptionId: "q3-ok", options: [{ id: "q3-ok", label: "apple" }, { id: "q3-no", label: "book" }] }, { kind: "text", value: "." }] },
        { id: "q4", parts: [{ kind: "text", value: "It is an " }, { kind: "select", id: "q4a", correctOptionId: "q4-ok", options: [{ id: "q4-ok", label: "egg" }, { id: "q4-no", label: "book" }] }, { kind: "text", value: "." }] },
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
        { id: "sen-2", label: "Câu 2", lines: [{ id: "s20", text: "It" }, { id: "s21", text: "is" }, { id: "s22", text: "a" }, { id: "s23", text: "pen" }], correctOrder: ["s20", "s21", "s22", "s23"] },
        { id: "sen-3", label: "Câu 3", lines: [{ id: "s30", text: "It" }, { id: "s31", text: "is" }, { id: "s32", text: "an" }, { id: "s33", text: "apple" }], correctOrder: ["s30", "s31", "s32", "s33"] },
        { id: "sen-4", label: "Câu 4", lines: [{ id: "s40", text: "It" }, { id: "s41", text: "is" }, { id: "s42", text: "an" }, { id: "s43", text: "egg" }], correctOrder: ["s40", "s41", "s42", "s43"] },
        { id: "sen-5", label: "Câu 5", lines: [{ id: "s50", text: "She" }, { id: "s51", text: "is" }, { id: "s52", text: "a" }, { id: "s53", text: "student" }], correctOrder: ["s50", "s51", "s52", "s53"] },
      ],
    },
    {
      type: "reading-fill",
      title: "Fill the line.\nĐiền vào dòng.",
      instruction: "Type the missing word.\nGõ từ còn thiếu.",
      passage: "It is a book. It is a pen. It is an apple. It is an egg. She is a student.",
      prompts: [
        { id: "rf1", label: "It ___ a book.", correctAnswers: ["is"] },
        { id: "rf2", label: "It ___ a pen.", correctAnswers: ["is"] },
        { id: "rf3", label: "It ___ an apple.", correctAnswers: ["is"] },
        { id: "rf4", label: "It ___ an egg.", correctAnswers: ["is"] },
      ],
    },
    {
      type: "dictation",
      title: "Translate into English.\nDịch sang tiếng Anh.",
      instruction: "Read the Vietnamese sentence and write it in English.\nĐọc câu tiếng Việt rồi viết câu tiếng Anh.",
      items: [
        { id: "dic-1", text: "It is a book.", hint: "Nó là một quyển sách." },
        { id: "dic-2", text: "It is a pen.", hint: "Nó là một cây bút." },
        { id: "dic-3", text: "It is an apple.", hint: "Nó là một quả táo." },
        { id: "dic-4", text: "It is an egg.", hint: "Nó là một quả trứng." },
        { id: "dic-5", text: "She is a student.", hint: "Cô ấy là một học sinh." },
      ],
    },
    {
      type: "self-writing",
      title: "Write about you.\nViết về bạn.",
      instruction: "Write 3 sentences about you.\nViết 3 câu về bạn.",
      promptHints: ["It is a book."],
      sampleTitle: "Bài gợi ý",
      sample: "It is a book.\nIt is a pen.\nIt is an apple.\nIt is an egg.",
    },
  ],
};
