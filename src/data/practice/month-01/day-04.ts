import { getRulesForDay } from "@/data/curriculum/month-01/day-rules";
import { createPracticeMeta } from "@/data/practice/shared";
import type { PracticeLesson } from "@/types/practice";

export const practiceDay04: PracticeLesson = {
  meta: { ...createPracticeMeta(4, "Câu phủ định với to be"), totalScreens: 8 },
  hints: {
    rules: getRulesForDay(4, ""),
    vocabulary: [
      { en: "sad", vi: "buồn" },
      { en: "busy", vi: "bận" },
      { en: "tired", vi: "mệt" },
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
        { id: "w-sad", label: "sad" },
        { id: "w-busy", label: "busy" },
        { id: "w-tired", label: "tired" },
        { id: "w-here", label: "here" },
        { id: "w-there", label: "there" },
      ],
      pairs: [
        { id: "p-sad", imageUrl: "/images/practice/adjectives/sad.jpg", imageAlt: "buồn", label: "buồn", correctWordId: "w-sad" },
        { id: "p-busy", imageUrl: "/images/practice/tobe/busy.jpg", imageAlt: "bận", label: "bận", correctWordId: "w-busy" },
        { id: "p-tired", imageUrl: "/images/practice/tobe/tired.jpg", imageAlt: "mệt", label: "mệt", correctWordId: "w-tired" },
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
        { id: "c-1", label: "I am not sad.", correctCategoryId: "cat-a" },
        { id: "c-2", label: "He is not busy.", correctCategoryId: "cat-a" },
        { id: "c-3", label: "She isn't tired.", correctCategoryId: "cat-a" },
        { id: "c-4", label: "It is not here.", correctCategoryId: "cat-a" },
        { id: "c-5", label: "We are not there.", correctCategoryId: "cat-a" },
        { id: "c-x", label: "I like music.", correctCategoryId: "cat-b" },
      ],
    },
    {
      type: "sentence-drag",
      title: "Fill the sentence.\nĐiền vào câu.",
      instruction: "Drag a word into the blank.\nKéo từ vào chỗ trống.",
      wordBank: [
        { id: "s1", label: "am" },
        { id: "s2", label: "is" },
        { id: "s3", label: "isn't" },
        { id: "s4", label: "is" },
      ],
      sentences: [
        { id: "sd1", parts: [{ kind: "text", value: "I " }, { kind: "blank", id: "b1", correctWordId: "s1" }, { kind: "text", value: " not sad." }] },
        { id: "sd2", parts: [{ kind: "text", value: "He " }, { kind: "blank", id: "b2", correctWordId: "s2" }, { kind: "text", value: " not busy." }] },
        { id: "sd3", parts: [{ kind: "text", value: "She " }, { kind: "blank", id: "b3", correctWordId: "s3" }, { kind: "text", value: " tired." }] },
        { id: "sd4", parts: [{ kind: "text", value: "It " }, { kind: "blank", id: "b4", correctWordId: "s4" }, { kind: "text", value: " not here." }] },
      ],
    },
    {
      type: "dropdown",
      title: "Choose the word.\nChọn từ đúng.",
      instruction: "Choose the correct word.\nChọn từ đúng.",
      questions: [
        { id: "q1", parts: [{ kind: "text", value: "I am not " }, { kind: "select", id: "q1a", correctOptionId: "q1-ok", options: [{ id: "q1-ok", label: "sad" }, { id: "q1-no", label: "book" }] }, { kind: "text", value: "." }] },
        { id: "q2", parts: [{ kind: "text", value: "He is not " }, { kind: "select", id: "q2a", correctOptionId: "q2-ok", options: [{ id: "q2-ok", label: "busy" }, { id: "q2-no", label: "book" }] }, { kind: "text", value: "." }] },
        { id: "q3", parts: [{ kind: "text", value: "She isn't " }, { kind: "select", id: "q3a", correctOptionId: "q3-ok", options: [{ id: "q3-ok", label: "tired" }, { id: "q3-no", label: "book" }] }, { kind: "text", value: "." }] },
        { id: "q4", parts: [{ kind: "text", value: "It is not " }, { kind: "select", id: "q4a", correctOptionId: "q4-ok", options: [{ id: "q4-ok", label: "here" }, { id: "q4-no", label: "book" }] }, { kind: "text", value: "." }] },
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
        { id: "sen-1", label: "Câu 1", lines: [{ id: "s10", text: "I" }, { id: "s11", text: "am" }, { id: "s12", text: "not" }, { id: "s13", text: "sad" }], correctOrder: ["s10", "s11", "s12", "s13"] },
        { id: "sen-2", label: "Câu 2", lines: [{ id: "s20", text: "He" }, { id: "s21", text: "is" }, { id: "s22", text: "not" }, { id: "s23", text: "busy" }], correctOrder: ["s20", "s21", "s22", "s23"] },
        { id: "sen-3", label: "Câu 3", lines: [{ id: "s30", text: "She" }, { id: "s31", text: "isn't" }, { id: "s32", text: "tired" }], correctOrder: ["s30", "s31", "s32"] },
        { id: "sen-4", label: "Câu 4", lines: [{ id: "s40", text: "It" }, { id: "s41", text: "is" }, { id: "s42", text: "not" }, { id: "s43", text: "here" }], correctOrder: ["s40", "s41", "s42", "s43"] },
        { id: "sen-5", label: "Câu 5", lines: [{ id: "s50", text: "We" }, { id: "s51", text: "are" }, { id: "s52", text: "not" }, { id: "s53", text: "there" }], correctOrder: ["s50", "s51", "s52", "s53"] },
      ],
    },
    {
      type: "reading-fill",
      title: "Fill the line.\nĐiền vào dòng.",
      instruction: "Type the missing word.\nGõ từ còn thiếu.",
      passage: "I am not sad. He is not busy. She isn't tired. It is not here. We are not there.",
      prompts: [
        { id: "rf1", label: "I ___ not sad.", correctAnswers: ["am"] },
        { id: "rf2", label: "He ___ not busy.", correctAnswers: ["is"] },
        { id: "rf3", label: "She ___ tired.", correctAnswers: ["isn't"] },
        { id: "rf4", label: "It ___ not here.", correctAnswers: ["is"] },
      ],
    },
    {
      type: "dictation",
      title: "Translate into English.\nDịch sang tiếng Anh.",
      instruction: "Read the Vietnamese sentence and write it in English.\nĐọc câu tiếng Việt rồi viết câu tiếng Anh.",
      items: [
        { id: "dic-1", text: "I am not sad.", hint: "Tôi không buồn." },
        { id: "dic-2", text: "He is not busy.", hint: "Anh ấy không bận." },
        { id: "dic-3", text: "She isn't tired.", hint: "Cô ấy không mệt." },
        { id: "dic-4", text: "It is not here.", hint: "Nó không ở đây." },
        { id: "dic-5", text: "We are not there.", hint: "Chúng tôi không ở đó." },
      ],
    },
    {
      type: "self-writing",
      title: "Write about you.\nViết về bạn.",
      instruction: "Write 3 sentences about you.\nViết 3 câu về bạn.",
      promptHints: ["I am not sad."],
      sampleTitle: "Bài gợi ý",
      sample: "I am not sad.\nHe is not busy.\nShe isn't tired.\nIt is not here.",
    },
  ],
};
