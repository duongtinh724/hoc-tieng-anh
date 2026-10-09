import { shuffleLineOrder } from "@/lib/practice/reorder-utils";
import { shuffleArray } from "@/lib/practice/shuffle-array";
import type { PracticeScreenConfig } from "@/types/practice";

export { shuffleArray };

/** Thứ tự ban đầu cho reorder dọc — không để trùng đáp án (trừ khi chỉ có 1 dòng). */
export function createShuffledReorderOrder(
  screen: Extract<PracticeScreenConfig, { type: "reorder" }>,
): string[] {
  return shuffleLineOrder(
    screen.lines.map((line) => line.id),
    screen.correctOrder,
    screen.fixedFirst,
  );
}

export function shuffleScreen(screen: PracticeScreenConfig): PracticeScreenConfig {
  switch (screen.type) {
    case "match":
      return {
        ...screen,
        words: shuffleArray(screen.words),
        pairs: shuffleArray(screen.pairs),
      };
    case "dialogue-fill":
      return {
        ...screen,
        wordBank: shuffleArray(screen.wordBank),
      };
    case "sentence-drag":
      return {
        ...screen,
        wordBank: shuffleArray(screen.wordBank),
        sentences: shuffleArray(screen.sentences),
      };
    case "categorize":
      return {
        ...screen,
        items: shuffleArray(screen.items),
        categories: shuffleArray(screen.categories),
      };
    case "dropdown":
      return {
        ...screen,
        questions: shuffleArray(screen.questions).map((question) => ({
          ...question,
          parts: question.parts.map((part) =>
            part.kind === "select"
              ? { ...part, options: shuffleArray(part.options) }
              : part,
          ),
        })),
      };
    case "reading-fill":
    case "extended-reading":
      return {
        ...screen,
        prompts: shuffleArray(screen.prompts),
      };
    case "self-writing":
      return screen.promptHints
        ? { ...screen, promptHints: shuffleArray(screen.promptHints) }
        : screen;
    case "quiz":
      return {
        ...screen,
        questions: shuffleArray(screen.questions).map((question) => ({
          ...question,
          options: shuffleArray(question.options),
        })),
      };
    default:
      return screen;
  }
}

export function shufflePracticeScreens(
  screens: PracticeScreenConfig[],
): PracticeScreenConfig[] {
  return screens.map(shuffleScreen);
}
