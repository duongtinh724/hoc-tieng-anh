import type { DayLesson, MonthConfig } from "@/types/lesson";
import month01Days from "./month-01/days.json";
import month02Days from "./month-02/days.json";

export const MONTHS: MonthConfig[] = [
  {
    id: 1,
    slug: "month-01",
    title: "Tháng 1",
    subtitle: "30 ngày — Nền tảng",
    totalDays: 30,
    totalWeeks: 4,
    status: "available",
    goal: "Day 1–30: S+V, To be, mạo từ, Wh- questions (xem CURRICULUM-PLAN.md)",
  },
  {
    id: 2,
    slug: "month-02",
    title: "Tháng 2",
    subtitle: "30 ngày — Grammar core",
    totalDays: 30,
    totalWeeks: 4,
    status: "available",
    goal: "Day 31–60: Present Simple, Continuous, Past, Future",
  },
  {
    id: 3,
    slug: "month-03",
    title: "Tháng 3",
    subtitle: "30 ngày — Nền A1",
    totalDays: 30,
    totalWeeks: 4,
    status: "coming-soon",
    goal: "Day 61–90: Modal, giới từ, adj/adv, comparison",
  },
  {
    id: 4,
    slug: "month-04",
    title: "Tháng 4",
    subtitle: "30 ngày — A2 foundation",
    totalDays: 30,
    totalWeeks: 4,
    status: "coming-soon",
    goal: "Day 91–120: Present Perfect, gerund/infinitive, relative clauses",
  },
  {
    id: 5,
    slug: "month-05",
    title: "Tháng 5",
    subtitle: "30 ngày — Kiến thức thi",
    totalDays: 30,
    totalWeeks: 4,
    status: "coming-soon",
    goal: "Day 121–150: Conditional, passive, vocab topics",
  },
  {
    id: 6,
    slug: "month-06",
    title: "Tháng 6",
    subtitle: "30 ngày — Luyện dạng đề",
    totalDays: 30,
    totalWeeks: 4,
    status: "coming-soon",
    goal: "Day 151–180: Grammar MCQ, word form, reading, listening",
  },
  {
    id: 7,
    slug: "month-07",
    title: "Tháng 7",
    subtitle: "30 ngày — Mock test",
    totalDays: 30,
    totalWeeks: 4,
    status: "coming-soon",
    goal: "Day 181–210: Full mock, chữa lỗi, ổn định 5–6/10",
  },
  {
    id: 8,
    slug: "month-08",
    title: "Tháng 8",
    subtitle: "30 ngày — Nâng cao 1",
    totalDays: 30,
    totalWeeks: 4,
    status: "coming-soon",
    goal: "Câu ghép, liên từ, viết đoạn văn",
  },
  {
    id: 9,
    slug: "month-09",
    title: "Tháng 9",
    subtitle: "30 ngày — Nâng cao 2",
    totalDays: 30,
    totalWeeks: 4,
    status: "coming-soon",
    goal: "Thì quá khứ hoàn thành, câu điều kiện",
  },
  {
    id: 10,
    slug: "month-10",
    title: "Tháng 10",
    subtitle: "30 ngày — Giao tiếp thực tế",
    totalDays: 30,
    totalWeeks: 4,
    status: "coming-soon",
    goal: "Email, thuyết trình ngắn, phản hồi",
  },
  {
    id: 11,
    slug: "month-11",
    title: "Tháng 11",
    subtitle: "30 ngày — Luyện thi",
    totalDays: 30,
    totalWeeks: 4,
    status: "coming-soon",
    goal: "Dạng bài trắc nghiệm, điền khuyết, viết câu",
  },
  {
    id: 12,
    slug: "month-12",
    title: "Tháng 12",
    subtitle: "30 ngày — Tổng kết năm",
    totalDays: 30,
    totalWeeks: 4,
    status: "coming-soon",
    goal: "Kiểm tra cuối năm, lộ trình tiếp theo",
  },
];

const DAY_DATA: Record<number, DayLesson[]> = {
  1: month01Days as DayLesson[],
  2: month02Days as DayLesson[],
};

export function getMonthConfig(monthId: number): MonthConfig {
  return MONTHS.find((month) => month.id === monthId) ?? MONTHS[0];
}

export function getAvailableMonths(): MonthConfig[] {
  return MONTHS.filter((month) => month.status === "available");
}

export function getDaysForMonth(monthId: number): DayLesson[] {
  return DAY_DATA[monthId] ?? [];
}
