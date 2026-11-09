export type B1Difficulty = "easy" | "medium" | "hard";
export type B1Choice = "A" | "B" | "C" | "D";
export type B1DayStatus = "not-started" | "in-progress" | "completed";

export interface B1Example {
  en: string;
  vi: string;
}

export interface B1Topic {
  id: string;
  name: string;
  name_vi: string;
  definition: string;
  formula: string;
  usage: string;
  time_expressions_or_signals: string[];
  examples: B1Example[];
  common_mistakes: string[];
  comparison: string;
}

export interface B1Question {
  id: string;
  topic: string;
  type: "multiple_choice";
  difficulty: B1Difficulty;
  question: string;
  options: Record<B1Choice, string>;
  correct_answer: B1Choice;
  explanation: string;
  quality_flag: string | null;
}

export interface B1Day {
  day: number;
  title: string;
  objectives: string[];
  topics: B1Topic[];
  assessment: {
    question_count: number;
    difficulty_distribution_target: {
      easy: number;
      medium: number;
      hard: number;
    };
    questions: B1Question[];
    answer_key_included: boolean;
  };
}

export interface B1RevisionData {
  metadata: {
    title: string;
    language: string;
    target_level: string;
    days: number;
    questions_total: number;
  };
  scoring: {
    excellent: string;
    good: string;
    needs_improvement: string;
    weak: string;
    formula: string;
    disclaimer: string;
  };
  days: B1Day[];
}

export interface B1DayProgress {
  startedAt?: string;
  answers: Record<string, B1Choice>;
  submitted: boolean;
  score: number | null;
  correct?: number;
  submittedAt?: string;
}

export interface B1Store {
  days: Record<string, B1DayProgress>;
}
