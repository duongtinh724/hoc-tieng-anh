import { getRulesForDay } from "@/data/curriculum/month-01/day-rules";
import { createPracticeMeta } from "@/data/practice/shared";
import type { PracticeLesson } from "@/types/practice";

export const practiceDay19: PracticeLesson = {
  meta: { ...createPracticeMeta(19, "Tính từ và tính từ sở hữu"), totalScreens: 8 },
  hints: {
    rules: getRulesForDay(19, ""),
    vocabulary: [
      { en: "big", vi: "to" },
      { en: "small", vi: "nhỏ" },
      { en: "good", vi: "tốt" },
      { en: "new", vi: "mới" },
      { en: "old", vi: "cũ" },
    ],
  },
  screens: [
    {
      type: "match",
      title: "Match the words.\nNối từ.",
      instruction: "Match each word with a picture.\nNối từ với ảnh.",
      words: [
        { id: "w-big", label: "big" },
        { id: "w-small", label: "small" },
        { id: "w-good", label: "good" },
        { id: "w-new", label: "new" },
        { id: "w-old", label: "old" },
      ],
      pairs: [
        { id: "p-big", imageUrl: "/images/practice/adjectives/big.jpg", imageAlt: "to", label: "to", correctWordId: "w-big" },
        { id: "p-small", imageUrl: "/images/practice/adjectives/small.jpg", imageAlt: "nhỏ", label: "nhỏ", correctWordId: "w-small" },
        { id: "p-good", imageUrl: "/images/practice/adjectives/good.jpg", imageAlt: "tốt", label: "tốt", correctWordId: "w-good" },
        { id: "p-new", imageUrl: "/images/practice/adjectives/new.jpg", imageAlt: "mới", label: "mới", correctWordId: "w-new" },
        { id: "p-old", imageUrl: "/images/practice/adjectives/old.jpg", imageAlt: "cũ", label: "cũ", correctWordId: "w-old" },
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
        { id: "c-1", label: "It is a big house.", correctCategoryId: "cat-a" },
        { id: "c-2", label: "It is a small bag.", correctCategoryId: "cat-a" },
        { id: "c-3", label: "This is my book.", correctCategoryId: "cat-a" },
        { id: "c-4", label: "That is your pen.", correctCategoryId: "cat-a" },
        { id: "c-5", label: "His bag is new.", correctCategoryId: "cat-a" },
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
        { id: "sd1", parts: [{ kind: "text", value: "It " }, { kind: "blank", id: "b1", correctWordId: "s1" }, { kind: "text", value: " a big house." }] },
        { id: "sd2", parts: [{ kind: "text", value: "It " }, { kind: "blank", id: "b2", correctWordId: "s2" }, { kind: "text", value: " a small bag." }] },
        { id: "sd3", parts: [{ kind: "text", value: "This " }, { kind: "blank", id: "b3", correctWordId: "s3" }, { kind: "text", value: " my book." }] },
        { id: "sd4", parts: [{ kind: "text", value: "That " }, { kind: "blank", id: "b4", correctWordId: "s4" }, { kind: "text", value: " your pen." }] },
      ],
    },
    {
      type: "dropdown",
      title: "Choose the word.\nChọn từ đúng.",
      instruction: "Choose the correct word.\nChọn từ đúng.",
      questions: [
        { id: "q1", parts: [{ kind: "text", value: "It is a big " }, { kind: "select", id: "q1a", correctOptionId: "q1-ok", options: [{ id: "q1-ok", label: "house" }, { id: "q1-no", label: "book" }] }, { kind: "text", value: "." }] },
        { id: "q2", parts: [{ kind: "text", value: "It is a small " }, { kind: "select", id: "q2a", correctOptionId: "q2-ok", options: [{ id: "q2-ok", label: "bag" }, { id: "q2-no", label: "book" }] }, { kind: "text", value: "." }] },
        { id: "q3", parts: [{ kind: "text", value: "This is my " }, { kind: "select", id: "q3a", correctOptionId: "q3-ok", options: [{ id: "q3-ok", label: "book" }, { id: "q3-no", label: "pen" }] }, { kind: "text", value: "." }] },
        { id: "q4", parts: [{ kind: "text", value: "That is your " }, { kind: "select", id: "q4a", correctOptionId: "q4-ok", options: [{ id: "q4-ok", label: "pen" }, { id: "q4-no", label: "book" }] }, { kind: "text", value: "." }] },
        { id: "q5", parts: [{ kind: "text", value: "This is " }, { kind: "select", id: "q5a", correctOptionId: "q5-ok", options: [{ id: "q5-ok", label: "my" }, { id: "q5-no", label: "I" }, { id: "q5-no2", label: "me" }] }, { kind: "text", value: " book." }] },
        { id: "q6", parts: [{ kind: "text", value: "That is " }, { kind: "select", id: "q6a", correctOptionId: "q6-ok", options: [{ id: "q6-ok", label: "her" }, { id: "q6-no", label: "she" }, { id: "q6-no2", label: "he" }] }, { kind: "text", value: " bag." }] },
        { id: "q7", parts: [{ kind: "text", value: "These are " }, { kind: "select", id: "q7a", correctOptionId: "q7-ok", options: [{ id: "q7-ok", label: "our" }, { id: "q7-no", label: "we" }, { id: "q7-no2", label: "us" }] }, { kind: "text", value: " books." }] },
        { id: "q8", parts: [{ kind: "text", value: "He is a " }, { kind: "select", id: "q8a", correctOptionId: "q8-ok", options: [{ id: "q8-ok", label: "kind" }, { id: "q8-no", label: "kindly" }, { id: "q8-no2", label: "book" }] }, { kind: "text", value: " teacher." }] },
        { id: "q9", parts: [{ kind: "text", value: "It is a " }, { kind: "select", id: "q9a", correctOptionId: "q9-ok", options: [{ id: "q9-ok", label: "new" }, { id: "q9-no", label: "newly" }, { id: "q9-no2", label: "book" }] }, { kind: "text", value: " pen." }] },
        { id: "q10", parts: [{ kind: "text", value: "They are " }, { kind: "select", id: "q10a", correctOptionId: "q10-ok", options: [{ id: "q10-ok", label: "happy" }, { id: "q10-no", label: "happily" }, { id: "q10-no2", label: "book" }] }, { kind: "text", value: " students." }] },
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
        { id: "sen-1", label: "Câu 1", lines: [{ id: "s10", text: "It" }, { id: "s11", text: "is" }, { id: "s12", text: "a" }, { id: "s13", text: "big" }, { id: "s14", text: "house" }], correctOrder: ["s10", "s11", "s12", "s13", "s14"] },
        { id: "sen-2", label: "Câu 2", lines: [{ id: "s20", text: "It" }, { id: "s21", text: "is" }, { id: "s22", text: "a" }, { id: "s23", text: "small" }, { id: "s24", text: "bag" }], correctOrder: ["s20", "s21", "s22", "s23", "s24"] },
        { id: "sen-3", label: "Câu 3", lines: [{ id: "s30", text: "This" }, { id: "s31", text: "is" }, { id: "s32", text: "my" }, { id: "s33", text: "book" }], correctOrder: ["s30", "s31", "s32", "s33"] },
        { id: "sen-4", label: "Câu 4", lines: [{ id: "s40", text: "That" }, { id: "s41", text: "is" }, { id: "s42", text: "your" }, { id: "s43", text: "pen" }], correctOrder: ["s40", "s41", "s42", "s43"] },
        { id: "sen-5", label: "Câu 5", lines: [{ id: "s50", text: "His" }, { id: "s51", text: "bag" }, { id: "s52", text: "is" }, { id: "s53", text: "new" }], correctOrder: ["s50", "s51", "s52", "s53"] },
      ],
    },
    {
      type: "reading-fill",
      title: "Fill the line.\nĐiền vào dòng.",
      instruction: "Type the missing word.\nGõ từ còn thiếu.",
      passage: "It is a big house. It is a small bag. This is my book. That is your pen. His bag is new.",
      prompts: [
        { id: "rf1", label: "It ___ a big house.", correctAnswers: ["is"] },
        { id: "rf2", label: "It ___ a small bag.", correctAnswers: ["is"] },
        { id: "rf3", label: "This ___ my book.", correctAnswers: ["is"] },
        { id: "rf4", label: "That ___ your pen.", correctAnswers: ["is"] },
      ],
    },
    {
      type: "dictation",
      title: "Translate into English.\nDịch sang tiếng Anh.",
      instruction: "Read the Vietnamese sentence and write it in English.\nĐọc câu tiếng Việt rồi viết câu tiếng Anh.",
      items: [
        { id: "dic-1", text: "It is a big house.", hint: "Đó là ngôi nhà to." },
        { id: "dic-2", text: "It is a small bag.", hint: "Đó là cái cặp nhỏ." },
        { id: "dic-3", text: "This is my book.", hint: "Đây là sách của tôi." },
        { id: "dic-4", text: "That is your pen.", hint: "Kia là bút của bạn." },
        { id: "dic-5", text: "His bag is new.", hint: "Cặp của anh ấy mới." },
      ],
    },
    {
      type: "self-writing",
      title: "Write about you.\nViết về bạn.",
      instruction: "Write 3 sentences about you.\nViết 3 câu về bạn.",
      promptHints: ["It is a big house."],
      sampleTitle: "Bài gợi ý",
      sample: "It is a big house.\nIt is a small bag.\nThis is my book.\nThat is your pen.",
    },
  ],
};
