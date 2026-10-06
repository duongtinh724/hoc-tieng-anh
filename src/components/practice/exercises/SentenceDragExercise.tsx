"use client";

import { Card } from "antd";
import { DropSlot } from "@/components/practice/shared/DropSlot";
import { ScreenInstruction } from "@/components/practice/shared/ScreenInstruction";
import { WordBank } from "@/components/practice/shared/WordBank";
import { getItemState } from "@/lib/practice/validate-screen";
import type { ScreenState, SentenceDragExerciseConfig } from "@/types/practice";

interface SentenceDragExerciseProps {
  config: SentenceDragExerciseConfig;
  state: ScreenState;
  selectedWordId: string | null;
  onSelectWord: (wordId: string) => void;
  onAssign: (blankId: string, wordId: string) => void;
  onClear: (blankId: string) => void;
}

export function SentenceDragExercise({
  config,
  state,
  selectedWordId,
  onSelectWord,
  onAssign,
  onClear,
}: SentenceDragExerciseProps) {
  const usedIds = Object.values(state.answers);

  const getLabel = (wordId: string) =>
    config.wordBank.find((word) => word.id === wordId)?.label;

  return (
    <div className="practice-exercise">
      <ScreenInstruction title={config.title} instruction={config.instruction} />
      <WordBank
        words={config.wordBank}
        usedIds={usedIds}
        selectedId={selectedWordId}
        onSelect={onSelectWord}
      />
      <Card size="small" className="practice-panel-card">
      <div className="practice-sentence-list">
        {config.sentences.map((sentence) => (
          <p key={sentence.id} className="practice-sentence-line">
            {sentence.parts.map((part, index) => {
              if (part.kind === "text") {
                return <span key={index}>{part.value}</span>;
              }

              const wordId = state.answers[part.id];
              return (
                <DropSlot
                  key={part.id}
                  id={part.id}
                  value={wordId ? getLabel(wordId) : undefined}
                  state={getItemState(state.feedback, part.id)}
                  width={part.width}
                  onClick={() => selectedWordId && onAssign(part.id, selectedWordId)}
                  onClear={() => onClear(part.id)}
                />
              );
            })}
          </p>
        ))}
      </div>
      </Card>
    </div>
  );
}
