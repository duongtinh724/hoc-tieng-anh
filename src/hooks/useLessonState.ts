"use client";

import { useCallback, useEffect, useState } from "react";
import { getDayByNumber, getDaysByWeek, getNextIncompleteDay } from "@/data/days";
import { DEFAULT_STATE, STORAGE_KEY } from "@/lib/constants";
import type { LessonState } from "@/types/lesson";

function loadState(): LessonState {
  if (typeof window === "undefined") return DEFAULT_STATE;

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw) as LessonState;
  } catch {
    // ignore invalid stored state
  }

  return DEFAULT_STATE;
}

export function useLessonState() {
  const [state, setState] = useState<LessonState>(DEFAULT_STATE);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setState(loadState());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state, hydrated]);

  const setWeek = useCallback((week: number) => {
    setState((prev) => {
      const pool = getDaysByWeek(week);
      const selectedDay = pool.some((day) => day.day === prev.selectedDay)
        ? prev.selectedDay
        : pool[0].day;

      return { ...prev, week, selectedDay };
    });
  }, []);

  const setSelectedDay = useCallback((selectedDay: number) => {
    setState((prev) => ({ ...prev, selectedDay }));
  }, []);

  const goToNextDay = useCallback(() => {
    setState((prev) => {
      const day = getNextIncompleteDay(prev.doneDays);
      const found = getDayByNumber(day);
      return { ...prev, selectedDay: day, week: found.week };
    });
  }, []);

  const toggleDayDone = useCallback((day: number, done: boolean) => {
    setState((prev) => {
      if (done && !prev.doneDays.includes(day)) {
        return {
          ...prev,
          doneDays: [...prev.doneDays, day].sort((a, b) => a - b),
        };
      }

      if (!done) {
        return {
          ...prev,
          doneDays: prev.doneDays.filter((item) => item !== day),
        };
      }

      return prev;
    });
  }, []);

  const nextDay = getNextIncompleteDay(state.doneDays);
  const visibleDays = getDaysByWeek(state.week);
  const currentLesson = getDayByNumber(state.selectedDay);

  return {
    hydrated,
    state,
    nextDay,
    visibleDays,
    currentLesson,
    setWeek,
    setSelectedDay,
    goToNextDay,
    toggleDayDone,
  };
}
