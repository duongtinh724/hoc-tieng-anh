"use client";

import { useState } from "react";
import { PracticeMenuPanel } from "@/components/practice/PracticeMenuPanel";
import { PracticePage } from "@/components/practice/PracticePage";
import { getTotalDays } from "@/data/days";
import { AppShell } from "@/components/layout/AppShell";
import { PageHeader } from "@/components/layout/PageHeader";
import { GuidePanel } from "@/components/guide/GuidePanel";
import { REVIEW_PLAN_ENABLED } from "@/lib/constants";
import { ReviewPlanPanel } from "@/components/review/ReviewPlanPanel";
import { TodayReviewModal } from "@/components/review/TodayReviewModal";
import { useTodayReview } from "@/hooks/useTodayReview";
import { todayReviewBadge } from "@/lib/today-review";
import { LessonCard } from "@/components/lesson/LessonCard";
import { MonthRail } from "@/components/navigation/MonthRail";
import { ProgressBar } from "@/components/stats/ProgressBar";
import { StatsGrid } from "@/components/stats/StatsGrid";
import { RoadmapPanel } from "@/components/roadmap/RoadmapPanel";
import { TensesPanel } from "@/components/tenses/TensesPanel";
import { VocabPanel } from "@/components/vocab/VocabPanel";
import { useLessonState } from "@/hooks/useLessonState";

export function LessonApp() {
  const {
    hydrated,
    state,
    doneDays,
    monthConfig,
    nextDay,
    currentLesson,
    activeSection,
    setActiveSection,
    openPracticeDay,
    setOpenPracticeDay,
    setSelectedDay,
    openLessonDay,
    openVocabDay,
    vocabDay,
    goToNextDay,
    toggleDayDone,
    recordPracticeCompletion,
    practiceCompletions,
    quizScores,
    recordQuizScore,
  } = useLessonState();
  const [vocabDue, setVocabDue] = useState(false);
  const totalDays = getTotalDays(state.month);
  const todayReview = useTodayReview({
    month: state.month,
    nextDay,
    selectedDay: state.selectedDay,
    doneDays,
    ready: hydrated,
  });

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
    <div className="sidebar-progress">
      <ProgressBar
        doneCount={doneCount}
        totalDays={totalDays}
        monthTitle={monthConfig.title}
      />
    </div>
  );

  const monthRail = (
    <MonthRail
      selectedMonth={state.month}
      selectedDay={state.selectedDay}
      progress={state.progress}
      onSelectDay={(month, day) => {
        if (activeSection === "vocab") openVocabDay(month, day);
        else openLessonDay(month, day);
      }}
    />
  );

  return (
    <>
    <AppShell
      activeSection={activeSection}
      onNavigate={setActiveSection}
      sidebar={sidebar}
      monthRail={monthRail}
      reviewCount={todayReviewBadge(todayReview.review)}
      onOpenReview={() => todayReview.openReview()}
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
          practiceCompletions={practiceCompletions}
          quizScores={quizScores}
          onStartPractice={(day) => setOpenPracticeDay(day)}
        />
      )}

      {REVIEW_PLAN_ENABLED && activeSection === "review" && (
        <ReviewPlanPanel
          doneDays={doneDays}
          nextDay={nextDay}
          onGoToDay={setSelectedDay}
        />
      )}

      {activeSection === "roadmap" && (
        <RoadmapPanel
          onOpenDay={openLessonDay}
        />
      )}

      {activeSection === "guide" && <GuidePanel />}

      {activeSection === "tenses" && <TensesPanel />}

      {activeSection === "vocab" && (
        <VocabPanel
          month={state.month}
          monthTitle={monthConfig.title}
          studyDay={vocabDay}
          onOpenDay={(day) => openVocabDay(state.month, day)}
          onBack={() => openVocabDay(state.month, null)}
          onOpenLesson={(day) => openLessonDay(state.month, day)}
          startDue={vocabDue}
          onDueConsumed={() => setVocabDue(false)}
        />
      )}
    </AppShell>
    {openPracticeDay !== null ? (
      <PracticePage
        month={state.month}
        day={openPracticeDay}
        onClose={() => setOpenPracticeDay(null)}
        onComplete={() =>
          recordPracticeCompletion(state.month, openPracticeDay)
        }
        onQuizScore={(score) =>
          recordQuizScore(state.month, openPracticeDay, score)
        }
      />
    ) : null}
    {todayReview.open && todayReview.review ? (
      <TodayReviewModal
        review={todayReview.review}
        onClose={() => todayReview.setOpen(false)}
        onOpenLesson={openLessonDay}
        onOpenVocabDue={() => {
          setVocabDue(true);
          setActiveSection("vocab");
        }}
        onStartToday={goToNextDay}
      />
    ) : null}
    </>
  );
}
