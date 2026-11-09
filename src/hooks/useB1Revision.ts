"use client";

import { useCallback, useEffect, useState } from "react";
import {
  EMPTY_B1_STORE,
  loadB1Store,
  markB1DayStarted,
  retryB1Day,
  saveB1Answer,
  saveB1Store,
  submitB1Day,
} from "@/lib/b1-revision";
import type { B1Choice, B1Day, B1Store } from "@/types/b1-revision";

export function useB1Revision() {
  const [store, setStore] = useState<B1Store>(EMPTY_B1_STORE);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setStore(loadB1Store());
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    saveB1Store(store);
  }, [ready, store]);

  const startDay = useCallback((day: number) => {
    setStore((current) => markB1DayStarted(current, day));
  }, []);

  const saveAnswer = useCallback((day: number, questionId: string, choice: B1Choice) => {
    setStore((current) => saveB1Answer(current, day, questionId, choice));
  }, []);

  const submitDay = useCallback((day: B1Day) => {
    setStore((current) => submitB1Day(current, day));
  }, []);

  const retryDay = useCallback((day: number) => {
    setStore((current) => retryB1Day(current, day));
  }, []);

  return { store, ready, startDay, saveAnswer, submitDay, retryDay };
}
