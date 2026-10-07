import { getRulesForDay } from "@/data/curriculum/month-02/day-rules";
import { createPracticeMeta } from "@/data/practice/shared";
import type { PracticeLesson } from "@/types/practice";

export const practiceDay05: PracticeLesson = {
  meta: createPracticeMeta(5, "Don't / Doesn't", 2),
  hints: {
    rules: getRulesForDay(5, ""),
    vocabulary: [
      { en: "don't", vi: "không (I/you/we/they)" },
      { en: "doesn't", vi: "không (he/she/it)" },
      { en: "never", vi: "không bao giờ" },
      { en: "hate", vi: "ghét" },
      { en: "love", vi: "yêu thích" },
      { en: "enjoy", vi: "thích thú" },
      { en: "prefer", vi: "thích hơn" },
    ],
    grammarNotes: [
      "I/You/We/They + don't + V.",
      "He/She/It + doesn't + V (V nguyên mẫu).",
      "I don't like coffee. · She doesn't play games.",
    ],
  },
  screens: [
    {
      type: "match",
      title: "Nối từ (1).",
      instruction: "Nối từ tiếng Anh với nghĩa tiếng Việt.",
      words: [
        { id: "w-dont", label: "don't" },
        { id: "w-doesnt", label: "doesn't" },
        { id: "w-never", label: "never" },
        { id: "w-hate", label: "hate" },
      ],
      pairs: [
        {
          id: "p-dont",
          imageAlt: "không (I/you/we/they)",
          label: "không (I/you/we/they)",
          correctWordId: "w-dont",
        },
        {
          id: "p-doesnt",
          imageAlt: "không (he/she/it)",
          label: "không (he/she/it)",
          correctWordId: "w-doesnt",
        },
        {
          id: "p-never",
          imageAlt: "không bao giờ",
          label: "không bao giờ",
          correctWordId: "w-never",
        },
        {
          id: "p-hate",
          imageAlt: "ghét",
          label: "ghét",
          correctWordId: "w-hate",
        },
      ],
    },
    {
      type: "match",
      title: "Nối từ (2).",
      instruction: "Nối từ tiếng Anh với nghĩa tiếng Việt.",
      words: [
        { id: "w-love", label: "love" },
        { id: "w-enjoy", label: "enjoy" },
        { id: "w-prefer", label: "prefer" },
      ],
      pairs: [
        {
          id: "p-love",
          imageAlt: "yêu thích",
          label: "yêu thích",
          correctWordId: "w-love",
        },
        {
          id: "p-enjoy",
          imageAlt: "thích thú",
          label: "thích thú",
          correctWordId: "w-enjoy",
        },
        {
          id: "p-prefer",
          imageAlt: "thích hơn",
          label: "thích hơn",
          correctWordId: "w-prefer",
        },
      ],
    },
    {
      type: "categorize",
      title: "Don't hay Doesn't?",
      instruction: "Kéo câu phủ định vào đúng nhóm.",
      categories: [
        { id: "cat-dont", label: "don't (I/you/we/they)" },
        { id: "cat-doesnt", label: "doesn't (he/she/it)" },
      ],
      items: [
        { id: "c-q1", label: "I don't like coffee.", correctCategoryId: "cat-dont" },
        { id: "c-q2", label: "We don't watch TV much.", correctCategoryId: "cat-dont" },
        { id: "c-q3", label: "They don't study on Sunday.", correctCategoryId: "cat-dont" },
        { id: "c-q4", label: "You don't enjoy games.", correctCategoryId: "cat-dont" },
        { id: "c-q5", label: "She doesn't play games.", correctCategoryId: "cat-doesnt" },
        { id: "c-q6", label: "He doesn't eat meat.", correctCategoryId: "cat-doesnt" },
        { id: "c-q7", label: "Nam doesn't go to bed late.", correctCategoryId: "cat-doesnt" },
      ],
    },
    {
      type: "sentence-drag",
      title: "Điền don't hoặc doesn't.",
      instruction: "Kéo don't hoặc doesn't vào chỗ trống.",
      wordBank: [
        { id: "s-dont", label: "don't" },
        { id: "s-doesnt", label: "doesn't" },
      ],
      sentences: [
        {
          id: "sent-1",
          parts: [
            { kind: "text", value: "I " },
            { kind: "blank", id: "sd1", correctWordId: "s-dont", width: "sm" },
            { kind: "text", value: " like coffee." },
          ],
        },
        {
          id: "sent-2",
          parts: [
            { kind: "text", value: "She " },
            { kind: "blank", id: "sd2", correctWordId: "s-doesnt", width: "sm" },
            { kind: "text", value: " play games." },
          ],
        },
        {
          id: "sent-3",
          parts: [
            { kind: "text", value: "We " },
            { kind: "blank", id: "sd3", correctWordId: "s-dont", width: "sm" },
            { kind: "text", value: " watch TV much." },
          ],
        },
        {
          id: "sent-4",
          parts: [
            { kind: "text", value: "He " },
            { kind: "blank", id: "sd4", correctWordId: "s-doesnt", width: "sm" },
            { kind: "text", value: " eat meat." },
          ],
        },
        {
          id: "sent-5",
          parts: [
            { kind: "text", value: "They " },
            { kind: "blank", id: "sd5", correctWordId: "s-dont", width: "sm" },
            { kind: "text", value: " study on Sunday." },
          ],
        },
        {
          id: "sent-6",
          parts: [
            { kind: "text", value: "Nam " },
            { kind: "blank", id: "sd6", correctWordId: "s-doesnt", width: "sm" },
            { kind: "text", value: " go to bed late." },
          ],
        },
      ],
    },
    {
      type: "dropdown",
      title: "Chọn don't hoặc doesn't.",
      instruction: "Hoàn thành câu phủ định Present Simple.",
      questions: [
        {
          id: "q1",
          parts: [
            { kind: "text", value: "I " },
            {
              kind: "select",
              id: "q1a",
              options: [
                { id: "q1a-dont", label: "don't" },
                { id: "q1a-doesnt", label: "doesn't" },
                { id: "q1a-not", label: "not" },
              ],
              correctOptionId: "q1a-dont",
            },
            { kind: "text", value: " like coffee." },
          ],
        },
        {
          id: "q2",
          parts: [
            { kind: "text", value: "She " },
            {
              kind: "select",
              id: "q2a",
              options: [
                { id: "q2a-dont", label: "don't" },
                { id: "q2a-doesnt", label: "doesn't" },
                { id: "q2a-not", label: "not" },
              ],
              correctOptionId: "q2a-doesnt",
            },
            { kind: "text", value: " play games." },
          ],
        },
        {
          id: "q3",
          parts: [
            { kind: "text", value: "We " },
            {
              kind: "select",
              id: "q3a",
              options: [
                { id: "q3a-dont", label: "don't" },
                { id: "q3a-doesnt", label: "doesn't" },
                { id: "q3a-didnt", label: "didn't" },
              ],
              correctOptionId: "q3a-dont",
            },
            { kind: "text", value: " watch TV much." },
          ],
        },
        {
          id: "q4",
          parts: [
            { kind: "text", value: "He " },
            {
              kind: "select",
              id: "q4a",
              options: [
                { id: "q4a-dont", label: "don't" },
                { id: "q4a-doesnt", label: "doesn't" },
                { id: "q4a-didnt", label: "didn't" },
              ],
              correctOptionId: "q4a-doesnt",
            },
            { kind: "text", value: " eat meat." },
          ],
        },
      ],
    },
    {
      type: "reorder",
      title: "Sắp xếp hội thoại.",
      instruction:
        "Sắp xếp các câu phủ định theo đúng thứ tự hội thoại giữa Nam và Lan.",
      fixedFirst: true,
      lines: [
        { id: "r1", text: "Nam: I don't like coffee." },
        { id: "r2", text: "Lan: She doesn't play games." },
        { id: "r3", text: "Nam: We don't watch TV much." },
        { id: "r4", text: "Lan: He doesn't eat meat." },
        { id: "r5", text: "Nam: I never go to bed late." },
      ],
      correctOrder: ["r1", "r2", "r3", "r4", "r5"],
    },
    {
      type: "reading-fill",
      title: "Sở thích và thói quen.",
      instruction:
        "Đọc đoạn văn và điền don't, doesn't, never, hate, love, enjoy hoặc prefer.",
      passage:
        "Nam talks about likes and dislikes. I don't like coffee — I prefer tea. She doesn't play games. We don't watch TV much. He doesn't eat meat. They don't study on Sunday. I never go to bed late. Some students love music and enjoy football. Nam hates getting up early.",
      prompts: [
        {
          id: "rf1",
          label: "I ___ like coffee. (phủ định I)",
          correctAnswers: ["don't"],
        },
        {
          id: "rf2",
          label: "She ___ play games. (phủ định she)",
          correctAnswers: ["doesn't"],
        },
        {
          id: "rf3",
          label: "We ___ watch TV much. (phủ định we)",
          correctAnswers: ["don't"],
        },
        {
          id: "rf4",
          label: "He ___ eat meat. (phủ định he)",
          correctAnswers: ["doesn't"],
        },
        {
          id: "rf5",
          label: "I ___ go to bed late. (không bao giờ)",
          correctAnswers: ["never"],
        },
        {
          id: "rf6",
          label: "I ___ tea. (thích hơn — prefer)",
          correctAnswers: ["prefer"],
        },
      ],
    },
    {
      type: "self-writing",
      title: "Viết câu phủ định.",
      instruction:
        "Viết 3 câu phủ định: 2 câu với don't, 1 câu với doesn't. Có thể thêm never.",
      promptHints: [
        "I don't like coffee.",
        "She doesn't play games.",
        "We don't watch TV much.",
        "He doesn't eat meat.",
        "They don't study on Sunday.",
        "I never go to bed late.",
      ],
      sampleTitle: "Bài gợi ý",
      sample:
        "I don't like coffee.\nWe don't watch TV much.\nShe doesn't play games.",
    },
  ],
};
