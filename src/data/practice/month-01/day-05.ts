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
      { en: "happy", vi: "vui" },
      { en: "busy", vi: "bận" },
      { en: "ready", vi: "sẵn sàng" },
    ],
  },
  screens: [
    {
      type: "match",
      title: "Match the words.\nNối từ.",
      instruction: "Match each word with a picture.\nNối từ với ảnh.",
      words: [
        { id: "w-yes", label: "yes" },
        { id: "w-no", label: "no" },
        { id: "w-happy", label: "happy" },
        { id: "w-busy", label: "busy" },
        { id: "w-question", label: "question" },
      ],
      pairs: [
        { id: "p-yes", imageUrl: "/images/practice/tobe/yes.jpg", imageAlt: "vâng", label: "vâng", correctWordId: "w-yes" },
        { id: "p-no", imageUrl: "/images/practice/tobe/no.jpg", imageAlt: "không", label: "không", correctWordId: "w-no" },
        { id: "p-happy", imageUrl: "/images/practice/adjectives/happy.jpg", imageAlt: "vui", label: "vui", correctWordId: "w-happy" },
        { id: "p-busy", imageUrl: "/images/practice/tobe/busy.jpg", imageAlt: "bận", label: "bận", correctWordId: "w-busy" },
        { id: "p-question", imageUrl: "/images/practice/tobe/question.jpg", imageAlt: "câu hỏi", label: "câu hỏi", correctWordId: "w-question" },
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
        { id: "q-1", hint: "You are happy.", text: "Are you happy?" },
        { id: "q-2", hint: "He is a teacher.", text: "Is he a teacher?" },
        { id: "q-3", hint: "They are at home.", text: "Are they at home?" },
        { id: "q-4", hint: "She is tired.", text: "Is she tired?" },
        { id: "q-5", hint: "We are late.", text: "Are we late?" },
      ],
    },
    {
      type: "sentence-drag",
      title: "Short answers.\nTrả lời ngắn.",
      instruction: "Drag the short answer. Are you…? uses I, not you.\nKéo câu trả lời ngắn. Are you…? dùng I, không dùng you.",
      wordBank: [
        { id: "s1", label: "I am" },
        { id: "s2", label: "he isn't" },
        { id: "s3", label: "they are" },
        { id: "s4", label: "she isn't" },
        { id: "s5", label: "I'm not" },
      ],
      sentences: [
        { id: "sd1", parts: [{ kind: "text", value: "Are you a student? Yes, " }, { kind: "blank", id: "b1", correctWordId: "s1", width: "md" }, { kind: "text", value: "." }] },
        { id: "sd2", parts: [{ kind: "text", value: "Is he tired? No, " }, { kind: "blank", id: "b2", correctWordId: "s2", width: "md" }, { kind: "text", value: "." }] },
        { id: "sd3", parts: [{ kind: "text", value: "Are they busy? Yes, " }, { kind: "blank", id: "b3", correctWordId: "s3", width: "md" }, { kind: "text", value: "." }] },
        { id: "sd4", parts: [{ kind: "text", value: "Is she at home? No, " }, { kind: "blank", id: "b4", correctWordId: "s4", width: "md" }, { kind: "text", value: "." }] },
        { id: "sd5", parts: [{ kind: "text", value: "Are you happy? No, " }, { kind: "blank", id: "b5", correctWordId: "s5", width: "md" }, { kind: "text", value: "." }] },
      ],
    },
    {
      type: "dropdown",
      title: "Choose the answer.\nChọn câu trả lời.",
      instruction: "Choose the short answer.\nChọn câu trả lời ngắn.",
      questions: [
        { id: "q1", parts: [{ kind: "text", value: "Are you happy? Yes, " }, { kind: "select", id: "q1a", correctOptionId: "q1-ok", options: [{ id: "q1-ok", label: "I am" }, { id: "q1-no", label: "you are" }, { id: "q1-no2", label: "I is" }] }, { kind: "text", value: "." }] },
        { id: "q2", parts: [{ kind: "text", value: "Is he a student? No, " }, { kind: "select", id: "q2a", correctOptionId: "q2-ok", options: [{ id: "q2-ok", label: "he isn't" }, { id: "q2-no", label: "he aren't" }, { id: "q2-no2", label: "he am not" }] }, { kind: "text", value: "." }] },
        { id: "q3", parts: [{ kind: "text", value: "Are they at home? Yes, " }, { kind: "select", id: "q3a", correctOptionId: "q3-ok", options: [{ id: "q3-ok", label: "they are" }, { id: "q3-no", label: "they is" }, { id: "q3-no2", label: "they am" }] }, { kind: "text", value: "." }] },
        { id: "q4", parts: [{ kind: "text", value: "Is she busy? No, " }, { kind: "select", id: "q4a", correctOptionId: "q4-ok", options: [{ id: "q4-ok", label: "she isn't" }, { id: "q4-no", label: "she aren't" }, { id: "q4-no2", label: "she not" }] }, { kind: "text", value: "." }] },
      ],
    },
    {
      type: "reorder",
      layout: "horizontal",
      title: "Order the question.\nSắp xếp câu hỏi.",
      instruction: "Drag the words into a question. Am, is, or are comes first.\nKéo các từ thành câu hỏi. Am, is hoặc are đứng đầu.",
      lines: [],
      correctOrder: [],
      sentences: [
        { id: "sen-1", label: "Câu 1", lines: [{ id: "s10", text: "Are" }, { id: "s11", text: "you" }, { id: "s12", text: "happy?" }], correctOrder: ["s10", "s11", "s12"] },
        { id: "sen-2", label: "Câu 2", lines: [{ id: "s20", text: "Is" }, { id: "s21", text: "he" }, { id: "s22", text: "a" }, { id: "s23", text: "teacher?" }], correctOrder: ["s20", "s21", "s22", "s23"] },
        { id: "sen-3", label: "Câu 3", lines: [{ id: "s30", text: "Are" }, { id: "s31", text: "they" }, { id: "s32", text: "at" }, { id: "s33", text: "home?" }], correctOrder: ["s30", "s31", "s32", "s33"] },
        { id: "sen-4", label: "Câu 4", lines: [{ id: "s40", text: "Is" }, { id: "s41", text: "she" }, { id: "s42", text: "tired?" }], correctOrder: ["s40", "s41", "s42"] },
        { id: "sen-5", label: "Câu 5", lines: [{ id: "s50", text: "Are" }, { id: "s51", text: "we" }, { id: "s52", text: "late?" }], correctOrder: ["s50", "s51", "s52"] },
      ],
    },
    {
      type: "reading-fill",
      title: "Fill the line.\nĐiền vào dòng.",
      instruction: "Type the missing word.\nGõ từ còn thiếu.",
      passage: "Are you happy? Yes, I am. Is he a student? No, he isn't. Are they at home? Yes, they are.",
      prompts: [
        { id: "rf1", label: "___ you happy?", correctAnswers: ["Are"] },
        { id: "rf2", label: "Yes, ___ am.", correctAnswers: ["I"] },
        { id: "rf3", label: "___ he a student?", correctAnswers: ["Is"] },
        { id: "rf4", label: "No, he ___.", correctAnswers: ["isn't", "is not"] },
      ],
    },
    {
      type: "dictation",
      title: "Write the short answer.\nViết câu trả lời ngắn.",
      instruction: "Read the question and the hint Yes or No. Write the short answer.\nĐọc câu hỏi và gợi ý Yes hoặc No. Viết câu trả lời ngắn.",
      promptLabel: "Câu hỏi",
      inputPlaceholder: "Viết câu trả lời ngắn",
      doneMessage: "Bạn đã viết xong các câu trả lời. Bấm Tiếp.",
      items: [
        { id: "dic-1", hint: "Are you a student? (Yes)", text: "Yes, I am." },
        { id: "dic-2", hint: "Is he tired? (No)", text: "No, he isn't." },
        { id: "dic-3", hint: "Are they busy? (Yes)", text: "Yes, they are." },
        { id: "dic-4", hint: "Is she at home? (No)", text: "No, she isn't." },
        { id: "dic-5", hint: "Are you happy? (No)", text: "No, I'm not." },
      ],
    },
    {
      type: "self-writing",
      title: "Ask and answer.\nHỏi và trả lời.",
      instruction: "Write 3 Yes/No questions with to be, and a short answer for each.\nViết 3 câu hỏi Yes/No với to be, mỗi câu kèm một câu trả lời ngắn.",
      promptHints: ["Are you busy? Yes, I am.", "Is she tired? No, she isn't.", "Are they at home? Yes, they are."],
      sampleTitle: "Bài gợi ý",
      sample: "Are you busy? Yes, I am.\nIs she tired? No, she isn't.\nAre they at home? Yes, they are.",
    },
  ],
};
