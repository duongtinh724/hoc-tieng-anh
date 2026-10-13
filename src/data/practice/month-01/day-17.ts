import { getRulesForDay } from "@/data/curriculum/month-01/day-rules";
import { createPracticeMeta } from "@/data/practice/shared";
import type { PracticeLesson } from "@/types/practice";

export const practiceDay17: PracticeLesson = {
  meta: { ...createPracticeMeta(17, "Have / has"), totalScreens: 8 },
  hints: {
    rules: getRulesForDay(17, ""),
    vocabulary: [
      { en: "book", vi: "sách" },
      { en: "pen", vi: "bút" },
      { en: "bag", vi: "cặp" },
      { en: "friend", vi: "bạn" },
      { en: "brother", vi: "anh hoặc em trai" },
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
        { id: "w-friend", label: "friend" },
        { id: "w-brother", label: "brother" },
      ],
      pairs: [
        { id: "p-book", imageUrl: "/images/practice/nouns-photo/book.jpg", imageAlt: "sách", label: "sách", correctWordId: "w-book" },
        { id: "p-pen", imageUrl: "/images/practice/nouns-photo/pen.jpg", imageAlt: "bút", label: "bút", correctWordId: "w-pen" },
        { id: "p-bag", imageUrl: "/images/practice/nouns-photo/bag.jpg", imageAlt: "cặp", label: "cặp", correctWordId: "w-bag" },
        { id: "p-friend", imageUrl: "/images/practice/tobe/friend.jpg", imageAlt: "bạn", label: "bạn", correctWordId: "w-friend" },
        { id: "p-brother", imageUrl: "/images/practice/tobe/brother.jpg", imageAlt: "anh hoặc em trai", label: "anh hoặc em trai", correctWordId: "w-brother" },
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
        { id: "c-1", label: "I have a book.", correctCategoryId: "cat-b" },
        { id: "c-2", label: "You have a pen.", correctCategoryId: "cat-b" },
        { id: "c-3", label: "She has a bag.", correctCategoryId: "cat-b" },
        { id: "c-4", label: "He has a brother.", correctCategoryId: "cat-b" },
        { id: "c-5", label: "We have friends.", correctCategoryId: "cat-b" },
        { id: "c-y", label: "I am a student.", correctCategoryId: "cat-a" },
      ],
    },
    {
      type: "sentence-drag",
      title: "Fill the sentence.\nĐiền vào câu.",
      instruction: "Drag a word into the blank.\nKéo từ vào chỗ trống.",
      wordBank: [
        { id: "s1", label: "have" },
        { id: "s2", label: "have" },
        { id: "s3", label: "has" },
        { id: "s4", label: "has" },
      ],
      sentences: [
        { id: "sd1", parts: [{ kind: "text", value: "I " }, { kind: "blank", id: "b1", correctWordId: "s1" }, { kind: "text", value: " a book." }] },
        { id: "sd2", parts: [{ kind: "text", value: "You " }, { kind: "blank", id: "b2", correctWordId: "s2" }, { kind: "text", value: " a pen." }] },
        { id: "sd3", parts: [{ kind: "text", value: "She " }, { kind: "blank", id: "b3", correctWordId: "s3" }, { kind: "text", value: " a bag." }] },
        { id: "sd4", parts: [{ kind: "text", value: "He " }, { kind: "blank", id: "b4", correctWordId: "s4" }, { kind: "text", value: " a brother." }] },
      ],
    },
    {
      type: "dropdown",
      title: "Choose the word.\nChọn từ đúng.",
      instruction: "Choose the correct word.\nChọn từ đúng.",
      questions: [
        { id: "q1", parts: [{ kind: "text", value: "I have a " }, { kind: "select", id: "q1a", correctOptionId: "q1-ok", options: [{ id: "q1-ok", label: "book" }, { id: "q1-no", label: "pen" }] }, { kind: "text", value: "." }] },
        { id: "q2", parts: [{ kind: "text", value: "You have a " }, { kind: "select", id: "q2a", correctOptionId: "q2-ok", options: [{ id: "q2-ok", label: "pen" }, { id: "q2-no", label: "book" }] }, { kind: "text", value: "." }] },
        { id: "q3", parts: [{ kind: "text", value: "She has a " }, { kind: "select", id: "q3a", correctOptionId: "q3-ok", options: [{ id: "q3-ok", label: "bag" }, { id: "q3-no", label: "book" }] }, { kind: "text", value: "." }] },
        { id: "q4", parts: [{ kind: "text", value: "He has a " }, { kind: "select", id: "q4a", correctOptionId: "q4-ok", options: [{ id: "q4-ok", label: "brother" }, { id: "q4-no", label: "book" }] }, { kind: "text", value: "." }] },
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
        { id: "sen-1", label: "Câu 1", lines: [{ id: "s10", text: "I" }, { id: "s11", text: "have" }, { id: "s12", text: "a" }, { id: "s13", text: "book" }], correctOrder: ["s10", "s11", "s12", "s13"] },
        { id: "sen-2", label: "Câu 2", lines: [{ id: "s20", text: "You" }, { id: "s21", text: "have" }, { id: "s22", text: "a" }, { id: "s23", text: "pen" }], correctOrder: ["s20", "s21", "s22", "s23"] },
        { id: "sen-3", label: "Câu 3", lines: [{ id: "s30", text: "She" }, { id: "s31", text: "has" }, { id: "s32", text: "a" }, { id: "s33", text: "bag" }], correctOrder: ["s30", "s31", "s32", "s33"] },
        { id: "sen-4", label: "Câu 4", lines: [{ id: "s40", text: "He" }, { id: "s41", text: "has" }, { id: "s42", text: "a" }, { id: "s43", text: "brother" }], correctOrder: ["s40", "s41", "s42", "s43"] },
        { id: "sen-5", label: "Câu 5", lines: [{ id: "s50", text: "We" }, { id: "s51", text: "have" }, { id: "s52", text: "friends" }], correctOrder: ["s50", "s51", "s52"] },
      ],
    },
    {
      type: "reading-fill",
      title: "Fill the line.\nĐiền vào dòng.",
      instruction: "Type the missing word.\nGõ từ còn thiếu.",
      passage: "I have a book. You have a pen. She has a bag. He has a brother. We have friends.",
      prompts: [
        { id: "rf1", label: "I ___ a book.", correctAnswers: ["have"] },
        { id: "rf2", label: "You ___ a pen.", correctAnswers: ["have"] },
        { id: "rf3", label: "She ___ a bag.", correctAnswers: ["has"] },
        { id: "rf4", label: "He ___ a brother.", correctAnswers: ["has"] },
      ],
    },
    {
      type: "dictation",
      title: "Translate into English.\nDịch sang tiếng Anh.",
      instruction: "Read the Vietnamese sentence and write it in English.\nĐọc câu tiếng Việt rồi viết câu tiếng Anh.",
      items: [
        { id: "dic-1", text: "I have a book.", hint: "Tôi có một quyển sách." },
        { id: "dic-2", text: "You have a pen.", hint: "Bạn có một cây bút." },
        { id: "dic-3", text: "She has a bag.", hint: "Cô ấy có một cái cặp." },
        { id: "dic-4", text: "He has a brother.", hint: "Anh ấy có em trai." },
        { id: "dic-5", text: "We have friends.", hint: "Chúng tôi có bạn." },
      ],
    },
    {
      type: "self-writing",
      title: "Write about you.\nViết về bạn.",
      instruction: "Write 3 sentences about you.\nViết 3 câu về bạn.",
      promptHints: ["I have a book."],
      sampleTitle: "Bài gợi ý",
      sample: "I have a book.\nYou have a pen.\nShe has a bag.\nHe has a brother.",
    },
  ],
};
