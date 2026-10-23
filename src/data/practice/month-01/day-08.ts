import { getRulesForDay } from "@/data/curriculum/month-01/day-rules";
import { createPracticeMeta } from "@/data/practice/shared";
import type { PracticeLesson } from "@/types/practice";

export const practiceDay08: PracticeLesson = {
  meta: { ...createPracticeMeta(8, "Danh từ: người, vật, nơi"), totalScreens: 8 },
  hints: {
    rules: getRulesForDay(8, ""),
    vocabulary: [
      { en: "teacher", vi: "giáo viên" },
      { en: "student", vi: "học sinh" },
      { en: "doctor", vi: "bác sĩ" },
      { en: "book", vi: "quyển sách" },
      { en: "phone", vi: "điện thoại" },
      { en: "school", vi: "trường học" },
      { en: "hospital", vi: "bệnh viện" },
      { en: "park", vi: "công viên" },
    ],
  },
  screens: [
    {
      type: "match",
      title: "Match the nouns.\nNối danh từ.",
      instruction: "Match each noun with a picture.\nNối danh từ với ảnh.",
      words: [
        { id: "w-teacher", label: "teacher" },
        { id: "w-student", label: "student" },
        { id: "w-book", label: "book" },
        { id: "w-school", label: "school" },
        { id: "w-house", label: "house" },
      ],
      pairs: [
        { id: "p-teacher", imageUrl: "/images/practice/nouns-photo/teacher.jpg", imageAlt: "giáo viên", label: "giáo viên", correctWordId: "w-teacher" },
        { id: "p-student", imageUrl: "/images/practice/nouns-photo/student.jpg", imageAlt: "học sinh", label: "học sinh", correctWordId: "w-student" },
        { id: "p-book", imageUrl: "/images/practice/nouns-photo/book.jpg", imageAlt: "sách", label: "sách", correctWordId: "w-book" },
        { id: "p-school", imageUrl: "/images/practice/nouns-photo/school.jpg", imageAlt: "trường", label: "trường", correctWordId: "w-school" },
        { id: "p-house", imageUrl: "/images/practice/nouns-photo/house.jpg", imageAlt: "nhà", label: "nhà", correctWordId: "w-house" },
      ],
    },
    {
      type: "categorize",
      title: "People, things, or places?\nNgười, vật hay nơi?",
      instruction: "Drag each noun into the right group.\nKéo danh từ vào đúng nhóm.",
      categories: [
        { id: "cat-people", label: "Người" },
        { id: "cat-thing", label: "Vật" },
        { id: "cat-place", label: "Địa điểm" },
      ],
      items: [
        { id: "c-teacher", label: "teacher", correctCategoryId: "cat-people" },
        { id: "c-doctor", label: "doctor", correctCategoryId: "cat-people" },
        { id: "c-student", label: "student", correctCategoryId: "cat-people" },
        { id: "c-phone", label: "phone", correctCategoryId: "cat-thing" },
        { id: "c-table", label: "table", correctCategoryId: "cat-thing" },
        { id: "c-car", label: "car", correctCategoryId: "cat-thing" },
        { id: "c-park", label: "park", correctCategoryId: "cat-place" },
        { id: "c-school", label: "school", correctCategoryId: "cat-place" },
        { id: "c-hospital", label: "hospital", correctCategoryId: "cat-place" },
      ],
    },
    {
      type: "sentence-drag",
      title: "Fill the noun.\nĐiền danh từ.",
      instruction: "Drag the noun into the blank.\nKéo danh từ vào chỗ trống.",
      wordBank: [
        { id: "s1", label: "book" },
        { id: "s2", label: "doctor" },
        { id: "s3", label: "student" },
        { id: "s4", label: "park" },
        { id: "s5", label: "school" },
      ],
      sentences: [
        { id: "sd1", parts: [{ kind: "text", value: "I read a " }, { kind: "blank", id: "b1", correctWordId: "s1" }, { kind: "text", value: "." }] },
        { id: "sd2", parts: [{ kind: "text", value: "He is a " }, { kind: "blank", id: "b2", correctWordId: "s2" }, { kind: "text", value: ". He works in a hospital." }] },
        { id: "sd3", parts: [{ kind: "text", value: "My sister is a " }, { kind: "blank", id: "b3", correctWordId: "s3" }, { kind: "text", value: "." }] },
        { id: "sd4", parts: [{ kind: "text", value: "The children are at the " }, { kind: "blank", id: "b4", correctWordId: "s4" }, { kind: "text", value: "." }] },
        { id: "sd5", parts: [{ kind: "text", value: "This is my " }, { kind: "blank", id: "b5", correctWordId: "s5" }, { kind: "text", value: "." }] },
      ],
    },
    {
      type: "dropdown",
      title: "Choose the noun.\nChọn danh từ.",
      instruction: "Choose the noun that fits the sentence.\nChọn danh từ đúng với câu.",
      questions: [
        { id: "q1", parts: [{ kind: "text", value: "I am a " }, { kind: "select", id: "q1a", correctOptionId: "q1-ok", options: [{ id: "q1-ok", label: "student" }, { id: "q1-no", label: "school" }, { id: "q1-no2", label: "book" }] }, { kind: "text", value: "." }] },
        { id: "q2", parts: [{ kind: "text", value: "He is a " }, { kind: "select", id: "q2a", correctOptionId: "q2-ok", options: [{ id: "q2-ok", label: "doctor" }, { id: "q2-no", label: "hospital" }, { id: "q2-no2", label: "park" }] }, { kind: "text", value: "." }] },
        { id: "q3", parts: [{ kind: "text", value: "This is a " }, { kind: "select", id: "q3a", correctOptionId: "q3-ok", options: [{ id: "q3-ok", label: "book" }, { id: "q3-no", label: "teachers" }, { id: "q3-no2", label: "school" }] }, { kind: "text", value: "." }] },
        { id: "q4", parts: [{ kind: "text", value: "They are " }, { kind: "select", id: "q4a", correctOptionId: "q4-ok", options: [{ id: "q4-ok", label: "teachers" }, { id: "q4-no", label: "a teacher" }, { id: "q4-no2", label: "hospital" }] }, { kind: "text", value: "." }] },
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
        { id: "sen-1", label: "Câu 1", lines: [{ id: "s10", text: "I" }, { id: "s11", text: "am" }, { id: "s12", text: "a" }, { id: "s13", text: "student" }], correctOrder: ["s10", "s11", "s12", "s13"] },
        { id: "sen-2", label: "Câu 2", lines: [{ id: "s20", text: "He" }, { id: "s21", text: "is" }, { id: "s22", text: "a" }, { id: "s23", text: "doctor" }], correctOrder: ["s20", "s21", "s22", "s23"] },
        { id: "sen-3", label: "Câu 3", lines: [{ id: "s30", text: "They" }, { id: "s31", text: "are" }, { id: "s32", text: "teachers" }], correctOrder: ["s30", "s31", "s32"] },
        { id: "sen-4", label: "Câu 4", lines: [{ id: "s40", text: "This" }, { id: "s41", text: "is" }, { id: "s42", text: "a" }, { id: "s43", text: "book" }], correctOrder: ["s40", "s41", "s42", "s43"] },
        { id: "sen-5", label: "Câu 5", lines: [{ id: "s50", text: "This" }, { id: "s51", text: "is" }, { id: "s52", text: "my" }, { id: "s53", text: "school" }], correctOrder: ["s50", "s51", "s52", "s53"] },
      ],
    },
    {
      type: "reading-fill",
      title: "Fill the line.\nĐiền vào dòng.",
      instruction: "Type the noun.\nGõ danh từ còn thiếu.",
      passage: "I am a student. He is a doctor. They are teachers. This is a book. This is my school.",
      prompts: [
        { id: "rf1", label: "I am a ___.", correctAnswers: ["student"] },
        { id: "rf2", label: "He is a ___.", correctAnswers: ["doctor"] },
        { id: "rf3", label: "This is a ___.", correctAnswers: ["book"] },
        { id: "rf4", label: "This is my ___.", correctAnswers: ["school"] },
      ],
    },
    {
      type: "dictation",
      title: "Translate into English.\nDịch sang tiếng Anh.",
      instruction: "Read the Vietnamese sentence and write it in English.\nĐọc câu tiếng Việt rồi viết câu tiếng Anh.",
      items: [
        { id: "dic-1", text: "I am a student.", hint: "Tôi là học sinh." },
        { id: "dic-2", text: "He is a doctor.", hint: "Anh ấy là bác sĩ." },
        { id: "dic-3", text: "This is a book.", hint: "Đây là một quyển sách." },
        { id: "dic-4", text: "They are teachers.", hint: "Họ là giáo viên." },
        { id: "dic-5", text: "This is my school.", hint: "Đây là trường của tôi." },
      ],
    },
    {
      type: "self-writing",
      title: "Look around you.\nNhìn quanh phòng.",
      instruction: "Write 5 sentences about things you can see. Use a noun in each sentence.\nViết 5 câu về những gì bạn nhìn thấy. Mỗi câu có một danh từ.",
      promptHints: ["This is my phone.", "The table is big.", "My book is here."],
      sampleTitle: "Bài gợi ý",
      sample: "This is my phone.\nThe table is big.\nMy book is here.\nI am a student.\nThis is my school.",
    },
  ],
};
