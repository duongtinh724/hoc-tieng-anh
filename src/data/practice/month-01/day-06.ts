import { getRulesForDay } from "@/data/curriculum/month-01/day-rules";
import { createPracticeMeta } from "@/data/practice/shared";
import type { PracticeLesson } from "@/types/practice";

export const practiceDay06: PracticeLesson = {
  meta: { ...createPracticeMeta(6, "Giới thiệu bản thân"), totalScreens: 8 },
  hints: {
    rules: getRulesForDay(6, ""),
    vocabulary: [
      { en: "name", vi: "tên" },
      { en: "years old", vi: "tuổi" },
      { en: "from", vi: "đến từ" },
      { en: "live", vi: "sống" },
      { en: "family", vi: "gia đình" },
      { en: "hobby", vi: "sở thích" },
      { en: "job", vi: "công việc" },
      { en: "friendly", vi: "thân thiện" },
    ],
  },
  screens: [
    {
      type: "match",
      title: "Match the words.\nNối từ.",
      instruction: "Match each word with a picture.\nNối từ với ảnh.",
      words: [
        { id: "w-name", label: "name" },
        { id: "w-family", label: "family" },
        { id: "w-school", label: "school" },
        { id: "w-student", label: "student" },
        { id: "w-home", label: "home" },
      ],
      pairs: [
        { id: "p-name", imageUrl: "/images/practice/tobe/name.jpg", imageAlt: "tên", label: "tên", correctWordId: "w-name" },
        { id: "p-family", imageUrl: "/images/practice/tobe/family.jpg", imageAlt: "gia đình", label: "gia đình", correctWordId: "w-family" },
        { id: "p-school", imageUrl: "/images/practice/nouns-photo/school.jpg", imageAlt: "trường", label: "trường", correctWordId: "w-school" },
        { id: "p-student", imageUrl: "/images/practice/nouns-photo/student.jpg", imageAlt: "học sinh", label: "học sinh", correctWordId: "w-student" },
        { id: "p-home", imageUrl: "/images/practice/nouns-photo/house.jpg", imageAlt: "nhà", label: "nhà", correctWordId: "w-home" },
      ],
    },
    {
      type: "categorize",
      title: "Which pattern?\nMẫu nào?",
      instruction: "Drag each phrase into the right pattern.\nKéo cụm từ vào đúng mẫu câu.",
      categories: [
        { id: "cat-name", label: "My name is …" },
        { id: "cat-be", label: "I am …" },
        { id: "cat-live", label: "I live in …" },
      ],
      items: [
        { id: "c-1", label: "Nam", correctCategoryId: "cat-name" },
        { id: "c-2", label: "fifteen years old", correctCategoryId: "cat-be" },
        { id: "c-3", label: "a student", correctCategoryId: "cat-be" },
        { id: "c-4", label: "from Vietnam", correctCategoryId: "cat-be" },
        { id: "c-5", label: "Hanoi", correctCategoryId: "cat-live" },
      ],
    },
    {
      type: "sentence-drag",
      title: "Fill the sentence.\nĐiền vào câu.",
      instruction: "Drag the word into the blank.\nKéo từ vào chỗ trống.",
      wordBank: [
        { id: "s1", label: "name" },
        { id: "s2", label: "old" },
        { id: "s3", label: "from" },
        { id: "s4", label: "live" },
        { id: "s5", label: "hobby" },
      ],
      sentences: [
        { id: "sd1", parts: [{ kind: "text", value: "My " }, { kind: "blank", id: "b1", correctWordId: "s1" }, { kind: "text", value: " is Nam." }] },
        { id: "sd2", parts: [{ kind: "text", value: "I am fifteen years " }, { kind: "blank", id: "b2", correctWordId: "s2" }, { kind: "text", value: "." }] },
        { id: "sd3", parts: [{ kind: "text", value: "I am " }, { kind: "blank", id: "b3", correctWordId: "s3" }, { kind: "text", value: " Vietnam." }] },
        { id: "sd4", parts: [{ kind: "text", value: "I " }, { kind: "blank", id: "b4", correctWordId: "s4" }, { kind: "text", value: " in Hanoi." }] },
        { id: "sd5", parts: [{ kind: "text", value: "My " }, { kind: "blank", id: "b5", correctWordId: "s5" }, { kind: "text", value: " is football." }] },
      ],
    },
    {
      type: "dropdown",
      title: "Choose the word.\nChọn từ đúng.",
      instruction: "Choose the word that completes the introduction.\nChọn từ để hoàn thành câu giới thiệu.",
      questions: [
        { id: "q1", parts: [{ kind: "text", value: "My name " }, { kind: "select", id: "q1a", correctOptionId: "q1-ok", options: [{ id: "q1-ok", label: "is" }, { id: "q1-no", label: "am" }, { id: "q1-no2", label: "are" }] }, { kind: "text", value: " Nam." }] },
        { id: "q2", parts: [{ kind: "text", value: "I am fifteen " }, { kind: "select", id: "q2a", correctOptionId: "q2-ok", options: [{ id: "q2-ok", label: "years old" }, { id: "q2-no", label: "year" }, { id: "q2-no2", label: "old years" }] }, { kind: "text", value: "." }] },
        { id: "q3", parts: [{ kind: "text", value: "I " }, { kind: "select", id: "q3a", correctOptionId: "q3-ok", options: [{ id: "q3-ok", label: "live" }, { id: "q3-no", label: "lives" }, { id: "q3-no2", label: "am live" }] }, { kind: "text", value: " in Hanoi." }] },
        { id: "q4", parts: [{ kind: "text", value: "My family " }, { kind: "select", id: "q4a", correctOptionId: "q4-ok", options: [{ id: "q4-ok", label: "is" }, { id: "q4-no", label: "am" }, { id: "q4-no2", label: "are" }] }, { kind: "text", value: " small." }] },
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
        { id: "sen-1", label: "Câu 1", lines: [{ id: "s10", text: "My" }, { id: "s11", text: "name" }, { id: "s12", text: "is" }, { id: "s13", text: "Nam" }], correctOrder: ["s10", "s11", "s12", "s13"] },
        { id: "sen-2", label: "Câu 2", lines: [{ id: "s20", text: "I" }, { id: "s21", text: "am" }, { id: "s22", text: "fifteen" }, { id: "s23", text: "years" }, { id: "s24", text: "old" }], correctOrder: ["s20", "s21", "s22", "s23", "s24"] },
        { id: "sen-3", label: "Câu 3", lines: [{ id: "s30", text: "I" }, { id: "s31", text: "am" }, { id: "s32", text: "from" }, { id: "s33", text: "Vietnam" }], correctOrder: ["s30", "s31", "s32", "s33"] },
        { id: "sen-4", label: "Câu 4", lines: [{ id: "s40", text: "I" }, { id: "s41", text: "live" }, { id: "s42", text: "in" }, { id: "s43", text: "Hanoi" }], correctOrder: ["s40", "s41", "s42", "s43"] },
        { id: "sen-5", label: "Câu 5", lines: [{ id: "s50", text: "My" }, { id: "s51", text: "hobby" }, { id: "s52", text: "is" }, { id: "s53", text: "football" }], correctOrder: ["s50", "s51", "s52", "s53"] },
      ],
    },
    {
      type: "reading-fill",
      title: "Fill the line.\nĐiền vào dòng.",
      instruction: "Type the missing word.\nGõ từ còn thiếu.",
      passage: "My name is Nam. I am fifteen years old. I am from Vietnam. I live in Hanoi. I am a student. My hobby is football.",
      prompts: [
        { id: "rf1", label: "My ___ is Nam.", correctAnswers: ["name"] },
        { id: "rf2", label: "I am fifteen years ___.", correctAnswers: ["old"] },
        { id: "rf3", label: "I am ___ Vietnam.", correctAnswers: ["from"] },
        { id: "rf4", label: "I ___ in Hanoi.", correctAnswers: ["live"] },
      ],
    },
    {
      type: "dictation",
      title: "Translate into English.\nDịch sang tiếng Anh.",
      instruction: "Read the Vietnamese sentence and write it in English.\nĐọc câu tiếng Việt rồi viết câu tiếng Anh.",
      items: [
        { id: "dic-1", text: "My name is Nam.", hint: "Tên tôi là Nam." },
        { id: "dic-2", text: "I am fifteen years old.", hint: "Tôi 15 tuổi." },
        { id: "dic-3", text: "I am from Vietnam.", hint: "Tôi đến từ Việt Nam." },
        { id: "dic-4", text: "I live in Hanoi.", hint: "Tôi sống ở Hà Nội." },
        { id: "dic-5", text: "My hobby is football.", hint: "Sở thích của tôi là bóng đá." },
      ],
    },
    {
      type: "self-writing",
      title: "Introduce yourself.\nGiới thiệu bản thân.",
      instruction: "Write 4 sentences about you: name, age, where you live, and that you are a student.\nViết 4 câu về bạn: tên, tuổi, nơi ở, và bạn là học sinh.",
      promptHints: ["My name is …", "I am … years old.", "I live in …", "I am a student."],
      sampleTitle: "Bài gợi ý",
      sample: "My name is Nam.\nI am fifteen years old.\nI live in Hanoi.\nI am a student.",
    },
  ],
};
