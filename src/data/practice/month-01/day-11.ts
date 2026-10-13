import { getRulesForDay } from "@/data/curriculum/month-01/day-rules";
import { createPracticeMeta } from "@/data/practice/shared";
import type { PracticeLesson } from "@/types/practice";

export const practiceDay11: PracticeLesson = {
  meta: { ...createPracticeMeta(11, "Mạo từ the"), totalScreens: 8 },
  hints: {
    rules: getRulesForDay(11, ""),
    vocabulary: [
      { en: "book", vi: "sách" },
      { en: "teacher", vi: "giáo viên" },
      { en: "school", vi: "trường" },
      { en: "water", vi: "nước" },
      { en: "music", vi: "nhạc" },
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
        { id: "w-water", label: "water" },
        { id: "w-music", label: "music" },
      ],
      pairs: [
        { id: "p-book", imageUrl: "/images/practice/nouns-photo/book.jpg", imageAlt: "sách", label: "sách", correctWordId: "w-book" },
        { id: "p-teacher", imageUrl: "/images/practice/nouns-photo/teacher.jpg", imageAlt: "giáo viên", label: "giáo viên", correctWordId: "w-teacher" },
        { id: "p-school", imageUrl: "/images/practice/nouns-photo/school.jpg", imageAlt: "trường", label: "trường", correctWordId: "w-school" },
        { id: "p-water", imageUrl: "/images/practice/objects/water.jpg", imageAlt: "nước", label: "nước", correctWordId: "w-water" },
        { id: "p-music", imageUrl: "/images/practice/objects/music.jpg", imageAlt: "nhạc", label: "nhạc", correctWordId: "w-music" },
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
        { id: "c-1", label: "The book is here.", correctCategoryId: "cat-a" },
        { id: "c-2", label: "She is the teacher.", correctCategoryId: "cat-a" },
        { id: "c-3", label: "We are at school.", correctCategoryId: "cat-a" },
        { id: "c-4", label: "I like music.", correctCategoryId: "cat-b" },
        { id: "c-5", label: "The bag is there.", correctCategoryId: "cat-a" },
      ],
    },
    {
      type: "sentence-drag",
      title: "Fill the sentence.\nĐiền vào câu.",
      instruction: "Drag a word into the blank.\nKéo từ vào chỗ trống.",
      wordBank: [
        { id: "s1", label: "book" },
        { id: "s2", label: "is" },
        { id: "s3", label: "are" },
        { id: "s4", label: "like" },
      ],
      sentences: [
        { id: "sd1", parts: [{ kind: "text", value: "The " }, { kind: "blank", id: "b1", correctWordId: "s1" }, { kind: "text", value: " is here." }] },
        { id: "sd2", parts: [{ kind: "text", value: "She " }, { kind: "blank", id: "b2", correctWordId: "s2" }, { kind: "text", value: " the teacher." }] },
        { id: "sd3", parts: [{ kind: "text", value: "We " }, { kind: "blank", id: "b3", correctWordId: "s3" }, { kind: "text", value: " at school." }] },
        { id: "sd4", parts: [{ kind: "text", value: "I " }, { kind: "blank", id: "b4", correctWordId: "s4" }, { kind: "text", value: " music." }] },
      ],
    },
    {
      type: "dropdown",
      title: "Choose the word.\nChọn từ đúng.",
      instruction: "Choose the correct word.\nChọn từ đúng.",
      questions: [
        { id: "q1", parts: [{ kind: "text", value: "The book is " }, { kind: "select", id: "q1a", correctOptionId: "q1-ok", options: [{ id: "q1-ok", label: "here" }, { id: "q1-no", label: "book" }] }, { kind: "text", value: "." }] },
        { id: "q2", parts: [{ kind: "text", value: "She is the " }, { kind: "select", id: "q2a", correctOptionId: "q2-ok", options: [{ id: "q2-ok", label: "teacher" }, { id: "q2-no", label: "book" }] }, { kind: "text", value: "." }] },
        { id: "q3", parts: [{ kind: "text", value: "We are at " }, { kind: "select", id: "q3a", correctOptionId: "q3-ok", options: [{ id: "q3-ok", label: "school" }, { id: "q3-no", label: "book" }] }, { kind: "text", value: "." }] },
        { id: "q4", parts: [{ kind: "text", value: "I like " }, { kind: "select", id: "q4a", correctOptionId: "q4-ok", options: [{ id: "q4-ok", label: "music" }, { id: "q4-no", label: "book" }] }, { kind: "text", value: "." }] },
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
        { id: "sen-1", label: "Câu 1", lines: [{ id: "s10", text: "The" }, { id: "s11", text: "book" }, { id: "s12", text: "is" }, { id: "s13", text: "here" }], correctOrder: ["s10", "s11", "s12", "s13"] },
        { id: "sen-2", label: "Câu 2", lines: [{ id: "s20", text: "She" }, { id: "s21", text: "is" }, { id: "s22", text: "the" }, { id: "s23", text: "teacher" }], correctOrder: ["s20", "s21", "s22", "s23"] },
        { id: "sen-3", label: "Câu 3", lines: [{ id: "s30", text: "We" }, { id: "s31", text: "are" }, { id: "s32", text: "at" }, { id: "s33", text: "school" }], correctOrder: ["s30", "s31", "s32", "s33"] },
        { id: "sen-4", label: "Câu 4", lines: [{ id: "s40", text: "I" }, { id: "s41", text: "like" }, { id: "s42", text: "music" }], correctOrder: ["s40", "s41", "s42"] },
        { id: "sen-5", label: "Câu 5", lines: [{ id: "s50", text: "The" }, { id: "s51", text: "bag" }, { id: "s52", text: "is" }, { id: "s53", text: "there" }], correctOrder: ["s50", "s51", "s52", "s53"] },
      ],
    },
    {
      type: "reading-fill",
      title: "Fill the line.\nĐiền vào dòng.",
      instruction: "Type the missing word.\nGõ từ còn thiếu.",
      passage: "The book is here. She is the teacher. We are at school. I like music. The bag is there.",
      prompts: [
        { id: "rf1", label: "The ___ is here.", correctAnswers: ["book"] },
        { id: "rf2", label: "She ___ the teacher.", correctAnswers: ["is"] },
        { id: "rf3", label: "We ___ at school.", correctAnswers: ["are"] },
        { id: "rf4", label: "I ___ music.", correctAnswers: ["like"] },
      ],
    },
    {
      type: "dictation",
      title: "Translate into English.\nDịch sang tiếng Anh.",
      instruction: "Read the Vietnamese sentence and write it in English.\nĐọc câu tiếng Việt rồi viết câu tiếng Anh.",
      items: [
        { id: "dic-1", text: "The book is here.", hint: "Quyển sách ở đây." },
        { id: "dic-2", text: "She is the teacher.", hint: "Cô ấy là giáo viên đó." },
        { id: "dic-3", text: "We are at school.", hint: "Chúng tôi ở trường." },
        { id: "dic-4", text: "I like music.", hint: "Tôi thích nhạc." },
        { id: "dic-5", text: "The bag is there.", hint: "Cái cặp ở đó." },
      ],
    },
    {
      type: "self-writing",
      title: "Write about you.\nViết về bạn.",
      instruction: "Write 3 sentences about you.\nViết 3 câu về bạn.",
      promptHints: ["The book is here."],
      sampleTitle: "Bài gợi ý",
      sample: "The book is here.\nShe is the teacher.\nWe are at school.\nI like music.",
    },
  ],
};
