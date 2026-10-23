import { getRulesForDay } from "@/data/curriculum/month-01/day-rules";
import { createPracticeMeta } from "@/data/practice/shared";
import type { PracticeLesson } from "@/types/practice";

export const practiceDay02: PracticeLesson = {
  meta: { ...createPracticeMeta(2, "To be: am, is, are"), totalScreens: 8 },
  hints: {
    rules: getRulesForDay(2, ""),
    vocabulary: [
      { en: "happy", vi: "vui vẻ" },
      { en: "sad", vi: "buồn" },
      { en: "tired", vi: "mệt" },
      { en: "busy", vi: "bận" },
      { en: "hungry", vi: "đói" },
      { en: "thirsty", vi: "khát" },
      { en: "ready", vi: "sẵn sàng" },
      { en: "fine", vi: "khỏe, ổn" },
    ],
  },
  screens: [
    {
      type: "match",
      title: "Match the words.\nNối từ.",
      instruction: "Match each word with a picture.\nNối từ với ảnh.",
      words: [
        { id: "w-happy", label: "happy" },
        { id: "w-sad", label: "sad" },
        { id: "w-tired", label: "tired" },
        { id: "w-busy", label: "busy" },
        { id: "w-hungry", label: "hungry" },
      ],
      pairs: [
        { id: "p-happy", imageUrl: "/images/practice/adjectives/happy.jpg", imageAlt: "vui", label: "vui", correctWordId: "w-happy" },
        { id: "p-sad", imageUrl: "/images/practice/adjectives/sad.jpg", imageAlt: "buồn", label: "buồn", correctWordId: "w-sad" },
        { id: "p-tired", imageUrl: "/images/practice/tobe/tired.jpg", imageAlt: "mệt", label: "mệt", correctWordId: "w-tired" },
        { id: "p-busy", imageUrl: "/images/practice/tobe/busy.jpg", imageAlt: "bận", label: "bận", correctWordId: "w-busy" },
        { id: "p-hungry", imageUrl: "/images/practice/objects/rice.jpg", imageAlt: "đói", label: "đói", correctWordId: "w-hungry" },
      ],
    },
    {
      type: "categorize",
      title: "am, is, or are?\nam, is hay are?",
      instruction: "Drag each subject into the right verb.\nKéo chủ ngữ vào đúng động từ to be.",
      categories: [
        { id: "cat-am", label: "am" },
        { id: "cat-is", label: "is" },
        { id: "cat-are", label: "are" },
      ],
      items: [
        { id: "c-i", label: "I", correctCategoryId: "cat-am" },
        { id: "c-he", label: "He", correctCategoryId: "cat-is" },
        { id: "c-she", label: "She", correctCategoryId: "cat-is" },
        { id: "c-it", label: "It", correctCategoryId: "cat-is" },
        { id: "c-you", label: "You", correctCategoryId: "cat-are" },
        { id: "c-we", label: "We", correctCategoryId: "cat-are" },
        { id: "c-they", label: "They", correctCategoryId: "cat-are" },
      ],
    },
    {
      type: "sentence-drag",
      title: "Fill am, is, or are.\nĐiền am, is hoặc are.",
      instruction: "Drag am, is, or are into the blank.\nKéo am, is hoặc are vào chỗ trống.",
      wordBank: [
        { id: "s1", label: "am" },
        { id: "s2", label: "is" },
        { id: "s3", label: "are" },
        { id: "s4", label: "are" },
        { id: "s5", label: "is" },
      ],
      sentences: [
        { id: "sd1", parts: [{ kind: "text", value: "I " }, { kind: "blank", id: "b1", correctWordId: "s1" }, { kind: "text", value: " happy." }] },
        { id: "sd2", parts: [{ kind: "text", value: "She " }, { kind: "blank", id: "b2", correctWordId: "s2" }, { kind: "text", value: " a teacher." }] },
        { id: "sd3", parts: [{ kind: "text", value: "They " }, { kind: "blank", id: "b3", correctWordId: "s3" }, { kind: "text", value: " busy." }] },
        { id: "sd4", parts: [{ kind: "text", value: "We " }, { kind: "blank", id: "b4", correctWordId: "s4" }, { kind: "text", value: " ready." }] },
        { id: "sd5", parts: [{ kind: "text", value: "It " }, { kind: "blank", id: "b5", correctWordId: "s5" }, { kind: "text", value: " small." }] },
      ],
    },
    {
      type: "dropdown",
      title: "Choose am, is, or are.\nChọn am, is hoặc are.",
      instruction: "Choose the correct verb.\nChọn động từ đúng.",
      questions: [
        { id: "q1", parts: [{ kind: "text", value: "He " }, { kind: "select", id: "q1a", correctOptionId: "q1-ok", options: [{ id: "q1-ok", label: "is" }, { id: "q1-no", label: "am" }, { id: "q1-no2", label: "are" }] }, { kind: "text", value: " tall." }] },
        { id: "q2", parts: [{ kind: "text", value: "We " }, { kind: "select", id: "q2a", correctOptionId: "q2-ok", options: [{ id: "q2-ok", label: "are" }, { id: "q2-no", label: "is" }, { id: "q2-no2", label: "am" }] }, { kind: "text", value: " students." }] },
        { id: "q3", parts: [{ kind: "text", value: "I " }, { kind: "select", id: "q3a", correctOptionId: "q3-ok", options: [{ id: "q3-ok", label: "am" }, { id: "q3-no", label: "is" }, { id: "q3-no2", label: "are" }] }, { kind: "text", value: " tired." }] },
        { id: "q4", parts: [{ kind: "text", value: "They " }, { kind: "select", id: "q4a", correctOptionId: "q4-ok", options: [{ id: "q4-ok", label: "are" }, { id: "q4-no", label: "is" }, { id: "q4-no2", label: "am" }] }, { kind: "text", value: " happy." }] },
        { id: "q5", parts: [{ kind: "text", value: "It " }, { kind: "select", id: "q5a", correctOptionId: "q5-ok", options: [{ id: "q5-ok", label: "is" }, { id: "q5-no", label: "are" }, { id: "q5-no2", label: "am" }] }, { kind: "text", value: " new." }] },
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
        { id: "sen-1", label: "Câu 1", lines: [{ id: "s10", text: "I" }, { id: "s11", text: "am" }, { id: "s12", text: "happy" }], correctOrder: ["s10", "s11", "s12"] },
        { id: "sen-2", label: "Câu 2", lines: [{ id: "s20", text: "She" }, { id: "s21", text: "is" }, { id: "s22", text: "tired" }], correctOrder: ["s20", "s21", "s22"] },
        { id: "sen-3", label: "Câu 3", lines: [{ id: "s30", text: "They" }, { id: "s31", text: "are" }, { id: "s32", text: "busy" }], correctOrder: ["s30", "s31", "s32"] },
        { id: "sen-4", label: "Câu 4", lines: [{ id: "s40", text: "He" }, { id: "s41", text: "is" }, { id: "s42", text: "hungry" }], correctOrder: ["s40", "s41", "s42"] },
        { id: "sen-5", label: "Câu 5", lines: [{ id: "s50", text: "We" }, { id: "s51", text: "are" }, { id: "s52", text: "ready" }], correctOrder: ["s50", "s51", "s52"] },
      ],
    },
    {
      type: "reading-fill",
      title: "Fill the line.\nĐiền vào dòng.",
      instruction: "Type am, is, or are.\nGõ am, is hoặc are.",
      passage: "I am happy. She is tired. They are busy. We are ready. You are my friend. I am fine.",
      prompts: [
        { id: "rf1", label: "I ___ happy.", correctAnswers: ["am"] },
        { id: "rf2", label: "She ___ tired.", correctAnswers: ["is"] },
        { id: "rf3", label: "They ___ busy.", correctAnswers: ["are"] },
        { id: "rf4", label: "You ___ my friend.", correctAnswers: ["are"] },
        { id: "rf5", label: "I ___ fine.", correctAnswers: ["am"] },
      ],
    },
    {
      type: "dictation",
      title: "Translate into English.\nDịch sang tiếng Anh.",
      instruction: "Read the Vietnamese sentence and write it in English.\nĐọc câu tiếng Việt rồi viết câu tiếng Anh.",
      items: [
        { id: "dic-1", text: "I am happy.", hint: "Tôi vui." },
        { id: "dic-2", text: "She is tired.", hint: "Cô ấy mệt." },
        { id: "dic-3", text: "They are busy.", hint: "Họ bận." },
        { id: "dic-4", text: "He is hungry.", hint: "Anh ấy đói." },
        { id: "dic-5", text: "I am fine.", hint: "Tôi khỏe." },
      ],
    },
    {
      type: "self-writing",
      title: "Write about you.\nViết về bạn.",
      instruction: "Write 3 sentences with am, is, or are. Use happy, tired, busy, hungry, or fine.\nViết 3 câu có am, is hoặc are. Dùng happy, tired, busy, hungry hoặc fine.",
      promptHints: ["I am fine.", "She is tired.", "They are busy."],
      sampleTitle: "Bài gợi ý",
      sample: "I am fine.\nShe is tired.\nThey are busy.",
    },
  ],
};
