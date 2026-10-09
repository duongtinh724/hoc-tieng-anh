import { getRulesForDay } from "@/data/curriculum/month-01/day-rules";
import { createPracticeMeta } from "@/data/practice/shared";
import type { PracticeLesson } from "@/types/practice";

export const practiceDay02: PracticeLesson = {
  meta: { ...createPracticeMeta(2, "Danh từ cơ bản"), totalScreens: 8 },
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
      title: "Match the nouns.\nNối danh từ.",
      instruction: "Match each noun with a picture. Tap the picture to see the Vietnamese meaning.\nNối danh từ với ảnh. Bấm ảnh để xem nghĩa tiếng Việt.",
      words: [
        { id: "w-book", label: "book" },
        { id: "w-student", label: "student" },
        { id: "w-teacher", label: "teacher" },
        { id: "w-school", label: "school" },
        { id: "w-house", label: "house" },
        { id: "w-pen", label: "pen" },
        { id: "w-bag", label: "bag" },
      ],
      pairs: [
        {
          id: "p-book",
          imageUrl: "/images/practice/nouns-photo/book.jpg",
          imageAlt: "sách",
          label: "sách",
          correctWordId: "w-book",
        },
        {
          id: "p-student",
          imageUrl: "/images/practice/nouns-photo/student.jpg",
          imageAlt: "học sinh",
          label: "học sinh",
          correctWordId: "w-student",
        },
        {
          id: "p-teacher",
          imageUrl: "/images/practice/nouns-photo/teacher.jpg",
          imageAlt: "giáo viên",
          label: "giáo viên",
          correctWordId: "w-teacher",
        },
        {
          id: "p-school",
          imageUrl: "/images/practice/nouns-photo/school.jpg",
          imageAlt: "trường học",
          label: "trường học",
          correctWordId: "w-school",
        },
        {
          id: "p-house",
          imageUrl: "/images/practice/nouns-photo/house.jpg",
          imageAlt: "nhà",
          label: "nhà",
          correctWordId: "w-house",
        },
        {
          id: "p-pen",
          imageUrl: "/images/practice/nouns-photo/pen.jpg",
          imageAlt: "bút",
          label: "bút",
          correctWordId: "w-pen",
        },
        {
          id: "p-bag",
          imageUrl: "/images/practice/nouns-photo/bag.jpg",
          imageAlt: "cặp",
          label: "cặp",
          correctWordId: "w-bag",
        },
      ],
    },
    {
      type: "categorize",
      title: "People or things and places?\nNgười hay đồ vật / nơi?",
      instruction: "Drag each noun into the right group.\nKéo danh từ vào đúng nhóm.",
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
      title: "Fill in the noun.\nĐiền danh từ.",
      instruction: "Drag the noun into the blank.\nKéo danh từ vào chỗ trống trong câu.",
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
      title: "Choose the correct noun.\nChọn danh từ đúng.",
      instruction: "Choose the correct word. One item reviews pronouns from Day 1.\nĐọc gợi ý và chọn từ đúng. Có một câu ôn đại từ (ngày 1).",
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
        {
          id: "q-review-1",
          parts: [
            { kind: "text", value: "Ôn: ___ go to school. (bạn)" },
            {
              kind: "select",
              id: "q-review-1a",
              options: [
                { id: "qr1-you", label: "You" },
                { id: "qr1-book", label: "book" },
                { id: "qr1-it", label: "It" },
              ],
              correctOptionId: "qr1-you",
            },
          ],
        },
      ],
    },
    {
      type: "reorder",
      layout: "horizontal",
      title: "Put the words in order.\nSắp xếp câu.",
      instruction: "Drag the words into a line to make a sentence with a noun.\nKéo các từ theo hàng ngang thành câu có danh từ.",
      sentences: [
        {
          id: "sen-1",
          label: "Câu 1",
          lines: [
            { id: "s1a", text: "We" },
            { id: "s1b", text: "go" },
            { id: "s1c", text: "to school" },
            { id: "s1d", text: "." },
          ],
          correctOrder: ["s1a", "s1b", "s1c", "s1d"],
        },
        {
          id: "sen-2",
          label: "Câu 2",
          lines: [
            { id: "s2a", text: "My" },
            { id: "s2b", text: "pen" },
            { id: "s2c", text: "." },
          ],
          correctOrder: ["s2a", "s2b", "s2c"],
        },
        {
          id: "sen-3",
          label: "Câu 3",
          lines: [
            { id: "s3a", text: "My" },
            { id: "s3b", text: "book" },
            { id: "s3c", text: "." },
          ],
          correctOrder: ["s3a", "s3b", "s3c"],
        },
        {
          id: "sen-4",
          label: "Câu 4",
          lines: [
            { id: "s4a", text: "Nam" },
            { id: "s4b", text: "," },
            { id: "s4c", text: "student" },
            { id: "s4d", text: "." },
          ],
          correctOrder: ["s4a", "s4b", "s4c", "s4d"],
        },
        {
          id: "sen-5",
          label: "Câu 5",
          lines: [
            { id: "s5a", text: "My" },
            { id: "s5b", text: "bag" },
            { id: "s5c", text: "." },
          ],
          correctOrder: ["s5a", "s5b", "s5c"],
        },
      ],
      lines: [],
      correctOrder: [],
    },
    {
      type: "reading-fill",
      title: "At school.\nỞ trường.",
      instruction: "Read the passage and type the noun in the blank on the same line.\nĐọc đoạn văn và điền danh từ vào ô trên cùng một dòng.",
      passage:
        "Nam and Lan are in class 9A. We go to school. My pen and my bag. My book is on the desk. Nam, student. The teacher is in the classroom.",
      prompts: [
        { id: "rf1", label: "We go to ___ .", correctAnswers: ["school"] },
        { id: "rf2", label: "My ___ and my bag.", correctAnswers: ["pen"] },
        { id: "rf3", label: "My pen and my ___ .", correctAnswers: ["bag"] },
        { id: "rf4", label: "My ___ is on the desk.", correctAnswers: ["book"] },
        { id: "rf5", label: "Nam, ___ .", correctAnswers: ["student"] },
        { id: "rf6", label: "The ___ is in the classroom.", correctAnswers: ["teacher"] },
      ],
    },
    {
      type: "dictation",
      title: "Listen and write.\nNghe và chép lại.",
      instruction: "Listen to one sentence, type it, then press Check. A hint appears after 3 wrong tries.\nNghe từng câu, gõ vào ô, rồi bấm Kiểm tra. Sai 3 lần thì hiện gợi ý.",
      items: [
        {
          id: "dic-1",
          text: "book",
          hint: "sách",
        },
        {
          id: "dic-2",
          text: "student",
          hint: "học sinh",
        },
        {
          id: "dic-3",
          text: "teacher",
          hint: "giáo viên",
        },
        {
          id: "dic-4",
          text: "house",
          hint: "nhà",
        },
        {
          id: "dic-5",
          text: "school",
          hint: "trường học",
        },
        {
          id: "dic-6",
          text: "pen and bag",
          hint: "bút và cặp",
        },
      ],
    },
    {
      type: "self-writing",
      title: "Write sentences with nouns.\nViết câu với danh từ.",
      instruction:
        "Write 3 English sentences with today's nouns: school, pen, book, bag, house, student, teacher.\nViết 3 câu tiếng Anh có danh từ hôm nay: school, pen, book, bag, house, student, teacher.",
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
