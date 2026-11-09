import raw from "./7-day-b1-grammar.json";
import type { B1Day, B1RevisionData } from "@/types/b1-revision";

export const b1Revision = raw as B1RevisionData;
export const B1_DAYS: B1Day[] = b1Revision.days;

export function getB1Day(day: number): B1Day | undefined {
  return B1_DAYS.find((item) => item.day === day);
}
