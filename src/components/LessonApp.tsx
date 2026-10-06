"use client";

import { useMemo, useState } from "react";
import { PracticeMenuPanel } from "@/components/practice/PracticeMenuPanel";
import { PracticePage } from "@/components/practice/PracticePage";
import { getWeekOptions, getTotalDays } from "@/data/days";
import { AppShell } from "@/components/layout/AppShell";
import { PageHeader } from "@/components/layout/PageHeader";
import { GuidePanel } from "@/components/guide/GuidePanel";
import { REVIEW_PLAN_ENABLED } from "@/lib/constants";
import { ReviewPlanPanel } from "@/components/review/ReviewPlanPanel";
import { LessonCard } from "@/components/lesson/LessonCard";
import { DayGrid } from "@/components/navigation/DayGrid";
import { MonthSelector } from "@/components/navigation/MonthSelector";
import { WeekPills } from "@/components/navigation/WeekPills";
import { ProgressBar } from "@/components/stats/ProgressBar";
import { StatsGrid } from "@/components/stats/StatsGrid";
import { useLessonState } from "@/hooks/useLessonState";

export function LessonApp() {
  const {
    hydrated,
    state,
    doneDays,
    monthConfig,
    nextDay,
    visibleDays,
    currentLesson,
    activeSection,
    setActiveSection,
    setMonth,
    setWeek,
    setSelectedDay,
    goToNextDay,
    toggleDayDone,
    recordPracticeCompletion,
    practiceCompletions,
  } = useLessonState();
  const [practiceOpen, setPracticeOpen] = useState(false);
  const [practiceDay, setPracticeDay] = useState<number | null>(null);

  const weeks = useMemo(() => getWeekOptions(state.month), [state.month]);
  const totalDays = getTotalDays(state.month);

  if (!hydrated) {
    return (
      <div className="loading-screen">
        <p>Đang tải...</p>
      </div>
    );
  }

  if (!currentLesson) {
    return (
      <div className="loading-screen">
        <p>Chưa có bài học cho tháng này.</p>
      </div>
    );
  }

  const doneCount = doneDays.length;
  const isDone = doneDays.includes(currentLesson.day);
  const sidebar = (
    <>
      <MonthSelector selectedMonth={state.month} onSelectMonth={setMonth} />

      <div className="sidebar-section">
        <p className="nav-label">Chọn tuần</p>
        <WeekPills
          weeks={weeks}
          selectedWeek={state.week}
          onSelectWeek={setWeek}
        />
      </div>

      <div className="sidebar-section">
        <p className="nav-label">Chọn ngày</p>
        <DayGrid
          days={visibleDays}
          selectedDay={state.selectedDay}
          doneDays={doneDays}
          onSelectDay={setSelectedDay}
        />
      </div>

      <button type="button" className="btn-continue" onClick={goToNextDay}>
        ▶ Tiếp tục ngày {nextDay}
      </button>

      <div className="sidebar-progress">
        <ProgressBar
          doneCount={doneCount}
          totalDays={totalDays}
          monthTitle={monthConfig.title}
        />
      </div>
    </>
  );

  return (
    <AppShell
      activeSection={activeSection}
      onNavigate={setActiveSection}
      sidebar={sidebar}
    >
      {activeSection === "overview" && (
        <section className="panel overview-panel">
          <PageHeader monthConfig={monthConfig} />
          <StatsGrid
            doneCount={doneCount}
            totalDays={totalDays}
            nextDay={nextDay}
          />
          <ProgressBar
            doneCount={doneCount}
            totalDays={totalDays}
            monthTitle={monthConfig.title}
          />

          <div className="overview-bottom">
            <div className="cta-box">
              <div>
                <strong>Bắt đầu học ngay</strong>
                <p>
                  Bài chưa xong gần nhất: <strong>Ngày {nextDay}</strong>.
                  Mỗi buổi gồm 5 mục — làm lần lượt từ trên xuống.
                </p>
              </div>
              <button type="button" className="btn-primary" onClick={goToNextDay}>
                Học ngày {nextDay}
              </button>
            </div>

            <div className="month-goal">
              <span className="month-goal-label">Mục tiêu {monthConfig.title}</span>
              <p>{monthConfig.goal}</p>
            </div>
          </div>
        </section>
      )}

      {activeSection === "lesson" && (
        <section className="panel lesson-panel">
          <div className="lesson-panel-top">
            <div>
              <p className="page-eyebrow">
                {monthConfig.title} · Ngày {currentLesson.day}/{totalDays}
              </p>
              <h2 className="lesson-panel-title">Buổi học hôm nay</h2>
            </div>
            <button type="button" className="btn-secondary" onClick={goToNextDay}>
              Ngày {nextDay} →
            </button>
          </div>

          <LessonCard
            month={state.month}
            lesson={currentLesson}
            isDone={isDone}
            onToggleDone={(done) => toggleDayDone(currentLesson.day, done)}
            onGoToNext={goToNextDay}
          />
        </section>
      )}

      {activeSection === "practice" && (
        <PracticeMenuPanel
          monthConfig={monthConfig}
          week={state.week}
          practiceCompletions={practiceCompletions}
          onStartPractice={(day) => {
            setPracticeDay(day);
            setPracticeOpen(true);
          }}
        />
      )}

      {practiceOpen && practiceDay !== null && (
        <PracticePage
          month={state.month}
          day={practiceDay}
          onClose={() => {
            setPracticeOpen(false);
            setPracticeDay(null);
          }}
          onComplete={() =>
            recordPracticeCompletion(state.month, practiceDay)
          }
        />
      )}

      {REVIEW_PLAN_ENABLED && activeSection === "review" && (
        <ReviewPlanPanel
          doneDays={doneDays}
          nextDay={nextDay}
          onGoToDay={setSelectedDay}
        />
      )}

      {activeSection === "guide" && <GuidePanel />}
    </AppShell>
  );
}
