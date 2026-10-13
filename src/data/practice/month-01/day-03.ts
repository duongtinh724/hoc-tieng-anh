import { getRulesForDay } from "@/data/curriculum/month-01/day-rules";
import { createPracticeMeta } from "@/data/practice/shared";
import type { PracticeLesson } from "@/types/practice";

export const practiceDay03: PracticeLesson = {
  meta: { ...createPracticeMeta(3, "Câu khẳng định với to be"), totalScreens: 8 },
  hints: {
    rules: getRulesForDay(3, ""),
    vocabulary: [
      { en: "tired", vi: "mệt" },
      { en: "busy", vi: "bận" },
      { en: "fifteen", vi: "15" },
      { en: "class", vi: "lớp" },
      { en: "happy", vi: "vui" },
    ],
  },
  screens: [
    {
      type: "match",
      title: "Match the words.\nNối từ.",
      instruction: "Match each word with a picture.\nNối từ với ảnh.",
      words: [
        { id: "w-tired", label: "tired" },
        { id: "w-busy", label: "busy" },
        { id: "w-fifteen", label: "fifteen" },
        { id: "w-class", label: "class" },
        { id: "w-happy", label: "happy" },
      ],
      pairs: [
        { id: "p-tired", imageUrl: "/images/practice/tobe/tired.jpg", imageAlt: "mệt", label: "mệt", correctWordId: "w-tired" },
        { id: "p-busy", imageUrl: "/images/practice/tobe/busy.jpg", imageAlt: "bận", label: "bận", correctWordId: "w-busy" },
        { id: "p-fifteen", imageUrl: "/images/practice/tobe/fifteen.jpg", imageAlt: "15", label: "15", correctWordId: "w-fifteen" },
        { id: "p-class", imageUrl: "/images/practice/tobe/class.jpg", imageAlt: "lớp", label: "lớp", correctWordId: "w-class" },
        { id: "p-happy", imageUrl: "/images/practice/adjectives/happy.jpg", imageAlt: "vui", label: "vui", correctWordId: "w-happy" },
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
        { id: "c-1", label: "I am Nam.", correctCategoryId: "cat-a" },
        { id: "c-2", label: "I am fifteen.", correctCategoryId: "cat-a" },
        { id: "c-3", label: "You are busy.", correctCategoryId: "cat-a" },
        { id: "c-4", label: "She is tired.", correctCategoryId: "cat-a" },
        { id: "c-5", label: "We are in class.", correctCategoryId: "cat-a" },
        { id: "c-x", label: "I like music.", correctCategoryId: "cat-b" },
      ],
    },
    {
      type: "sentence-drag",
      title: "Fill the sentence.\nĐiền vào câu.",
      instruction: "Drag a word into the blank.\nKéo từ vào chỗ trống.",
      wordBank: [
        { id: "s1", label: "am" },
        { id: "s2", label: "am" },
        { id: "s3", label: "are" },
        { id: "s4", label: "is" },
      ],
      sentences: [
        { id: "sd1", parts: [{ kind: "text", value: "I " }, { kind: "blank", id: "b1", correctWordId: "s1" }, { kind: "text", value: " Nam." }] },
        { id: "sd2", parts: [{ kind: "text", value: "I " }, { kind: "blank", id: "b2", correctWordId: "s2" }, { kind: "text", value: " fifteen." }] },
        { id: "sd3", parts: [{ kind: "text", value: "You " }, { kind: "blank", id: "b3", correctWordId: "s3" }, { kind: "text", value: " busy." }] },
        { id: "sd4", parts: [{ kind: "text", value: "She " }, { kind: "blank", id: "b4", correctWordId: "s4" }, { kind: "text", value: " tired." }] },
      ],
    },
    {
      type: "dropdown",
      title: "Choose the word.\nChọn từ đúng.",
      instruction: "Choose the correct word.\nChọn từ đúng.",
      questions: [
        { id: "q1", parts: [{ kind: "text", value: "I am " }, { kind: "select", id: "q1a", correctOptionId: "q1-ok", options: [{ id: "q1-ok", label: "Nam" }, { id: "q1-no", label: "book" }] }, { kind: "text", value: "." }] },
        { id: "q2", parts: [{ kind: "text", value: "I am " }, { kind: "select", id: "q2a", correctOptionId: "q2-ok", options: [{ id: "q2-ok", label: "fifteen" }, { id: "q2-no", label: "book" }] }, { kind: "text", value: "." }] },
        { id: "q3", parts: [{ kind: "text", value: "You are " }, { kind: "select", id: "q3a", correctOptionId: "q3-ok", options: [{ id: "q3-ok", label: "busy" }, { id: "q3-no", label: "book" }] }, { kind: "text", value: "." }] },
        { id: "q4", parts: [{ kind: "text", value: "She is " }, { kind: "select", id: "q4a", correctOptionId: "q4-ok", options: [{ id: "q4-ok", label: "tired" }, { id: "q4-no", label: "book" }] }, { kind: "text", value: "." }] },
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
        { id: "sen-1", label: "Câu 1", lines: [{ id: "s10", text: "I" }, { id: "s11", text: "am" }, { id: "s12", text: "Nam" }], correctOrder: ["s10", "s11", "s12"] },
        { id: "sen-2", label: "Câu 2", lines: [{ id: "s20", text: "I" }, { id: "s21", text: "am" }, { id: "s22", text: "fifteen" }], correctOrder: ["s20", "s21", "s22"] },
        { id: "sen-3", label: "Câu 3", lines: [{ id: "s30", text: "You" }, { id: "s31", text: "are" }, { id: "s32", text: "busy" }], correctOrder: ["s30", "s31", "s32"] },
        { id: "sen-4", label: "Câu 4", lines: [{ id: "s40", text: "She" }, { id: "s41", text: "is" }, { id: "s42", text: "tired" }], correctOrder: ["s40", "s41", "s42"] },
        { id: "sen-5", label: "Câu 5", lines: [{ id: "s50", text: "We" }, { id: "s51", text: "are" }, { id: "s52", text: "in" }, { id: "s53", text: "class" }], correctOrder: ["s50", "s51", "s52", "s53"] },
      ],
    },
    {
      type: "reading-fill",
      title: "Fill the line.\nĐiền vào dòng.",
      instruction: "Type the missing word.\nGõ từ còn thiếu.",
      passage: "I am Nam. I am fifteen. You are busy. She is tired. We are in class.",
      prompts: [
        { id: "rf1", label: "I ___ Nam.", correctAnswers: ["am"] },
        { id: "rf2", label: "I ___ fifteen.", correctAnswers: ["am"] },
        { id: "rf3", label: "You ___ busy.", correctAnswers: ["are"] },
        { id: "rf4", label: "She ___ tired.", correctAnswers: ["is"] },
      ],
    },
    {
      type: "dictation",
      title: "Translate into English.\nDịch sang tiếng Anh.",
      instruction: "Read the Vietnamese sentence and write it in English.\nĐọc câu tiếng Việt rồi viết câu tiếng Anh.",
      items: [
        { id: "dic-1", text: "I am Nam.", hint: "Tôi là Nam." },
        { id: "dic-2", text: "I am fifteen.", hint: "Tôi 15 tuổi." },
        { id: "dic-3", text: "You are busy.", hint: "Bạn đang bận." },
        { id: "dic-4", text: "She is tired.", hint: "Cô ấy mệt." },
        { id: "dic-5", text: "We are in class.", hint: "Chúng tôi đang ở lớp." },
      ],
    },
    {
      type: "self-writing",
      title: "Write about you.\nViết về bạn.",
      instruction: "Write 3 sentences about you.\nViết 3 câu về bạn.",
      promptHints: ["I am Nam."],
      sampleTitle: "Bài gợi ý",
      sample: "I am Nam.\nI am fifteen.\nYou are busy.\nShe is tired.",
    },
  ],
};
