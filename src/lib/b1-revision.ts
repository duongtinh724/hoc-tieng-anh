import { B1_DAYS } from "@/data/b1-revision";
import type {
  B1Choice,
  B1Day,
  B1DayProgress,
  B1DayStatus,
  B1Store,
} from "@/types/b1-revision";

export const B1_STORAGE_KEY = "tieng-anh-b1-v1";

export const EMPTY_B1_STORE: B1Store = { days: {} };

export const B1_DAY_TITLE_VI: Record<number, string> = {
  1: "Các thì",
  2: "Dạng động từ và Modal",
  3: "Danh từ, mạo từ và đại từ",
  4: "Tính từ, trạng từ và so sánh",
  5: "Câu bị động và tường thuật",
  6: "Câu điều kiện và mệnh đề quan hệ",
  7: "Giới từ và cấu trúc câu",
};

const CHOICES: B1Choice[] = ["A", "B", "C", "D"];

export function isB1Choice(value: string): value is B1Choice {
  return CHOICES.includes(value as B1Choice);
}

export function loadB1Store(): B1Store {
  if (typeof window === "undefined") return EMPTY_B1_STORE;
  try {
    const raw = window.localStorage.getItem(B1_STORAGE_KEY);
    if (!raw) return EMPTY_B1_STORE;
    const parsed = JSON.parse(raw) as B1Store;
    if (!parsed || typeof parsed !== "object" || !parsed.days) return EMPTY_B1_STORE;
    return { days: parsed.days };
  } catch {
    return EMPTY_B1_STORE;
  }
}

export function saveB1Store(store: B1Store) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(B1_STORAGE_KEY, JSON.stringify(store));
}

export function emptyDayProgress(): B1DayProgress {
  return { answers: {}, submitted: false, score: null };
}

export function getDayProgress(store: B1Store, day: number): B1DayProgress {
  return store.days[String(day)] ?? emptyDayProgress();
}

export function b1DayStatus(progress: B1DayProgress): B1DayStatus {
  if (progress.submitted) return "completed";
  if (progress.startedAt || Object.keys(progress.answers).length > 0) return "in-progress";
  return "not-started";
}

export function b1StatusLabel(status: B1DayStatus): string {
  if (status === "completed") return "Đã nộp";
  if (status === "in-progress") return "Đang làm";
  return "Chưa học";
}

export function markB1DayStarted(store: B1Store, day: number): B1Store {
  const current = getDayProgress(store, day);
  if (current.startedAt) return store;
  return {
    days: {
      ...store.days,
      [String(day)]: {
        ...current,
        startedAt: new Date().toISOString(),
      },
    },
  };
}

export function saveB1Answer(store: B1Store, day: number, questionId: string, choice: B1Choice): B1Store {
  const current = getDayProgress(store, day);
  if (current.submitted) return store;
  return {
    days: {
      ...store.days,
      [String(day)]: {
        ...current,
        startedAt: current.startedAt ?? new Date().toISOString(),
        answers: { ...current.answers, [questionId]: choice },
      },
    },
  };
}

export function gradeB1Day(day: B1Day, answers: Record<string, B1Choice>) {
  const questions = day.assessment.questions;
  let correct = 0;
  for (const question of questions) {
    if (answers[question.id] === question.correct_answer) correct += 1;
  }
  const total = questions.length || 1;
  const percent = Math.round((correct / total) * 100);
  return { correct, total, percent };
}

export function submitB1Day(store: B1Store, day: B1Day): B1Store {
  const current = getDayProgress(store, day.day);
  const result = gradeB1Day(day, current.answers);
  return {
    days: {
      ...store.days,
      [String(day.day)]: {
        ...current,
        startedAt: current.startedAt ?? new Date().toISOString(),
        submitted: true,
        score: result.percent,
        correct: result.correct,
        submittedAt: new Date().toISOString(),
      },
    },
  };
}

export function retryB1Day(store: B1Store, day: number): B1Store {
  const current = getDayProgress(store, day);
  return {
    days: {
      ...store.days,
      [String(day)]: {
        startedAt: current.startedAt ?? new Date().toISOString(),
        answers: {},
        submitted: false,
        score: null,
        correct: undefined,
      },
    },
  };
}

export function scoreBand(percent: number): { id: "excellent" | "good" | "needs_improvement" | "weak"; label: string } {
  if (percent >= 90) return { id: "excellent", label: "Xuất sắc" };
  if (percent >= 80) return { id: "good", label: "Khá" };
  if (percent >= 65) return { id: "needs_improvement", label: "Cần ôn thêm" };
  return { id: "weak", label: "Chưa vững" };
}

export function answeredCount(progress: B1DayProgress, total: number) {
  return Math.min(total, Object.keys(progress.answers).length);
}

export function b1HubStats(store: B1Store) {
  let completed = 0;
  let inProgress = 0;
  let notStarted = 0;
  let scoreSum = 0;
  let scored = 0;

  for (const day of B1_DAYS) {
    const status = b1DayStatus(getDayProgress(store, day.day));
    if (status === "completed") completed += 1;
    else if (status === "in-progress") inProgress += 1;
    else notStarted += 1;

    const score = getDayProgress(store, day.day).score;
    if (typeof score === "number") {
      scoreSum += score;
      scored += 1;
    }
  }

  const continueDay =
    B1_DAYS.find((day) => b1DayStatus(getDayProgress(store, day.day)) !== "completed")?.day ??
    B1_DAYS[0]?.day ??
    1;

  return {
    completed,
    inProgress,
    notStarted,
    totalDays: B1_DAYS.length,
    percent: Math.round((completed / B1_DAYS.length) * 100),
    averageScore: scored ? Math.round(scoreSum / scored) : null,
    continueDay,
  };
}
