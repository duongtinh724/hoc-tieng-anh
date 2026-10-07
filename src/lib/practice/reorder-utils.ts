import { shuffleArray } from "@/lib/practice/shuffle-array";
import type { ReorderExerciseConfig, ReorderSentence } from "@/types/practice";

function arraysEqual(a: string[], b: string[]): boolean {
  return a.length === b.length && a.every((value, index) => value === b[index]);
}

export function shuffleLineOrder(
  lineIds: string[],
  correctOrder: string[],
  fixedFirst = false,
): string[] {
  if (fixedFirst) {
    return [lineIds[0], ...shuffleArray(lineIds.slice(1))];
  }

  if (lineIds.length <= 1) {
    return lineIds;
  }

  let order = shuffleArray(lineIds);
  let attempts = 0;
  while (arraysEqual(order, correctOrder) && attempts < 8) {
    order = shuffleArray(lineIds);
    attempts += 1;
  }

  return order;
}

export function getReorderSentences(
  config: ReorderExerciseConfig,
): ReorderSentence[] {
  if (config.sentences?.length) {
    return config.sentences;
  }

  return [
    {
      id: "__single__",
      lines: config.lines,
      correctOrder: config.correctOrder,
      fixedFirst: config.fixedFirst,
    },
  ];
}

export function isHorizontalWordReorder(config: ReorderExerciseConfig): boolean {
  return config.layout === "horizontal";
}

export function createInitialReorderOrders(
  config: ReorderExerciseConfig,
): Record<string, string[]> {
  return Object.fromEntries(
    getReorderSentences(config).map((sentence) => [
      sentence.id,
      shuffleLineOrder(
        sentence.lines.map((line) => line.id),
        sentence.correctOrder,
        sentence.fixedFirst ?? config.fixedFirst,
      ),
    ]),
  );
}

export function getAllReorderLineIds(config: ReorderExerciseConfig): string[] {
  return getReorderSentences(config).flatMap((sentence) =>
    sentence.lines.map((line) => line.id),
  );
}
