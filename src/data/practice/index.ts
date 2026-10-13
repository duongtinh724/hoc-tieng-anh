import { practiceDay01 as practiceDay01M01 } from "@/data/practice/month-01/day-01";
import { practiceDay02 as practiceDay02M01 } from "@/data/practice/month-01/day-02";
import { practiceDay03 as practiceDay03M01 } from "@/data/practice/month-01/day-03";
import { practiceDay04 as practiceDay04M01 } from "@/data/practice/month-01/day-04";
import { practiceDay05 as practiceDay05M01 } from "@/data/practice/month-01/day-05";
import { practiceDay06 as practiceDay06M01 } from "@/data/practice/month-01/day-06";
import { practiceDay07 as practiceDay07M01 } from "@/data/practice/month-01/day-07";
import { practiceDay08 as practiceDay08M01 } from "@/data/practice/month-01/day-08";
import { practiceDay09 as practiceDay09M01 } from "@/data/practice/month-01/day-09";
import { practiceDay10 as practiceDay10M01 } from "@/data/practice/month-01/day-10";
import { practiceDay11 as practiceDay11M01 } from "@/data/practice/month-01/day-11";
import { practiceDay12 as practiceDay12M01 } from "@/data/practice/month-01/day-12";
import { practiceDay13 as practiceDay13M01 } from "@/data/practice/month-01/day-13";
import { practiceDay14 as practiceDay14M01 } from "@/data/practice/month-01/day-14";
import { practiceDay15 as practiceDay15M01 } from "@/data/practice/month-01/day-15";
import { practiceDay16 as practiceDay16M01 } from "@/data/practice/month-01/day-16";
import { practiceDay17 as practiceDay17M01 } from "@/data/practice/month-01/day-17";
import { practiceDay18 as practiceDay18M01 } from "@/data/practice/month-01/day-18";
import { practiceDay19 as practiceDay19M01 } from "@/data/practice/month-01/day-19";
import { practiceDay20 as practiceDay20M01 } from "@/data/practice/month-01/day-20";
import { practiceDay21 as practiceDay21M01 } from "@/data/practice/month-01/day-21";
import { practiceDay22 as practiceDay22M01 } from "@/data/practice/month-01/day-22";
import { practiceDay23 as practiceDay23M01 } from "@/data/practice/month-01/day-23";
import { practiceDay24 as practiceDay24M01 } from "@/data/practice/month-01/day-24";
import { practiceDay25 as practiceDay25M01 } from "@/data/practice/month-01/day-25";
import { practiceDay26 as practiceDay26M01 } from "@/data/practice/month-01/day-26";
import { practiceDay27 as practiceDay27M01 } from "@/data/practice/month-01/day-27";
import { practiceDay28 as practiceDay28M01 } from "@/data/practice/month-01/day-28";
import { practiceDay29 as practiceDay29M01 } from "@/data/practice/month-01/day-29";
import { practiceDay30 as practiceDay30M01 } from "@/data/practice/month-01/day-30";
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
  "1-8": practiceDay08M01,
  "1-9": practiceDay09M01,
  "1-10": practiceDay10M01,
  "1-11": practiceDay11M01,
  "1-12": practiceDay12M01,
  "1-13": practiceDay13M01,
  "1-14": practiceDay14M01,
  "1-15": practiceDay15M01,
  "1-16": practiceDay16M01,
  "1-17": practiceDay17M01,
  "1-18": practiceDay18M01,
  "1-19": practiceDay19M01,
  "1-20": practiceDay20M01,
  "1-21": practiceDay21M01,
  "1-22": practiceDay22M01,
  "1-23": practiceDay23M01,
  "1-24": practiceDay24M01,
  "1-25": practiceDay25M01,
  "1-26": practiceDay26M01,
  "1-27": practiceDay27M01,
  "1-28": practiceDay28M01,
  "1-29": practiceDay29M01,
  "1-30": practiceDay30M01,
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
