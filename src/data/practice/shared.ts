import type { PracticeLessonMeta } from "@/types/practice";

export function createPracticeMeta(day: number, title: string): PracticeLessonMeta {
  return {
    id: `m01-d${String(day).padStart(2, "0")}`,
    month: 1,
    day,
    title,
    breadcrumb: [
      { label: "Từ vựng", highlight: true },
      { label: "Luyện tập" },
      { label: "Tháng 1" },
      { label: `Ngày ${day}` },
    ],
    totalScreens: 8,
  };
}
