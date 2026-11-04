export type VocabStatus = "new" | "learning" | "reviewing" | "mastered";
export type VocabStudyMode = "en-vi" | "vi-en";
export type VocabDifficulty = "easy" | "normal" | "difficult";
export type VocabDayStatus = "not-started" | "in-progress" | "completed";

export interface VocabItem {
  key: string;
  month: number;
  day: number;
  week: number;
  lessonTitle: string;
  en: string;
  vi: string;
  ipa?: string;
  example?: { en: string; vi: string };
}

export interface VocabCardState {
  status: VocabStatus;
  needReview: boolean;
  viewed: boolean;
  known: boolean;
  correctCount: number;
  incorrectCount: number;
  reviewStep: number;
  lastReviewedAt: number | null;
  nextReviewAt: number | null;
}

export interface VocabDayState {
  startedAt: number | null;
  completedAt: number | null;
  difficulty: VocabDifficulty | null;
  note: string;
  quizCorrect: number;
  quizTotal: number;
}

export interface VocabStore {
  version: 1;
  cards: Record<string, VocabCardState>;
  days: Record<string, VocabDayState>;
}
