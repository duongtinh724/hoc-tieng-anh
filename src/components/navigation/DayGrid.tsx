import type { DayLesson } from "@/types/lesson";

interface DayGridProps {
  days: DayLesson[];
  selectedDay: number;
  doneDays: number[];
  onSelectDay: (day: number) => void;
}

export function DayGrid({
  days,
  selectedDay,
  doneDays,
  onSelectDay,
}: DayGridProps) {
  return (
    <div className="day-grid">
      {days.map((day) => {
        const done = doneDays.includes(day.day);
        const active = selectedDay === day.day;

        return (
          <button
            key={day.day}
            type="button"
            className={`day-cell${active ? " active" : ""}${done ? " done" : ""}`}
            onClick={() => onSelectDay(day.day)}
            title={day.title}
            aria-label={`Ngày ${day.day}: ${day.title}${done ? " — đã xong" : ""}`}
          >
            <span className="day-cell-num">{day.day}</span>
            {done && <span className="day-cell-check">✓</span>}
          </button>
        );
      })}
    </div>
  );
}
