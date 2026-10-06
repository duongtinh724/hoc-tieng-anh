import { getRulesForDay } from "@/data/curriculum/month-01/day-rules";
import { createPracticeMeta } from "@/data/practice/shared";
import type { PracticeLesson } from "@/types/practice";

export const practiceDay06: PracticeLesson = {
  meta: createPracticeMeta(6, "Cấu trúc S + V + O"),
  hints: {
    rules: getRulesForDay(6, ""),
    vocabulary: [
      { en: "object (O)", vi: "tân ngữ" },
      { en: "music", vi: "âm nhạc" },
      { en: "English", vi: "tiếng Anh" },
      { en: "football", vi: "bóng đá" },
      { en: "rice", vi: "cơm" },
      { en: "water", vi: "nước" },
      { en: "homework", vi: "bài tập về nhà" },
    ],
    grammarNotes: [
      "S + V + O = Chủ ngữ + Động từ + Tân ngữ.",
      "like WHAT? → I like music.",
      "study WHAT? → We study English.",
    ],
  },
  screens: [
    {
      type: "match",
      title: "Nối tân ngữ (1).",
      instruction: "Nối từ tiếng Anh với nghĩa tiếng Việt.",
      words: [
        { id: "w-object", label: "object (O)" },
        { id: "w-music", label: "music" },
        { id: "w-english", label: "English" },
        { id: "w-football", label: "football" },
      ],
      pairs: [
        {
          id: "p-object",
          imageUrl: "/images/practice/day06-svo.svg",
          imageAlt: "tân ngữ",
          label: "tân ngữ",
          correctWordId: "w-object",
        },
        {
          id: "p-music",
          imageAlt: "âm nhạc",
          label: "âm nhạc",
          correctWordId: "w-music",
        },
        {
          id: "p-english",
          imageAlt: "tiếng Anh",
          label: "tiếng Anh",
          correctWordId: "w-english",
        },
        {
          id: "p-football",
          imageAlt: "bóng đá",
          label: "bóng đá",
          correctWordId: "w-football",
        },
      ],
    },
    {
      type: "match",
      title: "Nối tân ngữ (2).",
      instruction: "Nối từ tiếng Anh với nghĩa tiếng Việt.",
      words: [
        { id: "w-rice", label: "rice" },
        { id: "w-water", label: "water" },
        { id: "w-homework", label: "homework" },
        { id: "w-books", label: "books" },
      ],
      pairs: [
        {
          id: "p-rice",
          imageAlt: "cơm",
          label: "cơm",
          correctWordId: "w-rice",
        },
        {
          id: "p-water",
          imageAlt: "nước",
          label: "nước",
          correctWordId: "w-water",
        },
        {
          id: "p-homework",
          imageAlt: "bài tập về nhà",
          label: "bài tập về nhà",
          correctWordId: "w-homework",
        },
        {
          id: "p-books",
          imageAlt: "sách (số nhiều)",
          label: "sách (số nhiều)",
          correctWordId: "w-books",
        },
      ],
    },
    {
      type: "categorize",
      title: "Phân loại tân ngữ.",
      instruction: "Kéo tân ngữ vào nhóm phù hợp với câu mẫu trong bài học.",
      categories: [
        { id: "cat-learn", label: "Học tập (study / do / read)" },
        { id: "cat-fun", label: "Thích & chơi (like / play)" },
        { id: "cat-eat", label: "Ăn uống (eat / drink)" },
      ],
      items: [
        { id: "c-english", label: "English", correctCategoryId: "cat-learn" },
        { id: "c-homework", label: "homework", correctCategoryId: "cat-learn" },
        { id: "c-books", label: "books", correctCategoryId: "cat-learn" },
        { id: "c-music", label: "music", correctCategoryId: "cat-fun" },
        { id: "c-football", label: "football", correctCategoryId: "cat-fun" },
        { id: "c-rice", label: "rice", correctCategoryId: "cat-eat" },
        { id: "c-water", label: "water", correctCategoryId: "cat-eat" },
      ],
    },
    {
      type: "sentence-drag",
      title: "Điền tân ngữ (O).",
      instruction: "Kéo tân ngữ vào chỗ trống sau động từ.",
      wordBank: [
        { id: "s-music", label: "music" },
        { id: "s-english", label: "English" },
        { id: "s-football", label: "football" },
        { id: "s-rice", label: "rice" },
        { id: "s-books", label: "books" },
        { id: "s-homework", label: "homework" },
      ],
      sentences: [
        {
          id: "sent-1",
          parts: [
            { kind: "text", value: "I like " },
            { kind: "blank", id: "sd1", correctWordId: "s-music", width: "md" },
            { kind: "text", value: "." },
          ],
        },
        {
          id: "sent-2",
          parts: [
            { kind: "text", value: "We study " },
            {
              kind: "blank",
              id: "sd2",
              correctWordId: "s-english",
              width: "md",
            },
            { kind: "text", value: "." },
          ],
        },
        {
          id: "sent-3",
          parts: [
            { kind: "text", value: "They play " },
            {
              kind: "blank",
              id: "sd3",
              correctWordId: "s-football",
              width: "md",
            },
            { kind: "text", value: "." },
          ],
        },
        {
          id: "sent-4",
          parts: [
            { kind: "text", value: "I eat " },
            { kind: "blank", id: "sd4", correctWordId: "s-rice", width: "md" },
            { kind: "text", value: "." },
          ],
        },
        {
          id: "sent-5",
          parts: [
            { kind: "text", value: "You read " },
            { kind: "blank", id: "sd5", correctWordId: "s-books", width: "md" },
            { kind: "text", value: "." },
          ],
        },
        {
          id: "sent-6",
          parts: [
            { kind: "text", value: "We do " },
            {
              kind: "blank",
              id: "sd6",
              correctWordId: "s-homework",
              width: "md",
            },
            { kind: "text", value: "." },
          ],
        },
      ],
    },
    {
      type: "dropdown",
      title: "Chọn tân ngữ đúng.",
      instruction: "Hoàn thành câu S + V + O.",
      image: {
        url: "/images/practice/day06-svo.svg",
        alt: "Cấu trúc S + V + O",
      },
      questions: [
        {
          id: "q1",
          parts: [
            { kind: "text", value: "I like " },
            {
              kind: "select",
              id: "q1a",
              options: [
                { id: "q1a-music", label: "music" },
                { id: "q1a-go", label: "go" },
                { id: "q1a-I", label: "I" },
              ],
              correctOptionId: "q1a-music",
            },
            { kind: "text", value: "." },
          ],
        },
        {
          id: "q2",
          parts: [
            { kind: "text", value: "We study " },
            {
              kind: "select",
              id: "q2a",
              options: [
                { id: "q2a-english", label: "English" },
                { id: "q2a-study", label: "study" },
                { id: "q2a-football", label: "football" },
              ],
              correctOptionId: "q2a-english",
            },
            { kind: "text", value: "." },
          ],
        },
        {
          id: "q3",
          parts: [
            { kind: "text", value: "They play " },
            {
              kind: "select",
              id: "q3a",
              options: [
                { id: "q3a-football", label: "football" },
                { id: "q3a-rice", label: "rice" },
                { id: "q3a-homework", label: "homework" },
              ],
              correctOptionId: "q3a-football",
            },
            { kind: "text", value: "." },
          ],
        },
        {
          id: "q4",
          parts: [
            { kind: "text", value: "I eat " },
            {
              kind: "select",
              id: "q4a",
              options: [
                { id: "q4a-rice", label: "rice" },
                { id: "q4a-water", label: "water" },
                { id: "q4a-music", label: "music" },
              ],
              correctOptionId: "q4a-rice",
            },
            { kind: "text", value: "." },
          ],
        },
      ],
    },
    {
      type: "reorder",
      title: "Sắp xếp câu S + V + O.",
      instruction: "Sắp xếp thành câu: We study English.",
      image: {
        url: "/images/practice/day06-svo.svg",
        alt: "S + V + O",
      },
      lines: [
        { id: "r1", text: "We" },
        { id: "r2", text: "study" },
        { id: "r3", text: "English" },
        { id: "r4", text: "." },
      ],
      correctOrder: ["r1", "r2", "r3", "r4"],
    },
    {
      type: "reading-fill",
      title: "Sở thích của Nam.",
      instruction:
        "Đọc đoạn văn và điền tân ngữ (music, English, football, rice, books, homework, water).",
      passage:
        "Nam talks about his day in class 9A. I like music. You read books. We study English. They play football. I eat rice and drink water. We do homework after school. Lan likes music too. Nam and Lan study English every day.",
      prompts: [
        {
          id: "rf1",
          label: "I like ___. (âm nhạc)",
          correctAnswers: ["music"],
        },
        {
          id: "rf2",
          label: "We study ___. (tiếng Anh)",
          correctAnswers: ["English"],
        },
        {
          id: "rf3",
          label: "They play ___. (bóng đá)",
          correctAnswers: ["football"],
        },
        {
          id: "rf4",
          label: "I eat ___. (cơm)",
          correctAnswers: ["rice"],
        },
        {
          id: "rf5",
          label: "You read ___. (sách)",
          correctAnswers: ["books"],
        },
        {
          id: "rf6",
          label: "We do ___. (bài tập về nhà)",
          correctAnswers: ["homework"],
        },
      ],
    },
    {
      type: "self-writing",
      title: "Viết câu S + V + O.",
      instruction:
        "Viết 4 câu về sở thích và thói quen của Nam theo mẫu S + V + O.",
      promptHints: [
        "I like music.",
        "We study English.",
        "They play football.",
        "I eat rice.",
        "You read books.",
        "We do homework.",
      ],
      sampleTitle: "Bài gợi ý",
      sample:
        "I like music.\nWe study English.\nThey play football.\nI eat rice.",
    },
  ],
};
