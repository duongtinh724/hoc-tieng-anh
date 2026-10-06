/**
 * Map tháng trong app ↔ Day global trong CURRICULUM-PLAN.md (Day 1–210).
 * Dùng khi cần tra chủ đề theo plan gốc.
 */
export const MASTER_PLAN_MONTHS = [
  {
    month: 1,
    globalDays: [1, 30] as const,
    title: "Xây lại từ con số 0",
    focus: "Câu cơ bản, To be, mạo từ, câu hỏi Wh-",
  },
  {
    month: 2,
    globalDays: [31, 60] as const,
    title: "Grammar core",
    focus: "Present Simple, Present Continuous, Past, Future",
  },
  {
    month: 3,
    globalDays: [61, 90] as const,
    title: "Hoàn thiện nền A1",
    focus: "Modal, prepositions, adj/adv, comparison",
  },
  {
    month: 4,
    globalDays: [91, 120] as const,
    title: "A2 foundation",
    focus: "Present Perfect, gerund/infinitive, conjunctions, relative clauses",
  },
  {
    month: 5,
    globalDays: [121, 150] as const,
    title: "Kiến thức thi",
    focus: "Conditional, passive, reported speech, vocabulary topics",
  },
  {
    month: 6,
    globalDays: [151, 180] as const,
    title: "Luyện dạng đề",
    focus: "Grammar MCQ, word form, reading, listening",
  },
  {
    month: 7,
    globalDays: [181, 210] as const,
    title: "Chiến đấu với đề",
    focus: "Full mock test, chữa lỗi, ổn định 5–6/10",
  },
] as const;

export function getGlobalDay(month: number, dayInMonth: number): number {
  return (month - 1) * 30 + dayInMonth;
}

export function getMasterPlanTopic(month: number, dayInMonth: number): string | null {
  const entry = MASTER_PLAN_MONTHS.find((item) => item.month === month);
  if (!entry) return null;
  const globalDay = getGlobalDay(month, dayInMonth);
  return `Tháng ${month} (${entry.title}), Global Day ${globalDay}: ${entry.focus}`;
}

/** Ngưỡng tiến độ adaptive — xem CURRICULUM-PLAN.md mục 1 */
export const PROGRESS_THRESHOLDS = {
  reviewOnlyBelow: 0.5,
  canContinueMin: 0.5,
  solidMin: 0.7,
} as const;

/** Target điểm thi cuối mỗi tháng (/10) */
export const MONTHLY_EXAM_TARGETS: Record<number, string> = {
  1: "Không 0 điểm — câu cơ bản + Wh- questions",
  2: "Nhận biết thì, hỏi/phủ định, câu đơn",
  3: "4/10",
  4: "4–5/10",
  5: "5/10",
  6: "5–6/10",
  7: "Ổn định 5–6/10",
};
