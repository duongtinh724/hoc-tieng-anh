"use client";

import { useState } from "react";
import { B1DayPage } from "@/components/b1/B1DayPage";
import { B1_DAYS } from "@/data/b1-revision";
import { useB1Revision } from "@/hooks/useB1Revision";
import {
  B1_DAY_TITLE_VI,
  b1DayStatus,
  b1HubStats,
  b1StatusLabel,
  getDayProgress,
} from "@/lib/b1-revision";
import type { B1DayStatus } from "@/types/b1-revision";

export function B1RevisionPanel() {
  const progress = useB1Revision();
  const [openDay, setOpenDay] = useState<number | null>(null);

  if (!progress.ready) {
    return (
      <section className="panel">
        <p>Đang tải phần củng cố B1...</p>
      </section>
    );
  }

  const day = openDay ? B1_DAYS.find((item) => item.day === openDay) : undefined;
  if (day) {
    const next = B1_DAYS.find((item) => item.day === day.day + 1);
    return (
      <B1DayPage
        day={day}
        store={progress.store}
        onBack={() => setOpenDay(null)}
        onStart={progress.startDay}
        onSaveAnswer={(questionId, choice) => progress.saveAnswer(day.day, questionId, choice)}
        onSubmit={() => progress.submitDay(day)}
        onRetry={() => progress.retryDay(day.day)}
        onNextDay={next ? () => setOpenDay(next.day) : undefined}
      />
    );
  }

  const stats = b1HubStats(progress.store);

  return (
    <section className="panel b1-panel">
      <p className="page-eyebrow">Ôn thêm</p>
      <h2>Củng cố B1</h2>
      <p className="lead">
        7 ngày ôn ngữ pháp A2–B1: đọc lý thuyết rồi làm 30 câu trắc nghiệm. Phần này bổ sung,
        không thay buổi học 60 phút. Điểm lưu trên máy này.
      </p>

      <div className="stats">
        <div className="stat stat--highlight">
          <div className="stat-value">{stats.percent}%</div>
          <div className="stat-label">Ngày đã nộp bài</div>
        </div>
        <div className="stat">
          <div className="stat-value">
            {stats.completed}/{stats.totalDays}
          </div>
          <div className="stat-label">Hoàn thành</div>
        </div>
        <div className="stat">
          <div className="stat-value">{stats.inProgress}</div>
          <div className="stat-label">Đang làm</div>
        </div>
        <div className="stat">
          <div className="stat-value">{stats.averageScore == null ? "—" : `${stats.averageScore}%`}</div>
          <div className="stat-label">Điểm trung bình</div>
        </div>
      </div>

      <div className="cta-box">
        <div>
          <strong>Tiếp tục ôn</strong>
          <p>
            Ngày {stats.continueDay} · {B1_DAY_TITLE_VI[stats.continueDay] ?? ""}
          </p>
        </div>
        <button
          type="button"
          className="vocab-action-btn is-continue"
          onClick={() => setOpenDay(stats.continueDay)}
        >
          Học tiếp
        </button>
      </div>

      <div className="b1-day-grid">
        {B1_DAYS.map((item) => {
          const row = getDayProgress(progress.store, item.day);
          const status: B1DayStatus = b1DayStatus(row);
          const total = item.assessment.questions.length;
          const picked = Object.keys(row.answers).length;
          return (
            <article key={item.day} className={`vocab-day-card is-${status}`}>
              <div className="vocab-day-card-top">
                <span>Ngày {item.day}</span>
                <span className={`vocab-status is-${status}`}>{b1StatusLabel(status)}</span>
              </div>
              <h4>{B1_DAY_TITLE_VI[item.day] ?? item.title}</h4>
              <p>
                {item.topics.length} chủ điểm · {total} câu
                {status === "completed" && row.score != null ? ` · ${row.score}%` : picked > 0 ? ` · đã chọn ${picked}/${total}` : ""}
              </p>
              <button
                type="button"
                className={`vocab-action-btn ${
                  status === "completed" ? "is-review" : status === "in-progress" ? "is-continue" : "is-start"
                }`}
                onClick={() => setOpenDay(item.day)}
              >
                {status === "completed" ? "Xem lại" : status === "in-progress" ? "Học tiếp" : "Bắt đầu"}
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
}
