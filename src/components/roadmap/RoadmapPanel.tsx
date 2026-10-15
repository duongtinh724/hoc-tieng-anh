"use client";

import { useState } from "react";
import { getDaysForMonth, getMonthConfig } from "@/data/curriculum";
import { LATER_MONTHS } from "@/data/roadmap-later";
import type { DayLesson } from "@/types/lesson";

interface RoadmapPanelProps {
  onOpenDay: (monthId: number, day: number) => void;
}

function kindOf(title: string): "test" | "review" | null {
  if (/kiểm tra/i.test(title)) return "test";
  if (/^ôn/i.test(title)) return "review";
  return null;
}

function MonthFromLessons({
  monthId,
  open,
  onToggle,
  onOpenDay,
}: {
  monthId: number;
  open: boolean;
  onToggle: () => void;
  onOpenDay: (monthId: number, day: number) => void;
}) {
  const month = getMonthConfig(monthId);
  const days = getDaysForMonth(monthId);
  const weeks = new Map<number, DayLesson[]>();
  for (const day of days) {
    const list = weeks.get(day.week) ?? [];
    list.push(day);
    weeks.set(day.week, list);
  }

  return (
    <article className={`mind-branch${open ? " is-open" : ""}`}>
      <button type="button" className="mind-month" onClick={onToggle}>
        <span className="mind-month-kicker">{month.subtitle}</span>
        <strong>{month.title}</strong>
        <span>{month.goal}</span>
      </button>
      {open ? (
        <div className="mind-weeks">
          {[...weeks.entries()].map(([week, items]) => (
            <div key={week} className="mind-week">
              <p>Tuần {week}</p>
              <ul>
                {items.map((day) => {
                  const kind = kindOf(day.title);
                  return (
                    <li key={day.day}>
                      <button
                        type="button"
                        className={kind ? `is-${kind}` : ""}
                        title={day.aim}
                        onClick={() => onOpenDay(monthId, day.day)}
                      >
                        <span>Ngày {day.day}</span>
                        {day.title}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      ) : null}
    </article>
  );
}

export function RoadmapPanel({ onOpenDay }: RoadmapPanelProps) {
  const [openId, setOpenId] = useState<string>("app-1");

  return (
    <section className="panel roadmap-panel">
      <p className="page-eyebrow">Lộ trình đến 25/05/2027</p>
      <h2>Roadmap</h2>
      <p className="panel-lead">
        Bấm một tháng để xem từng tuần và từng ngày. Tháng 1 và tháng 2 bấm
        vào ngày để mở bài học. Ngày viền cam là ôn tập hoặc kiểm tra.
      </p>

      <div className="mindmap">
        <div className="mind-root">
          <strong>Ôn thi lớp 10</strong>
          <span>Mục tiêu 5–6/10</span>
        </div>
        <div className="mind-spine">
          <MonthFromLessons
            monthId={1}
            open={openId === "app-1"}
            onToggle={() => setOpenId(openId === "app-1" ? "" : "app-1")}
            onOpenDay={onOpenDay}
          />
          <MonthFromLessons
            monthId={2}
            open={openId === "app-2"}
            onToggle={() => setOpenId(openId === "app-2" ? "" : "app-2")}
            onOpenDay={onOpenDay}
          />
          {LATER_MONTHS.map((month) => {
            const id = month.title;
            const open = openId === id;
            return (
              <article key={id} className={`mind-branch${open ? " is-open" : ""}`}>
                <button type="button" className="mind-month" onClick={() => setOpenId(open ? "" : id)}>
                  <span className="mind-month-kicker">{month.range}</span>
                  <strong>{month.title}</strong>
                  <span>{month.summary}</span>
                </button>
                {open ? (
                  <div className="mind-weeks">
                    {month.weeks.map((week) => (
                      <div key={week.title} className="mind-week">
                        <p>
                          {week.title}
                          <small>{week.range}</small>
                        </p>
                        <ul>
                          {week.days.map((topic, index) => {
                            const kind = kindOf(topic);
                            return (
                              <li key={topic}>
                                <span className={`mind-leaf${kind ? ` is-${kind}` : ""}`}>
                                  <span>{index + 1}</span>
                                  {topic}
                                </span>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
