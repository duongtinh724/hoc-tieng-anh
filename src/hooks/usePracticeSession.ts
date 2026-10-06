"use client";

import { useCallback, useMemo, useState } from "react";
import { getPracticeLesson } from "@/data/practice";
import {
  createInitialScreenStates,
} from "@/lib/practice/create-screen-state";
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

export function usePracticeSession(month: number, day: number) {
  const lesson = useMemo(() => getPracticeLesson(month, day), [month, day]);
  const [currentScreen, setCurrentScreen] = useState(0);
  const [screenStates, setScreenStates] = useState<ScreenState[]>(() =>
    lesson ? createInitialScreenStates(lesson.screens) : [],
  );
  const [hintOpen, setHintOpen] = useState(false);
  const [selectedWordId, setSelectedWordId] = useState<string | null>(null);
  const [showAnswerKey, setShowAnswerKey] = useState(false);

  const screen = lesson?.screens[currentScreen];
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
      setScreenStates((prev) =>
        prev.map((entry, index) =>
          index === currentScreen ? updater(entry) : entry,
        ),
      );
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
    setScreenStates((prev) =>
      prev.map((entry, index) =>
        index === currentScreen
          ? createInitialScreenStates([lesson.screens[index]])[0]
          : entry,
      ),
    );
    setSelectedWordId(null);
    setShowAnswerKey(false);
  }, [currentScreen, lesson]);

  const goToScreen = useCallback((index: number) => {
    if (!lesson) return;
    setCurrentScreen(Math.max(0, Math.min(index, lesson.screens.length - 1)));
    setSelectedWordId(null);
    setShowAnswerKey(false);
  }, [lesson]);

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
  const canNext = Boolean(state?.passed) && currentScreen < (lesson?.screens.length ?? 0) - 1;
  const isSelfWriting = screen?.type === "self-writing";
  const canRevealAnswerKey = Boolean(
    !isSelfWriting &&
      state &&
      !state.passed &&
      !state.answerKeyRevealed &&
      state.wrongAttempts >= 3,
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
