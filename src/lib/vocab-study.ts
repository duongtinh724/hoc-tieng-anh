import { getAvailableMonths, getDaysForMonth, getMonthConfig } from "@/data/curriculum";
import { getIpa } from "@/lib/vocab-ipa";
import type { DayLesson, ListenItem } from "@/types/lesson";
import type {
  VocabCardState,
  VocabDayState,
  VocabDayStatus,
  VocabItem,
  VocabStatus,
  VocabStore,
} from "@/types/vocab";

export const VOCAB_STORAGE_KEY = "tieng-anh-vocab-v1";
export const REVIEW_INTERVAL_DAYS = [1, 3, 7, 14, 30] as const;
export const DAY_MS = 24 * 60 * 60 * 1000;

export const EMPTY_VOCAB_STORE: VocabStore = {
  version: 1,
  cards: {},
  days: {},
};

export const EMPTY_CARD: VocabCardState = {
  status: "new",
  needReview: false,
  viewed: false,
  known: false,
  correctCount: 0,
  incorrectCount: 0,
  reviewStep: 0,
  lastReviewedAt: null,
  nextReviewAt: null,
};

export const EMPTY_DAY: VocabDayState = {
  startedAt: null,
  completedAt: null,
  difficulty: null,
  note: "",
  quizCorrect: 0,
  quizTotal: 0,
};

export function dayKey(month: number, day: number): string {
  return `${month}-${day}`;
}

export function cardKey(month: number, day: number, en: string): string {
  return `${month}-${day}:${en.trim().toLowerCase()}`;
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function exampleTokens(en: string): string[] {
  return en
    .split(/[/—–]/)
    .map((part) => part.replace(/\s+/g, " ").trim())
    .filter((part) => part.length > 0 && part.split(/\s+/).length <= 4);
}

function findListenExample(en: string, listen: ListenItem[]): ListenItem | undefined {
  const tokens = exampleTokens(en);
  if (tokens.length === 0 || listen.length === 0) return undefined;

  for (const token of tokens) {
    const pattern = new RegExp(`\\b${escapeRegExp(token)}\\b`, "i");
    const exact = listen.find((item) => pattern.test(item.en));
    if (exact) return exact;
  }

  for (const token of tokens) {
    if (token.length < 3) continue;
    const lower = token.toLowerCase();
    const loose = listen.find((item) => item.en.toLowerCase().includes(lower));
    if (loose) return loose;
  }

  return undefined;
}

export function isReviewLesson(lesson: DayLesson): boolean {
  return /ôn|kiểm tra/i.test(lesson.title);
}

export function estimatedMinutes(wordCount: number): number {
  if (wordCount <= 0) return 5;
  return Math.min(10, Math.max(6, wordCount * 2));
}

export function toVocabItem(month: number, lesson: DayLesson, word: { en: string; vi: string }): VocabItem {
  const example = findListenExample(word.en, lesson.listen);
  return {
    key: cardKey(month, lesson.day, word.en),
    month,
    day: lesson.day,
    week: lesson.week,
    lessonTitle: lesson.title,
    en: word.en,
    vi: word.vi,
    ipa: getIpa(word.en),
    example: example ? { en: example.en, vi: example.vi } : undefined,
  };
}

export function listVocabForDay(month: number, day: number): VocabItem[] {
  const lesson = getDaysForMonth(month).find((item) => item.day === day);
  if (!lesson) return [];
  return lesson.words.map((word) => toVocabItem(month, lesson, word));
}

export function listVocabForMonth(month: number): VocabItem[] {
  return getDaysForMonth(month).flatMap((lesson) =>
    lesson.words.map((word) => toVocabItem(month, lesson, word)),
  );
}

export function loadVocabStore(): VocabStore {
  if (typeof window === "undefined") return EMPTY_VOCAB_STORE;
  try {
    const raw = window.localStorage.getItem(VOCAB_STORAGE_KEY);
    if (!raw) return EMPTY_VOCAB_STORE;
    const parsed = JSON.parse(raw) as VocabStore;
    if (!parsed || parsed.version !== 1 || typeof parsed.cards !== "object") {
      return EMPTY_VOCAB_STORE;
    }
    return {
      version: 1,
      cards: parsed.cards ?? {},
      days: parsed.days ?? {},
    };
  } catch {
    return EMPTY_VOCAB_STORE;
  }
}

export function saveVocabStore(store: VocabStore): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(VOCAB_STORAGE_KEY, JSON.stringify(store));
}

