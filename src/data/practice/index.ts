import { practiceDay01 as practiceDay01M01 } from "@/data/practice/month-01/day-01";
import { practiceDay02 as practiceDay02M01 } from "@/data/practice/month-01/day-02";
import { practiceDay03 as practiceDay03M01 } from "@/data/practice/month-01/day-03";
import { practiceDay04 as practiceDay04M01 } from "@/data/practice/month-01/day-04";
import { practiceDay05 as practiceDay05M01 } from "@/data/practice/month-01/day-05";
import { practiceDay06 as practiceDay06M01 } from "@/data/practice/month-01/day-06";
import { practiceDay07 as practiceDay07M01 } from "@/data/practice/month-01/day-07";
import { practiceDay01 as practiceDay01M02 } from "@/data/practice/month-02/day-01";
import { practiceDay02 as practiceDay02M02 } from "@/data/practice/month-02/day-02";
import { practiceDay03 as practiceDay03M02 } from "@/data/practice/month-02/day-03";
import { practiceDay04 as practiceDay04M02 } from "@/data/practice/month-02/day-04";
import { practiceDay05 as practiceDay05M02 } from "@/data/practice/month-02/day-05";
import { practiceDay06 as practiceDay06M02 } from "@/data/practice/month-02/day-06";
import type { PracticeLesson } from "@/types/practice";

const PRACTICE_LESSONS: Record<string, PracticeLesson> = {
  "1-1": practiceDay01M01,
  "1-2": practiceDay02M01,
  "1-3": practiceDay03M01,
  "1-4": practiceDay04M01,
  "1-5": practiceDay05M01,
  "1-6": practiceDay06M01,
  "1-7": practiceDay07M01,
  "2-1": practiceDay01M02,
  "2-2": practiceDay02M02,
  "2-3": practiceDay03M02,
  "2-4": practiceDay04M02,
  "2-5": practiceDay05M02,
  "2-6": practiceDay06M02,
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

export function countPracticeLessons(month: number): number {
  return Object.keys(PRACTICE_LESSONS).filter((key) =>
    key.startsWith(`${month}-`),
  ).length;
}
