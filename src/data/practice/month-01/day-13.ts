import { getRulesForDay } from "@/data/curriculum/month-01/day-rules";
import { createPracticeMeta } from "@/data/practice/shared";
import type { PracticeLesson } from "@/types/practice";

export const practiceDay13: PracticeLesson = {
  meta: { ...createPracticeMeta(13, "Danh từ (N) và to be (V tobe)"), totalScreens: 7 },
  hints: {
    rules: getRulesForDay(13, ""),
    vocabulary: [
      { en: "a / an", vi: "một — số ít" },
      { en: "the", vi: "đã xác định" },
      { en: "this / that", vi: "một vật" },
      { en: "these / those", vi: "nhiều vật" },
      { en: "aren't", vi: "không phải (số nhiều)" },
    ]
  },
  screens: [
    {
      type: "match",
      title: "Match the words.\nNối từ.",
      instruction: "Match each word with a picture.\nNối từ với ảnh.",
      words: [
        { id: "w-a-an", label: "a / an" },
        { id: "w-the", label: "the" },
        { id: "w-this-that", label: "this / that" },
        { id: "w-these-those", label: "these / those" },
        { id: "w-aren-t", label: "aren't" },
      ],
      pairs: [
        { id: "p-a-an", imageUrl: "/images/practice/nouns-photo/book.jpg", imageAlt: "một — số ít", label: "một — số ít", correctWordId: "w-a-an" },
        { id: "p-the", imageUrl: "/images/practice/nouns-photo/book.jpg", imageAlt: "đã xác định", label: "đã xác định", correctWordId: "w-the" },
        { id: "p-this-that", imageUrl: "/images/practice/nouns-photo/book.jpg", imageAlt: "một vật", label: "một vật", correctWordId: "w-this-that" },
        { id: "p-these-those", imageUrl: "/images/practice/nouns-photo/book.jpg", imageAlt: "nhiều vật", label: "nhiều vật", correctWordId: "w-these-those" },
        { id: "p-aren-t", imageUrl: "/images/practice/nouns-photo/book.jpg", imageAlt: "không phải (số nhiều)", label: "không phải (số nhiều)", correctWordId: "w-aren-t" },
      ],
    },
    {
      type: "dropdown",
      title: "Choose the answer.\nChọn đáp án đúng.",
      instruction: "Choose the word that makes the sentence correct.\nChọn từ để câu đúng.",
      questions: [
        { id: "q1", parts: [{ kind: "text", value: "She " }, { kind: "select", id: "q1a", correctOptionId: "q1-ok", options: [{ id: "q1-ok", label: "is" }, { id: "q1-no", label: "are" }] }, { kind: "text", value: " a student." }] },
        { id: "q2", parts: [{ kind: "text", value: "These " }, { kind: "select", id: "q2a", correctOptionId: "q2-ok", options: [{ id: "q2-ok", label: "are" }, { id: "q2-no", label: "is" }] }, { kind: "text", value: " books." }] },
        { id: "q3", parts: [{ kind: "text", value: "This is " }, { kind: "select", id: "q3a", correctOptionId: "q3-ok", options: [{ id: "q3-ok", label: "an" }, { id: "q3-no", label: "a" }] }, { kind: "text", value: " apple." }] },
        { id: "q4", parts: [{ kind: "text", value: "He is " }, { kind: "select", id: "q4a", correctOptionId: "q4-ok", options: [{ id: "q4-ok", label: "a" }, { id: "q4-no", label: "an" }] }, { kind: "text", value: " doctor." }] },
        { id: "q5", parts: [{ kind: "text", value: "They " }, { kind: "select", id: "q5a", correctOptionId: "q5-ok", options: [{ id: "q5-ok", label: "aren't" }, { id: "q5-no", label: "isn't" }] }, { kind: "text", value: " teachers." }] },
        { id: "q6", parts: [{ kind: "select", id: "q6a", correctOptionId: "q6-ok", options: [{ id: "q6-ok", label: "Is" }, { id: "q6-no", label: "Are" }] }, { kind: "text", value: " this your phone?" }] },
        { id: "q7", parts: [{ kind: "text", value: "Those " }, { kind: "select", id: "q7a", correctOptionId: "q7-ok", options: [{ id: "q7-ok", label: "are" }, { id: "q7-no", label: "is" }] }, { kind: "text", value: " cars." }] },
        { id: "q8", parts: [{ kind: "text", value: "I am " }, { kind: "select", id: "q8a", correctOptionId: "q8-ok", options: [{ id: "q8-ok", label: "a" }, { id: "q8-no", label: "an" }] }, { kind: "text", value: " student." }] },
        { id: "q9", parts: [{ kind: "text", value: "This is " }, { kind: "select", id: "q9a", correctOptionId: "q9-ok", options: [{ id: "q9-ok", label: "an" }, { id: "q9-no", label: "a" }] }, { kind: "text", value: " umbrella." }] },
        { id: "q10", parts: [{ kind: "select", id: "q10a", correctOptionId: "q10-ok", options: [{ id: "q10-ok", label: "Are" }, { id: "q10-no", label: "Is" }] }, { kind: "text", value: " these your books?" }] },
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
        { id: "sen-1", label: "Câu 1", lines: [{ id: "s10", text: "This" }, { id: "s11", text: "is" }, { id: "s12", text: "a" }, { id: "s13", text: "book" }], correctOrder: ["s10", "s11", "s12", "s13"] },
        { id: "sen-2", label: "Câu 2", lines: [{ id: "s20", text: "Those" }, { id: "s21", text: "are" }, { id: "s22", text: "students" }], correctOrder: ["s20", "s21", "s22"] },
        { id: "sen-3", label: "Câu 3", lines: [{ id: "s30", text: "He" }, { id: "s31", text: "is" }, { id: "s32", text: "not" }, { id: "s33", text: "a" }, { id: "s34", text: "doctor" }], correctOrder: ["s30", "s31", "s32", "s33", "s34"] },
        { id: "sen-4", label: "Câu 4", lines: [{ id: "s40", text: "Are" }, { id: "s41", text: "these" }, { id: "s42", text: "your" }, { id: "s43", text: "books?" }], correctOrder: ["s40", "s41", "s42", "s43"] },
        { id: "sen-5", label: "Câu 5", lines: [{ id: "s50", text: "It" }, { id: "s51", text: "is" }, { id: "s52", text: "an" }, { id: "s53", text: "orange" }], correctOrder: ["s50", "s51", "s52", "s53"] },
      ],
    },
    {
      type: "sentence-drag",
      title: "Fill the sentence.\nĐiền vào câu.",
      instruction: "Drag the word into the blank.\nKéo từ vào chỗ trống.",
      wordBank: [
        { id: "s1", label: "is" },
        { id: "s2", label: "are" },
        { id: "s3", label: "an" },
        { id: "s4", label: "aren't" },
        { id: "s5", label: "Is" },
      ],
      sentences: [
        { id: "sd1", parts: [{ kind: "text", value: "She " }, { kind: "blank", id: "b1", correctWordId: "s1" }, { kind: "text", value: " a student." }] },
        { id: "sd2", parts: [{ kind: "text", value: "These " }, { kind: "blank", id: "b2", correctWordId: "s2" }, { kind: "text", value: " books." }] },
        { id: "sd3", parts: [{ kind: "text", value: "This is " }, { kind: "blank", id: "b3", correctWordId: "s3" }, { kind: "text", value: " apple." }] },
        { id: "sd4", parts: [{ kind: "text", value: "They " }, { kind: "blank", id: "b4", correctWordId: "s4" }, { kind: "text", value: " teachers." }] },
        { id: "sd5", parts: [{ kind: "blank", id: "b5", correctWordId: "s5", width: "sm" }, { kind: "text", value: " this your phone?" }] },
      ],
    },
    {
      type: "reading-fill",
      title: "Fill the line.\nĐiền vào dòng.",
      instruction: "Type the missing word.\nGõ từ còn thiếu.",
      passage: "She is a student. These are books. This is an apple. They aren't teachers. The children are happy.",
      prompts: [
        { id: "rf1", label: "She ___ a student.", correctAnswers: ["is"] },
        { id: "rf2", label: "These ___ books.", correctAnswers: ["are"] },
        { id: "rf3", label: "This is ___ apple.", correctAnswers: ["an"] },
        { id: "rf4", label: "They ___ teachers.", correctAnswers: ["aren't", "are not"] },
      ],
    },
    {
      type: "dictation",
      title: "Translate into English.\nDịch sang tiếng Anh.",
      instruction: "Read the Vietnamese sentence and write it in English.\nĐọc câu tiếng Việt rồi viết câu tiếng Anh.",
      items: [
        { id: "dic-1", text: "This is a phone.", hint: "Đây là một chiếc điện thoại." },
        { id: "dic-2", text: "Those are cars.", hint: "Kia là những chiếc ô tô." },
        { id: "dic-3", text: "They are students.", hint: "Họ là học sinh." },
        { id: "dic-4", text: "She is not a teacher.", hint: "Cô ấy không phải là giáo viên." },
        { id: "dic-5", text: "Is this your book?", hint: "Đây có phải là quyển sách của bạn không?" },
        { id: "dic-6", text: "The children are happy.", hint: "Những đứa trẻ đang vui vẻ." },
      ],
    },
    {
      type: "self-writing",
      title: "Mix patterns about family.\nGhép mẫu câu về gia đình.",
      instruction: "Write 4 sentences: use this/that or these/those, one with the, and one question about family.\nViết 4 câu: có this/that hoặc these/those, một câu có the, một câu hỏi về gia đình.",
      promptHints: [
        "This is my book.",
        "The book is new.",
        "These are my parents.",
        "Are they at home?"
      ],
      sampleTitle: "Bài gợi ý",
      sample: "This is my book.\nThe book is on the table.\nThese are my parents.\nAre they at home?",
    },
  ],
};
