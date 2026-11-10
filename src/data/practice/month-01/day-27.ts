import { getRulesForDay } from "@/data/curriculum/month-01/day-rules";
import { createPracticeMeta } from "@/data/practice/shared";
import type { PracticeLesson } from "@/types/practice";

export const practiceDay27: PracticeLesson = {
  meta: { ...createPracticeMeta(27, "Đọc đoạn ngắn"), totalScreens: 7 },
  hints: {
    rules: getRulesForDay(27, ""),
    vocabulary: [
      { en: "favourite", vi: "yêu thích" },
      { en: "subject", vi: "môn học" },
      { en: "father", vi: "bố" },
      { en: "mother", vi: "mẹ" },
      { en: "sister", vi: "chị / em gái" },
    ]
  },
  screens: [
    {
      type: "match",
      title: "Match the words.\nNối từ.",
      instruction: "Match each word with a picture.\nNối từ với ảnh.",
      words: [
        { id: "w-favourite", label: "favourite" },
        { id: "w-subject", label: "subject" },
        { id: "w-father", label: "father" },
        { id: "w-mother", label: "mother" },
        { id: "w-sister", label: "sister" },
      ],
      pairs: [
        { id: "p-favourite", imageUrl: "/images/practice/verbs/like.jpg", imageAlt: "yêu thích", label: "yêu thích", correctWordId: "w-favourite" },
        { id: "p-subject", imageUrl: "/images/practice/grammar/subject.jpg", imageAlt: "môn học", label: "môn học", correctWordId: "w-subject" },
        { id: "p-father", imageUrl: "/images/practice/tobe/father.jpg", imageAlt: "bố", label: "bố", correctWordId: "w-father" },
        { id: "p-mother", imageUrl: "/images/practice/tobe/mother.jpg", imageAlt: "mẹ", label: "mẹ", correctWordId: "w-mother" },
        { id: "p-sister", imageUrl: "/images/practice/tobe/sister.jpg", imageAlt: "chị / em gái", label: "chị / em gái", correctWordId: "w-sister" },
      ],
    },
    {
      type: "sentence-drag",
      title: "Fill the sentence.\nĐiền vào câu.",
      instruction: "Drag a word into the blank.\nKéo từ vào chỗ trống.",
      wordBank: [
        { id: "s1", label: "is" },
        { id: "s2", label: "am" },
        { id: "s3", label: "am" },
        { id: "s4", label: "in" },
      ],
      sentences: [
        { id: "sd1", parts: [{ kind: "text", value: "My name " }, { kind: "blank", id: "b1", correctWordId: "s1" }, { kind: "text", value: " Nam." }] },
        { id: "sd2", parts: [{ kind: "text", value: "I " }, { kind: "blank", id: "b2", correctWordId: "s2" }, { kind: "text", value: " 15 years old." }] },
        { id: "sd3", parts: [{ kind: "text", value: "I " }, { kind: "blank", id: "b3", correctWordId: "s3" }, { kind: "text", value: " a student." }] },
        { id: "sd4", parts: [{ kind: "text", value: "I live " }, { kind: "blank", id: "b4", correctWordId: "s4" }, { kind: "text", value: " Hanoi with my family." }] },
      ],
    },
    {
      type: "dropdown",
      title: "Choose the word.\nChọn từ đúng.",
      instruction: "Choose the correct word.\nChọn từ đúng.",
      questions: [
        { id: "q1", parts: [{ kind: "text", value: "I am " }, { kind: "select", id: "q1a", correctOptionId: "q1-ok", options: [{ id: "q1-ok", label: "Nam" }, { id: "q1-no", label: "book" }] }, { kind: "text", value: "." }] },
        { id: "q2", parts: [{ kind: "text", value: "I am a " }, { kind: "select", id: "q2a", correctOptionId: "q2-ok", options: [{ id: "q2-ok", label: "student" }, { id: "q2-no", label: "book" }] }, { kind: "text", value: "." }] },
        { id: "q3", parts: [{ kind: "text", value: "I study at school in the " }, { kind: "select", id: "q3a", correctOptionId: "q3-ok", options: [{ id: "q3-ok", label: "morning" }, { id: "q3-no", label: "book" }] }, { kind: "text", value: "." }] },
        { id: "q4", parts: [{ kind: "text", value: "I have a " }, { kind: "select", id: "q4a", correctOptionId: "q4-ok", options: [{ id: "q4-ok", label: "family" }, { id: "q4-no", label: "book" }] }, { kind: "text", value: "." }] },
        { id: "q5", parts: [{ kind: "text", value: "Nam is a " }, { kind: "select", id: "q5a", correctOptionId: "q5-ok", options: [{ id: "q5-ok", label: "student" }, { id: "q5-no", label: "teacher" }, { id: "q5-no2", label: "book" }] }, { kind: "text", value: "." }] },
        { id: "q6", parts: [{ kind: "text", value: "He lives in " }, { kind: "select", id: "q6a", correctOptionId: "q6-ok", options: [{ id: "q6-ok", label: "Hanoi" }, { id: "q6-no", label: "school" }, { id: "q6-no2", label: "book" }] }, { kind: "text", value: "." }] },
        { id: "q7", parts: [{ kind: "text", value: "He has a " }, { kind: "select", id: "q7a", correctOptionId: "q7-ok", options: [{ id: "q7-ok", label: "book" }, { id: "q7-no", label: "go" }, { id: "q7-no2", label: "are" }] }, { kind: "text", value: "." }] },
        { id: "q8", parts: [{ kind: "text", value: "His school is " }, { kind: "select", id: "q8a", correctOptionId: "q8-ok", options: [{ id: "q8-ok", label: "big" }, { id: "q8-no", label: "book" }, { id: "q8-no2", label: "go" }] }, { kind: "text", value: "." }] },
        { id: "q9", parts: [{ kind: "text", value: "He likes " }, { kind: "select", id: "q9a", correctOptionId: "q9-ok", options: [{ id: "q9-ok", label: "English" }, { id: "q9-no", label: "go" }, { id: "q9-no2", label: "are" }] }, { kind: "text", value: "." }] },
        { id: "q10", parts: [{ kind: "text", value: "They are " }, { kind: "select", id: "q10a", correctOptionId: "q10-ok", options: [{ id: "q10-ok", label: "friends" }, { id: "q10-no", label: "book" }, { id: "q10-no2", label: "go" }] }, { kind: "text", value: "." }] },
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
        { id: "sen-1", label: "Câu 1", lines: [{ id: "s10", text: "My" }, { id: "s11", text: "name" }, { id: "s12", text: "is" }, { id: "s13", text: "Nam" }], correctOrder: ["s10", "s11", "s12", "s13"] },
        { id: "sen-2", label: "Câu 2", lines: [{ id: "s20", text: "I" }, { id: "s21", text: "am" }, { id: "s22", text: "15" }, { id: "s23", text: "years" }, { id: "s24", text: "old" }], correctOrder: ["s20", "s21", "s22", "s23", "s24"] },
        { id: "sen-3", label: "Câu 3", lines: [{ id: "s30", text: "I" }, { id: "s31", text: "am" }, { id: "s32", text: "a" }, { id: "s33", text: "student" }], correctOrder: ["s30", "s31", "s32", "s33"] },
        { id: "sen-4", label: "Câu 4", lines: [{ id: "s40", text: "I" }, { id: "s41", text: "live" }, { id: "s42", text: "in" }, { id: "s43", text: "Hanoi" }, { id: "s44", text: "with" }, { id: "s45", text: "my" }, { id: "s46", text: "family" }], correctOrder: ["s40", "s41", "s42", "s43", "s44", "s45", "s46"] },
        { id: "sen-5", label: "Câu 5", lines: [{ id: "s50", text: "I" }, { id: "s51", text: "like" }, { id: "s52", text: "football" }, { id: "s53", text: "and" }, { id: "s54", text: "music" }], correctOrder: ["s50", "s51", "s52", "s53", "s54"] },
      ],
    },
    {
      type: "reading-fill",
      title: "Fill the line.\nĐiền vào dòng.",
      instruction: "Type the missing word.\nGõ từ còn thiếu.",
      passage: "My name is Nam. I am 15 years old. I am a student. I live in Hanoi with my family. I like football and music. My favourite subject is English.",
      prompts: [
        { id: "rf1", label: "My name ___ Nam.", correctAnswers: ["is"] },
        { id: "rf2", label: "I ___ 15 years old.", correctAnswers: ["am"] },
        { id: "rf3", label: "I ___ a student.", correctAnswers: ["am"] },
        { id: "rf4", label: "I live ___ Hanoi with my family.", correctAnswers: ["in"] },
      ],
    },
    {
      type: "dictation",
      title: "Translate into English.\nDịch sang tiếng Anh.",
      instruction: "Read the Vietnamese sentence and write it in English.\nĐọc câu tiếng Việt rồi viết câu tiếng Anh.",
      items: [
        { id: "dic-1", text: "My name is Nam.", hint: "Tên tôi là Nam." },
        { id: "dic-2", text: "I am 15 years old.", hint: "Tôi 15 tuổi." },
        { id: "dic-3", text: "I am a student.", hint: "Tôi là học sinh." },
        { id: "dic-4", text: "I live in Hanoi with my family.", hint: "Tôi sống ở Hà Nội với gia đình." },
        { id: "dic-5", text: "I like football and music.", hint: "Tôi thích bóng đá và âm nhạc." },
        { id: "dic-6", text: "My favourite subject is English.", hint: "Môn yêu thích của tôi là tiếng Anh." },
      ],
    },
    {
      type: "self-writing",
      title: "About you and your family.\nVề bạn và gia đình.",
      instruction: "Write 4–5 sentences like a short About Me: name, age, student, family, favourite subject. You may use: favourite, subject, father, mother, sister.\nViết 4–5 câu giới thiệu: tên, tuổi, học sinh, gia đình, môn thích. Dùng từ: favourite, subject, father, mother, sister.",
      promptHints: [
        "My name is Nam.",
        "I am a student.",
        "I live with my family.",
        "My father is a teacher.",
        "My favourite subject is English."
      ],
      sampleTitle: "Bài gợi ý",
      sample: "My name is Nam.\nI am 15 years old.\nI am a student.\nI live in Hanoi with my father, mother and sister.\nMy favourite subject is English.",
    },
  ],
};
