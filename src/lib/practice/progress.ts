export type PracticeCompletionTier = "none" | "once" | "twice" | "thrice" | "many";

export function getPracticeCompletionKey(month: number, day: number): string {
  return `${month}-${day}`;
}

export function getPracticeCompletionCount(
  completions: Record<string, number> | undefined,
  month: number,
  day: number,
): number {
  return completions?.[getPracticeCompletionKey(month, day)] ?? 0;
}

export function getPracticeCompletionTier(count: number): PracticeCompletionTier {
  if (count <= 0) return "none";
  if (count === 1) return "once";
  if (count === 2) return "twice";
  if (count === 3) return "thrice";
  return "many";
}

export function getPracticeCompletionTooltip(count: number): string {
  if (count <= 0) return "";
  return `Đã hoàn thành ${count} lần`;
}
