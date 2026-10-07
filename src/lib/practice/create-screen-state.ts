import {
  createInitialReorderOrders,
  isHorizontalWordReorder,
} from "@/lib/practice/reorder-utils";
import { createShuffledReorderOrder } from "@/lib/practice/shuffle-screen";
import type { PracticeScreenConfig, ScreenState } from "@/types/practice";

export function createInitialScreenState(
  screen: PracticeScreenConfig,
): ScreenState {
  if (screen.type === "reorder") {
    if (isHorizontalWordReorder(screen)) {
      return {
        answers: {},
        orders: createInitialReorderOrders(screen),
        feedback: {},
        checked: false,
        passed: false,
        lockedIds: [],
        wrongAttempts: 0,
        answerKeyRevealed: false,
      };
    }

    const order = createShuffledReorderOrder(screen);

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
