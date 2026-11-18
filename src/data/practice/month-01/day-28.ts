import { getRulesForDay } from "@/data/curriculum/month-01/day-rules";
import { day28Exam } from "@/data/practice/month-01/day-28-exam";
import { createPracticeMeta } from "@/data/practice/shared";
import type { PracticeLesson } from "@/types/practice";

export const practiceDay28: PracticeLesson = {
  meta: { ...createPracticeMeta(28, "ENGLISH TEST – GRADE 9"), totalScreens: 1 },
  hints: {
    rules: getRulesForDay(28, ""),
    vocabulary: [
      { en: "student", vi: "học sinh" },
      { en: "school", vi: "trường" },
      { en: "morning", vi: "buổi sáng" },
      { en: "family", vi: "gia đình" },
      { en: "football", vi: "bóng đá" },
    ],
    grammarNotes: [
      "Đề ôn ngày 1–27: to be, a/an, there is/are, in/on/at, Wh-, have/has, V-s.",
      "Đọc kỹ đoạn My Daily Life trước Part III.",
      "Part IV: sắp xếp từ; viết câu hỏi Wh-; đoạn 5–7 câu về bản thân.",
    ],
  },
  screens: [day28Exam],
};