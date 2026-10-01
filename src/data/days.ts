import type { DayLesson } from "@/types/lesson";
import { TOTAL_DAYS } from "@/lib/constants";
import daysJson from "./days.json";

export const DAYS: DayLesson[] = daysJson as DayLesson[];

export function getDayByNumber(day: number): DayLesson {
  return DAYS.find((item) => item.day === day) ?? DAYS[0];
}

export function getDaysByWeek(week: number): DayLesson[] {
  return week === 0 ? DAYS : DAYS.filter((item) => item.week === week);
}

export function getNextIncompleteDay(doneDays: number[]): number {
  const next = DAYS.find((item) => !doneDays.includes(item.day));
  return next ? next.day : TOTAL_DAYS;
}

export { TOTAL_DAYS };
