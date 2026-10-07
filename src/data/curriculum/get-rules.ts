import { getRulesForDay as getMonth01Rules } from "@/data/curriculum/month-01/day-rules";
import { getRulesForDay as getMonth02Rules } from "@/data/curriculum/month-02/day-rules";
import type { RuleItem } from "@/types/lesson";

const RULE_GETTERS: Record<number, (day: number, fallback: string) => RuleItem[]> = {
  1: getMonth01Rules,
  2: getMonth02Rules,
};

export function getRulesForDay(
  month: number,
  day: number,
  fallbackRule: string,
): RuleItem[] {
  const getter = RULE_GETTERS[month];
  if (!getter) {
    return splitFallbackRule(fallbackRule);
  }
  return getter(day, fallbackRule);
}

function splitFallbackRule(fallbackRule: string): RuleItem[] {
  return fallbackRule.split("·").map((text) => ({
    text: text.trim(),
    example: "—",
  }));
}
