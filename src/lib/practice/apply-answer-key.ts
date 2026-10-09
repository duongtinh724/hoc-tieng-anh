import {
  getAllReorderLineIds,
  getReorderSentences,
  isHorizontalWordReorder,
} from "@/lib/practice/reorder-utils";
import { getBlankIds } from "@/lib/practice/validate-screen";
import type { ItemState, PracticeScreenConfig, ScreenState } from "@/types/practice";

export function applyAnswerKey(
  screen: PracticeScreenConfig,
  state: ScreenState,
): ScreenState {
  if (screen.type === "reorder") {
    if (isHorizontalWordReorder(screen)) {
      const lockedIds = getAllReorderLineIds(screen);
      const orders = Object.fromEntries(
        getReorderSentences(screen).map((sentence) => [
          sentence.id,
          [...sentence.correctOrder],
        ]),
      );

      return {
        ...state,
        orders,
        feedback: Object.fromEntries(
          lockedIds.map((id) => [id, "locked" as ItemState]),
        ),
        lockedIds,
        checked: true,
        passed: true,
        answerKeyRevealed: true,
      };
    }

    const lockedIds = screen.lines.map((line) => line.id);
    return {
      ...state,
      order: [...screen.correctOrder],
      feedback: Object.fromEntries(lockedIds.map((id) => [id, "locked" as ItemState])),
      lockedIds,
      checked: true,
      passed: true,
      answerKeyRevealed: true,
    };
  }

  const answers = { ...state.answers };
  const blankIds = getBlankIds(screen);

  switch (screen.type) {
    case "match":
      screen.pairs.forEach((pair) => {
        answers[pair.id] = pair.correctWordId;
      });
      break;
    case "dialogue-fill":
      screen.lines.forEach((line) => {
        line.segments.forEach((segment) => {
          if (segment.kind === "blank") {
            answers[segment.id] = segment.correctWordId;
          }
        });
      });
      break;
    case "sentence-drag":
      screen.sentences.forEach((sentence) => {
        sentence.parts.forEach((part) => {
          if (part.kind === "blank") {
            answers[part.id] = part.correctWordId;
          }
        });
      });
      break;
    case "categorize":
      screen.items.forEach((item) => {
        answers[item.id] = item.correctCategoryId;
      });
      break;
    case "dropdown":
      screen.questions.forEach((question) => {
        question.parts.forEach((part) => {
          if (part.kind === "select") {
            answers[part.id] = part.correctOptionId;
          }
        });
      });
      break;
    case "reading-fill":
    case "extended-reading":
      screen.prompts.forEach((prompt) => {
        answers[prompt.id] = prompt.correctAnswers[0];
      });
      break;
    case "dictation":
      screen.items.forEach((item) => {
        answers[item.id] = item.text;
      });
      break;
    case "quiz":
      screen.questions.forEach((question) => {
        answers[question.id] = question.correctOptionId;
      });
      break;
  }

  return {
    ...state,
    answers,
    feedback: Object.fromEntries(blankIds.map((id) => [id, "locked" as ItemState])),
    lockedIds: blankIds,
    checked: true,
    passed: true,
    answerKeyRevealed: true,
  };
}
