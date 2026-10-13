import { getRulesForDay } from "@/data/curriculum/month-01/day-rules";
import { createPracticeMeta } from "@/data/practice/shared";
import type { PracticeLesson } from "@/types/practice";

export const practiceDay06: PracticeLesson = {
  meta: { ...createPracticeMeta(6, "Giới thiệu bản thân"), totalScreens: 8 },
  hints: {
    rules: getRulesForDay(6, ""),
    vocabulary: [
      { en: "father", vi: "bố" },
      { en: "mother", vi: "mẹ" },
      { en: "friend", vi: "bạn" },
      { en: "school", vi: "trường" },
      { en: "student", vi: "học sinh" },
    ],
  },
  screens: [
    {
      type: "match",
      title: "Match the words.\nNối từ.",
      instruction: "Match each word with a picture.\nNối từ với ảnh.",
      words: [
        { id: "w-father", label: "father" },
        { id: "w-mother", label: "mother" },
        { id: "w-friend", label: "friend" },
        { id: "w-school", label: "school" },
        { id: "w-student", label: "student" },
      ],
      pairs: [
        { id: "p-father", imageUrl: "/images/practice/tobe/father.jpg", imageAlt: "bố", label: "bố", correctWordId: "w-father" },
        { id: "p-mother", imageUrl: "/images/practice/tobe/mother.jpg", imageAlt: "mẹ", label: "mẹ", correctWordId: "w-mother" },
        { id: "p-friend", imageUrl: "/images/practice/tobe/friend.jpg", imageAlt: "bạn", label: "bạn", correctWordId: "w-friend" },
        { id: "p-school", imageUrl: "/images/practice/nouns-photo/school.jpg", imageAlt: "trường", label: "trường", correctWordId: "w-school" },
        { id: "p-student", imageUrl: "/images/practice/nouns-photo/student.jpg", imageAlt: "học sinh", label: "học sinh", correctWordId: "w-student" },
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
        { id: "c-1", label: "I am Nam.", correctCategoryId: "cat-a" },
        { id: "c-2", label: "I am fifteen years old.", correctCategoryId: "cat-a" },
        { id: "c-3", label: "I am a student.", correctCategoryId: "cat-a" },
        { id: "c-4", label: "You are my friend.", correctCategoryId: "cat-a" },
        { id: "c-5", label: "She is my mother.", correctCategoryId: "cat-a" },
        { id: "c-x", label: "I like music.", correctCategoryId: "cat-b" },
      ],
    },
    {
      type: "sentence-drag",
      title: "Fill the sentence.\nĐiền vào câu.",
      instruction: "Drag a word into the blank.\nKéo từ vào chỗ trống.",
      wordBank: [
        { id: "s1", label: "am" },
        { id: "s2", label: "am" },
        { id: "s3", label: "am" },
        { id: "s4", label: "are" },
      ],
      sentences: [
        { id: "sd1", parts: [{ kind: "text", value: "I " }, { kind: "blank", id: "b1", correctWordId: "s1" }, { kind: "text", value: " Nam." }] },
        { id: "sd2", parts: [{ kind: "text", value: "I " }, { kind: "blank", id: "b2", correctWordId: "s2" }, { kind: "text", value: " fifteen years old." }] },
        { id: "sd3", parts: [{ kind: "text", value: "I " }, { kind: "blank", id: "b3", correctWordId: "s3" }, { kind: "text", value: " a student." }] },
        { id: "sd4", parts: [{ kind: "text", value: "You " }, { kind: "blank", id: "b4", correctWordId: "s4" }, { kind: "text", value: " my friend." }] },
      ],
    },
    {
      type: "dropdown",
      title: "Choose the word.\nChọn từ đúng.",
      instruction: "Choose the correct word.\nChọn từ đúng.",
      questions: [
        { id: "q1", parts: [{ kind: "text", value: "I am " }, { kind: "select", id: "q1a", correctOptionId: "q1-ok", options: [{ id: "q1-ok", label: "Nam" }, { id: "q1-no", label: "book" }] }, { kind: "text", value: "." }] },
        { id: "q2", parts: [{ kind: "text", value: "I am fifteen years " }, { kind: "select", id: "q2a", correctOptionId: "q2-ok", options: [{ id: "q2-ok", label: "old" }, { id: "q2-no", label: "book" }] }, { kind: "text", value: "." }] },
        { id: "q3", parts: [{ kind: "text", value: "I am a " }, { kind: "select", id: "q3a", correctOptionId: "q3-ok", options: [{ id: "q3-ok", label: "student" }, { id: "q3-no", label: "book" }] }, { kind: "text", value: "." }] },
        { id: "q4", parts: [{ kind: "text", value: "You are my " }, { kind: "select", id: "q4a", correctOptionId: "q4-ok", options: [{ id: "q4-ok", label: "friend" }, { id: "q4-no", label: "book" }] }, { kind: "text", value: "." }] },
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
        { id: "sen-1", label: "Câu 1", lines: [{ id: "s10", text: "I" }, { id: "s11", text: "am" }, { id: "s12", text: "Nam" }], correctOrder: ["s10", "s11", "s12"] },
        { id: "sen-2", label: "Câu 2", lines: [{ id: "s20", text: "I" }, { id: "s21", text: "am" }, { id: "s22", text: "fifteen" }, { id: "s23", text: "years" }, { id: "s24", text: "old" }], correctOrder: ["s20", "s21", "s22", "s23", "s24"] },
        { id: "sen-3", label: "Câu 3", lines: [{ id: "s30", text: "I" }, { id: "s31", text: "am" }, { id: "s32", text: "a" }, { id: "s33", text: "student" }], correctOrder: ["s30", "s31", "s32", "s33"] },
        { id: "sen-4", label: "Câu 4", lines: [{ id: "s40", text: "You" }, { id: "s41", text: "are" }, { id: "s42", text: "my" }, { id: "s43", text: "friend" }], correctOrder: ["s40", "s41", "s42", "s43"] },
        { id: "sen-5", label: "Câu 5", lines: [{ id: "s50", text: "She" }, { id: "s51", text: "is" }, { id: "s52", text: "my" }, { id: "s53", text: "mother" }], correctOrder: ["s50", "s51", "s52", "s53"] },
      ],
    },
    {
      type: "reading-fill",
      title: "Fill the line.\nĐiền vào dòng.",
      instruction: "Type the missing word.\nGõ từ còn thiếu.",
      passage: "I am Nam. I am fifteen years old. I am a student. You are my friend. She is my mother.",
      prompts: [
        { id: "rf1", label: "I ___ Nam.", correctAnswers: ["am"] },
        { id: "rf2", label: "I ___ fifteen years old.", correctAnswers: ["am"] },
        { id: "rf3", label: "I ___ a student.", correctAnswers: ["am"] },
        { id: "rf4", label: "You ___ my friend.", correctAnswers: ["are"] },
      ],
    },
    {
      type: "dictation",
      title: "Translate into English.\nDịch sang tiếng Anh.",
      instruction: "Read the Vietnamese sentence and write it in English.\nĐọc câu tiếng Việt rồi viết câu tiếng Anh.",
      items: [
        { id: "dic-1", text: "I am Nam.", hint: "Tôi là Nam." },
        { id: "dic-2", text: "I am fifteen years old.", hint: "Tôi 15 tuổi." },
        { id: "dic-3", text: "I am a student.", hint: "Tôi là học sinh." },
        { id: "dic-4", text: "You are my friend.", hint: "Bạn là bạn tôi." },
        { id: "dic-5", text: "She is my mother.", hint: "Cô ấy là mẹ tôi." },
      ],
    },
    {
      type: "self-writing",
      title: "Write about you.\nViết về bạn.",
      instruction: "Write 3 sentences about you.\nViết 3 câu về bạn.",
      promptHints: ["I am Nam."],
      sampleTitle: "Bài gợi ý",
      sample: "I am Nam.\nI am fifteen years old.\nI am a student.\nYou are my friend.",
    },
  ],
};
