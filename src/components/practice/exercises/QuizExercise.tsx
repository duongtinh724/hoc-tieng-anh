"use client";

import { SoundOutlined } from "@ant-design/icons";
import { Button, Modal, Radio } from "antd";
import { useEffect, useRef, useState } from "react";
import { ScreenInstruction } from "@/components/practice/shared/ScreenInstruction";
import { speakEnglish } from "@/lib/speech";
import type { QuizExerciseConfig, QuizQuestion, ScreenState } from "@/types/practice";

interface QuizExerciseProps {
  config: QuizExerciseConfig;
  state: ScreenState;
  onSelect: (questionId: string, optionId: string) => void;
  onExpire: () => void;
  started: boolean;
  onStart: () => void;
}

function scoreOnTen(correct: number, total: number): number {
  if (total === 0) return 0;
  return Math.round((correct / total) * 100) / 10;
}

function formatTime(seconds: number): string {
  const safe = Math.max(0, seconds);
  const minutes = Math.floor(safe / 60);
  const rest = safe % 60;
  return `${minutes}:${String(rest).padStart(2, "0")}`;
}

export function QuizExercise({
  config,
  state,
  onSelect,
  onExpire,
  started,
  onStart,
}: QuizExerciseProps) {
  const passScore = config.passScore ?? config.questions.length;
  const correctCount = config.questions.filter(
    (question) => state.answers[question.id] === question.correctOptionId,
  ).length;
  const score = scoreOnTen(correctCount, config.questions.length);
  const passed = correctCount >= passScore;
  const [remaining, setRemaining] = useState(config.timeLimitSeconds);
  const [resultOpen, setResultOpen] = useState(false);
  const endAt = useRef<number | null>(null);
  const expired = useRef(false);

  useEffect(() => {
    if (!started || state.checked) return;
    endAt.current = Date.now() + config.timeLimitSeconds * 1000;
    expired.current = false;
    setRemaining(config.timeLimitSeconds);
    const timer = window.setInterval(() => {
      const next = Math.ceil((endAt.current! - Date.now()) / 1000);
      setRemaining(next);
      if (next <= 0 && !expired.current) {
        expired.current = true;
        onExpire();
      }
    }, 250);
    return () => window.clearInterval(timer);
  }, [config.timeLimitSeconds, onExpire, started, state.checked]);

  useEffect(() => {
    if (!state.checked) {
      setResultOpen(false);
      return;
    }
    setResultOpen(true);
  }, [state.checked]);

  const timerClass =
    remaining <= 0 ? "is-expired" : remaining <= 60 ? "is-urgent" : remaining <= 5 * 60 ? "is-low" : "";

  function showMistakes() {
    setResultOpen(false);
    const firstWrong = config.questions.find(
      (question) => state.answers[question.id] !== question.correctOptionId,
    );
    if (!firstWrong) return;
    document.getElementById(`quiz-${firstWrong.id}`)?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }

  let number = 0;
  const minutes = Math.round(config.timeLimitSeconds / 60);
  const grammarCount = config.questions.filter((question) => question.section === "grammar").length;
  const listenCount = config.questions.filter((question) => question.section === "listen").length;
  const readingCount = config.questions.filter((question) => question.section === "reading").length;

  if (!started && !state.checked) {
    return (
      <div className="practice-quiz practice-quiz-intro">
        <ScreenInstruction title={config.title} instruction={config.instruction} />
        <ul>
          <li>
            <span>Số câu</span>
            <strong>{config.questions.length} câu</strong>
          </li>
          <li>
            <span>Ngữ pháp và từ vựng</span>
            <strong>{grammarCount} câu</strong>
          </li>
          <li>
            <span>Nghe</span>
            <strong>{listenCount} câu</strong>
          </li>
          <li>
            <span>Đọc hiểu</span>
            <strong>{readingCount} câu</strong>
          </li>
          <li>
            <span>Thời gian</span>
            <strong>{minutes} phút</strong>
          </li>
          <li>
            <span>Điểm đạt</span>
            <strong>6/10</strong>
          </li>
        </ul>
        <Button type="primary" size="large" onClick={onStart}>
          Bắt đầu
        </Button>
      </div>
    );
  }

  return (
    <div className="practice-quiz">
      <div className={`practice-quiz-timer ${timerClass}`}>
        <span>Thời gian</span>
        <strong>{remaining <= 0 ? "Hết giờ" : formatTime(remaining)}</strong>
      </div>
      <ScreenInstruction title={config.title} instruction={config.instruction} />

      <section className="practice-quiz-section">
        <h3>I. Ngữ pháp</h3>
        <ol>
          {config.questions
            .filter((question) => question.section === "grammar")
            .map((question) => {
              number += 1;
              return (
                <QuestionCard
                  key={question.id}
                  index={number}
                  question={question}
                  state={state}
                  onSelect={onSelect}
                />
              );
            })}
        </ol>
      </section>

      <section className="practice-quiz-section">
        <h3>II. Nghe</h3>
        <p className="practice-quiz-note">Bấm Nghe, rồi chọn câu đúng. Được nghe lại.</p>
        <ol>
          {config.questions
            .filter((question) => question.section === "listen")
            .map((question) => {
              number += 1;
              return (
                <QuestionCard
                  key={question.id}
                  index={number}
                  question={question}
                  state={state}
                  onSelect={onSelect}
                />
              );
            })}
        </ol>
      </section>

      {(config.passages ?? []).map((passage) => (
        <section key={passage.id} className="practice-quiz-section">
          <h3>III. Đọc</h3>
          <article className="practice-quiz-passage">
            <h4>{passage.title}</h4>
            <p>{passage.text}</p>
          </article>
          <ol>
            {config.questions
              .filter((question) => question.passageId === passage.id)
              .map((question) => {
                number += 1;
                return (
                  <QuestionCard
                    key={question.id}
                    index={number}
                    question={question}
                    state={state}
                    onSelect={onSelect}
                  />
                );
              })}
          </ol>
        </section>
      ))}

      <Modal
        open={resultOpen}
        title="Kết quả bài kiểm tra"
        centered
        closable
        onCancel={() => setResultOpen(false)}
        footer={[
          <Button key="close" onClick={() => setResultOpen(false)}>
            Đóng
          </Button>,
          <Button key="mistakes" type="primary" onClick={showMistakes}>
            Xem câu sai
          </Button>,
        ]}
      >
        <div className="practice-quiz-result">
          <p className="practice-quiz-result-score">{score}/10</p>
          <p>{passed ? "Đạt mốc 6/10." : "Chưa đạt mốc 6/10."}</p>
          <p>
            Đúng {correctCount}/{config.questions.length} câu.
            {remaining <= 0 ? " Hết thời gian, bài được nộp tự động." : ""}
          </p>
        </div>
      </Modal>
    </div>
  );
}

