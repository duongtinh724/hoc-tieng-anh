import { getRulesForDay } from "@/data/curriculum/month-01/day-rules";
import { createPracticeMeta } from "@/data/practice/shared";
import type { PracticeLesson } from "@/types/practice";

export const practiceDay01: PracticeLesson = {
  meta: { ...createPracticeMeta(1, "Đại từ nhân xưng"), totalScreens: 8 },
  hints: {
    rules: getRulesForDay(1, ""),
    vocabulary: [
      { en: "I", vi: "tôi — người nói" },
      { en: "you", vi: "bạn / các bạn" },
      { en: "he", vi: "anh ấy — một người nam" },
      { en: "she", vi: "cô ấy — một người nữ" },
      { en: "it", vi: "nó — đồ vật, con vật, sự việc" },
      { en: "we", vi: "chúng tôi / chúng ta" },
      { en: "they", vi: "họ / chúng" },
    ],
    grammarNotes: [
      "Đại từ thay tên khi làm chủ ngữ: Nam → He, Lan → She.",
      "It = đồ vật, con vật hoặc sự việc.",
      "My brother and I → We. My parents → They.",
    ],
  },
  screens: [
    {
      type: "match",
      title: "Match the pronouns.\nNối đại từ.",
      instruction: "Match each pronoun with a picture. Tap the picture to see the Vietnamese meaning.\nNối đại từ với ảnh. Bấm ảnh để xem nghĩa tiếng Việt.",
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
      title: "People or things?\nNgười hay vật?",
      instruction: "Drag each pronoun into the right group: people, or a thing or animal.\nKéo thả vào đúng nhóm: đại từ chỉ người hoặc chỉ vật/con vật.",
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
      title: "Fill in the pronoun.\nĐiền đại từ.",
      instruction: "Read who it is. Drag the pronoun into the blank.\nĐọc đó là ai. Kéo đại từ vào chỗ trống.",
      wordBank: [
        { id: "s-i", label: "I" },
        { id: "s-he", label: "He" },
        { id: "s-she", label: "She" },
        { id: "s-it", label: "It" },
        { id: "s-we", label: "We" },
        { id: "s-they", label: "They" },
      ],
      sentences: [
        {
          id: "sent-1",
          parts: [
            { kind: "text", value: "Nam is my brother. " },
            { kind: "blank", id: "sd1", correctWordId: "s-he", width: "sm" },
            { kind: "text", value: " is 15 years old." },
          ],
        },
        {
          id: "sent-2",
          parts: [
            { kind: "text", value: "Lan is a teacher. " },
            { kind: "blank", id: "sd2", correctWordId: "s-she", width: "sm" },
            { kind: "text", value: " is kind." },
          ],
        },
        {
          id: "sent-3",
          parts: [
            { kind: "text", value: "My parents are at home. " },
            { kind: "blank", id: "sd3", correctWordId: "s-they", width: "sm" },
            { kind: "text", value: " are happy." },
          ],
        },
        {
          id: "sent-4",
          parts: [
            { kind: "text", value: "My cat is small. " },
            { kind: "blank", id: "sd4", correctWordId: "s-it", width: "sm" },
            { kind: "text", value: " is cute." },
          ],
        },
        {
          id: "sent-5",
          parts: [
            { kind: "text", value: "My friend and I are students. " },
            { kind: "blank", id: "sd5", correctWordId: "s-we", width: "sm" },
            { kind: "text", value: " are students." },
          ],
        },
        {
          id: "sent-6",
          parts: [
            { kind: "blank", id: "sd6", correctWordId: "s-i", width: "sm" },
            { kind: "text", value: " am a beginner in English." },
          ],
        },
      ],
    },
    {
      type: "dropdown",
      title: "Choose the correct pronoun.\nChọn đại từ đúng.",
      instruction: "Choose the pronoun that replaces the name.\nChọn đại từ thay cho tên hoặc cụm từ.",
      questions: [
        {
          id: "q1",
          parts: [
            { kind: "text", value: "Nam is a student. " },
            {
              kind: "select",
              id: "q1a",
              options: [
                { id: "q1a-he", label: "He" },
                { id: "q1a-she", label: "She" },
                { id: "q1a-it", label: "It" },
              ],
              correctOptionId: "q1a-he",
            },
            { kind: "text", value: " is a student." },
          ],
        },
        {
          id: "q2",
          parts: [
            { kind: "text", value: "Lan is my friend. " },
            {
              kind: "select",
              id: "q2a",
              options: [
                { id: "q2a-he", label: "He" },
                { id: "q2a-she", label: "She" },
                { id: "q2a-they", label: "They" },
              ],
              correctOptionId: "q2a-she",
            },
            { kind: "text", value: " is my friend." },
          ],
        },
        {
          id: "q3",
          parts: [
            { kind: "text", value: "The book is new. " },
            {
              kind: "select",
              id: "q3a",
              options: [
                { id: "q3a-he", label: "He" },
                { id: "q3a-it", label: "It" },
                { id: "q3a-we", label: "We" },
              ],
              correctOptionId: "q3a-it",
            },
            { kind: "text", value: " is new." },
          ],
        },
        {
          id: "q4",
          parts: [
            { kind: "text", value: "My brother and I are happy. " },
            {
              kind: "select",
              id: "q4a",
              options: [
                { id: "q4a-they", label: "They" },
                { id: "q4a-we", label: "We" },
                { id: "q4a-you", label: "You" },
              ],
              correctOptionId: "q4a-we",
            },
            { kind: "text", value: " are happy." },
          ],
        },
      ],
    },
    {
      type: "reorder",
      layout: "horizontal",
      title: "Put the words in order.\nSắp xếp câu.",
      instruction: "Drag the words into a line.\nKéo các từ thành câu đúng.",
      sentences: [
        {
          id: "sen-1",
          label: "Câu 1",
          lines: [
            { id: "s1a", text: "He" },
            { id: "s1b", text: "is" },
            { id: "s1c", text: "a" },
            { id: "s1d", text: "student" },
          ],
          correctOrder: ["s1a", "s1b", "s1c", "s1d"],
        },
        {
          id: "sen-2",
          label: "Câu 2",
          lines: [
            { id: "s2a", text: "She" },
            { id: "s2b", text: "is" },
            { id: "s2c", text: "my" },
            { id: "s2d", text: "friend" },
          ],
          correctOrder: ["s2a", "s2b", "s2c", "s2d"],
        },
        {
          id: "sen-3",
          label: "Câu 3",
          lines: [
            { id: "s3a", text: "They" },
            { id: "s3b", text: "are" },
            { id: "s3c", text: "at" },
            { id: "s3d", text: "home" },
          ],
          correctOrder: ["s3a", "s3b", "s3c", "s3d"],
        },
        {
          id: "sen-4",
          label: "Câu 4",
          lines: [
            { id: "s4a", text: "We" },
            { id: "s4b", text: "are" },
            { id: "s4c", text: "happy" },
          ],
          correctOrder: ["s4a", "s4b", "s4c"],
        },
        {
          id: "sen-5",
          label: "Câu 5",
          lines: [
            { id: "s5a", text: "It" },
            { id: "s5b", text: "is" },
            { id: "s5c", text: "new" },
          ],
          correctOrder: ["s5a", "s5b", "s5c"],
        },
      ],
      lines: [],
      correctOrder: [],
    },
    {
      type: "reading-fill",
      title: "Read and fill in.\nĐọc và điền.",
      instruction: "Read the passage and type the pronoun in the blank on the same line.\nĐọc đoạn văn và điền đại từ vào ô trên cùng một dòng.",
      passage:
        "Nam is a student. He is a student. Lan is my friend. She is my friend. My parents are at home. They are at home. The book is new. It is new.",
      prompts: [
        { id: "rf1", label: "Nam is a student. ___ is a student.", correctAnswers: ["He"] },
        { id: "rf2", label: "Lan is my friend. ___ is my friend.", correctAnswers: ["She"] },
        { id: "rf3", label: "My parents are at home. ___ are at home.", correctAnswers: ["They"] },
        { id: "rf4", label: "The book is new. ___ is new.", correctAnswers: ["It"] },
      ],
    },
    {
      type: "dictation",
      title: "Translate into English.\nDịch sang tiếng Anh.",
      instruction: "Read the Vietnamese sentence and write it in English. Press Check.\nĐọc câu tiếng Việt rồi viết câu tiếng Anh. Bấm Kiểm tra.",
      items: [
        { id: "dic-1", text: "She is my friend.", hint: "Cô ấy là bạn của tôi." },
        { id: "dic-2", text: "They are students.", hint: "Họ là học sinh." },
        { id: "dic-3", text: "We are happy.", hint: "Chúng tôi vui vẻ." },
        { id: "dic-4", text: "It is a book.", hint: "Nó là một quyển sách." },
        { id: "dic-5", text: "He is a student.", hint: "Anh ấy là học sinh." },
      ],
    },
    {
      type: "self-writing",
      title: "Write sentences with pronouns.\nViết câu với đại từ.",
      instruction:
        "Write 5 sentences about you and your family. Use I, he, she, we, or they.\nViết 5 câu về bản thân và gia đình. Dùng I, he, she, we hoặc they.",
      promptHints: [
        "I am a student.",
        "He is my brother.",
        "She is my friend.",
        "We are happy.",
        "They are at home.",
      ],
      sampleTitle: "Bài gợi ý",
      sample: "I am a student.\nHe is my brother.\nShe is my friend.\nWe are happy.\nThey are at home.",
    },
  ],
};
