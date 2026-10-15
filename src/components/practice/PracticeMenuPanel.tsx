"use client";

import { getDaysForMonth } from "@/data/curriculum";
import { hasPracticeLesson, getPracticeLesson } from "@/data/practice";
import {
  getPracticeCompletionCount,
  getPracticeCompletionTier,
  getPracticeCompletionTooltip,
} from "@/lib/practice/progress";
import type { MonthConfig } from "@/types/lesson";

interface PracticeMenuPanelProps {
  monthConfig: MonthConfig;
  practiceCompletions: Record<string, number>;
  quizScores: Record<string, number>;
  onStartPractice: (day: number) => void;
}

export function PracticeMenuPanel({
  monthConfig,
  practiceCompletions,
  quizScores,
  onStartPractice,
}: PracticeMenuPanelProps) {
  const days = getDaysForMonth(monthConfig.id);
  const availableCount = days.filter((day) =>
    hasPracticeLesson(monthConfig.id, day.day),
  ).length;

  return (
    <section className="panel practice-menu-panel">
      <p className="page-eyebrow">
        {monthConfig.title}
      </p>
      <h2>Luyện tập theo ngày</h2>
      <p className="panel-lead">
        Chọn ngày để làm 8 bài tập tương tác. Mỗi lần vào bài, thứ tự câu và
        từ sẽ thay đổi.
        {availableCount > 0
          ? ` Hiện có ${availableCount} ngày trong danh sách bên dưới.`
          : " Chưa có bài luyện cho tháng này."}
      </p>

      <ul className="practice-day-list">
        {days.map((day) => {
          const available = hasPracticeLesson(monthConfig.id, day.day);
          const practice = available
            ? getPracticeLesson(monthConfig.id, day.day)
            : null;
          const completionCount = getPracticeCompletionCount(
            practiceCompletions,
            monthConfig.id,
            day.day,
          );
          const tier = getPracticeCompletionTier(completionCount);
          const isQuiz = practice?.screens.some((screen) => screen.type === "quiz") ?? false;
          const isTest = /kiểm tra/i.test(day.title);
          const isReview = /^ôn/i.test(day.title);
          const quizScore = quizScores[`${monthConfig.id}-${day.day}`];
          const hasQuizScore = isQuiz && quizScore !== undefined;

          return (
            <li key={day.day}>
              <button
                type="button"
                className={`practice-day-card${available ? "" : " is-unavailable"}${hasQuizScore ? " practice-day-card--done" : ""}${tier !== "none" ? ` practice-day-card--${tier}` : ""}`}
                disabled={!available}
                title={
                  isTest
                    ? `Ngày kiểm tra: ${day.title}`
                    : isReview
                      ? `Ngày ôn tập: ${day.title}`
                      : day.title
                }
                onClick={() => onStartPractice(day.day)}
              >
                <span className="practice-day-card-num">Ngày {day.day}</span>
                <span className="practice-day-card-body">
                  <strong>
                    {day.title}
                    {isTest ? <span className="day-kind-tag is-test">✎ Kiểm tra</span> : null}
                    {isReview ? <span className="day-kind-tag is-review">↻ Ôn tập</span> : null}
                  </strong>
                  <span className="practice-day-card-meta">
                    {available
                      ? isQuiz
                        ? `${practice?.meta.title ?? day.title} · 30 câu`
                        : `${practice?.meta.title ?? day.title} · 8 bài`
                      : "Sắp có"}
                  </span>
                </span>
                {hasQuizScore ? (
                  <span
                    className={`practice-quiz-score-badge${quizScore >= 6 ? " is-pass" : " is-fail"}`}
                  >
                    {Number.isInteger(quizScore) ? quizScore : quizScore.toFixed(1)}/10
                  </span>
                ) : available && completionCount > 0 ? (
                  <span
                    className={`practice-completion-badge practice-completion-badge--${tier}`}
                    title={getPracticeCompletionTooltip(completionCount)}
                    aria-label={getPracticeCompletionTooltip(completionCount)}
                  >
                    <span className="practice-completion-badge-num">
                      {completionCount}
                    </span>
                    <span className="practice-completion-badge-tip">
                      {getPracticeCompletionTooltip(completionCount)}
                    </span>
                  </span>
                ) : available ? (
                  <span className="practice-day-card-action">Bắt đầu →</span>
                ) : null}
              </button>
            </li>
          );
        })}
      </ul>

      <p className="practice-menu-note">
        Dùng menu tháng và ngày bên trái để chọn bài. Màu viền: 1 lần xanh da
        trời · 2 lần xanh lá · 3 lần vàng · 4+ lần đỏ.
      </p>
    </section>
  );
}
