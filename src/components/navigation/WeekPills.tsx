import { WEEKS } from "@/lib/constants";
import { Pill } from "@/components/ui/Pill";

interface WeekPillsProps {
  selectedWeek: number;
  onSelectWeek: (week: number) => void;
  onGoToNextDay: () => void;
}

export function WeekPills({
  selectedWeek,
  onSelectWeek,
  onGoToNextDay,
}: WeekPillsProps) {
  return (
    <div className="pills">
      {WEEKS.map((week) => (
        <Pill
          key={week.id}
          active={selectedWeek === week.id}
          onClick={() => onSelectWeek(week.id)}
        >
          {week.label}
        </Pill>
      ))}
      <Pill onClick={onGoToNextDay}>Ngày tiếp theo</Pill>
    </div>
  );
}
