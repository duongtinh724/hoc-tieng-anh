import type { DayLesson } from "@/types/lesson";

function dayMark(title: string): { kind: "review" | "test"; label: string; icon: string } | null {
  if (/kiểm tra/i.test(title)) {
    return { kind: "test", label: "Kiểm tra", icon: "✎" };
  }
  if (/^ôn/i.test(title)) {
    return { kind: "review", label: "Ôn tập", icon: "↻" };
  }
  return null;
}

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
        const mark = dayMark(day.title);

        return (
          <button
            key={day.day}
            type="button"
            className={`day-cell${active ? " active" : ""}${done ? " done" : ""}${mark ? ` is-${mark.kind}` : ""}`}
            onClick={() => onSelectDay(day.day)}
            title={mark ? `Ngày ${day.day} — ${mark.label}: ${day.title}` : `Ngày ${day.day}: ${day.title}`}
            aria-label={`Ngày ${day.day}: ${day.title}${mark ? ` — ${mark.label}` : ""}${done ? " — đã xong" : ""}`}
          >
            <span className="day-cell-num">{day.day}</span>
            {mark ? <span className="day-cell-mark" aria-hidden="true">{mark.icon}</span> : null}
            {done && <span className="day-cell-check">✓</span>}
          </button>
        );
      })}
    </div>
  );
}
