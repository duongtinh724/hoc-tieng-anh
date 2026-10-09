import { getRulesForDay } from "@/data/curriculum/month-02/day-rules";
import { createPracticeMeta } from "@/data/practice/shared";
import type { PracticeLesson } from "@/types/practice";

export const practiceDay02: PracticeLesson = {
  meta: { ...createPracticeMeta(2, "I / You / We / They + động từ", 2), totalScreens: 9 },
  hints: {
    rules: getRulesForDay(2, ""),
    vocabulary: [
      { en: "live", vi: "sống" },
      { en: "work", vi: "làm việc" },
      { en: "play", vi: "chơi" },
      { en: "eat", vi: "ăn" },
      { en: "drink", vi: "uống" },
      { en: "read", vi: "đọc" },
      { en: "watch", vi: "xem" },
    ],
    grammarNotes: [
      "I / You / We / They + V (nguyên mẫu, không thêm -s).",
      "I live in Bắc Ninh. · You work hard.",
      "We study English. · They play football.",
    ],
  },
  screens: [
    {
      type: "match",
      title: "Match the verbs (1).\nNối động từ (1).",
      instruction: "Match the English word with its meaning.\nNối từ tiếng Anh với nghĩa tiếng Việt.",
      words: [
        { id: "w-live", label: "live" },
        { id: "w-work", label: "work" },
        { id: "w-play", label: "play" },
        { id: "w-eat", label: "eat" },
      ],
      pairs: [
        {
          id: "p-live",
          imageAlt: "sống",
          label: "sống",
          correctWordId: "w-live",
        },
        {
          id: "p-work",
          imageAlt: "làm việc",
          label: "làm việc",
          correctWordId: "w-work",
        },
        {
          id: "p-play",
          imageAlt: "chơi",
          label: "chơi",
          correctWordId: "w-play",
        },
        {
          id: "p-eat",
          imageAlt: "ăn",
          label: "ăn",
          correctWordId: "w-eat",
        },
      ],
    },
    {
      type: "match",
      title: "Match the verbs (2).\nNối động từ (2).",
      instruction: "Match the English word with its meaning.\nNối từ tiếng Anh với nghĩa tiếng Việt.",
      words: [
        { id: "w-drink", label: "drink" },
        { id: "w-read", label: "read" },
        { id: "w-watch", label: "watch" },
      ],
      pairs: [
        {
          id: "p-drink",
          imageAlt: "uống",
          label: "uống",
          correctWordId: "w-drink",
        },
        {
          id: "p-read",
          imageAlt: "đọc",
          label: "đọc",
          correctWordId: "w-read",
        },
        {
          id: "p-watch",
          imageAlt: "xem",
          label: "xem",
          correctWordId: "w-watch",
        },
      ],
    },
    {
      type: "categorize",
      title: "Subject or verb?\nChủ ngữ hay động từ?",
      instruction: "Drag each word into I/You/We/They or the base verb.\nKéo từ vào đúng nhóm: I/You/We/They hoặc động từ nguyên mẫu.",
      categories: [
        { id: "cat-subj", label: "I / You / We / They" },
        { id: "cat-verb", label: "Động từ (nguyên mẫu)" },
      ],
      items: [
        { id: "c-i", label: "I", correctCategoryId: "cat-subj" },
        { id: "c-you", label: "You", correctCategoryId: "cat-subj" },
        { id: "c-we", label: "We", correctCategoryId: "cat-subj" },
        { id: "c-they", label: "They", correctCategoryId: "cat-subj" },
        { id: "c-live", label: "live", correctCategoryId: "cat-verb" },
        { id: "c-work", label: "work", correctCategoryId: "cat-verb" },
        { id: "c-play", label: "play", correctCategoryId: "cat-verb" },
        { id: "c-eat", label: "eat", correctCategoryId: "cat-verb" },
        { id: "c-read", label: "read", correctCategoryId: "cat-verb" },
      ],
    },
    {
      type: "sentence-drag",
      title: "Fill in the base verb.\nĐiền động từ nguyên mẫu.",
      instruction: "Drag the verb into the blank. The subject is I, You, We, or They.\nKéo động từ vào chỗ trống. Chủ ngữ là I, You, We hoặc They.",
      wordBank: [
        { id: "s-live", label: "live" },
        { id: "s-work", label: "work" },
        { id: "s-play", label: "play" },
        { id: "s-eat", label: "eat" },
        { id: "s-watch", label: "watch" },
        { id: "s-read", label: "read" },
      ],
      sentences: [
        {
          id: "sent-1",
          parts: [
            { kind: "text", value: "I " },
            { kind: "blank", id: "sd1", correctWordId: "s-live", width: "md" },
            { kind: "text", value: " in Bắc Ninh." },
          ],
        },
        {
          id: "sent-2",
          parts: [
            { kind: "text", value: "You " },
            { kind: "blank", id: "sd2", correctWordId: "s-work", width: "md" },
            { kind: "text", value: " hard." },
          ],
        },
        {
          id: "sent-3",
          parts: [
            { kind: "text", value: "We " },
            { kind: "blank", id: "sd3", correctWordId: "s-read", width: "md" },
            { kind: "text", value: " English." },
          ],
        },
        {
          id: "sent-4",
          parts: [
            { kind: "text", value: "They " },
            { kind: "blank", id: "sd4", correctWordId: "s-play", width: "md" },
            { kind: "text", value: " football." },
          ],
        },
        {
          id: "sent-5",
          parts: [
            { kind: "text", value: "I " },
            { kind: "blank", id: "sd5", correctWordId: "s-eat", width: "md" },
            { kind: "text", value: " breakfast at 6." },
          ],
        },
        {
          id: "sent-6",
          parts: [
            { kind: "text", value: "We " },
            { kind: "blank", id: "sd6", correctWordId: "s-watch", width: "md" },
            { kind: "text", value: " TV in the evening." },
          ],
        },
      ],
    },
    {
      type: "dropdown",
      title: "Choose the correct verb.\nChọn động từ đúng.",
      instruction: "Complete the sentence: I / You / We / They + base verb.\nHoàn thành câu với I / You / We / They + động từ nguyên mẫu.",
      questions: [
        {
          id: "q1",
          parts: [
            { kind: "text", value: "I " },
            {
              kind: "select",
              id: "q1a",
              options: [
                { id: "q1a-live", label: "live" },
                { id: "q1a-lives", label: "lives" },
                { id: "q1a-living", label: "living" },
              ],
              correctOptionId: "q1a-live",
            },
            { kind: "text", value: " in Bắc Ninh." },
          ],
        },
        {
          id: "q2",
          parts: [
            { kind: "text", value: "You " },
            {
              kind: "select",
              id: "q2a",
              options: [
                { id: "q2a-work", label: "work" },
                { id: "q2a-works", label: "works" },
                { id: "q2a-working", label: "working" },
              ],
              correctOptionId: "q2a-work",
            },
            { kind: "text", value: " hard." },
          ],
        },
        {
          id: "q3",
          parts: [
            { kind: "text", value: "They " },
            {
              kind: "select",
              id: "q3a",
              options: [
                { id: "q3a-play", label: "play" },
                { id: "q3a-plays", label: "plays" },
                { id: "q3a-played", label: "played" },
              ],
              correctOptionId: "q3a-play",
            },
            { kind: "text", value: " football." },
          ],
        },
        {
          id: "q4",
          parts: [
            { kind: "text", value: "We " },
            {
              kind: "select",
              id: "q4a",
              options: [
                { id: "q4a-watch", label: "watch" },
                { id: "q4a-watches", label: "watches" },
                { id: "q4a-watched", label: "watched" },
              ],
              correctOptionId: "q4a-watch",
            },
            { kind: "text", value: " TV in the evening." },
          ],
        },
      ],
    },
    {
      type: "reorder",
      title: "Order the dialogue.\nSắp xếp hội thoại.",
      instruction:
        "Put the lines in order. Each line uses I, You, We, or They + a base verb.\nSắp xếp các câu theo đúng thứ tự hội thoại. Mỗi câu có I, You, We hoặc They + động từ nguyên mẫu.",
      fixedFirst: true,
      lines: [
        { id: "r1", text: "Nam: I live in Bắc Ninh." },
        { id: "r2", text: "Lan: You work hard." },
        { id: "r3", text: "Nam: We study English." },
        { id: "r4", text: "Lan: They play football." },
        { id: "r5", text: "Nam: We watch TV in the evening." },
      ],
      correctOrder: ["r1", "r2", "r3", "r4", "r5"],
    },
    {
      type: "reading-fill",
      title: "Nam's day.\nMột ngày của Nam.",
      instruction:
        "Read the passage and fill in a verb (live, work, play, eat, drink, read, watch).\nĐọc đoạn văn và điền động từ (live, work, play, eat, drink, read, watch).",
      passage:
        "Nam and his friends talk about daily life. I live in Bắc Ninh. You work hard at school. We study and read English every day. They play football after class. I eat breakfast at 6 and drink water. In the evening we watch TV together. I, you, we, they — all use the base verb, no -s.",
      prompts: [
        {
          id: "rf1",
          label: "I ___ in Bắc Ninh.",
          correctAnswers: ["live"],
        },
        {
          id: "rf2",
          label: "You ___ hard.",
          correctAnswers: ["work"],
        },
        {
          id: "rf3",
          label: "They ___ football.",
          correctAnswers: ["play"],
        },
        {
          id: "rf4",
          label: "I ___ breakfast at 6.",
          correctAnswers: ["eat"],
        },
        {
          id: "rf5",
          label: "I ___ water.",
          correctAnswers: ["drink"],
        },
        {
          id: "rf6",
          label: "We ___ TV in the evening.",
          correctAnswers: ["watch"],
        },
      ],
    },
    {
      type: "dictation",
      title: "Listen and write.\nNghe và chép lại.",
      instruction: "Listen to one sentence, type it, then press Check. A hint appears after 3 wrong tries.\nNghe từng câu, gõ vào ô, rồi bấm Kiểm tra. Sai 3 lần thì hiện gợi ý.",
      items: [
        {
          id: "dic-1",
          text: "I live in Bắc Ninh.",
          hint: "Tôi sống ở Bắc Ninh.",
        },
        {
          id: "dic-2",
          text: "You work hard.",
          hint: "Bạn làm việc chăm chỉ.",
        },
        {
          id: "dic-3",
          text: "We study English.",
          hint: "Chúng tôi học tiếng Anh.",
        },
        {
          id: "dic-4",
          text: "They play football.",
          hint: "Họ chơi bóng đá.",
        },
        {
          id: "dic-5",
          text: "I eat breakfast at 6.",
          hint: "Tôi ăn sáng lúc 6 giờ.",
        },
        {
          id: "dic-6",
          text: "We watch TV in the evening.",
          hint: "Chúng tôi xem TV buổi tối.",
        },
      ],
    },
    {
      type: "self-writing",
      title: "Write I / You / We / They sentences.\nViết câu I / You / We / They.",
      instruction:
        "Write 4 sentences: I ..., You ..., We ..., They ... Use live, work, play, eat, read, or watch.\nViết 4 câu: I ..., You ..., We ..., They ... (dùng live, work, play, eat, read hoặc watch).",
      promptHints: [
        "I live in Bắc Ninh.",
        "You work hard.",
        "We study English.",
        "They play football.",
        "I eat breakfast at 6.",
        "We watch TV in the evening.",
      ],
      sampleTitle: "Bài gợi ý",
      sample:
        "I live in Bắc Ninh.\nYou work hard.\nWe study English.\nThey play football.",
    },
  ],
};
