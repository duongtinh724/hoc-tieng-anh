import { getRulesForDay } from "@/data/curriculum/month-01/day-rules";
import { createPracticeMeta } from "@/data/practice/shared";
import type { PracticeLesson } from "@/types/practice";

export const practiceDay12: PracticeLesson = {
  meta: { ...createPracticeMeta(12, "This, that, these, those"), totalScreens: 8 },
  hints: {
    rules: getRulesForDay(12, ""),
    vocabulary: [
      { en: "book", vi: "sách" },
      { en: "pen", vi: "bút" },
      { en: "bag", vi: "cặp" },
      { en: "here", vi: "ở đây" },
      { en: "there", vi: "ở đó" },
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
        { id: "w-here", label: "here" },
        { id: "w-there", label: "there" },
      ],
      pairs: [
        { id: "p-book", imageUrl: "/images/practice/nouns-photo/book.jpg", imageAlt: "sách", label: "sách", correctWordId: "w-book" },
        { id: "p-pen", imageUrl: "/images/practice/nouns-photo/pen.jpg", imageAlt: "bút", label: "bút", correctWordId: "w-pen" },
        { id: "p-bag", imageUrl: "/images/practice/nouns-photo/bag.jpg", imageAlt: "cặp", label: "cặp", correctWordId: "w-bag" },
        { id: "p-here", imageUrl: "/images/practice/tobe/here.jpg", imageAlt: "ở đây", label: "ở đây", correctWordId: "w-here" },
        { id: "p-there", imageUrl: "/images/practice/tobe/there.jpg", imageAlt: "ở đó", label: "ở đó", correctWordId: "w-there" },
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
        { id: "c-1", label: "This is a book.", correctCategoryId: "cat-a" },
        { id: "c-2", label: "That is a pen.", correctCategoryId: "cat-a" },
        { id: "c-3", label: "These are bags.", correctCategoryId: "cat-a" },
        { id: "c-4", label: "Those are books.", correctCategoryId: "cat-a" },
        { id: "c-5", label: "This is here.", correctCategoryId: "cat-a" },
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
        { id: "s3", label: "are" },
        { id: "s4", label: "are" },
      ],
      sentences: [
        { id: "sd1", parts: [{ kind: "text", value: "This " }, { kind: "blank", id: "b1", correctWordId: "s1" }, { kind: "text", value: " a book." }] },
        { id: "sd2", parts: [{ kind: "text", value: "That " }, { kind: "blank", id: "b2", correctWordId: "s2" }, { kind: "text", value: " a pen." }] },
        { id: "sd3", parts: [{ kind: "text", value: "These " }, { kind: "blank", id: "b3", correctWordId: "s3" }, { kind: "text", value: " bags." }] },
        { id: "sd4", parts: [{ kind: "text", value: "Those " }, { kind: "blank", id: "b4", correctWordId: "s4" }, { kind: "text", value: " books." }] },
      ],
    },
    {
      type: "dropdown",
      title: "Choose the word.\nChọn từ đúng.",
      instruction: "Choose the correct word.\nChọn từ đúng.",
      questions: [
        { id: "q1", parts: [{ kind: "text", value: "This is a " }, { kind: "select", id: "q1a", correctOptionId: "q1-ok", options: [{ id: "q1-ok", label: "book" }, { id: "q1-no", label: "pen" }] }, { kind: "text", value: "." }] },
        { id: "q2", parts: [{ kind: "text", value: "That is a " }, { kind: "select", id: "q2a", correctOptionId: "q2-ok", options: [{ id: "q2-ok", label: "pen" }, { id: "q2-no", label: "book" }] }, { kind: "text", value: "." }] },
        { id: "q3", parts: [{ kind: "text", value: "These are " }, { kind: "select", id: "q3a", correctOptionId: "q3-ok", options: [{ id: "q3-ok", label: "bags" }, { id: "q3-no", label: "book" }] }, { kind: "text", value: "." }] },
        { id: "q4", parts: [{ kind: "text", value: "Those are " }, { kind: "select", id: "q4a", correctOptionId: "q4-ok", options: [{ id: "q4-ok", label: "books" }, { id: "q4-no", label: "book" }] }, { kind: "text", value: "." }] },
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
        { id: "sen-1", label: "Câu 1", lines: [{ id: "s10", text: "This" }, { id: "s11", text: "is" }, { id: "s12", text: "a" }, { id: "s13", text: "book" }], correctOrder: ["s10", "s11", "s12", "s13"] },
        { id: "sen-2", label: "Câu 2", lines: [{ id: "s20", text: "That" }, { id: "s21", text: "is" }, { id: "s22", text: "a" }, { id: "s23", text: "pen" }], correctOrder: ["s20", "s21", "s22", "s23"] },
        { id: "sen-3", label: "Câu 3", lines: [{ id: "s30", text: "These" }, { id: "s31", text: "are" }, { id: "s32", text: "bags" }], correctOrder: ["s30", "s31", "s32"] },
        { id: "sen-4", label: "Câu 4", lines: [{ id: "s40", text: "Those" }, { id: "s41", text: "are" }, { id: "s42", text: "books" }], correctOrder: ["s40", "s41", "s42"] },
        { id: "sen-5", label: "Câu 5", lines: [{ id: "s50", text: "This" }, { id: "s51", text: "is" }, { id: "s52", text: "here" }], correctOrder: ["s50", "s51", "s52"] },
      ],
    },
    {
      type: "reading-fill",
      title: "Fill the line.\nĐiền vào dòng.",
      instruction: "Type the missing word.\nGõ từ còn thiếu.",
      passage: "This is a book. That is a pen. These are bags. Those are books. This is here.",
      prompts: [
        { id: "rf1", label: "This ___ a book.", correctAnswers: ["is"] },
        { id: "rf2", label: "That ___ a pen.", correctAnswers: ["is"] },
        { id: "rf3", label: "These ___ bags.", correctAnswers: ["are"] },
        { id: "rf4", label: "Those ___ books.", correctAnswers: ["are"] },
      ],
    },
    {
      type: "dictation",
      title: "Translate into English.\nDịch sang tiếng Anh.",
      instruction: "Read the Vietnamese sentence and write it in English.\nĐọc câu tiếng Việt rồi viết câu tiếng Anh.",
      items: [
        { id: "dic-1", text: "This is a book.", hint: "Đây là một quyển sách." },
        { id: "dic-2", text: "That is a pen.", hint: "Kia là một cây bút." },
        { id: "dic-3", text: "These are bags.", hint: "Đây là những cái cặp." },
        { id: "dic-4", text: "Those are books.", hint: "Kia là những quyển sách." },
        { id: "dic-5", text: "This is here.", hint: "Cái này ở đây." },
      ],
    },
    {
      type: "self-writing",
      title: "Write about you.\nViết về bạn.",
      instruction: "Write 3 sentences about you.\nViết 3 câu về bạn.",
      promptHints: ["This is a book."],
      sampleTitle: "Bài gợi ý",
      sample: "This is a book.\nThat is a pen.\nThese are bags.\nThose are books.",
    },
  ],
};
