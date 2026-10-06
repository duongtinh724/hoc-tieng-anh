import { practiceDay01 } from "@/data/practice/month-01/day-01";
import { practiceDay02 } from "@/data/practice/month-01/day-02";
import { practiceDay03 } from "@/data/practice/month-01/day-03";
import { practiceDay04 } from "@/data/practice/month-01/day-04";
import { practiceDay05 } from "@/data/practice/month-01/day-05";
import { practiceDay06 } from "@/data/practice/month-01/day-06";
import type { PracticeLesson } from "@/types/practice";

const PRACTICE_LESSONS: Record<string, PracticeLesson> = {
  "1-1": practiceDay01,
  "1-2": practiceDay02,
  "1-3": practiceDay03,
  "1-4": practiceDay04,
  "1-5": practiceDay05,
  "1-6": practiceDay06,
};

export function getPracticeLesson(
  month: number,
  day: number,
): PracticeLesson | null {
  return PRACTICE_LESSONS[`${month}-${day}`] ?? null;
}

export function hasPracticeLesson(month: number, day: number): boolean {
  return Boolean(getPracticeLesson(month, day));
}
