import { getRulesForDay } from "@/data/curriculum/month-01/day-rules";
import { createPracticeMeta } from "@/data/practice/shared";
import type { PracticeLesson } from "@/types/practice";

export const practiceDay27: PracticeLesson = {
  meta: { ...createPracticeMeta(27, "Đọc đoạn ngắn"), totalScreens: 8 },
  hints: {
    rules: getRulesForDay(27, ""),
    vocabulary: [
      { en: "student", vi: "học sinh" },
      { en: "school", vi: "trường" },
      { en: "family", vi: "gia đình" },
      { en: "house", vi: "nhà" },
      { en: "morning", vi: "buổi sáng" },
    ],
  },
  screens: [
    {
      type: "match",
      title: "Match the words.\nNối từ.",
      instruction: "Match each word with a picture.\nNối từ với ảnh.",
      words: [
        { id: "w-student", label: "student" },
        { id: "w-school", label: "school" },
        { id: "w-family", label: "family" },
        { id: "w-house", label: "house" },
      ],
      pairs: [
        { id: "p-student", imageUrl: "/images/practice/nouns-photo/student.jpg", imageAlt: "học sinh", label: "học sinh", correctWordId: "w-student" },
        { id: "p-school", imageUrl: "/images/practice/nouns-photo/school.jpg", imageAlt: "trường", label: "trường", correctWordId: "w-school" },
        { id: "p-family", imageUrl: "/images/practice/tobe/family.jpg", imageAlt: "gia đình", label: "gia đình", correctWordId: "w-family" },
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
        { id: "c-1", label: "I am Nam.", correctCategoryId: "cat-a" },
        { id: "c-2", label: "I am a student.", correctCategoryId: "cat-a" },
        { id: "c-3", label: "I study at school in the morning.", correctCategoryId: "cat-b" },
        { id: "c-4", label: "I have a family.", correctCategoryId: "cat-b" },
        { id: "c-5", label: "There is a small house.", correctCategoryId: "cat-a" },
      ],
    },
    {
      type: "sentence-drag",
      title: "Fill the sentence.\nĐiền vào câu.",
      instruction: "Drag a word into the blank.\nKéo từ vào chỗ trống.",
      wordBank: [
        { id: "s1", label: "am" },
        { id: "s2", label: "am" },
        { id: "s3", label: "study" },
        { id: "s4", label: "have" },
      ],
      sentences: [
        { id: "sd1", parts: [{ kind: "text", value: "I " }, { kind: "blank", id: "b1", correctWordId: "s1" }, { kind: "text", value: " Nam." }] },
        { id: "sd2", parts: [{ kind: "text", value: "I " }, { kind: "blank", id: "b2", correctWordId: "s2" }, { kind: "text", value: " a student." }] },
        { id: "sd3", parts: [{ kind: "text", value: "I " }, { kind: "blank", id: "b3", correctWordId: "s3" }, { kind: "text", value: " at school in the morning." }] },
        { id: "sd4", parts: [{ kind: "text", value: "I " }, { kind: "blank", id: "b4", correctWordId: "s4" }, { kind: "text", value: " a family." }] },
      ],
    },
    {
      type: "dropdown",
      title: "Choose the word.\nChọn từ đúng.",
      instruction: "Choose the correct word.\nChọn từ đúng.",
      questions: [
        { id: "q1", parts: [{ kind: "text", value: "I am " }, { kind: "select", id: "q1a", correctOptionId: "q1-ok", options: [{ id: "q1-ok", label: "Nam" }, { id: "q1-no", label: "book" }] }, { kind: "text", value: "." }] },
        { id: "q2", parts: [{ kind: "text", value: "I am a " }, { kind: "select", id: "q2a", correctOptionId: "q2-ok", options: [{ id: "q2-ok", label: "student" }, { id: "q2-no", label: "book" }] }, { kind: "text", value: "." }] },
        { id: "q3", parts: [{ kind: "text", value: "I study at school in the " }, { kind: "select", id: "q3a", correctOptionId: "q3-ok", options: [{ id: "q3-ok", label: "morning" }, { id: "q3-no", label: "book" }] }, { kind: "text", value: "." }] },
        { id: "q4", parts: [{ kind: "text", value: "I have a " }, { kind: "select", id: "q4a", correctOptionId: "q4-ok", options: [{ id: "q4-ok", label: "family" }, { id: "q4-no", label: "book" }] }, { kind: "text", value: "." }] },
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
        { id: "sen-2", label: "Câu 2", lines: [{ id: "s20", text: "I" }, { id: "s21", text: "am" }, { id: "s22", text: "a" }, { id: "s23", text: "student" }], correctOrder: ["s20", "s21", "s22", "s23"] },
        { id: "sen-3", label: "Câu 3", lines: [{ id: "s30", text: "I" }, { id: "s31", text: "study" }, { id: "s32", text: "at" }, { id: "s33", text: "school" }, { id: "s34", text: "in" }, { id: "s35", text: "the" }, { id: "s36", text: "morning" }], correctOrder: ["s30", "s31", "s32", "s33", "s34", "s35", "s36"] },
        { id: "sen-4", label: "Câu 4", lines: [{ id: "s40", text: "I" }, { id: "s41", text: "have" }, { id: "s42", text: "a" }, { id: "s43", text: "family" }], correctOrder: ["s40", "s41", "s42", "s43"] },
        { id: "sen-5", label: "Câu 5", lines: [{ id: "s50", text: "There" }, { id: "s51", text: "is" }, { id: "s52", text: "a" }, { id: "s53", text: "small" }, { id: "s54", text: "house" }], correctOrder: ["s50", "s51", "s52", "s53", "s54"] },
      ],
    },
    {
      type: "reading-fill",
      title: "Fill the line.\nĐiền vào dòng.",
      instruction: "Type the missing word.\nGõ từ còn thiếu.",
      passage: "I am Nam. I am a student. I study at school in the morning. I have a family. There is a small house.",
      prompts: [
        { id: "rf1", label: "I ___ Nam.", correctAnswers: ["am"] },
        { id: "rf2", label: "I ___ a student.", correctAnswers: ["am"] },
        { id: "rf3", label: "I ___ at school in the morning.", correctAnswers: ["study"] },
        { id: "rf4", label: "I ___ a family.", correctAnswers: ["have"] },
      ],
    },
    {
      type: "dictation",
      title: "Translate into English.\nDịch sang tiếng Anh.",
      instruction: "Read the Vietnamese sentence and write it in English.\nĐọc câu tiếng Việt rồi viết câu tiếng Anh.",
      items: [
        { id: "dic-1", text: "I am Nam.", hint: "Tôi là Nam." },
        { id: "dic-2", text: "I am a student.", hint: "Tôi là học sinh." },
        { id: "dic-3", text: "I study at school in the morning.", hint: "Tôi học ở trường vào buổi sáng." },
        { id: "dic-4", text: "I have a family.", hint: "Tôi có một gia đình." },
        { id: "dic-5", text: "There is a small house.", hint: "Có một ngôi nhà nhỏ." },
      ],
    },
    {
      type: "self-writing",
      title: "Write about you.\nViết về bạn.",
      instruction: "Write 3 sentences about you.\nViết 3 câu về bạn.",
      promptHints: ["I am Nam."],
      sampleTitle: "Bài gợi ý",
      sample: "I am Nam.\nI am a student.\nI study at school in the morning.\nI have a family.",
    },
  ],
};
