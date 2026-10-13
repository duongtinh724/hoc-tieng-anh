import { getRulesForDay } from "@/data/curriculum/month-01/day-rules";
import { createPracticeMeta } from "@/data/practice/shared";
import type { PracticeLesson } from "@/types/practice";

export const practiceDay23: PracticeLesson = {
  meta: { ...createPracticeMeta(23, "When, why, how"), totalScreens: 8 },
  hints: {
    rules: getRulesForDay(23, ""),
    vocabulary: [
      { en: "morning", vi: "buổi sáng" },
      { en: "sad", vi: "buồn" },
      { en: "tired", vi: "mệt" },
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
        { id: "w-sad", label: "sad" },
        { id: "w-tired", label: "tired" },
        { id: "w-class", label: "class" },
        { id: "w-happy", label: "happy" },
      ],
      pairs: [
        { id: "p-sad", imageUrl: "/images/practice/adjectives/sad.jpg", imageAlt: "buồn", label: "buồn", correctWordId: "w-sad" },
        { id: "p-tired", imageUrl: "/images/practice/tobe/tired.jpg", imageAlt: "mệt", label: "mệt", correctWordId: "w-tired" },
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
        { id: "c-1", label: "When is the class?", correctCategoryId: "cat-a" },
        { id: "c-2", label: "It is in the morning.", correctCategoryId: "cat-a" },
        { id: "c-3", label: "Why are you sad?", correctCategoryId: "cat-a" },
        { id: "c-4", label: "Because I am tired.", correctCategoryId: "cat-a" },
        { id: "c-5", label: "How are you?", correctCategoryId: "cat-a" },
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
        { id: "s4", label: "I" },
      ],
      sentences: [
        { id: "sd1", parts: [{ kind: "text", value: "When " }, { kind: "blank", id: "b1", correctWordId: "s1" }, { kind: "text", value: " the class?." }] },
        { id: "sd2", parts: [{ kind: "text", value: "It " }, { kind: "blank", id: "b2", correctWordId: "s2" }, { kind: "text", value: " in the morning." }] },
        { id: "sd3", parts: [{ kind: "text", value: "Why " }, { kind: "blank", id: "b3", correctWordId: "s3" }, { kind: "text", value: " you sad?." }] },
        { id: "sd4", parts: [{ kind: "text", value: "Because " }, { kind: "blank", id: "b4", correctWordId: "s4" }, { kind: "text", value: " am tired." }] },
      ],
    },
    {
      type: "dropdown",
      title: "Choose the word.\nChọn từ đúng.",
      instruction: "Choose the correct word.\nChọn từ đúng.",
      questions: [
        { id: "q1", parts: [{ kind: "text", value: "When is the " }, { kind: "select", id: "q1a", correctOptionId: "q1-ok", options: [{ id: "q1-ok", label: "class?" }, { id: "q1-no", label: "book" }] }, { kind: "text", value: "." }] },
        { id: "q2", parts: [{ kind: "text", value: "It is in the " }, { kind: "select", id: "q2a", correctOptionId: "q2-ok", options: [{ id: "q2-ok", label: "morning" }, { id: "q2-no", label: "book" }] }, { kind: "text", value: "." }] },
        { id: "q3", parts: [{ kind: "text", value: "Why are you " }, { kind: "select", id: "q3a", correctOptionId: "q3-ok", options: [{ id: "q3-ok", label: "sad?" }, { id: "q3-no", label: "book" }] }, { kind: "text", value: "." }] },
        { id: "q4", parts: [{ kind: "text", value: "Because I am " }, { kind: "select", id: "q4a", correctOptionId: "q4-ok", options: [{ id: "q4-ok", label: "tired" }, { id: "q4-no", label: "book" }] }, { kind: "text", value: "." }] },
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
        { id: "sen-1", label: "Câu 1", lines: [{ id: "s10", text: "When" }, { id: "s11", text: "is" }, { id: "s12", text: "the" }, { id: "s13", text: "class?" }], correctOrder: ["s10", "s11", "s12", "s13"] },
        { id: "sen-2", label: "Câu 2", lines: [{ id: "s20", text: "It" }, { id: "s21", text: "is" }, { id: "s22", text: "in" }, { id: "s23", text: "the" }, { id: "s24", text: "morning" }], correctOrder: ["s20", "s21", "s22", "s23", "s24"] },
        { id: "sen-3", label: "Câu 3", lines: [{ id: "s30", text: "Why" }, { id: "s31", text: "are" }, { id: "s32", text: "you" }, { id: "s33", text: "sad?" }], correctOrder: ["s30", "s31", "s32", "s33"] },
        { id: "sen-4", label: "Câu 4", lines: [{ id: "s40", text: "Because" }, { id: "s41", text: "I" }, { id: "s42", text: "am" }, { id: "s43", text: "tired" }], correctOrder: ["s40", "s41", "s42", "s43"] },
        { id: "sen-5", label: "Câu 5", lines: [{ id: "s50", text: "How" }, { id: "s51", text: "are" }, { id: "s52", text: "you?" }], correctOrder: ["s50", "s51", "s52"] },
      ],
    },
    {
      type: "reading-fill",
      title: "Fill the line.\nĐiền vào dòng.",
      instruction: "Type the missing word.\nGõ từ còn thiếu.",
      passage: "When is the class? It is in the morning. Why are you sad? Because I am tired. How are you?",
      prompts: [
        { id: "rf1", label: "When ___ the class?.", correctAnswers: ["is"] },
        { id: "rf2", label: "It ___ in the morning.", correctAnswers: ["is"] },
        { id: "rf3", label: "Why ___ you sad?.", correctAnswers: ["are"] },
        { id: "rf4", label: "Because ___ am tired.", correctAnswers: ["I"] },
      ],
    },
    {
      type: "dictation",
      title: "Translate into English.\nDịch sang tiếng Anh.",
      instruction: "Read the Vietnamese sentence and write it in English.\nĐọc câu tiếng Việt rồi viết câu tiếng Anh.",
      items: [
        { id: "dic-1", text: "When is the class?", hint: "Lớp học khi nào?" },
        { id: "dic-2", text: "It is in the morning.", hint: "Vào buổi sáng." },
        { id: "dic-3", text: "Why are you sad?", hint: "Sao bạn buồn?" },
        { id: "dic-4", text: "Because I am tired.", hint: "Vì tôi mệt." },
        { id: "dic-5", text: "How are you?", hint: "Bạn khỏe không?" },
      ],
    },
    {
      type: "self-writing",
      title: "Write about you.\nViết về bạn.",
      instruction: "Write 3 sentences about you.\nViết 3 câu về bạn.",
      promptHints: ["When is the class?"],
      sampleTitle: "Bài gợi ý",
      sample: "When is the class?\nIt is in the morning.\nWhy are you sad?\nBecause I am tired.",
    },
  ],
};
