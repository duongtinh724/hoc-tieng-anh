import { Typography } from "antd";

interface ScreenInstructionProps {
  title: string;
  instruction: string;
}

function BilingualText({ text }: { text: string }) {
  const [english, ...rest] = text.split("\n");
  const vietnamese = rest.join(" ").trim();

  return (
    <span className="practice-bilingual">
      <span className="practice-bilingual-en">{english}</span>
      {vietnamese ? <span className="practice-bilingual-vi">{vietnamese}</span> : null}
    </span>
  );
}

export function ScreenInstruction({ title, instruction }: ScreenInstructionProps) {
  return (
    <div className="practice-screen-instruction">
      <Typography.Title level={3} style={{ marginBottom: 4 }}>
        <BilingualText text={title} />
      </Typography.Title>
      <Typography.Paragraph type="secondary" style={{ marginBottom: 20 }}>
        <BilingualText text={instruction} />
      </Typography.Paragraph>
    </div>
  );
}
