import type { PracticeScreenConfig, ScreenState } from "@/types/practice";

export function createInitialScreenState(
  screen: PracticeScreenConfig,
): ScreenState {
  if (screen.type === "reorder") {
    const order = screen.fixedFirst
      ? [screen.lines[0].id, ...screen.lines.slice(1).map((line) => line.id)]
      : screen.lines.map((line) => line.id);

    return {
      answers: {},
      order,
      feedback: screen.fixedFirst ? { [screen.lines[0].id]: "locked" } : {},
      checked: false,
      passed: false,
      lockedIds: screen.fixedFirst ? [screen.lines[0].id] : [],
      wrongAttempts: 0,
      answerKeyRevealed: false,
    };
  }

  return {
    answers: {},
    feedback: {},
    checked: false,
    passed: false,
    lockedIds: [],
    wrongAttempts: 0,
    answerKeyRevealed: false,
  };
}

export function createInitialScreenStates(
  screens: PracticeScreenConfig[],
): ScreenState[] {
  return screens.map(createInitialScreenState);
}
