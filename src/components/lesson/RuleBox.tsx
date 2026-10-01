"use client";

import { useState } from "react";
import type { RuleItem } from "@/types/lesson";

interface RuleBoxProps {
  rules: RuleItem[];
}

export function RuleBox({ rules }: RuleBoxProps) {
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({});

  const toggleItem = (index: number) => {
    setOpenItems((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="rule-box">
      <div className="rule-box-header">
        <span className="rule-box-icon" aria-hidden="true">
          🌿
        </span>
        <div>
          <strong>Quy tắc & công thức hôm nay</strong>
          <p>Bấm vào từng quy tắc để xem ví dụ minh họa.</p>
        </div>
      </div>

      <ol className="rule-list">
        {rules.map((item, index) => {
          const isOpen = !!openItems[index];

          return (
            <li
              key={`${index}-${item.text.slice(0, 20)}`}
              className={`rule-item${isOpen ? " rule-item-open" : ""}`}
            >
              <button
                type="button"
                className="rule-item-toggle"
                onClick={() => toggleItem(index)}
                aria-expanded={isOpen}
              >
                <span className="rule-num">{index + 1}</span>
                <span className="rule-item-text">{item.text}</span>
                <span className="rule-item-chevron" aria-hidden="true">
                  {isOpen ? "▾" : "▸"}
                </span>
              </button>

              {isOpen ? (
                <div className="rule-item-panel">
                  <div className="rule-item-example">
                    <p>
                      <span className="rule-example-label">Ví dụ:</span> {item.example}
                    </p>
                    {item.exampleVi ? (
                      <p className="rule-item-example-vi">
                        <span className="rule-example-vi-label">Dịch:</span> {item.exampleVi}
                      </p>
                    ) : null}
                  </div>
                </div>
              ) : null}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
