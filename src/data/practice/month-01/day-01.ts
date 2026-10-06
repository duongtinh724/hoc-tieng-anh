import { getRulesForDay } from "@/data/curriculum/month-01/day-rules";
import { createPracticeMeta } from "@/data/practice/shared";
import type { PracticeLesson } from "@/types/practice";

export const practiceDay01: PracticeLesson = {
  meta: createPracticeMeta(1, "Đại từ nhân xưng"),
  hints: {
    rules: getRulesForDay(1, ""),
    vocabulary: [
      { en: "I", vi: "tôi" },
      { en: "you", vi: "bạn" },
      { en: "he", vi: "anh ấy / cậu ấy" },
      { en: "she", vi: "cô ấy / chị ấy" },
      { en: "it", vi: "nó (vật, con vật)" },
      { en: "we", vi: "chúng tôi / chúng ta" },
      { en: "they", vi: "họ" },
    ],
    grammarNotes: [
      "Đại từ đứng đầu câu: I study. You go.",
      "It = nó (chỉ vật hoặc con vật).",
      "He/She/It chưa học chia -s — hôm nay chỉ nhận biết đại từ.",
    ],
  },
  screens: [
    {
      type: "match",
      title: "Nối đại từ (1).",
      instruction: "Nối từ tiếng Anh với nghĩa tiếng Việt đúng.",
      words: [
        { id: "w-i", label: "I" },
        { id: "w-you", label: "You" },
        { id: "w-he", label: "He" },
        { id: "w-she", label: "She" },
      ],
      pairs: [
        {
          id: "p-i",
          imageUrl: "/images/practice/day01-pronouns.svg",
          imageAlt: "tôi",
          label: "tôi",
          correctWordId: "w-i",
        },
        {
          id: "p-you",
          imageAlt: "bạn",
          label: "bạn",
          correctWordId: "w-you",
        },
        {
          id: "p-he",
          imageAlt: "anh ấy",
          label: "anh ấy",
          correctWordId: "w-he",
        },
        {
          id: "p-she",
          imageAlt: "cô ấy",
          label: "cô ấy",
          correctWordId: "w-she",
        },
      ],
    },
    {
      type: "match",
      title: "Nối đại từ (2).",
      instruction: "Nối từ tiếng Anh với nghĩa tiếng Việt đúng.",
      words: [
        { id: "w-we", label: "We" },
        { id: "w-they", label: "They" },
        { id: "w-it", label: "It" },
      ],
      pairs: [
        {
          id: "p-we",
          imageAlt: "chúng tôi",
          label: "chúng tôi",
          correctWordId: "w-we",
        },
        {
          id: "p-they",
          imageAlt: "họ",
          label: "họ",
          correctWordId: "w-they",
        },
        {
          id: "p-it",
          imageAlt: "nó (vật)",
          label: "nó (vật)",
          correctWordId: "w-it",
        },
      ],
    },
    {
      type: "categorize",
      title: "Người hay vật?",
      instruction: "Kéo thả vào đúng nhóm: đại từ chỉ người hoặc chỉ vật/con vật.",
      categories: [
        { id: "cat-people", label: "Chỉ người" },
        { id: "cat-thing", label: "Chỉ vật / con vật" },
      ],
      items: [
        { id: "c-i", label: "I", correctCategoryId: "cat-people" },
        { id: "c-you", label: "You", correctCategoryId: "cat-people" },
        { id: "c-he", label: "He", correctCategoryId: "cat-people" },
        { id: "c-she", label: "She", correctCategoryId: "cat-people" },
        { id: "c-we", label: "We", correctCategoryId: "cat-people" },
        { id: "c-they", label: "They", correctCategoryId: "cat-people" },
        { id: "c-it", label: "It", correctCategoryId: "cat-thing" },
      ],
    },
    {
      type: "sentence-drag",
      title: "Điền đại từ.",
      instruction: "Kéo đại từ vào chỗ trống. (Chưa học chia -s với He/She.)",
      wordBank: [
        { id: "s-i", label: "I" },
        { id: "s-you", label: "You" },
        { id: "s-he", label: "He" },
        { id: "s-she", label: "She" },
        { id: "s-we", label: "We" },
        { id: "s-they", label: "They" },
      ],
      sentences: [
        {
          id: "sent-1",
          parts: [
            { kind: "blank", id: "sd1", correctWordId: "s-i", width: "sm" },
            { kind: "text", value: " study English." },
          ],
        },
        {
          id: "sent-2",
          parts: [
            { kind: "blank", id: "sd2", correctWordId: "s-you", width: "sm" },
            { kind: "text", value: " go to school." },
          ],
        },
        {
          id: "sent-3",
          parts: [
            { kind: "blank", id: "sd3", correctWordId: "s-he", width: "sm" },
            { kind: "text", value: " read books." },
          ],
        },
        {
          id: "sent-4",
          parts: [
            { kind: "blank", id: "sd4", correctWordId: "s-she", width: "sm" },
            { kind: "text", value: " like music." },
          ],
        },
        {
          id: "sent-5",
          parts: [
            { kind: "blank", id: "sd5", correctWordId: "s-they", width: "sm" },
            { kind: "text", value: " play football." },
          ],
        },
        {
          id: "sent-6",
          parts: [
            { kind: "blank", id: "sd6", correctWordId: "s-we", width: "sm" },
            { kind: "text", value: " study together." },
          ],
        },
      ],
    },
    {
      type: "dropdown",
      title: "Chọn đại từ đúng.",
      instruction: "Đọc gợi ý tiếng Việt và chọn đại từ tiếng Anh.",
      questions: [
        {
          id: "q1",
          parts: [
            { kind: "text", value: "(tôi) " },
            {
              kind: "select",
              id: "q1a",
              options: [
                { id: "q1a-i", label: "I" },
                { id: "q1a-you", label: "You" },
                { id: "q1a-he", label: "He" },
              ],
              correctOptionId: "q1a-i",
            },
            { kind: "text", value: " study English." },
          ],
        },
        {
          id: "q2",
          parts: [
            { kind: "text", value: "(bạn) " },
            {
              kind: "select",
              id: "q2a",
              options: [
                { id: "q2a-i", label: "I" },
                { id: "q2a-you", label: "You" },
                { id: "q2a-we", label: "We" },
              ],
              correctOptionId: "q2a-you",
            },
            { kind: "text", value: " go to school." },
          ],
        },
        {
          id: "q3",
          parts: [
            { kind: "text", value: "(anh ấy) " },
            {
              kind: "select",
              id: "q3a",
              options: [
                { id: "q3a-he", label: "He" },
                { id: "q3a-she", label: "She" },
                { id: "q3a-it", label: "It" },
              ],
              correctOptionId: "q3a-he",
            },
            { kind: "text", value: " read books." },
          ],
        },
        {
          id: "q4",
          parts: [
            { kind: "text", value: "(họ) " },
            {
              kind: "select",
              id: "q4a",
              options: [
                { id: "q4a-we", label: "We" },
                { id: "q4a-they", label: "They" },
                { id: "q4a-it", label: "It" },
              ],
              correctOptionId: "q4a-they",
            },
            { kind: "text", value: " play football." },
          ],
        },
      ],
    },
    {
      type: "reorder",
      title: "Sắp xếp hội thoại.",
      instruction:
        "Sắp xếp các câu theo đúng thứ tự hội thoại giữa Nam và Lan. Mỗi câu có đại từ I, You, He, She hoặc They.",
      fixedFirst: true,
      lines: [
        { id: "r1", text: "Nam: I study English." },
        { id: "r2", text: "Lan: You go to school." },
        { id: "r3", text: "Nam: He read books." },
        { id: "r4", text: "Lan: She like music." },
        { id: "r5", text: "Nam: They play football." },
      ],
      correctOrder: ["r1", "r2", "r3", "r4", "r5"],
    },
    {
      type: "reading-fill",
      title: "Đọc và điền.",
      instruction:
        "Đọc về Nam và 7 đại từ. Trả lời bằng tiếng Anh (viết đúng chữ hoa nếu cần).",
      passage:
        "Nam learns seven pronouns in class 9A. I = tôi. You = bạn. He = anh ấy. She = cô ấy. It = nó (a thing or animal). We = chúng tôi. They = họ. Pronouns go at the start of a sentence. Examples: I study. You go. He read. She like. We play. They read.",
      prompts: [
        { id: "rf1", label: "Tôi (tiếng Anh):", correctAnswers: ["I"] },
        { id: "rf2", label: "Bạn (tiếng Anh):", correctAnswers: ["You"] },
        { id: "rf3", label: "Anh ấy (tiếng Anh):", correctAnswers: ["He"] },
        { id: "rf4", label: "Cô ấy (tiếng Anh):", correctAnswers: ["She"] },
        {
          id: "rf5",
          label: "Nó — vật (tiếng Anh):",
          correctAnswers: ["It"],
        },
        {
          id: "rf6",
          label: "Chúng tôi (tiếng Anh):",
          correctAnswers: ["We"],
        },
        { id: "rf7", label: "Họ (tiếng Anh):", correctAnswers: ["They"] },
      ],
    },
    {
      type: "self-writing",
      title: "Viết câu với đại từ.",
      instruction:
        "Viết 3 câu tiếng Anh có đại từ I, We, They. Có thể thêm động từ đơn: study, go, read, play.",
      promptHints: [
        "I + động từ: I study English.",
        "We + động từ: We go to school.",
        "They + động từ: They play football.",
        "Đại từ viết hoa: I, You, He, She, It, We, They.",
      ],
      sampleTitle: "Bài gợi ý",
      sample:
        "I study English.\nWe go to school.\nThey play football after class.",
    },
  ],
};
