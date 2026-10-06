"use client";

import { Card } from "antd";
import { DropSlot } from "@/components/practice/shared/DropSlot";
import { PracticeSceneImage } from "@/components/practice/shared/PracticeSceneImage";
import { ScreenInstruction } from "@/components/practice/shared/ScreenInstruction";
import { WordBank } from "@/components/practice/shared/WordBank";
import { getItemState } from "@/lib/practice/validate-screen";
import type { DialogueFillExerciseConfig, ScreenState } from "@/types/practice";

interface DialogueFillExerciseProps {
  config: DialogueFillExerciseConfig;
  state: ScreenState;
  selectedWordId: string | null;
  onSelectWord: (wordId: string) => void;
  onAssign: (blankId: string, wordId: string) => void;
  onClear: (blankId: string) => void;
}

export function DialogueFillExercise({
  config,
  state,
  selectedWordId,
  onSelectWord,
  onAssign,
  onClear,
}: DialogueFillExerciseProps) {
  const usedIds = Object.values(state.answers);

  const getLabel = (wordId: string) =>
    config.wordBank.find((word) => word.id === wordId)?.label;

  return (
    <div className="practice-exercise practice-exercise--split">
      <ScreenInstruction title={config.title} instruction={config.instruction} />
      <WordBank
        words={config.wordBank}
        usedIds={usedIds}
        selectedId={selectedWordId}
        onSelect={onSelectWord}
      />
      <div className="practice-split-layout">
        <PracticeSceneImage image={config.image} />
        <Card size="small" className="practice-panel-card">
      <div className="practice-dialogue">
        {config.lines.map((line, index) => (
          <p key={`${line.speaker}-${index}`} className="practice-dialogue-line">
            <strong>{line.speaker}:</strong>{" "}
            {line.segments.map((segment, segmentIndex) => {
              if (segment.kind === "text") {
                return <span key={segmentIndex}>{segment.value}</span>;
              }

              const wordId = state.answers[segment.id];
              return (
                <DropSlot
                  key={segment.id}
                  id={segment.id}
                  value={wordId ? getLabel(wordId) : undefined}
                  state={getItemState(state.feedback, segment.id)}
                  width={segment.width}
                  onClick={() => selectedWordId && onAssign(segment.id, selectedWordId)}
                  onClear={() => onClear(segment.id)}
                />
              );
            })}
          </p>
        ))}
      </div>
        </Card>
      </div>
    </div>
  );
}
