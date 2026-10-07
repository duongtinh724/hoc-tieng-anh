"use client";

import { HorizontalWordReorderRow } from "@/components/practice/dnd/HorizontalWordReorderRow";
import { ScreenInstruction } from "@/components/practice/shared/ScreenInstruction";
import { getReorderSentences } from "@/lib/practice/reorder-utils";
import type { ReorderExerciseConfig, ScreenState } from "@/types/practice";

interface WordReorderExerciseProps {
  config: ReorderExerciseConfig;
  state: ScreenState;
  onMove: (fromIndex: number, toIndex: number, sentenceId: string) => void;
}

export function WordReorderExercise({
  config,
  state,
  onMove,
}: WordReorderExerciseProps) {
  const sentences = getReorderSentences(config);
  const orders = state.orders ?? {};

  return (
    <div className="practice-exercise practice-exercise--word-reorder">
      <ScreenInstruction title={config.title} instruction={config.instruction} />
      <div className="practice-word-reorder-stack">
        {sentences.map((sentence, index) => (
          <HorizontalWordReorderRow
            key={sentence.id}
            label={sentence.label ?? `Câu ${index + 1}`}
            lines={sentence.lines}
            order={
              orders[sentence.id] ?? sentence.lines.map((line) => line.id)
            }
            feedback={state.feedback}
            lockedIds={state.lockedIds}
            onMove={(fromIndex, toIndex) =>
              onMove(fromIndex, toIndex, sentence.id)
            }
          />
        ))}
      </div>
    </div>
  );
}
