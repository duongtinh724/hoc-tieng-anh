"use client";

import { useDroppable } from "@dnd-kit/core";
import type { ItemState } from "@/types/practice";
import { FeedbackIcon } from "@/components/practice/shared/FeedbackIcon";

interface DroppableZoneProps {
  id: string;
  value?: string;
  placeholder?: string;
  state: ItemState;
  width?: "sm" | "md" | "lg" | "full";
  isOver?: boolean;
  onClick?: () => void;
  onClear?: () => void;
  className?: string;
  children?: React.ReactNode;
}

export function DroppableZone({
  id,
  value,
  placeholder = " ",
  state,
  width = "md",
  onClick,
  onClear,
  className = "",
  children,
}: DroppableZoneProps) {
  const { isOver, setNodeRef } = useDroppable({ id });

  return (
    <span
      className={`practice-drop-slot-wrap practice-drop-slot-wrap--${width} ${className}`.trim()}
    >
      <button
        ref={setNodeRef}
        type="button"
        className={`practice-drop-slot practice-drop-slot--${state}${isOver ? " is-over" : ""}${!value && !children ? " is-empty" : ""}`}
        onClick={onClick}
      >
        <span>{children ?? value ?? placeholder}</span>
        <FeedbackIcon state={state} />
      </button>
      {value && onClear && state !== "locked" && state !== "correct" ? (
        <button type="button" className="practice-slot-clear" onClick={onClear} aria-label="Xóa">
          ✕
        </button>
      ) : null}
    </span>
  );
}
