import { getRulesForDay } from "@/data/curriculum/month-01/day-rules";
import { createPracticeMeta } from "@/data/practice/shared";
import type { PracticeLesson } from "@/types/practice";

export const practiceDay26: PracticeLesson = {
  meta: { ...createPracticeMeta(26, "Trật tự từ trong câu hỏi"), totalScreens: 8 },
  hints: {
    rules: getRulesForDay(26, ""),
    vocabulary: [
      { en: "book", vi: "sách" },
      { en: "teacher", vi: "giáo viên" },
      { en: "student", vi: "học sinh" },
      { en: "here", vi: "ở đây" },
      { en: "school", vi: "trường" },
    ],
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
      type: "categorize",
      title: "Sort the words.\nPhân loại từ.",
      instruction: "Drag each word into a group.\nKéo từ vào một nhóm.",
      categories: [
        { id: "cat-a", label: "Có am / is / are" },
        { id: "cat-b", label: "Không có am / is / are" },
      ],
      items: [
        { id: "c-1", label: "Where is the book?", correctCategoryId: "cat-a" },
        { id: "c-2", label: "What is this?", correctCategoryId: "cat-a" },
        { id: "c-3", label: "Who is she?", correctCategoryId: "cat-a" },
        { id: "c-4", label: "Where are they?", correctCategoryId: "cat-a" },
        { id: "c-5", label: "What are these?", correctCategoryId: "cat-a" },
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
        { id: "s3", label: "is" },
        { id: "s4", label: "are" },
      ],
      sentences: [
        { id: "sd1", parts: [{ kind: "text", value: "Where " }, { kind: "blank", id: "b1", correctWordId: "s1" }, { kind: "text", value: " the book?." }] },
        { id: "sd2", parts: [{ kind: "text", value: "What " }, { kind: "blank", id: "b2", correctWordId: "s2" }, { kind: "text", value: " this?." }] },
        { id: "sd3", parts: [{ kind: "text", value: "Who " }, { kind: "blank", id: "b3", correctWordId: "s3" }, { kind: "text", value: " she?." }] },
        { id: "sd4", parts: [{ kind: "text", value: "Where " }, { kind: "blank", id: "b4", correctWordId: "s4" }, { kind: "text", value: " they?." }] },
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
        { id: "sen-1", label: "Câu 1", lines: [{ id: "s10", text: "Where" }, { id: "s11", text: "is" }, { id: "s12", text: "the" }, { id: "s13", text: "book?" }], correctOrder: ["s10", "s11", "s12", "s13"] },
        { id: "sen-2", label: "Câu 2", lines: [{ id: "s20", text: "What" }, { id: "s21", text: "is" }, { id: "s22", text: "this?" }], correctOrder: ["s20", "s21", "s22"] },
        { id: "sen-3", label: "Câu 3", lines: [{ id: "s30", text: "Who" }, { id: "s31", text: "is" }, { id: "s32", text: "she?" }], correctOrder: ["s30", "s31", "s32"] },
        { id: "sen-4", label: "Câu 4", lines: [{ id: "s40", text: "Where" }, { id: "s41", text: "are" }, { id: "s42", text: "they?" }], correctOrder: ["s40", "s41", "s42"] },
        { id: "sen-5", label: "Câu 5", lines: [{ id: "s50", text: "What" }, { id: "s51", text: "are" }, { id: "s52", text: "these?" }], correctOrder: ["s50", "s51", "s52"] },
      ],
    },
    {
      type: "reading-fill",
      title: "Fill the line.\nĐiền vào dòng.",
      instruction: "Type the missing word.\nGõ từ còn thiếu.",
      passage: "Where is the book? What is this? Who is she? Where are they? What are these?",
      prompts: [
        { id: "rf1", label: "Where ___ the book?.", correctAnswers: ["is"] },
        { id: "rf2", label: "What ___ this?.", correctAnswers: ["is"] },
        { id: "rf3", label: "Who ___ she?.", correctAnswers: ["is"] },
        { id: "rf4", label: "Where ___ they?.", correctAnswers: ["are"] },
      ],
    },
    {
      type: "dictation",
      title: "Translate into English.\nDịch sang tiếng Anh.",
      instruction: "Read the Vietnamese sentence and write it in English.\nĐọc câu tiếng Việt rồi viết câu tiếng Anh.",
      items: [
        { id: "dic-1", text: "Where is the book?", hint: "Sách ở đâu?" },
        { id: "dic-2", text: "What is this?", hint: "Đây là cái gì?" },
        { id: "dic-3", text: "Who is she?", hint: "Cô ấy là ai?" },
        { id: "dic-4", text: "Where are they?", hint: "Họ ở đâu?" },
        { id: "dic-5", text: "What are these?", hint: "Đây là những cái gì?" },
      ],
    },
    {
      type: "self-writing",
      title: "Write about you.\nViết về bạn.",
      instruction: "Write 3 sentences about you.\nViết 3 câu về bạn.",
      promptHints: ["Where is the book?"],
      sampleTitle: "Bài gợi ý",
      sample: "Where is the book?\nWhat is this?\nWho is she?\nWhere are they?",
    },
  ],
};
