import { getRulesForDay } from "@/data/curriculum/month-02/day-rules";
import { createPracticeMeta } from "@/data/practice/shared";
import type { PracticeLesson } from "@/types/practice";

export const practiceDay04: PracticeLesson = {
  meta: createPracticeMeta(4, "Do / Does", 2),
  hints: {
    rules: getRulesForDay(4, ""),
    vocabulary: [
      { en: "do", vi: "trợ động từ (I/you/we/they)" },
      { en: "does", vi: "trợ động từ (he/she/it)" },
      { en: "help", vi: "giúp" },
      { en: "know", vi: "biết" },
      { en: "want", vi: "muốn" },
      { en: "need", vi: "cần" },
      { en: "understand", vi: "hiểu" },
    ],
    grammarNotes: [
      "Do + I/you/we/they + V.",
      "Does + he/she/it + V (V không có -s).",
      "Do you study? · Does she like music?",
    ],
  },
  screens: [
    {
      type: "match",
      title: "Nối từ (1).",
      instruction: "Nối từ tiếng Anh với nghĩa tiếng Việt.",
      words: [
        { id: "w-do", label: "do" },
        { id: "w-does", label: "does" },
        { id: "w-help", label: "help" },
        { id: "w-know", label: "know" },
      ],
      pairs: [
        {
          id: "p-do",
          imageAlt: "trợ động từ (I/you/we/they)",
          label: "trợ động từ (I/you/we/they)",
          correctWordId: "w-do",
        },
        {
          id: "p-does",
          imageAlt: "trợ động từ (he/she/it)",
          label: "trợ động từ (he/she/it)",
          correctWordId: "w-does",
        },
        {
          id: "p-help",
          imageAlt: "giúp",
          label: "giúp",
          correctWordId: "w-help",
        },
        {
          id: "p-know",
          imageAlt: "biết",
          label: "biết",
          correctWordId: "w-know",
        },
      ],
    },
    {
      type: "match",
      title: "Nối từ (2).",
      instruction: "Nối từ tiếng Anh với nghĩa tiếng Việt.",
      words: [
        { id: "w-want", label: "want" },
        { id: "w-need", label: "need" },
        { id: "w-understand", label: "understand" },
      ],
      pairs: [
        {
          id: "p-want",
          imageAlt: "muốn",
          label: "muốn",
          correctWordId: "w-want",
        },
        {
          id: "p-need",
          imageAlt: "cần",
          label: "cần",
          correctWordId: "w-need",
        },
        {
          id: "p-understand",
          imageAlt: "hiểu",
          label: "hiểu",
          correctWordId: "w-understand",
        },
      ],
    },
    {
      type: "categorize",
      title: "Do hay Does?",
      instruction: "Kéo câu hỏi vào đúng nhóm Do hoặc Does.",
      categories: [
        { id: "cat-do", label: "Do + I/you/we/they" },
        { id: "cat-does", label: "Does + he/she/it" },
      ],
      items: [
        { id: "c-q1", label: "Do you study English?", correctCategoryId: "cat-do" },
        { id: "c-q2", label: "Do they play football?", correctCategoryId: "cat-do" },
        { id: "c-q3", label: "Do you need help?", correctCategoryId: "cat-do" },
        { id: "c-q4", label: "Do we understand?", correctCategoryId: "cat-do" },
        { id: "c-q5", label: "Does she like music?", correctCategoryId: "cat-does" },
        { id: "c-q6", label: "Does he go to school?", correctCategoryId: "cat-does" },
        { id: "c-q7", label: "Does she understand?", correctCategoryId: "cat-does" },
      ],
    },
    {
      type: "sentence-drag",
      title: "Điền Do hoặc Does.",
      instruction: "Kéo do hoặc does vào chỗ trống đầu câu hỏi.",
      wordBank: [
        { id: "s-do", label: "Do" },
        { id: "s-does", label: "Does" },
      ],
      sentences: [
        {
          id: "sent-1",
          parts: [
            { kind: "blank", id: "sd1", correctWordId: "s-do", width: "sm" },
            { kind: "text", value: " you study English?" },
          ],
        },
        {
          id: "sent-2",
          parts: [
            { kind: "blank", id: "sd2", correctWordId: "s-does", width: "sm" },
            { kind: "text", value: " she like music?" },
          ],
        },
        {
          id: "sent-3",
          parts: [
            { kind: "blank", id: "sd3", correctWordId: "s-do", width: "sm" },
            { kind: "text", value: " they play football?" },
          ],
        },
        {
          id: "sent-4",
          parts: [
            { kind: "blank", id: "sd4", correctWordId: "s-does", width: "sm" },
            { kind: "text", value: " he go to school?" },
          ],
        },
        {
          id: "sent-5",
          parts: [
            { kind: "blank", id: "sd5", correctWordId: "s-do", width: "sm" },
            { kind: "text", value: " you need help?" },
          ],
        },
        {
          id: "sent-6",
          parts: [
            { kind: "blank", id: "sd6", correctWordId: "s-does", width: "sm" },
            { kind: "text", value: " she understand the lesson?" },
          ],
        },
      ],
    },
    {
      type: "dropdown",
      title: "Chọn Do hoặc Does.",
      instruction: "Hoàn thành câu hỏi Present Simple.",
      questions: [
        {
          id: "q1",
          parts: [
            {
              kind: "select",
              id: "q1a",
              options: [
                { id: "q1a-do", label: "Do" },
                { id: "q1a-does", label: "Does" },
                { id: "q1a-did", label: "Did" },
              ],
              correctOptionId: "q1a-do",
            },
            { kind: "text", value: " you study English?" },
          ],
        },
        {
          id: "q2",
          parts: [
            {
              kind: "select",
              id: "q2a",
              options: [
                { id: "q2a-do", label: "Do" },
                { id: "q2a-does", label: "Does" },
                { id: "q2a-did", label: "Did" },
              ],
              correctOptionId: "q2a-does",
            },
            { kind: "text", value: " she like music?" },
          ],
        },
        {
          id: "q3",
          parts: [
            {
              kind: "select",
              id: "q3a",
              options: [
                { id: "q3a-do", label: "Do" },
                { id: "q3a-does", label: "Does" },
                { id: "q3a-is", label: "Is" },
              ],
              correctOptionId: "q3a-do",
            },
            { kind: "text", value: " they play football?" },
          ],
        },
        {
          id: "q4",
          parts: [
            {
              kind: "select",
              id: "q4a",
              options: [
                { id: "q4a-do", label: "Do" },
                { id: "q4a-does", label: "Does" },
                { id: "q4a-are", label: "Are" },
              ],
              correctOptionId: "q4a-does",
            },
            { kind: "text", value: " he go to school?" },
          ],
        },
      ],
    },
    {
      type: "reorder",
      title: "Sắp xếp hội thoại.",
      instruction:
        "Sắp xếp các câu hỏi và trả lời theo đúng thứ tự hội thoại.",
      fixedFirst: true,
      lines: [
        { id: "r1", text: "Lan: Do you study English?" },
        { id: "r2", text: "Nam: Yes, I do." },
        { id: "r3", text: "Lan: Does she like music?" },
        { id: "r4", text: "Nam: Yes, she does." },
        { id: "r5", text: "Lan: Does he go to school?" },
        { id: "r6", text: "Nam: No, he doesn't." },
      ],
      correctOrder: ["r1", "r2", "r3", "r4", "r5", "r6"],
    },
    {
      type: "reading-fill",
      title: "Hỏi và trả lời.",
      instruction:
        "Đọc đoạn hội thoại và điền do, does, help, know, want, need hoặc understand.",
      passage:
        "Nam and Lan practice questions. Do you study English? Yes, I do. Does she like music? Yes, she does. Do they play football? Yes, they do. Does he go to school? No, he doesn't. Do you need help? I want to understand the lesson. Do you know the answer?",
      prompts: [
        {
          id: "rf1",
          label: "___ you study English? (Do/Does)",
          correctAnswers: ["Do"],
        },
        {
          id: "rf2",
          label: "___ she like music? (Do/Does)",
          correctAnswers: ["Does"],
        },
        {
          id: "rf3",
          label: "___ they play football? (Do/Does)",
          correctAnswers: ["Do"],
        },
        {
          id: "rf4",
          label: "___ he go to school? (Do/Does)",
          correctAnswers: ["Does"],
        },
        {
          id: "rf5",
          label: "Do you ___ help? (cần)",
          correctAnswers: ["need"],
        },
        {
          id: "rf6",
          label: "I want to ___ the lesson. (hiểu)",
          correctAnswers: ["understand"],
        },
      ],
    },
    {
      type: "self-writing",
      title: "Viết câu hỏi Do / Does.",
      instruction:
        "Viết 3 câu hỏi: 2 câu với Do, 1 câu với Does. Có thể dùng study, like, play, go, need, understand.",
      promptHints: [
        "Do you study English?",
        "Do they play football?",
        "Does she like music?",
        "Does he go to school?",
        "Do you need help?",
        "Does she understand?",
      ],
      sampleTitle: "Bài gợi ý",
      sample:
        "Do you study English?\nDo they play football?\nDoes she like music?",
    },
  ],
};
