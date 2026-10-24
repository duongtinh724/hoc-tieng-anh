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
  { id: "roadmap" as const, label: "Roadmap", icon: "🗺️" },
  { id: "tenses" as const, label: "12 thì", icon: "⏱️" },
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
    time: "0–10 phút",
    title: "Từ vựng và ôn bài cũ",
    detail: "Ôn từ đã học, học khoảng 5 từ mới. Nghe và chép nghĩa.",
  },
  {
    time: "10–25 phút",
    title: "Ngữ pháp",
    detail: "Đọc quy tắc hôm nay và ví dụ. Nghe 6 câu, nhắc to.",
  },
  {
    time: "25–40 phút",
    title: "Làm bài tập",
    detail: "Điền từ, sắp xếp câu, chọn đáp án. Viết vào vở trước khi đối chiếu.",
  },
  {
    time: "40–50 phút",
    title: "Kỹ năng đề",
    detail: "Nghe câu ngắn, đọc đoạn dễ, hoặc viết lại câu.",
  },
  {
    time: "50–60 phút",
    title: "Nhớ lại và sửa lỗi",
    detail: "Che vở, tự trả lời. Ghi câu sai để ôn lại.",
  },
];
