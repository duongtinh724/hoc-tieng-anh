import { TOTAL_DAYS } from "@/lib/constants";

interface StatsGridProps {
  doneCount: number;
}

export function StatsGrid({ doneCount }: StatsGridProps) {
  return (
    <div className="stats">
      <div className="stat">
        <div className="stat-value">30 phút</div>
        <div className="stat-label">Mỗi ngày, một giờ cố định</div>
      </div>
      <div className="stat">
        <div className="stat-value">
          {doneCount}/{TOTAL_DAYS}
        </div>
        <div className="stat-label">Buổi đã đánh dấu xong</div>
      </div>
      <div className="stat">
        <div className="stat-value">12/20</div>
        <div className="stat-label">Mốc đạt bài ngày 30</div>
      </div>
    </div>
  );
}
