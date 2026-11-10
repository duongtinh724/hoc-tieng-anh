import { getRulesForDay } from "@/data/curriculum/month-01/day-rules";
import { createPracticeMeta } from "@/data/practice/shared";
import type { PracticeLesson } from "@/types/practice";

export const practiceDay11: PracticeLesson = {
  meta: { ...createPracticeMeta(11, "Mạo từ (Art) the"), totalScreens: 7 },
  hints: {
    rules: getRulesForDay(11, ""),
    vocabulary: [
      { en: "the", vi: "cái / người đã biết" },
      { en: "dog", vi: "con chó" },
      { en: "water", vi: "nước" },
      { en: "door", vi: "cánh cửa" },
      { en: "window", vi: "cửa sổ" },
      { en: "table", vi: "cái bàn" },
      { en: "cat", vi: "con mèo" },
      { en: "useful", vi: "hữu ích" },
    ]
  },
  screens: [
    {
      type: "match",
      title: "Match the words.\nNối từ.",
      instruction: "Match each word with a picture.\nNối từ với ảnh.",
      words: [
        { id: "w-the", label: "the" },
        { id: "w-dog", label: "dog" },
        { id: "w-water", label: "water" },
        { id: "w-door", label: "door" },
        { id: "w-window", label: "window" },
        { id: "w-table", label: "table" },
        { id: "w-cat", label: "cat" },
        { id: "w-useful", label: "useful" },
      ],
      pairs: [
        { id: "p-the", imageUrl: "/images/practice/nouns-photo/book.jpg", imageAlt: "cái / người đã biết", label: "cái / người đã biết", correctWordId: "w-the" },
        { id: "p-dog", imageUrl: "/images/practice/nouns-photo/book.jpg", imageAlt: "con chó", label: "con chó", correctWordId: "w-dog" },
        { id: "p-water", imageUrl: "/images/practice/nouns-photo/book.jpg", imageAlt: "nước", label: "nước", correctWordId: "w-water" },
        { id: "p-door", imageUrl: "/images/practice/nouns-photo/book.jpg", imageAlt: "cánh cửa", label: "cánh cửa", correctWordId: "w-door" },
        { id: "p-window", imageUrl: "/images/practice/nouns-photo/book.jpg", imageAlt: "cửa sổ", label: "cửa sổ", correctWordId: "w-window" },
        { id: "p-table", imageUrl: "/images/practice/nouns-photo/book.jpg", imageAlt: "cái bàn", label: "cái bàn", correctWordId: "w-table" },
        { id: "p-cat", imageUrl: "/images/practice/tobe/cat.jpg", imageAlt: "con mèo", label: "con mèo", correctWordId: "w-cat" },
        { id: "p-useful", imageUrl: "/images/practice/nouns-photo/book.jpg", imageAlt: "hữu ích", label: "hữu ích", correctWordId: "w-useful" },
      ],
    },
    {
      type: "dropdown",
      title: "a, an, the, or nothing?\na, an, the hay không?",
      instruction: "Choose a, an, the, or — if no article is needed.\nChọn a, an, the, hoặc — nếu không cần mạo từ (Art).",
      questions: [
        { id: "q1", parts: [{ kind: "text", value: "I have " }, { kind: "select", id: "q1a", correctOptionId: "q1-ok", options: [{ id: "q1-ok", label: "a" }, { id: "q1-no", label: "the" }, { id: "q1-no2", label: "—" }] }, { kind: "text", value: " cat." }] },
        { id: "q2", parts: [{ kind: "text", value: "The cat is black. She is " }, { kind: "select", id: "q2a", correctOptionId: "q2-ok", options: [{ id: "q2-ok", label: "an" }, { id: "q2-no", label: "a" }, { id: "q2-no2", label: "—" }] }, { kind: "text", value: " English teacher." }] },
        { id: "q3", parts: [{ kind: "select", id: "q3a", correctOptionId: "q3-ok", options: [{ id: "q3-ok", label: "—" }, { id: "q3-no", label: "The" }, { id: "q3-no2", label: "A" }] }, { kind: "text", value: " water is important." }] },
        { id: "q4", parts: [{ kind: "text", value: "Please open " }, { kind: "select", id: "q4a", correctOptionId: "q4-ok", options: [{ id: "q4-ok", label: "the" }, { id: "q4-no", label: "a" }, { id: "q4-no2", label: "—" }] }, { kind: "text", value: " window." }] },
        { id: "q5", parts: [{ kind: "text", value: "I like " }, { kind: "select", id: "q5a", correctOptionId: "q5-ok", options: [{ id: "q5-ok", label: "—" }, { id: "q5-no", label: "the" }, { id: "q5-no2", label: "a" }] }, { kind: "text", value: " dogs." }] },
        { id: "q6", parts: [{ kind: "text", value: "I have " }, { kind: "select", id: "q6a", correctOptionId: "q6-ok", options: [{ id: "q6-ok", label: "an" }, { id: "q6-no", label: "a" }, { id: "q6-no2", label: "—" }] }, { kind: "text", value: " apple." }] },
        { id: "q7", parts: [{ kind: "text", value: "Please close " }, { kind: "select", id: "q7a", correctOptionId: "q7-ok", options: [{ id: "q7-ok", label: "the" }, { id: "q7-no", label: "a" }, { id: "q7-no2", label: "—" }] }, { kind: "text", value: " door." }] },
        { id: "q8", parts: [{ kind: "text", value: "I like " }, { kind: "select", id: "q8a", correctOptionId: "q8-ok", options: [{ id: "q8-ok", label: "—" }, { id: "q8-no", label: "a" }, { id: "q8-no2", label: "the" }] }, { kind: "text", value: " music." }] },
        { id: "q9", parts: [{ kind: "text", value: "This is " }, { kind: "select", id: "q9a", correctOptionId: "q9-ok", options: [{ id: "q9-ok", label: "a" }, { id: "q9-no", label: "an" }, { id: "q9-no2", label: "the" }] }, { kind: "text", value: " book." }] },
        { id: "q10", parts: [{ kind: "select", id: "q10a", correctOptionId: "q10-ok", options: [{ id: "q10-ok", label: "The" }, { id: "q10-no", label: "A" }, { id: "q10-no2", label: "—" }] }, { kind: "text", value: " sun is hot." }] },
      ],
    },
    {
      type: "sentence-drag",
      title: "Second mention.\nLần nhắc thứ hai.",
      instruction: "The first time uses a. The next time uses the.\nLần đầu dùng a. Lần sau dùng the.",
      wordBank: [
        { id: "s1", label: "a" },
        { id: "s2", label: "The" },
        { id: "s3", label: "a" },
        { id: "s4", label: "The" },
      ],
      sentences: [
        { id: "sd1", parts: [{ kind: "text", value: "I have " }, { kind: "blank", id: "b1", correctWordId: "s1", width: "sm" }, { kind: "text", value: " book." }] },
        { id: "sd2", parts: [{ kind: "blank", id: "b2", correctWordId: "s2", width: "sm" }, { kind: "text", value: " book is blue." }] },
        { id: "sd3", parts: [{ kind: "text", value: "I have " }, { kind: "blank", id: "b3", correctWordId: "s3", width: "sm" }, { kind: "text", value: " dog." }] },
        { id: "sd4", parts: [{ kind: "blank", id: "b4", correctWordId: "s4", width: "sm" }, { kind: "text", value: " dog is small." }] },
      ],
    },
    {
      type: "reorder",
      layout: "horizontal",
      title: "Order the sentence.\nSắp xếp câu.",
      instruction: "Drag the words into a line.\nKéo các từ thành câu đúng.",
      lines: [],
      correctOrder: [],
      sentences: [
        { id: "sen-1", label: "Câu 1", lines: [{ id: "s10", text: "I" }, { id: "s11", text: "have" }, { id: "s12", text: "a" }, { id: "s13", text: "book" }], correctOrder: ["s10", "s11", "s12", "s13"] },
        { id: "sen-2", label: "Câu 2", lines: [{ id: "s20", text: "The" }, { id: "s21", text: "book" }, { id: "s22", text: "is" }, { id: "s23", text: "blue" }], correctOrder: ["s20", "s21", "s22", "s23"] },
        { id: "sen-3", label: "Câu 3", lines: [{ id: "s30", text: "I" }, { id: "s31", text: "like" }, { id: "s32", text: "dogs" }], correctOrder: ["s30", "s31", "s32"] },
        { id: "sen-4", label: "Câu 4", lines: [{ id: "s40", text: "Water" }, { id: "s41", text: "is" }, { id: "s42", text: "important" }], correctOrder: ["s40", "s41", "s42"] },
        { id: "sen-5", label: "Câu 5", lines: [{ id: "s50", text: "English" }, { id: "s51", text: "is" }, { id: "s52", text: "useful" }], correctOrder: ["s50", "s51", "s52"] },
      ],
    },
    {
      type: "reading-fill",
      title: "Fill the line.\nĐiền vào dòng.",
      instruction: "Type a, an, the, or - if no article is needed.\nGõ a, an, the, hoặc - nếu không cần mạo từ (Art).",
      passage: "I have a cat. The cat is black. Water is important. I like dogs. English is useful.",
      prompts: [
        { id: "rf1", label: "I have ___ cat.", correctAnswers: ["a"] },
        { id: "rf2", label: "___ cat is black.", correctAnswers: ["The", "the"] },
        { id: "rf3", label: "I like ___ dogs. (nói chung, gõ -)", correctAnswers: ["-", "—"] },
        { id: "rf4", label: "Please open ___ window.", correctAnswers: ["the"] },
      ],
    },
    {
      type: "dictation",
      title: "Translate into English.\nDịch sang tiếng Anh.",
      instruction: "Read the Vietnamese sentence and write it in English.\nĐọc câu tiếng Việt rồi viết câu tiếng Anh.",
      items: [
        { id: "dic-1", text: "I have a book.", hint: "Tôi có một quyển sách." },
        { id: "dic-2", text: "The book is blue.", hint: "Quyển sách màu xanh." },
        { id: "dic-3", text: "I like dogs.", hint: "Tôi thích chó." },
        { id: "dic-4", text: "Water is important.", hint: "Nước rất quan trọng." },
        { id: "dic-5", text: "English is useful.", hint: "Tiếng Anh hữu ích." },
      ],
    },
    {
      type: "self-writing",
      title: "Write about your school things.\nViết về đồ học.",
      instruction: "Write 4 sentences with a, an, or the about your bag, books, and school.\nViết 4 câu có a, an, the về cặp, sách và trường.",
      promptHints: [
        "I have a bag.",
        "The bag is black.",
        "I like English.",
        "The school is big."
      ],
      sampleTitle: "Bài gợi ý",
      sample: "I have a bag.\nThe bag is black.\nI study at the school.\nEnglish is interesting.",
    },
  ],
};
