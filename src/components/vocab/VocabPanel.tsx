"use client";

import { useEffect, useMemo, useState } from "react";
import { VocabDayPage } from "@/components/vocab/VocabDayPage";
import { getDaysForMonth } from "@/data/curriculum";
import { useVocabProgress } from "@/hooks/useVocabProgress";
import {
  estimatedMinutes,
  listDueItems,
  listDueItemsAll,
  listVocabForDay,
  monthVocabStats,
  statusLabel,
} from "@/lib/vocab-study";
import type { VocabDayStatus, VocabItem } from "@/types/vocab";

interface VocabPanelProps {
  month: number;
  monthTitle: string;
  studyDay: number | null;
  onOpenDay: (day: number) => void;
  onBack: () => void;
  onOpenLesson: (day: number) => void;
  startDue?: boolean;
  onDueConsumed?: () => void;
}

export function VocabPanel({
  month,
  monthTitle,
  studyDay,
  onOpenDay,
  onBack,
  onOpenLesson,
  startDue = false,
  onDueConsumed,
}: VocabPanelProps) {
  const progress = useVocabProgress();
  const [dueSession, setDueSession] = useState<VocabItem[] | null>(null);

  useEffect(() => {
    if (!startDue || !progress.ready) return;
    const items = listDueItemsAll(progress.store);
    if (items.length > 0) setDueSession(items);
    onDueConsumed?.();
  }, [startDue, progress.ready, progress.store, onDueConsumed]);
  const stats = useMemo(
    () => (progress.ready ? monthVocabStats(progress.store, month) : null),
    [month, progress.ready, progress.store],
  );

  if (!progress.ready || !stats) {
    return (
      <section className="panel">
        <p>Đang tải từ vựng...</p>
      </section>
    );
  }

  if (dueSession) {
    return (
      <VocabDayPage
        key="due-review"
        month={month}
        lesson={null}
        items={dueSession}
        heading="Ôn từ đến hạn"
        progress={progress}
        onBack={() => setDueSession(null)}
      />
    );
  }

  if (studyDay != null) {
    const lesson = getDaysForMonth(month).find((item) => item.day === studyDay) ?? null;
    const items = listVocabForDay(month, studyDay);
    const next = stats.days.find((item) => item.lesson.day > studyDay && item.items.length > 0)?.lesson.day;
    return (
      <VocabDayPage
        key={`${month}-${studyDay}`}
        month={month}
        lesson={lesson}
        items={items}
        progress={progress}
        onBack={onBack}
        onOpenLesson={lesson ? () => onOpenLesson(lesson.day) : undefined}
        onNextDay={next ? () => onOpenDay(next) : undefined}
      />
    );
  }

  const weeks = new Map<number, typeof stats.days>();
  for (const row of stats.days) {
    const bucket = weeks.get(row.lesson.week) ?? [];
    bucket.push(row);
    weeks.set(row.lesson.week, bucket);
  }

  return (
    <section className="panel vocab-panel">
      <p className="page-eyebrow">{monthTitle}</p>
      <h2>Học từ vựng theo ngày</h2>
      <p className="lead">
        Học từ của từng ngày bằng thẻ, nghe phát âm, rồi kiểm tra. Tiến độ lưu trên máy này.
      </p>

      <div className="stats">
        <div className="stat stat--highlight">
          <div className="stat-value">{stats.percent}%</div>
          <div className="stat-label">Ngày đã xong từ vựng</div>
        </div>
        <div className="stat">
          <div className="stat-value">{stats.completed}/{stats.totalDays}</div>
          <div className="stat-label">Ngày hoàn thành</div>
        </div>
        <div className="stat">
          <div className="stat-value">{stats.inProgress}</div>
          <div className="stat-label">Đang học</div>
        </div>
        <div className="stat">
          <div className="stat-value">{stats.notStarted}</div>
          <div className="stat-label">Chưa bắt đầu</div>
        </div>
        <div className="stat">
          <div className="stat-value">{stats.mastered}/{stats.totalWords}</div>
          <div className="stat-label">Từ đã thuộc</div>
        </div>
        <div className="stat">
          <div className="stat-value">Tuần {stats.currentWeek}</div>
          <div className="stat-label">Tuần đang học</div>
        </div>
      </div>

      <div className="cta-box">
        <div>
          <strong>Tiếp tục học</strong>
          <p>Ngày {stats.continueDay} · {stats.due.length} từ đến hạn ôn.</p>
        </div>
        <div className="vocab-cta-actions">
          <button type="button" className="vocab-action-btn is-continue" onClick={() => onOpenDay(stats.continueDay)}>
            Học tiếp
          </button>
          {stats.due.length > 0 ? (
            <button type="button" className="vocab-action-btn is-review" onClick={() => setDueSession(listDueItems(progress.store, month))}>
              Ôn từ đến hạn
            </button>
          ) : null}
        </div>
      </div>

      {[...weeks.entries()].map(([week, rows]) => (
        <div key={week} className="vocab-week">
          <h3>Tuần {week}</h3>
          <div className="vocab-day-grid">
            {rows.map((row) => {
              const status: VocabDayStatus = row.status;
              const percent = row.items.length ? Math.round((row.viewed / row.items.length) * 100) : 0;
              return (
                <article key={row.lesson.day} className={`vocab-day-card is-${status}`}>
                  <div className="vocab-day-card-top">
                    <span>Ngày {row.lesson.day}</span>
                    <span className={`vocab-status is-${status}`}>{statusLabel(status)}</span>
                  </div>
                  <h4>{row.lesson.title}</h4>
                  <p>
                    {row.items.length} từ · {estimatedMinutes(row.items.length)} phút
                  </p>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${percent}%` }} />
                  </div>
                  <button
                    type="button"
                    className={`vocab-action-btn ${
                      status === "completed" ? "is-review" : status === "in-progress" ? "is-continue" : "is-start"
                    }`}
                    onClick={() => onOpenDay(row.lesson.day)}
                  >
                    {status === "completed" ? "Ôn lại" : status === "in-progress" ? "Học tiếp" : "Bắt đầu"}
                  </button>
                </article>
              );
            })}
          </div>
        </div>
      ))}
    </section>
  );
}
