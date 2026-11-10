import { getRulesForDay } from "@/data/curriculum/month-01/day-rules";
import { createPracticeMeta } from "@/data/practice/shared";
import type { PracticeLesson } from "@/types/practice";

export const practiceDay29: PracticeLesson = {
  meta: { ...createPracticeMeta(29, "Hiện tại đơn: câu khẳng định"), totalScreens: 7 },
  hints: {
    rules: getRulesForDay(29, ""),
    vocabulary: [
      { en: "every day", vi: "mỗi ngày" },
      { en: "study", vi: "học" },
      { en: "go", vi: "đi" },
      { en: "play", vi: "chơi" },
      { en: "read", vi: "đọc" },
    ]
  },
  screens: [
    {
      type: "match",
      title: "Match the words.\nNối từ.",
      instruction: "Match each word with a picture.\nNối từ với ảnh.",
      words: [
        { id: "w-every-day", label: "every day" },
        { id: "w-study", label: "study" },
        { id: "w-go", label: "go" },
        { id: "w-play", label: "play" },
        { id: "w-read", label: "read" },
      ],
      pairs: [
        { id: "p-every-day", imageUrl: "/images/practice/grammar/everyday.jpg", imageAlt: "mỗi ngày", label: "mỗi ngày", correctWordId: "w-every-day" },
        { id: "p-study", imageUrl: "/images/practice/verbs/study.jpg", imageAlt: "học", label: "học", correctWordId: "w-study" },
        { id: "p-go", imageUrl: "/images/practice/verbs/go.jpg", imageAlt: "đi", label: "đi", correctWordId: "w-go" },
        { id: "p-play", imageUrl: "/images/practice/verbs/play.jpg", imageAlt: "chơi", label: "chơi", correctWordId: "w-play" },
        { id: "p-read", imageUrl: "/images/practice/verbs/read.jpg", imageAlt: "đọc", label: "đọc", correctWordId: "w-read" },
      ],
    },
    {
      type: "sentence-drag",
      title: "Fill the sentence.\nĐiền vào câu.",
      instruction: "Drag a word into the blank.\nKéo từ vào chỗ trống.",
      wordBank: [
        { id: "s1", label: "am" },
        { id: "s2", label: "study" },
        { id: "s3", label: "play" },
        { id: "s4", label: "like" },
      ],
      sentences: [
        { id: "sd1", parts: [{ kind: "text", value: "I " }, { kind: "blank", id: "b1", correctWordId: "s1" }, { kind: "text", value: " a student." }] },
        { id: "sd2", parts: [{ kind: "text", value: "I " }, { kind: "blank", id: "b2", correctWordId: "s2" }, { kind: "text", value: " every day." }] },
        { id: "sd3", parts: [{ kind: "text", value: "I " }, { kind: "blank", id: "b3", correctWordId: "s3" }, { kind: "text", value: " football." }] },
        { id: "sd4", parts: [{ kind: "text", value: "You " }, { kind: "blank", id: "b4", correctWordId: "s4" }, { kind: "text", value: " music." }] },
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
        { id: "q5", parts: [{ kind: "text", value: "I " }, { kind: "select", id: "q5a", correctOptionId: "q5-ok", options: [{ id: "q5-ok", label: "study" }, { id: "q5-no", label: "studies" }, { id: "q5-no2", label: "studying" }] }, { kind: "text", value: " English every day." }] },
        { id: "q6", parts: [{ kind: "text", value: "We " }, { kind: "select", id: "q6a", correctOptionId: "q6-ok", options: [{ id: "q6-ok", label: "play" }, { id: "q6-no", label: "plays" }, { id: "q6-no2", label: "playing" }] }, { kind: "text", value: " football on Sunday." }] },
        { id: "q7", parts: [{ kind: "text", value: "You " }, { kind: "select", id: "q7a", correctOptionId: "q7-ok", options: [{ id: "q7-ok", label: "live" }, { id: "q7-no", label: "lives" }, { id: "q7-no2", label: "living" }] }, { kind: "text", value: " in Vietnam." }] },
        { id: "q8", parts: [{ kind: "text", value: "They " }, { kind: "select", id: "q8a", correctOptionId: "q8-ok", options: [{ id: "q8-ok", label: "go" }, { id: "q8-no", label: "goes" }, { id: "q8-no2", label: "going" }] }, { kind: "text", value: " to school." }] },
        { id: "q9", parts: [{ kind: "text", value: "I " }, { kind: "select", id: "q9a", correctOptionId: "q9-ok", options: [{ id: "q9-ok", label: "like" }, { id: "q9-no", label: "likes" }, { id: "q9-no2", label: "liking" }] }, { kind: "text", value: " music." }] },
        { id: "q10", parts: [{ kind: "text", value: "We " }, { kind: "select", id: "q10a", correctOptionId: "q10-ok", options: [{ id: "q10-ok", label: "watch" }, { id: "q10-no", label: "watches" }, { id: "q10-no2", label: "watching" }] }, { kind: "text", value: " TV in the evening." }] },
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
        { id: "sen-1", label: "Câu 1", lines: [{ id: "s10", text: "I" }, { id: "s11", text: "am" }, { id: "s12", text: "a" }, { id: "s13", text: "student" }], correctOrder: ["s10", "s11", "s12", "s13"] },
        { id: "sen-2", label: "Câu 2", lines: [{ id: "s20", text: "I" }, { id: "s21", text: "study" }, { id: "s22", text: "every" }, { id: "s23", text: "day" }], correctOrder: ["s20", "s21", "s22", "s23"] },
        { id: "sen-3", label: "Câu 3", lines: [{ id: "s30", text: "I" }, { id: "s31", text: "play" }, { id: "s32", text: "football" }], correctOrder: ["s30", "s31", "s32"] },
        { id: "sen-4", label: "Câu 4", lines: [{ id: "s40", text: "You" }, { id: "s41", text: "like" }, { id: "s42", text: "music" }], correctOrder: ["s40", "s41", "s42"] },
        { id: "sen-5", label: "Câu 5", lines: [{ id: "s50", text: "We" }, { id: "s51", text: "go" }, { id: "s52", text: "to" }, { id: "s53", text: "school" }], correctOrder: ["s50", "s51", "s52", "s53"] },
      ],
    },
    {
      type: "reading-fill",
      title: "Fill the line.\nĐiền vào dòng.",
      instruction: "Type the missing word.\nGõ từ còn thiếu.",
      passage: "I am a student. I study every day. I play football. You like music. We go to school. They are happy.",
      prompts: [
        { id: "rf1", label: "I ___ a student.", correctAnswers: ["am"] },
        { id: "rf2", label: "I ___ every day.", correctAnswers: ["study"] },
        { id: "rf3", label: "I ___ football.", correctAnswers: ["play"] },
        { id: "rf4", label: "You ___ music.", correctAnswers: ["like"] },
      ],
    },
    {
      type: "dictation",
      title: "Translate into English.\nDịch sang tiếng Anh.",
      instruction: "Read the Vietnamese sentence and write it in English.\nĐọc câu tiếng Việt rồi viết câu tiếng Anh.",
      items: [
        { id: "dic-1", text: "I am a student.", hint: "Tôi là học sinh." },
        { id: "dic-2", text: "I study every day.", hint: "Tôi học mỗi ngày." },
        { id: "dic-3", text: "I play football.", hint: "Tôi chơi bóng đá." },
        { id: "dic-4", text: "You like music.", hint: "Bạn thích nhạc." },
        { id: "dic-5", text: "We go to school.", hint: "Chúng tôi đi học." },
        { id: "dic-6", text: "They are happy.", hint: "Họ vui vẻ." },
      ],
    },
    {
      type: "self-writing",
      title: "Your habits.\nThói quen của bạn.",
      instruction: "Write 4 sentences: mix I am… and I study / play / like… about you and one about family. Use: every day, study, go, play, read.\nViết 4 câu: có I am… và I study / play / like… về bạn, một câu về gia đình. Dùng: every day, study, go, play, read.",
      promptHints: [
        "I am a student.",
        "I study every day.",
        "I play football.",
        "My mother likes music.",
        "We go to school."
      ],
      sampleTitle: "Bài gợi ý",
      sample: "I am a student.\nI study English every day.\nI play football after school.\nMy sister likes music.",
    },
  ],
};
