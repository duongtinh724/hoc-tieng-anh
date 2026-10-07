import { getRulesForDay } from "@/data/curriculum/month-01/day-rules";
import { createPracticeMeta } from "@/data/practice/shared";
import type { PracticeLesson } from "@/types/practice";

export const practiceDay04: PracticeLesson = {
  meta: { ...createPracticeMeta(4, "Tính từ cơ bản"), totalScreens: 7 },
  hints: {
    rules: getRulesForDay(4, ""),
    vocabulary: [
      { en: "good", vi: "tốt" },
      { en: "bad", vi: "xấu, tệ" },
      { en: "big", vi: "to, lớn" },
      { en: "small", vi: "nhỏ" },
      { en: "new", vi: "mới" },
      { en: "old", vi: "cũ" },
      { en: "happy", vi: "vui, hạnh phúc" },
    ],
    grammarNotes: [
      "Tính từ đứng TRƯỚC danh từ: a good book.",
      "Công thức: a + adj + noun.",
      "happy students — không cần a với số nhiều (học thêm sau).",
    ],
  },
  screens: [
    {
      type: "match",
      title: "Nối tính từ.",
      instruction:
        "Nối tính từ với ảnh. Bấm ảnh để xem nghĩa tiếng Việt.",
      words: [
        { id: "w-good", label: "good" },
        { id: "w-bad", label: "bad" },
        { id: "w-big", label: "big" },
        { id: "w-small", label: "small" },
        { id: "w-new", label: "new" },
        { id: "w-old", label: "old" },
        { id: "w-happy", label: "happy" },
      ],
      pairs: [
        {
          id: "p-good",
          imageUrl: "/images/practice/adjectives/good.jpg",
          imageAlt: "tốt",
          label: "tốt",
          correctWordId: "w-good",
        },
        {
          id: "p-bad",
          imageUrl: "/images/practice/adjectives/bad.jpg",
          imageAlt: "xấu, tệ",
          label: "xấu, tệ",
          correctWordId: "w-bad",
        },
        {
          id: "p-big",
          imageUrl: "/images/practice/adjectives/big.jpg",
          imageAlt: "to, lớn",
          label: "to, lớn",
          correctWordId: "w-big",
        },
        {
          id: "p-small",
          imageUrl: "/images/practice/adjectives/small.jpg",
          imageAlt: "nhỏ",
          label: "nhỏ",
          correctWordId: "w-small",
        },
        {
          id: "p-new",
          imageUrl: "/images/practice/adjectives/new.jpg",
          imageAlt: "mới",
          label: "mới",
          correctWordId: "w-new",
        },
        {
          id: "p-old",
          imageUrl: "/images/practice/adjectives/old.jpg",
          imageAlt: "cũ",
          label: "cũ",
          correctWordId: "w-old",
        },
        {
          id: "p-happy",
          imageUrl: "/images/practice/adjectives/happy.jpg",
          imageAlt: "vui",
          label: "vui",
          correctWordId: "w-happy",
        },
      ],
    },
    {
      type: "categorize",
      title: "Kích thước hay tính chất?",
      instruction: "Kéo tính từ vào đúng nhóm.",
      categories: [
        { id: "cat-size", label: "Kích thước" },
        { id: "cat-quality", label: "Tính chất / cảm xúc" },
      ],
      items: [
        { id: "c-big", label: "big", correctCategoryId: "cat-size" },
        { id: "c-small", label: "small", correctCategoryId: "cat-size" },
        { id: "c-good", label: "good", correctCategoryId: "cat-quality" },
        { id: "c-bad", label: "bad", correctCategoryId: "cat-quality" },
        { id: "c-new", label: "new", correctCategoryId: "cat-quality" },
        { id: "c-old", label: "old", correctCategoryId: "cat-quality" },
        { id: "c-happy", label: "happy", correctCategoryId: "cat-quality" },
      ],
    },
    {
      type: "sentence-drag",
      title: "a + adj + noun.",
      instruction: "Kéo tính từ vào chỗ trống để tạo cụm danh từ.",
      wordBank: [
        { id: "s-good", label: "good" },
        { id: "s-big", label: "big" },
        { id: "s-small", label: "small" },
        { id: "s-new", label: "new" },
        { id: "s-bad", label: "bad" },
        { id: "s-happy", label: "happy" },
      ],
      sentences: [
        {
          id: "sent-1",
          parts: [
            { kind: "text", value: "a " },
            { kind: "blank", id: "sd1", correctWordId: "s-good", width: "sm" },
            { kind: "text", value: " book" },
          ],
        },
        {
          id: "sent-2",
          parts: [
            { kind: "text", value: "a " },
            { kind: "blank", id: "sd2", correctWordId: "s-big", width: "sm" },
            { kind: "text", value: " house" },
          ],
        },
        {
          id: "sent-3",
          parts: [
            { kind: "text", value: "a " },
            { kind: "blank", id: "sd3", correctWordId: "s-small", width: "sm" },
            { kind: "text", value: " pen" },
          ],
        },
        {
          id: "sent-4",
          parts: [
            { kind: "text", value: "a " },
            { kind: "blank", id: "sd4", correctWordId: "s-new", width: "sm" },
            { kind: "text", value: " bag" },
          ],
        },
        {
          id: "sent-5",
          parts: [
            { kind: "blank", id: "sd5", correctWordId: "s-happy", width: "sm" },
            { kind: "text", value: " students" },
          ],
        },
        {
          id: "sent-6",
          parts: [
            { kind: "text", value: "a " },
            { kind: "blank", id: "sd6", correctWordId: "s-bad", width: "sm" },
            { kind: "text", value: " day" },
          ],
        },
      ],
    },
    {
      type: "dropdown",
      title: "Chọn tính từ đúng.",
      instruction: "Chọn tính từ đúng. Có câu ôn động từ (ngày 3) và danh từ (ngày 2).",
      questions: [
        {
          id: "q1",
          parts: [
            { kind: "text", value: "a ___ book (tốt)" },
            {
              kind: "select",
              id: "q1a",
              options: [
                { id: "q1a-good", label: "good" },
                { id: "q1a-bad", label: "bad" },
                { id: "q1a-big", label: "big" },
              ],
              correctOptionId: "q1a-good",
            },
          ],
        },
        {
          id: "q2",
          parts: [
            { kind: "text", value: "a ___ house (lớn)" },
            {
              kind: "select",
              id: "q2a",
              options: [
                { id: "q2a-small", label: "small" },
                { id: "q2a-big", label: "big" },
                { id: "q2a-new", label: "new" },
              ],
              correctOptionId: "q2a-big",
            },
          ],
        },
        {
          id: "q3",
          parts: [
            { kind: "text", value: "a ___ pen (nhỏ)" },
            {
              kind: "select",
              id: "q3a",
              options: [
                { id: "q3a-small", label: "small" },
                { id: "q3a-big", label: "big" },
                { id: "q3a-old", label: "old" },
              ],
              correctOptionId: "q3a-small",
            },
          ],
        },
        {
          id: "q4",
          parts: [
            { kind: "text", value: "___ students (vui)" },
            {
              kind: "select",
              id: "q4a",
              options: [
                { id: "q4a-happy", label: "happy" },
                { id: "q4a-old", label: "old" },
                { id: "q4a-bad", label: "bad" },
              ],
              correctOptionId: "q4a-happy",
            },
          ],
        },
        {
          id: "q-review-3",
          parts: [
            { kind: "text", value: "Ôn: I ___ English. (học)" },
            {
              kind: "select",
              id: "q-review-3a",
              options: [
                { id: "qr3-study", label: "study" },
                { id: "qr3-good", label: "good" },
                { id: "qr3-book", label: "book" },
              ],
              correctOptionId: "qr3-study",
            },
          ],
        },
        {
          id: "q-review-2",
          parts: [
            { kind: "text", value: "Ôn: We go to ___ . (trường)" },
            {
              kind: "select",
              id: "q-review-2a",
              options: [
                { id: "qr2-school", label: "school" },
                { id: "qr2-happy", label: "happy" },
                { id: "qr2-pen", label: "pen" },
              ],
              correctOptionId: "qr2-school",
            },
          ],
        },
      ],
    },
    {
      type: "reorder",
      layout: "horizontal",
      title: "Sắp xếp cụm từ.",
      instruction: "Kéo các từ theo hàng ngang thành cụm a + tính từ + danh từ.",
      sentences: [
        {
          id: "sen-1",
          label: "Câu 1",
          lines: [
            { id: "s1a", text: "a" },
            { id: "s1b", text: "good" },
            { id: "s1c", text: "book" },
          ],
          correctOrder: ["s1a", "s1b", "s1c"],
        },
        {
          id: "sen-2",
          label: "Câu 2",
          lines: [
            { id: "s2a", text: "a" },
            { id: "s2b", text: "big" },
            { id: "s2c", text: "house" },
          ],
          correctOrder: ["s2a", "s2b", "s2c"],
        },
        {
          id: "sen-3",
          label: "Câu 3",
          lines: [
            { id: "s3a", text: "a" },
            { id: "s3b", text: "small" },
            { id: "s3c", text: "pen" },
          ],
          correctOrder: ["s3a", "s3b", "s3c"],
        },
        {
          id: "sen-4",
          label: "Câu 4",
          lines: [
            { id: "s4a", text: "a" },
            { id: "s4b", text: "new" },
            { id: "s4c", text: "bag" },
          ],
          correctOrder: ["s4a", "s4b", "s4c"],
        },
        {
          id: "sen-5",
          label: "Câu 5",
          lines: [
            { id: "s5a", text: "happy" },
            { id: "s5b", text: "students" },
          ],
          correctOrder: ["s5a", "s5b"],
        },
      ],
      lines: [],
      correctOrder: [],
    },
    {
      type: "reading-fill",
      title: "Phòng của Nam.",
      instruction:
        "Đọc về đồ vật trong phòng Nam. Điền tính từ tiếng Anh (good, bad, big, small, new, old, happy).",
      passage:
        "Nam looks at things in his room. He has a good book on the desk. He has a big bag and a small pen. His bag is new. His old book is on the shelf. Today is not a bad day — Nam and his friends are happy students in class 9A.",
      prompts: [
        {
          id: "rf1",
          label: "a ___ book on the desk (tốt)",
          correctAnswers: ["good"],
        },
        {
          id: "rf2",
          label: "a ___ bag (lớn)",
          correctAnswers: ["big"],
        },
        {
          id: "rf3",
          label: "a ___ pen (nhỏ)",
          correctAnswers: ["small"],
        },
        {
          id: "rf4",
          label: "His bag is ___ (mới)",
          correctAnswers: ["new"],
        },
        {
          id: "rf5",
          label: "His ___ book is on the shelf (cũ)",
          correctAnswers: ["old"],
        },
        {
          id: "rf6",
          label: "___ students in class 9A (vui)",
          correctAnswers: ["happy"],
        },
      ],
    },
    {
      type: "self-writing",
      title: "Viết cụm a + adj + noun.",
      instruction:
        "Viết 3 cụm tiếng Anh theo mẫu a + tính từ + danh từ về đồ trong phòng hoặc ở trường.",
      promptHints: [
        "a good book",
        "a big bag",
        "a small pen",
        "a new house",
        "happy students",
      ],
      sampleTitle: "Bài gợi ý",
      sample: "a good book\na big bag\na small pen",
    },
  ],
};
