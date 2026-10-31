import { getRulesForDay } from "@/data/curriculum/month-01/day-rules";
import { createPracticeMeta } from "@/data/practice/shared";
import type { PracticeLesson } from "@/types/practice";

export const practiceDay20: PracticeLesson = {
  meta: { ...createPracticeMeta(20, "Gia đình, trường, nhà"), totalScreens: 8 },
  hints: {
    rules: getRulesForDay(20, ""),
    vocabulary: [
      { en: "family", vi: "gia đình" },
      { en: "father", vi: "bố" },
      { en: "mother", vi: "mẹ" },
      { en: "school", vi: "trường" },
      { en: "house", vi: "nhà" },
    ],
  },
  screens: [
    {
      type: "match",
      title: "Match the words.\nNối từ.",
      instruction: "Match each word with a picture.\nNối từ với ảnh.",
      words: [
        { id: "w-family", label: "family" },
        { id: "w-father", label: "father" },
        { id: "w-mother", label: "mother" },
        { id: "w-school", label: "school" },
        { id: "w-house", label: "house" },
      ],
      pairs: [
        { id: "p-family", imageUrl: "/images/practice/tobe/family.jpg", imageAlt: "gia đình", label: "gia đình", correctWordId: "w-family" },
        { id: "p-father", imageUrl: "/images/practice/tobe/father.jpg", imageAlt: "bố", label: "bố", correctWordId: "w-father" },
        { id: "p-mother", imageUrl: "/images/practice/tobe/mother.jpg", imageAlt: "mẹ", label: "mẹ", correctWordId: "w-mother" },
        { id: "p-school", imageUrl: "/images/practice/nouns-photo/school.jpg", imageAlt: "trường", label: "trường", correctWordId: "w-school" },
        { id: "p-house", imageUrl: "/images/practice/nouns-photo/house.jpg", imageAlt: "nhà", label: "nhà", correctWordId: "w-house" },
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
        { id: "c-1", label: "I have a family.", correctCategoryId: "cat-b" },
        { id: "c-2", label: "He is my father.", correctCategoryId: "cat-a" },
        { id: "c-3", label: "She is my mother.", correctCategoryId: "cat-a" },
        { id: "c-4", label: "I study at school.", correctCategoryId: "cat-b" },
        { id: "c-5", label: "There is a house.", correctCategoryId: "cat-a" },
      ],
    },
    {
      type: "sentence-drag",
      title: "Fill the sentence.\nĐiền vào câu.",
      instruction: "Drag a word into the blank.\nKéo từ vào chỗ trống.",
      wordBank: [
        { id: "s1", label: "have" },
        { id: "s2", label: "is" },
        { id: "s3", label: "is" },
        { id: "s4", label: "study" },
      ],
      sentences: [
        { id: "sd1", parts: [{ kind: "text", value: "I " }, { kind: "blank", id: "b1", correctWordId: "s1" }, { kind: "text", value: " a family." }] },
        { id: "sd2", parts: [{ kind: "text", value: "He " }, { kind: "blank", id: "b2", correctWordId: "s2" }, { kind: "text", value: " my father." }] },
        { id: "sd3", parts: [{ kind: "text", value: "She " }, { kind: "blank", id: "b3", correctWordId: "s3" }, { kind: "text", value: " my mother." }] },
        { id: "sd4", parts: [{ kind: "text", value: "I " }, { kind: "blank", id: "b4", correctWordId: "s4" }, { kind: "text", value: " at school." }] },
      ],
    },
    {
      type: "dropdown",
      title: "Choose the word.\nChọn từ đúng.",
      instruction: "Choose the correct word.\nChọn từ đúng.",
      questions: [
        { id: "q1", parts: [{ kind: "text", value: "I have a " }, { kind: "select", id: "q1a", correctOptionId: "q1-ok", options: [{ id: "q1-ok", label: "family" }, { id: "q1-no", label: "book" }] }, { kind: "text", value: "." }] },
        { id: "q2", parts: [{ kind: "text", value: "He is my " }, { kind: "select", id: "q2a", correctOptionId: "q2-ok", options: [{ id: "q2-ok", label: "father" }, { id: "q2-no", label: "book" }] }, { kind: "text", value: "." }] },
        { id: "q3", parts: [{ kind: "text", value: "She is my " }, { kind: "select", id: "q3a", correctOptionId: "q3-ok", options: [{ id: "q3-ok", label: "mother" }, { id: "q3-no", label: "book" }] }, { kind: "text", value: "." }] },
        { id: "q4", parts: [{ kind: "text", value: "I study at " }, { kind: "select", id: "q4a", correctOptionId: "q4-ok", options: [{ id: "q4-ok", label: "school" }, { id: "q4-no", label: "book" }] }, { kind: "text", value: "." }] },
        { id: "q5", parts: [{ kind: "text", value: "My " }, { kind: "select", id: "q5a", correctOptionId: "q5-ok", options: [{ id: "q5-ok", label: "father" }, { id: "q5-no", label: "book" }, { id: "q5-no2", label: "go" }] }, { kind: "text", value: " is a doctor." }] },
        { id: "q6", parts: [{ kind: "text", value: "My " }, { kind: "select", id: "q6a", correctOptionId: "q6-ok", options: [{ id: "q6-ok", label: "mother" }, { id: "q6-no", label: "book" }, { id: "q6-no2", label: "go" }] }, { kind: "text", value: " is a teacher." }] },
        { id: "q7", parts: [{ kind: "text", value: "I live in a " }, { kind: "select", id: "q7a", correctOptionId: "q7-ok", options: [{ id: "q7-ok", label: "house" }, { id: "q7-no", label: "book" }, { id: "q7-no2", label: "go" }] }, { kind: "text", value: "." }] },
        { id: "q8", parts: [{ kind: "text", value: "This is my " }, { kind: "select", id: "q8a", correctOptionId: "q8-ok", options: [{ id: "q8-ok", label: "classroom" }, { id: "q8-no", label: "book" }, { id: "q8-no2", label: "go" }] }, { kind: "text", value: "." }] },
        { id: "q9", parts: [{ kind: "text", value: "We eat at " }, { kind: "select", id: "q9a", correctOptionId: "q9-ok", options: [{ id: "q9-ok", label: "home" }, { id: "q9-no", label: "book" }, { id: "q9-no2", label: "go" }] }, { kind: "text", value: "." }] },
        { id: "q10", parts: [{ kind: "text", value: "She is my " }, { kind: "select", id: "q10a", correctOptionId: "q10-ok", options: [{ id: "q10-ok", label: "sister" }, { id: "q10-no", label: "book" }, { id: "q10-no2", label: "go" }] }, { kind: "text", value: "." }] },
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
        { id: "sen-1", label: "Câu 1", lines: [{ id: "s10", text: "I" }, { id: "s11", text: "have" }, { id: "s12", text: "a" }, { id: "s13", text: "family" }], correctOrder: ["s10", "s11", "s12", "s13"] },
        { id: "sen-2", label: "Câu 2", lines: [{ id: "s20", text: "He" }, { id: "s21", text: "is" }, { id: "s22", text: "my" }, { id: "s23", text: "father" }], correctOrder: ["s20", "s21", "s22", "s23"] },
        { id: "sen-3", label: "Câu 3", lines: [{ id: "s30", text: "She" }, { id: "s31", text: "is" }, { id: "s32", text: "my" }, { id: "s33", text: "mother" }], correctOrder: ["s30", "s31", "s32", "s33"] },
        { id: "sen-4", label: "Câu 4", lines: [{ id: "s40", text: "I" }, { id: "s41", text: "study" }, { id: "s42", text: "at" }, { id: "s43", text: "school" }], correctOrder: ["s40", "s41", "s42", "s43"] },
        { id: "sen-5", label: "Câu 5", lines: [{ id: "s50", text: "There" }, { id: "s51", text: "is" }, { id: "s52", text: "a" }, { id: "s53", text: "house" }], correctOrder: ["s50", "s51", "s52", "s53"] },
      ],
    },
    {
      type: "reading-fill",
      title: "Fill the line.\nĐiền vào dòng.",
      instruction: "Type the missing word.\nGõ từ còn thiếu.",
      passage: "I have a family. He is my father. She is my mother. I study at school. There is a house.",
      prompts: [
        { id: "rf1", label: "I ___ a family.", correctAnswers: ["have"] },
        { id: "rf2", label: "He ___ my father.", correctAnswers: ["is"] },
        { id: "rf3", label: "She ___ my mother.", correctAnswers: ["is"] },
        { id: "rf4", label: "I ___ at school.", correctAnswers: ["study"] },
      ],
    },
    {
      type: "dictation",
      title: "Translate into English.\nDịch sang tiếng Anh.",
      instruction: "Read the Vietnamese sentence and write it in English.\nĐọc câu tiếng Việt rồi viết câu tiếng Anh.",
      items: [
        { id: "dic-1", text: "I have a family.", hint: "Tôi có một gia đình." },
        { id: "dic-2", text: "He is my father.", hint: "Ông ấy là bố tôi." },
        { id: "dic-3", text: "She is my mother.", hint: "Bà ấy là mẹ tôi." },
        { id: "dic-4", text: "I study at school.", hint: "Tôi học ở trường." },
        { id: "dic-5", text: "There is a house.", hint: "Có một ngôi nhà." },
      ],
    },
    {
      type: "self-writing",
      title: "Write about you.\nViết về bạn.",
      instruction: "Write 3 sentences about you.\nViết 3 câu về bạn.",
      promptHints: ["I have a family."],
      sampleTitle: "Bài gợi ý",
      sample: "I have a family.\nHe is my father.\nShe is my mother.\nI study at school.",
    },
  ],
};
