"use client";

import { useEffect, useMemo, useState } from "react";
import {
  B1_DAY_TITLE_VI,
  answeredCount,
  b1DayStatus,
  getDayProgress,
  scoreBand,
} from "@/lib/b1-revision";
import type { B1Choice, B1Day, B1Store } from "@/types/b1-revision";

const CHOICES: B1Choice[] = ["A", "B", "C", "D"];

const DIFFICULTY_VI: Record<string, string> = {
  easy: "Dễ",
  medium: "Trung bình",
  hard: "Khó",
};

interface B1DayPageProps {
  day: B1Day;
  store: B1Store;
  onBack: () => void;
  onStart: (day: number) => void;
  onSaveAnswer: (questionId: string, choice: B1Choice) => void;
  onSubmit: () => void;
  onRetry: () => void;
  onNextDay?: () => void;
}

export function B1DayPage({
  day,
  store,
  onBack,
  onStart,
  onSaveAnswer,
  onSubmit,
  onRetry,
  onNextDay,
}: B1DayPageProps) {
  const [tab, setTab] = useState<"theory" | "practice">("theory");
  const [openTopic, setOpenTopic] = useState<string | null>(day.topics[0]?.id ?? null);
  const [qIndex, setQIndex] = useState(0);
  const progress = getDayProgress(store, day.day);
  const questions = day.assessment.questions;
  const question = questions[qIndex] ?? questions[0];
  const chosen = question ? progress.answers[question.id] : undefined;
  const submitted = progress.submitted;
  const pickedCount = answeredCount(progress, questions.length);
  const titleVi = B1_DAY_TITLE_VI[day.day] ?? day.title;

  useEffect(() => {
    onStart(day.day);
  }, [day.day, onStart]);

  useEffect(() => {
    setTab("theory");
    setOpenTopic(day.topics[0]?.id ?? null);
    setQIndex(0);
  }, [day.day]);

  const result = useMemo(() => {
    if (!submitted || progress.score == null) return null;
    const total = questions.length;
    const correct = progress.correct ?? Math.round((progress.score / 100) * total);
    return { correct, total, percent: progress.score, band: scoreBand(progress.score) };
  }, [progress.correct, progress.score, questions.length, submitted]);

  function handleSubmit() {
    if (pickedCount < questions.length) {
      const remain = questions.length - pickedCount;
      const ok = window.confirm(`Còn ${remain} câu chưa chọn. Vẫn nộp bài? Câu trống tính là sai.`);
      if (!ok) return;
    }
    onSubmit();
  }

  return (
    <section className="panel b1-day-page">
      <div className="b1-day-toolbar">
        <button type="button" className="b1-back" onClick={onBack}>
          ← Tất cả ngày
        </button>
        <p className="page-eyebrow">Ngày {day.day} / 7</p>
      </div>

      <header className="b1-day-head">
        <h2>{titleVi}</h2>
        <p>{day.title}</p>
      </header>

      <ul className="b1-objectives">
        {day.objectives.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      {result ? (
        <div className={`b1-score is-${result.band.id}`}>
          <strong>
            {result.correct}/{result.total} · {result.percent}% · {result.band.label}
          </strong>
          <p>Thang nội bộ, không phải chứng nhận CEFR. Có thể xem lại từng câu hoặc làm lại.</p>
        </div>
      ) : null}

      <div className="b1-tabs" role="tablist" aria-label="Nội dung ngày">
        <button
          type="button"
          role="tab"
          aria-selected={tab === "theory"}
          className={tab === "theory" ? "is-active" : ""}
          onClick={() => setTab("theory")}
        >
          Lý thuyết
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={tab === "practice"}
          className={tab === "practice" ? "is-active" : ""}
          onClick={() => setTab("practice")}
        >
          Bài tập ({questions.length})
        </button>
      </div>

      {tab === "theory" ? (
        <div className="b1-theory">
          {day.topics.map((topic) => {
            const open = openTopic === topic.id;
            return (
              <article key={topic.id} className={`b1-topic${open ? " is-open" : ""}`}>
                <button
                  type="button"
                  className="b1-topic-toggle"
                  aria-expanded={open}
                  onClick={() => setOpenTopic(open ? null : topic.id)}
                >
                  <span>
                    <strong>{topic.name_vi}</strong>
                    <small>{topic.name}</small>
                  </span>
                  <em>{open ? "Thu gọn" : "Xem"}</em>
                </button>
                {open ? (
                  <div className="b1-topic-body">
                    <p>{topic.definition}</p>
                    <dl>
                      <div>
                        <dt>Công thức</dt>
                        <dd>{topic.formula}</dd>
                      </div>
                      <div>
                        <dt>Cách dùng</dt>
                        <dd>{topic.usage}</dd>
                      </div>
                    </dl>
                    {topic.time_expressions_or_signals.length > 0 ? (
                      <p className="b1-signals">
                        <strong>Dấu hiệu:</strong> {topic.time_expressions_or_signals.join(" · ")}
                      </p>
                    ) : null}
                    {topic.examples.map((example) => (
                      <p key={example.en} className="b1-example">
                        <strong>{example.en}</strong>
                        <span>{example.vi}</span>
                      </p>
                    ))}
                    {topic.common_mistakes.length > 0 ? (
                      <p className="b1-mistake">
                        <strong>Lỗi hay gặp:</strong> {topic.common_mistakes.join(" ")}
                      </p>
                    ) : null}
                    {topic.comparison ? (
                      <p className="b1-compare">
                        <strong>So sánh:</strong> {topic.comparison}
                      </p>
                    ) : null}
                  </div>
                ) : null}
              </article>
            );
          })}
          <button type="button" className="vocab-action-btn is-continue" onClick={() => setTab("practice")}>
            Làm bài tập
          </button>
        </div>
      ) : question ? (
        <div className="b1-practice">
          <div className="b1-question-meta">
            <span>
              Câu {qIndex + 1}/{questions.length}
            </span>
            <strong>{question.topic}</strong>
            <em>{DIFFICULTY_VI[question.difficulty] ?? question.difficulty}</em>
          </div>
          <p className="b1-question">{question.question}</p>
          <div className="b1-options" role="radiogroup" aria-label={question.question}>
            {CHOICES.map((letter) => {
              const text = question.options[letter];
              const selected = chosen === letter;
              const mark =
                !submitted
                  ? selected
                    ? " is-picked"
                    : ""
                  : letter === question.correct_answer
                    ? " is-correct"
                    : selected
                      ? " is-wrong"
                      : "";
              return (
                <label key={letter} className={`b1-option${mark}`}>
                  <input
                    type="radio"
                    name={question.id}
                    value={letter}
                    checked={selected}
                    disabled={submitted}
                    onChange={() => onSaveAnswer(question.id, letter)}
                  />
                  <b>{letter}</b>
                  <span>{text}</span>
                </label>
              );
            })}
          </div>
          {submitted ? (
            <div className="b1-explain">
              <p>
                <strong>
                  {chosen === question.correct_answer
                    ? "Đúng."
                    : chosen
                      ? "Chưa đúng."
                      : "Chưa chọn."}
                </strong>{" "}
                Đáp án: {question.correct_answer}
              </p>
              <p>{question.explanation}</p>
            </div>
          ) : (
            <p className="b1-hint">
              Đã chọn {pickedCount}/{questions.length}. Đáp án hiện sau khi nộp bài.
            </p>
          )}

          <div className="b1-practice-nav">
            <button type="button" onClick={() => setQIndex((value) => Math.max(0, value - 1))} disabled={qIndex === 0}>
              Trước
            </button>
            <button
              type="button"
              onClick={() => setQIndex((value) => Math.min(questions.length - 1, value + 1))}
              disabled={qIndex >= questions.length - 1}
            >
              Sau
            </button>
            {submitted ? (
              <>
                <button
                  type="button"
                  className="vocab-action-btn is-review"
                  onClick={() => {
                    setQIndex(0);
                    onRetry();
                  }}
                >
                  Làm lại
                </button>
                {onNextDay ? (
                  <button type="button" className="vocab-action-btn is-continue" onClick={onNextDay}>
                    Ngày tiếp
                  </button>
                ) : null}
              </>
            ) : (
              <button
                type="button"
                className="vocab-action-btn is-start"
                onClick={handleSubmit}
                disabled={b1DayStatus(progress) === "completed"}
              >
                Nộp bài
              </button>
            )}
          </div>
        </div>
      ) : null}
    </section>
  );
}
