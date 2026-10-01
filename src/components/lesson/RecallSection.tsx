interface RecallSectionProps {
  recall: string;
}

export function RecallSection({ recall }: RecallSectionProps) {
  return (
    <div className="recall-box">
      <span className="recall-label">Nhiệm vụ</span>
      <p>{recall}</p>
    </div>
  );
}
