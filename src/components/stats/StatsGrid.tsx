interface StatsGridProps {
  doneCount: number;
  totalDays: number;
  nextDay: number;
}

export function StatsGrid({ doneCount, totalDays, nextDay }: StatsGridProps) {
  const percent = totalDays > 0 ? Math.round((doneCount / totalDays) * 100) : 0;

  return (
    <div className="stats">
      <div className="stat stat--highlight">
        <div className="stat-value">{nextDay <= totalDays ? `Ngày ${nextDay}` : "Xong!"}</div>
        <div className="stat-label">Bài tiếp theo nên học</div>
      </div>
      <div className="stat">
        <div className="stat-value">
          {doneCount}/{totalDays}
        </div>
        <div className="stat-label">Buổi đã hoàn thành</div>
      </div>
      <div className="stat">
        <div className="stat-value">{percent}%</div>
        <div className="stat-label">Tiến độ tháng này</div>
      </div>
      <div className="stat">
        <div className="stat-value">30 phút</div>
        <div className="stat-label">Thời gian mỗi buổi</div>
      </div>
    </div>
  );
}
