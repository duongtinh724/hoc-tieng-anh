import type { WordPair } from "@/types/lesson";

/** Ngày sau buổi học từ mới thì từ đó được nhắc lại. */
const REVIEW_AFTER_DAYS = [1, 3, 7];
const MAX_REVIEW_WORDS = 3;

function shuffleWithSeed<T>(items: T[], seed: number): T[] {
  const next = [...items];
  let value = seed || 1;
  for (let index = next.length - 1; index > 0; index -= 1) {
    value = (value * 16807) % 2147483647;
    const swap = value % (index + 1);
    [next[index], next[swap]] = [next[swap], next[index]];
  }
  return next;
}

export function mixVocabForDay(days: { day: number; words: WordPair[] }[], day: number, todayWords: WordPair[]): WordPair[] {
  const byDay = new Map(days.map((item) => [item.day, item.words]));
  const seen = new Set(todayWords.map((word) => word.en.toLowerCase()));
  const extra: WordPair[] = [];

  for (const gap of REVIEW_AFTER_DAYS) {
    const source = byDay.get(day - gap) ?? [];
    for (const word of source) {
      if (extra.length >= MAX_REVIEW_WORDS) break;
      const key = word.en.toLowerCase();
      if (seen.has(key)) continue;
      seen.add(key);
      extra.push({ en: word.en, vi: word.vi });
    }
  }

  return shuffleWithSeed([...todayWords, ...extra], day * 97);
}
