import { getRulesForDay } from "@/data/curriculum/month-01/day-rules";
import { day21Exam } from "@/data/practice/month-01/day-21-exam";
import { createPracticeMeta } from "@/data/practice/shared";
import type { PracticeLesson } from "@/types/practice";

export const practiceDay21: PracticeLesson = {
  meta: { ...createPracticeMeta(21, "ENGLISH TEST – MONTH 01"), totalScreens: 1 },
  hints: {
    rules: getRulesForDay(21, ""),
    vocabulary: [
      { en: "family", vi: "gia đình" },
      { en: "children", vi: "những đứa trẻ" },
      { en: "house", vi: "nhà" },
      { en: "football", vi: "bóng đá" },
      { en: "study", vi: "học" },
    ],
    grammarNotes: [
      "Đề ôn ngày 1–20: đại từ, to be, a/an, these/those, have/has, there is/are, my.",
      "They/We/I + động từ nguyên mẫu; She/He + động từ thêm -s.",
      "Đọc kỹ đoạn About Nam trước khi trả lời Part IV.",
    ],
  },
  screens: [day21Exam],
};
