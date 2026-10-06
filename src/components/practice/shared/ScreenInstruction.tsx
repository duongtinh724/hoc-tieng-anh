import { Typography } from "antd";

interface ScreenInstructionProps {
  title: string;
  instruction: string;
}

export function ScreenInstruction({ title, instruction }: ScreenInstructionProps) {
  return (
    <div className="practice-screen-instruction">
      <Typography.Title level={3} style={{ marginBottom: 4 }}>
        {title}
      </Typography.Title>
      <Typography.Paragraph type="secondary" style={{ marginBottom: 20 }}>
        {instruction}
      </Typography.Paragraph>
    </div>
  );
}
