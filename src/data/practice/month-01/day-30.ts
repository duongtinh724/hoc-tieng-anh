import { getRulesForDay } from "@/data/curriculum/month-01/day-rules";
import { createPracticeMeta } from "@/data/practice/shared";
import type { PracticeLesson } from "@/types/practice";

export const practiceDay30: PracticeLesson = {
  meta: { ...createPracticeMeta(30, "He, she, it thêm -s"), totalScreens: 8 },
  hints: {
    rules: getRulesForDay(30, ""),
    vocabulary: [
      { en: "like", vi: "thích" },
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
        { id: "w-like", label: "like" },
        { id: "w-study", label: "study" },
        { id: "w-go", label: "go" },
        { id: "w-play", label: "play" },
        { id: "w-read", label: "read" },
      ],
      pairs: [
        { id: "p-like", imageUrl: "/images/practice/verbs/like.jpg", imageAlt: "thích", label: "thích", correctWordId: "w-like" },
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
        { id: "c-1", label: "He likes music.", correctCategoryId: "cat-b" },
        { id: "c-2", label: "She studies English.", correctCategoryId: "cat-b" },
        { id: "c-3", label: "Nam goes to school.", correctCategoryId: "cat-b" },
        { id: "c-4", label: "She plays football.", correctCategoryId: "cat-b" },
        { id: "c-5", label: "He reads books.", correctCategoryId: "cat-b" },
        { id: "c-y", label: "I am a student.", correctCategoryId: "cat-a" },
      ],
    },
    {
      type: "sentence-drag",
      title: "Fill the sentence.\nĐiền vào câu.",
      instruction: "Drag a word into the blank.\nKéo từ vào chỗ trống.",
      wordBank: [
        { id: "s1", label: "likes" },
        { id: "s2", label: "studies" },
        { id: "s3", label: "goes" },
        { id: "s4", label: "plays" },
      ],
      sentences: [
        { id: "sd1", parts: [{ kind: "text", value: "He " }, { kind: "blank", id: "b1", correctWordId: "s1" }, { kind: "text", value: " music." }] },
        { id: "sd2", parts: [{ kind: "text", value: "She " }, { kind: "blank", id: "b2", correctWordId: "s2" }, { kind: "text", value: " English." }] },
        { id: "sd3", parts: [{ kind: "text", value: "Nam " }, { kind: "blank", id: "b3", correctWordId: "s3" }, { kind: "text", value: " to school." }] },
        { id: "sd4", parts: [{ kind: "text", value: "She " }, { kind: "blank", id: "b4", correctWordId: "s4" }, { kind: "text", value: " football." }] },
      ],
    },
    {
      type: "dropdown",
      title: "Choose the word.\nChọn từ đúng.",
      instruction: "Choose the correct word.\nChọn từ đúng.",
      questions: [
        { id: "q1", parts: [{ kind: "text", value: "He likes " }, { kind: "select", id: "q1a", correctOptionId: "q1-ok", options: [{ id: "q1-ok", label: "music" }, { id: "q1-no", label: "book" }] }, { kind: "text", value: "." }] },
        { id: "q2", parts: [{ kind: "text", value: "She studies " }, { kind: "select", id: "q2a", correctOptionId: "q2-ok", options: [{ id: "q2-ok", label: "English" }, { id: "q2-no", label: "book" }] }, { kind: "text", value: "." }] },
        { id: "q3", parts: [{ kind: "text", value: "Nam goes to " }, { kind: "select", id: "q3a", correctOptionId: "q3-ok", options: [{ id: "q3-ok", label: "school" }, { id: "q3-no", label: "book" }] }, { kind: "text", value: "." }] },
        { id: "q4", parts: [{ kind: "text", value: "She plays " }, { kind: "select", id: "q4a", correctOptionId: "q4-ok", options: [{ id: "q4-ok", label: "football" }, { id: "q4-no", label: "book" }] }, { kind: "text", value: "." }] },
        { id: "q5", parts: [{ kind: "text", value: "He " }, { kind: "select", id: "q5a", correctOptionId: "q5-ok", options: [{ id: "q5-ok", label: "goes" }, { id: "q5-no", label: "go" }, { id: "q5-no2", label: "going" }] }, { kind: "text", value: " to school." }] },
        { id: "q6", parts: [{ kind: "text", value: "She " }, { kind: "select", id: "q6a", correctOptionId: "q6-ok", options: [{ id: "q6-ok", label: "studies" }, { id: "q6-no", label: "study" }, { id: "q6-no2", label: "studying" }] }, { kind: "text", value: " English." }] },
        { id: "q7", parts: [{ kind: "text", value: "It " }, { kind: "select", id: "q7a", correctOptionId: "q7-ok", options: [{ id: "q7-ok", label: "starts" }, { id: "q7-no", label: "start" }, { id: "q7-no2", label: "starting" }] }, { kind: "text", value: " at 7 a.m." }] },
        { id: "q8", parts: [{ kind: "text", value: "Nam " }, { kind: "select", id: "q8a", correctOptionId: "q8-ok", options: [{ id: "q8-ok", label: "likes" }, { id: "q8-no", label: "like" }, { id: "q8-no2", label: "liking" }] }, { kind: "text", value: " football." }] },
        { id: "q9", parts: [{ kind: "text", value: "My mother " }, { kind: "select", id: "q9a", correctOptionId: "q9-ok", options: [{ id: "q9-ok", label: "cooks" }, { id: "q9-no", label: "cook" }, { id: "q9-no2", label: "cooking" }] }, { kind: "text", value: " dinner." }] },
        { id: "q10", parts: [{ kind: "text", value: "The cat " }, { kind: "select", id: "q10a", correctOptionId: "q10-ok", options: [{ id: "q10-ok", label: "sleeps" }, { id: "q10-no", label: "sleep" }, { id: "q10-no2", label: "sleeping" }] }, { kind: "text", value: " on the chair." }] },
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
        { id: "sen-1", label: "Câu 1", lines: [{ id: "s10", text: "He" }, { id: "s11", text: "likes" }, { id: "s12", text: "music" }], correctOrder: ["s10", "s11", "s12"] },
        { id: "sen-2", label: "Câu 2", lines: [{ id: "s20", text: "She" }, { id: "s21", text: "studies" }, { id: "s22", text: "English" }], correctOrder: ["s20", "s21", "s22"] },
        { id: "sen-3", label: "Câu 3", lines: [{ id: "s30", text: "Nam" }, { id: "s31", text: "goes" }, { id: "s32", text: "to" }, { id: "s33", text: "school" }], correctOrder: ["s30", "s31", "s32", "s33"] },
        { id: "sen-4", label: "Câu 4", lines: [{ id: "s40", text: "She" }, { id: "s41", text: "plays" }, { id: "s42", text: "football" }], correctOrder: ["s40", "s41", "s42"] },
        { id: "sen-5", label: "Câu 5", lines: [{ id: "s50", text: "He" }, { id: "s51", text: "reads" }, { id: "s52", text: "books" }], correctOrder: ["s50", "s51", "s52"] },
      ],
    },
    {
      type: "reading-fill",
      title: "Fill the line.\nĐiền vào dòng.",
      instruction: "Type the missing word.\nGõ từ còn thiếu.",
      passage: "He likes music. She studies English. Nam goes to school. She plays football. He reads books.",
      prompts: [
        { id: "rf1", label: "He ___ music.", correctAnswers: ["likes"] },
        { id: "rf2", label: "She ___ English.", correctAnswers: ["studies"] },
        { id: "rf3", label: "Nam ___ to school.", correctAnswers: ["goes"] },
        { id: "rf4", label: "She ___ football.", correctAnswers: ["plays"] },
      ],
    },
    {
      type: "dictation",
      title: "Translate into English.\nDịch sang tiếng Anh.",
      instruction: "Read the Vietnamese sentence and write it in English.\nĐọc câu tiếng Việt rồi viết câu tiếng Anh.",
      items: [
        { id: "dic-1", text: "He likes music.", hint: "Anh ấy thích nhạc." },
        { id: "dic-2", text: "She studies English.", hint: "Cô ấy học tiếng Anh." },
        { id: "dic-3", text: "Nam goes to school.", hint: "Nam đi học." },
        { id: "dic-4", text: "She plays football.", hint: "Cô ấy chơi bóng." },
        { id: "dic-5", text: "He reads books.", hint: "Anh ấy đọc sách." },
      ],
    },
    {
      type: "self-writing",
      title: "Write about you.\nViết về bạn.",
      instruction: "Write 3 sentences about you.\nViết 3 câu về bạn.",
      promptHints: ["He likes music."],
      sampleTitle: "Bài gợi ý",
      sample: "He likes music.\nShe studies English.\nNam goes to school.\nShe plays football.",
    },
  ],
};
