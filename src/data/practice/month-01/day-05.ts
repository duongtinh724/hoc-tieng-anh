import { getRulesForDay } from "@/data/curriculum/month-01/day-rules";
import { createPracticeMeta } from "@/data/practice/shared";
import type { PracticeLesson } from "@/types/practice";

export const practiceDay05: PracticeLesson = {
  meta: { ...createPracticeMeta(5, "Cấu trúc S + V"), totalScreens: 8 },
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
      title: "Match S + V words.\nNối từ S + V.",
      instruction: "Match each word with a picture. Tap the picture to see the Vietnamese meaning.\nNối từ với ảnh. Bấm ảnh để xem nghĩa tiếng Việt.",
      words: [
        { id: "w-subject", label: "subject (S)" },
        { id: "w-verb", label: "verb (V)" },
        { id: "w-sentence", label: "sentence" },
        { id: "w-simple", label: "simple" },
        { id: "w-every", label: "every day" },
        { id: "w-morning", label: "morning" },
        { id: "w-study", label: "study" },
        { id: "w-go", label: "go" },
      ],
      pairs: [
        {
          id: "p-subject",
          imageUrl: "/images/practice/grammar/subject.jpg",
          imageAlt: "chủ ngữ",
          label: "chủ ngữ",
          correctWordId: "w-subject",
        },
        {
          id: "p-verb",
          imageUrl: "/images/practice/grammar/verb.jpg",
          imageAlt: "động từ",
          label: "động từ",
          correctWordId: "w-verb",
        },
        {
          id: "p-sentence",
          imageUrl: "/images/practice/grammar/sentence.jpg",
          imageAlt: "câu",
          label: "câu",
          correctWordId: "w-sentence",
        },
        {
          id: "p-simple",
          imageUrl: "/images/practice/grammar/simple.jpg",
          imageAlt: "đơn giản",
          label: "đơn giản",
          correctWordId: "w-simple",
        },
        {
          id: "p-every",
          imageUrl: "/images/practice/grammar/everyday.jpg",
          imageAlt: "mỗi ngày",
          label: "mỗi ngày",
          correctWordId: "w-every",
        },
        {
          id: "p-morning",
          imageUrl: "/images/practice/grammar/morning.jpg",
          imageAlt: "buổi sáng",
          label: "buổi sáng",
          correctWordId: "w-morning",
        },
        {
          id: "p-study",
          imageUrl: "/images/practice/grammar/study.jpg",
          imageAlt: "học",
          label: "học",
          correctWordId: "w-study",
        },
        {
          id: "p-go",
          imageUrl: "/images/practice/grammar/go.jpg",
          imageAlt: "đi",
          label: "đi",
          correctWordId: "w-go",
        },
      ],
    },
    {
      type: "categorize",
      title: "Subject or verb?\nChủ ngữ hay động từ?",
      instruction: "Drag each word into Subject (S) or Verb (V).\nKéo từ vào đúng nhóm S hoặc V.",
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
      title: "Make S + V sentences.\nTạo câu S + V.",
      instruction: "Drag a verb or a time phrase into the blank.\nKéo động từ hoặc cụm thời gian vào chỗ trống.",
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
      title: "Choose the correct verb.\nChọn động từ đúng.",
      instruction: "Complete the S + V sentence. Some items review adjectives (Day 4) and verbs (Day 3).\nHoàn thành câu S + V. Có câu ôn tính từ (ngày 4) và động từ (ngày 3).",
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
        {
          id: "q-review-4",
          parts: [
            { kind: "text", value: "Ôn: a ___ book (tốt)" },
            {
              kind: "select",
              id: "q-review-4a",
              options: [
                { id: "qr4-good", label: "good" },
                { id: "qr4-study", label: "study" },
                { id: "qr4-big", label: "big" },
              ],
              correctOptionId: "qr4-good",
            },
          ],
        },
        {
          id: "q-review-3",
          parts: [
            { kind: "text", value: "Ôn: They ___ football." },
            {
              kind: "select",
              id: "q-review-3a",
              options: [
                { id: "qr3-play", label: "play" },
                { id: "qr3-good", label: "good" },
                { id: "qr3-read", label: "read" },
              ],
              correctOptionId: "qr3-play",
            },
          ],
        },
      ],
    },
    {
      type: "reorder",
      layout: "horizontal",
      title: "Order an S + V sentence.\nSắp xếp câu S + V.",
      instruction: "Drag the words into a line: Subject + Verb.\nKéo các từ theo hàng ngang thành câu Chủ ngữ + Động từ.",
      sentences: [
        {
          id: "sen-1",
          label: "Câu 1",
          lines: [
            { id: "s1a", text: "I" },
            { id: "s1b", text: "study" },
            { id: "s1c", text: "." },
          ],
          correctOrder: ["s1a", "s1b", "s1c"],
        },
        {
          id: "sen-2",
          label: "Câu 2",
          lines: [
            { id: "s2a", text: "You" },
            { id: "s2b", text: "work" },
            { id: "s2c", text: "." },
          ],
          correctOrder: ["s2a", "s2b", "s2c"],
        },
        {
          id: "sen-3",
          label: "Câu 3",
          lines: [
            { id: "s3a", text: "We" },
            { id: "s3b", text: "go" },
            { id: "s3c", text: "to school" },
            { id: "s3d", text: "." },
          ],
          correctOrder: ["s3a", "s3b", "s3c", "s3d"],
        },
        {
          id: "sen-4",
          label: "Câu 4",
          lines: [
            { id: "s4a", text: "They" },
            { id: "s4b", text: "play" },
            { id: "s4c", text: "." },
          ],
          correctOrder: ["s4a", "s4b", "s4c"],
        },
        {
          id: "sen-5",
          label: "Câu 5",
          lines: [
            { id: "s5a", text: "I" },
            { id: "s5b", text: "study" },
            { id: "s5c", text: "every day" },
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
      title: "Nam's schedule.\nLịch của Nam.",
      instruction: "Read the passage and type the word in the blank on the same line.\nĐọc đoạn văn và điền từ vào ô trên cùng một dòng.",
      passage:
        "Nam talks about a school day. I study English. You work hard. We go to school. They play football. I study every day. We read in the morning.",
      prompts: [
        { id: "rf1", label: "I ___ English.", correctAnswers: ["study"] },
        { id: "rf2", label: "You ___ hard.", correctAnswers: ["work"] },
        { id: "rf3", label: "We ___ to school.", correctAnswers: ["go"] },
        { id: "rf4", label: "They ___ football.", correctAnswers: ["play"] },
        { id: "rf5", label: "I study ___ .", correctAnswers: ["every day"] },
        { id: "rf6", label: "We read in the ___ .", correctAnswers: ["morning"] },
      ],
    },
    {
      type: "dictation",
      title: "Listen and write.\nNghe và chép lại.",
      instruction: "Listen to one sentence, type it, then press Check. A hint appears after 3 wrong tries.\nNghe từng câu, gõ vào ô, rồi bấm Kiểm tra. Sai 3 lần thì hiện gợi ý.",
      items: [
        {
          id: "dic-1",
          text: "I study.",
          hint: "Tôi học.",
        },
        {
          id: "dic-2",
          text: "You work.",
          hint: "Bạn làm việc.",
        },
        {
          id: "dic-3",
          text: "We go.",
          hint: "Chúng tôi đi.",
        },
        {
          id: "dic-4",
          text: "They play.",
          hint: "Họ chơi.",
        },
        {
          id: "dic-5",
          text: "I study every day.",
          hint: "Tôi học mỗi ngày.",
        },
        {
          id: "dic-6",
          text: "We read in the morning.",
          hint: "Chúng tôi đọc vào buổi sáng.",
        },
      ],
    },
    {
      type: "self-writing",
      title: "Write S + V sentences.\nViết câu S + V.",
      instruction:
        "Write 4 simple S + V sentences about Nam's day: I ..., You ..., We ..., They ...\nViết 4 câu đơn giản S + V về lịch của Nam: I ..., You ..., We ..., They ...",
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
