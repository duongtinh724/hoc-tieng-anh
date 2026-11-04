import { getAvailableMonths, getDaysForMonth, getMonthConfig } from "@/data/curriculum";
import { getGlobalDay } from "@/data/curriculum/master-plan";
import { PREP_REVIEWS, REVIEW_MILESTONES } from "@/lib/review-plan";
import { REVIEW_AFTER_DAYS } from "@/lib/vocab-review";
import { isReviewLesson, isVocabDayStarted, listDueItemsAll } from "@/lib/vocab-study";
import type { VocabItem, VocabStore } from "@/types/vocab";

export const TODAY_REVIEW_SEEN_KEY = "tieng-anh-today-review-seen";

const GAP_LABEL: Record<number, string> = {
  1: "Học hôm qua",
  3: "Ôn sau 3 ngày",
  7: "Ôn sau 7 ngày",
};

export interface TodayReviewLesson {
  month: number;
  day: number;
  title: string;
  reasons: string[];
  words: { en: string; vi: string }[];
  dueCount: number;
  exam: boolean;
}

export interface TodayReview {
  studyMonth: number;
  studyDay: number;
  studyTitle: string;
  studyIsExam: boolean;
  examNote: string | null;
  prepNote: string | null;
  lessons: TodayReviewLesson[];
  dueWords: VocabItem[];
  hasReview: boolean;
}

export function calendarDayKey(now = new Date()): string {
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function hasSeenTodayReview(now = new Date()): boolean {
  if (typeof window === "undefined") return true;
  return window.localStorage.getItem(TODAY_REVIEW_SEEN_KEY) === calendarDayKey(now);
}

export function markTodayReviewSeen(now = new Date()): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(TODAY_REVIEW_SEEN_KEY, calendarDayKey(now));
}

export function todayReviewBadge(review: TodayReview | null): number {
  if (!review?.hasReview) return 0;
  return Math.max(review.lessons.length, 1);
}

function lessonAt(month: number, day: number) {
  const lesson = getDaysForMonth(month).find((item) => item.day === day);
  if (!lesson) return null;
  if (getMonthConfig(month).status !== "available") return null;
  return { month, day, lesson };
}

function lessonFromGlobalDay(globalDay: number) {
  if (globalDay < 1) return null;
  const month = Math.floor((globalDay - 1) / 30) + 1;
  const day = ((globalDay - 1) % 30) + 1;
  return lessonAt(month, day);
}

function previewWords(words: { en: string; vi: string }[]): { en: string; vi: string }[] {
  const seen = new Set<string>();
  const next: { en: string; vi: string }[] = [];
  for (const word of words) {
    const key = word.en.trim().toLowerCase();
    if (!key || seen.has(key)) continue;
    seen.add(key);
    next.push({ en: word.en, vi: word.vi });
    if (next.length >= 4) break;
  }
  return next;
}

function upsertLesson(
  map: Map<string, TodayReviewLesson>,
  entry: { month: number; day: number; title: string; exam: boolean },
  reason: string,
  words: { en: string; vi: string }[],
  dueCount: number,
) {
  const key = `${entry.month}-${entry.day}`;
  const current = map.get(key);
  if (current) {
    if (!current.reasons.includes(reason)) current.reasons.push(reason);
    current.dueCount += dueCount;
    current.words = previewWords([...current.words, ...words]);
    return;
  }
  map.set(key, {
    month: entry.month,
    day: entry.day,
    title: entry.title,
    reasons: [reason],
    words: previewWords(words),
    dueCount,
    exam: entry.exam,
  });
}

export function latestStartedLesson(store: VocabStore): { month: number; day: number } | null {
  let best: { month: number; day: number; global: number } | null = null;
  for (const month of getAvailableMonths()) {
    for (const lesson of getDaysForMonth(month.id)) {
      if (!isVocabDayStarted(store, month.id, lesson.day)) continue;
      const global = getGlobalDay(month.id, lesson.day);
      if (!best || global > best.global) {
        best = { month: month.id, day: lesson.day, global };
      }
    }
  }
  return best ? { month: best.month, day: best.day } : null;
}

export function getTodayReview(args: {
  month: number;
  nextDay: number;
  selectedDay: number;
  doneDays: number[];
  store: VocabStore;
  now?: number;
}): TodayReview {
  const { month, store } = args;
  const now = args.now ?? Date.now();
  const started = latestStartedLesson(store);
  const nextDay = started?.day ?? args.nextDay;
  const studyMonth = started?.month ?? month;
  const study = lessonAt(studyMonth, nextDay);
  const studyTitle = study?.lesson.title ?? `Ngày ${nextDay}`;
  const studyIsExam = study ? isReviewLesson(study.lesson) : false;
  const milestone =
    studyMonth === 1 ? REVIEW_MILESTONES.find((item) => item.day === nextDay) : undefined;
  const prep =
    studyMonth === 1 ? PREP_REVIEWS.find((item) => item.beforeDay === nextDay + 1) : undefined;

  const dueWords = listDueItemsAll(store, now).filter((word) =>
    isVocabDayStarted(store, word.month, word.day),
  );
  const lessons = new Map<string, TodayReviewLesson>();
  const globalDay = getGlobalDay(studyMonth, nextDay);

  if (started) {
    for (const gap of REVIEW_AFTER_DAYS) {
      const found = lessonFromGlobalDay(globalDay - gap);
      if (!found) continue;
      if (!isVocabDayStarted(store, found.month, found.day)) continue;
      upsertLesson(
        lessons,
        {
          month: found.month,
          day: found.day,
          title: found.lesson.title,
          exam: isReviewLesson(found.lesson),
        },
        GAP_LABEL[gap] ?? `Ôn sau ${gap} ngày`,
        found.lesson.words,
        0,
      );
    }
  }

  for (const word of dueWords) {
    const found = lessonAt(word.month, word.day);
    upsertLesson(
      lessons,
      {
        month: word.month,
        day: word.day,
        title: found?.lesson.title ?? word.lessonTitle,
        exam: found ? isReviewLesson(found.lesson) : false,
      },
      "Từ đến hạn ôn",
      [{ en: word.en, vi: word.vi }],
      1,
    );
  }

  const list = [...lessons.values()].sort((a, b) => {
    if (a.month !== b.month) return a.month - b.month;
    return b.day - a.day;
  });
  const hasReview = list.length > 0 || dueWords.length > 0;

  return {
    studyMonth,
    studyDay: nextDay,
    studyTitle,
    studyIsExam,
    examNote:
      hasReview && milestone
        ? `${milestone.title} · ôn ${milestone.coversDays}`
        : hasReview && studyIsExam
          ? studyTitle
          : null,
    prepNote:
      hasReview && prep && !studyIsExam ? `${prep.label}. ${prep.tasks[0] ?? ""}`.trim() : null,
    lessons: list,
    dueWords,
    hasReview,
  };
}