export function getCardState(store: VocabStore, key: string): VocabCardState {
  return store.cards[key] ?? EMPTY_CARD;
}

export function getDayState(store: VocabStore, month: number, day: number): VocabDayState {
  return store.days[dayKey(month, day)] ?? EMPTY_DAY;
}

export function isVocabDayStarted(store: VocabStore, month: number, day: number): boolean {
  if (getDayState(store, month, day).startedAt != null) return true;
  return listVocabForDay(month, day).some((item) => {
    const card = getCardState(store, item.key);
    return card.viewed || card.correctCount > 0 || card.incorrectCount > 0;
  });
}

export function markDayStarted(store: VocabStore, month: number, day: number, now = Date.now()): VocabStore {
  const current = getDayState(store, month, day);
  if (current.startedAt != null) return store;
  return {
    ...store,
    days: {
      ...store.days,
      [dayKey(month, day)]: {
        ...current,
        startedAt: now,
      },
    },
  };
}

export function dayStatus(
  store: VocabStore,
  items: VocabItem[],
  fallback?: { month: number; day: number },
): VocabDayStatus {
  const month = items[0]?.month ?? fallback?.month;
  const day = items[0]?.day ?? fallback?.day;
  if (month == null || day == null) return "not-started";
  const state = getDayState(store, month, day);
  const viewed = items.filter((item) => getCardState(store, item.key).viewed).length;
  if (state.completedAt || (items.length > 0 && viewed >= items.length)) return "completed";
  if (viewed > 0 || state.startedAt != null) return "in-progress";
  return "not-started";
}

export function isDue(card: VocabCardState, now = Date.now()): boolean {
  if (card.status === "mastered") return false;
  if (card.needReview) return true;
  if (card.nextReviewAt != null) return card.nextReviewAt <= now;
  return false;
}

export function listDueItems(store: VocabStore, month: number, now = Date.now()): VocabItem[] {
  return listVocabForMonth(month).filter((item) => isDue(getCardState(store, item.key), now));
}

export function listDueItemsAll(store: VocabStore, now = Date.now()): VocabItem[] {
  return getAvailableMonths().flatMap((month) => listDueItems(store, month.id, now));
}

export function statusLabel(status: VocabStatus | VocabDayStatus): string {
  switch (status) {
    case "new":
      return "Mới";
    case "learning":
      return "Đang học";
    case "reviewing":
      return "Đang ôn";
    case "mastered":
      return "Đã thuộc";
    case "not-started":
      return "Chưa học";
    case "in-progress":
      return "Đang học";
    case "completed":
      return "Đã xong";
    default:
      return status;
  }
}

function patchCard(store: VocabStore, key: string, patch: Partial<VocabCardState>): VocabStore {
  const current = getCardState(store, key);
  return {
    ...store,
    cards: {
      ...store.cards,
      [key]: { ...current, ...patch },
    },
  };
}

export function markCardViewed(store: VocabStore, item: VocabItem): VocabStore {
  const current = getCardState(store, item.key);
  if (current.viewed) return store;
  const day = getDayState(store, item.month, item.day);
  const nextDay: VocabDayState = {
    ...day,
    startedAt: day.startedAt ?? Date.now(),
  };
  return {
    ...patchCard(store, item.key, {
      viewed: true,
      status: current.status === "new" ? "learning" : current.status,
    }),
    days: {
      ...store.days,
      [dayKey(item.month, item.day)]: nextDay,
    },
  };
}

export function markCardKnown(store: VocabStore, key: string, now = Date.now()): VocabStore {
  const current = getCardState(store, key);
  const step = Math.min(current.reviewStep, REVIEW_INTERVAL_DAYS.length - 1);
  const interval = REVIEW_INTERVAL_DAYS[step];
  const nextStep = Math.min(step + 1, REVIEW_INTERVAL_DAYS.length - 1);
  const mastered = current.correctCount + 1 >= 2 && nextStep >= REVIEW_INTERVAL_DAYS.length - 1;
  return patchCard(store, key, {
    viewed: true,
    known: true,
    needReview: false,
    correctCount: current.correctCount + 1,
    reviewStep: nextStep,
    lastReviewedAt: now,
    nextReviewAt: now + interval * DAY_MS,
    status: mastered ? "mastered" : "reviewing",
  });
}

