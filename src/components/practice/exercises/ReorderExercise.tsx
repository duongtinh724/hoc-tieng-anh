"use client";

import { PracticeSceneImage } from "@/components/practice/shared/PracticeSceneImage";
import { ScreenInstruction } from "@/components/practice/shared/ScreenInstruction";
import { SortableReorderList } from "@/components/practice/dnd/SortableReorderList";
import type { ReorderExerciseConfig, ScreenState } from "@/types/practice";

interface ReorderExerciseProps {
  config: ReorderExerciseConfig;
  state: ScreenState;
  onMove: (fromIndex: number, toIndex: number) => void;
}

export function ReorderExercise({ config, state, onMove }: ReorderExerciseProps) {
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
