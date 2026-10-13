import { getRulesForDay } from "@/data/curriculum/month-01/day-rules";
import { createPracticeMeta } from "@/data/practice/shared";
import type { PracticeLesson } from "@/types/practice";

export const practiceDay24: PracticeLesson = {
  meta: { ...createPracticeMeta(24, "Giới từ nơi chốn"), totalScreens: 8 },
  hints: {
    rules: getRulesForDay(24, ""),
    vocabulary: [
      { en: "bag", vi: "cặp" },
      { en: "book", vi: "sách" },
      { en: "school", vi: "trường" },
      { en: "house", vi: "nhà" },
      { en: "pen", vi: "bút" },
    ],
  },
  screens: [
    {
      type: "match",
      title: "Match the words.\nNối từ.",
      instruction: "Match each word with a picture.\nNối từ với ảnh.",
      words: [
        { id: "w-bag", label: "bag" },
        { id: "w-book", label: "book" },
        { id: "w-school", label: "school" },
        { id: "w-house", label: "house" },
        { id: "w-pen", label: "pen" },
      ],
      pairs: [
        { id: "p-bag", imageUrl: "/images/practice/nouns-photo/bag.jpg", imageAlt: "cặp", label: "cặp", correctWordId: "w-bag" },
        { id: "p-book", imageUrl: "/images/practice/nouns-photo/book.jpg", imageAlt: "sách", label: "sách", correctWordId: "w-book" },
        { id: "p-school", imageUrl: "/images/practice/nouns-photo/school.jpg", imageAlt: "trường", label: "trường", correctWordId: "w-school" },
        { id: "p-house", imageUrl: "/images/practice/nouns-photo/house.jpg", imageAlt: "nhà", label: "nhà", correctWordId: "w-house" },
        { id: "p-pen", imageUrl: "/images/practice/nouns-photo/pen.jpg", imageAlt: "bút", label: "bút", correctWordId: "w-pen" },
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
        { id: "c-1", label: "The pen is in the bag.", correctCategoryId: "cat-a" },
        { id: "c-2", label: "The book is on the bag.", correctCategoryId: "cat-a" },
        { id: "c-3", label: "I am at school.", correctCategoryId: "cat-a" },
        { id: "c-4", label: "The pen is under the book.", correctCategoryId: "cat-a" },
        { id: "c-5", label: "She is at home.", correctCategoryId: "cat-a" },
        { id: "c-x", label: "I like music.", correctCategoryId: "cat-b" },
      ],
    },
    {
      type: "sentence-drag",
      title: "Fill the sentence.\nĐiền vào câu.",
      instruction: "Drag a word into the blank.\nKéo từ vào chỗ trống.",
      wordBank: [
        { id: "s1", label: "pen" },
        { id: "s2", label: "book" },
        { id: "s3", label: "am" },
        { id: "s4", label: "pen" },
      ],
      sentences: [
        { id: "sd1", parts: [{ kind: "text", value: "The " }, { kind: "blank", id: "b1", correctWordId: "s1" }, { kind: "text", value: " is in the bag." }] },
        { id: "sd2", parts: [{ kind: "text", value: "The " }, { kind: "blank", id: "b2", correctWordId: "s2" }, { kind: "text", value: " is on the bag." }] },
        { id: "sd3", parts: [{ kind: "text", value: "I " }, { kind: "blank", id: "b3", correctWordId: "s3" }, { kind: "text", value: " at school." }] },
        { id: "sd4", parts: [{ kind: "text", value: "The " }, { kind: "blank", id: "b4", correctWordId: "s4" }, { kind: "text", value: " is under the book." }] },
      ],
    },
    {
      type: "dropdown",
      title: "Choose the word.\nChọn từ đúng.",
      instruction: "Choose the correct word.\nChọn từ đúng.",
      questions: [
        { id: "q1", parts: [{ kind: "text", value: "The pen is in the " }, { kind: "select", id: "q1a", correctOptionId: "q1-ok", options: [{ id: "q1-ok", label: "bag" }, { id: "q1-no", label: "book" }] }, { kind: "text", value: "." }] },
        { id: "q2", parts: [{ kind: "text", value: "The book is on the " }, { kind: "select", id: "q2a", correctOptionId: "q2-ok", options: [{ id: "q2-ok", label: "bag" }, { id: "q2-no", label: "book" }] }, { kind: "text", value: "." }] },
        { id: "q3", parts: [{ kind: "text", value: "I am at " }, { kind: "select", id: "q3a", correctOptionId: "q3-ok", options: [{ id: "q3-ok", label: "school" }, { id: "q3-no", label: "book" }] }, { kind: "text", value: "." }] },
        { id: "q4", parts: [{ kind: "text", value: "The pen is under the " }, { kind: "select", id: "q4a", correctOptionId: "q4-ok", options: [{ id: "q4-ok", label: "book" }, { id: "q4-no", label: "pen" }] }, { kind: "text", value: "." }] },
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
        { id: "sen-1", label: "Câu 1", lines: [{ id: "s10", text: "The" }, { id: "s11", text: "pen" }, { id: "s12", text: "is" }, { id: "s13", text: "in" }, { id: "s14", text: "the" }, { id: "s15", text: "bag" }], correctOrder: ["s10", "s11", "s12", "s13", "s14", "s15"] },
        { id: "sen-2", label: "Câu 2", lines: [{ id: "s20", text: "The" }, { id: "s21", text: "book" }, { id: "s22", text: "is" }, { id: "s23", text: "on" }, { id: "s24", text: "the" }, { id: "s25", text: "bag" }], correctOrder: ["s20", "s21", "s22", "s23", "s24", "s25"] },
        { id: "sen-3", label: "Câu 3", lines: [{ id: "s30", text: "I" }, { id: "s31", text: "am" }, { id: "s32", text: "at" }, { id: "s33", text: "school" }], correctOrder: ["s30", "s31", "s32", "s33"] },
        { id: "sen-4", label: "Câu 4", lines: [{ id: "s40", text: "The" }, { id: "s41", text: "pen" }, { id: "s42", text: "is" }, { id: "s43", text: "under" }, { id: "s44", text: "the" }, { id: "s45", text: "book" }], correctOrder: ["s40", "s41", "s42", "s43", "s44", "s45"] },
        { id: "sen-5", label: "Câu 5", lines: [{ id: "s50", text: "She" }, { id: "s51", text: "is" }, { id: "s52", text: "at" }, { id: "s53", text: "home" }], correctOrder: ["s50", "s51", "s52", "s53"] },
      ],
    },
    {
      type: "reading-fill",
      title: "Fill the line.\nĐiền vào dòng.",
      instruction: "Type the missing word.\nGõ từ còn thiếu.",
      passage: "The pen is in the bag. The book is on the bag. I am at school. The pen is under the book. She is at home.",
      prompts: [
        { id: "rf1", label: "The ___ is in the bag.", correctAnswers: ["pen"] },
        { id: "rf2", label: "The ___ is on the bag.", correctAnswers: ["book"] },
        { id: "rf3", label: "I ___ at school.", correctAnswers: ["am"] },
        { id: "rf4", label: "The ___ is under the book.", correctAnswers: ["pen"] },
      ],
    },
    {
      type: "dictation",
      title: "Translate into English.\nDịch sang tiếng Anh.",
      instruction: "Read the Vietnamese sentence and write it in English.\nĐọc câu tiếng Việt rồi viết câu tiếng Anh.",
      items: [
        { id: "dic-1", text: "The pen is in the bag.", hint: "Bút ở trong cặp." },
        { id: "dic-2", text: "The book is on the bag.", hint: "Sách ở trên cặp." },
        { id: "dic-3", text: "I am at school.", hint: "Tôi ở trường." },
        { id: "dic-4", text: "The pen is under the book.", hint: "Bút ở dưới sách." },
        { id: "dic-5", text: "She is at home.", hint: "Cô ấy ở nhà." },
      ],
    },
    {
      type: "self-writing",
      title: "Write about you.\nViết về bạn.",
      instruction: "Write 3 sentences about you.\nViết 3 câu về bạn.",
      promptHints: ["The pen is in the bag."],
      sampleTitle: "Bài gợi ý",
      sample: "The pen is in the bag.\nThe book is on the bag.\nI am at school.\nThe pen is under the book.",
    },
  ],
};
