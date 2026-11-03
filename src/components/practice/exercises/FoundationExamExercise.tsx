"use client";

import { Modal } from "antd";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  countWords,
  gradeExam,
  isExamAnswered,
  type ExamGrade,
} from "@/lib/practice/grade-exam";
import type { ExamExerciseConfig, ExamQuestion, ScreenState } from "@/types/practice";

interface FoundationExamExerciseProps {
  config: ExamExerciseConfig;
  state: ScreenState;
  onSelect: (questionId: string, optionId: string) => void;
  onTextChange: (questionId: string, value: string) => void;
  onSubmit: () => void;
  started: boolean;
  onStart: () => void;
  onRetake: () => void;
}

function formatTime(seconds: number): string {
  const safe = Math.max(0, seconds);
  const minutes = Math.floor(safe / 60);
  const rest = safe % 60;
  return `${minutes}:${String(rest).padStart(2, "0")}`;
}

function formatScore(value: number): string {
  return value.toFixed(2).replace(/\.00$/, "").replace(/(\.\d)0$/, "$1");
}

export function FoundationExamExercise({
  config,
  state,
  onSelect,
  onTextChange,
  onSubmit,
  started,
  onStart,
  onRetake,
}: FoundationExamExerciseProps) {
  const [currentNumber, setCurrentNumber] = useState(1);
  const [remaining, setRemaining] = useState(config.timeLimitSeconds);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const startedAt = useRef<number | null>(null);
  const expired = useRef(false);
  const [elapsed, setElapsed] = useState(0);

  const answeredCount = config.questions.filter((question) => isExamAnswered(state.answers[question.id])).length;
  const unansweredCount = config.questions.length - answeredCount;
  const progress = Math.round((answeredCount / config.questions.length) * 100);

  const grade = useMemo(
    () => (state.checked ? gradeExam(config, state) : null),
    [config, state],
  );

  useEffect(() => {
    if (!started) setCurrentNumber(1);
  }, [started]);

  function goToQuestion(number: number) {
    setCurrentNumber(number);
    const question = config.questions.find((item) => item.number === number);
    if (!question) return;
    document.getElementById(`exam-${question.id}`)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  useEffect(() => {
    if (!started || state.checked) return;
    startedAt.current = Date.now();
    expired.current = false;
    setRemaining(config.timeLimitSeconds);
    const timer = window.setInterval(() => {
      const next = Math.ceil((startedAt.current! + config.timeLimitSeconds * 1000 - Date.now()) / 1000);
      setRemaining(next);
      if (next <= 0 && !expired.current) {
        expired.current = true;
        onSubmit();
      }
    }, 250);
    return () => window.clearInterval(timer);
  }, [config.timeLimitSeconds, onSubmit, started, state.checked]);

  useEffect(() => {
    if (!state.checked || !startedAt.current) return;
    const used = Math.min(
      config.timeLimitSeconds,
      Math.round((Date.now() - startedAt.current) / 1000),
    );
    setElapsed(used);
  }, [config.timeLimitSeconds, state.checked]);

  const timerClass =
    remaining <= 0 ? "is-expired" : remaining <= 60 ? "is-urgent" : remaining <= 5 * 60 ? "is-low" : "";

  function requestSubmit() {
    if (state.checked) return;
    setConfirmOpen(true);
  }

  function confirmSubmit() {
    setConfirmOpen(false);
    onSubmit();
  }

  if (!started && !state.checked) {
    return (
      <div className="exam-shell">
        <ExamHeader config={config} />
        <div className="exam-intro">
          <p>{config.instruction}</p>
          <ul className="exam-intro-meta">
            <li>
              <span>Duration</span>
              <strong>40 minutes</strong>
            </li>
            <li>
              <span>Questions</span>
              <strong>27</strong>
            </li>
            <li>
              <span>Maximum score</span>
              <strong>10 points</strong>
            </li>
            <li>
              <span>Pass mark</span>
              <strong>6 / 10</strong>
            </li>
          </ul>
          <h3>Cấu trúc bài thi</h3>
          <ol className="exam-structure">
            {config.sections.map((section) => (
              <li key={section.id}>
                <strong>
                  {section.title}
                  <em>{formatScore(section.maxScore)} points</em>
                </strong>
                <span>{section.instruction}</span>
                <p>{section.purpose}</p>
              </li>
            ))}
          </ol>
          <button type="button" className="exam-primary" onClick={onStart}>
            Start test
          </button>
        </div>
      </div>
    );
  }

  if (state.checked && grade) {
    return (
      <ExamResults
        config={config}
        grade={grade}
        elapsed={elapsed}
        onRetake={onRetake}
      />
    );
  }

  return (
    <div className="exam-shell exam-shell--split">
      <aside className={`exam-sidebar ${timerClass}`}>
        <p className="exam-kicker">{config.level}</p>
        <h2>{config.title}</h2>
        <p className="exam-sidebar-sub">{config.subtitle}</p>
        <div className="exam-stats">
          <p className="exam-timer">
            <span>Time left</span>
            <strong>{remaining <= 0 ? "Time's up" : formatTime(remaining)}</strong>
          </p>
          <p>
            <span>Answered</span>
            <strong>
              {answeredCount}/{config.questions.length}
            </strong>
          </p>
          <p>
            <span>Unanswered</span>
            <strong>{unansweredCount}</strong>
          </p>
          <p>
            <span>Completed</span>
            <strong>{progress}%</strong>
          </p>
        </div>
        <div className="exam-bar-track" aria-hidden="true">
          <span style={{ width: `${progress}%` }} />
        </div>
        <nav className="exam-nav" aria-label="Question numbers">
          {config.questions.map((question) => {
            const answered = isExamAnswered(state.answers[question.id]);
            const active = question.number === currentNumber;
            return (
              <button
                key={question.id}
                type="button"
                className={`exam-nav-btn${answered ? " is-answered" : ""}${active ? " is-current" : ""}`}
                aria-current={active ? "true" : undefined}
                onClick={() => goToQuestion(question.number)}
              >
                {question.number}
              </button>
            );
          })}
        </nav>
        <button type="button" className="exam-primary" onClick={requestSubmit}>
          SUBMIT TEST
        </button>
      </aside>

      <div className="exam-paper">
        {config.sections.map((section) => {
          const questions = section.questionIds
            .map((id) => config.questions.find((question) => question.id === id))
            .filter((question): question is ExamQuestion => Boolean(question));
          const passage =
            questions[0]?.passageId
              ? config.passages.find((item) => item.id === questions[0].passageId)
              : undefined;

          return (
            <section key={section.id} className="exam-part">
              <header className="exam-section-head">
                <h3>{section.title}</h3>
                <p>{section.instruction}</p>
                <small>{formatScore(section.maxScore)} points</small>
              </header>
              {passage ? (
                <article className="exam-passage">
                  <h4>{passage.title}</h4>
                  {passage.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </article>
              ) : null}
              {questions.map((question) => (
                <QuestionCard
                  key={question.id}
                  question={question}
                  value={state.answers[question.id] ?? ""}
                  disabled={state.checked}
                  active={question.number === currentNumber}
                  onSelect={(id, optionId) => {
                    setCurrentNumber(question.number);
                    onSelect(id, optionId);
                  }}
                  onTextChange={(id, value) => {
                    setCurrentNumber(question.number);
                    onTextChange(id, value);
                  }}
                />
              ))}
            </section>
          );
        })}
      </div>

      <Modal
        open={confirmOpen}
        title="Submit this test?"
        centered
        okText="Submit now"
        cancelText="Go back"
        onOk={confirmSubmit}
        onCancel={() => setConfirmOpen(false)}
      >
        <p>
          {unansweredCount > 0
            ? `You still have ${unansweredCount} unanswered question${unansweredCount === 1 ? "" : "s"}.`
            : "You have answered all 27 questions."}
        </p>
        <p>You cannot change answers after you submit.</p>
      </Modal>
    </div>
  );
}

function ExamHeader({ config }: { config: ExamExerciseConfig }) {
  return (
    <header className="exam-header">
      <div>
        <p className="exam-kicker">{config.level}</p>
        <h2>{config.title}</h2>
        <p>{config.subtitle}</p>
      </div>
      <ul>
        <li>40 minutes</li>
        <li>27 questions</li>
        <li>10 points</li>
      </ul>
    </header>
  );
}

function QuestionCard({
  question,
  value,
  disabled,
  active,
  onSelect,
  onTextChange,
}: {
  question: ExamQuestion;
  value: string;
  disabled: boolean;
  active?: boolean;
  onSelect: (questionId: string, optionId: string) => void;
  onTextChange: (questionId: string, value: string) => void;
}) {
  const words = countWords(value);
  const wordState = words >= 40 && words <= 60 ? "is-ok" : words > 0 ? "is-warn" : "";

  return (
    <article
      id={`exam-${question.id}`}
      className={`exam-card${active ? " is-active" : ""}`}
    >
      <header>
        <strong>Question {question.number}</strong>
        <span>{formatScore(question.points)} point{question.points === 1 ? "" : "s"}</span>
      </header>
      <p>{question.prompt}</p>
      {question.source ? <blockquote>{question.source}</blockquote> : null}

      {question.options ? (
        <fieldset disabled={disabled}>
          <legend className="sr-only">Options for question {question.number}</legend>
          {question.options.map((option) => (
            <label key={option.id} className={value === option.id ? "is-picked" : undefined}>
              <input
                type="radio"
                name={question.id}
                value={option.id}
                checked={value === option.id}
                onChange={() => onSelect(question.id, option.id)}
              />
              <b>{option.id}</b>
              <span>{option.label}</span>
            </label>
          ))}
        </fieldset>
      ) : question.kind === "writing" ? (
        <div className="exam-write">
          <textarea
            rows={8}
            value={value}
            disabled={disabled}
            onChange={(event) => onTextChange(question.id, event.target.value)}
            placeholder="My name is Nam. I am 15 years old. I am from Vietnam..."
          />
          <p className={`exam-wordcount ${wordState}`}>
            {words} words · 40–60 required
          </p>
        </div>
      ) : (
        <input
          type="text"
          value={value}
          disabled={disabled}
          onChange={(event) => onTextChange(question.id, event.target.value)}
          placeholder="Write the complete sentence."
        />
      )}
    </article>
  );
}

function ExamResults({
  config,
  grade,
  elapsed,
  onRetake,
}: {
  config: ExamExerciseConfig;
  grade: ExamGrade;
  elapsed: number;
  onRetake: () => void;
}) {
  const percent = Math.round((grade.total / grade.maxScore) * 100);

  return (
    <div className="exam-shell exam-results">
      <ExamHeader config={config} />
      <section className="exam-scorecard">
        <p className={`exam-total${grade.passed ? " is-pass" : " is-fail"}`}>
          {formatScore(grade.total)} / {grade.maxScore}
        </p>
        <p>{grade.passed ? "Pass (6/10 or higher)." : "Not yet 6/10."}</p>
        <ul>
          <li>Correct: {grade.correctCount}</li>
          <li>Incorrect: {grade.incorrectCount}</li>
          <li>Unanswered: {grade.unansweredCount}</li>
          <li>Time used: {formatTime(elapsed)}</li>
          <li>Percentage: {percent}%</li>
        </ul>
      </section>

      <section className="exam-breakdown">
        <h3>Section performance</h3>
        <table>
          <thead>
            <tr>
              <th>Section</th>
              <th>Score</th>
              <th>Maximum</th>
            </tr>
          </thead>
          <tbody>
            {grade.sections.map((section) => (
              <tr key={section.id}>
                <td>{section.title.replace(/^PART [IVX]+ – /, "")}</td>
                <td>{formatScore(section.earned)}</td>
                <td>{formatScore(section.max)}</td>
              </tr>
            ))}
            <tr>
              <td>Total</td>
              <td>{formatScore(grade.total)}</td>
              <td>{formatScore(grade.maxScore)}</td>
            </tr>
          </tbody>
        </table>
      </section>

      {grade.writing ? (
        <section className="exam-writing-rubric">
          <h3>Writing rubric (automatic check)</h3>
          <p>
            This score follows a fixed checklist. A teacher can still adjust it later. It is not AI marking.
          </p>
          <ul>
            <li>Personal information: {formatScore(grade.writing.info)} / 0.25</li>
            <li>Pronouns and verb to be: {formatScore(grade.writing.toBe)} / 0.25</li>
            <li>Nouns and articles: {formatScore(grade.writing.articles)} / 0.20</li>
            <li>Sentence structure: {formatScore(grade.writing.structure)} / 0.20</li>
            <li>Length 40–60 words: {formatScore(grade.writing.length)} / 0.10</li>
          </ul>
          {grade.writing.notes.length > 0 ? (
            <ul className="exam-notes">
              {grade.writing.notes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          ) : null}
        </section>
      ) : null}

      <section className="exam-review">
        <h3>Answer review</h3>
        <ol>
          {grade.questions.map((item) => (
            <li key={item.id} className={`exam-review-item is-${item.status}`}>
              <p>
                <strong>Question {item.number}.</strong> {item.prompt}
              </p>
              {item.source ? <blockquote>{item.source}</blockquote> : null}
              <p>
                <span>Your answer</span> {item.userAnswer}
              </p>
              <p>
                <span>Correct answer</span> {item.correctAnswer}
              </p>
              <p className="exam-status">
                {item.status === "correct"
                  ? "Correct"
                  : item.status === "unanswered"
                    ? "Unanswered"
                    : "Incorrect"}
                {" · "}
                {formatScore(item.earned)}/{formatScore(item.max)}
              </p>
              <p className="exam-explain">{item.explanation}</p>
              <small>{item.topic}</small>
            </li>
          ))}
        </ol>
      </section>

      <section className="exam-recommend">
        <h3>Learning recommendations</h3>
        {grade.weakTopics.length === 0 ? (
          <p>No weak areas on this paper. Review Days 1–13 once more before the next test.</p>
        ) : (
          <ul>
            {grade.weakTopics.map((topic) => (
              <li key={topic}>{topic}</li>
            ))}
          </ul>
        )}
        <button type="button" className="exam-primary" onClick={onRetake}>
          Retake Test
        </button>
      </section>
    </div>
  );
}
