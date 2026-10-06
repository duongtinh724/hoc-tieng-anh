"use client";

import { Card, Select } from "antd";
import { FeedbackIcon } from "@/components/practice/shared/FeedbackIcon";
import { PracticeSceneImage } from "@/components/practice/shared/PracticeSceneImage";
import { ScreenInstruction } from "@/components/practice/shared/ScreenInstruction";
import { getItemState } from "@/lib/practice/validate-screen";
import type { DropdownExerciseConfig, ScreenState } from "@/types/practice";

function selectStatus(state: ReturnType<typeof getItemState>): "error" | undefined {
  return state === "incorrect" ? "error" : undefined;
}

interface DropdownExerciseProps {
  config: DropdownExerciseConfig;
  state: ScreenState;
  onSelect: (selectId: string, optionId: string) => void;
}

export function DropdownExercise({ config, state, onSelect }: DropdownExerciseProps) {
  return (
    <div className="practice-exercise practice-exercise--split">
      <ScreenInstruction title={config.title} instruction={config.instruction} />
      <div className="practice-split-layout">
        <PracticeSceneImage image={config.image} />
        <Card size="small" className="practice-panel-card">
          <ol className="practice-dropdown-list">
            {config.questions.map((question, index) => (
              <li key={question.id} className="practice-dropdown-item">
                <span className="practice-dropdown-num">{index + 1}.</span>
                <div className="practice-dropdown-parts">
                  {question.parts.map((part, partIndex) => {
                    if (part.kind === "text") {
                      return <span key={partIndex}>{part.value}</span>;
                    }

                    const value = state.answers[part.id];
                    const itemState = getItemState(state.feedback, part.id);

                    return (
                      <span key={part.id} className="practice-inline-field">
                        <Select
                          placeholder="..."
                          style={{ minWidth: 96 }}
                          value={value || undefined}
                          status={selectStatus(itemState)}
                          disabled={itemState === "locked"}
                          options={part.options.map((option) => ({
                            value: option.id,
                            label: option.label,
                          }))}
                          onChange={(optionId) => onSelect(part.id, optionId)}
                        />
                        <FeedbackIcon state={itemState} />
                      </span>
                    );
                  })}
                </div>
              </li>
            ))}
          </ol>
        </Card>
      </div>
    </div>
  );
}
