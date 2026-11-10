import { getRulesForDay } from "@/data/curriculum/month-01/day-rules";
import { createPracticeMeta } from "@/data/practice/shared";
import type { PracticeLesson } from "@/types/practice";

export const practiceDay24: PracticeLesson = {
  meta: { ...createPracticeMeta(24, "Giới từ (Prep) nơi chốn"), totalScreens: 7 },
  hints: {
    rules: getRulesForDay(24, ""),
    vocabulary: [
      { en: "bag", vi: "cặp" },
      { en: "book", vi: "sách" },
      { en: "school", vi: "trường" },
      { en: "house", vi: "nhà" },
      { en: "pen", vi: "bút" },
    ]
  },
  screens: [
    {
      type: "match",
      title: "Match the words.\nNối từ.",
      instruction: "Match each word with a picture.\nNối từ với ảnh.",
      words: [
        { id: "w-bag", label: "bag" },
        { id: "w-book", label: "book" },
        { id: "w-school", label: "school" },
        { id: "w-house", label: "house" },
        { id: "w-pen", label: "pen" },
      ],
      pairs: [
        { id: "p-bag", imageUrl: "/images/practice/nouns-photo/bag.jpg", imageAlt: "cặp", label: "cặp", correctWordId: "w-bag" },
        { id: "p-book", imageUrl: "/images/practice/nouns-photo/book.jpg", imageAlt: "sách", label: "sách", correctWordId: "w-book" },
        { id: "p-school", imageUrl: "/images/practice/nouns-photo/school.jpg", imageAlt: "trường", label: "trường", correctWordId: "w-school" },
        { id: "p-house", imageUrl: "/images/practice/nouns-photo/house.jpg", imageAlt: "nhà", label: "nhà", correctWordId: "w-house" },
        { id: "p-pen", imageUrl: "/images/practice/nouns-photo/pen.jpg", imageAlt: "bút", label: "bút", correctWordId: "w-pen" },
      ],
    },
    {
      type: "sentence-drag",
      title: "Fill the sentence.\nĐiền vào câu.",
      instruction: "Drag a word into the blank.\nKéo từ vào chỗ trống.",
      wordBank: [
        { id: "s1", label: "on" },
        { id: "s2", label: "am" },
        { id: "s3", label: "in" },
        { id: "s4", label: "at" },
      ],
      sentences: [
        { id: "sd1", parts: [{ kind: "text", value: "The book is " }, { kind: "blank", id: "b1", correctWordId: "s1" }, { kind: "text", value: " the table." }] },
        { id: "sd2", parts: [{ kind: "text", value: "I " }, { kind: "blank", id: "b2", correctWordId: "s2" }, { kind: "text", value: " at home." }] },
        { id: "sd3", parts: [{ kind: "text", value: "The pen is " }, { kind: "blank", id: "b3", correctWordId: "s3" }, { kind: "text", value: " the bag." }] },
        { id: "sd4", parts: [{ kind: "text", value: "I am " }, { kind: "blank", id: "b4", correctWordId: "s4" }, { kind: "text", value: " school." }] },
      ],
    },
    {
      type: "dropdown",
      title: "Choose the word.\nChọn từ đúng.",
      instruction: "Choose the correct word.\nChọn từ đúng.",
      questions: [
        { id: "q1", parts: [{ kind: "text", value: "The pen is in the " }, { kind: "select", id: "q1a", correctOptionId: "q1-ok", options: [{ id: "q1-ok", label: "bag" }, { id: "q1-no", label: "book" }] }, { kind: "text", value: "." }] },
        { id: "q2", parts: [{ kind: "text", value: "The book is on the " }, { kind: "select", id: "q2a", correctOptionId: "q2-ok", options: [{ id: "q2-ok", label: "bag" }, { id: "q2-no", label: "book" }] }, { kind: "text", value: "." }] },
        { id: "q3", parts: [{ kind: "text", value: "I am at " }, { kind: "select", id: "q3a", correctOptionId: "q3-ok", options: [{ id: "q3-ok", label: "school" }, { id: "q3-no", label: "book" }] }, { kind: "text", value: "." }] },
        { id: "q4", parts: [{ kind: "text", value: "The pen is under the " }, { kind: "select", id: "q4a", correctOptionId: "q4-ok", options: [{ id: "q4-ok", label: "book" }, { id: "q4-no", label: "pen" }] }, { kind: "text", value: "." }] },
        { id: "q5", parts: [{ kind: "text", value: "The book is " }, { kind: "select", id: "q5a", correctOptionId: "q5-ok", options: [{ id: "q5-ok", label: "on" }, { id: "q5-no", label: "in" }, { id: "q5-no2", label: "at" }] }, { kind: "text", value: " the table." }] },
        { id: "q6", parts: [{ kind: "text", value: "The bag is " }, { kind: "select", id: "q6a", correctOptionId: "q6-ok", options: [{ id: "q6-ok", label: "under" }, { id: "q6-no", label: "on" }, { id: "q6-no2", label: "at" }] }, { kind: "text", value: " the chair." }] },
        { id: "q7", parts: [{ kind: "text", value: "I am " }, { kind: "select", id: "q7a", correctOptionId: "q7-ok", options: [{ id: "q7-ok", label: "at" }, { id: "q7-no", label: "in" }, { id: "q7-no2", label: "on" }] }, { kind: "text", value: " school." }] },
        { id: "q8", parts: [{ kind: "text", value: "She lives " }, { kind: "select", id: "q8a", correctOptionId: "q8-ok", options: [{ id: "q8-ok", label: "in" }, { id: "q8-no", label: "on" }, { id: "q8-no2", label: "at" }] }, { kind: "text", value: " Hanoi." }] },
        { id: "q9", parts: [{ kind: "text", value: "The cat is " }, { kind: "select", id: "q9a", correctOptionId: "q9-ok", options: [{ id: "q9-ok", label: "next to" }, { id: "q9-no", label: "at" }, { id: "q9-no2", label: "on" }] }, { kind: "text", value: " the door." }] },
        { id: "q10", parts: [{ kind: "text", value: "We sit " }, { kind: "select", id: "q10a", correctOptionId: "q10-ok", options: [{ id: "q10-ok", label: "in" }, { id: "q10-no", label: "at" }, { id: "q10-no2", label: "on" }] }, { kind: "text", value: " the classroom." }] },
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
        { id: "sen-1", label: "Câu 1", lines: [{ id: "s10", text: "The" }, { id: "s11", text: "book" }, { id: "s12", text: "is" }, { id: "s13", text: "on" }, { id: "s14", text: "the" }, { id: "s15", text: "table" }], correctOrder: ["s10", "s11", "s12", "s13", "s14", "s15"] },
        { id: "sen-2", label: "Câu 2", lines: [{ id: "s20", text: "I" }, { id: "s21", text: "am" }, { id: "s22", text: "at" }, { id: "s23", text: "home" }], correctOrder: ["s20", "s21", "s22", "s23"] },
        { id: "sen-3", label: "Câu 3", lines: [{ id: "s30", text: "The" }, { id: "s31", text: "pen" }, { id: "s32", text: "is" }, { id: "s33", text: "in" }, { id: "s34", text: "the" }, { id: "s35", text: "bag" }], correctOrder: ["s30", "s31", "s32", "s33", "s34", "s35"] },
        { id: "sen-4", label: "Câu 4", lines: [{ id: "s40", text: "I" }, { id: "s41", text: "am" }, { id: "s42", text: "at" }, { id: "s43", text: "school" }], correctOrder: ["s40", "s41", "s42", "s43"] },
        { id: "sen-5", label: "Câu 5", lines: [{ id: "s50", text: "The" }, { id: "s51", text: "pen" }, { id: "s52", text: "is" }, { id: "s53", text: "under" }, { id: "s54", text: "the" }, { id: "s55", text: "book" }], correctOrder: ["s50", "s51", "s52", "s53", "s54", "s55"] },
      ],
    },
    {
      type: "reading-fill",
      title: "Fill the line.\nĐiền vào dòng.",
      instruction: "Type the missing word.\nGõ từ còn thiếu.",
      passage: "The book is on the table. I am at home. The pen is in the bag. I am at school. The pen is under the book. There is a tree in front of my house.",
      prompts: [
        { id: "rf1", label: "The book is ___ the table.", correctAnswers: ["on"] },
        { id: "rf2", label: "I ___ at home.", correctAnswers: ["am"] },
        { id: "rf3", label: "The pen is ___ the bag.", correctAnswers: ["in"] },
        { id: "rf4", label: "I am ___ school.", correctAnswers: ["at"] },
      ],
    },
    {
      type: "dictation",
      title: "Translate into English.\nDịch sang tiếng Anh.",
      instruction: "Read the Vietnamese sentence and write it in English.\nĐọc câu tiếng Việt rồi viết câu tiếng Anh.",
      items: [
        { id: "dic-1", text: "The book is on the table.", hint: "Quyển sách ở trên bàn." },
        { id: "dic-2", text: "I am at home.", hint: "Tôi đang ở nhà." },
        { id: "dic-3", text: "The pen is in the bag.", hint: "Bút ở trong cặp." },
        { id: "dic-4", text: "I am at school.", hint: "Tôi ở trường." },
        { id: "dic-5", text: "The pen is under the book.", hint: "Bút ở dưới sách." },
        { id: "dic-6", text: "There is a tree in front of my house.", hint: "Có một cái cây phía trước nhà tôi." },
      ],
    },
    {
      type: "self-writing",
      title: "Where things are at home.\nĐồ ở đâu trong nhà.",
      instruction: "Write 4 sentences with in, on, at, under about your room, bag, or family. Use: bag, book, school, house, pen.\nViết 4 câu có in, on, at, under về phòng, cặp hoặc gia đình.",
      promptHints: [
        "My book is on the table.",
        "I am at home.",
        "The pen is in my bag.",
        "I am at school."
      ],
      sampleTitle: "Bài gợi ý",
      sample: "My book is on the table.\nI am at home with my family.\nThe pen is in my bag.\nMy father is at work.",
    },
  ],
};
