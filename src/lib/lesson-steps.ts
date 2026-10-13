import type { SessionStepMeta } from "@/types/lesson";

export const SESSION_STEPS: SessionStepMeta[] = [
  {
    step: 1,
    title: "Từ vựng — chép nghĩa",
    time: "Bước 1",
    hint: "Chép nghĩa vào vở. Bấm 🔊 để nghe; bấm từ đơn để tra Oxford (tab mới)",
    variant: "vocab",
  },
  {
    step: 2,
    title: "Nghe & nhắc lại",
    time: "Phút 10–20",
    hint: "Nghe 6 câu, nhắc to 3 vòng. Bấm «Nghe» để nghe phát âm",
    variant: "listen",
  },
  {
    step: 3,
    title: "Chép vào vở",
    time: "Phút 20–30",
    hint: "Chép từ và câu mẫu theo hướng dẫn",
    variant: "copy",
  },
  {
    step: 4,
    title: "Bài tập",
    time: "Phút 30–45",
    hint: "Làm bài vào vở, viết câu trả lời đầy đủ",
    variant: "exercise",
  },
  {
    step: 5,
    title: "Nhớ lại — che vở",
    time: "Phút 50–60",
    hint: "Che vở, nhắc lại không nhìn bài",
    variant: "recall",
  },
];
