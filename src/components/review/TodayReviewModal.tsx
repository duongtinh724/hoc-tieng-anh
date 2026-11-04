"use client";

import { useEffect } from "react";
import type { TodayReview } from "@/lib/today-review";

interface TodayReviewModalProps {
  review: TodayReview;
  onClose: () => void;
  onOpenLesson: (month: number, day: number) => void;
  onOpenVocabDue: () => void;
  onStartToday: () => void;
}

export function TodayReviewModal({
  review,
  onClose,
  onOpenLesson,
  onOpenVocabDue,
  onStartToday,
}: TodayReviewModalProps) {
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const firstLesson = review.lessons[0];

  function closeAnd(action?: () => void) {
    onClose();
    action?.();
  }

  return (
    <div
      className="today-review-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="today-review-title"
      onClick={onClose}
    >
      <div className="today-review-card" onClick={(event) => event.stopPropagation()}>
        <div className="today-review-card-head">
          <div>
            <p className="page-eyebrow">Thông báo ôn tập</p>
            <h2 id="today-review-title">Hôm nay cần ôn lại</h2>
          </div>
          <button type="button" className="today-review-close" onClick={onClose} aria-label="Đóng">
            ×
          </button>
        </div>
        <p className="today-review-study">
          Buổi học: <strong>Ngày {review.studyDay}</strong> — {review.studyTitle}
        </p>

        {review.examNote ? (
          <div className="today-review-callout is-exam">
            <strong>Ngày kiểm tra / ôn</strong>
            <p>{review.examNote}</p>
          </div>
        ) : null}

        {review.prepNote ? (
          <div className="today-review-callout">
            <strong>Chuẩn bị kiểm tra</strong>
            <p>{review.prepNote}</p>
          </div>
        ) : null}

        {review.lessons.length > 0 ? (
          <ul className="today-review-list">
            {review.lessons.map((item) => (
              <li key={`${item.month}-${item.day}`}>
                <button
                  type="button"
                  className="today-review-item"
                  onClick={() => closeAnd(() => onOpenLesson(item.month, item.day))}
                >
                  <span className="today-review-item-top">
                    <span>
                      Ngày {item.day}
                      {item.month !== review.studyMonth ? ` · Tháng ${item.month}` : ""}
                    </span>
                    <span className="today-review-reason">{item.reasons[0]}</span>
                  </span>
                  <strong>{item.title}</strong>
                  {item.words.length > 0 ? (
                    <span className="today-review-words">
                      {item.words.map((word) => word.en).join(" · ")}
                    </span>
                  ) : null}
                  {item.dueCount > 0 ? (
                    <span className="today-review-due">{item.dueCount} từ đến hạn</span>
                  ) : null}
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="today-review-empty">Chưa có bài cũ cần ôn. Học bài mới của hôm nay.</p>
        )}

        <div className="today-review-actions">
          {review.dueWords.length > 0 ? (
            <button type="button" className="btn-primary" onClick={() => closeAnd(onOpenVocabDue)}>
              Ôn {review.dueWords.length} từ đến hạn
            </button>
          ) : firstLesson ? (
            <button
              type="button"
              className="btn-primary"
              onClick={() => closeAnd(() => onOpenLesson(firstLesson.month, firstLesson.day))}
            >
              Ôn Ngày {firstLesson.day}
            </button>
          ) : null}
          <button type="button" className="btn-secondary" onClick={() => closeAnd(onStartToday)}>
            Học Ngày {review.studyDay}
          </button>
          <button type="button" className="today-review-later" onClick={onClose}>
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
}
