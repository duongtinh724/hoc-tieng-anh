import type { LessonState } from "@/types/lesson";

export const STORAGE_KEY = "tieng-anh-app-v2";
export const LEGACY_STORAGE_KEY = "tieng-anh-30-ngay-v1";

export const DEFAULT_STATE: LessonState = {
  month: 1,
  week: 1,
  selectedDay: 1,
  progress: { "1": [] },
};

/** Bật lại khi cần mở tab Plan ôn tập */
export const REVIEW_PLAN_ENABLED = false;

const ALL_MENU_ITEMS = [
  { id: "overview" as const, label: "Tổng quan", icon: "📊" },
  { id: "lesson" as const, label: "Bài học", icon: "📖" },
  { id: "practice" as const, label: "Luyện tập", icon: "✏️" },
  { id: "review" as const, label: "Plan ôn tập", icon: "🔄" },
  { id: "guide" as const, label: "Hướng dẫn", icon: "💡" },
] as const;

export const MENU_ITEMS = REVIEW_PLAN_ENABLED
  ? ALL_MENU_ITEMS
  : ALL_MENU_ITEMS.filter((item) => item.id !== "review");

export const ANNOUNCEMENT_MESSAGES = [
  "Hãy duy trì thói quen học tiếng Anh 30 phút mỗi ngày... Đừng quên nha Huy!!! hihi^^",
];

export const GUIDE_STEPS = [
  {
    time: "0–8 phút",
    title: "Nghe & nhắc lại",
    detail: "Nghe 6 câu, nhắc to 3 vòng. Bấm nút «Nghe» để nghe phát âm.",
  },
  {
    time: "8–20 phút",
    title: "Chép vào vở",
    detail: "Chép từ vựng và câu mẫu. Cột trái tiếng Anh, cột phải tiếng Việt.",
  },
  {
    time: "20–27 phút",
    title: "Làm bài tập",
    detail: "Làm bài vào vở. Viết câu trả lời trước khi kiểm tra với giáo viên hoặc phụ huynh.",
  },
  {
    time: "27–30 phút",
    title: "Ba phút cuối",
    detail: "Che vở, nhắc lại từ và câu. Đánh dấu «Đã học xong» khi hoàn thành.",
  },
];
