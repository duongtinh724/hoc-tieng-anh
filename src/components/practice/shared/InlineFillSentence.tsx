"use client";

import { Input } from "antd";
import { FeedbackIcon } from "@/components/practice/shared/FeedbackIcon";
import type { ItemState } from "@/types/practice";

interface InlineFillSentenceProps {
  before: string;
  after: string;
  value: string;
  disabled?: boolean;
  feedbackState: ItemState;
  onChange: (value: string) => void;
}

function inputStatus(state: ItemState): "error" | undefined {
  return state === "incorrect" ? "error" : undefined;
}

export function InlineFillSentence({
  before,
  after,
  value,
  disabled,
  feedbackState,
  onChange,
}: InlineFillSentenceProps) {
  return (
    <div className="practice-inline-sentence">
      {before ? (
        <span className="practice-inline-sentence-text">{before}</span>
      ) : null}
      <Input
        className="practice-inline-sentence-input"
        value={value}
        status={inputStatus(feedbackState)}
        disabled={disabled || feedbackState === "locked"}
        onChange={(event) => onChange(event.target.value)}
        aria-label={`Điền từ: ${before}${after}`.trim()}
      />
      {after ? (
        <span className="practice-inline-sentence-text">{after}</span>
      ) : null}
      <FeedbackIcon state={feedbackState} />
    </div>
  );
}
