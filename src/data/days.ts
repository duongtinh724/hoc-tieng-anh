import {
  getDaysForMonth,
  getMonthConfig,
} from "@/data/curriculum";
import type { DayLesson, WeekOption } from "@/types/lesson";

export function getDayByNumber(monthId: number, day: number): DayLesson | null {
  const days = getDaysForMonth(monthId);
  return days.find((item) => item.day === day) ?? days[0] ?? null;
}

export function getDaysByWeek(monthId: number, week: number): DayLesson[] {
  const days = getDaysForMonth(monthId);
  return week === 0 ? days : days.filter((item) => item.week === week);
}

export function getNextIncompleteDay(
  monthId: number,
  doneDays: number[],
): number {
  const days = getDaysForMonth(monthId);
  const next = days.find((item) => !doneDays.includes(item.day));
  const month = getMonthConfig(monthId);
  return next ? next.day : month.totalDays;
}

export function getWeekOptions(monthId: number): WeekOption[] {
  const month = getMonthConfig(monthId);
  const weeks: WeekOption[] = [{ id: 0, label: "Cả tháng" }];

  for (let i = 1; i <= month.totalWeeks; i += 1) {
    weeks.push({ id: i, label: `Tuần ${i}` });
  }

  return weeks;
}

export function getTotalDays(monthId: number): number {
  return getMonthConfig(monthId).totalDays;
}
