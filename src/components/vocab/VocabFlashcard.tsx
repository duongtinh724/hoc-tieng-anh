"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { isSpeechSupported, speakEnglish } from "@/lib/speech";
import { getCardState, statusLabel } from "@/lib/vocab-study";
import type { VocabItem, VocabStore, VocabStudyMode } from "@/types/vocab";

interface VocabFlashcardProps {
  items: VocabItem[];
  store: VocabStore;
  index: number;
  mode: VocabStudyMode;
  onModeChange: (mode: VocabStudyMode) => void;
  onKnown: () => void;
  onNeedReview: () => void;
  onPrev: () => void;
  onNext: () => void;
}

function SpeakButton({
  label,
  disabled,
  onPlay,
}: {
  label: string;
  disabled: boolean;
  onPlay: () => void;
}) {
  return (
    <button
      type="button"
      className="vocab-speak"
      aria-label={label}
      title={label}
      disabled={disabled}
      onClick={(event) => {
        event.stopPropagation();
        onPlay();
      }}
    >
      🔊
    </button>
  );
}

function IconButton({
  label,
  className,
  disabled,
  onClick,
  children,
}: {
  label: string;
  className?: string;
  disabled?: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      className={`vocab-icon-btn${className ? ` ${className}` : ""}`}
      aria-label={label}
      title={label}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function FlipCard({
  item,
  flipped,
  enToVi,
  speechOk,
  onToggle,
}: {
  item: VocabItem;
  flipped: boolean;
  enToVi: boolean;
  speechOk: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className="vocab-flip"
      role="button"
      tabIndex={0}
      aria-label={flipped ? "Lật lại mặt trước" : "Lật thẻ để xem nghĩa"}
      onClick={onToggle}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onToggle();
        }
      }}
    >
      <div className={`vocab-flip-inner${flipped ? " is-flipped" : ""}`}>
        <div className="vocab-flip-face vocab-flip-front">
          <p className="vocab-face-label">{enToVi ? "Tiếng Anh" : "Tiếng Việt"}</p>
          <p className="vocab-card-word">{enToVi ? item.en : item.vi}</p>
          {enToVi && item.ipa ? <p className="vocab-ipa">{item.ipa}</p> : null}
          {enToVi ? (
            <SpeakButton
              label={`Nghe phát âm ${item.en}`}
              disabled={!speechOk}
              onPlay={() => speakEnglish(item.en)}
            />
          ) : null}
          <p className="vocab-flip-hint">Nhấn để lật · Vuốt để chuyển</p>
        </div>

        <div className="vocab-flip-face vocab-flip-back">
          <p className="vocab-face-label">{enToVi ? "Tiếng Việt" : "Tiếng Anh"}</p>
          <p className="vocab-card-word">{enToVi ? item.vi : item.en}</p>
          {item.ipa ? <p className="vocab-ipa">{item.ipa}</p> : null}
          {!enToVi ? (
            <SpeakButton
              label={`Nghe phát âm ${item.en}`}
              disabled={!speechOk}
              onPlay={() => speakEnglish(item.en)}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}

function ExampleBox({
  example,
  speechOk,
}: {
  example: { en: string; vi: string };
  speechOk: boolean;
}) {
  return (
    <div className="vocab-example">
      <div className="vocab-example-head">
        <span>Ví dụ</span>
        <SpeakButton
          label="Nghe câu ví dụ"
          disabled={!speechOk}
          onPlay={() => speakEnglish(example.en)}
        />
      </div>
      <p className="vocab-example-en">{example.en}</p>
      <p className="vocab-example-vi">{example.vi}</p>
    </div>
  );
}

export function VocabFlashcard({
  items,
  store,
  index,
  mode,
  onModeChange,
  onKnown,
  onNeedReview,
  onPrev,
  onNext,
}: VocabFlashcardProps) {
  const [flipped, setFlipped] = useState(false);
  const pointerStart = useRef<{ x: number; y: number } | null>(null);
  const swiped = useRef(false);
  const speechOk = isSpeechSupported();
  const item = items[index];
  const card = item ? getCardState(store, item.key) : null;
  const enToVi = mode === "en-vi";
  const canPrev = index > 0;
  const canNext = index < items.length - 1;

  useEffect(() => {
    setFlipped(false);
  }, [index, mode]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "ArrowLeft") onPrev();
      if (event.key === "ArrowRight") onNext();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onNext, onPrev]);

  function onPointerDown(event: React.PointerEvent<HTMLDivElement>) {
    pointerStart.current = { x: event.clientX, y: event.clientY };
    swiped.current = false;
  }

  function onPointerUp(event: React.PointerEvent<HTMLDivElement>) {
    const start = pointerStart.current;
    pointerStart.current = null;
    if (!start) return;
    const dx = event.clientX - start.x;
    const dy = event.clientY - start.y;
    if (Math.abs(dx) < 48 || Math.abs(dx) < Math.abs(dy)) return;
    swiped.current = true;
    if (dx < 0) onNext();
    else onPrev();
  }

  function toggleFlip() {
    if (swiped.current) {
      swiped.current = false;
      return;
    }
    setFlipped((value) => !value);
  }

  if (!item || !card) return null;

  return (
    <div className="vocab-study">
      <div className="vocab-study-bar">
        <button
          type="button"
          className={`vocab-chip${enToVi ? " active" : ""}`}
          onClick={() => onModeChange("en-vi")}
        >
          Anh → Việt
        </button>
        <button
          type="button"
          className={`vocab-chip${!enToVi ? " active" : ""}`}
          onClick={() => onModeChange("vi-en")}
        >
          Việt → Anh
        </button>
        <span className={`vocab-status is-${card.status}`}>{statusLabel(card.status)}</span>
        <span className="vocab-count">
          {index + 1}/{items.length}
        </span>
      </div>

      <div className="vocab-slider-wrap">
        <IconButton label="Từ trước" className="vocab-nav-side is-prev" disabled={!canPrev} onClick={onPrev}>
          <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
            <path fill="currentColor" d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          </svg>
        </IconButton>

        <div
          className="vocab-slider"
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          onPointerCancel={() => {
            pointerStart.current = null;
          }}
        >
          <div className="vocab-slider-track" style={{ transform: `translateX(-${index * 100}%)` }}>
            {items.map((slide, slideIndex) => (
              <div key={slide.key} className="vocab-slide">
                <FlipCard
                  item={slide}
                  flipped={slideIndex === index && flipped}
                  enToVi={enToVi}
                  speechOk={speechOk}
                  onToggle={toggleFlip}
                />
              </div>
            ))}
          </div>
        </div>

        <IconButton label="Từ sau" className="vocab-nav-side is-next" disabled={!canNext} onClick={onNext}>
          <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
            <path fill="currentColor" d="M8.59 16.59 10 18l6-6-6-6-1.41 1.41L13.17 12z" />
          </svg>
        </IconButton>
      </div>

      {flipped && enToVi && item.example ? <ExampleBox example={item.example} speechOk={speechOk} /> : null}

      {!speechOk ? <p className="vocab-empty">Máy này không đọc được tiếng Anh.</p> : null}

      <div className="vocab-study-bar vocab-study-bar--icons">
        <IconButton label="Cần ôn lại" className="is-review" onClick={onNeedReview}>
          <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
            <path
              fill="currentColor"
              d="M12 6V3L8 7l4 4V8c2.8 0 5 2.2 5 5a5 5 0 0 1-8.9 3.1L6.7 17.5A7 7 0 0 0 19 13c0-3.9-3.1-7-7-7zm-7 7c0-1.1.2-2.1.6-3L4.2 8.6A8.9 8.9 0 0 0 3 13a9 9 0 0 0 9 9v-2a7 7 0 0 1-7-7z"
            />
          </svg>
        </IconButton>
        <IconButton label="Đã biết" className="is-known" onClick={onKnown}>
          <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
            <path fill="currentColor" d="M9.2 16.6 4.8 12.2l-1.4 1.4 5.8 5.8 12-12-1.4-1.4z" />
          </svg>
        </IconButton>
      </div>
    </div>
  );
}
