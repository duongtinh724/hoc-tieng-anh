import { getRulesForDay } from "@/data/curriculum/month-01/day-rules";
import { createPracticeMeta } from "@/data/practice/shared";
import type { PracticeLesson } from "@/types/practice";

export const practiceDay15: PracticeLesson = {
  meta: { ...createPracticeMeta(15, "Chủ ngữ + động từ"), totalScreens: 8 },
  hints: {
    rules: getRulesForDay(15, ""),
    vocabulary: [
      { en: "study", vi: "học" },
      { en: "go", vi: "đi" },
      { en: "play", vi: "chơi" },
      { en: "read", vi: "đọc" },
      { en: "work", vi: "làm việc" },
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
        { id: "w-work", label: "work" },
      ],
      pairs: [
        { id: "p-study", imageUrl: "/images/practice/verbs/study.jpg", imageAlt: "học", label: "học", correctWordId: "w-study" },
        { id: "p-go", imageUrl: "/images/practice/verbs/go.jpg", imageAlt: "đi", label: "đi", correctWordId: "w-go" },
        { id: "p-play", imageUrl: "/images/practice/verbs/play.jpg", imageAlt: "chơi", label: "chơi", correctWordId: "w-play" },
        { id: "p-read", imageUrl: "/images/practice/verbs/read.jpg", imageAlt: "đọc", label: "đọc", correctWordId: "w-read" },
        { id: "p-work", imageUrl: "/images/practice/verbs/work.jpg", imageAlt: "làm việc", label: "làm việc", correctWordId: "w-work" },
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
        { id: "c-1", label: "I study.", correctCategoryId: "cat-b" },
        { id: "c-2", label: "You go to school.", correctCategoryId: "cat-b" },
        { id: "c-3", label: "We play football.", correctCategoryId: "cat-b" },
        { id: "c-4", label: "They read.", correctCategoryId: "cat-b" },
        { id: "c-5", label: "I work.", correctCategoryId: "cat-b" },
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
        { id: "sd1", parts: [{ kind: "text", value: "I " }, { kind: "blank", id: "b1", correctWordId: "s1" }, { kind: "text", value: " ." }] },
        { id: "sd2", parts: [{ kind: "text", value: "You " }, { kind: "blank", id: "b2", correctWordId: "s2" }, { kind: "text", value: " to school." }] },
        { id: "sd3", parts: [{ kind: "text", value: "We " }, { kind: "blank", id: "b3", correctWordId: "s3" }, { kind: "text", value: " football." }] },
        { id: "sd4", parts: [{ kind: "text", value: "They " }, { kind: "blank", id: "b4", correctWordId: "s4" }, { kind: "text", value: " ." }] },
      ],
    },
    {
      type: "dropdown",
      title: "Choose the word.\nChọn từ đúng.",
      instruction: "Choose the correct word.\nChọn từ đúng.",
      questions: [
        { id: "q1", parts: [{ kind: "text", value: "I " }, { kind: "select", id: "q1a", correctOptionId: "q1-ok", options: [{ id: "q1-ok", label: "study" }, { id: "q1-no", label: "book" }] }, { kind: "text", value: "." }] },
        { id: "q2", parts: [{ kind: "text", value: "You go to " }, { kind: "select", id: "q2a", correctOptionId: "q2-ok", options: [{ id: "q2-ok", label: "school" }, { id: "q2-no", label: "book" }] }, { kind: "text", value: "." }] },
        { id: "q3", parts: [{ kind: "text", value: "We play " }, { kind: "select", id: "q3a", correctOptionId: "q3-ok", options: [{ id: "q3-ok", label: "football" }, { id: "q3-no", label: "book" }] }, { kind: "text", value: "." }] },
        { id: "q4", parts: [{ kind: "text", value: "They " }, { kind: "select", id: "q4a", correctOptionId: "q4-ok", options: [{ id: "q4-ok", label: "read" }, { id: "q4-no", label: "book" }] }, { kind: "text", value: "." }] },
        { id: "q5", parts: [{ kind: "text", value: "He " }, { kind: "select", id: "q5a", correctOptionId: "q5-ok", options: [{ id: "q5-ok", label: "studies" }, { id: "q5-no", label: "study" }, { id: "q5-no2", label: "book" }] }, { kind: "text", value: " English." }] },
        { id: "q6", parts: [{ kind: "text", value: "We " }, { kind: "select", id: "q6a", correctOptionId: "q6-ok", options: [{ id: "q6-ok", label: "go" }, { id: "q6-no", label: "goes" }, { id: "q6-no2", label: "book" }] }, { kind: "text", value: " to school." }] },
        { id: "q7", parts: [{ kind: "text", value: "I " }, { kind: "select", id: "q7a", correctOptionId: "q7-ok", options: [{ id: "q7-ok", label: "like" }, { id: "q7-no", label: "likes" }, { id: "q7-no2", label: "book" }] }, { kind: "text", value: " music." }] },
        { id: "q8", parts: [{ kind: "text", value: "You " }, { kind: "select", id: "q8a", correctOptionId: "q8-ok", options: [{ id: "q8-ok", label: "play" }, { id: "q8-no", label: "plays" }, { id: "q8-no2", label: "book" }] }, { kind: "text", value: " football." }] },
        { id: "q9", parts: [{ kind: "text", value: "They " }, { kind: "select", id: "q9a", correctOptionId: "q9-ok", options: [{ id: "q9-ok", label: "live" }, { id: "q9-no", label: "lives" }, { id: "q9-no2", label: "book" }] }, { kind: "text", value: " in Hanoi." }] },
        { id: "q10", parts: [{ kind: "text", value: "She " }, { kind: "select", id: "q10a", correctOptionId: "q10-ok", options: [{ id: "q10-ok", label: "works" }, { id: "q10-no", label: "work" }, { id: "q10-no2", label: "book" }] }, { kind: "text", value: " at home." }] },
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
        { id: "sen-1", label: "Câu 1", lines: [{ id: "s10", text: "I" }, { id: "s11", text: "study" }], correctOrder: ["s10", "s11"] },
        { id: "sen-2", label: "Câu 2", lines: [{ id: "s20", text: "You" }, { id: "s21", text: "go" }, { id: "s22", text: "to" }, { id: "s23", text: "school" }], correctOrder: ["s20", "s21", "s22", "s23"] },
        { id: "sen-3", label: "Câu 3", lines: [{ id: "s30", text: "We" }, { id: "s31", text: "play" }, { id: "s32", text: "football" }], correctOrder: ["s30", "s31", "s32"] },
        { id: "sen-4", label: "Câu 4", lines: [{ id: "s40", text: "They" }, { id: "s41", text: "read" }], correctOrder: ["s40", "s41"] },
        { id: "sen-5", label: "Câu 5", lines: [{ id: "s50", text: "I" }, { id: "s51", text: "work" }], correctOrder: ["s50", "s51"] },
      ],
    },
    {
      type: "reading-fill",
      title: "Fill the line.\nĐiền vào dòng.",
      instruction: "Type the missing word.\nGõ từ còn thiếu.",
      passage: "I study. You go to school. We play football. They read. I work.",
      prompts: [
        { id: "rf1", label: "I ___ .", correctAnswers: ["study"] },
        { id: "rf2", label: "You ___ to school.", correctAnswers: ["go"] },
        { id: "rf3", label: "We ___ football.", correctAnswers: ["play"] },
        { id: "rf4", label: "They ___ .", correctAnswers: ["read"] },
      ],
    },
    {
      type: "dictation",
      title: "Translate into English.\nDịch sang tiếng Anh.",
      instruction: "Read the Vietnamese sentence and write it in English.\nĐọc câu tiếng Việt rồi viết câu tiếng Anh.",
      items: [
        { id: "dic-1", text: "I study.", hint: "Tôi học." },
        { id: "dic-2", text: "You go to school.", hint: "Bạn đi học." },
        { id: "dic-3", text: "We play football.", hint: "Chúng tôi chơi bóng." },
        { id: "dic-4", text: "They read.", hint: "Họ đọc." },
        { id: "dic-5", text: "I work.", hint: "Tôi làm việc." },
      ],
    },
    {
      type: "self-writing",
      title: "Write about you.\nViết về bạn.",
      instruction: "Write 3 sentences about you.\nViết 3 câu về bạn.",
      promptHints: ["I study."],
      sampleTitle: "Bài gợi ý",
      sample: "I study.\nYou go to school.\nWe play football.\nThey read.",
    },
  ],
};
