import { getRulesForDay } from "@/data/curriculum/month-02/day-rules";
import { createPracticeMeta } from "@/data/practice/shared";
import type { PracticeLesson } from "@/types/practice";

export const practiceDay06: PracticeLesson = {
  meta: createPracticeMeta(6, "Câu hỏi Present Simple", 2),
  hints: {
    rules: getRulesForDay(6, ""),
    vocabulary: [
      { en: "how often", vi: "bao lâu một lần" },
      { en: "what time", vi: "mấy giờ" },
      { en: "start", vi: "bắt đầu" },
      { en: "finish", vi: "kết thúc" },
      { en: "begin", vi: "bắt đầu" },
      { en: "end", vi: "kết thúc" },
      { en: "exercise", vi: "tập thể dục" },
    ],
    grammarNotes: [
      "Wh- + do/does + S + V?",
      "What do you study? · Where does she live?",
      "How often do you exercise? · What time does school start?",
    ],
  },
  screens: [
    {
      type: "match",
      title: "Nối từ (1).",
      instruction: "Nối từ tiếng Anh với nghĩa tiếng Việt.",
      words: [
        { id: "w-howoften", label: "how often" },
        { id: "w-whattime", label: "what time" },
        { id: "w-start", label: "start" },
        { id: "w-finish", label: "finish" },
      ],
      pairs: [
        {
          id: "p-howoften",
          imageAlt: "bao lâu một lần",
          label: "bao lâu một lần",
          correctWordId: "w-howoften",
        },
        {
          id: "p-whattime",
          imageAlt: "mấy giờ",
          label: "mấy giờ",
          correctWordId: "w-whattime",
        },
        {
          id: "p-start",
          imageAlt: "bắt đầu",
          label: "bắt đầu",
          correctWordId: "w-start",
        },
        {
          id: "p-finish",
          imageAlt: "kết thúc",
          label: "kết thúc",
          correctWordId: "w-finish",
        },
      ],
    },
    {
      type: "match",
      title: "Nối từ (2).",
      instruction: "Nối từ tiếng Anh với nghĩa tiếng Việt.",
      words: [
        { id: "w-begin", label: "begin" },
        { id: "w-end", label: "end" },
        { id: "w-exercise", label: "exercise" },
      ],
      pairs: [
        {
          id: "p-begin",
          imageAlt: "bắt đầu",
          label: "bắt đầu",
          correctWordId: "w-begin",
        },
        {
          id: "p-end",
          imageAlt: "kết thúc",
          label: "kết thúc",
          correctWordId: "w-end",
        },
        {
          id: "p-exercise",
          imageAlt: "tập thể dục",
          label: "tập thể dục",
          correctWordId: "w-exercise",
        },
      ],
    },
    {
      type: "categorize",
      title: "Do hay Does trong câu hỏi Wh-?",
      instruction: "Kéo câu hỏi vào đúng nhóm do hoặc does.",
      categories: [
        { id: "cat-do", label: "Wh- + do + ..." },
        { id: "cat-does", label: "Wh- + does + ..." },
      ],
      items: [
        { id: "c-q1", label: "What do you study?", correctCategoryId: "cat-do" },
        { id: "c-q2", label: "When do they play football?", correctCategoryId: "cat-do" },
        { id: "c-q3", label: "How often do you exercise?", correctCategoryId: "cat-do" },
        { id: "c-q4", label: "Where does she live?", correctCategoryId: "cat-does" },
        { id: "c-q5", label: "What time does school start?", correctCategoryId: "cat-does" },
        { id: "c-q6", label: "Why does he study English?", correctCategoryId: "cat-does" },
        { id: "c-q7", label: "What time does school finish?", correctCategoryId: "cat-does" },
      ],
    },
    {
      type: "sentence-drag",
      title: "Điền do hoặc does.",
      instruction: "Kéo do hoặc does vào câu hỏi Wh-.",
      wordBank: [
        { id: "s-do", label: "do" },
        { id: "s-does", label: "does" },
      ],
      sentences: [
        {
          id: "sent-1",
          parts: [
            { kind: "text", value: "What " },
            { kind: "blank", id: "sd1", correctWordId: "s-do", width: "sm" },
            { kind: "text", value: " you study?" },
          ],
        },
        {
          id: "sent-2",
          parts: [
            { kind: "text", value: "Where " },
            { kind: "blank", id: "sd2", correctWordId: "s-does", width: "sm" },
            { kind: "text", value: " she live?" },
          ],
        },
        {
          id: "sent-3",
          parts: [
            { kind: "text", value: "When " },
            { kind: "blank", id: "sd3", correctWordId: "s-do", width: "sm" },
            { kind: "text", value: " they play football?" },
          ],
        },
        {
          id: "sent-4",
          parts: [
            { kind: "text", value: "What time " },
            { kind: "blank", id: "sd4", correctWordId: "s-does", width: "sm" },
            { kind: "text", value: " school start?" },
          ],
        },
        {
          id: "sent-5",
          parts: [
            { kind: "text", value: "How often " },
            { kind: "blank", id: "sd5", correctWordId: "s-do", width: "sm" },
            { kind: "text", value: " you exercise?" },
          ],
        },
        {
          id: "sent-6",
          parts: [
            { kind: "text", value: "Why " },
            { kind: "blank", id: "sd6", correctWordId: "s-does", width: "sm" },
            { kind: "text", value: " he study English?" },
          ],
        },
      ],
    },
    {
      type: "dropdown",
      title: "Chọn do hoặc does.",
      instruction: "Hoàn thành câu hỏi Wh- Present Simple.",
      questions: [
        {
          id: "q1",
          parts: [
            { kind: "text", value: "What " },
            {
              kind: "select",
              id: "q1a",
              options: [
                { id: "q1a-do", label: "do" },
                { id: "q1a-does", label: "does" },
                { id: "q1a-did", label: "did" },
              ],
              correctOptionId: "q1a-do",
            },
            { kind: "text", value: " you study?" },
          ],
        },
        {
          id: "q2",
          parts: [
            { kind: "text", value: "Where " },
            {
              kind: "select",
              id: "q2a",
              options: [
                { id: "q2a-do", label: "do" },
                { id: "q2a-does", label: "does" },
                { id: "q2a-is", label: "is" },
              ],
              correctOptionId: "q2a-does",
            },
            { kind: "text", value: " she live?" },
          ],
        },
        {
          id: "q3",
          parts: [
            { kind: "text", value: "When " },
            {
              kind: "select",
              id: "q3a",
              options: [
                { id: "q3a-do", label: "do" },
                { id: "q3a-does", label: "does" },
                { id: "q3a-did", label: "did" },
              ],
              correctOptionId: "q3a-do",
            },
            { kind: "text", value: " they play football?" },
          ],
        },
        {
          id: "q4",
          parts: [
            { kind: "text", value: "What time " },
            {
              kind: "select",
              id: "q4a",
              options: [
                { id: "q4a-do", label: "do" },
                { id: "q4a-does", label: "does" },
                { id: "q4a-is", label: "is" },
              ],
              correctOptionId: "q4a-does",
            },
            { kind: "text", value: " school start?" },
          ],
        },
      ],
    },
    {
      type: "reorder",
      title: "Sắp xếp hội thoại.",
      instruction:
        "Sắp xếp các câu hỏi Wh- và trả lời theo đúng thứ tự hội thoại.",
      fixedFirst: true,
      lines: [
        { id: "r1", text: "Lan: What do you study?" },
        { id: "r2", text: "Nam: I study English." },
        { id: "r3", text: "Lan: Where does Nam live?" },
        { id: "r4", text: "Nam: He lives in Bắc Ninh." },
        { id: "r5", text: "Lan: How often do you exercise?" },
        { id: "r6", text: "Nam: I exercise every day." },
      ],
      correctOrder: ["r1", "r2", "r3", "r4", "r5", "r6"],
    },
    {
      type: "reading-fill",
      title: "Câu hỏi Wh-.",
      instruction:
        "Đọc đoạn văn và điền từ (how often, what time, start, finish, begin, end, exercise).",
      passage:
        "Nam asks questions in class. What do you study? I study English. Where does she live? She lives in Bắc Ninh. When do they play football? On Sunday. What time does school start? School starts at 7 a.m. What time does school finish? School finishes at 5 p.m. How often do you exercise? I exercise every day. Why does he study English? For the exam.",
      prompts: [
        {
          id: "rf1",
          label: "___ do you exercise? (bao lâu một lần)",
          correctAnswers: ["How often"],
          alternatives: ["how often"],
        },
        {
          id: "rf2",
          label: "___ does school start? (mấy giờ)",
          correctAnswers: ["What time"],
          alternatives: ["what time"],
        },
        {
          id: "rf3",
          label: "School ___ at 7 a.m. (bắt đầu)",
          correctAnswers: ["starts", "start"],
        },
        {
          id: "rf4",
          label: "School ___ at 5 p.m. (kết thúc)",
          correctAnswers: ["finishes", "finish", "ends", "end"],
        },
        {
          id: "rf5",
          label: "I ___ every day. (tập thể dục)",
          correctAnswers: ["exercise"],
        },
        {
          id: "rf6",
          label: "What ___ you study? (do/does)",
          correctAnswers: ["do"],
        },
      ],
    },
    {
      type: "self-writing",
      title: "Viết câu hỏi Wh-.",
      instruction:
        "Viết 3 câu hỏi Wh- với do/does: What..., Where... hoặc How often...",
      promptHints: [
        "What do you study?",
        "Where does she live?",
        "When do they play football?",
        "What time does school start?",
        "How often do you exercise?",
        "Why does he study English?",
      ],
      sampleTitle: "Bài gợi ý",
      sample:
        "What do you study?\nWhere does Nam live?\nHow often do you exercise?",
    },
  ],
};
