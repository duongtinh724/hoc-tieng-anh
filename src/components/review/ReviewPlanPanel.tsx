"use client";

import {
  DAILY_REVIEW_LAYERS,
  PREP_REVIEWS,
  REVIEW_MILESTONES,
} from "@/lib/review-plan";

interface ReviewPlanPanelProps {
  doneDays: number[];
  nextDay: number;
  onGoToDay: (day: number) => void;
}

function getMilestoneStatus(
  day: number,
  doneDays: number[],
  nextDay: number,
): "done" | "current" | "upcoming" {
  if (doneDays.includes(day)) return "done";
  if (nextDay === day) return "current";
  const weekStart = day - 6;
  if (nextDay >= weekStart && nextDay < day) return "current";
  return "upcoming";
}

export function ReviewPlanPanel({
  doneDays,
  nextDay,
  onGoToDay,
}: ReviewPlanPanelProps) {
  return (
    <section className="panel review-panel">
      <h2>Plan ôn tập — Tháng 1</h2>
      <p className="panel-lead">
        3 lớp ôn: hàng ngày (3 phút cuối) → kiểm tra tuần (ngày 7, 14, 21) →
        kiểm tra tổng (ngày 30).
      </p>

      <div className="review-layers">
        {DAILY_REVIEW_LAYERS.map((layer, index) => (
          <div key={layer.title} className="review-layer-card">
            <span className="review-layer-num">{index + 1}</span>
            <div>
              <strong>{layer.title}</strong>
              <span className="review-layer-time">{layer.time}</span>
              <p>{layer.detail}</p>
            </div>
          </div>
        ))}
      </div>

      <h3 className="review-section-title">4 mốc kiểm tra trong tháng</h3>
      <div className="review-milestones">
        {REVIEW_MILESTONES.map((milestone) => {
          const status = getMilestoneStatus(
            milestone.day,
            doneDays,
            nextDay,
          );

          return (
            <article
              key={milestone.day}
              className={`review-milestone review-milestone--${status}`}
            >
              <header className="review-milestone-header">
                <div>
                  <span className="review-milestone-day">
                    Ngày {milestone.day}
                  </span>
                  <h4>{milestone.title}</h4>
                  <span className="review-milestone-covers">
                    Ôn {milestone.coversDays}
                  </span>
                </div>
                <span className={`review-status-badge review-status-badge--${status}`}>
                  {status === "done"
                    ? "✓ Đã xong"
                    : status === "current"
                      ? "Sắp tới"
                      : "Chưa tới"}
                </span>
              </header>

              <dl className="review-meta">
                <div>
                  <dt>Mục tiêu</dt>
                  <dd>{milestone.aim}</dd>
                </div>
                <div>
                  <dt>Dạng bài</dt>
                  <dd>{milestone.format}</dd>
                </div>
                <div>
                  <dt>Đạt</dt>
                  <dd>{milestone.target}</dd>
                </div>
                <div>
                  <dt>Nếu chưa đạt</dt>
                  <dd>{milestone.ifFail}</dd>
                </div>
              </dl>

              <div className="review-topics">
                <strong>Kiến thức ôn:</strong>
                <ul>
                  {milestone.topics.map((topic) => (
                    <li key={topic}>{topic}</li>
                  ))}
                </ul>
              </div>

              <div className="review-checklist">
                <strong>Checklist trước ngày kiểm tra:</strong>
                <ul>
                  {milestone.prepChecklist.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <button
                type="button"
                className="btn-secondary review-go-btn"
                onClick={() => onGoToDay(milestone.day)}
              >
                Mở bài ngày {milestone.day} →
              </button>
            </article>
          );
        })}
      </div>

      <h3 className="review-section-title">Ôn nhẹ tối hôm trước (tùy chọn)</h3>
      <div className="review-prep-grid">
        {PREP_REVIEWS.map((prep) => (
          <div key={prep.beforeDay} className="review-prep-card">
            <span className="review-prep-label">{prep.label}</span>
            <ul>
              {prep.tasks.map((task) => (
                <li key={task}>{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
