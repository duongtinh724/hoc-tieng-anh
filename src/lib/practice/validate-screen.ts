import {
  getAllReorderLineIds,
  getReorderSentences,
  isHorizontalWordReorder,
} from "@/lib/practice/reorder-utils";
import { SELF_WRITING_ANSWER_ID } from "@/lib/practice/self-writing";
import type {
  ItemState,
  PracticeScreenConfig,
  ScreenState,
  ScreenValidation,
} from "@/types/practice";

function normalize(value: string): string {
  return value.trim().toLowerCase().replace(/\s+/g, " ");
}

export function normalizeDictation(value: string): string {
  return normalize(value).replace(/[.!?,;:'"]/g, "");
}

export function matchesDictation(value: string, expected: string): boolean {
  return normalizeDictation(value) === normalizeDictation(expected);
}

function matchesAny(value: string, options: string[]): boolean {
  const normalized = normalize(value);
  return options.some((option) => normalize(option) === normalized);
}

export function getBlankIds(screen: PracticeScreenConfig): string[] {
  switch (screen.type) {
    case "match":
      return screen.pairs.map((pair) => pair.id);
    case "dialogue-fill":
      return screen.lines.flatMap((line) =>
        line.segments
          .filter((segment) => segment.kind === "blank")
          .map((segment) => segment.id),
      );
    case "sentence-drag":
      return screen.sentences.flatMap((sentence) =>
        sentence.parts
          .filter((part) => part.kind === "blank")
          .map((part) => part.id),
      );
    case "categorize":
      return screen.items.map((item) => item.id);
    case "dropdown":
      return screen.questions.flatMap((question) =>
        question.parts
          .filter((part) => part.kind === "select")
          .map((part) => part.id),
      );
    case "reorder":
      if (isHorizontalWordReorder(screen)) {
        return getAllReorderLineIds(screen);
      }
      return screen.lines.map((line) => line.id);
    case "reading-fill":
    case "extended-reading":
      return screen.prompts.map((prompt) => prompt.id);
    case "self-writing":
      return [SELF_WRITING_ANSWER_ID];
    case "dictation":
      return screen.items.map((item) => item.id);
    case "quiz":
      return screen.questions.map((question) => question.id);
    default:
      return [];
  }
}

export function isInstantCorrect(
  screen: PracticeScreenConfig,
  itemId: string,
  value: string,
): boolean {
  switch (screen.type) {
    case "match": {
      const pair = screen.pairs.find((entry) => entry.id === itemId);
      return pair?.correctWordId === value;
    }
    case "dialogue-fill": {
      for (const line of screen.lines) {
        for (const segment of line.segments) {
          if (segment.kind === "blank" && segment.id === itemId) {
            return segment.correctWordId === value;
          }
        }
      }
      return false;
    }
    case "sentence-drag": {
      for (const sentence of screen.sentences) {
        for (const part of sentence.parts) {
          if (part.kind === "blank" && part.id === itemId) {
            return part.correctWordId === value;
          }
        }
      }
      return false;
    }
    case "categorize": {
      const item = screen.items.find((entry) => entry.id === itemId);
      return item?.correctCategoryId === value;
    }
    case "dropdown": {
      for (const question of screen.questions) {
        for (const part of question.parts) {
          if (part.kind === "select" && part.id === itemId) {
            return part.correctOptionId === value;
          }
        }
      }
      return false;
    }
    case "reading-fill":
    case "extended-reading": {
      const prompt = screen.prompts.find((entry) => entry.id === itemId);
      if (!prompt) return false;
      const options = [...prompt.correctAnswers, ...(prompt.alternatives ?? [])];
      return matchesAny(value, options);
    }
    case "self-writing":
      return itemId === SELF_WRITING_ANSWER_ID && value.trim().length > 0;
    case "dictation":
      return false;
    case "quiz":
      return false;
    default:
      return false;
  }
}

export function validateScreen(
  screen: PracticeScreenConfig,
  state: ScreenState,
): ScreenValidation {
  const feedback: Record<string, ItemState> = { ...state.feedback };
  const lockedIds = [...state.lockedIds];
  let pendingCount = 0;

  if (screen.type === "self-writing") {
    const value = state.answers[SELF_WRITING_ANSWER_ID] ?? "";
    const hasContent = value.trim().length > 0;

    feedback[SELF_WRITING_ANSWER_ID] = !hasContent
      ? "empty"
      : state.checked
        ? "locked"
        : "filled";

    return {
      allCorrect: state.checked && hasContent,
      pendingCount: hasContent ? 0 : 1,
      feedback,
      lockedIds: state.checked && hasContent ? [SELF_WRITING_ANSWER_ID] : [],
    };
  }

  if (screen.type === "quiz") {
    screen.questions.forEach((question) => {
      const value = state.answers[question.id];
      if (!value) {
        feedback[question.id] = state.checked ? "incorrect" : "empty";
        if (!state.checked) pendingCount += 1;
        return;
      }
      const correct = value === question.correctOptionId;
      feedback[question.id] = !state.checked ? "filled" : correct ? "correct" : "incorrect";
    });

    const correctCount = screen.questions.filter(
      (question) => state.answers[question.id] === question.correctOptionId,
    ).length;
    const passScore = screen.passScore ?? screen.questions.length;

    return {
      allCorrect: state.checked && correctCount >= passScore,
      pendingCount: state.checked ? 0 : pendingCount,
      feedback,
      lockedIds,
    };
  }

  if (screen.type === "dictation") {
    const active = screen.items.find((item) => !state.lockedIds.includes(item.id));

    screen.items.forEach((item) => {
      if (state.lockedIds.includes(item.id)) {
        feedback[item.id] = "locked";
        return;
      }
      if (!active || item.id !== active.id) {
        feedback[item.id] = "empty";
        return;
      }
      const value = state.answers[item.id] ?? "";
      if (!value.trim()) {
        feedback[item.id] = "empty";
        pendingCount += 1;
        return;
      }
      feedback[item.id] =
        state.checked && !matchesDictation(value, item.text) ? "incorrect" : "filled";
    });

    return {
      allCorrect: screen.items.every((item) => state.lockedIds.includes(item.id)),
      pendingCount,
      feedback,
      lockedIds,
    };
  }

  if (screen.type === "reorder") {
    if (isHorizontalWordReorder(screen)) {
      const sentences = getReorderSentences(screen);
      const orders = state.orders ?? {};

      sentences.forEach((sentence) => {
        const order =
          orders[sentence.id] ?? sentence.lines.map((line) => line.id);

        sentence.lines.forEach((line, index) => {
          if (lockedIds.includes(line.id)) {
            feedback[line.id] = "locked";
            return;
          }

          const isCorrect = order[index] === sentence.correctOrder[index];
          if (isCorrect) {
            feedback[line.id] = state.checked ? "locked" : "filled";
            if (state.checked && !lockedIds.includes(line.id)) {
              lockedIds.push(line.id);
            }
          } else if (state.checked) {
            feedback[line.id] = "incorrect";
          } else {
            feedback[line.id] = "filled";
          }
        });
      });

      const allCorrect = sentences.every((sentence) => {
        const order =
          orders[sentence.id] ?? sentence.lines.map((line) => line.id);
        return sentence.correctOrder.every(
          (lineId, index) => order[index] === lineId,
        );
      });

      return { allCorrect, pendingCount: 0, feedback, lockedIds };
    }

    const order = state.order ?? screen.lines.map((line) => line.id);

    screen.lines.forEach((line, index) => {
      if (lockedIds.includes(line.id)) {
        feedback[line.id] = "locked";
        return;
      }

      const isCorrect = order[index] === screen.correctOrder[index];
      if (isCorrect) {
        feedback[line.id] = state.checked ? "locked" : "filled";
        if (state.checked && !lockedIds.includes(line.id)) {
          lockedIds.push(line.id);
        }
      } else if (state.checked) {
        feedback[line.id] = "incorrect";
      } else {
        feedback[line.id] = "filled";
      }
    });

    const allCorrect = screen.correctOrder.every(
      (lineId, index) => order[index] === lineId,
    );

    return { allCorrect, pendingCount: 0, feedback, lockedIds };
  }

  const blankIds = getBlankIds(screen);

  blankIds.forEach((blankId) => {
    const value = state.answers[blankId];

    if (!value) {
      feedback[blankId] = "empty";
      pendingCount += 1;
      return;
    }

    const correct = isInstantCorrect(screen, blankId, value);

    if (correct) {
      feedback[blankId] = "correct";
      return;
    }

    feedback[blankId] = state.checked ? "incorrect" : "filled";
  });

  const allCorrect = blankIds.every((blankId) => {
    const value = state.answers[blankId];
    return value && isInstantCorrect(screen, blankId, value);
  });

  return { allCorrect, pendingCount, feedback, lockedIds };
}

export function getPendingCount(
  screen: PracticeScreenConfig,
  state: ScreenState,
): number {
  return validateScreen(screen, state).pendingCount;
}

export function getItemState(
  feedback: Record<string, ItemState>,
  id: string,
): ItemState {
  return feedback[id] ?? "empty";
}
