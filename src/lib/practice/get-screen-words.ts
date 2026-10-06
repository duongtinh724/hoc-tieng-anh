import type { PracticeScreenConfig, WordBankItem } from "@/types/practice";

export function getScreenWords(screen: PracticeScreenConfig): WordBankItem[] {
  switch (screen.type) {
    case "match":
      return screen.words;
    case "dialogue-fill":
      return screen.wordBank;
    case "sentence-drag":
      return screen.wordBank;
    case "categorize":
      return screen.items.map((item) => ({ id: item.id, label: item.label }));
    default:
      return [];
  }
}

export function isWordDragScreen(screen: PracticeScreenConfig): boolean {
  return (
    screen.type === "match" ||
    screen.type === "dialogue-fill" ||
    screen.type === "sentence-drag" ||
    screen.type === "categorize"
  );
}
