import type { DayLesson } from "@/types/lesson";
import { AlphabetChart } from "@/components/lesson/AlphabetChart";
import { TextListSection } from "@/components/lesson/TextListSection";

interface CopySectionProps {
  lesson: DayLesson;
}

export function CopySection({ lesson }: CopySectionProps) {
  const showAlphabetChart = lesson.day === 1;

  return (
    <>
      {showAlphabetChart && (
        <div className="alphabet-chart-block">
          <p className="alphabet-chart-label">Bảng chữ cái</p>
          <AlphabetChart />
          <p className="expandable-image-caption">
            Đọc theo phiên âm bên dưới mỗi chữ cái, nhắc lại 3 vòng.
          </p>
        </div>
      )}

      <TextListSection
        items={showAlphabetChart ? lesson.copy.slice(1) : lesson.copy}
      />
    </>
  );
}
