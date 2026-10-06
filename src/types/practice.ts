import type { RuleItem, WordPair } from "@/types/lesson";

export type ItemState = "empty" | "filled" | "correct" | "incorrect" | "locked";

export interface WordBankItem {
  id: string;
  label: string;
}

export interface PracticeBreadcrumbItem {
  label: string;
  highlight?: boolean;
}

export interface PracticeLessonMeta {
  id: string;
  month: number;
  day: number;
  title: string;
  breadcrumb: PracticeBreadcrumbItem[];
  totalScreens: number;
}

export interface PracticeHints {
  rules?: RuleItem[];
  vocabulary?: WordPair[];
  grammarNotes?: string[];
}

export interface MatchPair {
  id: string;
  imageUrl?: string;
  imageAlt: string;
  label?: string;
  correctWordId: string;
}

export interface MatchExerciseConfig {
  type: "match";
  title: string;
  instruction: string;
  pairs: MatchPair[];
  words: WordBankItem[];
}

export interface DialogueSegmentText {
  kind: "text";
  value: string;
}

export interface DialogueSegmentBlank {
  kind: "blank";
  id: string;
  correctWordId: string;
  width?: "sm" | "md" | "lg";
}

export interface DialogueLine {
  speaker: string;
  segments: Array<DialogueSegmentText | DialogueSegmentBlank>;
}

export interface DialogueFillExerciseConfig {
  type: "dialogue-fill";
  title: string;
  instruction: string;
  image?: { url: string; alt: string };
  wordBank: WordBankItem[];
  lines: DialogueLine[];
}

export interface SentenceWithBlank {
  id: string;
  parts: Array<
    | { kind: "text"; value: string }
    | { kind: "blank"; id: string; correctWordId: string; width?: "sm" | "md" | "lg" }
  >;
}

export interface SentenceDragExerciseConfig {
  type: "sentence-drag";
  title: string;
  instruction: string;
  wordBank: WordBankItem[];
  sentences: SentenceWithBlank[];
}

export interface CategoryColumn {
  id: string;
  label: string;
}

export interface CategorizeItem {
  id: string;
  label: string;
  correctCategoryId: string;
}

export interface CategorizeExerciseConfig {
  type: "categorize";
  title: string;
  instruction: string;
  categories: CategoryColumn[];
  items: CategorizeItem[];
}

export interface SelectOption {
  id: string;
  label: string;
}

export interface DropdownQuestion {
  id: string;
  parts: Array<
    | { kind: "text"; value: string }
    | { kind: "select"; id: string; options: SelectOption[]; correctOptionId: string }
  >;
}

export interface DropdownExerciseConfig {
  type: "dropdown";
  title: string;
  instruction: string;
  image?: { url: string; alt: string };
  questions: DropdownQuestion[];
}

export interface ReorderLine {
  id: string;
  text: string;
}

export interface ReorderExerciseConfig {
  type: "reorder";
  title: string;
  instruction: string;
  image?: { url: string; alt: string };
  lines: ReorderLine[];
  correctOrder: string[];
  fixedFirst?: boolean;
}

export interface ReadingPrompt {
  id: string;
  label: string;
  correctAnswers: string[];
  alternatives?: string[];
}

export interface ReadingFillExerciseConfig {
  type: "reading-fill";
  title: string;
  instruction: string;
  image?: { url: string; alt: string };
  passage: string;
  prompts: ReadingPrompt[];
}

export interface ExtendedReadingExerciseConfig {
  type: "extended-reading";
  title: string;
  instruction: string;
  image?: { url: string; alt: string };
  passage: string;
  prompts: ReadingPrompt[];
}

export interface SelfWritingExerciseConfig {
  type: "self-writing";
  title: string;
  instruction: string;
  promptHints?: string[];
  sampleTitle: string;
  sample: string;
}

export type PracticeScreenConfig =
  | MatchExerciseConfig
  | DialogueFillExerciseConfig
  | SentenceDragExerciseConfig
  | CategorizeExerciseConfig
  | DropdownExerciseConfig
  | ReorderExerciseConfig
  | ReadingFillExerciseConfig
  | ExtendedReadingExerciseConfig
  | SelfWritingExerciseConfig;

export interface PracticeLesson {
  meta: PracticeLessonMeta;
  hints: PracticeHints;
  screens: PracticeScreenConfig[];
}

export interface ScreenState {
  answers: Record<string, string>;
  order?: string[];
  feedback: Record<string, ItemState>;
  checked: boolean;
  passed: boolean;
  lockedIds: string[];
  wrongAttempts: number;
  answerKeyRevealed: boolean;
}

export interface ScreenValidation {
  allCorrect: boolean;
  pendingCount: number;
  feedback: Record<string, ItemState>;
  lockedIds: string[];
}
