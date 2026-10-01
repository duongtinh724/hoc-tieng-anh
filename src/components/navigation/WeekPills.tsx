import type { WeekOption } from "@/types/lesson";
import { Pill } from "@/components/ui/Pill";

interface WeekPillsProps {
  weeks: WeekOption[];
  selectedWeek: number;
  onSelectWeek: (week: number) => void;
}

export function WeekPills({
  weeks,
  selectedWeek,
  onSelectWeek,
}: WeekPillsProps) {
  return (
    <div className="week-pills">
      {weeks.map((week) => (
        <Pill
          key={week.id}
          active={selectedWeek === week.id}
          onClick={() => onSelectWeek(week.id)}
        >
          {week.label}
        </Pill>
      ))}
    </div>
  );
}
