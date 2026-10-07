"use client";

import { SortableReorderList } from "@/components/practice/dnd/SortableReorderList";
import { PracticeSceneImage } from "@/components/practice/shared/PracticeSceneImage";
import { ScreenInstruction } from "@/components/practice/shared/ScreenInstruction";
import { WordReorderExercise } from "@/components/practice/exercises/WordReorderExercise";
import { isHorizontalWordReorder } from "@/lib/practice/reorder-utils";
import type { ReorderExerciseConfig, ScreenState } from "@/types/practice";

interface ReorderExerciseProps {
  config: ReorderExerciseConfig;
  state: ScreenState;
  onMove: (fromIndex: number, toIndex: number, sentenceId?: string) => void;
}

export function ReorderExercise({ config, state, onMove }: ReorderExerciseProps) {
  if (isHorizontalWordReorder(config)) {
    return (
      <WordReorderExercise
        config={config}
        state={state}
        onMove={(fromIndex, toIndex, sentenceId) =>
          onMove(fromIndex, toIndex, sentenceId)
        }
      />
    );
  }

  return (
    <div className="practice-exercise practice-exercise--split">
      <ScreenInstruction title={config.title} instruction={config.instruction} />
      <div className="practice-split-layout">
        <PracticeSceneImage image={config.image} useDefaultFallback />
        <SortableReorderList config={config} state={state} onMove={onMove} />
      </div>
    </div>
  );
}
