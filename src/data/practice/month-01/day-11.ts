import { getRulesForDay } from "@/data/curriculum/month-01/day-rules";
import { createPracticeMeta } from "@/data/practice/shared";
import type { PracticeLesson } from "@/types/practice";

export const practiceDay11: PracticeLesson = {
  meta: { ...createPracticeMeta(11, "Mạo từ the"), totalScreens: 8 },
  hints: {
    rules: getRulesForDay(11, ""),
    vocabulary: [
      { en: "the", vi: "cái đã biết" },
      { en: "dog", vi: "con chó" },
      { en: "water", vi: "nước" },
      { en: "door", vi: "cánh cửa" },
      { en: "window", vi: "cửa sổ" },
    ],
  },
  screens: [
    {
      type: "match",
      title: "Match the words.\nNối từ.",
      instruction: "Match each word with a picture.\nNối từ với ảnh.",
      words: [
        { id: "w-book", label: "book" },
        { id: "w-cat", label: "cat" },
        { id: "w-water", label: "water" },
        { id: "w-bag", label: "bag" },
        { id: "w-house", label: "house" },
      ],
      pairs: [
        { id: "p-book", imageUrl: "/images/practice/nouns-photo/book.jpg", imageAlt: "sách", label: "sách", correctWordId: "w-book" },
        { id: "p-cat", imageUrl: "/images/practice/tobe/cat.jpg", imageAlt: "mèo", label: "mèo", correctWordId: "w-cat" },
        { id: "p-water", imageUrl: "/images/practice/objects/water.jpg", imageAlt: "nước", label: "nước", correctWordId: "w-water" },
        { id: "p-bag", imageUrl: "/images/practice/nouns-photo/bag.jpg", imageAlt: "cặp", label: "cặp", correctWordId: "w-bag" },
        { id: "p-house", imageUrl: "/images/practice/nouns-photo/house.jpg", imageAlt: "nhà", label: "nhà", correctWordId: "w-house" },
      ],
    },
    {
      type: "categorize",
      title: "the or no article?\nthe hay không mạo từ?",
      instruction: "Drag each phrase into the right group.\nKéo cụm từ vào đúng nhóm.",
      categories: [
        { id: "cat-the", label: "Dùng the" },
        { id: "cat-zero", label: "Không mạo từ" },
      ],
      items: [
        { id: "c-1", label: "The book is blue.", correctCategoryId: "cat-the" },
        { id: "c-2", label: "The dog is small.", correctCategoryId: "cat-the" },
        { id: "c-3", label: "Open the window.", correctCategoryId: "cat-the" },
        { id: "c-4", label: "I like dogs.", correctCategoryId: "cat-zero" },
        { id: "c-5", label: "Water is important.", correctCategoryId: "cat-zero" },
        { id: "c-6", label: "English is useful.", correctCategoryId: "cat-zero" },
      ],
    },
    {
      type: "dropdown",
      title: "a, an, the, or nothing?\na, an, the hay không?",
      instruction: "Choose a, an, the, or — if no article is needed.\nChọn a, an, the, hoặc — nếu không cần mạo từ.",
      questions: [
        { id: "q1", parts: [{ kind: "text", value: "I have " }, { kind: "select", id: "q1a", correctOptionId: "q1-ok", options: [{ id: "q1-ok", label: "a" }, { id: "q1-no", label: "the" }, { id: "q1-no2", label: "—" }] }, { kind: "text", value: " cat." }] },
        { id: "q2", parts: [{ kind: "text", value: "The cat is black. She is " }, { kind: "select", id: "q2a", correctOptionId: "q2-ok", options: [{ id: "q2-ok", label: "an" }, { id: "q2-no", label: "a" }, { id: "q2-no2", label: "—" }] }, { kind: "text", value: " English teacher." }] },
        { id: "q3", parts: [{ kind: "select", id: "q3a", correctOptionId: "q3-ok", options: [{ id: "q3-ok", label: "—" }, { id: "q3-no", label: "The" }, { id: "q3-no2", label: "A" }] }, { kind: "text", value: " water is important." }] },
        { id: "q4", parts: [{ kind: "text", value: "Please open " }, { kind: "select", id: "q4a", correctOptionId: "q4-ok", options: [{ id: "q4-ok", label: "the" }, { id: "q4-no", label: "a" }, { id: "q4-no2", label: "—" }] }, { kind: "text", value: " window." }] },
        { id: "q5", parts: [{ kind: "text", value: "I like " }, { kind: "select", id: "q5a", correctOptionId: "q5-ok", options: [{ id: "q5-ok", label: "—" }, { id: "q5-no", label: "the" }, { id: "q5-no2", label: "a" }] }, { kind: "text", value: " dogs." }] },
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
      instruction: "Type a, an, the, or - if no article is needed.\nGõ a, an, the, hoặc - nếu không cần mạo từ.",
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
      title: "Two sentences, then a like.\nHai câu, rồi một sở thích.",
      instruction: "Write 5 sentences. Use a, an, the, and one sentence with no article.\nViết 5 câu. Có a, an, the, và một câu không mạo từ.",
      promptHints: ["I have a bag.", "The bag is black.", "I like books.", "English is interesting."],
      sampleTitle: "Bài gợi ý",
      sample: "I have a bag.\nThe bag is black.\nThis is an apple.\nI like books.\nEnglish is interesting.",
    },
  ],
};
