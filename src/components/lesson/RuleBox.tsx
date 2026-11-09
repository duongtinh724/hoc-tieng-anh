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
          const examples = item.examples?.length
            ? item.examples
            : !item.detail && !item.table && item.example
              ? [{ en: item.example, vi: item.exampleVi }]
              : [];

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
                  {item.detail ? <p className="rule-item-detail">{item.detail}</p> : null}
                  {item.table ? (
                    <div className="rule-table-wrap">
                      <table className="rule-table">
                        <thead>
                          <tr>
                            {item.table.headers.map((header) => (
                              <th key={header}>{header}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {item.table.rows.map((row) => (
                            <tr key={row.join("-")}>
                              {row.map((cell, cellIndex) => (
                                <td key={`${row[0]}-${cellIndex}`}>{cell}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : null}
                  {item.note ? <p className="rule-item-note">{item.note}</p> : null}
                  {examples.map((example) => (
                    <div key={example.en} className="rule-item-example">
                      <p>
                        <span className="rule-example-label">Ví dụ:</span> {example.en}
                      </p>
                      {example.vi ? (
                        <p className="rule-item-example-vi">
                          <span className="rule-example-vi-label">Dịch:</span> {example.vi}
                        </p>
                      ) : null}
                    </div>
                  ))}
                </div>
              ) : null}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