function QuestionCard({
  index,
  question,
  state,
  onSelect,
}: {
  index: number;
  question: QuizQuestion;
  state: ScreenState;
  onSelect: (questionId: string, optionId: string) => void;
}) {
  const feedback = state.feedback[question.id];
  const wrong = state.checked && feedback !== "correct";
  const correctLabel = question.options.find(
    (option) => option.id === question.correctOptionId,
  )?.label;

  return (
    <li
      id={`quiz-${question.id}`}
      className={
        feedback === "correct" ? "is-correct" : wrong ? "is-incorrect" : undefined
      }
    >
      <p>
        <strong>{index}.</strong> {question.prompt}
      </p>
      {question.listenText && !state.checked ? (
        <Button
          icon={<SoundOutlined />}
          onClick={() => speakEnglish(question.listenText!)}
        >
          Nghe
        </Button>
      ) : null}
      <Radio.Group
        value={state.answers[question.id]}
        disabled={state.checked}
        onChange={(event) => onSelect(question.id, event.target.value)}
      >
        {question.options.map((option) => (
          <Radio key={option.id} value={option.id}>
            {option.label}
          </Radio>
        ))}
      </Radio.Group>
      {wrong ? (
        <div className="practice-quiz-explain">
          <strong>Vì sao chưa đúng.</strong> {question.explanation} Đáp án đúng: {correctLabel}.
        </div>
      ) : null}
    </li>
  );
}
