import { MONTHS } from "@/data/curriculum";
import type { MonthConfig } from "@/types/lesson";

interface MonthSelectorProps {
  selectedMonth: number;
  onSelectMonth: (monthId: number) => void;
}

export function MonthSelector({
  selectedMonth,
  onSelectMonth,
}: MonthSelectorProps) {
  return (
    <div className="month-selector">
      <p className="nav-label">Tháng học</p>
      <div className="month-list">
        {MONTHS.map((month: MonthConfig) => {
          const isActive = month.id === selectedMonth;
          const isLocked = month.status === "coming-soon";

          return (
            <button
              key={month.id}
              type="button"
              className={`month-item${isActive ? " active" : ""}${isLocked ? " locked" : ""}`}
              disabled={isLocked}
              onClick={() => onSelectMonth(month.id)}
              title={isLocked ? "Sắp ra mắt" : month.goal}
            >
              <span className="month-item-title">{month.title}</span>
              <span className="month-item-sub">{month.subtitle}</span>
              {isLocked && <span className="month-badge">Sắp ra</span>}
            </button>
          );
        })}
      </div>
    </div>
  );
}
