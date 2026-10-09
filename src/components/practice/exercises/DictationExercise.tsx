"use client";

import { SoundOutlined } from "@ant-design/icons";
import { Button, Input, Typography } from "antd";
import { useEffect } from "react";
import { speakEnglish } from "@/lib/speech";
import type { DictationExerciseConfig, ScreenState } from "@/types/practice";

interface DictationExerciseProps {
  config: DictationExerciseConfig;
  state: ScreenState;
  onChange: (itemId: string, value: string) => void;
}

export function DictationExercise({ config, state, onChange }: DictationExerciseProps) {
  const activeIndex = config.items.findIndex((item) => !state.lockedIds.includes(item.id));
  const active = activeIndex >= 0 ? config.items[activeIndex] : null;
  const attempts = active ? (state.attemptCounts?.[active.id] ?? 0) : 0;
  const showHint = Boolean(active && attempts >= 3);

  useEffect(() => {
    if (!active) return;
    speakEnglish(active.text);
  }, [active?.id, active?.text]);

  return (
    <div className="practice-dictation">
      <Typography.Text type="secondary">
        {active
          ? `Câu ${activeIndex + 1} / ${config.items.length}`
          : `${config.items.length} / ${config.items.length}`}
      </Typography.Text>

      <ol className="practice-dictation-done">
        {config.items.map((item) =>
          state.lockedIds.includes(item.id) ? (
            <li key={item.id}>{item.text}</li>
          ) : null,
        )}
      </ol>

      {active ? (
        <div className="practice-dictation-card">
          <Button
            icon={<SoundOutlined />}
            size="large"
            onClick={() => speakEnglish(active.text)}
          >
            Nghe
          </Button>
          <Input
            size="large"
            value={state.answers[active.id] ?? ""}
            placeholder="Gõ lại những gì bạn nghe"
            status={state.feedback[active.id] === "incorrect" ? "error" : undefined}
            onChange={(event) => onChange(active.id, event.target.value)}
          />
          {state.feedback[active.id] === "incorrect" ? (
            <Typography.Text type="danger">
              Chưa đúng. Nghe lại rồi gõ tiếp.
              {attempts < 3 ? ` Còn ${3 - attempts} lần trước khi có gợi ý.` : ""}
            </Typography.Text>
          ) : null}
          {showHint ? (
            <Typography.Paragraph className="practice-dictation-hint">
              Gợi ý: {active.hint}
            </Typography.Paragraph>
          ) : null}
        </div>
      ) : (
        <Typography.Paragraph>Bạn đã chép xong các câu. Bấm Tiếp.</Typography.Paragraph>
      )}
    </div>
  );
}
