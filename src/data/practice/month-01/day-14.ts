import { getRulesForDay } from "@/data/curriculum/month-01/day-rules";
import { day14Exam } from "@/data/practice/month-01/day-14-exam";
import { createPracticeMeta } from "@/data/practice/shared";
import type { PracticeLesson } from "@/types/practice";

export const practiceDay14: PracticeLesson = {
  meta: { ...createPracticeMeta(14, "ENGLISH GRAMMAR TEST – FOUNDATION"), totalScreens: 1 },
  hints: {
    rules: getRulesForDay(14, ""),
    vocabulary: [
      { en: "student", vi: "học sinh" },
      { en: "teacher", vi: "giáo viên" },
      { en: "engineer", vi: "kỹ sư" },
      { en: "university", vi: "đại học" },
      { en: "children", vi: "những đứa trẻ" },
    ],
    grammarNotes: [
      "Đề ôn ngày 1–13: đại từ (Pron), to be (V tobe), a/an/the, this/that/these/those.",
      "Không dùng don't với to be (V tobe).",
      "Are you…? trả lời bằng I.",
    ],
  },
  screens: [day14Exam],
};
