import { getRulesForDay } from "@/data/curriculum/month-02/day-rules";
import { createPracticeMeta } from "@/data/practice/shared";
import type { PracticeLesson } from "@/types/practice";

export const practiceDay01: PracticeLesson = {
  meta: { ...createPracticeMeta(1, "Present Simple là gì", 2), totalScreens: 9 },
  hints: {
    rules: getRulesForDay(1, ""),
    vocabulary: [
      { en: "every day", vi: "mỗi ngày" },
      { en: "always", vi: "luôn luôn" },
      { en: "usually", vi: "thường" },
      { en: "sometimes", vi: "đôi khi" },
      { en: "often", vi: "thường xuyên" },
      { en: "habit", vi: "thói quen" },
      { en: "routine", vi: "thói quen hàng ngày" },
    ],
    grammarNotes: [
      "Present Simple = thói quen, sự thật, lịch trình.",
      "Dấu hiệu: every day, always, usually, sometimes, often.",
      "I study every day. · School starts at 7 a.m.",
    ],
  },
  screens: [
    {
      type: "match",
      title: "Match frequency words (1).\nNối tần suất (1).",
      instruction: "Match the English word with its meaning.\nNối từ tiếng Anh với nghĩa tiếng Việt.",
      words: [
        { id: "w-every", label: "every day" },
        { id: "w-always", label: "always" },
        { id: "w-usually", label: "usually" },
        { id: "w-sometimes", label: "sometimes" },
      ],
      pairs: [
        {
          id: "p-every",
          imageAlt: "mỗi ngày",
          label: "mỗi ngày",
          correctWordId: "w-every",
        },
        {
          id: "p-always",
          imageAlt: "luôn luôn",
          label: "luôn luôn",
          correctWordId: "w-always",
        },
        {
          id: "p-usually",
          imageAlt: "thường",
          label: "thường",
          correctWordId: "w-usually",
        },
        {
          id: "p-sometimes",
          imageAlt: "đôi khi",
          label: "đôi khi",
          correctWordId: "w-sometimes",
        },
      ],
    },
    {
      type: "match",
      title: "Match frequency words (2).\nNối tần suất (2).",
      instruction: "Match the English word with its meaning.\nNối từ tiếng Anh với nghĩa tiếng Việt.",
      words: [
        { id: "w-often", label: "often" },
        { id: "w-habit", label: "habit" },
        { id: "w-routine", label: "routine" },
      ],
      pairs: [
        {
          id: "p-often",
          imageAlt: "thường xuyên",
          label: "thường xuyên",
          correctWordId: "w-often",
        },
        {
          id: "p-habit",
          imageAlt: "thói quen",
          label: "thói quen",
          correctWordId: "w-habit",
        },
        {
          id: "p-routine",
          imageAlt: "thói quen hàng ngày",
          label: "thói quen hàng ngày",
          correctWordId: "w-routine",
        },
      ],
    },
    {
      type: "categorize",
      title: "Frequency or idea?\nTần suất hay khái niệm?",
      instruction: "Drag each word into the right group.\nKéo từ vào đúng nhóm.",
      categories: [
        { id: "cat-freq", label: "Tần suất (frequency)" },
        { id: "cat-concept", label: "Khái niệm" },
      ],
      items: [
        { id: "c-every", label: "every day", correctCategoryId: "cat-freq" },
        { id: "c-always", label: "always", correctCategoryId: "cat-freq" },
        { id: "c-usually", label: "usually", correctCategoryId: "cat-freq" },
        { id: "c-sometimes", label: "sometimes", correctCategoryId: "cat-freq" },
        { id: "c-often", label: "often", correctCategoryId: "cat-freq" },
        { id: "c-habit", label: "habit", correctCategoryId: "cat-concept" },
        { id: "c-routine", label: "routine", correctCategoryId: "cat-concept" },
      ],
    },
    {
      type: "sentence-drag",
      title: "Fill in the frequency word.\nĐiền tần suất.",
      instruction: "Drag a frequency phrase into the Present Simple sentence.\nKéo cụm tần suất vào chỗ trống trong câu Present Simple.",
      wordBank: [
        { id: "s-every", label: "every day" },
        { id: "s-usually", label: "usually" },
        { id: "s-sometimes", label: "sometimes" },
        { id: "s-often", label: "often" },
        { id: "s-always", label: "always" },
      ],
      sentences: [
        {
          id: "sent-1",
          parts: [
            { kind: "text", value: "I study English " },
            { kind: "blank", id: "sd1", correctWordId: "s-every", width: "md" },
            { kind: "text", value: "." },
          ],
        },
        {
          id: "sent-2",
          parts: [
            { kind: "text", value: "I " },
            { kind: "blank", id: "sd2", correctWordId: "s-usually", width: "md" },
            { kind: "text", value: " get up at 6." },
          ],
        },
        {
          id: "sent-3",
          parts: [
            { kind: "text", value: "She " },
            { kind: "blank", id: "sd3", correctWordId: "s-sometimes", width: "md" },
            { kind: "text", value: " reads books." },
          ],
        },
        {
          id: "sent-4",
          parts: [
            { kind: "text", value: "They play football " },
            { kind: "blank", id: "sd4", correctWordId: "s-often", width: "md" },
            { kind: "text", value: "." },
          ],
        },
        {
          id: "sent-5",
          parts: [
            { kind: "text", value: "Nam " },
            { kind: "blank", id: "sd5", correctWordId: "s-always", width: "md" },
            { kind: "text", value: " studies hard." },
          ],
        },
      ],
    },
    {
      type: "dropdown",
      title: "Choose the correct word.\nChọn đúng trong câu.",
      instruction: "Complete the Present Simple sentence.\nHoàn thành câu Present Simple.",
      questions: [
        {
          id: "q1",
          parts: [
            { kind: "text", value: "I study English " },
            {
              kind: "select",
              id: "q1a",
              options: [
                { id: "q1a-every", label: "every day" },
                { id: "q1a-now", label: "now" },
                { id: "q1a-yesterday", label: "yesterday" },
              ],
              correctOptionId: "q1a-every",
            },
            { kind: "text", value: "." },
          ],
        },
        {
          id: "q2",
          parts: [
            { kind: "text", value: "School " },
            {
              kind: "select",
              id: "q2a",
              options: [
                { id: "q2a-starts", label: "starts" },
                { id: "q2a-start", label: "start" },
                { id: "q2a-starting", label: "starting" },
              ],
              correctOptionId: "q2a-starts",
            },
            { kind: "text", value: " at 7 a.m." },
          ],
        },
        {
          id: "q3",
          parts: [
            { kind: "text", value: "I " },
            {
              kind: "select",
              id: "q3a",
              options: [
                { id: "q3a-usually", label: "usually" },
                { id: "q3a-usual", label: "usual" },
                { id: "q3a-use", label: "use" },
              ],
              correctOptionId: "q3a-usually",
            },
            { kind: "text", value: " get up at 6." },
          ],
        },
        {
          id: "q4",
          parts: [
            { kind: "text", value: "They " },
            {
              kind: "select",
              id: "q4a",
              options: [
                { id: "q4a-play", label: "play" },
                { id: "q4a-plays", label: "plays" },
                { id: "q4a-playing", label: "playing" },
              ],
              correctOptionId: "q4a-play",
            },
            { kind: "text", value: " football on Sunday." },
          ],
        },
      ],
    },
    {
      type: "reorder",
      title: "Order the dialogue.\nSắp xếp hội thoại.",
      instruction:
        "Put the lines in order. Nam and Lan talk about daily habits.\nSắp xếp các câu theo đúng thứ tự hội thoại về thói quen hàng ngày của Nam và Lan.",
      fixedFirst: true,
      lines: [
        { id: "r1", text: "Nam: I study English every day." },
        { id: "r2", text: "Lan: I usually get up at 6." },
        { id: "r3", text: "Nam: School starts at 7 a.m." },
        { id: "r4", text: "Lan: She sometimes reads books." },
        { id: "r5", text: "Nam: They play football on Sunday." },
      ],
      correctOrder: ["r1", "r2", "r3", "r4", "r5"],
    },
    {
      type: "reading-fill",
      title: "Nam's habits.\nThói quen của Nam.",
      instruction:
        "Read the passage and fill in a word (every day, usually, sometimes, often, habit, routine).\nĐọc đoạn văn và điền từ (every day, usually, sometimes, often, habit, routine).",
      passage:
        "Nam is a student in class 9A. He has a good study habit. Every day he studies English. He usually gets up at 6 a.m. School starts at 7 a.m. — that is his morning routine. She sometimes reads books after class. They often play football on Sunday. Present Simple describes habits and facts.",
      prompts: [
        {
          id: "rf1",
          label: "Nam studies English ___.",
          correctAnswers: ["every day"],
        },
        {
          id: "rf2",
          label: "He ___ gets up at 6.",
          correctAnswers: ["usually"],
        },
        {
          id: "rf3",
          label: "She ___ reads books.",
          correctAnswers: ["sometimes"],
        },
        {
          id: "rf4",
          label: "They ___ play football on Sunday.",
          correctAnswers: ["often"],
        },
        {
          id: "rf5",
          label: "Nam has a good study ___.",
          correctAnswers: ["habit"],
        },
        {
          id: "rf6",
          label: "That is his morning ___.",
          correctAnswers: ["routine"],
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
          text: "I study English every day.",
          hint: "Tôi học tiếng Anh mỗi ngày.",
        },
        {
          id: "dic-2",
          text: "Nam is a student.",
          hint: "Nam là học sinh (sự thật).",
        },
        {
          id: "dic-3",
          text: "School starts at 7 a.m.",
          hint: "Trường bắt đầu lúc 7 giờ sáng.",
        },
        {
          id: "dic-4",
          text: "I usually get up at 6.",
          hint: "Tôi thường dậy lúc 6 giờ.",
        },
        {
          id: "dic-5",
          text: "She sometimes reads books.",
          hint: "Cô ấy đôi khi đọc sách.",
        },
        {
          id: "dic-6",
          text: "They play football on Sunday.",
          hint: "Họ chơi bóng vào Chủ nhật.",
        },
      ],
    },
    {
      type: "self-writing",
      title: "Write Present Simple sentences.\nViết câu Present Simple.",
      instruction:
        "Write 3 sentences about Nam's habits. Use every day, usually, or sometimes.\nViết 3 câu về thói quen của Nam, dùng every day, usually hoặc sometimes.",
      promptHints: [
        "I study English every day.",
        "I usually get up at 6.",
        "She sometimes reads books.",
        "They play football on Sunday.",
        "School starts at 7 a.m.",
      ],
      sampleTitle: "Bài gợi ý",
      sample:
        "I study English every day.\nI usually get up at 6.\nShe sometimes reads books.",
    },
  ],
};
