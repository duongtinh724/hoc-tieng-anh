interface RecallSectionProps {
  recall: string;
}

export function RecallSection({ recall }: RecallSectionProps) {
  return (
    <>
      <h3>Ba phút cuối</h3>
      <div className="recall">{recall}</div>
    </>
  );
}
