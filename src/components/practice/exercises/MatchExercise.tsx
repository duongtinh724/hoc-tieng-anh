"use client";

import { Card } from "antd";
import { DropSlot } from "@/components/practice/shared/DropSlot";
import { ScreenInstruction } from "@/components/practice/shared/ScreenInstruction";
import { WordBank } from "@/components/practice/shared/WordBank";
import { getItemState } from "@/lib/practice/validate-screen";
import type { MatchExerciseConfig, ScreenState } from "@/types/practice";

interface MatchExerciseProps {
  config: MatchExerciseConfig;
  state: ScreenState;
  selectedWordId: string | null;
  onSelectWord: (wordId: string) => void;
  onAssign: (pairId: string, wordId: string) => void;
  onClear: (pairId: string) => void;
}

export function MatchExercise({
  config,
  state,
  selectedWordId,
  onSelectWord,
  onAssign,
  onClear,
}: MatchExerciseProps) {
  const usedIds = Object.values(state.answers);

  const handlePairClick = (pairId: string) => {
    if (!selectedWordId) return;
    onAssign(pairId, selectedWordId);
  };

  const getLabel = (wordId: string): string | undefined =>
    config.words.find((word) => word.id === wordId)?.label;

  return (
    <div className="practice-exercise">
      <ScreenInstruction title={config.title} instruction={config.instruction} />
      <WordBank
        words={config.words}
        usedIds={usedIds}
        selectedId={selectedWordId}
        onSelect={onSelectWord}
      />
      <div className="practice-match-grid">
        {config.pairs.map((pair) => {
          const wordId = state.answers[pair.id];
          return (
            <Card key={pair.id} size="small" className="practice-match-card-ant">
              <div className="practice-match-visual">
                {pair.imageUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={pair.imageUrl} alt={pair.imageAlt} />
                ) : (
                  <div className="practice-match-placeholder">
                    <span>{pair.label ?? pair.imageAlt}</span>
                  </div>
                )}
              </div>
              <DropSlot
                id={pair.id}
                value={wordId ? getLabel(wordId) : undefined}
                state={getItemState(state.feedback, pair.id)}
                onClick={() => handlePairClick(pair.id)}
                onClear={() => onClear(pair.id)}
              />
            </Card>
          );
        })}
      </div>
    </div>
  );
}
