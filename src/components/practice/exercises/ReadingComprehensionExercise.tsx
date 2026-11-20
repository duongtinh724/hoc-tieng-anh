"use client";

import { Card, Input, Radio } from "antd";
import { ScreenInstruction } from "@/components/practice/shared/ScreenInstruction";
import { getItemState } from "@/lib/practice/validate-screen";
import type {
  ReadingComprehensionExerciseConfig,
  ReadingComprehensionQuestion,
  ScreenState,
} from "@/types/practice";

interface ReadingComprehensionExerciseProps {
  config: ReadingComprehensionExerciseConfig;
  state: ScreenState;
  onSelect: (questionId: string, value: string) => void;
  onTextChange: (questionId: string, value: string) => void;
}

function correctLabel(question: ReadingComprehensionQuestion): string {
  if (question.kind === "choice") {
    return question.options.find((option) => option.id === question.correctOptionId)?.label ?? "";
  }
  return question.correctAnswers[0];
}

function QuestionBlock({
  index,
  question,
  state,
  onSelect,
  onTextChange,
}: {
  index: number;
  question: ReadingComprehensionQuestion;
  state: ScreenState;
  onSelect: (questionId: string, value: string) => void;
  onTextChange: (questionId: string, value: string) => void;
}) {
  const itemState = getItemState(state.feedback, question.id);
  const wrong = state.checked && itemState === "incorrect";
  const right = state.checked && itemState === "correct";

  return (
    <li
      id={`rc-${question.id}`}
      className={`practice-reading-comp-question${right ? " is-correct" : ""}${wrong ? " is-incorrect" : ""}`}
    >
      <p className="practice-reading-comp-prompt">
        <strong>{index}.</strong> {question.prompt}
      </p>
      {question.kind === "choice" ? (
        <Radio.Group
          className="practice-reading-comp-options"
          value={state.answers[question.id]}
          disabled={state.checked}
          onChange={(event) => onSelect(question.id, event.target.value)}
        >
          {question.options.map((option) => (
            <Radio key={option.id} value={option.id}>
              {option.label}
            </Radio>
          ))}
        </Radio.Group>
      ) : (
        <Input
          className="practice-reading-comp-input"
          value={state.answers[question.id] ?? ""}
          disabled={state.checked}
          placeholder="Type your answer in English"
          onChange={(event) => onTextChange(question.id, event.target.value)}
        />
      )}
      {wrong ? (
        <div className="practice-quiz-explain">
          <strong>Vì sao chưa đúng.</strong> {question.explanation} Đáp án đúng: {correctLabel(question)}.
        </div>
      ) : null}
      {state.answerKeyRevealed && !right ? (
        <p className="practice-reading-comp-key">
          <strong>Đáp án:</strong> {correctLabel(question)}
        </p>
      ) : null}
    </li>
  );
}

export function ReadingComprehensionExercise({
  config,
  state,
  onSelect,
  onTextChange,
}: ReadingComprehensionExerciseProps) {
  const paragraphs = config.passage.split(/\n\n+/).filter(Boolean);

  return (
    <div className="practice-exercise practice-exercise--reading-comp">
      <ScreenInstruction title={config.title} instruction={config.instruction} />
      <div className="practice-reading-layout">
        <div className="practice-reading-passage-col">
          <Card size="small" className="practice-panel-card practice-passage-card">
            {config.passageTitle ? (
              <h4 className="practice-reading-comp-passage-title">{config.passageTitle}</h4>
            ) : null}
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </Card>
        </div>
        <Card size="small" className="practice-panel-card practice-reading-comp-prompts-card">
          <ol className="practice-reading-comp-list">
            {config.questions.map((question, index) => (
              <QuestionBlock
                key={question.id}
                index={index + 1}
                question={question}
                state={state}
                onSelect={onSelect}
                onTextChange={onTextChange}
              />
            ))}
          </ol>
        </Card>
      </div>
    </div>
  );
}