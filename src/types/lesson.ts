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
}

export type AppSection = "overview" | "lesson" | "review" | "guide";

export type StepVariant = "vocab" | "listen" | "copy" | "exercise" | "recall";

export interface SessionStepMeta {
  step: number;
  title: string;
  time: string;
  hint: string;
  variant: StepVariant;
}
