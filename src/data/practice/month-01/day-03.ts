import { getRulesForDay } from "@/data/curriculum/month-01/day-rules";
import { createPracticeMeta } from "@/data/practice/shared";
import type { PracticeLesson } from "@/types/practice";

export const practiceDay03: PracticeLesson = {
  meta: { ...createPracticeMeta(3, "Động từ cơ bản"), totalScreens: 8 },
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
      title: "Match the verbs.\nNối động từ.",
      instruction:
        "Match each verb with a picture. Choose a word, then tap the box under the picture.\nNối động từ tiếng Anh với hình ảnh thật. Chọn từ bên trên, bấm vào ô trống dưới hình.",
      words: [
        { id: "w-eat", label: "eat" },
        { id: "w-go", label: "go" },
        { id: "w-study", label: "study" },
        { id: "w-like", label: "like" },
        { id: "w-work", label: "work" },
        { id: "w-play", label: "play" },
        { id: "w-read", label: "read" },
      ],
      pairs: [
        {
          id: "p-eat",
          imageUrl: "/images/practice/verbs/eat.jpg",
          imageAlt: "ăn",
          label: "ăn",
          correctWordId: "w-eat",
        },
        {
          id: "p-go",
          imageUrl: "/images/practice/verbs/go.jpg",
          imageAlt: "đi",
          label: "đi",
          correctWordId: "w-go",
        },
        {
          id: "p-study",
          imageUrl: "/images/practice/verbs/study.jpg",
          imageAlt: "học",
          label: "học",
          correctWordId: "w-study",
        },
        {
          id: "p-like",
          imageUrl: "/images/practice/verbs/like.jpg",
          imageAlt: "thích",
          label: "thích",
          correctWordId: "w-like",
        },
        {
          id: "p-work",
          imageUrl: "/images/practice/verbs/work.jpg",
          imageAlt: "làm việc",
          label: "làm việc",
          correctWordId: "w-work",
        },
        {
          id: "p-play",
          imageUrl: "/images/practice/verbs/play.jpg",
          imageAlt: "chơi",
          label: "chơi",
          correctWordId: "w-play",
        },
        {
          id: "p-read",
          imageUrl: "/images/practice/verbs/read.jpg",
          imageAlt: "đọc",
          label: "đọc",
          correctWordId: "w-read",
        },
      ],
    },
    {
      type: "categorize",
      title: "Sort the verbs.\nPhân loại động từ.",
      instruction: "Drag each verb into the right group.\nKéo động từ vào nhóm phù hợp.",
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
      title: "Fill in the verb.\nĐiền động từ.",
      instruction: "Drag the verb into the blank. Use only I / You / We / They.\nKéo động từ vào chỗ trống. Chỉ dùng I / You / We / They.",
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
      title: "Choose the correct verb.\nChọn động từ đúng.",
      instruction: "Choose the correct word. The last two items review nouns (Day 2) and pronouns (Day 1).\nChọn từ đúng. Hai câu cuối là ôn danh từ (ngày 2) và đại từ (ngày 1).",
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
        {
          id: "q-review-2",
          parts: [
            { kind: "text", value: "Ôn: I read a ___ . (sách)" },
            {
              kind: "select",
              id: "q-review-2a",
              options: [
                { id: "qr2-book", label: "book" },
                { id: "qr2-eat", label: "eat" },
                { id: "qr2-school", label: "school" },
              ],
              correctOptionId: "qr2-book",
            },
          ],
        },
        {
          id: "q-review-1",
          parts: [
            { kind: "text", value: "Ôn: ___ study English. (chúng tôi)" },
            {
              kind: "select",
              id: "q-review-1a",
              options: [
                { id: "qr1-we", label: "We" },
                { id: "qr1-book", label: "book" },
                { id: "qr1-she", label: "She" },
              ],
              correctOptionId: "qr1-we",
            },
          ],
        },
      ],
    },
    {
      type: "reorder",
      layout: "horizontal",
      title: "Put the words in order.\nSắp xếp câu.",
      instruction:
        "Drag the words into a line. Each sentence is Subject + Verb (+ Object).\nKéo các từ theo chiều ngang để thành câu đúng. Mỗi câu: Chủ ngữ + Động từ (+ tân ngữ).",
      sentences: [
        {
          id: "sen-1",
          label: "Câu 1",
          lines: [
            { id: "s1-w1", text: "I" },
            { id: "s1-w2", text: "study" },
            { id: "s1-w3", text: "English" },
            { id: "s1-w4", text: "." },
          ],
          correctOrder: ["s1-w1", "s1-w2", "s1-w3", "s1-w4"],
        },
        {
          id: "sen-2",
          label: "Câu 2",
          lines: [
            { id: "s2-w1", text: "You" },
            { id: "s2-w2", text: "go" },
            { id: "s2-w3", text: "to school" },
            { id: "s2-w4", text: "." },
          ],
          correctOrder: ["s2-w1", "s2-w2", "s2-w3", "s2-w4"],
        },
        {
          id: "sen-3",
          label: "Câu 3",
          lines: [
            { id: "s3-w1", text: "We" },
            { id: "s3-w2", text: "eat" },
            { id: "s3-w3", text: "breakfast" },
            { id: "s3-w4", text: "." },
          ],
          correctOrder: ["s3-w1", "s3-w2", "s3-w3", "s3-w4"],
        },
        {
          id: "sen-4",
          label: "Câu 4",
          lines: [
            { id: "s4-w1", text: "They" },
            { id: "s4-w2", text: "like" },
            { id: "s4-w3", text: "music" },
            { id: "s4-w4", text: "." },
          ],
          correctOrder: ["s4-w1", "s4-w2", "s4-w3", "s4-w4"],
        },
        {
          id: "sen-5",
          label: "Câu 5",
          lines: [
            { id: "s5-w1", text: "I" },
            { id: "s5-w2", text: "read" },
            { id: "s5-w3", text: "books" },
            { id: "s5-w4", text: "." },
          ],
          correctOrder: ["s5-w1", "s5-w2", "s5-w3", "s5-w4"],
        },
      ],
      lines: [],
      correctOrder: [],
    },
    {
      type: "reading-fill",
      title: "Nam's day.\nMột ngày của Nam.",
      instruction: "Read the passage and fill in the verb (eat, go, study, like, read, play, work).\nĐọc đoạn văn và điền động từ đúng (eat, go, study, like, read, play, work).",
      passage:
        "Nam writes about a school day in class 9A. I eat breakfast at 6:30. You go to school at 7. We study English in the first lesson. They like music at break time. I read books in the library. We play football after school.",
      prompts: [
        {
          id: "rf1",
          label: "I ___ breakfast.",
          correctAnswers: ["eat"],
        },
        {
          id: "rf2",
          label: "You ___ to school.",
          correctAnswers: ["go"],
        },
        {
          id: "rf3",
          label: "We ___ English.",
          correctAnswers: ["study"],
        },
        {
          id: "rf4",
          label: "They ___ music.",
          correctAnswers: ["like"],
        },
        {
          id: "rf5",
          label: "I ___ books.",
          correctAnswers: ["read"],
        },
        {
          id: "rf6",
          label: "We ___ football.",
          correctAnswers: ["play"],
        },
      ],
    },
    {
      type: "dictation",
      title: "Listen and write.\nNghe và chép lại.",
      instruction: "Listen to one sentence, type it, then press Check. A hint appears after 3 wrong tries.\nNghe từng câu, gõ vào ô, rồi bấm Kiểm tra. Sai 3 lần thì hiện gợi ý.",
      items: [
        {
          id: "dic-1",
          text: "I eat breakfast.",
          hint: "Tôi ăn sáng.",
        },
        {
          id: "dic-2",
          text: "You go to school.",
          hint: "Bạn đi học.",
        },
        {
          id: "dic-3",
          text: "We study English.",
          hint: "Chúng tôi học tiếng Anh.",
        },
        {
          id: "dic-4",
          text: "They like music.",
          hint: "Họ thích âm nhạc.",
        },
        {
          id: "dic-5",
          text: "I read books.",
          hint: "Tôi đọc sách.",
        },
        {
          id: "dic-6",
          text: "We play football.",
          hint: "Chúng tôi chơi bóng đá.",
        },
      ],
    },
    {
      type: "self-writing",
      title: "Write I + verb sentences.\nViết câu I + động từ.",
      instruction:
        "Write 4 sentences about yourself with I + a verb: eat, go, study, like, read, play, work.\nViết 4 câu về bản thân với I + động từ: eat, go, study, like, read, play, work.",
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
