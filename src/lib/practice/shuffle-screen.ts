import type { PracticeScreenConfig } from "@/types/practice";

export function shuffleArray<T>(items: T[]): T[] {
  const next = [...items];
  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [next[i], next[j]] = [next[j], next[i]];
  }
  return next;
}

function arraysEqual(a: string[], b: string[]): boolean {
  return a.length === b.length && a.every((value, index) => value === b[index]);
}

/** Thứ tự ban đầu cho reorder — không để trùng đáp án (trừ khi chỉ có 1 dòng). */
export function createShuffledReorderOrder(screen: Extract<PracticeScreenConfig, { type: "reorder" }>): string[] {
  const lineIds = screen.lines.map((line) => line.id);

  if (screen.fixedFirst) {
    return [lineIds[0], ...shuffleArray(lineIds.slice(1))];
  }

  if (lineIds.length <= 1) {
    return lineIds;
  }

  let order = shuffleArray(lineIds);
  let attempts = 0;
  while (arraysEqual(order, screen.correctOrder) && attempts < 8) {
    order = shuffleArray(lineIds);
    attempts += 1;
  }

  return order;
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
    default:
      return screen;
  }
}

export function shufflePracticeScreens(
  screens: PracticeScreenConfig[],
): PracticeScreenConfig[] {
  return screens.map(shuffleScreen);
}
