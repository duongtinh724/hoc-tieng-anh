import { getRulesForDay } from "@/data/curriculum/month-02/day-rules";
import { createPracticeMeta } from "@/data/practice/shared";
import type { PracticeLesson } from "@/types/practice";

export const practiceDay03: PracticeLesson = {
  meta: createPracticeMeta(3, "He / She / It + động từ -s", 2),
  hints: {
    rules: getRulesForDay(3, ""),
    vocabulary: [
      { en: "goes", vi: "đi (he/she/it)" },
      { en: "studies", vi: "học (he/she/it)" },
      { en: "watches", vi: "xem (he/she/it)" },
      { en: "likes", vi: "thích (he/she/it)" },
      { en: "plays", vi: "chơi (he/she/it)" },
      { en: "works", vi: "làm việc (he/she/it)" },
      { en: "teaches", vi: "dạy (he/she/it)" },
    ],
    grammarNotes: [
      "He / She / It + V-s.",
      "watch → watches, go → goes, study → studies.",
      "He goes to school. · She studies English.",
    ],
  },
  screens: [
    {
      type: "match",
      title: "Nối động từ -s (1).",
      instruction: "Nối từ tiếng Anh với nghĩa tiếng Việt.",
      words: [
        { id: "w-goes", label: "goes" },
        { id: "w-studies", label: "studies" },
        { id: "w-watches", label: "watches" },
        { id: "w-likes", label: "likes" },
      ],
      pairs: [
        {
          id: "p-goes",
          imageAlt: "đi (he/she/it)",
          label: "đi (he/she/it)",
          correctWordId: "w-goes",
        },
        {
          id: "p-studies",
          imageAlt: "học (he/she/it)",
          label: "học (he/she/it)",
          correctWordId: "w-studies",
        },
        {
          id: "p-watches",
          imageAlt: "xem (he/she/it)",
          label: "xem (he/she/it)",
          correctWordId: "w-watches",
        },
        {
          id: "p-likes",
          imageAlt: "thích (he/she/it)",
          label: "thích (he/she/it)",
          correctWordId: "w-likes",
        },
      ],
    },
    {
      type: "match",
      title: "Nối động từ -s (2).",
      instruction: "Nối từ tiếng Anh với nghĩa tiếng Việt.",
      words: [
        { id: "w-plays", label: "plays" },
        { id: "w-works", label: "works" },
        { id: "w-teaches", label: "teaches" },
      ],
      pairs: [
        {
          id: "p-plays",
          imageAlt: "chơi (he/she/it)",
          label: "chơi (he/she/it)",
          correctWordId: "w-plays",
        },
        {
          id: "p-works",
          imageAlt: "làm việc (he/she/it)",
          label: "làm việc (he/she/it)",
          correctWordId: "w-works",
        },
        {
          id: "p-teaches",
          imageAlt: "dạy (he/she/it)",
          label: "dạy (he/she/it)",
          correctWordId: "w-teaches",
        },
      ],
    },
    {
      type: "categorize",
      title: "Nguyên mẫu hay -s/-es?",
      instruction: "Kéo động từ vào đúng nhóm.",
      categories: [
        { id: "cat-base", label: "Nguyên mẫu (I/You/We/They)" },
        { id: "cat-s", label: "He/She/It (+ -s/-es)" },
      ],
      items: [
        { id: "c-go", label: "go", correctCategoryId: "cat-base" },
        { id: "c-goes", label: "goes", correctCategoryId: "cat-s" },
        { id: "c-study", label: "study", correctCategoryId: "cat-base" },
        { id: "c-studies", label: "studies", correctCategoryId: "cat-s" },
        { id: "c-watch", label: "watch", correctCategoryId: "cat-base" },
        { id: "c-watches", label: "watches", correctCategoryId: "cat-s" },
        { id: "c-play", label: "play", correctCategoryId: "cat-base" },
        { id: "c-plays", label: "plays", correctCategoryId: "cat-s" },
        { id: "c-teach", label: "teach", correctCategoryId: "cat-base" },
        { id: "c-teaches", label: "teaches", correctCategoryId: "cat-s" },
      ],
    },
    {
      type: "sentence-drag",
      title: "Điền động từ -s/-es.",
      instruction: "Kéo động từ đúng vào chỗ trống. Chủ ngữ là He, She hoặc It.",
      wordBank: [
        { id: "s-goes", label: "goes" },
        { id: "s-studies", label: "studies" },
        { id: "s-watches", label: "watches" },
        { id: "s-likes", label: "likes" },
        { id: "s-plays", label: "plays" },
        { id: "s-teaches", label: "teaches" },
      ],
      sentences: [
        {
          id: "sent-1",
          parts: [
            { kind: "text", value: "He " },
            { kind: "blank", id: "sd1", correctWordId: "s-goes", width: "md" },
            { kind: "text", value: " to school." },
          ],
        },
        {
          id: "sent-2",
          parts: [
            { kind: "text", value: "She " },
            { kind: "blank", id: "sd2", correctWordId: "s-studies", width: "md" },
            { kind: "text", value: " English." },
          ],
        },
        {
          id: "sent-3",
          parts: [
            { kind: "text", value: "My teacher " },
            { kind: "blank", id: "sd3", correctWordId: "s-teaches", width: "md" },
            { kind: "text", value: " English." },
          ],
        },
        {
          id: "sent-4",
          parts: [
            { kind: "text", value: "He " },
            { kind: "blank", id: "sd4", correctWordId: "s-watches", width: "md" },
            { kind: "text", value: " TV at night." },
          ],
        },
        {
          id: "sent-5",
          parts: [
            { kind: "text", value: "She " },
            { kind: "blank", id: "sd5", correctWordId: "s-likes", width: "md" },
            { kind: "text", value: " music." },
          ],
        },
        {
          id: "sent-6",
          parts: [
            { kind: "text", value: "He " },
            { kind: "blank", id: "sd6", correctWordId: "s-plays", width: "md" },
            { kind: "text", value: " football on Sunday." },
          ],
        },
      ],
    },
    {
      type: "dropdown",
      title: "Chọn động từ -s đúng.",
      instruction: "Hoàn thành câu với He / She / It + V-s.",
      questions: [
        {
          id: "q1",
          parts: [
            { kind: "text", value: "He " },
            {
              kind: "select",
              id: "q1a",
              options: [
                { id: "q1a-goes", label: "goes" },
                { id: "q1a-go", label: "go" },
                { id: "q1a-going", label: "going" },
              ],
              correctOptionId: "q1a-goes",
            },
            { kind: "text", value: " to school." },
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
                { id: "q2a-studies", label: "studies" },
                { id: "q2a-study", label: "study" },
                { id: "q2a-studying", label: "studying" },
              ],
              correctOptionId: "q2a-studies",
            },
            { kind: "text", value: " English." },
          ],
        },
        {
          id: "q3",
          parts: [
            { kind: "text", value: "He " },
            {
              kind: "select",
              id: "q3a",
              options: [
                { id: "q3a-watches", label: "watches" },
                { id: "q3a-watch", label: "watch" },
                { id: "q3a-watched", label: "watched" },
              ],
              correctOptionId: "q3a-watches",
            },
            { kind: "text", value: " TV at night." },
          ],
        },
        {
          id: "q4",
          parts: [
            { kind: "text", value: "My teacher " },
            {
              kind: "select",
              id: "q4a",
              options: [
                { id: "q4a-teaches", label: "teaches" },
                { id: "q4a-teach", label: "teach" },
                { id: "q4a-teaching", label: "teaching" },
              ],
              correctOptionId: "q4a-teaches",
            },
            { kind: "text", value: " math." },
          ],
        },
      ],
    },
    {
      type: "reorder",
      title: "Sắp xếp hội thoại.",
      instruction:
        "Sắp xếp các câu theo đúng thứ tự hội thoại về He / She + động từ -s.",
      fixedFirst: true,
      lines: [
        { id: "r1", text: "Nam: He goes to school." },
        { id: "r2", text: "Lan: She studies English." },
        { id: "r3", text: "Nam: My teacher teaches English." },
        { id: "r4", text: "Lan: He watches TV at night." },
        { id: "r5", text: "Nam: She likes music." },
      ],
      correctOrder: ["r1", "r2", "r3", "r4", "r5"],
    },
    {
      type: "reading-fill",
      title: "He và She.",
      instruction:
        "Đọc đoạn văn và điền động từ (goes, studies, watches, likes, plays, works, teaches).",
      passage:
        "Lan talks about her friends. He goes to school every day. She studies English with Nam. My teacher teaches math and English. He watches TV at night. She likes music and plays football on Sunday. It often rains in summer. Remember: he, she, it → verb + s or es.",
      prompts: [
        {
          id: "rf1",
          label: "He ___ to school. (đi)",
          correctAnswers: ["goes"],
        },
        {
          id: "rf2",
          label: "She ___ English. (học)",
          correctAnswers: ["studies"],
        },
        {
          id: "rf3",
          label: "My teacher ___ English. (dạy)",
          correctAnswers: ["teaches"],
        },
        {
          id: "rf4",
          label: "He ___ TV at night. (xem)",
          correctAnswers: ["watches"],
        },
        {
          id: "rf5",
          label: "She ___ music. (thích)",
          correctAnswers: ["likes"],
        },
        {
          id: "rf6",
          label: "She ___ football on Sunday. (chơi)",
          correctAnswers: ["plays"],
        },
      ],
    },
    {
      type: "self-writing",
      title: "Viết câu He / She + -s.",
      instruction:
        "Viết 3 câu với He hoặc She + động từ có -s/-es (goes, studies, watches, likes, plays, teaches).",
      promptHints: [
        "He goes to school.",
        "She studies English.",
        "He watches TV at night.",
        "She likes music.",
        "He plays football on Sunday.",
        "My teacher teaches English.",
      ],
      sampleTitle: "Bài gợi ý",
      sample:
        "He goes to school.\nShe studies English.\nHe plays football on Sunday.",
    },
  ],
};
