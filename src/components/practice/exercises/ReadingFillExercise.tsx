"use client";

import { Card, Input } from "antd";
import { FeedbackIcon } from "@/components/practice/shared/FeedbackIcon";
import { PracticeSceneImage } from "@/components/practice/shared/PracticeSceneImage";
import { ScreenInstruction } from "@/components/practice/shared/ScreenInstruction";
import { getItemState } from "@/lib/practice/validate-screen";
import type {
  ExtendedReadingExerciseConfig,
  ReadingFillExerciseConfig,
  ScreenState,
} from "@/types/practice";

function inputStatus(state: ReturnType<typeof getItemState>): "error" | undefined {
  return state === "incorrect" ? "error" : undefined;
}

interface ReadingFillExerciseProps {
  config: ReadingFillExerciseConfig | ExtendedReadingExerciseConfig;
  state: ScreenState;
  onChange: (promptId: string, value: string) => void;
}

export function ReadingFillExercise({
  config,
  state,
  onChange,
}: ReadingFillExerciseProps) {
  return (
    <div className="practice-exercise practice-exercise--reading">
      <ScreenInstruction title={config.title} instruction={config.instruction} />
      <div className="practice-reading-layout">
        <div className="practice-reading-passage-col">
          {config.type === "extended-reading" ? (
            <PracticeSceneImage image={config.image} />
          ) : null}
          <Card size="small" className="practice-panel-card practice-passage-card">
          {config.passage.split("\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          </Card>
        </div>
        <Card size="small" className="practice-panel-card practice-reading-prompts-card">
          <div className="practice-reading-prompts">
            {config.prompts.map((prompt) => {
              const itemState = getItemState(state.feedback, prompt.id);
              return (
                <label key={prompt.id} className="practice-reading-prompt">
                  <span>{prompt.label}</span>
                  <span className="practice-inline-field practice-inline-field--block">
                    <Input
                      value={state.answers[prompt.id] ?? ""}
                      status={inputStatus(itemState)}
                      disabled={itemState === "locked"}
                      onChange={(event) => onChange(prompt.id, event.target.value)}
                      placeholder="Nhập câu trả lời (tiếng Anh)"
                    />
                    <FeedbackIcon state={itemState} />
                  </span>
                </label>
              );
            })}
          </div>
        </Card>
      </div>
    </div>
  );
}
