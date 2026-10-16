import { getRulesForDay } from "@/data/curriculum/month-01/day-rules";
import { createPracticeMeta } from "@/data/practice/shared";
import type { PracticeLesson } from "@/types/practice";

export const practiceDay05: PracticeLesson = {
  meta: { ...createPracticeMeta(5, "Câu hỏi với to be"), totalScreens: 8 },
  hints: {
    rules: getRulesForDay(5, ""),
    vocabulary: [
      { en: "yes", vi: "vâng" },
      { en: "no", vi: "không" },
      { en: "student", vi: "học sinh" },
      { en: "happy", vi: "vui" },
      { en: "tired", vi: "mệt" },
    ],
  },
  screens: [
    {
      type: "match",
      title: "Match the words.\nNối từ.",
      instruction: "Match each word with a picture.\nNối từ với ảnh.",
      words: [
        { id: "w-student", label: "student" },
        { id: "w-happy", label: "happy" },
        { id: "w-tired", label: "tired" },
        { id: "w-i", label: "i" },
        { id: "w-you", label: "you" },
      ],
      pairs: [
        { id: "p-student", imageUrl: "/images/practice/nouns-photo/student.jpg", imageAlt: "học sinh", label: "học sinh", correctWordId: "w-student" },
        { id: "p-happy", imageUrl: "/images/practice/adjectives/happy.jpg", imageAlt: "vui", label: "vui", correctWordId: "w-happy" },
        { id: "p-tired", imageUrl: "/images/practice/tobe/tired.jpg", imageAlt: "mệt", label: "mệt", correctWordId: "w-tired" },
        { id: "p-i", imageUrl: "/images/practice/pronouns/i.jpg", imageAlt: "i", label: "i", correctWordId: "w-i" },
        { id: "p-you", imageUrl: "/images/practice/pronouns/you.jpg", imageAlt: "you", label: "you", correctWordId: "w-you" },
      ],
    },
    {
      type: "dictation",
      title: "Make a question.\nĐặt câu hỏi.",
      instruction:
        "Read the sentence. Write a Yes/No question. Put am, is, or are before the subject.\nĐọc câu khẳng định. Viết câu hỏi Yes/No. Đưa am, is hoặc are lên trước chủ ngữ.",
      promptLabel: "Câu khẳng định",
      inputPlaceholder: "Viết câu hỏi",
      doneMessage: "Bạn đã đặt xong các câu hỏi. Bấm Tiếp.",
      items: [
        { id: "q-1", hint: "You are a student.", text: "Are you a student?" },
        { id: "q-2", hint: "She is happy.", text: "Is she happy?" },
        { id: "q-3", hint: "They are tired.", text: "Are they tired?" },
        { id: "q-4", hint: "He is busy.", text: "Is he busy?" },
        { id: "q-5", hint: "We are here.", text: "Are we here?" },
      ],
    },
    {
      type: "sentence-drag",
      title: "Fill the sentence.\nĐiền vào câu.",
      instruction: "Drag a word into the blank.\nKéo từ vào chỗ trống.",
      wordBank: [
        { id: "s1", label: "you" },
        { id: "s2", label: "I" },
        { id: "s3", label: "she" },
        { id: "s4", label: "she" },
      ],
      sentences: [
        { id: "sd1", parts: [{ kind: "text", value: "Are " }, { kind: "blank", id: "b1", correctWordId: "s1" }, { kind: "text", value: " a student?." }] },
        { id: "sd2", parts: [{ kind: "text", value: "Yes, " }, { kind: "blank", id: "b2", correctWordId: "s2" }, { kind: "text", value: " am." }] },
        { id: "sd3", parts: [{ kind: "text", value: "Is " }, { kind: "blank", id: "b3", correctWordId: "s3" }, { kind: "text", value: " happy?." }] },
        { id: "sd4", parts: [{ kind: "text", value: "No, " }, { kind: "blank", id: "b4", correctWordId: "s4" }, { kind: "text", value: " isn't." }] },
      ],
    },
    {
      type: "dropdown",
      title: "Choose the word.\nChọn từ đúng.",
      instruction: "Choose the correct word.\nChọn từ đúng.",
      questions: [
        { id: "q1", parts: [{ kind: "text", value: "Are you a " }, { kind: "select", id: "q1a", correctOptionId: "q1-ok", options: [{ id: "q1-ok", label: "student?" }, { id: "q1-no", label: "book" }] }, { kind: "text", value: "." }] },
        { id: "q2", parts: [{ kind: "text", value: "Yes, I " }, { kind: "select", id: "q2a", correctOptionId: "q2-ok", options: [{ id: "q2-ok", label: "am" }, { id: "q2-no", label: "book" }] }, { kind: "text", value: "." }] },
        { id: "q3", parts: [{ kind: "text", value: "Is she " }, { kind: "select", id: "q3a", correctOptionId: "q3-ok", options: [{ id: "q3-ok", label: "happy?" }, { id: "q3-no", label: "book" }] }, { kind: "text", value: "." }] },
        { id: "q4", parts: [{ kind: "text", value: "No, she " }, { kind: "select", id: "q4a", correctOptionId: "q4-ok", options: [{ id: "q4-ok", label: "isn't" }, { id: "q4-no", label: "book" }] }, { kind: "text", value: "." }] },
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
        { id: "sen-1", label: "Câu 1", lines: [{ id: "s10", text: "Are" }, { id: "s11", text: "you" }, { id: "s12", text: "a" }, { id: "s13", text: "student?" }], correctOrder: ["s10", "s11", "s12", "s13"] },
        { id: "sen-2", label: "Câu 2", lines: [{ id: "s20", text: "Yes," }, { id: "s21", text: "I" }, { id: "s22", text: "am" }], correctOrder: ["s20", "s21", "s22"] },
        { id: "sen-3", label: "Câu 3", lines: [{ id: "s30", text: "Is" }, { id: "s31", text: "she" }, { id: "s32", text: "happy?" }], correctOrder: ["s30", "s31", "s32"] },
        { id: "sen-4", label: "Câu 4", lines: [{ id: "s40", text: "No," }, { id: "s41", text: "she" }, { id: "s42", text: "isn't" }], correctOrder: ["s40", "s41", "s42"] },
        { id: "sen-5", label: "Câu 5", lines: [{ id: "s50", text: "Are" }, { id: "s51", text: "they" }, { id: "s52", text: "tired?" }], correctOrder: ["s50", "s51", "s52"] },
      ],
    },
    {
      type: "reading-fill",
      title: "Fill the line.\nĐiền vào dòng.",
      instruction: "Type the missing word.\nGõ từ còn thiếu.",
      passage: "Are you a student? Yes, I am. Is she happy? No, she isn't. Are they tired?",
      prompts: [
        { id: "rf1", label: "Are ___ a student?.", correctAnswers: ["you"] },
        { id: "rf2", label: "Yes, ___ am.", correctAnswers: ["I"] },
        { id: "rf3", label: "Is ___ happy?.", correctAnswers: ["she"] },
        { id: "rf4", label: "No, ___ isn't.", correctAnswers: ["she"] },
      ],
    },
    {
      type: "dictation",
      title: "Translate into English.\nDịch sang tiếng Anh.",
      instruction: "Read the Vietnamese sentence and write it in English.\nĐọc câu tiếng Việt rồi viết câu tiếng Anh.",
      items: [
        { id: "dic-1", text: "Are you a student?", hint: "Bạn là học sinh phải không?" },
        { id: "dic-2", text: "Yes, I am.", hint: "Vâng, tôi là." },
        { id: "dic-3", text: "Is she happy?", hint: "Cô ấy vui phải không?" },
        { id: "dic-4", text: "No, she isn't.", hint: "Không, cô ấy không." },
        { id: "dic-5", text: "Are they tired?", hint: "Họ mệt phải không?" },
      ],
    },
    {
      type: "self-writing",
      title: "Write about you.\nViết về bạn.",
      instruction: "Write 3 sentences about you.\nViết 3 câu về bạn.",
      promptHints: ["Are you a student?"],
      sampleTitle: "Bài gợi ý",
      sample: "Are you a student?\nYes, I am.\nIs she happy?\nNo, she isn't.",
    },
  ],
};
