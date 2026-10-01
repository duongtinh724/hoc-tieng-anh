"use client";

import { useCallback, useEffect, useState } from "react";
import { ALPHABET_ENTRIES } from "@/lib/alphabet-data";

function ChartContent() {
  return (
    <div className="alphabet-chart">
      <div className="alphabet-chart-frame">
        <div className="alphabet-chart-board">
          <div className="alphabet-chart-title">Alphabet</div>
          <div className="alphabet-grid">
            {ALPHABET_ENTRIES.map(({ letter, ipa, vi }) => (
              <div key={letter} className="alphabet-cell">
                <span className="alphabet-letter">{letter}</span>
                <span className="alphabet-phonetic">
                  <span className="alphabet-ipa">{ipa}</span>
                  <span className="alphabet-vi"> ({vi})</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="alphabet-guide">
        <strong>Cách đọc</strong>
        <p>
          Chữ màu trắng · <span className="alphabet-ipa-sample">/ipa/</span> phiên
          âm quốc tế · <span className="alphabet-vi-sample">(tiếng Việt)</span> cách
          đọc theo quen
        </p>
        <ol>
          <li>Đọc IPA trước, rồi đọc theo ngoặc tiếng Việt</li>
          <li>Ví dụ: A — <span className="alphabet-ipa-sample">/eɪ/</span>{" "}
            <span className="alphabet-vi-sample">(ây)</span></li>
          <li>Nhắc lại 3 vòng, rồi chép vào vở</li>
        </ol>
      </div>
    </div>
  );
}

export function AlphabetChart() {
  const [expanded, setExpanded] = useState(false);
  const close = useCallback(() => setExpanded(false), []);

  useEffect(() => {
    if (!expanded) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [expanded, close]);

  return (
    <>
      <button
        type="button"
        className="alphabet-chart-trigger"
        onClick={() => setExpanded(true)}
        aria-label="Bảng chữ cái tiếng Anh. Bấm để phóng to"
      >
        <ChartContent />
        <span className="expandable-image-hint">🔍 Bấm để phóng to</span>
      </button>

      {expanded && (
        <div
          className="expandable-image-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Bảng chữ cái phóng to"
          onClick={close}
        >
          <button
            type="button"
            className="expandable-image-close"
            onClick={close}
            aria-label="Đóng"
          >
            ✕
          </button>
          <div
            className="alphabet-chart-expanded"
            onClick={(event) => event.stopPropagation()}
          >
            <ChartContent />
          </div>
          <p className="expandable-image-overlay-hint">
            Bấm bên ngoài hoặc ✕ để đóng
          </p>
        </div>
      )}
    </>
  );
}
