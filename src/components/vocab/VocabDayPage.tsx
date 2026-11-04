"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { VocabFlashcard } from "@/components/vocab/VocabFlashcard";
import {
  checkVocabAnswer,
  getCardState,
  getDayState,
  isReviewLesson,
} from "@/lib/vocab-study";
import type { DayLesson } from "@/types/lesson";
import type { VocabDifficulty, VocabItem, VocabStudyMode } from "@/types/vocab";
import type { useVocabProgress } from "@/hooks/useVocabProgress";

type Tab = "cards" | "quiz" | "summary";

interface VocabDayPageProps {
  month: number;
  lesson: DayLesson | null;
  items: VocabItem[];
  heading?: string;
  progress: ReturnType<typeof useVocabProgress>;
  onBack: () => void;
  onOpenLesson?: () => void;
  onNextDay?: () => void;
}

export function VocabDayPage({
  month,
  lesson,
  items,
  heading,
  progress,
  onBack,
  onOpenLesson,
  onNextDay,
}: VocabDayPageProps) {
  const [tab, setTab] = useState<Tab>("cards");
  const [index, setIndex] = useState(0);
  const [mode, setMode] = useState<VocabStudyMode>("en-vi");
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState(false);
  const [wrongKeys, setWrongKeys] = useState<string[]>([]);
  const [retryOnly, setRetryOnly] = useState(false);

  const item = items[index];
  const goPrev = useCallback(() => setIndex((current) => Math.max(0, current - 1)), []);
  const goNext = useCallback(
    () => setIndex((current) => Math.min(items.length - 1, current + 1)),
    [items.length],
  );

  useEffect(() => {
    if (!lesson) return;
    progress.startDay(month, lesson.day);
  }, [lesson, month, progress.startDay]);

  useEffect(() => {
    if (!item) return;
    progress.markViewed(item);
  }, [item?.key, progress.markViewed]);
  const day = lesson?.day ?? items[0]?.day ?? 1;
  const dayState = getDayState(progress.store, month, day);
  const viewed = items.filter((entry) => getCardState(progress.store, entry.key).viewed).length;
  const mastered = items.filter((entry) => getCardState(progress.store, entry.key).status === "mastered").length;
  const needReview = items.filter((entry) => getCardState(progress.store, entry.key).needReview).length;
  const reviewDay = lesson ? isReviewLesson(lesson) : false;

  const quizItems = useMemo(
    () => (retryOnly ? items.filter((entry) => wrongKeys.includes(entry.key)) : items),
    [items, retryOnly, wrongKeys],
  );

  const quizScore = items.reduce(
    (sum, entry) => sum + (checkVocabAnswer(answers[entry.key] ?? "", entry, mode) ? 1 : 0),
    0,
  );

  function finishDay() {
    if (lesson) progress.completeDay(month, day);
    setTab("summary");
  }

  if (items.length === 0) {
    return (
      <section className="panel vocab-panel vocab-panel--study">
        <div className="vocab-shell">
          <button type="button" className="vocab-back" onClick={onBack}>
            ← Tất cả ngày
          </button>
          <h2>{heading ?? `Ngày ${day}`}</h2>
          <p className="vocab-empty">
            {reviewDay
              ? "Ngày ôn: không có từ mới. Hãy ôn các từ đến hạn ở trang Từ vựng."
              : "Ngày này chưa có danh sách từ vựng."}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="panel vocab-panel vocab-panel--study">
      <div className="vocab-shell">
      <div className="vocab-day-head">
        <button type="button" className="vocab-back" onClick={onBack}>
          ← Tất cả ngày
        </button>
        {onOpenLesson ? (
          <button type="button" className="vocab-text-btn" onClick={onOpenLesson}>
            Mở bài học
          </button>
        ) : null}
      </div>

      <div className="vocab-progress">
        <div className="progress-meta">
          <span>
            {viewed}/{items.length} từ
          </span>
          <span>
            {mastered} thuộc · {needReview} cần ôn
          </span>
        </div>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${Math.round((viewed / items.length) * 100)}%` }} />
        </div>
      </div>

      <div className="vocab-tabs" role="tablist">
        <button type="button" className={tab === "cards" ? "active" : ""} onClick={() => setTab("cards")}>
          Thẻ từ
        </button>
        <button type="button" className={tab === "quiz" ? "active" : ""} onClick={() => setTab("quiz")}>
          Kiểm tra
        </button>
        <button type="button" className={tab === "summary" ? "active" : ""} onClick={() => setTab("summary")}>
          Tóm tắt
        </button>
      </div>

      {tab === "cards" && item ? (
        <VocabFlashcard
          items={items}
          store={progress.store}
          index={index}
          mode={mode}
          onModeChange={setMode}
          onKnown={() => {
            progress.markKnown(item.key);
            goNext();
          }}
          onNeedReview={() => {
            progress.markNeedReview(item.key);
            goNext();
          }}
          onPrev={goPrev}
          onNext={goNext}
        />
      ) : null}

      {tab === "quiz" ? (
        <div className="vocab-quiz">
          <p className="vocab-quiz-lead">
            {mode === "en-vi" ? "Viết nghĩa tiếng Việt." : "Viết từ tiếng Anh."} Không hiện đáp án trước khi nộp.
          </p>
          {quizItems.map((entry, order) => {
            const result = checked ? checkVocabAnswer(answers[entry.key] ?? "", entry, mode) : null;
            return (
              <fieldset key={entry.key} className={`vocab-q${result === true ? " is-ok" : ""}${result === false ? " is-bad" : ""}`}>
                <legend>
                  {order + 1}. {mode === "en-vi" ? entry.en : entry.vi}
                </legend>
                <input
                  value={answers[entry.key] ?? ""}
                  disabled={checked}
                  onChange={(event) => setAnswers((current) => ({ ...current, [entry.key]: event.target.value }))}
                  placeholder={mode === "en-vi" ? "Nghĩa tiếng Việt" : "English word"}
                />
                {result === true ? <p className="vocab-feedback is-ok">Đúng.</p> : null}
                {result === false ? (
                  <p className="vocab-feedback is-bad">
                    Sai. Đáp án: {mode === "en-vi" ? entry.vi : entry.en}
                  </p>
                ) : null}
              </fieldset>
            );
          })}
          <div className="vocab-actions">
            {!checked ? (
              <button
                type="button"
                className="btn-primary"
                onClick={() => {
                  const wrong = items
                    .filter((entry) => !checkVocabAnswer(answers[entry.key] ?? "", entry, mode))
                    .map((entry) => entry.key);
                  setWrongKeys(wrong);
                  setChecked(true);
                  if (lesson) progress.saveQuiz(month, day, items.length - wrong.length, items.length);
                  for (const entry of items) {
                    const ok = checkVocabAnswer(answers[entry.key] ?? "", entry, mode);
                    if (ok) progress.markKnown(entry.key);
                    else progress.markNeedReview(entry.key);
                  }
                }}
              >
                Nộp bài
              </button>
            ) : (
              <>
                <p>
                  Đúng {quizScore}/{items.length} ({items.length ? Math.round((quizScore / items.length) * 100) : 0}%).
                </p>
                {wrongKeys.length > 0 ? (
                  <button
                    type="button"
                    className="btn-secondary"
                    onClick={() => {
                      setRetryOnly(true);
                      setChecked(false);
                      setAnswers((current) => {
                        const next = { ...current };
                        for (const key of wrongKeys) next[key] = "";
                        return next;
                      });
                    }}
                  >
                    Làm lại câu sai
                  </button>
                ) : null}
                <button type="button" className="btn-primary" onClick={finishDay}>
                  Xong ngày này
                </button>
              </>
            )}
          </div>
        </div>
      ) : null}

      {tab === "summary" ? (
        <div className="vocab-summary">
          <ul>
            <li>Đã xem: {viewed}/{items.length}</li>
            <li>Đã thuộc: {mastered}</li>
            <li>Cần ôn: {needReview}</li>
            <li>
              Kiểm tra: {dayState.quizTotal ? `${dayState.quizCorrect}/${dayState.quizTotal}` : "chưa làm"}
            </li>
          </ul>
          <p>Buổi này với bạn thế nào?</p>
          <div className="vocab-mode">
            {([
              ["easy", "Dễ"],
              ["normal", "Bình thường"],
              ["difficult", "Khó"],
            ] as [VocabDifficulty, string][]).map(([id, label]) => (
              <button
                key={id}
                type="button"
                className={`vocab-chip${dayState.difficulty === id ? " active" : ""}`}
                onClick={() => lesson && progress.setDifficulty(month, day, id)}
              >
                {label}
              </button>
            ))}
          </div>
          <label className="vocab-note">
            Ghi chú
            <textarea
              rows={3}
              value={dayState.note}
              onChange={(event) => lesson && progress.saveNote(month, day, event.target.value)}
              placeholder="Từ còn lẫn, câu khó nhớ..."
            />
          </label>
          <div className="vocab-actions">
            <button type="button" className="btn-secondary" onClick={() => setTab("cards")}>
              Ôn lại thẻ
            </button>
            <button type="button" className="btn-secondary" onClick={() => { setChecked(false); setRetryOnly(false); setTab("quiz"); }}>
              Làm lại kiểm tra
            </button>
            {onNextDay ? (
              <button type="button" className="btn-primary" onClick={onNextDay}>
                Ngày tiếp theo
              </button>
            ) : null}
            <button
              type="button"
              className="btn-secondary"
              onClick={() => {
                if (window.confirm("Xóa tiến độ từ vựng ngày này?")) progress.resetDay(items);
              }}
            >
              Xóa tiến độ ngày
            </button>
          </div>
        </div>
      ) : null}
      </div>
    </section>
  );
}
