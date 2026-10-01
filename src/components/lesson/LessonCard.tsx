"use client";

import type { DayLesson } from "@/types/lesson";
import { getRulesForDay } from "@/data/curriculum/month-01/day-rules";
import { SESSION_STEPS } from "@/lib/lesson-steps";
import { LessonStep } from "@/components/lesson/LessonStep";
import { ListenList } from "@/components/lesson/ListenList";
import { RecallSection } from "@/components/lesson/RecallSection";
import { RuleBox } from "@/components/lesson/RuleBox";
import { CopySection } from "@/components/lesson/CopySection";
import { TextListSection } from "@/components/lesson/TextListSection";
import { WordsList } from "@/components/lesson/WordsList";

interface LessonCardProps {
  lesson: DayLesson;
  isDone: boolean;
  onToggleDone: (done: boolean) => void;
  onGoToNext: () => void;
}

const REVIEW_DAYS = [7, 14, 21, 30];

export function LessonCard({
  lesson,
  isDone,
  onToggleDone,
  onGoToNext,
}: LessonCardProps) {
  const reviewDay = REVIEW_DAYS.includes(lesson.day);

  return (
    <article className="card lesson-card">
      <header className="card-header">
        <div className="lesson-title-block">
          <span className="lesson-day-label">Ngày {lesson.day}</span>
          <h2>{lesson.title}</h2>
          {reviewDay && <span className="review-badge">Ngày kiểm tra</span>}
        </div>
        <span className={`badge ${isDone ? "done" : "pending"}`}>
          {isDone ? "✓ Đã xong" : "Chưa xong"}
        </span>
      </header>

      <div className="card-body">
        <div className="lesson-intro-row">
          <div className="aim-box">
            <span className="aim-label">Mục tiêu hôm nay</span>
            <p>{lesson.aim}</p>
          </div>
          <RuleBox rules={getRulesForDay(lesson.day, lesson.rule)} />
        </div>

        <div className="session-overview">
          <strong>5 mục cần học trong buổi này</strong>
          <ol className="session-checklist">
            {SESSION_STEPS.map((step) => (
              <li key={step.step}>
                <span className="mini-step">{step.step}</span>
                <span className="mini-label">{step.title}</span>
                <span className="mini-time">{step.time}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="lesson-steps-grid">
          <LessonStep {...SESSION_STEPS[0]}>
            <WordsList words={lesson.words} />
          </LessonStep>

          <LessonStep {...SESSION_STEPS[1]}>
            <ListenList items={lesson.listen} />
          </LessonStep>

          <LessonStep {...SESSION_STEPS[2]}>
            <CopySection lesson={lesson} />
          </LessonStep>

          <LessonStep {...SESSION_STEPS[3]}>
            <TextListSection items={lesson.exercise} numbered />
          </LessonStep>

          <LessonStep {...SESSION_STEPS[4]} className="lesson-step--full">
            <RecallSection recall={lesson.recall} />
          </LessonStep>
        </div>

        <div className="lesson-footer">
          <label className="done-toggle">
            <input
              type="checkbox"
              checked={isDone}
              onChange={(event) => onToggleDone(event.target.checked)}
            />
            <span>
              <strong>Đánh dấu đã học xong ngày {lesson.day}</strong>
              <small>Tick khi hoàn thành cả 5 mục trên</small>
            </span>
          </label>

          {isDone && (
            <button type="button" className="btn-primary" onClick={onGoToNext}>
              Sang ngày tiếp theo →
            </button>
          )}
        </div>

        {reviewDay && (
          <p className="review-note">
            Ngày kiểm tra: dùng cả 30 phút để làm bài, không học từ mới.
          </p>
        )}
      </div>
    </article>
  );
}
