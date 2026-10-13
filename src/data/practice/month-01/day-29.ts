import { getRulesForDay } from "@/data/curriculum/month-01/day-rules";
import { createPracticeMeta } from "@/data/practice/shared";
import type { PracticeLesson } from "@/types/practice";

export const practiceDay29: PracticeLesson = {
  meta: { ...createPracticeMeta(29, "Hiện tại đơn: câu khẳng định"), totalScreens: 8 },
  hints: {
    rules: getRulesForDay(29, ""),
    vocabulary: [
      { en: "every day", vi: "mỗi ngày" },
      { en: "study", vi: "học" },
      { en: "go", vi: "đi" },
      { en: "play", vi: "chơi" },
      { en: "read", vi: "đọc" },
    ],
  },
  screens: [
    {
      type: "match",
      title: "Match the words.\nNối từ.",
      instruction: "Match each word with a picture.\nNối từ với ảnh.",
      words: [
        { id: "w-study", label: "study" },
        { id: "w-go", label: "go" },
        { id: "w-play", label: "play" },
        { id: "w-read", label: "read" },
      ],
      pairs: [
        { id: "p-study", imageUrl: "/images/practice/verbs/study.jpg", imageAlt: "học", label: "học", correctWordId: "w-study" },
        { id: "p-go", imageUrl: "/images/practice/verbs/go.jpg", imageAlt: "đi", label: "đi", correctWordId: "w-go" },
        { id: "p-play", imageUrl: "/images/practice/verbs/play.jpg", imageAlt: "chơi", label: "chơi", correctWordId: "w-play" },
        { id: "p-read", imageUrl: "/images/practice/verbs/read.jpg", imageAlt: "đọc", label: "đọc", correctWordId: "w-read" },
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
        { id: "c-1", label: "I study every day.", correctCategoryId: "cat-b" },
        { id: "c-2", label: "You go to school.", correctCategoryId: "cat-b" },
        { id: "c-3", label: "We play football.", correctCategoryId: "cat-b" },
        { id: "c-4", label: "They read books.", correctCategoryId: "cat-b" },
        { id: "c-5", label: "I like music.", correctCategoryId: "cat-b" },
        { id: "c-y", label: "I am a student.", correctCategoryId: "cat-a" },
      ],
    },
    {
      type: "sentence-drag",
      title: "Fill the sentence.\nĐiền vào câu.",
      instruction: "Drag a word into the blank.\nKéo từ vào chỗ trống.",
      wordBank: [
        { id: "s1", label: "study" },
        { id: "s2", label: "go" },
        { id: "s3", label: "play" },
        { id: "s4", label: "read" },
      ],
      sentences: [
        { id: "sd1", parts: [{ kind: "text", value: "I " }, { kind: "blank", id: "b1", correctWordId: "s1" }, { kind: "text", value: " every day." }] },
        { id: "sd2", parts: [{ kind: "text", value: "You " }, { kind: "blank", id: "b2", correctWordId: "s2" }, { kind: "text", value: " to school." }] },
        { id: "sd3", parts: [{ kind: "text", value: "We " }, { kind: "blank", id: "b3", correctWordId: "s3" }, { kind: "text", value: " football." }] },
        { id: "sd4", parts: [{ kind: "text", value: "They " }, { kind: "blank", id: "b4", correctWordId: "s4" }, { kind: "text", value: " books." }] },
      ],
    },
    {
      type: "dropdown",
      title: "Choose the word.\nChọn từ đúng.",
      instruction: "Choose the correct word.\nChọn từ đúng.",
      questions: [
        { id: "q1", parts: [{ kind: "text", value: "I study every " }, { kind: "select", id: "q1a", correctOptionId: "q1-ok", options: [{ id: "q1-ok", label: "day" }, { id: "q1-no", label: "book" }] }, { kind: "text", value: "." }] },
        { id: "q2", parts: [{ kind: "text", value: "You go to " }, { kind: "select", id: "q2a", correctOptionId: "q2-ok", options: [{ id: "q2-ok", label: "school" }, { id: "q2-no", label: "book" }] }, { kind: "text", value: "." }] },
        { id: "q3", parts: [{ kind: "text", value: "We play " }, { kind: "select", id: "q3a", correctOptionId: "q3-ok", options: [{ id: "q3-ok", label: "football" }, { id: "q3-no", label: "book" }] }, { kind: "text", value: "." }] },
        { id: "q4", parts: [{ kind: "text", value: "They read " }, { kind: "select", id: "q4a", correctOptionId: "q4-ok", options: [{ id: "q4-ok", label: "books" }, { id: "q4-no", label: "book" }] }, { kind: "text", value: "." }] },
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
        { id: "sen-1", label: "Câu 1", lines: [{ id: "s10", text: "I" }, { id: "s11", text: "study" }, { id: "s12", text: "every" }, { id: "s13", text: "day" }], correctOrder: ["s10", "s11", "s12", "s13"] },
        { id: "sen-2", label: "Câu 2", lines: [{ id: "s20", text: "You" }, { id: "s21", text: "go" }, { id: "s22", text: "to" }, { id: "s23", text: "school" }], correctOrder: ["s20", "s21", "s22", "s23"] },
        { id: "sen-3", label: "Câu 3", lines: [{ id: "s30", text: "We" }, { id: "s31", text: "play" }, { id: "s32", text: "football" }], correctOrder: ["s30", "s31", "s32"] },
        { id: "sen-4", label: "Câu 4", lines: [{ id: "s40", text: "They" }, { id: "s41", text: "read" }, { id: "s42", text: "books" }], correctOrder: ["s40", "s41", "s42"] },
        { id: "sen-5", label: "Câu 5", lines: [{ id: "s50", text: "I" }, { id: "s51", text: "like" }, { id: "s52", text: "music" }], correctOrder: ["s50", "s51", "s52"] },
      ],
    },
    {
      type: "reading-fill",
      title: "Fill the line.\nĐiền vào dòng.",
      instruction: "Type the missing word.\nGõ từ còn thiếu.",
      passage: "I study every day. You go to school. We play football. They read books. I like music.",
      prompts: [
        { id: "rf1", label: "I ___ every day.", correctAnswers: ["study"] },
        { id: "rf2", label: "You ___ to school.", correctAnswers: ["go"] },
        { id: "rf3", label: "We ___ football.", correctAnswers: ["play"] },
        { id: "rf4", label: "They ___ books.", correctAnswers: ["read"] },
      ],
    },
    {
      type: "dictation",
      title: "Translate into English.\nDịch sang tiếng Anh.",
      instruction: "Read the Vietnamese sentence and write it in English.\nĐọc câu tiếng Việt rồi viết câu tiếng Anh.",
      items: [
        { id: "dic-1", text: "I study every day.", hint: "Tôi học mỗi ngày." },
        { id: "dic-2", text: "You go to school.", hint: "Bạn đi học." },
        { id: "dic-3", text: "We play football.", hint: "Chúng tôi chơi bóng." },
        { id: "dic-4", text: "They read books.", hint: "Họ đọc sách." },
        { id: "dic-5", text: "I like music.", hint: "Tôi thích nhạc." },
      ],
    },
    {
      type: "self-writing",
      title: "Write about you.\nViết về bạn.",
      instruction: "Write 3 sentences about you.\nViết 3 câu về bạn.",
      promptHints: ["I study every day."],
      sampleTitle: "Bài gợi ý",
      sample: "I study every day.\nYou go to school.\nWe play football.\nThey read books.",
    },
  ],
};
