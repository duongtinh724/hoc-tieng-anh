import type { SessionStepMeta } from "@/types/lesson";

export const SESSION_STEPS: SessionStepMeta[] = [
  {
    step: 1,
    title: "Từ vựng — chép nghĩa",
    time: "Bước 1",
    hint: "Đọc từ tiếng Anh, chép nghĩa tiếng Việt vào vở",
    variant: "vocab",
  },
  {
    step: 2,
    title: "Nghe & nhắc lại",
    time: "Phút 0–8",
    hint: "Nghe 6 câu, nhắc to 3 vòng. Bấm «Nghe» để nghe phát âm",
    variant: "listen",
  },
  {
    step: 3,
    title: "Chép vào vở",
    time: "Phút 8–20",
    hint: "Chép từ và câu mẫu theo hướng dẫn",
    variant: "copy",
  },
  {
    step: 4,
    title: "Bài tập",
    time: "Phút 20–27",
    hint: "Làm bài vào vở, viết câu trả lời đầy đủ",
    variant: "exercise",
  },
  {
    step: 5,
    title: "Ba phút cuối — ôn tập",
    time: "Phút 27–30",
    hint: "Che vở, nhắc lại không nhìn bài",
    variant: "recall",
  },
];
