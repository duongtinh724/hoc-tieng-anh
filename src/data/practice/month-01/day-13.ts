import { getRulesForDay } from "@/data/curriculum/month-01/day-rules";
import { createPracticeMeta } from "@/data/practice/shared";
import type { PracticeLesson } from "@/types/practice";

export const practiceDay13: PracticeLesson = {
  meta: { ...createPracticeMeta(13, "Danh từ và to be"), totalScreens: 8 },
  hints: {
    rules: getRulesForDay(13, ""),
    vocabulary: [
      { en: "student", vi: "học sinh" },
      { en: "teacher", vi: "giáo viên" },
      { en: "book", vi: "sách" },
      { en: "friend", vi: "bạn" },
      { en: "school", vi: "trường" },
    ],
  },
  screens: [
    {
      type: "match",
      title: "Match the words.\nNối từ.",
      instruction: "Match each word with a picture.\nNối từ với ảnh.",
      words: [
        { id: "w-student", label: "student" },
        { id: "w-teacher", label: "teacher" },
        { id: "w-book", label: "book" },
        { id: "w-friend", label: "friend" },
        { id: "w-school", label: "school" },
      ],
      pairs: [
        { id: "p-student", imageUrl: "/images/practice/nouns-photo/student.jpg", imageAlt: "học sinh", label: "học sinh", correctWordId: "w-student" },
        { id: "p-teacher", imageUrl: "/images/practice/nouns-photo/teacher.jpg", imageAlt: "giáo viên", label: "giáo viên", correctWordId: "w-teacher" },
        { id: "p-book", imageUrl: "/images/practice/nouns-photo/book.jpg", imageAlt: "sách", label: "sách", correctWordId: "w-book" },
        { id: "p-friend", imageUrl: "/images/practice/tobe/friend.jpg", imageAlt: "bạn", label: "bạn", correctWordId: "w-friend" },
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
        { id: "c-1", label: "It is a book.", correctCategoryId: "cat-a" },
        { id: "c-2", label: "They are books.", correctCategoryId: "cat-a" },
        { id: "c-3", label: "She is a teacher.", correctCategoryId: "cat-a" },
        { id: "c-4", label: "We are students.", correctCategoryId: "cat-a" },
        { id: "c-5", label: "These are my friends.", correctCategoryId: "cat-a" },
        { id: "c-x", label: "I like music.", correctCategoryId: "cat-b" },
      ],
    },
    {
      type: "sentence-drag",
      title: "Fill the sentence.\nĐiền vào câu.",
      instruction: "Drag a word into the blank.\nKéo từ vào chỗ trống.",
      wordBank: [
        { id: "s1", label: "is" },
        { id: "s2", label: "are" },
        { id: "s3", label: "is" },
        { id: "s4", label: "are" },
      ],
      sentences: [
        { id: "sd1", parts: [{ kind: "text", value: "It " }, { kind: "blank", id: "b1", correctWordId: "s1" }, { kind: "text", value: " a book." }] },
        { id: "sd2", parts: [{ kind: "text", value: "They " }, { kind: "blank", id: "b2", correctWordId: "s2" }, { kind: "text", value: " books." }] },
        { id: "sd3", parts: [{ kind: "text", value: "She " }, { kind: "blank", id: "b3", correctWordId: "s3" }, { kind: "text", value: " a teacher." }] },
        { id: "sd4", parts: [{ kind: "text", value: "We " }, { kind: "blank", id: "b4", correctWordId: "s4" }, { kind: "text", value: " students." }] },
      ],
    },
    {
      type: "dropdown",
      title: "Choose the word.\nChọn từ đúng.",
      instruction: "Choose the correct word.\nChọn từ đúng.",
      questions: [
        { id: "q1", parts: [{ kind: "text", value: "It is a " }, { kind: "select", id: "q1a", correctOptionId: "q1-ok", options: [{ id: "q1-ok", label: "book" }, { id: "q1-no", label: "pen" }] }, { kind: "text", value: "." }] },
        { id: "q2", parts: [{ kind: "text", value: "They are " }, { kind: "select", id: "q2a", correctOptionId: "q2-ok", options: [{ id: "q2-ok", label: "books" }, { id: "q2-no", label: "book" }] }, { kind: "text", value: "." }] },
        { id: "q3", parts: [{ kind: "text", value: "She is a " }, { kind: "select", id: "q3a", correctOptionId: "q3-ok", options: [{ id: "q3-ok", label: "teacher" }, { id: "q3-no", label: "book" }] }, { kind: "text", value: "." }] },
        { id: "q4", parts: [{ kind: "text", value: "We are " }, { kind: "select", id: "q4a", correctOptionId: "q4-ok", options: [{ id: "q4-ok", label: "students" }, { id: "q4-no", label: "book" }] }, { kind: "text", value: "." }] },
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
        { id: "sen-1", label: "Câu 1", lines: [{ id: "s10", text: "It" }, { id: "s11", text: "is" }, { id: "s12", text: "a" }, { id: "s13", text: "book" }], correctOrder: ["s10", "s11", "s12", "s13"] },
        { id: "sen-2", label: "Câu 2", lines: [{ id: "s20", text: "They" }, { id: "s21", text: "are" }, { id: "s22", text: "books" }], correctOrder: ["s20", "s21", "s22"] },
        { id: "sen-3", label: "Câu 3", lines: [{ id: "s30", text: "She" }, { id: "s31", text: "is" }, { id: "s32", text: "a" }, { id: "s33", text: "teacher" }], correctOrder: ["s30", "s31", "s32", "s33"] },
        { id: "sen-4", label: "Câu 4", lines: [{ id: "s40", text: "We" }, { id: "s41", text: "are" }, { id: "s42", text: "students" }], correctOrder: ["s40", "s41", "s42"] },
        { id: "sen-5", label: "Câu 5", lines: [{ id: "s50", text: "These" }, { id: "s51", text: "are" }, { id: "s52", text: "my" }, { id: "s53", text: "friends" }], correctOrder: ["s50", "s51", "s52", "s53"] },
      ],
    },
    {
      type: "reading-fill",
      title: "Fill the line.\nĐiền vào dòng.",
      instruction: "Type the missing word.\nGõ từ còn thiếu.",
      passage: "It is a book. They are books. She is a teacher. We are students. These are my friends.",
      prompts: [
        { id: "rf1", label: "It ___ a book.", correctAnswers: ["is"] },
        { id: "rf2", label: "They ___ books.", correctAnswers: ["are"] },
        { id: "rf3", label: "She ___ a teacher.", correctAnswers: ["is"] },
        { id: "rf4", label: "We ___ students.", correctAnswers: ["are"] },
      ],
    },
    {
      type: "dictation",
      title: "Translate into English.\nDịch sang tiếng Anh.",
      instruction: "Read the Vietnamese sentence and write it in English.\nĐọc câu tiếng Việt rồi viết câu tiếng Anh.",
      items: [
        { id: "dic-1", text: "It is a book.", hint: "Nó là một quyển sách." },
        { id: "dic-2", text: "They are books.", hint: "Chúng là sách." },
        { id: "dic-3", text: "She is a teacher.", hint: "Cô ấy là giáo viên." },
        { id: "dic-4", text: "We are students.", hint: "Chúng tôi là học sinh." },
        { id: "dic-5", text: "These are my friends.", hint: "Đây là bạn tôi." },
      ],
    },
    {
      type: "self-writing",
      title: "Write about you.\nViết về bạn.",
      instruction: "Write 3 sentences about you.\nViết 3 câu về bạn.",
      promptHints: ["It is a book."],
      sampleTitle: "Bài gợi ý",
      sample: "It is a book.\nThey are books.\nShe is a teacher.\nWe are students.",
    },
  ],
};
