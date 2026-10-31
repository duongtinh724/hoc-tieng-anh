import { getRulesForDay } from "@/data/curriculum/month-01/day-rules";
import { createPracticeMeta } from "@/data/practice/shared";
import type { PracticeLesson } from "@/types/practice";

export const practiceDay16: PracticeLesson = {
  meta: { ...createPracticeMeta(16, "Chủ ngữ + động từ + tân ngữ"), totalScreens: 8 },
  hints: {
    rules: getRulesForDay(16, ""),
    vocabulary: [
      { en: "music", vi: "nhạc" },
      { en: "English", vi: "tiếng Anh" },
      { en: "football", vi: "bóng đá" },
      { en: "rice", vi: "cơm" },
      { en: "water", vi: "nước" },
    ],
  },
  screens: [
    {
      type: "match",
      title: "Match the words.\nNối từ.",
      instruction: "Match each word with a picture.\nNối từ với ảnh.",
      words: [
        { id: "w-music", label: "music" },
        { id: "w-english", label: "English" },
        { id: "w-football", label: "football" },
        { id: "w-rice", label: "rice" },
        { id: "w-water", label: "water" },
      ],
      pairs: [
        { id: "p-music", imageUrl: "/images/practice/objects/music.jpg", imageAlt: "nhạc", label: "nhạc", correctWordId: "w-music" },
        { id: "p-english", imageUrl: "/images/practice/objects/english.jpg", imageAlt: "tiếng Anh", label: "tiếng Anh", correctWordId: "w-english" },
        { id: "p-football", imageUrl: "/images/practice/objects/football.jpg", imageAlt: "bóng đá", label: "bóng đá", correctWordId: "w-football" },
        { id: "p-rice", imageUrl: "/images/practice/objects/rice.jpg", imageAlt: "cơm", label: "cơm", correctWordId: "w-rice" },
        { id: "p-water", imageUrl: "/images/practice/objects/water.jpg", imageAlt: "nước", label: "nước", correctWordId: "w-water" },
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
        { id: "c-1", label: "I like music.", correctCategoryId: "cat-b" },
        { id: "c-2", label: "We study English.", correctCategoryId: "cat-b" },
        { id: "c-3", label: "They play football.", correctCategoryId: "cat-b" },
        { id: "c-4", label: "I eat rice.", correctCategoryId: "cat-b" },
        { id: "c-5", label: "You drink water.", correctCategoryId: "cat-b" },
        { id: "c-y", label: "I am a student.", correctCategoryId: "cat-a" },
      ],
    },
    {
      type: "sentence-drag",
      title: "Fill the sentence.\nĐiền vào câu.",
      instruction: "Drag a word into the blank.\nKéo từ vào chỗ trống.",
      wordBank: [
        { id: "s1", label: "like" },
        { id: "s2", label: "study" },
        { id: "s3", label: "play" },
        { id: "s4", label: "eat" },
      ],
      sentences: [
        { id: "sd1", parts: [{ kind: "text", value: "I " }, { kind: "blank", id: "b1", correctWordId: "s1" }, { kind: "text", value: " music." }] },
        { id: "sd2", parts: [{ kind: "text", value: "We " }, { kind: "blank", id: "b2", correctWordId: "s2" }, { kind: "text", value: " English." }] },
        { id: "sd3", parts: [{ kind: "text", value: "They " }, { kind: "blank", id: "b3", correctWordId: "s3" }, { kind: "text", value: " football." }] },
        { id: "sd4", parts: [{ kind: "text", value: "I " }, { kind: "blank", id: "b4", correctWordId: "s4" }, { kind: "text", value: " rice." }] },
      ],
    },
    {
      type: "dropdown",
      title: "Choose the word.\nChọn từ đúng.",
      instruction: "Choose the correct word.\nChọn từ đúng.",
      questions: [
        { id: "q1", parts: [{ kind: "text", value: "I like " }, { kind: "select", id: "q1a", correctOptionId: "q1-ok", options: [{ id: "q1-ok", label: "music" }, { id: "q1-no", label: "book" }] }, { kind: "text", value: "." }] },
        { id: "q2", parts: [{ kind: "text", value: "We study " }, { kind: "select", id: "q2a", correctOptionId: "q2-ok", options: [{ id: "q2-ok", label: "English" }, { id: "q2-no", label: "book" }] }, { kind: "text", value: "." }] },
        { id: "q3", parts: [{ kind: "text", value: "They play " }, { kind: "select", id: "q3a", correctOptionId: "q3-ok", options: [{ id: "q3-ok", label: "football" }, { id: "q3-no", label: "book" }] }, { kind: "text", value: "." }] },
        { id: "q4", parts: [{ kind: "text", value: "I eat " }, { kind: "select", id: "q4a", correctOptionId: "q4-ok", options: [{ id: "q4-ok", label: "rice" }, { id: "q4-no", label: "book" }] }, { kind: "text", value: "." }] },
        { id: "q5", parts: [{ kind: "text", value: "We play " }, { kind: "select", id: "q5a", correctOptionId: "q5-ok", options: [{ id: "q5-ok", label: "football" }, { id: "q5-no", label: "book" }, { id: "q5-no2", label: "go" }] }, { kind: "text", value: "." }] },
        { id: "q6", parts: [{ kind: "text", value: "They drink " }, { kind: "select", id: "q6a", correctOptionId: "q6-ok", options: [{ id: "q6-ok", label: "water" }, { id: "q6-no", label: "book" }, { id: "q6-no2", label: "go" }] }, { kind: "text", value: "." }] },
        { id: "q7", parts: [{ kind: "text", value: "You read " }, { kind: "select", id: "q7a", correctOptionId: "q7-ok", options: [{ id: "q7-ok", label: "books" }, { id: "q7-no", label: "go" }, { id: "q7-no2", label: "am" }] }, { kind: "text", value: "." }] },
        { id: "q8", parts: [{ kind: "text", value: "She likes " }, { kind: "select", id: "q8a", correctOptionId: "q8-ok", options: [{ id: "q8-ok", label: "music" }, { id: "q8-no", label: "go" }, { id: "q8-no2", label: "are" }] }, { kind: "text", value: "." }] },
        { id: "q9", parts: [{ kind: "text", value: "He studies " }, { kind: "select", id: "q9a", correctOptionId: "q9-ok", options: [{ id: "q9-ok", label: "English" }, { id: "q9-no", label: "book" }, { id: "q9-no2", label: "am" }] }, { kind: "text", value: "." }] },
        { id: "q10", parts: [{ kind: "text", value: "I like " }, { kind: "select", id: "q10a", correctOptionId: "q10-ok", options: [{ id: "q10-ok", label: "school" }, { id: "q10-no", label: "go" }, { id: "q10-no2", label: "are" }] }, { kind: "text", value: "." }] },
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
        { id: "sen-1", label: "Câu 1", lines: [{ id: "s10", text: "I" }, { id: "s11", text: "like" }, { id: "s12", text: "music" }], correctOrder: ["s10", "s11", "s12"] },
        { id: "sen-2", label: "Câu 2", lines: [{ id: "s20", text: "We" }, { id: "s21", text: "study" }, { id: "s22", text: "English" }], correctOrder: ["s20", "s21", "s22"] },
        { id: "sen-3", label: "Câu 3", lines: [{ id: "s30", text: "They" }, { id: "s31", text: "play" }, { id: "s32", text: "football" }], correctOrder: ["s30", "s31", "s32"] },
        { id: "sen-4", label: "Câu 4", lines: [{ id: "s40", text: "I" }, { id: "s41", text: "eat" }, { id: "s42", text: "rice" }], correctOrder: ["s40", "s41", "s42"] },
        { id: "sen-5", label: "Câu 5", lines: [{ id: "s50", text: "You" }, { id: "s51", text: "drink" }, { id: "s52", text: "water" }], correctOrder: ["s50", "s51", "s52"] },
      ],
    },
    {
      type: "reading-fill",
      title: "Fill the line.\nĐiền vào dòng.",
      instruction: "Type the missing word.\nGõ từ còn thiếu.",
      passage: "I like music. We study English. They play football. I eat rice. You drink water.",
      prompts: [
        { id: "rf1", label: "I ___ music.", correctAnswers: ["like"] },
        { id: "rf2", label: "We ___ English.", correctAnswers: ["study"] },
        { id: "rf3", label: "They ___ football.", correctAnswers: ["play"] },
        { id: "rf4", label: "I ___ rice.", correctAnswers: ["eat"] },
      ],
    },
    {
      type: "dictation",
      title: "Translate into English.\nDịch sang tiếng Anh.",
      instruction: "Read the Vietnamese sentence and write it in English.\nĐọc câu tiếng Việt rồi viết câu tiếng Anh.",
      items: [
        { id: "dic-1", text: "I like music.", hint: "Tôi thích nhạc." },
        { id: "dic-2", text: "We study English.", hint: "Chúng tôi học tiếng Anh." },
        { id: "dic-3", text: "They play football.", hint: "Họ chơi bóng đá." },
        { id: "dic-4", text: "I eat rice.", hint: "Tôi ăn cơm." },
        { id: "dic-5", text: "You drink water.", hint: "Bạn uống nước." },
      ],
    },
    {
      type: "self-writing",
      title: "Write about you.\nViết về bạn.",
      instruction: "Write 3 sentences about you.\nViết 3 câu về bạn.",
      promptHints: ["I like music."],
      sampleTitle: "Bài gợi ý",
      sample: "I like music.\nWe study English.\nThey play football.\nI eat rice.",
    },
  ],
};
