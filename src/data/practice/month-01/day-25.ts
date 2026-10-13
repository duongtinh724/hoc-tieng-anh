import { getRulesForDay } from "@/data/curriculum/month-01/day-rules";
import { createPracticeMeta } from "@/data/practice/shared";
import type { PracticeLesson } from "@/types/practice";

export const practiceDay25: PracticeLesson = {
  meta: { ...createPracticeMeta(25, "Giới từ thời gian"), totalScreens: 8 },
  hints: {
    rules: getRulesForDay(25, ""),
    vocabulary: [
      { en: "morning", vi: "buổi sáng" },
      { en: "Monday", vi: "thứ Hai" },
      { en: "school", vi: "trường" },
      { en: "class", vi: "lớp" },
      { en: "seven", vi: "bảy" },
    ],
  },
  screens: [
    {
      type: "match",
      title: "Match the words.\nNối từ.",
      instruction: "Match each word with a picture.\nNối từ với ảnh.",
      words: [
        { id: "w-school", label: "school" },
        { id: "w-class", label: "class" },
        { id: "w-i", label: "i" },
        { id: "w-you", label: "you" },
        { id: "w-he", label: "he" },
      ],
      pairs: [
        { id: "p-school", imageUrl: "/images/practice/nouns-photo/school.jpg", imageAlt: "trường", label: "trường", correctWordId: "w-school" },
        { id: "p-class", imageUrl: "/images/practice/tobe/class.jpg", imageAlt: "lớp", label: "lớp", correctWordId: "w-class" },
        { id: "p-i", imageUrl: "/images/practice/pronouns/i.jpg", imageAlt: "i", label: "i", correctWordId: "w-i" },
        { id: "p-you", imageUrl: "/images/practice/pronouns/you.jpg", imageAlt: "you", label: "you", correctWordId: "w-you" },
        { id: "p-he", imageUrl: "/images/practice/pronouns/he.jpg", imageAlt: "he", label: "he", correctWordId: "w-he" },
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
        { id: "c-1", label: "I study in the morning.", correctCategoryId: "cat-b" },
        { id: "c-2", label: "We have class on Monday.", correctCategoryId: "cat-b" },
        { id: "c-3", label: "School is at 7.", correctCategoryId: "cat-a" },
        { id: "c-4", label: "I am at school in the morning.", correctCategoryId: "cat-a" },
        { id: "c-5", label: "The class is on Monday.", correctCategoryId: "cat-a" },
      ],
    },
    {
      type: "sentence-drag",
      title: "Fill the sentence.\nĐiền vào câu.",
      instruction: "Drag a word into the blank.\nKéo từ vào chỗ trống.",
      wordBank: [
        { id: "s1", label: "study" },
        { id: "s2", label: "have" },
        { id: "s3", label: "is" },
        { id: "s4", label: "am" },
      ],
      sentences: [
        { id: "sd1", parts: [{ kind: "text", value: "I " }, { kind: "blank", id: "b1", correctWordId: "s1" }, { kind: "text", value: " in the morning." }] },
        { id: "sd2", parts: [{ kind: "text", value: "We " }, { kind: "blank", id: "b2", correctWordId: "s2" }, { kind: "text", value: " class on Monday." }] },
        { id: "sd3", parts: [{ kind: "text", value: "School " }, { kind: "blank", id: "b3", correctWordId: "s3" }, { kind: "text", value: " at 7." }] },
        { id: "sd4", parts: [{ kind: "text", value: "I " }, { kind: "blank", id: "b4", correctWordId: "s4" }, { kind: "text", value: " at school in the morning." }] },
      ],
    },
    {
      type: "dropdown",
      title: "Choose the word.\nChọn từ đúng.",
      instruction: "Choose the correct word.\nChọn từ đúng.",
      questions: [
        { id: "q1", parts: [{ kind: "text", value: "I study in the " }, { kind: "select", id: "q1a", correctOptionId: "q1-ok", options: [{ id: "q1-ok", label: "morning" }, { id: "q1-no", label: "book" }] }, { kind: "text", value: "." }] },
        { id: "q2", parts: [{ kind: "text", value: "We have class on " }, { kind: "select", id: "q2a", correctOptionId: "q2-ok", options: [{ id: "q2-ok", label: "Monday" }, { id: "q2-no", label: "book" }] }, { kind: "text", value: "." }] },
        { id: "q3", parts: [{ kind: "text", value: "School is at " }, { kind: "select", id: "q3a", correctOptionId: "q3-ok", options: [{ id: "q3-ok", label: "7" }, { id: "q3-no", label: "book" }] }, { kind: "text", value: "." }] },
        { id: "q4", parts: [{ kind: "text", value: "I am at school in the " }, { kind: "select", id: "q4a", correctOptionId: "q4-ok", options: [{ id: "q4-ok", label: "morning" }, { id: "q4-no", label: "book" }] }, { kind: "text", value: "." }] },
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
        { id: "sen-1", label: "Câu 1", lines: [{ id: "s10", text: "I" }, { id: "s11", text: "study" }, { id: "s12", text: "in" }, { id: "s13", text: "the" }, { id: "s14", text: "morning" }], correctOrder: ["s10", "s11", "s12", "s13", "s14"] },
        { id: "sen-2", label: "Câu 2", lines: [{ id: "s20", text: "We" }, { id: "s21", text: "have" }, { id: "s22", text: "class" }, { id: "s23", text: "on" }, { id: "s24", text: "Monday" }], correctOrder: ["s20", "s21", "s22", "s23", "s24"] },
        { id: "sen-3", label: "Câu 3", lines: [{ id: "s30", text: "School" }, { id: "s31", text: "is" }, { id: "s32", text: "at" }, { id: "s33", text: "7" }], correctOrder: ["s30", "s31", "s32", "s33"] },
        { id: "sen-4", label: "Câu 4", lines: [{ id: "s40", text: "I" }, { id: "s41", text: "am" }, { id: "s42", text: "at" }, { id: "s43", text: "school" }, { id: "s44", text: "in" }, { id: "s45", text: "the" }, { id: "s46", text: "morning" }], correctOrder: ["s40", "s41", "s42", "s43", "s44", "s45", "s46"] },
        { id: "sen-5", label: "Câu 5", lines: [{ id: "s50", text: "The" }, { id: "s51", text: "class" }, { id: "s52", text: "is" }, { id: "s53", text: "on" }, { id: "s54", text: "Monday" }], correctOrder: ["s50", "s51", "s52", "s53", "s54"] },
      ],
    },
    {
      type: "reading-fill",
      title: "Fill the line.\nĐiền vào dòng.",
      instruction: "Type the missing word.\nGõ từ còn thiếu.",
      passage: "I study in the morning. We have class on Monday. School is at 7. I am at school in the morning. The class is on Monday.",
      prompts: [
        { id: "rf1", label: "I ___ in the morning.", correctAnswers: ["study"] },
        { id: "rf2", label: "We ___ class on Monday.", correctAnswers: ["have"] },
        { id: "rf3", label: "School ___ at 7.", correctAnswers: ["is"] },
        { id: "rf4", label: "I ___ at school in the morning.", correctAnswers: ["am"] },
      ],
    },
    {
      type: "dictation",
      title: "Translate into English.\nDịch sang tiếng Anh.",
      instruction: "Read the Vietnamese sentence and write it in English.\nĐọc câu tiếng Việt rồi viết câu tiếng Anh.",
      items: [
        { id: "dic-1", text: "I study in the morning.", hint: "Tôi học vào buổi sáng." },
        { id: "dic-2", text: "We have class on Monday.", hint: "Chúng tôi có lớp vào thứ Hai." },
        { id: "dic-3", text: "School is at 7.", hint: "Trường học lúc 7 giờ." },
        { id: "dic-4", text: "I am at school in the morning.", hint: "Tôi ở trường vào buổi sáng." },
        { id: "dic-5", text: "The class is on Monday.", hint: "Lớp học vào thứ Hai." },
      ],
    },
    {
      type: "self-writing",
      title: "Write about you.\nViết về bạn.",
      instruction: "Write 3 sentences about you.\nViết 3 câu về bạn.",
      promptHints: ["I study in the morning."],
      sampleTitle: "Bài gợi ý",
      sample: "I study in the morning.\nWe have class on Monday.\nSchool is at 7.\nI am at school in the morning.",
    },
  ],
};
