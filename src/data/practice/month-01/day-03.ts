import { getRulesForDay } from "@/data/curriculum/month-01/day-rules";
import { createPracticeMeta } from "@/data/practice/shared";
import type { PracticeLesson } from "@/types/practice";

export const practiceDay03: PracticeLesson = {
  meta: { ...createPracticeMeta(3, "Câu khẳng định với to be (V tobe)"), totalScreens: 7 },
  hints: {
    rules: getRulesForDay(3, ""),
    vocabulary: [
      { en: "doctor", vi: "bác sĩ" },
      { en: "beautiful", vi: "xinh đẹp" },
      { en: "at home", vi: "ở nhà" },
      { en: "good", vi: "tốt" },
      { en: "friend", vi: "bạn" },
    ]
  },
  screens: [
    {
      type: "match",
      title: "Match the words.\nNối từ.",
      instruction: "Match each word with a picture.\nNối từ với ảnh.",
      words: [
        { id: "w-doctor", label: "doctor" },
        { id: "w-beautiful", label: "beautiful" },
        { id: "w-at-home", label: "at home" },
        { id: "w-good", label: "good" },
        { id: "w-friend", label: "friend" },
      ],
      pairs: [
        { id: "p-doctor", imageUrl: "/images/practice/nouns-photo/book.jpg", imageAlt: "bác sĩ", label: "bác sĩ", correctWordId: "w-doctor" },
        { id: "p-beautiful", imageUrl: "/images/practice/nouns-photo/book.jpg", imageAlt: "xinh đẹp", label: "xinh đẹp", correctWordId: "w-beautiful" },
        { id: "p-at-home", imageUrl: "/images/practice/nouns-photo/book.jpg", imageAlt: "ở nhà", label: "ở nhà", correctWordId: "w-at-home" },
        { id: "p-good", imageUrl: "/images/practice/adjectives/good.jpg", imageAlt: "tốt", label: "tốt", correctWordId: "w-good" },
        { id: "p-friend", imageUrl: "/images/practice/tobe/friend.jpg", imageAlt: "bạn", label: "bạn", correctWordId: "w-friend" },
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
        { id: "s4", label: "is" },
        { id: "s5", label: "are" },
      ],
      sentences: [
        { id: "sd1", parts: [{ kind: "text", value: "I " }, { kind: "blank", id: "b1", correctWordId: "s1" }, { kind: "text", value: " a student." }] },
        { id: "sd2", parts: [{ kind: "text", value: "He " }, { kind: "blank", id: "b2", correctWordId: "s2" }, { kind: "text", value: " a doctor." }] },
        { id: "sd3", parts: [{ kind: "text", value: "They " }, { kind: "blank", id: "b3", correctWordId: "s3" }, { kind: "text", value: " at home." }] },
        { id: "sd4", parts: [{ kind: "text", value: "She " }, { kind: "blank", id: "b4", correctWordId: "s4" }, { kind: "text", value: " my friend." }] },
        { id: "sd5", parts: [{ kind: "text", value: "We " }, { kind: "blank", id: "b5", correctWordId: "s5" }, { kind: "text", value: " tired." }] },
      ],
    },
    {
      type: "dropdown",
      title: "Choose the word.\nChọn từ đúng.",
      instruction: "Choose the word that completes the sentence.\nChọn từ để hoàn thành câu.",
      questions: [
        { id: "q1", parts: [{ kind: "text", value: "I am a " }, { kind: "select", id: "q1a", correctOptionId: "q1-ok", options: [{ id: "q1-ok", label: "student" }, { id: "q1-no", label: "happy" }, { id: "q1-no2", label: "home" }] }, { kind: "text", value: "." }] },
        { id: "q2", parts: [{ kind: "text", value: "She is " }, { kind: "select", id: "q2a", correctOptionId: "q2-ok", options: [{ id: "q2-ok", label: "beautiful" }, { id: "q2-no", label: "a home" }, { id: "q2-no2", label: "are" }] }, { kind: "text", value: "." }] },
        { id: "q3", parts: [{ kind: "text", value: "We are " }, { kind: "select", id: "q3a", correctOptionId: "q3-ok", options: [{ id: "q3-ok", label: "at home" }, { id: "q3-no", label: "a student" }, { id: "q3-no2", label: "is" }] }, { kind: "text", value: "." }] },
        { id: "q4", parts: [{ kind: "text", value: "They are good " }, { kind: "select", id: "q4a", correctOptionId: "q4-ok", options: [{ id: "q4-ok", label: "friends" }, { id: "q4-no", label: "happy" }, { id: "q4-no2", label: "home" }] }, { kind: "text", value: "." }] },
        { id: "q5", parts: [{ kind: "text", value: "He is a " }, { kind: "select", id: "q5a", correctOptionId: "q5-ok", options: [{ id: "q5-ok", label: "teacher" }, { id: "q5-no", label: "happy" }, { id: "q5-no2", label: "home" }] }, { kind: "text", value: "." }] },
        { id: "q6", parts: [{ kind: "text", value: "It is " }, { kind: "select", id: "q6a", correctOptionId: "q6-ok", options: [{ id: "q6-ok", label: "new" }, { id: "q6-no", label: "a student" }, { id: "q6-no2", label: "are" }] }, { kind: "text", value: "." }] },
        { id: "q7", parts: [{ kind: "text", value: "You are " }, { kind: "select", id: "q7a", correctOptionId: "q7-ok", options: [{ id: "q7-ok", label: "kind" }, { id: "q7-no", label: "a home" }, { id: "q7-no2", label: "is" }] }, { kind: "text", value: "." }] },
        { id: "q8", parts: [{ kind: "text", value: "Nam is my " }, { kind: "select", id: "q8a", correctOptionId: "q8-ok", options: [{ id: "q8-ok", label: "brother" }, { id: "q8-no", label: "happy" }, { id: "q8-no2", label: "at home" }] }, { kind: "text", value: "." }] },
        { id: "q9", parts: [{ kind: "text", value: "I am " }, { kind: "select", id: "q9a", correctOptionId: "q9-ok", options: [{ id: "q9-ok", label: "fine" }, { id: "q9-no", label: "a home" }, { id: "q9-no2", label: "are" }] }, { kind: "text", value: "." }] },
        { id: "q10", parts: [{ kind: "text", value: "They are at " }, { kind: "select", id: "q10a", correctOptionId: "q10-ok", options: [{ id: "q10-ok", label: "school" }, { id: "q10-no", label: "a student" }, { id: "q10-no2", label: "beautiful" }] }, { kind: "text", value: "." }] },
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
        { id: "sen-2", label: "Câu 2", lines: [{ id: "s20", text: "He" }, { id: "s21", text: "is" }, { id: "s22", text: "a" }, { id: "s23", text: "student" }], correctOrder: ["s20", "s21", "s22", "s23"] },
        { id: "sen-3", label: "Câu 3", lines: [{ id: "s30", text: "They" }, { id: "s31", text: "are" }, { id: "s32", text: "at" }, { id: "s33", text: "home" }], correctOrder: ["s30", "s31", "s32", "s33"] },
        { id: "sen-4", label: "Câu 4", lines: [{ id: "s40", text: "She" }, { id: "s41", text: "is" }, { id: "s42", text: "my" }, { id: "s43", text: "friend" }], correctOrder: ["s40", "s41", "s42", "s43"] },
        { id: "sen-5", label: "Câu 5", lines: [{ id: "s50", text: "We" }, { id: "s51", text: "are" }, { id: "s52", text: "tired" }], correctOrder: ["s50", "s51", "s52"] },
      ],
    },
    {
      type: "reading-fill",
      title: "Fill the line.\nĐiền vào dòng.",
      instruction: "Type am, is, or are.\nGõ am, is hoặc are.",
      passage: "I am a student. He is a doctor. She is beautiful. We are at home. They are good friends.",
      prompts: [
        { id: "rf1", label: "I ___ a student.", correctAnswers: ["am"] },
        { id: "rf2", label: "He ___ a doctor.", correctAnswers: ["is"] },
        { id: "rf3", label: "We ___ at home.", correctAnswers: ["are"] },
        { id: "rf4", label: "They ___ good friends.", correctAnswers: ["are"] },
      ],
    },
    {
      type: "dictation",
      title: "Translate into English.\nDịch sang tiếng Anh.",
      instruction: "Read the Vietnamese sentence and write it in English.\nĐọc câu tiếng Việt rồi viết câu tiếng Anh.",
      items: [
        { id: "dic-1", text: "I am a student.", hint: "Tôi là học sinh." },
        { id: "dic-2", text: "He is tired.", hint: "Anh ấy mệt." },
        { id: "dic-3", text: "We are at home.", hint: "Chúng tôi ở nhà." },
        { id: "dic-4", text: "She is a teacher.", hint: "Cô ấy là giáo viên." },
        { id: "dic-5", text: "They are very happy.", hint: "Họ rất vui vẻ." },
      ],
    },
    {
      type: "self-writing",
      title: "Write about you and your family.\nViết về bạn và gia đình.",
      instruction: "Write 4 affirmative sentences with am / is / are about you, your brother/sister, or parents.\nViết 4 câu khẳng định với am / is / are về bạn, anh/chị/em, bố mẹ.",
      promptHints: [
        "I am a student.",
        "He is my brother.",
        "She is my friend.",
        "We are at home.",
        "They are teachers."
      ],
      sampleTitle: "Bài gợi ý",
      sample: "I am a student.\nHe is my brother.\nShe is my mother.\nWe are at home.",
    },
  ],
};
