import { getRulesForDay } from "@/data/curriculum/month-01/day-rules";
import { createPracticeMeta } from "@/data/practice/shared";
import type { PracticeLesson } from "@/types/practice";

export const practiceDay01: PracticeLesson = {
  meta: { ...createPracticeMeta(1, "Đại từ nhân xưng"), totalScreens: 7 },
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
      title: "Nối đại từ.",
      instruction: "Nối đại từ với ảnh. Bấm ảnh để xem nghĩa tiếng Việt.",
      words: [
        { id: "w-i", label: "I" },
        { id: "w-you", label: "You" },
        { id: "w-he", label: "He" },
        { id: "w-she", label: "She" },
        { id: "w-it", label: "It" },
        { id: "w-we", label: "We" },
        { id: "w-they", label: "They" },
      ],
      pairs: [
        {
          id: "p-i",
          imageUrl: "/images/practice/pronouns/i.jpg",
          imageAlt: "tôi",
          label: "tôi",
          correctWordId: "w-i",
        },
        {
          id: "p-you",
          imageUrl: "/images/practice/pronouns/you.jpg",
          imageAlt: "bạn",
          label: "bạn",
          correctWordId: "w-you",
        },
        {
          id: "p-he",
          imageUrl: "/images/practice/pronouns/he.jpg",
          imageAlt: "anh ấy",
          label: "anh ấy",
          correctWordId: "w-he",
        },
        {
          id: "p-she",
          imageUrl: "/images/practice/pronouns/she.jpg",
          imageAlt: "cô ấy",
          label: "cô ấy",
          correctWordId: "w-she",
        },
        {
          id: "p-it",
          imageUrl: "/images/practice/pronouns/it.jpg",
          imageAlt: "nó (vật, con vật)",
          label: "nó (vật, con vật)",
          correctWordId: "w-it",
        },
        {
          id: "p-we",
          imageUrl: "/images/practice/pronouns/we.jpg",
          imageAlt: "chúng tôi",
          label: "chúng tôi",
          correctWordId: "w-we",
        },
        {
          id: "p-they",
          imageUrl: "/images/practice/pronouns/they.jpg",
          imageAlt: "họ",
          label: "họ",
          correctWordId: "w-they",
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
      layout: "horizontal",
      title: "Sắp xếp câu.",
      instruction: "Kéo các từ theo hàng ngang. Đại từ đứng đầu câu.",
      sentences: [
        {
          id: "sen-1",
          label: "Câu 1",
          lines: [
            { id: "s1a", text: "I" },
            { id: "s1b", text: "study" },
            { id: "s1c", text: "English" },
            { id: "s1d", text: "." },
          ],
          correctOrder: ["s1a", "s1b", "s1c", "s1d"],
        },
        {
          id: "sen-2",
          label: "Câu 2",
          lines: [
            { id: "s2a", text: "You" },
            { id: "s2b", text: "go" },
            { id: "s2c", text: "to school" },
            { id: "s2d", text: "." },
          ],
          correctOrder: ["s2a", "s2b", "s2c", "s2d"],
        },
        {
          id: "sen-3",
          label: "Câu 3",
          lines: [
            { id: "s3a", text: "He" },
            { id: "s3b", text: "read" },
            { id: "s3c", text: "books" },
            { id: "s3d", text: "." },
          ],
          correctOrder: ["s3a", "s3b", "s3c", "s3d"],
        },
        {
          id: "sen-4",
          label: "Câu 4",
          lines: [
            { id: "s4a", text: "She" },
            { id: "s4b", text: "like" },
            { id: "s4c", text: "music" },
            { id: "s4d", text: "." },
          ],
          correctOrder: ["s4a", "s4b", "s4c", "s4d"],
        },
        {
          id: "sen-5",
          label: "Câu 5",
          lines: [
            { id: "s5a", text: "They" },
            { id: "s5b", text: "play" },
            { id: "s5c", text: "football" },
            { id: "s5d", text: "." },
          ],
          correctOrder: ["s5a", "s5b", "s5c", "s5d"],
        },
      ],
      lines: [],
      correctOrder: [],
    },
    {
      type: "reading-fill",
      title: "Đọc và điền.",
      instruction: "Đọc đoạn văn và điền đại từ vào ô trên cùng một dòng.",
      passage:
        "Nam learns seven pronouns in class 9A. I study. You go to school. He read books. She like music. It — a cat. We play. They read.",
      prompts: [
        { id: "rf1", label: "___ study. (tôi)", correctAnswers: ["I"] },
        { id: "rf2", label: "___ go to school. (bạn)", correctAnswers: ["You"] },
        { id: "rf3", label: "___ read books. (anh ấy)", correctAnswers: ["He"] },
        { id: "rf4", label: "___ like music. (cô ấy)", correctAnswers: ["She"] },
        { id: "rf5", label: "___ — a cat. (nó)", correctAnswers: ["It"] },
        { id: "rf6", label: "___ play. (chúng tôi)", correctAnswers: ["We"] },
        { id: "rf7", label: "___ read. (họ)", correctAnswers: ["They"] },
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
