import { getRulesForDay as getMonth01Rules } from "@/data/curriculum/month-01/day-rules";
import type { RuleItem } from "@/types/lesson";

const RULE_GETTERS: Record<number, (day: number, fallback: string) => RuleItem[]> = {
  1: getMonth01Rules,
};

export function getRulesForDay(
  month: number,
  day: number,
  fallbackRule: string,
): RuleItem[] {
  const getter = RULE_GETTERS[month] ?? RULE_GETTERS[1];
  return getter(day, fallbackRule);
}
