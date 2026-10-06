"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { getPracticeLesson } from "@/data/practice";
import {
  createInitialScreenState,
  createInitialScreenStates,
} from "@/lib/practice/create-screen-state";
import {
  shufflePracticeScreens,
  shuffleScreen,
} from "@/lib/practice/shuffle-screen";
import type { PracticeScreenConfig } from "@/types/practice";
import { applyAnswerKey } from "@/lib/practice/apply-answer-key";
import {
  getPendingCount,
  isInstantCorrect,
  validateScreen,
} from "@/lib/practice/validate-screen";
import type { ItemState, PracticeLesson, ScreenState } from "@/types/practice";

function moveItem<T>(items: T[], from: number, to: number): T[] {
  const next = [...items];
  const [item] = next.splice(from, 1);
  next.splice(to, 0, item);
  return next;
}

function buildShuffledSession(month: number, day: number) {
  const lesson = getPracticeLesson(month, day);
  if (!lesson) {
    return { screens: [] as PracticeScreenConfig[], states: [] as ScreenState[] };
  }

  const screens = shufflePracticeScreens(lesson.screens);
  return { screens, states: createInitialScreenStates(screens) };
}

export function usePracticeSession(month: number, day: number) {
  const lesson = useMemo(() => getPracticeLesson(month, day), [month, day]);
  const skipDayChangeEffectRef = useRef(true);
  const [{ screens: shuffledScreens, states: screenStates }, setSession] =
    useState(() => buildShuffledSession(month, day));
  const [currentScreen, setCurrentScreen] = useState(0);
  const [hintOpen, setHintOpen] = useState(false);
  const [selectedWordId, setSelectedWordId] = useState<string | null>(null);
  const [showAnswerKey, setShowAnswerKey] = useState(false);

  useEffect(() => {
    if (skipDayChangeEffectRef.current) {
      skipDayChangeEffectRef.current = false;
      return;
    }

    setSession(buildShuffledSession(month, day));
    setCurrentScreen(0);
    setSelectedWordId(null);
    setShowAnswerKey(false);
    setHintOpen(false);
  }, [month, day]);

  const screen = shuffledScreens[currentScreen];
  const state = screenStates[currentScreen];

  const validation = useMemo(() => {
    if (!screen || !state) {
      return {
        allCorrect: false,
        pendingCount: 0,
        feedback: {},
        lockedIds: [],
      };
    }
    return validateScreen(screen, state);
  }, [screen, state]);

  const updateCurrentState = useCallback(
    (updater: (prev: ScreenState) => ScreenState) => {
      setSession((prev) => ({
        ...prev,
        states: prev.states.map((entry, index) =>
          index === currentScreen ? updater(entry) : entry,
        ),
      }));
    },
    [currentScreen],
  );

  const assignAnswer = useCallback(
    (itemId: string, value: string) => {
      if (!screen) return;

      updateCurrentState((prev) => {
        if (prev.passed) return prev;

        const instant = isInstantCorrect(screen, itemId, value);
        const feedback: Record<string, ItemState> = {
          ...prev.feedback,
          [itemId]: instant ? "correct" : "filled",
        };

        return {
          ...prev,
          answers: { ...prev.answers, [itemId]: value },
          feedback,
          checked: false,
        };
      });
      setSelectedWordId(null);
    },
    [screen, updateCurrentState],
  );

  const clearAnswer = useCallback(
    (itemId: string) => {
      updateCurrentState((prev) => {
        if (prev.passed) return prev;

        const answers = { ...prev.answers };
        const feedback = { ...prev.feedback };
        delete answers[itemId];
        delete feedback[itemId];
        return { ...prev, answers, feedback, checked: false };
      });
    },
    [updateCurrentState],
  );

  const setTextAnswer = useCallback(
    (itemId: string, value: string) => {
      if (!screen) return;

      updateCurrentState((prev) => {
        if (prev.passed) return prev;

        if (screen.type === "self-writing") {
          return {
            ...prev,
            answers: { ...prev.answers, [itemId]: value },
            feedback: {
              ...prev.feedback,
              [itemId]: value.trim() ? "filled" : "empty",
            },
            checked: false,
          };
        }

        const instant =
          value.trim().length > 0 && isInstantCorrect(screen, itemId, value);
        return {
          ...prev,
          answers: { ...prev.answers, [itemId]: value },
          feedback: {
            ...prev.feedback,
            [itemId]: instant ? "correct" : value ? "filled" : "empty",
          },
          checked: false,
        };
      });
    },
    [screen, updateCurrentState],
  );

  const reorderLines = useCallback(
    (fromIndex: number, toIndex: number) => {
      updateCurrentState((prev) => {
        if (prev.passed || !prev.order) return prev;

        const movingId = prev.order[fromIndex];
        if (prev.lockedIds.includes(movingId)) return prev;

        return {
          ...prev,
          order: moveItem(prev.order, fromIndex, toIndex),
          checked: false,
        };
      });
    },
    [updateCurrentState],
  );

  const checkAnswers = useCallback(() => {
    if (!screen) return;

    updateCurrentState((prev) => {
      const result = validateScreen(screen, { ...prev, checked: true });
      const isSelfWriting = screen.type === "self-writing";

      return {
        ...prev,
        checked: true,
        passed: result.allCorrect,
        feedback: result.feedback,
        lockedIds: result.lockedIds,
        wrongAttempts:
          isSelfWriting || result.allCorrect
            ? prev.wrongAttempts
            : prev.wrongAttempts + 1,
      };
    });
  }, [screen, updateCurrentState]);

  const revealAnswerKey = useCallback(() => {
    if (!screen) return;

    updateCurrentState((prev) => applyAnswerKey(screen, prev));
    setShowAnswerKey(true);
    setSelectedWordId(null);
  }, [screen, updateCurrentState]);

  const resetScreen = useCallback(() => {
    if (!lesson) return;

    const reshuffled = shuffleScreen(lesson.screens[currentScreen]);
    setSession((prev) => ({
      screens: prev.screens.map((entry, index) =>
        index === currentScreen ? reshuffled : entry,
      ),
      states: prev.states.map((entry, index) =>
        index === currentScreen
          ? createInitialScreenState(reshuffled)
          : entry,
      ),
    }));
    setSelectedWordId(null);
    setShowAnswerKey(false);
  }, [currentScreen, lesson]);

  const goToScreen = useCallback((index: number) => {
    if (!lesson) return;
    setCurrentScreen(
      Math.max(0, Math.min(index, shuffledScreens.length - 1)),
    );
    setSelectedWordId(null);
    setShowAnswerKey(false);
  }, [lesson, shuffledScreens.length]);

  const goNext = useCallback(() => {
    if (!screenStates[currentScreen]?.passed) return;
    goToScreen(currentScreen + 1);
  }, [currentScreen, goToScreen, screenStates]);

  const goPrev = useCallback(() => {
    goToScreen(currentScreen - 1);
  }, [currentScreen, goToScreen]);

  const completedScreens = useMemo(
    () =>
      screenStates
        .map((entry, index) => (entry.passed ? index + 1 : null))
        .filter((value): value is number => value !== null),
    [screenStates],
  );

  const canCheck = validation.pendingCount === 0 && !state?.passed;
  const canNext =
    Boolean(state?.passed) && currentScreen < shuffledScreens.length - 1;
  const isSelfWriting = screen?.type === "self-writing";
  const canRevealAnswerKey = Boolean(
    !isSelfWriting &&
      state &&
      !state.passed &&
      !state.answerKeyRevealed &&
      state.wrongAttempts >= 3,
  );

  const allScreensPassed = useMemo(
    () =>
      screenStates.length > 0 && screenStates.every((entry) => entry.passed),
    [screenStates],
  );

  return {
    lesson: lesson as PracticeLesson | null,
    screen,
    state,
    currentScreen,
    validation,
    hintOpen,
    selectedWordId,
    showAnswerKey,
    completedScreens,
    pendingCount: screen && state ? getPendingCount(screen, state) : 0,
    canCheck,
    canNext,
    canRevealAnswerKey,
    isSelfWriting,
    allScreensPassed,
    setHintOpen,
    setSelectedWordId,
    setShowAnswerKey,
    assignAnswer,
    clearAnswer,
    setTextAnswer,
    reorderLines,
    checkAnswers,
    revealAnswerKey,
    resetScreen,
    goNext,
    goPrev,
    goToScreen,
  };
}
