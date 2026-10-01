import type { WeekOption } from "@/types/lesson";

export const STORAGE_KEY = "tieng-anh-30-ngay-v1";

export const TOTAL_DAYS = 30;

export const WEEKS: WeekOption[] = [
  { id: 0, label: "Cả tháng" },
  { id: 1, label: "Tuần 1" },
  { id: 2, label: "Tuần 2" },
  { id: 3, label: "Tuần 3" },
  { id: 4, label: "Tuần 4" },
];

export const DEFAULT_STATE = {
  week: 1,
  selectedDay: 1,
  doneDays: [] as number[],
};
