"use client";

import { Input, Typography } from "antd";
import { ScreenInstruction } from "@/components/practice/shared/ScreenInstruction";
import type { DictationExerciseConfig, ScreenState } from "@/types/practice";

interface DictationExerciseProps {
  config: DictationExerciseConfig;
  state: ScreenState;
  onChange: (itemId: string, value: string) => void;
}

function englishHint(text: string): string {
  const first = text.trim().split(/\s+/)[0] ?? "";
  return first ? `${first} …` : "";
}

export function DictationExercise({ config, state, onChange }: DictationExerciseProps) {
  const activeIndex = config.items.findIndex((item) => !state.lockedIds.includes(item.id));
  const active = activeIndex >= 0 ? config.items[activeIndex] : null;
  const attempts = active ? (state.attemptCounts?.[active.id] ?? 0) : 0;
  const showHint = Boolean(active && attempts >= 3);

  return (
    <div className="practice-dictation">
      <ScreenInstruction
        title={config.title}
        instruction={
          "Read the Vietnamese sentence. Type the English sentence in the box. Then press Check.\nĐọc câu tiếng Việt. Gõ câu tiếng Anh vào ô. Rồi bấm Kiểm tra."
        }
      />
      <Typography.Text type="secondary">
        {active
          ? `Câu ${activeIndex + 1} / ${config.items.length}`
          : `${config.items.length} / ${config.items.length}`}
      </Typography.Text>

      <ol className="practice-dictation-done">
        {config.items.map((item) =>
          state.lockedIds.includes(item.id) ? (
            <li key={item.id}>
              {item.hint} → {item.text}
            </li>
          ) : null,
        )}
      </ol>

      {active ? (
        <div className="practice-dictation-card">
          <p className="practice-dictation-label">Câu tiếng Việt</p>
          <p className="practice-dictation-prompt">{active.hint}</p>
          <Input
            size="large"
            value={state.answers[active.id] ?? ""}
            placeholder="Viết câu tiếng Anh"
            status={state.feedback[active.id] === "incorrect" ? "error" : undefined}
            onChange={(event) => onChange(active.id, event.target.value)}
          />
          {state.feedback[active.id] === "incorrect" ? (
            <Typography.Text type="danger">
              Chưa đúng. Viết lại câu tiếng Anh.
              {attempts < 3 ? ` Còn ${3 - attempts} lần trước khi có gợi ý.` : ""}
            </Typography.Text>
          ) : null}
          {showHint ? (
            <Typography.Paragraph className="practice-dictation-hint">
              Gợi ý: {englishHint(active.text)}
            </Typography.Paragraph>
          ) : null}
        </div>
      ) : (
        <Typography.Paragraph>Bạn đã dịch xong các câu. Bấm Tiếp.</Typography.Paragraph>
      )}
    </div>
  );
}
