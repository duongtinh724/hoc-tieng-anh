import { getRulesForDay } from "@/data/curriculum/month-01/day-rules";
import { createPracticeMeta } from "@/data/practice/shared";
import type { PracticeLesson } from "@/types/practice";

export const practiceDay03: PracticeLesson = {
  meta: createPracticeMeta(3, "Động từ cơ bản"),
  hints: {
    rules: getRulesForDay(3, ""),
    vocabulary: [
      { en: "eat", vi: "ăn" },
      { en: "go", vi: "đi" },
      { en: "work", vi: "làm việc" },
      { en: "study", vi: "học" },
      { en: "like", vi: "thích" },
      { en: "play", vi: "chơi" },
      { en: "read", vi: "đọc" },
    ],
    grammarNotes: [
      "I / You / We / They + V (nguyên mẫu).",
      "I study English. · You go to school.",
      "He/She/It chia -s học ở tháng 2 — hôm nay chỉ luyện I/You/We/They.",
    ],
  },
  screens: [
    {
      type: "match",
      title: "Nối động từ (1).",
      instruction: "Nối động từ tiếng Anh với nghĩa tiếng Việt.",
      words: [
        { id: "w-eat", label: "eat" },
        { id: "w-go", label: "go" },
        { id: "w-study", label: "study" },
        { id: "w-like", label: "like" },
      ],
      pairs: [
        {
          id: "p-eat",
          imageUrl: "/images/practice/day03-verbs.svg",
          imageAlt: "ăn",
          label: "ăn",
          correctWordId: "w-eat",
        },
        {
          id: "p-go",
          imageAlt: "đi",
          label: "đi",
          correctWordId: "w-go",
        },
        {
          id: "p-study",
          imageAlt: "học",
          label: "học",
          correctWordId: "w-study",
        },
        {
          id: "p-like",
          imageAlt: "thích",
          label: "thích",
          correctWordId: "w-like",
        },
      ],
    },
    {
      type: "match",
      title: "Nối động từ (2).",
      instruction: "Nối động từ tiếng Anh với nghĩa tiếng Việt.",
      words: [
        { id: "w-work", label: "work" },
        { id: "w-play", label: "play" },
        { id: "w-read", label: "read" },
      ],
      pairs: [
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
          id: "p-read",
          imageAlt: "đọc",
          label: "đọc",
          correctWordId: "w-read",
        },
      ],
    },
    {
      type: "categorize",
      title: "Phân loại động từ.",
      instruction: "Kéo động từ vào nhóm phù hợp.",
      categories: [
        { id: "cat-study", label: "Học tập & đọc" },
        { id: "cat-fun", label: "Ăn uống & vui chơi" },
      ],
      items: [
        { id: "c-study", label: "study", correctCategoryId: "cat-study" },
        { id: "c-read", label: "read", correctCategoryId: "cat-study" },
        { id: "c-work", label: "work", correctCategoryId: "cat-study" },
        { id: "c-eat", label: "eat", correctCategoryId: "cat-fun" },
        { id: "c-play", label: "play", correctCategoryId: "cat-fun" },
        { id: "c-like", label: "like", correctCategoryId: "cat-fun" },
        { id: "c-go", label: "go", correctCategoryId: "cat-fun" },
      ],
    },
    {
      type: "sentence-drag",
      title: "Điền động từ.",
      instruction: "Kéo động từ vào chỗ trống. Chỉ dùng I / You / We / They.",
      wordBank: [
        { id: "s-study", label: "study" },
        { id: "s-go", label: "go" },
        { id: "s-eat", label: "eat" },
        { id: "s-like", label: "like" },
        { id: "s-read", label: "read" },
        { id: "s-play", label: "play" },
      ],
      sentences: [
        {
          id: "sent-1",
          parts: [
            { kind: "text", value: "I " },
            { kind: "blank", id: "sd1", correctWordId: "s-study", width: "md" },
            { kind: "text", value: " English." },
          ],
        },
        {
          id: "sent-2",
          parts: [
            { kind: "text", value: "You " },
            { kind: "blank", id: "sd2", correctWordId: "s-go", width: "md" },
            { kind: "text", value: " to school." },
          ],
        },
        {
          id: "sent-3",
          parts: [
            { kind: "text", value: "We " },
            { kind: "blank", id: "sd3", correctWordId: "s-eat", width: "md" },
            { kind: "text", value: " breakfast." },
          ],
        },
        {
          id: "sent-4",
          parts: [
            { kind: "text", value: "They " },
            { kind: "blank", id: "sd4", correctWordId: "s-like", width: "md" },
            { kind: "text", value: " music." },
          ],
        },
        {
          id: "sent-5",
          parts: [
            { kind: "text", value: "I " },
            { kind: "blank", id: "sd5", correctWordId: "s-read", width: "md" },
            { kind: "text", value: " books." },
          ],
        },
        {
          id: "sent-6",
          parts: [
            { kind: "text", value: "We " },
            { kind: "blank", id: "sd6", correctWordId: "s-play", width: "md" },
            { kind: "text", value: " football." },
          ],
        },
      ],
    },
    {
      type: "dropdown",
      title: "Chọn động từ đúng.",
      instruction: "Chọn động từ phù hợp để hoàn thành câu.",
      image: {
        url: "/images/practice/day03-verbs.svg",
        alt: "Động từ cơ bản",
      },
      questions: [
        {
          id: "q1",
          parts: [
            { kind: "text", value: "I " },
            {
              kind: "select",
              id: "q1a",
              options: [
                { id: "q1a-study", label: "study" },
                { id: "q1a-eat", label: "eat" },
                { id: "q1a-play", label: "play" },
              ],
              correctOptionId: "q1a-study",
            },
            { kind: "text", value: " English." },
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
                { id: "q2a-go", label: "go" },
                { id: "q2a-read", label: "read" },
                { id: "q2a-like", label: "like" },
              ],
              correctOptionId: "q2a-go",
            },
            { kind: "text", value: " to school." },
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
                { id: "q3a-eat", label: "eat" },
                { id: "q3a-work", label: "work" },
                { id: "q3a-go", label: "go" },
              ],
              correctOptionId: "q3a-eat",
            },
            { kind: "text", value: " breakfast." },
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
                { id: "q4a-like", label: "like" },
                { id: "q4a-study", label: "study" },
                { id: "q4a-read", label: "read" },
              ],
              correctOptionId: "q4a-like",
            },
            { kind: "text", value: " music." },
          ],
        },
      ],
    },
    {
      type: "reorder",
      title: "Sắp xếp câu.",
      instruction: "Sắp xếp các từ thành câu đúng: I study English.",
      image: {
        url: "/images/practice/day03-verbs.svg",
        alt: "Câu S + V",
      },
      lines: [
        { id: "r1", text: "I" },
        { id: "r2", text: "study" },
        { id: "r3", text: "English" },
        { id: "r4", text: "." },
      ],
      correctOrder: ["r1", "r2", "r3", "r4"],
    },
    {
      type: "reading-fill",
      title: "Một ngày của Nam.",
      instruction: "Đọc đoạn văn và điền động từ đúng (eat, go, study, like, read, play, work).",
      passage:
        "Nam writes about a school day in class 9A. I eat breakfast at 6:30. You go to school at 7. We study English in the first lesson. They like music at break time. I read books in the library. We play football after school.",
      prompts: [
        {
          id: "rf1",
          label: "I ___ breakfast. (ăn)",
          correctAnswers: ["eat"],
        },
        {
          id: "rf2",
          label: "You ___ to school. (đi)",
          correctAnswers: ["go"],
        },
        {
          id: "rf3",
          label: "We ___ English. (học)",
          correctAnswers: ["study"],
        },
        {
          id: "rf4",
          label: "They ___ music. (thích)",
          correctAnswers: ["like"],
        },
        {
          id: "rf5",
          label: "I ___ books. (đọc)",
          correctAnswers: ["read"],
        },
        {
          id: "rf6",
          label: "We ___ football. (chơi)",
          correctAnswers: ["play"],
        },
      ],
    },
    {
      type: "self-writing",
      title: "Viết câu I + động từ.",
      instruction:
        "Viết 4 câu về bản thân với I + động từ: eat, go, study, like, read, play, work.",
      promptHints: [
        "I eat breakfast.",
        "I go to school.",
        "I study English.",
        "I like music.",
        "I read books.",
        "I play football.",
      ],
      sampleTitle: "Bài gợi ý",
      sample:
        "I eat breakfast at 6.\nI go to school at 7.\nI study English every day.\nI like music and football.",
    },
  ],
};
