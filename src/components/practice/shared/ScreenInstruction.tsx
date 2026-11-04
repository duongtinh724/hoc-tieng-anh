interface ScreenInstructionProps {
  title: string;
  instruction: string;
}

function viLine(text: string): string {
  const parts = text
    .split("\n")
    .map((part) => part.trim())
    .filter(Boolean);
  if (parts.length >= 2) return parts.slice(1).join(" ");
  return parts[0] ?? "";
}

export function ScreenInstruction({ title, instruction }: ScreenInstructionProps) {
  const heading = viLine(title);
  const detail = viLine(instruction);

  return (
    <header className="practice-screen-instruction">
      <h3>{heading}</h3>
      {detail && detail !== heading ? <p>{detail}</p> : null}
    </header>
  );
}
