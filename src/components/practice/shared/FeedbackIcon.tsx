import type { ItemState } from "@/types/practice";

interface FeedbackIconProps {
  state: ItemState;
}

export function FeedbackIcon({ state }: FeedbackIconProps) {
  if (state === "correct" || state === "locked") {
    return (
      <span className="practice-feedback practice-feedback--correct" aria-hidden="true">
        ✓
      </span>
    );
  }

  if (state === "incorrect") {
    return (
      <span className="practice-feedback practice-feedback--incorrect" aria-hidden="true">
        ✕
      </span>
    );
  }

  return null;
}
