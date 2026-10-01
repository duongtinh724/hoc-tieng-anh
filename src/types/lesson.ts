export interface WordPair {
  en: string;
  vi: string;
}

export interface ListenItem {
  en: string;
  vi: string;
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
  answers: string[];
  recall: string;
}

export interface WeekOption {
  id: number;
  label: string;
}

export interface LessonState {
  week: number;
  selectedDay: number;
  doneDays: number[];
}
