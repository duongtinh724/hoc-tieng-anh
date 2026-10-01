"use client";

import { useCallback, useEffect, useState } from "react";
import { getMonthConfig } from "@/data/curriculum";
import {
  getDayByNumber,
  getDaysByWeek,
  getNextIncompleteDay,
} from "@/data/days";
import {
  DEFAULT_STATE,
  LEGACY_STORAGE_KEY,
  STORAGE_KEY,
} from "@/lib/constants";
import type { AppSection, LessonState } from "@/types/lesson";

interface LegacyState {
  week: number;
  selectedDay: number;
  doneDays: number[];
}

function migrateLegacy(raw: LegacyState): LessonState {
  return {
    month: 1,
    week: raw.week,
    selectedDay: raw.selectedDay,
    progress: { "1": raw.doneDays ?? [] },
  };
}

function loadState(): LessonState {
  if (typeof window === "undefined") return DEFAULT_STATE;

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw) as LessonState;
  } catch {
    // ignore invalid stored state
  }

  try {
    const legacy = localStorage.getItem(LEGACY_STORAGE_KEY);
    if (legacy) return migrateLegacy(JSON.parse(legacy) as LegacyState);
  } catch {
    // ignore invalid legacy state
  }

  return DEFAULT_STATE;
}

function getDoneDays(state: LessonState): number[] {
  return state.progress[String(state.month)] ?? [];
}

export function useLessonState() {
  const [state, setState] = useState<LessonState>(DEFAULT_STATE);
  const [hydrated, setHydrated] = useState(false);
  const [activeSection, setActiveSection] = useState<AppSection>("lesson");

  useEffect(() => {
    setState(loadState());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state, hydrated]);

  const doneDays = getDoneDays(state);
  const monthConfig = getMonthConfig(state.month);

  const setMonth = useCallback((month: number) => {
    const config = getMonthConfig(month);
    if (config.status !== "available") return;

    setState((prev) => {
      const days = getDaysByWeek(month, prev.week);
      const selectedDay = days.some((day) => day.day === prev.selectedDay)
        ? prev.selectedDay
        : 1;

      return { ...prev, month, selectedDay };
    });
    setActiveSection("lesson");
  }, []);

  const setWeek = useCallback((week: number) => {
    setState((prev) => {
      const pool = getDaysByWeek(prev.month, week);
      const selectedDay = pool.some((day) => day.day === prev.selectedDay)
        ? prev.selectedDay
        : pool[0]?.day ?? 1;

      return { ...prev, week, selectedDay };
    });
  }, []);

  const setSelectedDay = useCallback((selectedDay: number) => {
    setState((prev) => {
      const found = getDayByNumber(prev.month, selectedDay);
      return {
        ...prev,
        selectedDay,
        week: found?.week ?? prev.week,
      };
    });
    setActiveSection("lesson");
  }, []);

  const goToNextDay = useCallback(() => {
    setState((prev) => {
      const done = getDoneDays(prev);
      const day = getNextIncompleteDay(prev.month, done);
      const found = getDayByNumber(prev.month, day);
      return {
        ...prev,
        selectedDay: day,
        week: found?.week ?? prev.week,
      };
    });
    setActiveSection("lesson");
  }, []);

  const toggleDayDone = useCallback((day: number, done: boolean) => {
    setState((prev) => {
      const key = String(prev.month);
      const current = prev.progress[key] ?? [];

      if (done && !current.includes(day)) {
        return {
          ...prev,
          progress: {
            ...prev.progress,
            [key]: [...current, day].sort((a, b) => a - b),
          },
        };
      }

      if (!done) {
        return {
          ...prev,
          progress: {
            ...prev.progress,
            [key]: current.filter((item) => item !== day),
          },
        };
      }

      return prev;
    });
  }, []);

  const nextDay = getNextIncompleteDay(state.month, doneDays);
  const visibleDays = getDaysByWeek(state.month, state.week);
  const currentLesson = getDayByNumber(state.month, state.selectedDay);

  return {
    hydrated,
    state,
    doneDays,
    monthConfig,
    nextDay,
    visibleDays,
    currentLesson,
    activeSection,
    setActiveSection,
    setMonth,
    setWeek,
    setSelectedDay,
    goToNextDay,
    toggleDayDone,
  };
}
