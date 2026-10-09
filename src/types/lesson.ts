export interface WordPair {
  en: string;
  vi: string;
}

export interface ListenItem {
  en: string;
  vi: string;
}

export interface RuleItem {
  text: string;
  example: string;
  exampleVi?: string;
}

export interface DayLesson {
  day: number;
  week: number;
  title: string;
  aim: string;
  rule: string;
  words: WordPair[];
  listen: ListenItem[];
  copy: string[];
  exercise: string[];
  answers?: string[];
  recall: string;
}

export interface WeekOption {
  id: number;
  label: string;
}

export type MonthStatus = "available" | "coming-soon";

export interface MonthConfig {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  totalDays: number;
  totalWeeks: number;
  status: MonthStatus;
  goal: string;
}

export interface LessonState {
  month: number;
  week: number;
  selectedDay: number;
  progress: Record<string, number[]>;
  /** Số lần hoàn thành luyện tập — key: "tháng-ngày" (vd. "1-3") */
  practiceCompletions?: Record<string, number>;
  /** Điểm bài kiểm tra trên thang 10 — key: "tháng-ngày" */
  quizScores?: Record<string, number>;
  /** Tab đang mở — khôi phục sau reload */
  activeSection?: AppSection;
  /** Ngày đang mở màn luyện tập full-screen. null = không mở. */
  openPracticeDay?: number | null;
}

export type AppSection = "overview" | "lesson" | "practice" | "review" | "guide";

export type StepVariant = "vocab" | "listen" | "copy" | "exercise" | "recall";

export interface SessionStepMeta {
  step: number;
  title: string;
  time: string;
  hint: string;
  variant: StepVariant;
}
