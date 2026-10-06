"use client";

import { getDaysByWeek } from "@/data/days";
import { hasPracticeLesson, getPracticeLesson } from "@/data/practice";
import {
  getPracticeCompletionCount,
  getPracticeCompletionTier,
  getPracticeCompletionTooltip,
} from "@/lib/practice/progress";
import type { MonthConfig } from "@/types/lesson";

interface PracticeMenuPanelProps {
  monthConfig: MonthConfig;
  week: number;
  practiceCompletions: Record<string, number>;
  onStartPractice: (day: number) => void;
}

export function PracticeMenuPanel({
  monthConfig,
  week,
  practiceCompletions,
  onStartPractice,
}: PracticeMenuPanelProps) {
  const days = getDaysByWeek(monthConfig.id, week);
  const availableCount = days.filter((day) =>
    hasPracticeLesson(monthConfig.id, day.day),
  ).length;

  return (
    <section className="panel practice-menu-panel">
      <p className="page-eyebrow">
        {monthConfig.title}
        {week === 0 ? " · Cả tháng" : ` · Tuần ${week}`}
      </p>
      <h2>Luyện tập theo ngày</h2>
      <p className="panel-lead">
        Chọn ngày để làm 8 bài tập tương tác. Mỗi lần vào bài, thứ tự câu và
        từ sẽ thay đổi.
        {availableCount > 0
          ? ` Hiện có ${availableCount} ngày trong danh sách bên dưới.`
          : " Chưa có bài luyện cho tuần này."}
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

          return (
            <li key={day.day}>
              <button
                type="button"
                className={`practice-day-card${available ? "" : " is-unavailable"}${tier !== "none" ? ` practice-day-card--${tier}` : ""}`}
                disabled={!available}
                onClick={() => onStartPractice(day.day)}
              >
                <span className="practice-day-card-num">Ngày {day.day}</span>
                <span className="practice-day-card-body">
                  <strong>{day.title}</strong>
                  <span className="practice-day-card-meta">
                    {available
                      ? `${practice?.meta.title ?? day.title} · 8 bài`
                      : "Sắp có"}
                  </span>
                </span>
                {available && completionCount > 0 ? (
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
        Dùng menu tuần / ngày bên trái để lọc nhanh. Màu viền: 1 lần xanh da
        trời · 2 lần xanh lá · 3 lần vàng · 4+ lần đỏ.
      </p>
    </section>
  );
}