export function markCardNeedReview(store: VocabStore, key: string, now = Date.now()): VocabStore {
  return patchCard(store, key, {
    viewed: true,
    known: false,
    needReview: true,
    incorrectCount: getCardState(store, key).incorrectCount + 1,
    reviewStep: 0,
    lastReviewedAt: now,
    nextReviewAt: now,
    status: "reviewing",
  });
}

export function recordQuizResult(
  store: VocabStore,
  month: number,
  day: number,
  correct: number,
  total: number,
): VocabStore {
  const current = getDayState(store, month, day);
  return {
    ...store,
    days: {
      ...store.days,
      [dayKey(month, day)]: {
        ...current,
        startedAt: current.startedAt ?? Date.now(),
        quizCorrect: correct,
        quizTotal: total,
      },
    },
  };
}

export function completeVocabDay(store: VocabStore, month: number, day: number, now = Date.now()): VocabStore {
  const current = getDayState(store, month, day);
  return {
    ...store,
    days: {
      ...store.days,
      [dayKey(month, day)]: {
        ...current,
        startedAt: current.startedAt ?? now,
        completedAt: now,
      },
    },
  };
}

export function setDayDifficulty(
  store: VocabStore,
  month: number,
  day: number,
  difficulty: VocabDayState["difficulty"],
): VocabStore {
  const current = getDayState(store, month, day);
  return {
    ...store,
    days: {
      ...store.days,
      [dayKey(month, day)]: { ...current, difficulty },
    },
  };
}

export function setDayNote(store: VocabStore, month: number, day: number, note: string): VocabStore {
  const current = getDayState(store, month, day);
  return {
    ...store,
    days: {
      ...store.days,
      [dayKey(month, day)]: { ...current, note },
    },
  };
}

export function resetVocabDay(store: VocabStore, items: VocabItem[]): VocabStore {
  if (items.length === 0) return store;
  const cards = { ...store.cards };
  for (const item of items) {
    delete cards[item.key];
  }
  const days = { ...store.days };
  const uniqueDays = new Set(items.map((item) => dayKey(item.month, item.day)));
  if (uniqueDays.size === 1) {
    delete days[dayKey(items[0].month, items[0].day)];
  }
  return { ...store, cards, days };
}

export function normalizeVocabAnswer(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/[.!?,;:'"“”]/g, "")
    .replace(/\s+/g, " ");
}

export function checkVocabAnswer(user: string, item: VocabItem, mode: "en-vi" | "vi-en"): boolean {
  const answer = normalizeVocabAnswer(user);
  if (!answer) return false;
  if (mode === "vi-en") return answer === normalizeVocabAnswer(item.en);
  const full = normalizeVocabAnswer(item.vi);
  const core = normalizeVocabAnswer(item.vi.split(/[—–]/)[0] ?? item.vi);
  return answer === full || answer === core || (answer.length >= 2 && (full.includes(answer) || core.includes(answer)));
}

export function monthVocabStats(store: VocabStore, month: number) {
  const items = listVocabForMonth(month);
  const days = getDaysForMonth(month);
  const byDay = days.map((lesson) => {
    const dayItems = items.filter((item) => item.day === lesson.day);
    return {
      lesson,
      items: dayItems,
      status: dayStatus(store, dayItems, { month, day: lesson.day }),
      viewed: dayItems.filter((item) => getCardState(store, item.key).viewed).length,
    };
  });
  const completed = byDay.filter((item) => item.status === "completed").length;
  const inProgress = byDay.filter((item) => item.status === "in-progress").length;
  const notStarted = byDay.filter((item) => item.status === "not-started").length;
  const mastered = items.filter((item) => getCardState(store, item.key).status === "mastered").length;
  const due = listDueItems(store, month);
  const continueDay =
    byDay.find((item) => item.status === "in-progress")?.lesson.day ??
    byDay.find((item) => item.status === "not-started" && item.items.length > 0)?.lesson.day ??
    due[0]?.day ??
    1;
  const currentWeek =
    byDay.find((item) => item.status === "in-progress")?.lesson.week ??
    getMonthConfig(month).totalWeeks;

  return {
    items,
    days: byDay,
    totalDays: days.length,
    completed,
    inProgress,
    notStarted,
    totalWords: items.length,
    mastered,
    due,
    percent: days.length ? Math.round((completed / days.length) * 100) : 0,
    continueDay,
    currentWeek,
  };
}
