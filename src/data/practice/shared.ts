import type { PracticeLessonMeta } from "@/types/practice";

export function createPracticeMeta(
  day: number,
  title: string,
  month = 1,
): PracticeLessonMeta {
  return {
    id: `m${String(month).padStart(2, "0")}-d${String(day).padStart(2, "0")}`,
    month,
    day,
    title,
    breadcrumb: [
      { label: "Từ vựng", highlight: true },
      { label: "Luyện tập" },
      { label: `Tháng ${month}` },
      { label: `Ngày ${day}` },
    ],
    totalScreens: 8,
  };
}
