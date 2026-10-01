interface ProgressBarProps {
  doneCount: number;
  totalDays: number;
  monthTitle: string;
}

export function ProgressBar({
  doneCount,
  totalDays,
  monthTitle,
}: ProgressBarProps) {
  const percent = totalDays > 0 ? (doneCount / totalDays) * 100 : 0;

  return (
    <div className="progress-wrap">
      <div className="progress-meta">
        <span>Tiến độ {monthTitle}</span>
        <span>
          {doneCount} / {totalDays} buổi
        </span>
      </div>
      <div className="progress-bar" role="progressbar" aria-valuenow={doneCount} aria-valuemin={0} aria-valuemax={totalDays}>
        <div className="progress-fill" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}
