import type { DayLesson, MonthConfig } from "@/types/lesson";
import month01Days from "./month-01/days.json";

export const MONTHS: MonthConfig[] = [
  {
    id: 1,
    slug: "month-01",
    title: "Tháng 1",
    subtitle: "30 ngày — Nền tảng",
    totalDays: 30,
    totalWeeks: 4,
    status: "available",
    goal: "Chào hỏi, số đếm, am/is/are, gia đình, thói quen hàng ngày",
  },
  {
    id: 2,
    slug: "month-02",
    title: "Tháng 2",
    subtitle: "30 ngày — Củng cố",
    totalDays: 30,
    totalWeeks: 4,
    status: "coming-soon",
    goal: "Quá khứ đơn, mô tả người và đồ vật",
  },
  {
    id: 3,
    slug: "month-03",
    title: "Tháng 3",
    subtitle: "30 ngày — Mở rộng",
    totalDays: 30,
    totalWeeks: 4,
    status: "coming-soon",
    goal: "Tương lai, so sánh, hỏi đáp phức tạp hơn",
  },
  {
    id: 4,
    slug: "month-04",
    title: "Tháng 4",
    subtitle: "30 ngày — Giao tiếp",
    totalDays: 30,
    totalWeeks: 4,
    status: "coming-soon",
    goal: "Hội thoại hàng ngày, mua sắm, hỏi đường",
  },
  {
    id: 5,
    slug: "month-05",
    title: "Tháng 5",
    subtitle: "30 ngày — Ngữ pháp",
    totalDays: 30,
    totalWeeks: 4,
    status: "coming-soon",
    goal: "Thì hiện tại hoàn thành, giới từ nâng cao",
  },
  {
    id: 6,
    slug: "month-06",
    title: "Tháng 6",
    subtitle: "30 ngày — Đọc hiểu",
    totalDays: 30,
    totalWeeks: 4,
    status: "coming-soon",
    goal: "Đoạn văn ngắn, tóm tắt, suy luận đơn giản",
  },
  {
    id: 7,
    slug: "month-07",
    title: "Tháng 7",
    subtitle: "30 ngày — Ôn tổng",
    totalDays: 30,
    totalWeeks: 4,
    status: "coming-soon",
    goal: "Ôn 6 tháng đầu, luyện tập tổng hợp",
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
