import type { DayLesson } from "@/types/lesson";
import { Pill } from "@/components/ui/Pill";

interface DayPillsProps {
  days: DayLesson[];
  selectedDay: number;
  doneDays: number[];
  onSelectDay: (day: number) => void;
}

export function DayPills({
  days,
  selectedDay,
  doneDays,
  onSelectDay,
}: DayPillsProps) {
  return (
    <div className="pills">
      {days.map((day) => {
        const done = doneDays.includes(day.day);
        const active = selectedDay === day.day;

        return (
          <Pill
            key={day.day}
            active={active}
            done={done}
            onClick={() => onSelectDay(day.day)}
          >
            {done ? `${day.day} xong` : `Ngày ${day.day}`}
          </Pill>
        );
      })}
    </div>
  );
}
