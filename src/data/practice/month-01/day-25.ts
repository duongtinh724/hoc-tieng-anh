import { getRulesForDay } from "@/data/curriculum/month-01/day-rules";
import { createPracticeMeta } from "@/data/practice/shared";
import type { PracticeLesson } from "@/types/practice";

export const practiceDay25: PracticeLesson = {
  meta: { ...createPracticeMeta(25, "Giới từ (Prep) thời gian"), totalScreens: 7 },
  hints: {
    rules: getRulesForDay(25, ""),
    vocabulary: [
      { en: "morning", vi: "buổi sáng" },
      { en: "Monday", vi: "thứ Hai" },
      { en: "school", vi: "trường" },
      { en: "class", vi: "lớp" },
      { en: "seven", vi: "bảy" },
    ]
  },
  screens: [
    {
      type: "match",
      title: "Match the words.\nNối từ.",
      instruction: "Match each word with a picture.\nNối từ với ảnh.",
      words: [
        { id: "w-morning", label: "morning" },
        { id: "w-monday", label: "Monday" },
        { id: "w-school", label: "school" },
        { id: "w-class", label: "class" },
        { id: "w-seven", label: "seven" },
      ],
      pairs: [
        { id: "p-morning", imageUrl: "/images/practice/grammar/morning.jpg", imageAlt: "buổi sáng", label: "buổi sáng", correctWordId: "w-morning" },
        { id: "p-monday", imageUrl: "/images/practice/tobe/class.jpg", imageAlt: "thứ Hai", label: "thứ Hai", correctWordId: "w-monday" },
        { id: "p-school", imageUrl: "/images/practice/nouns-photo/school.jpg", imageAlt: "trường", label: "trường", correctWordId: "w-school" },
        { id: "p-class", imageUrl: "/images/practice/tobe/class.jpg", imageAlt: "lớp", label: "lớp", correctWordId: "w-class" },
        { id: "p-seven", imageUrl: "/images/practice/tobe/fifteen.jpg", imageAlt: "bảy", label: "bảy", correctWordId: "w-seven" },
      ],
    },
    {
      type: "sentence-drag",
      title: "Fill the sentence.\nĐiền vào câu.",
      instruction: "Drag a word into the blank.\nKéo từ vào chỗ trống.",
      wordBank: [
        { id: "s1", label: "at" },
        { id: "s2", label: "in" },
        { id: "s3", label: "on" },
        { id: "s4", label: "in" },
      ],
      sentences: [
        { id: "sd1", parts: [{ kind: "text", value: "I go to school " }, { kind: "blank", id: "b1", correctWordId: "s1" }, { kind: "text", value: " 7 a.m." }] },
        { id: "sd2", parts: [{ kind: "text", value: "I usually get up " }, { kind: "blank", id: "b2", correctWordId: "s2" }, { kind: "text", value: " the morning." }] },
        { id: "sd3", parts: [{ kind: "text", value: "We have class " }, { kind: "blank", id: "b3", correctWordId: "s3" }, { kind: "text", value: " Monday." }] },
        { id: "sd4", parts: [{ kind: "text", value: "My birthday is " }, { kind: "blank", id: "b4", correctWordId: "s4" }, { kind: "text", value: " October." }] },
      ],
    },
    {
      type: "dropdown",
      title: "Choose the word.\nChọn từ đúng.",
      instruction: "Choose the correct word.\nChọn từ đúng.",
      questions: [
        { id: "q1", parts: [{ kind: "text", value: "I study in the " }, { kind: "select", id: "q1a", correctOptionId: "q1-ok", options: [{ id: "q1-ok", label: "morning" }, { id: "q1-no", label: "book" }] }, { kind: "text", value: "." }] },
        { id: "q2", parts: [{ kind: "text", value: "We have class on " }, { kind: "select", id: "q2a", correctOptionId: "q2-ok", options: [{ id: "q2-ok", label: "Monday" }, { id: "q2-no", label: "book" }] }, { kind: "text", value: "." }] },
        { id: "q3", parts: [{ kind: "text", value: "School is at " }, { kind: "select", id: "q3a", correctOptionId: "q3-ok", options: [{ id: "q3-ok", label: "7" }, { id: "q3-no", label: "book" }] }, { kind: "text", value: "." }] },
        { id: "q4", parts: [{ kind: "text", value: "I am at school in the " }, { kind: "select", id: "q4a", correctOptionId: "q4-ok", options: [{ id: "q4-ok", label: "morning" }, { id: "q4-no", label: "book" }] }, { kind: "text", value: "." }] },
        { id: "q5", parts: [{ kind: "text", value: "I get up " }, { kind: "select", id: "q5a", correctOptionId: "q5-ok", options: [{ id: "q5-ok", label: "at" }, { id: "q5-no", label: "in" }, { id: "q5-no2", label: "on" }] }, { kind: "text", value: " 6 a.m." }] },
        { id: "q6", parts: [{ kind: "text", value: "We study " }, { kind: "select", id: "q6a", correctOptionId: "q6-ok", options: [{ id: "q6-ok", label: "on" }, { id: "q6-no", label: "in" }, { id: "q6-no2", label: "at" }] }, { kind: "text", value: " Monday." }] },
        { id: "q7", parts: [{ kind: "text", value: "School is " }, { kind: "select", id: "q7a", correctOptionId: "q7-ok", options: [{ id: "q7-ok", label: "in" }, { id: "q7-no", label: "on" }, { id: "q7-no2", label: "at" }] }, { kind: "text", value: " the morning." }] },
        { id: "q8", parts: [{ kind: "text", value: "I sleep " }, { kind: "select", id: "q8a", correctOptionId: "q8-ok", options: [{ id: "q8-ok", label: "at" }, { id: "q8-no", label: "in" }, { id: "q8-no2", label: "on" }] }, { kind: "text", value: " night." }] },
        { id: "q9", parts: [{ kind: "text", value: "My birthday is " }, { kind: "select", id: "q9a", correctOptionId: "q9-ok", options: [{ id: "q9-ok", label: "in" }, { id: "q9-no", label: "on" }, { id: "q9-no2", label: "at" }] }, { kind: "text", value: " May." }] },
        { id: "q10", parts: [{ kind: "text", value: "Class is " }, { kind: "select", id: "q10a", correctOptionId: "q10-ok", options: [{ id: "q10-ok", label: "on" }, { id: "q10-no", label: "in" }, { id: "q10-no2", label: "at" }] }, { kind: "text", value: " Friday." }] },
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
        { id: "sen-1", label: "Câu 1", lines: [{ id: "s10", text: "I" }, { id: "s11", text: "go" }, { id: "s12", text: "to" }, { id: "s13", text: "school" }, { id: "s14", text: "at" }, { id: "s15", text: "7" }, { id: "s16", text: "a.m." }], correctOrder: ["s10", "s11", "s12", "s13", "s14", "s15", "s16"] },
        { id: "sen-2", label: "Câu 2", lines: [{ id: "s20", text: "I" }, { id: "s21", text: "usually" }, { id: "s22", text: "get" }, { id: "s23", text: "up" }, { id: "s24", text: "in" }, { id: "s25", text: "the" }, { id: "s26", text: "morning" }], correctOrder: ["s20", "s21", "s22", "s23", "s24", "s25", "s26"] },
        { id: "sen-3", label: "Câu 3", lines: [{ id: "s30", text: "We" }, { id: "s31", text: "have" }, { id: "s32", text: "class" }, { id: "s33", text: "on" }, { id: "s34", text: "Monday" }], correctOrder: ["s30", "s31", "s32", "s33", "s34"] },
        { id: "sen-4", label: "Câu 4", lines: [{ id: "s40", text: "My" }, { id: "s41", text: "birthday" }, { id: "s42", text: "is" }, { id: "s43", text: "in" }, { id: "s44", text: "October" }], correctOrder: ["s40", "s41", "s42", "s43", "s44"] },
        { id: "sen-5", label: "Câu 5", lines: [{ id: "s50", text: "I" }, { id: "s51", text: "play" }, { id: "s52", text: "football" }, { id: "s53", text: "on" }, { id: "s54", text: "Sunday" }], correctOrder: ["s50", "s51", "s52", "s53", "s54"] },
      ],
    },
    {
      type: "reading-fill",
      title: "Fill the line.\nĐiền vào dòng.",
      instruction: "Type the missing word.\nGõ từ còn thiếu.",
      passage: "I go to school at 7 a.m. I usually get up in the morning. We have class on Monday. My birthday is in October. We have English lessons on Monday morning. I play football on Sunday.",
      prompts: [
        { id: "rf1", label: "I go to school ___ 7 a.m.", correctAnswers: ["at"] },
        { id: "rf2", label: "I usually get up ___ the morning.", correctAnswers: ["in"] },
        { id: "rf3", label: "We have class ___ Monday.", correctAnswers: ["on"] },
        { id: "rf4", label: "My birthday is ___ October.", correctAnswers: ["in"] },
      ],
    },
    {
      type: "dictation",
      title: "Translate into English.\nDịch sang tiếng Anh.",
      instruction: "Read the Vietnamese sentence and write it in English.\nĐọc câu tiếng Việt rồi viết câu tiếng Anh.",
      items: [
        { id: "dic-1", text: "I go to school at 7 a.m.", hint: "Tôi đi học lúc 7 giờ sáng." },
        { id: "dic-2", text: "I usually get up in the morning.", hint: "Tôi thường dậy vào buổi sáng." },
        { id: "dic-3", text: "We have class on Monday.", hint: "Chúng tôi có lớp vào thứ Hai." },
        { id: "dic-4", text: "My birthday is in October.", hint: "Sinh nhật tôi vào tháng Mười." },
        { id: "dic-5", text: "We have English lessons on Monday morning.", hint: "Chúng tôi học tiếng Anh vào sáng thứ Hai." },
        { id: "dic-6", text: "I play football on Sunday.", hint: "Tôi đá bóng vào chủ nhật." },
      ],
    },
    {
      type: "self-writing",
      title: "Your schedule.\nLịch của bạn.",
      instruction: "Write 4 sentences about when you and family study, work, or play. Use in / on / at and: morning, Monday, school, class, seven.\nViết 4 câu về giờ học, đi học của bạn và gia đình. Dùng in / on / at.",
      promptHints: [
        "I go to school at 7 a.m.",
        "I get up in the morning.",
        "We have class on Monday.",
        "I play football on Sunday."
      ],
      sampleTitle: "Bài gợi ý",
      sample: "I go to school at 7 a.m.\nI get up in the morning.\nMy class is on Monday.\nI play football on Sunday with my friends.",
    },
  ],
};
