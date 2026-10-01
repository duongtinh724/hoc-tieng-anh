import { TOTAL_DAYS } from "@/lib/constants";

interface ProgressBarProps {
  doneCount: number;
}

export function ProgressBar({ doneCount }: ProgressBarProps) {
  const percent = (doneCount / TOTAL_DAYS) * 100;

  return (
    <div className="progress-wrap">
      <div className="progress-meta">
        <span>Tiến độ 30 ngày</span>
        <span>
          {doneCount} / {TOTAL_DAYS} buổi
        </span>
      </div>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}
