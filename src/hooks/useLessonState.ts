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
import { hasPracticeLesson } from "@/data/practice";
import { readAppUrl, writeAppUrl } from "@/lib/app-url";
import { getPracticeCompletionKey } from "@/lib/practice/progress";
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

function applyUrlView(raw: LessonState): LessonState {
  const url = readAppUrl();
  const month = url.month ?? raw.month;
  const page = url.page ?? raw.activeSection ?? "lesson";
  const lessonDay = url.lesson;

  const openPracticeDay =
    page === "practice" &&
    typeof lessonDay === "number" &&
    hasPracticeLesson(month, lessonDay)
      ? lessonDay
      : null;

  const selectedDay =
    page === "lesson" && typeof lessonDay === "number"
      ? lessonDay
      : raw.selectedDay;
  const found = getDayByNumber(month, selectedDay);

  return {
    ...raw,
    month,
    selectedDay: found?.day ?? selectedDay,
    week: found?.week ?? raw.week,
    activeSection: openPracticeDay !== null ? "practice" : page,
    openPracticeDay,
  };
}

function loadState(): LessonState {
  if (typeof window === "undefined") return DEFAULT_STATE;

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return applyUrlView(JSON.parse(raw) as LessonState);
  } catch {
    // ignore invalid stored state
  }

  try {
    const legacy = localStorage.getItem(LEGACY_STORAGE_KEY);
    if (legacy) return applyUrlView(migrateLegacy(JSON.parse(legacy) as LegacyState));
  } catch {
    // ignore invalid legacy state
  }

  return applyUrlView(DEFAULT_STATE);
}

function getDoneDays(state: LessonState): number[] {
  return state.progress[String(state.month)] ?? [];
}

export function useLessonState() {
  const [state, setState] = useState<LessonState>(DEFAULT_STATE);
  const [hydrated, setHydrated] = useState(false);
  const activeSection: AppSection = state.activeSection ?? "lesson";

  useEffect(() => {
    setState(loadState());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    writeAppUrl({
      month: state.month,
      page: state.openPracticeDay ? "practice" : (state.activeSection ?? "lesson"),
      lesson:
        state.openPracticeDay ??
        (state.activeSection === "lesson" ? state.selectedDay : null),
    });
  }, [state, hydrated]);

  useEffect(() => {
    if (!hydrated) return;

    const onPopState = () => {
      setState((prev) => applyUrlView(prev));
    };

    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, [hydrated]);

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

  const setActiveSection = useCallback((section: AppSection) => {
    setState((prev) => ({
      ...prev,
      activeSection: section,
      openPracticeDay: section === "practice" ? prev.openPracticeDay : null,
    }));
  }, []);

  const setOpenPracticeDay = useCallback((day: number | null) => {
    setState((prev) => ({
      ...prev,
      activeSection: "practice",
      openPracticeDay: day,
    }));
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

  const recordPracticeCompletion = useCallback((month: number, day: number) => {
    const key = getPracticeCompletionKey(month, day);
    setState((prev) => {
      const completions = prev.practiceCompletions ?? {};
      return {
        ...prev,
        practiceCompletions: {
          ...completions,
          [key]: (completions[key] ?? 0) + 1,
        },
      };
    });
  }, []);

  const recordQuizScore = useCallback((month: number, day: number, score: number) => {
    const key = getPracticeCompletionKey(month, day);
    setState((prev) => ({
      ...prev,
      quizScores: {
        ...(prev.quizScores ?? {}),
        [key]: score,
      },
    }));
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
    openPracticeDay: state.openPracticeDay ?? null,
    setOpenPracticeDay,
    setMonth,
    setWeek,
    setSelectedDay,
    goToNextDay,
    toggleDayDone,
    recordPracticeCompletion,
    practiceCompletions: state.practiceCompletions ?? {},
    quizScores: state.quizScores ?? {},
    recordQuizScore,
  };
}
