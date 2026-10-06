"use client";

import { Card } from "antd";
import { DraggableWordChip } from "@/components/practice/dnd/DraggableWordChip";
import type { WordBankItem } from "@/types/practice";

interface WordBankProps {
  words: WordBankItem[];
  usedIds: string[];
  selectedId?: string | null;
  onSelect: (wordId: string) => void;
}

export function WordBank({ words, usedIds, selectedId, onSelect }: WordBankProps) {
  return (
    <Card size="small" className="practice-panel-card practice-word-bank-card">
      <div className="practice-word-bank">
        {words.map((word) => (
          <DraggableWordChip
            key={word.id}
            word={word}
            used={usedIds.includes(word.id)}
            selected={selectedId === word.id}
            onClick={() => onSelect(word.id)}
          />
        ))}
      </div>
    </Card>
  );
}
