/** Mốc mở practice theo `month-day` (giờ VN, +07). Không hiển thị trên UI Lesson. */
const UNLOCK_AT_MS: Record<string, number> = {
  "1-21": Date.parse("2026-11-11T21:00:00+07:00"),
};

function practiceKey(month: number, day: number): string {
  return `${month}-${day}`;
}

export function isPracticeSessionOpen(month: number, day: number, now = Date.now()): boolean {
  const at = UNLOCK_AT_MS[practiceKey(month, day)];
  if (at === undefined) return true;
  return now >= at;
}

/** Thông báo khi chưa tới giờ mở — không nêu giờ cụ thể. */
export const PRACTICE_LOCKED_MESSAGE = "Bài kiểm tra chưa mở. Con làm bài học trước, quay lại sau.";
