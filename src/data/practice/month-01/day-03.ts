import { getRulesForDay } from "@/data/curriculum/month-01/day-rules";
import { createPracticeMeta } from "@/data/practice/shared";
import type { PracticeLesson } from "@/types/practice";

export const practiceDay03: PracticeLesson = {
  meta: { ...createPracticeMeta(3, "Câu khẳng định với to be"), totalScreens: 8 },
  hints: {
    rules: getRulesForDay(3, ""),
    vocabulary: [
      { en: "doctor", vi: "bác sĩ" },
      { en: "beautiful", vi: "xinh đẹp" },
      { en: "at home", vi: "ở nhà" },
      { en: "good", vi: "tốt" },
      { en: "friend", vi: "bạn" },
    ],
  },
  screens: [
    {
      type: "match",
      title: "Match the words.\nNối từ.",
      instruction: "Match each word with a picture.\nNối từ với ảnh.",
      words: [
        { id: "w-student", label: "student" },
        { id: "w-home", label: "home" },
        { id: "w-friend", label: "friend" },
        { id: "w-happy", label: "happy" },
        { id: "w-good", label: "good" },
      ],
      pairs: [
        { id: "p-student", imageUrl: "/images/practice/nouns-photo/student.jpg", imageAlt: "học sinh", label: "học sinh", correctWordId: "w-student" },
        { id: "p-home", imageUrl: "/images/practice/nouns-photo/house.jpg", imageAlt: "nhà", label: "nhà", correctWordId: "w-home" },
        { id: "p-friend", imageUrl: "/images/practice/tobe/friend.jpg", imageAlt: "bạn", label: "bạn", correctWordId: "w-friend" },
        { id: "p-happy", imageUrl: "/images/practice/adjectives/happy.jpg", imageAlt: "vui", label: "vui", correctWordId: "w-happy" },
        { id: "p-good", imageUrl: "/images/practice/adjectives/good.jpg", imageAlt: "tốt", label: "tốt", correctWordId: "w-good" },
      ],
    },
    {
      type: "categorize",
      title: "Noun, adjective, or place?\nDanh từ, tính từ hay nơi chốn?",
      instruction: "Drag each sentence into the right group.\nKéo câu vào đúng nhóm.",
      categories: [
        { id: "cat-noun", label: "+ danh từ" },
        { id: "cat-adj", label: "+ tính từ" },
        { id: "cat-place", label: "+ nơi chốn" },
      ],
      items: [
        { id: "c-1", label: "I am a student.", correctCategoryId: "cat-noun" },
        { id: "c-2", label: "He is a doctor.", correctCategoryId: "cat-noun" },
        { id: "c-3", label: "She is happy.", correctCategoryId: "cat-adj" },
        { id: "c-4", label: "She is beautiful.", correctCategoryId: "cat-adj" },
        { id: "c-5", label: "We are at home.", correctCategoryId: "cat-place" },
        { id: "c-6", label: "They are at home.", correctCategoryId: "cat-place" },
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
      title: "Write affirmative sentences.\nViết câu khẳng định.",
      instruction: "Write 5 affirmative sentences about you, your family, or your friends.\nViết 5 câu khẳng định về bản thân, gia đình hoặc bạn bè.",
      promptHints: ["I am a student.", "She is happy.", "They are at home."],
      sampleTitle: "Bài gợi ý",
      sample: "I am a student.\nHe is a doctor.\nShe is happy.\nWe are at home.\nThey are good friends.",
    },
  ],
};
