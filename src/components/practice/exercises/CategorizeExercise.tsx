"use client";

import { Card } from "antd";
import { CategoryDropArea } from "@/components/practice/dnd/CategoryDropArea";
import { DraggableWordChip } from "@/components/practice/dnd/DraggableWordChip";
import { FeedbackIcon } from "@/components/practice/shared/FeedbackIcon";
import { ScreenInstruction } from "@/components/practice/shared/ScreenInstruction";
import { getItemState } from "@/lib/practice/validate-screen";
import type { CategorizeExerciseConfig, ScreenState } from "@/types/practice";

interface CategorizeExerciseProps {
  config: CategorizeExerciseConfig;
  state: ScreenState;
  selectedWordId: string | null;
  onSelectWord: (itemId: string) => void;
  onAssign: (itemId: string, categoryId: string) => void;
  onClear: (itemId: string) => void;
}

export function CategorizeExercise({
  config,
  state,
  selectedWordId,
  onSelectWord,
  onAssign,
  onClear,
}: CategorizeExerciseProps) {
  const assignedIds = Object.keys(state.answers);
  const unassigned = config.items.filter((item) => !assignedIds.includes(item.id));

  return (
    <div className="practice-exercise">
      <ScreenInstruction title={config.title} instruction={config.instruction} />
      <Card size="small" className="practice-panel-card practice-word-bank-card">
        <div className="practice-word-bank">
          {unassigned.map((item) => (
            <DraggableWordChip
              key={item.id}
              word={{ id: item.id, label: item.label }}
              selected={selectedWordId === item.id}
              onClick={() => onSelectWord(item.id)}
            />
          ))}
        </div>
      </Card>
      <div className="practice-category-grid">
        {config.categories.map((category) => (
          <Card
            key={category.id}
            size="small"
            title={category.label}
            className="practice-category-card"
          >
            <CategoryDropArea
              id={category.id}
              onClick={() => selectedWordId && onAssign(selectedWordId, category.id)}
            >
              {config.items
                .filter((item) => state.answers[item.id] === category.id)
                .map((item) => (
                  <div
                    key={item.id}
                    className={`practice-category-item practice-category-item--${getItemState(state.feedback, item.id)}`}
                  >
                    <span>{item.label}</span>
                    <FeedbackIcon state={getItemState(state.feedback, item.id)} />
                    <button
                      type="button"
                      className="practice-slot-clear"
                      onClick={(event) => {
                        event.stopPropagation();
                        onClear(item.id);
                      }}
                      aria-label="Xóa"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              {config.items.filter((item) => state.answers[item.id] === category.id).length ===
              0 ? (
                <span className="practice-category-placeholder"> </span>
              ) : null}
            </CategoryDropArea>
          </Card>
        ))}
      </div>
    </div>
  );
}
