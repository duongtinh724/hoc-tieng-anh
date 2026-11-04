"use client";

import { useCallback, useEffect, useState } from "react";
import {
  EMPTY_VOCAB_STORE,
  completeVocabDay,
  loadVocabStore,
  markCardKnown,
  markCardNeedReview,
  markCardViewed,
  markDayStarted,
  recordQuizResult,
  resetVocabDay,
  saveVocabStore,
  setDayDifficulty,
  setDayNote,
} from "@/lib/vocab-study";
import type { VocabDifficulty, VocabItem, VocabStore } from "@/types/vocab";

export function useVocabProgress() {
  const [store, setStore] = useState<VocabStore>(EMPTY_VOCAB_STORE);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setStore(loadVocabStore());
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    saveVocabStore(store);
  }, [ready, store]);

  const update = useCallback((recipe: (current: VocabStore) => VocabStore) => {
    setStore((current) => recipe(current));
  }, []);

  const markViewed = useCallback(
    (item: VocabItem) => update((current) => markCardViewed(current, item)),
    [update],
  );

  const startDay = useCallback(
    (month: number, day: number) => update((current) => markDayStarted(current, month, day)),
    [update],
  );

  return {
    store,
    ready,
    markViewed,
    startDay,
    markKnown: (key: string) => update((current) => markCardKnown(current, key)),
    markNeedReview: (key: string) => update((current) => markCardNeedReview(current, key)),
    saveQuiz: (month: number, day: number, correct: number, total: number) =>
      update((current) => recordQuizResult(current, month, day, correct, total)),
    completeDay: (month: number, day: number) => update((current) => completeVocabDay(current, month, day)),
    setDifficulty: (month: number, day: number, difficulty: VocabDifficulty) =>
      update((current) => setDayDifficulty(current, month, day, difficulty)),
    saveNote: (month: number, day: number, note: string) =>
      update((current) => setDayNote(current, month, day, note)),
    resetDay: (items: VocabItem[]) => update((current) => resetVocabDay(current, items)),
  };
}
