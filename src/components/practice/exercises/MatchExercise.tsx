"use client";

import { useState } from "react";
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
  const [flippedIds, setFlippedIds] = useState<Record<string, boolean>>({});
  const usedIds = Object.values(state.answers);

  const toggleFlip = (pairId: string) => {
    setFlippedIds((current) => ({
      ...current,
      [pairId]: !current[pairId],
    }));
  };

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
          const meaning = pair.label ?? pair.imageAlt;
          const flipped = Boolean(flippedIds[pair.id]);

          return (
            <Card key={pair.id} size="small" className="practice-match-card-ant">
              {pair.imageUrl ? (
                <button
                  type="button"
                  className={`practice-match-flip${flipped ? " is-flipped" : ""}`}
                  aria-pressed={flipped}
                  aria-label={
                    flipped
                      ? `Đang hiện nghĩa: ${meaning}. Bấm để xem lại ảnh.`
                      : `Bấm để xem nghĩa tiếng Việt của ảnh ${meaning}.`
                  }
                  onClick={() => toggleFlip(pair.id)}
                >
                  <span className="practice-match-flip-inner">
                    <span className="practice-match-flip-face practice-match-flip-front">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={pair.imageUrl} alt={pair.imageAlt} />
                    </span>
                    <span className="practice-match-flip-face practice-match-flip-back">
                      {meaning}
                    </span>
                  </span>
                </button>
              ) : (
                <div className="practice-match-visual">
                  <div className="practice-match-placeholder">
                    <span>{meaning}</span>
                  </div>
                </div>
              )}
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
