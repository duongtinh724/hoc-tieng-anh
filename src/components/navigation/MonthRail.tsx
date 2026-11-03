"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { MONTHS, getDaysForMonth, getMonthConfig } from "@/data/curriculum";
import { DayGrid } from "@/components/navigation/DayGrid";
import type { MonthConfig } from "@/types/lesson";

interface MonthRailProps {
  selectedMonth: number;
  selectedDay: number;
  progress: Record<string, number[]>;
  onSelectDay: (monthId: number, day: number) => void;
}

export function MonthRail({
  selectedMonth,
  selectedDay,
  progress,
  onSelectDay,
}: MonthRailProps) {
  const railRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [previewId, setPreviewId] = useState<number | null>(null);
  const [panelLeft, setPanelLeft] = useState(8);
  const anchorLeftRef = useRef(8);

  const previewMonth: MonthConfig | null =
    previewId !== null ? getMonthConfig(previewId) : null;
  const previewDays = previewMonth ? getDaysForMonth(previewMonth.id) : [];
  const previewDone = previewMonth ? (progress[String(previewMonth.id)] ?? []) : [];

  const placePanel = (anchor: HTMLElement) => {
    const rail = railRef.current;
    if (!rail) return;
    const railRect = rail.getBoundingClientRect();
    const anchorRect = anchor.getBoundingClientRect();
    anchorLeftRef.current = anchorRect.left - railRect.left;
    clampPanel();
  };

  const clampPanel = () => {
    const rail = railRef.current;
    if (!rail) return;
    const pad = 8;
    const panelWidth = panelRef.current?.offsetWidth ?? 280;
    const maxLeft = rail.clientWidth - panelWidth - pad;
    const nextLeft = Math.min(Math.max(anchorLeftRef.current, pad), Math.max(pad, maxLeft));
    setPanelLeft(nextLeft);
  };

  const openPreview = (monthId: number, anchor: HTMLElement) => {
    setPreviewId(monthId);
    placePanel(anchor);
  };

  useLayoutEffect(() => {
    if (!previewId) return;
    const rail = railRef.current;
    if (!rail) return;
    const pad = 8;
    const panelWidth = panelRef.current?.offsetWidth ?? 280;
    const maxLeft = rail.clientWidth - panelWidth - pad;
    setPanelLeft(Math.min(Math.max(anchorLeftRef.current, pad), Math.max(pad, maxLeft)));
  }, [previewId]);

  useEffect(() => {
    const node = railRef.current;
    if (!node) return;

    const onDocDown = (event: MouseEvent) => {
      if (!node.contains(event.target as Node)) {
        setPreviewId(null);
      }
    };

    document.addEventListener("mousedown", onDocDown);
    return () => document.removeEventListener("mousedown", onDocDown);
  }, []);

  return (
    <nav
      ref={railRef}
      className={`month-rail${previewMonth ? " is-previewing" : ""}`}
      aria-label="Tháng học"
      onMouseLeave={() => setPreviewId(null)}
    >
      <div className="month-rail-list" onScroll={() => setPreviewId(null)}>
        {MONTHS.map((month) => {
          const active = month.id === selectedMonth;
          const locked = month.status === "coming-soon";
          const previewed = month.id === previewId;

          return (
            <button
              key={month.id}
              type="button"
              className={`month-rail-item${active ? " active" : ""}${locked ? " locked" : ""}${previewed ? " preview" : ""}`}
              aria-expanded={previewed}
              aria-haspopup="dialog"
              aria-label={locked ? `${month.title} — sắp ra mắt` : `${month.title}: ${month.goal}`}
              onMouseEnter={(event) => openPreview(month.id, event.currentTarget)}
              onFocus={(event) => openPreview(month.id, event.currentTarget)}
              onClick={(event) => openPreview(month.id, event.currentTarget)}
            >
              {month.title}
              {locked ? <span className="month-badge">Sắp ra</span> : null}
            </button>
          );
        })}
      </div>

      {previewMonth ? (
        <div
          ref={panelRef}
          className="month-rail-panel"
          role="dialog"
          aria-label={`Ngày ${previewMonth.title}`}
          style={{ left: panelLeft }}
        >
          <p className="month-rail-panel-head">{previewMonth.title}</p>
          {previewMonth.status !== "coming-soon" && previewMonth.goal ? (
            <p className="month-rail-panel-goal">{previewMonth.goal}</p>
          ) : null}

          {previewMonth.status === "coming-soon" ? (
            <p className="month-rail-empty">Sắp ra mắt.</p>
          ) : previewDays.length === 0 ? (
            <p className="month-rail-empty">Chưa có bài.</p>
          ) : (
            <DayGrid
              className="day-grid--rail"
              days={previewDays}
              selectedDay={previewMonth.id === selectedMonth ? selectedDay : 0}
              doneDays={previewDone}
              showTooltip={false}
              onSelectDay={(day) => {
                onSelectDay(previewMonth.id, day);
                setPreviewId(null);
              }}
            />
          )}
        </div>
      ) : null}
    </nav>
  );
}
