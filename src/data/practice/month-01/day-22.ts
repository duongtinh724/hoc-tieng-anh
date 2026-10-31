import { getRulesForDay } from "@/data/curriculum/month-01/day-rules";
import { createPracticeMeta } from "@/data/practice/shared";
import type { PracticeLesson } from "@/types/practice";

export const practiceDay22: PracticeLesson = {
  meta: { ...createPracticeMeta(22, "What, who, where"), totalScreens: 8 },
  hints: {
    rules: getRulesForDay(22, ""),
    vocabulary: [
      { en: "book", vi: "sách" },
      { en: "teacher", vi: "giáo viên" },
      { en: "school", vi: "trường" },
      { en: "here", vi: "ở đây" },
      { en: "friend", vi: "bạn" },
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
        { id: "w-school", label: "school" },
        { id: "w-here", label: "here" },
        { id: "w-friend", label: "friend" },
      ],
      pairs: [
        { id: "p-book", imageUrl: "/images/practice/nouns-photo/book.jpg", imageAlt: "sách", label: "sách", correctWordId: "w-book" },
        { id: "p-teacher", imageUrl: "/images/practice/nouns-photo/teacher.jpg", imageAlt: "giáo viên", label: "giáo viên", correctWordId: "w-teacher" },
        { id: "p-school", imageUrl: "/images/practice/nouns-photo/school.jpg", imageAlt: "trường", label: "trường", correctWordId: "w-school" },
        { id: "p-here", imageUrl: "/images/practice/tobe/here.jpg", imageAlt: "ở đây", label: "ở đây", correctWordId: "w-here" },
        { id: "p-friend", imageUrl: "/images/practice/tobe/friend.jpg", imageAlt: "bạn", label: "bạn", correctWordId: "w-friend" },
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
        { id: "c-1", label: "What is this?", correctCategoryId: "cat-a" },
        { id: "c-2", label: "It is a book.", correctCategoryId: "cat-a" },
        { id: "c-3", label: "Who is she?", correctCategoryId: "cat-a" },
        { id: "c-4", label: "She is a teacher.", correctCategoryId: "cat-a" },
        { id: "c-5", label: "Where is the book?", correctCategoryId: "cat-a" },
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
        { id: "s4", label: "is" },
      ],
      sentences: [
        { id: "sd1", parts: [{ kind: "text", value: "What " }, { kind: "blank", id: "b1", correctWordId: "s1" }, { kind: "text", value: " this?." }] },
        { id: "sd2", parts: [{ kind: "text", value: "It " }, { kind: "blank", id: "b2", correctWordId: "s2" }, { kind: "text", value: " a book." }] },
        { id: "sd3", parts: [{ kind: "text", value: "Who " }, { kind: "blank", id: "b3", correctWordId: "s3" }, { kind: "text", value: " she?." }] },
        { id: "sd4", parts: [{ kind: "text", value: "She " }, { kind: "blank", id: "b4", correctWordId: "s4" }, { kind: "text", value: " a teacher." }] },
      ],
    },
    {
      type: "dropdown",
      title: "Choose the word.\nChọn từ đúng.",
      instruction: "Choose the correct word.\nChọn từ đúng.",
      questions: [
        { id: "q1", parts: [{ kind: "text", value: "What is " }, { kind: "select", id: "q1a", correctOptionId: "q1-ok", options: [{ id: "q1-ok", label: "this?" }, { id: "q1-no", label: "book" }] }, { kind: "text", value: "." }] },
        { id: "q2", parts: [{ kind: "text", value: "It is a " }, { kind: "select", id: "q2a", correctOptionId: "q2-ok", options: [{ id: "q2-ok", label: "book" }, { id: "q2-no", label: "pen" }] }, { kind: "text", value: "." }] },
        { id: "q3", parts: [{ kind: "text", value: "Who is " }, { kind: "select", id: "q3a", correctOptionId: "q3-ok", options: [{ id: "q3-ok", label: "she?" }, { id: "q3-no", label: "book" }] }, { kind: "text", value: "." }] },
        { id: "q4", parts: [{ kind: "text", value: "She is a " }, { kind: "select", id: "q4a", correctOptionId: "q4-ok", options: [{ id: "q4-ok", label: "teacher" }, { id: "q4-no", label: "book" }] }, { kind: "text", value: "." }] },
        { id: "q5", parts: [{ kind: "select", id: "q5a", correctOptionId: "q5-ok", options: [{ id: "q5-ok", label: "What" }, { id: "q5-no", label: "Who" }, { id: "q5-no2", label: "Where" }] }, { kind: "text", value: " is this?" }] },
        { id: "q6", parts: [{ kind: "select", id: "q6a", correctOptionId: "q6-ok", options: [{ id: "q6-ok", label: "Who" }, { id: "q6-no", label: "What" }, { id: "q6-no2", label: "Where" }] }, { kind: "text", value: " is your teacher?" }] },
        { id: "q7", parts: [{ kind: "select", id: "q7a", correctOptionId: "q7-ok", options: [{ id: "q7-ok", label: "Where" }, { id: "q7-no", label: "What" }, { id: "q7-no2", label: "Who" }] }, { kind: "text", value: " is the school?" }] },
        { id: "q8", parts: [{ kind: "select", id: "q8a", correctOptionId: "q8-ok", options: [{ id: "q8-ok", label: "What" }, { id: "q8-no", label: "Who" }, { id: "q8-no2", label: "Where" }] }, { kind: "text", value: " is your name?" }] },
        { id: "q9", parts: [{ kind: "select", id: "q9a", correctOptionId: "q9-ok", options: [{ id: "q9-ok", label: "Who" }, { id: "q9-no", label: "Where" }, { id: "q9-no2", label: "What" }] }, { kind: "text", value: " are they?" }] },
        { id: "q10", parts: [{ kind: "select", id: "q10a", correctOptionId: "q10-ok", options: [{ id: "q10-ok", label: "Where" }, { id: "q10-no", label: "Who" }, { id: "q10-no2", label: "What" }] }, { kind: "text", value: " are you from?" }] },
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
        { id: "sen-1", label: "Câu 1", lines: [{ id: "s10", text: "What" }, { id: "s11", text: "is" }, { id: "s12", text: "this?" }], correctOrder: ["s10", "s11", "s12"] },
        { id: "sen-2", label: "Câu 2", lines: [{ id: "s20", text: "It" }, { id: "s21", text: "is" }, { id: "s22", text: "a" }, { id: "s23", text: "book" }], correctOrder: ["s20", "s21", "s22", "s23"] },
        { id: "sen-3", label: "Câu 3", lines: [{ id: "s30", text: "Who" }, { id: "s31", text: "is" }, { id: "s32", text: "she?" }], correctOrder: ["s30", "s31", "s32"] },
        { id: "sen-4", label: "Câu 4", lines: [{ id: "s40", text: "She" }, { id: "s41", text: "is" }, { id: "s42", text: "a" }, { id: "s43", text: "teacher" }], correctOrder: ["s40", "s41", "s42", "s43"] },
        { id: "sen-5", label: "Câu 5", lines: [{ id: "s50", text: "Where" }, { id: "s51", text: "is" }, { id: "s52", text: "the" }, { id: "s53", text: "book?" }], correctOrder: ["s50", "s51", "s52", "s53"] },
      ],
    },
    {
      type: "reading-fill",
      title: "Fill the line.\nĐiền vào dòng.",
      instruction: "Type the missing word.\nGõ từ còn thiếu.",
      passage: "What is this? It is a book. Who is she? She is a teacher. Where is the book?",
      prompts: [
        { id: "rf1", label: "What ___ this?.", correctAnswers: ["is"] },
        { id: "rf2", label: "It ___ a book.", correctAnswers: ["is"] },
        { id: "rf3", label: "Who ___ she?.", correctAnswers: ["is"] },
        { id: "rf4", label: "She ___ a teacher.", correctAnswers: ["is"] },
      ],
    },
    {
      type: "dictation",
      title: "Translate into English.\nDịch sang tiếng Anh.",
      instruction: "Read the Vietnamese sentence and write it in English.\nĐọc câu tiếng Việt rồi viết câu tiếng Anh.",
      items: [
        { id: "dic-1", text: "What is this?", hint: "Đây là cái gì?" },
        { id: "dic-2", text: "It is a book.", hint: "Nó là quyển sách." },
        { id: "dic-3", text: "Who is she?", hint: "Cô ấy là ai?" },
        { id: "dic-4", text: "She is a teacher.", hint: "Cô ấy là giáo viên." },
        { id: "dic-5", text: "Where is the book?", hint: "Quyển sách ở đâu?" },
      ],
    },
    {
      type: "self-writing",
      title: "Write about you.\nViết về bạn.",
      instruction: "Write 3 sentences about you.\nViết 3 câu về bạn.",
      promptHints: ["What is this?"],
      sampleTitle: "Bài gợi ý",
      sample: "What is this?\nIt is a book.\nWho is she?\nShe is a teacher.",
    },
  ],
};
