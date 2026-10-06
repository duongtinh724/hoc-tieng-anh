import { getRulesForDay } from "@/data/curriculum/month-01/day-rules";
import { createPracticeMeta } from "@/data/practice/shared";
import type { PracticeLesson } from "@/types/practice";

export const practiceDay05: PracticeLesson = {
  meta: createPracticeMeta(5, "Cấu trúc S + V"),
  hints: {
    rules: getRulesForDay(5, ""),
    vocabulary: [
      { en: "subject (S)", vi: "chủ ngữ" },
      { en: "verb (V)", vi: "động từ" },
      { en: "sentence", vi: "câu" },
      { en: "simple", vi: "đơn giản" },
      { en: "every day", vi: "mỗi ngày" },
      { en: "morning", vi: "buổi sáng" },
    ],
    grammarNotes: [
      "S + V = câu đơn giản nhất.",
      "I / You / We / They + động từ nguyên mẫu.",
      "I study every day. · We read in the morning.",
    ],
  },
  screens: [
    {
      type: "match",
      title: "Nối thuật ngữ (1).",
      instruction: "Nối từ tiếng Anh với nghĩa tiếng Việt.",
      words: [
        { id: "w-subject", label: "subject (S)" },
        { id: "w-verb", label: "verb (V)" },
        { id: "w-sentence", label: "sentence" },
        { id: "w-simple", label: "simple" },
      ],
      pairs: [
        {
          id: "p-subject",
          imageUrl: "/images/practice/day05-sv.svg",
          imageAlt: "chủ ngữ",
          label: "chủ ngữ",
          correctWordId: "w-subject",
        },
        {
          id: "p-verb",
          imageAlt: "động từ",
          label: "động từ",
          correctWordId: "w-verb",
        },
        {
          id: "p-sentence",
          imageAlt: "câu",
          label: "câu",
          correctWordId: "w-sentence",
        },
        {
          id: "p-simple",
          imageAlt: "đơn giản",
          label: "đơn giản",
          correctWordId: "w-simple",
        },
      ],
    },
    {
      type: "match",
      title: "Nối thuật ngữ (2).",
      instruction: "Nối cụm tiếng Anh với nghĩa tiếng Việt.",
      words: [
        { id: "w-every", label: "every day" },
        { id: "w-morning", label: "morning" },
        { id: "w-study", label: "study" },
        { id: "w-go", label: "go" },
      ],
      pairs: [
        {
          id: "p-every",
          imageAlt: "mỗi ngày",
          label: "mỗi ngày",
          correctWordId: "w-every",
        },
        {
          id: "p-morning",
          imageAlt: "buổi sáng",
          label: "buổi sáng",
          correctWordId: "w-morning",
        },
        {
          id: "p-study",
          imageAlt: "học (động từ)",
          label: "học (động từ)",
          correctWordId: "w-study",
        },
        {
          id: "p-go",
          imageAlt: "đi (động từ)",
          label: "đi (động từ)",
          correctWordId: "w-go",
        },
      ],
    },
    {
      type: "categorize",
      title: "Chủ ngữ hay động từ?",
      instruction: "Kéo từ vào đúng nhóm S hoặc V.",
      categories: [
        { id: "cat-s", label: "Chủ ngữ (S)" },
        { id: "cat-v", label: "Động từ (V)" },
      ],
      items: [
        { id: "c-i", label: "I", correctCategoryId: "cat-s" },
        { id: "c-you", label: "You", correctCategoryId: "cat-s" },
        { id: "c-we", label: "We", correctCategoryId: "cat-s" },
        { id: "c-they", label: "They", correctCategoryId: "cat-s" },
        { id: "c-study", label: "study", correctCategoryId: "cat-v" },
        { id: "c-work", label: "work", correctCategoryId: "cat-v" },
        { id: "c-go", label: "go", correctCategoryId: "cat-v" },
        { id: "c-play", label: "play", correctCategoryId: "cat-v" },
        { id: "c-read", label: "read", correctCategoryId: "cat-v" },
      ],
    },
    {
      type: "sentence-drag",
      title: "Tạo câu S + V.",
      instruction: "Kéo động từ hoặc cụm thời gian vào chỗ trống.",
      wordBank: [
        { id: "s-study", label: "study" },
        { id: "s-work", label: "work" },
        { id: "s-go", label: "go" },
        { id: "s-play", label: "play" },
        { id: "s-read", label: "read" },
        { id: "s-every", label: "every day" },
        { id: "s-morning", label: "morning" },
      ],
      sentences: [
        {
          id: "sent-1",
          parts: [
            { kind: "text", value: "I " },
            { kind: "blank", id: "sd1", correctWordId: "s-study", width: "md" },
            { kind: "text", value: "." },
          ],
        },
        {
          id: "sent-2",
          parts: [
            { kind: "text", value: "You " },
            { kind: "blank", id: "sd2", correctWordId: "s-work", width: "md" },
            { kind: "text", value: "." },
          ],
        },
        {
          id: "sent-3",
          parts: [
            { kind: "text", value: "We " },
            { kind: "blank", id: "sd3", correctWordId: "s-go", width: "md" },
            { kind: "text", value: "." },
          ],
        },
        {
          id: "sent-4",
          parts: [
            { kind: "text", value: "They " },
            { kind: "blank", id: "sd4", correctWordId: "s-play", width: "md" },
            { kind: "text", value: "." },
          ],
        },
        {
          id: "sent-5",
          parts: [
            { kind: "text", value: "I study " },
            { kind: "blank", id: "sd5", correctWordId: "s-every", width: "md" },
            { kind: "text", value: "." },
          ],
        },
        {
          id: "sent-6",
          parts: [
            { kind: "text", value: "We read in the " },
            { kind: "blank", id: "sd6", correctWordId: "s-morning", width: "md" },
            { kind: "text", value: "." },
          ],
        },
      ],
    },
    {
      type: "dropdown",
      title: "Chọn động từ đúng.",
      instruction: "Hoàn thành câu S + V.",
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
                { id: "q1a-book", label: "book" },
                { id: "q1a-I", label: "I" },
              ],
              correctOptionId: "q1a-study",
            },
            { kind: "text", value: "." },
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
                { id: "q2a-we", label: "We" },
                { id: "q2a-good", label: "good" },
              ],
              correctOptionId: "q2a-work",
            },
            { kind: "text", value: "." },
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
                { id: "q3a-go", label: "go" },
                { id: "q3a-goes", label: "goes" },
                { id: "q3a-school", label: "school" },
              ],
              correctOptionId: "q3a-go",
            },
            { kind: "text", value: "." },
          ],
        },
        {
          id: "q4",
          parts: [
            { kind: "text", value: "I study " },
            {
              kind: "select",
              id: "q4a",
              options: [
                { id: "q4a-every", label: "every day" },
                { id: "q4a-morning", label: "morning" },
                { id: "q4a-play", label: "play" },
              ],
              correctOptionId: "q4a-every",
            },
            { kind: "text", value: "." },
          ],
        },
      ],
    },
    {
      type: "reorder",
      title: "Sắp xếp câu S + V.",
      instruction: "Sắp xếp thành câu: I study every day.",
      image: {
        url: "/images/practice/day05-sv.svg",
        alt: "S + V",
      },
      lines: [
        { id: "r1", text: "I" },
        { id: "r2", text: "study" },
        { id: "r3", text: "every" },
        { id: "r4", text: "day" },
        { id: "r5", text: "." },
      ],
      correctOrder: ["r1", "r2", "r3", "r4", "r5"],
    },
    {
      type: "dialogue-fill",
      title: "Lịch của Nam.",
      instruction: "Hoàn thành hội thoại. Chỉ điền động từ hoặc cụm thời gian.",
      image: {
        url: "/images/practice/day05-sv.svg",
        alt: "Nam nói về lịch học",
      },
      wordBank: [
        { id: "wb-study", label: "study" },
        { id: "wb-work", label: "work" },
        { id: "wb-go", label: "go" },
        { id: "wb-play", label: "play" },
        { id: "wb-read", label: "read" },
        { id: "wb-every", label: "every day" },
        { id: "wb-morning", label: "morning" },
      ],
      lines: [
        {
          speaker: "Nam",
          segments: [
            { kind: "text", value: "I " },
            { kind: "blank", id: "d1", correctWordId: "wb-study", width: "md" },
            { kind: "text", value: " English." },
          ],
        },
        {
          speaker: "Lan",
          segments: [
            { kind: "text", value: "You " },
            { kind: "blank", id: "d2", correctWordId: "wb-work", width: "md" },
            { kind: "text", value: " hard." },
          ],
        },
        {
          speaker: "Nam",
          segments: [
            { kind: "text", value: "We " },
            { kind: "blank", id: "d3", correctWordId: "wb-go", width: "md" },
            { kind: "text", value: " to school." },
          ],
        },
        {
          speaker: "Lan",
          segments: [
            { kind: "text", value: "They " },
            { kind: "blank", id: "d4", correctWordId: "wb-play", width: "md" },
            { kind: "text", value: " football." },
          ],
        },
        {
          speaker: "Nam",
          segments: [
            { kind: "text", value: "I study " },
            { kind: "blank", id: "d5", correctWordId: "wb-every", width: "md" },
            { kind: "text", value: "." },
          ],
        },
        {
          speaker: "Lan",
          segments: [
            { kind: "text", value: "We read in the " },
            {
              kind: "blank",
              id: "d6",
              correctWordId: "wb-morning",
              width: "md",
            },
            { kind: "text", value: "." },
          ],
        },
      ],
    },
    {
      type: "self-writing",
      title: "Viết câu S + V.",
      instruction:
        "Viết 4 câu đơn giản S + V về lịch của Nam: I ..., You ..., We ..., They ...",
      promptHints: [
        "I study.",
        "You work.",
        "We go.",
        "They play.",
        "I study every day.",
        "We read in the morning.",
      ],
      sampleTitle: "Bài gợi ý",
      sample:
        "I study.\nYou work.\nWe go to school.\nThey play football.\nI study every day.",
    },
  ],
};
