import { getRulesForDay } from "@/data/curriculum/month-01/day-rules";
import { createPracticeMeta } from "@/data/practice/shared";
import type { PracticeLesson } from "@/types/practice";

export const practiceDay12: PracticeLesson = {
  meta: { ...createPracticeMeta(12, "This, that, these, those"), totalScreens: 8 },
  hints: {
    rules: getRulesForDay(12, ""),
    vocabulary: [
      { en: "this", vi: "này — một, gần" },
      { en: "that", vi: "kia — một, xa" },
      { en: "these", vi: "những cái này" },
      { en: "those", vi: "những cái kia" },
      { en: "pen", vi: "bút" },
      { en: "chair", vi: "ghế" },
    ],
  },
  screens: [
    {
      type: "match",
      title: "Match the words.\nNối từ.",
      instruction: "Match each word with a picture.\nNối từ với ảnh.",
      words: [
        { id: "w-pen", label: "pen" },
        { id: "w-book", label: "book" },
        { id: "w-books", label: "books" },
        { id: "w-school", label: "school" },
        { id: "w-bag", label: "bag" },
      ],
      pairs: [
        { id: "p-pen", imageUrl: "/images/practice/nouns-photo/pen.jpg", imageAlt: "bút", label: "bút", correctWordId: "w-pen" },
        { id: "p-book", imageUrl: "/images/practice/nouns-photo/book.jpg", imageAlt: "sách", label: "một quyển sách", correctWordId: "w-book" },
        { id: "p-books", imageUrl: "/images/practice/objects/books.jpg", imageAlt: "nhiều sách", label: "nhiều sách", correctWordId: "w-books" },
        { id: "p-school", imageUrl: "/images/practice/nouns-photo/school.jpg", imageAlt: "trường", label: "trường", correctWordId: "w-school" },
        { id: "p-bag", imageUrl: "/images/practice/nouns-photo/bag.jpg", imageAlt: "cặp", label: "cặp", correctWordId: "w-bag" },
      ],
    },
    {
      type: "categorize",
      title: "Near or far? One or many?\nGần hay xa? Một hay nhiều?",
      instruction: "Drag each word into the right group.\nKéo từ vào đúng nhóm.",
      categories: [
        { id: "cat-one-near", label: "Một, gần" },
        { id: "cat-one-far", label: "Một, xa" },
        { id: "cat-many-near", label: "Nhiều, gần" },
        { id: "cat-many-far", label: "Nhiều, xa" },
      ],
      items: [
        { id: "c-this", label: "this", correctCategoryId: "cat-one-near" },
        { id: "c-that", label: "that", correctCategoryId: "cat-one-far" },
        { id: "c-these", label: "these", correctCategoryId: "cat-many-near" },
        { id: "c-those", label: "those", correctCategoryId: "cat-many-far" },
      ],
    },
    {
      type: "sentence-drag",
      title: "Fill this, that, these, or those.\nĐiền this, that, these hoặc those.",
      instruction: "Near or far? One or many?\nGần hay xa? Một hay nhiều?",
      wordBank: [
        { id: "s1", label: "This" },
        { id: "s2", label: "That" },
        { id: "s3", label: "These" },
        { id: "s4", label: "Those" },
        { id: "s5", label: "This" },
      ],
      sentences: [
        { id: "sd1", parts: [{ kind: "blank", id: "b1", correctWordId: "s1", width: "sm" }, { kind: "text", value: " is my pen. (gần)" }] },
        { id: "sd2", parts: [{ kind: "blank", id: "b2", correctWordId: "s2", width: "sm" }, { kind: "text", value: " is a car over there." }] },
        { id: "sd3", parts: [{ kind: "blank", id: "b3", correctWordId: "s3", width: "sm" }, { kind: "text", value: " are my books. (gần)" }] },
        { id: "sd4", parts: [{ kind: "blank", id: "b4", correctWordId: "s4", width: "sm" }, { kind: "text", value: " are houses over there." }] },
        { id: "sd5", parts: [{ kind: "blank", id: "b5", correctWordId: "s5", width: "sm" }, { kind: "text", value: " is an apple in my hand." }] },
      ],
    },
    {
      type: "dropdown",
      title: "is or are?\nis hay are?",
      instruction: "This and that go with is. These and those go with are.\nThis và that đi với is. These và those đi với are.",
      questions: [
        { id: "q1", parts: [{ kind: "text", value: "This " }, { kind: "select", id: "q1a", correctOptionId: "q1-ok", options: [{ id: "q1-ok", label: "is" }, { id: "q1-no", label: "are" }] }, { kind: "text", value: " a book." }] },
        { id: "q2", parts: [{ kind: "text", value: "These " }, { kind: "select", id: "q2a", correctOptionId: "q2-ok", options: [{ id: "q2-ok", label: "are" }, { id: "q2-no", label: "is" }] }, { kind: "text", value: " my friends." }] },
        { id: "q3", parts: [{ kind: "text", value: "That " }, { kind: "select", id: "q3a", correctOptionId: "q3-ok", options: [{ id: "q3-ok", label: "is" }, { id: "q3-no", label: "are" }] }, { kind: "text", value: " a school." }] },
        { id: "q4", parts: [{ kind: "text", value: "Those " }, { kind: "select", id: "q4a", correctOptionId: "q4-ok", options: [{ id: "q4-ok", label: "are" }, { id: "q4-no", label: "is" }] }, { kind: "text", value: " cars." }] },
        { id: "q5", parts: [{ kind: "text", value: "This " }, { kind: "select", id: "q5a", correctOptionId: "q5-ok", options: [{ id: "q5-ok", label: "is" }, { id: "q5-no", label: "are" }] }, { kind: "text", value: " an orange." }] },
        { id: "q6", parts: [{ kind: "text", value: "These " }, { kind: "select", id: "q6a", correctOptionId: "q6-ok", options: [{ id: "q6-ok", label: "are" }, { id: "q6-no", label: "is" }] }, { kind: "text", value: " pens." }] },
        { id: "q7", parts: [{ kind: "text", value: "That " }, { kind: "select", id: "q7a", correctOptionId: "q7-ok", options: [{ id: "q7-ok", label: "is" }, { id: "q7-no", label: "are" }] }, { kind: "text", value: " a hospital." }] },
        { id: "q8", parts: [{ kind: "text", value: "Those " }, { kind: "select", id: "q8a", correctOptionId: "q8-ok", options: [{ id: "q8-ok", label: "are" }, { id: "q8-no", label: "is" }] }, { kind: "text", value: " books." }] },
        { id: "q9", parts: [{ kind: "text", value: "This " }, { kind: "select", id: "q9a", correctOptionId: "q9-ok", options: [{ id: "q9-ok", label: "is" }, { id: "q9-no", label: "are" }] }, { kind: "text", value: " my bag." }] },
        { id: "q10", parts: [{ kind: "text", value: "Those " }, { kind: "select", id: "q10a", correctOptionId: "q10-ok", options: [{ id: "q10-ok", label: "are" }, { id: "q10-no", label: "is" }] }, { kind: "text", value: " my friends." }] },
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
        { id: "sen-1", label: "Câu 1", lines: [{ id: "s10", text: "This" }, { id: "s11", text: "is" }, { id: "s12", text: "a" }, { id: "s13", text: "pen" }], correctOrder: ["s10", "s11", "s12", "s13"] },
        { id: "sen-2", label: "Câu 2", lines: [{ id: "s20", text: "That" }, { id: "s21", text: "is" }, { id: "s22", text: "a" }, { id: "s23", text: "school" }], correctOrder: ["s20", "s21", "s22", "s23"] },
        { id: "sen-3", label: "Câu 3", lines: [{ id: "s30", text: "These" }, { id: "s31", text: "are" }, { id: "s32", text: "books" }], correctOrder: ["s30", "s31", "s32"] },
        { id: "sen-4", label: "Câu 4", lines: [{ id: "s40", text: "Those" }, { id: "s41", text: "are" }, { id: "s42", text: "cars" }], correctOrder: ["s40", "s41", "s42"] },
        { id: "sen-5", label: "Câu 5", lines: [{ id: "s50", text: "These" }, { id: "s51", text: "are" }, { id: "s52", text: "students" }], correctOrder: ["s50", "s51", "s52"] },
      ],
    },
    {
      type: "reading-fill",
      title: "Fill the line.\nĐiền vào dòng.",
      instruction: "Type this, that, these, or those.\nGõ this, that, these hoặc those.",
      passage: "This is my pen. That is a car. These are my books. Those are houses.",
      prompts: [
        { id: "rf1", label: "___ is my pen. (gần)", correctAnswers: ["This", "this"] },
        { id: "rf2", label: "___ is a car over there.", correctAnswers: ["That", "that"] },
        { id: "rf3", label: "___ are my books. (gần)", correctAnswers: ["These", "these"] },
        { id: "rf4", label: "___ are houses over there.", correctAnswers: ["Those", "those"] },
      ],
    },
    {
      type: "dictation",
      title: "Translate into English.\nDịch sang tiếng Anh.",
      instruction: "Read the Vietnamese sentence and write it in English.\nĐọc câu tiếng Việt rồi viết câu tiếng Anh.",
      items: [
        { id: "dic-1", text: "This is a pen.", hint: "Đây là một chiếc bút." },
        { id: "dic-2", text: "That is a school.", hint: "Kia là một ngôi trường." },
        { id: "dic-3", text: "These are books.", hint: "Đây là những quyển sách." },
        { id: "dic-4", text: "Those are cars.", hint: "Kia là những chiếc xe." },
      ],
    },
    {
      type: "self-writing",
      title: "Point and say.\nChỉ và nói.",
      instruction: "Write 6 sentences with this, that, these, and those.\nViết 6 câu có this, that, these và those.",
      promptHints: ["This is a pen.", "That is a school.", "These are books.", "Those are cars."],
      sampleTitle: "Bài gợi ý",
      sample: "This is a pen.\nThat is a car.\nThese are books.\nThose are chairs.\nThis is an apple.\nThese are my friends.",
    },
  ],
};
