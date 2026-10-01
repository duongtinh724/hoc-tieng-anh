"use client";

import { useState } from "react";

interface AnswersToggleProps {
  answers: string[];
}

export function AnswersToggle({ answers }: AnswersToggleProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="answers-toggle"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? "Ẩn đáp án" : "Đáp án — mở sau khi làm xong"}
      </button>
      <div className={`answers${open ? " open" : ""}`}>
        <ul className="list">
          {answers.map((answer, index) => (
            <li key={`${index}-${answer.slice(0, 24)}`}>{answer}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
