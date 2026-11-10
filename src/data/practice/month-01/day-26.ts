import { getRulesForDay } from "@/data/curriculum/month-01/day-rules";
import { createPracticeMeta } from "@/data/practice/shared";
import type { PracticeLesson } from "@/types/practice";

export const practiceDay26: PracticeLesson = {
  meta: { ...createPracticeMeta(26, "Trật tự từ trong câu hỏi"), totalScreens: 7 },
  hints: {
    rules: getRulesForDay(26, ""),
    vocabulary: [
      { en: "book", vi: "sách" },
      { en: "teacher", vi: "giáo viên" },
      { en: "student", vi: "học sinh" },
      { en: "here", vi: "ở đây" },
      { en: "school", vi: "trường" },
    ]
  },
  screens: [
    {
      type: "match",
      title: "Match the words.\nNối từ.",
      instruction: "Match each word with a picture.\nNối từ với ảnh.",
      words: [
        { id: "w-book", label: "book" },
        { id: "w-teacher", label: "teacher" },
        { id: "w-student", label: "student" },
        { id: "w-here", label: "here" },
        { id: "w-school", label: "school" },
      ],
      pairs: [
        { id: "p-book", imageUrl: "/images/practice/nouns-photo/book.jpg", imageAlt: "sách", label: "sách", correctWordId: "w-book" },
        { id: "p-teacher", imageUrl: "/images/practice/nouns-photo/teacher.jpg", imageAlt: "giáo viên", label: "giáo viên", correctWordId: "w-teacher" },
        { id: "p-student", imageUrl: "/images/practice/nouns-photo/student.jpg", imageAlt: "học sinh", label: "học sinh", correctWordId: "w-student" },
        { id: "p-here", imageUrl: "/images/practice/tobe/here.jpg", imageAlt: "ở đây", label: "ở đây", correctWordId: "w-here" },
        { id: "p-school", imageUrl: "/images/practice/nouns-photo/school.jpg", imageAlt: "trường", label: "trường", correctWordId: "w-school" },
      ],
    },
    {
      type: "sentence-drag",
      title: "Fill the sentence.\nĐiền vào câu.",
      instruction: "Drag a word into the blank.\nKéo từ vào chỗ trống.",
      wordBank: [
        { id: "s1", label: "Are" },
        { id: "s2", label: "Is" },
        { id: "s3", label: "is" },
        { id: "s4", label: "are" },
      ],
      sentences: [
        { id: "sd1", parts: [{ kind: "blank", id: "b1", correctWordId: "s1" }, { kind: "text", value: " you a student?." }] },
        { id: "sd2", parts: [{ kind: "blank", id: "b2", correctWordId: "s2" }, { kind: "text", value: " she a teacher?." }] },
        { id: "sd3", parts: [{ kind: "text", value: "What " }, { kind: "blank", id: "b3", correctWordId: "s3" }, { kind: "text", value: " your name?." }] },
        { id: "sd4", parts: [{ kind: "text", value: "How " }, { kind: "blank", id: "b4", correctWordId: "s4" }, { kind: "text", value: " you?." }] },
      ],
    },
    {
      type: "dropdown",
      title: "Choose the word.\nChọn từ đúng.",
      instruction: "Choose the correct word.\nChọn từ đúng.",
      questions: [
        { id: "q1", parts: [{ kind: "text", value: "Where is the " }, { kind: "select", id: "q1a", correctOptionId: "q1-ok", options: [{ id: "q1-ok", label: "book?" }, { id: "q1-no", label: "book" }] }, { kind: "text", value: "." }] },
        { id: "q2", parts: [{ kind: "text", value: "What is " }, { kind: "select", id: "q2a", correctOptionId: "q2-ok", options: [{ id: "q2-ok", label: "this?" }, { id: "q2-no", label: "book" }] }, { kind: "text", value: "." }] },
        { id: "q3", parts: [{ kind: "text", value: "Who is " }, { kind: "select", id: "q3a", correctOptionId: "q3-ok", options: [{ id: "q3-ok", label: "she?" }, { id: "q3-no", label: "book" }] }, { kind: "text", value: "." }] },
        { id: "q4", parts: [{ kind: "text", value: "Where are " }, { kind: "select", id: "q4a", correctOptionId: "q4-ok", options: [{ id: "q4-ok", label: "they?" }, { id: "q4-no", label: "book" }] }, { kind: "text", value: "." }] },
        { id: "q5", parts: [{ kind: "select", id: "q5a", correctOptionId: "q5-ok", options: [{ id: "q5-ok", label: "Are" }, { id: "q5-no", label: "Is" }, { id: "q5-no2", label: "Am" }] }, { kind: "text", value: " you a student?" }] },
        { id: "q6", parts: [{ kind: "select", id: "q6a", correctOptionId: "q6-ok", options: [{ id: "q6-ok", label: "Is" }, { id: "q6-no", label: "Are" }, { id: "q6-no2", label: "Am" }] }, { kind: "text", value: " she at home?" }] },
        { id: "q7", parts: [{ kind: "select", id: "q7a", correctOptionId: "q7-ok", options: [{ id: "q7-ok", label: "Do" }, { id: "q7-no", label: "Does" }, { id: "q7-no2", label: "Is" }] }, { kind: "text", value: " you like music?" }] },
        { id: "q8", parts: [{ kind: "select", id: "q8a", correctOptionId: "q8-ok", options: [{ id: "q8-ok", label: "Does" }, { id: "q8-no", label: "Do" }, { id: "q8-no2", label: "Is" }] }, { kind: "text", value: " he play football?" }] },
        { id: "q9", parts: [{ kind: "select", id: "q9a", correctOptionId: "q9-ok", options: [{ id: "q9-ok", label: "Where" }, { id: "q9-no", label: "What" }, { id: "q9-no2", label: "Who" }] }, { kind: "text", value: " do you live?" }] },
        { id: "q10", parts: [{ kind: "select", id: "q10a", correctOptionId: "q10-ok", options: [{ id: "q10-ok", label: "What" }, { id: "q10-no", label: "Where" }, { id: "q10-no2", label: "Who" }] }, { kind: "text", value: " do you study?" }] },
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
        { id: "sen-2", label: "Câu 2", lines: [{ id: "s20", text: "Is" }, { id: "s21", text: "she" }, { id: "s22", text: "a" }, { id: "s23", text: "teacher?" }], correctOrder: ["s20", "s21", "s22", "s23"] },
        { id: "sen-3", label: "Câu 3", lines: [{ id: "s30", text: "What" }, { id: "s31", text: "is" }, { id: "s32", text: "your" }, { id: "s33", text: "name?" }], correctOrder: ["s30", "s31", "s32", "s33"] },
        { id: "sen-4", label: "Câu 4", lines: [{ id: "s40", text: "How" }, { id: "s41", text: "are" }, { id: "s42", text: "you?" }], correctOrder: ["s40", "s41", "s42"] },
        { id: "sen-5", label: "Câu 5", lines: [{ id: "s50", text: "Where" }, { id: "s51", text: "is" }, { id: "s52", text: "my" }, { id: "s53", text: "book?" }], correctOrder: ["s50", "s51", "s52", "s53"] },
      ],
    },
    {
      type: "reading-fill",
      title: "Fill the line.\nĐiền vào dòng.",
      instruction: "Type the missing word.\nGõ từ còn thiếu.",
      passage: "Are you a student? Is she a teacher? What is your name? How are you? Where is my book? Yes, I am.",
      prompts: [
        { id: "rf1", label: "___ you a student?.", correctAnswers: ["Are"] },
        { id: "rf2", label: "___ she a teacher?.", correctAnswers: ["Is"] },
        { id: "rf3", label: "What ___ your name?.", correctAnswers: ["is"] },
        { id: "rf4", label: "How ___ you?.", correctAnswers: ["are"] },
      ],
    },
    {
      type: "dictation",
      title: "Translate into English.\nDịch sang tiếng Anh.",
      instruction: "Read the Vietnamese sentence and write it in English.\nĐọc câu tiếng Việt rồi viết câu tiếng Anh.",
      items: [
        { id: "dic-1", text: "Are you a student?", hint: "Bạn là học sinh phải không?" },
        { id: "dic-2", text: "Is she a teacher?", hint: "Cô ấy là giáo viên phải không?" },
        { id: "dic-3", text: "What is your name?", hint: "Bạn tên gì?" },
        { id: "dic-4", text: "How are you?", hint: "Bạn khỏe không?" },
        { id: "dic-5", text: "Where is my book?", hint: "Sách của tôi ở đâu?" },
        { id: "dic-6", text: "Yes, I am.", hint: "Vâng, tôi là." },
      ],
    },
    {
      type: "self-writing",
      title: "Questions about you and family.\nCâu hỏi về bạn và gia đình.",
      instruction: "Write 4 questions and answers: use Are / Is / What / How / Where about you or a family member.\nViết 4 cặp hỏi–đáp: Are / Is / What / How / Where về bạn hoặc người thân.",
      promptHints: [
        "Are you a student? Yes, I am.",
        "What is your name?",
        "How is your mother?",
        "Where is my book?"
      ],
      sampleTitle: "Bài gợi ý",
      sample: "Are you a student? Yes, I am.\nIs your sister at home? Yes, she is.\nWhat is your father's name?\nHow are your parents? They are fine.",
    },
  ],
};
