import { getRulesForDay } from "@/data/curriculum/month-01/day-rules";
import { createPracticeMeta } from "@/data/practice/shared";
import type { PracticeLesson } from "@/types/practice";

export const practiceDay02: PracticeLesson = {
  meta: createPracticeMeta(2, "Danh từ cơ bản"),
  hints: {
    rules: getRulesForDay(2, ""),
    vocabulary: [
      { en: "book", vi: "sách" },
      { en: "student", vi: "học sinh" },
      { en: "teacher", vi: "giáo viên" },
      { en: "house", vi: "nhà" },
      { en: "school", vi: "trường học" },
      { en: "pen", vi: "bút" },
      { en: "bag", vi: "cặp, túi" },
    ],
    grammarNotes: [
      "Danh từ = tên người, vật, nơi chốn.",
      "We go to school. — school là danh từ chỉ nơi.",
      "My pen and my bag. — pen, bag là danh từ chỉ vật.",
    ],
  },
  screens: [
    {
      type: "match",
      title: "Nối danh từ (1).",
      instruction: "Nối từ tiếng Anh với nghĩa tiếng Việt. Nhìn hình để nhớ nhanh.",
      words: [
        { id: "w-book", label: "book" },
        { id: "w-student", label: "student" },
        { id: "w-teacher", label: "teacher" },
        { id: "w-school", label: "school" },
      ],
      pairs: [
        {
          id: "p-book",
          imageUrl: "/images/practice/nouns/book.svg",
          imageAlt: "sách",
          label: "sách",
          correctWordId: "w-book",
        },
        {
          id: "p-student",
          imageUrl: "/images/practice/nouns/student.svg",
          imageAlt: "học sinh",
          label: "học sinh",
          correctWordId: "w-student",
        },
        {
          id: "p-teacher",
          imageUrl: "/images/practice/nouns/teacher.svg",
          imageAlt: "giáo viên",
          label: "giáo viên",
          correctWordId: "w-teacher",
        },
        {
          id: "p-school",
          imageUrl: "/images/practice/nouns/school.svg",
          imageAlt: "trường học",
          label: "trường học",
          correctWordId: "w-school",
        },
      ],
    },
    {
      type: "match",
      title: "Nối danh từ (2).",
      instruction: "Nối từ tiếng Anh với nghĩa tiếng Việt.",
      words: [
        { id: "w-house", label: "house" },
        { id: "w-pen", label: "pen" },
        { id: "w-bag", label: "bag" },
      ],
      pairs: [
        {
          id: "p-house",
          imageUrl: "/images/practice/nouns/house.svg",
          imageAlt: "nhà",
          label: "nhà",
          correctWordId: "w-house",
        },
        {
          id: "p-pen",
          imageUrl: "/images/practice/nouns/pen.svg",
          imageAlt: "bút",
          label: "bút",
          correctWordId: "w-pen",
        },
        {
          id: "p-bag",
          imageUrl: "/images/practice/nouns/bag.svg",
          imageAlt: "cặp",
          label: "cặp",
          correctWordId: "w-bag",
        },
      ],
    },
    {
      type: "categorize",
      title: "Người hay đồ vật / nơi?",
      instruction: "Kéo danh từ vào đúng nhóm.",
      categories: [
        { id: "cat-person", label: "Người" },
        { id: "cat-thing", label: "Đồ vật & nơi chốn" },
      ],
      items: [
        { id: "c-student", label: "student", correctCategoryId: "cat-person" },
        { id: "c-teacher", label: "teacher", correctCategoryId: "cat-person" },
        { id: "c-book", label: "book", correctCategoryId: "cat-thing" },
        { id: "c-pen", label: "pen", correctCategoryId: "cat-thing" },
        { id: "c-bag", label: "bag", correctCategoryId: "cat-thing" },
        { id: "c-house", label: "house", correctCategoryId: "cat-thing" },
        { id: "c-school", label: "school", correctCategoryId: "cat-thing" },
      ],
    },
    {
      type: "sentence-drag",
      title: "Điền danh từ.",
      instruction: "Kéo danh từ vào chỗ trống trong câu.",
      wordBank: [
        { id: "s-school", label: "school" },
        { id: "s-pen", label: "pen" },
        { id: "s-bag", label: "bag" },
        { id: "s-book", label: "book" },
        { id: "s-student", label: "student" },
        { id: "s-teacher", label: "teacher" },
        { id: "s-house", label: "house" },
      ],
      sentences: [
        {
          id: "sent-1",
          parts: [
            { kind: "text", value: "We go to " },
            { kind: "blank", id: "sd1", correctWordId: "s-school", width: "md" },
            { kind: "text", value: "." },
          ],
        },
        {
          id: "sent-2",
          parts: [
            { kind: "text", value: "My " },
            { kind: "blank", id: "sd2", correctWordId: "s-pen", width: "sm" },
            { kind: "text", value: " and my " },
            { kind: "blank", id: "sd3", correctWordId: "s-bag", width: "sm" },
            { kind: "text", value: "." },
          ],
        },
        {
          id: "sent-3",
          parts: [
            { kind: "text", value: "Nam, " },
            { kind: "blank", id: "sd4", correctWordId: "s-student", width: "md" },
            { kind: "text", value: "." },
          ],
        },
        {
          id: "sent-4",
          parts: [
            { kind: "text", value: "Lan, " },
            { kind: "blank", id: "sd5", correctWordId: "s-teacher", width: "md" },
            { kind: "text", value: "." },
          ],
        },
        {
          id: "sent-5",
          parts: [
            { kind: "blank", id: "sd6", correctWordId: "s-book", width: "md" },
            { kind: "text", value: " — book" },
          ],
        },
        {
          id: "sent-6",
          parts: [
            { kind: "blank", id: "sd7", correctWordId: "s-house", width: "md" },
            { kind: "text", value: " — house" },
          ],
        },
      ],
    },
    {
      type: "dropdown",
      title: "Chọn danh từ đúng.",
      instruction: "Đọc gợi ý tiếng Việt và chọn danh từ tiếng Anh.",
      image: {
        url: "/images/practice/day02-nouns.svg",
        alt: "Danh từ ở trường",
      },
      questions: [
        {
          id: "q1",
          parts: [
            { kind: "text", value: "___ — sách" },
            {
              kind: "select",
              id: "q1a",
              options: [
                { id: "q1a-book", label: "book" },
                { id: "q1a-pen", label: "pen" },
                { id: "q1a-bag", label: "bag" },
              ],
              correctOptionId: "q1a-book",
            },
          ],
        },
        {
          id: "q2",
          parts: [
            { kind: "text", value: "___ — nhà" },
            {
              kind: "select",
              id: "q2a",
              options: [
                { id: "q2a-house", label: "house" },
                { id: "q2a-school", label: "school" },
                { id: "q2a-book", label: "book" },
              ],
              correctOptionId: "q2a-house",
            },
          ],
        },
        {
          id: "q3",
          parts: [
            { kind: "text", value: "We go to ___." },
            {
              kind: "select",
              id: "q3a",
              options: [
                { id: "q3a-school", label: "school" },
                { id: "q3a-house", label: "house" },
                { id: "q3a-teacher", label: "teacher" },
              ],
              correctOptionId: "q3a-school",
            },
          ],
        },
        {
          id: "q4",
          parts: [
            { kind: "text", value: "Nam, ___." },
            {
              kind: "select",
              id: "q4a",
              options: [
                { id: "q4a-student", label: "student" },
                { id: "q4a-teacher", label: "teacher" },
                { id: "q4a-book", label: "book" },
              ],
              correctOptionId: "q4a-student",
            },
          ],
        },
      ],
    },
    {
      type: "reorder",
      title: "Sắp xếp câu.",
      instruction: "Sắp xếp các từ thành câu đúng.",
      image: {
        url: "/images/practice/day02-nouns.svg",
        alt: "Câu với danh từ",
      },
      lines: [
        { id: "r1", text: "We" },
        { id: "r2", text: "go" },
        { id: "r3", text: "to" },
        { id: "r4", text: "school" },
        { id: "r5", text: "." },
      ],
      correctOrder: ["r1", "r2", "r3", "r4", "r5"],
    },
    {
      type: "dialogue-fill",
      title: "Hội thoại ở trường.",
      instruction: "Hoàn thành hội thoại giữa Nam và Lan. Chỉ điền danh từ.",
      image: {
        url: "/images/practice/day02-nouns.svg",
        alt: "Nam và Lan ở trường",
      },
      wordBank: [
        { id: "wb-school", label: "school" },
        { id: "wb-pen", label: "pen" },
        { id: "wb-bag", label: "bag" },
        { id: "wb-book", label: "book" },
        { id: "wb-student", label: "student" },
      ],
      lines: [
        {
          speaker: "Nam",
          segments: [
            { kind: "text", value: "We go to " },
            {
              kind: "blank",
              id: "d1",
              correctWordId: "wb-school",
              width: "md",
            },
            { kind: "text", value: "." },
          ],
        },
        {
          speaker: "Lan",
          segments: [
            { kind: "text", value: "My " },
            { kind: "blank", id: "d2", correctWordId: "wb-pen", width: "sm" },
            { kind: "text", value: " and my " },
            { kind: "blank", id: "d3", correctWordId: "wb-bag", width: "sm" },
            { kind: "text", value: "." },
          ],
        },
        {
          speaker: "Nam",
          segments: [
            { kind: "text", value: "My " },
            { kind: "blank", id: "d4", correctWordId: "wb-book", width: "sm" },
            { kind: "text", value: " — book." },
          ],
        },
        {
          speaker: "Lan",
          segments: [
            { kind: "text", value: "Nam, " },
            {
              kind: "blank",
              id: "d5",
              correctWordId: "wb-student",
              width: "md",
            },
            { kind: "text", value: "." },
          ],
        },
      ],
    },
    {
      type: "self-writing",
      title: "Viết câu với danh từ.",
      instruction:
        "Viết 3 câu tiếng Anh có danh từ hôm nay: school, pen, book, bag, house, student, teacher.",
      promptHints: [
        "We go to school.",
        "My pen and my bag.",
        "Nam, student. / Lan, student.",
        "I like my book.",
      ],
      sampleTitle: "Bài gợi ý",
      sample:
        "We go to school.\nMy pen and my bag.\nbook — sách.",
    },
  ],
};
