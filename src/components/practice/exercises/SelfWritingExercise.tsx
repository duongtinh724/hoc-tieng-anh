"use client";

import { BulbOutlined } from "@ant-design/icons";
import { Button, Card, Input, Typography } from "antd";
import { useEffect, useState } from "react";
import { ScreenInstruction } from "@/components/practice/shared/ScreenInstruction";
import { SELF_WRITING_ANSWER_ID } from "@/lib/practice/self-writing";
import type { ScreenState, SelfWritingExerciseConfig } from "@/types/practice";

interface SelfWritingExerciseProps {
  config: SelfWritingExerciseConfig;
  state: ScreenState;
  onChange: (value: string) => void;
}

export function SelfWritingExercise({
  config,
  state,
  onChange,
}: SelfWritingExerciseProps) {
  const [showSample, setShowSample] = useState(false);
  const value = state.answers[SELF_WRITING_ANSWER_ID] ?? "";
  const submitted = state.passed;

  useEffect(() => {
    if (!submitted) {
      setShowSample(false);
    }
  }, [submitted]);

  return (
    <div className="practice-exercise practice-exercise--self-writing">
      <ScreenInstruction title={config.title} instruction={config.instruction} />

      <Card size="small" className="practice-panel-card practice-self-writing-editor-card">
        <Input.TextArea
          value={value}
          disabled={submitted}
          onChange={(event) => onChange(event.target.value)}
          placeholder="Viết vài câu tiếng Anh về bản thân bạn..."
          autoSize={{ minRows: 8, maxRows: 16 }}
          className="practice-self-writing-textarea"
        />
      </Card>

      {submitted ? (
        <>
          {config.promptHints && config.promptHints.length > 0 ? (
            <Card size="small" className="practice-panel-card practice-self-writing-hints">
              <Typography.Text type="secondary" className="practice-self-writing-hints-label">
                Mẫu câu có thể dùng:
              </Typography.Text>
              <ul className="practice-self-writing-hints-list">
                {config.promptHints.map((hint) => (
                  <li key={hint}>{hint}</li>
                ))}
              </ul>
            </Card>
          ) : null}

          <div className="practice-self-writing-actions">
            <Button
              icon={<BulbOutlined />}
              onClick={() => setShowSample((open) => !open)}
            >
              {showSample ? "Ẩn gợi ý" : "Xem gợi ý"}
            </Button>
          </div>

          {showSample ? (
            <Card
              size="small"
              title={config.sampleTitle}
              className="practice-panel-card practice-self-writing-sample"
            >
              {config.sample.split("\n").map((line, index) => (
                <p key={index} className="practice-self-writing-sample-line">
                  {line}
                </p>
              ))}
            </Card>
          ) : null}
        </>
      ) : null}

      {submitted ? (
        <Typography.Paragraph type="success" className="practice-self-writing-submitted">
          Đã nộp bài. Bạn có thể xem lại bài viết hoặc bấm Làm lại để viết lại.
        </Typography.Paragraph>
      ) : null}
    </div>
  );
}
