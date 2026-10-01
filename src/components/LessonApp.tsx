"use client";

import { Callout } from "@/components/ui/Callout";
import { PageHeader } from "@/components/layout/PageHeader";
import { LessonCard } from "@/components/lesson/LessonCard";
import { DayPills } from "@/components/navigation/DayPills";
import { WeekPills } from "@/components/navigation/WeekPills";
import { ProgressBar } from "@/components/stats/ProgressBar";
import { StatsGrid } from "@/components/stats/StatsGrid";
import { useLessonState } from "@/hooks/useLessonState";

export function LessonApp() {
  const {
    hydrated,
    state,
    nextDay,
    visibleDays,
    currentLesson,
    setWeek,
    setSelectedDay,
    goToNextDay,
    toggleDayDone,
  } = useLessonState();

  if (!hydrated) {
    return (
      <div className="wrap">
        <PageHeader />
        <p className="lead">Đang tải tiến độ...</p>
      </div>
    );
  }

  const doneCount = state.doneDays.length;
  const isDone = state.doneDays.includes(currentLesson.day);

  return (
    <div className="wrap">
      <PageHeader />

      <StatsGrid doneCount={doneCount} />
      <ProgressBar doneCount={doneCount} />

      <Callout title="Cách dùng một ngày">
        Phút 0–8: nghe 6 câu, nhắc to 3 vòng. Phút 8–20: chép từ và câu. Phút
        20–27: làm bài, chưa mở đáp án. Phút 27–30: làm phần «Ba phút cuối».
        Ngày 7, 14, 21 và 30 dùng cả buổi để kiểm tra.
      </Callout>

      <h2>Chọn ngày</h2>
      <p className="lead next-hint">
        Bài chưa xong gần nhất là ngày {nextDay}. Mở đáp án sau khi đã viết câu
        trả lời vào vở.
      </p>

      <WeekPills
        selectedWeek={state.week}
        onSelectWeek={setWeek}
        onGoToNextDay={goToNextDay}
      />

      <DayPills
        days={visibleDays}
        selectedDay={state.selectedDay}
        doneDays={state.doneDays}
        onSelectDay={setSelectedDay}
      />

      <LessonCard
        lesson={currentLesson}
        isDone={isDone}
        onToggleDone={(done) => toggleDayDone(currentLesson.day, done)}
      />
    </div>
  );
}
