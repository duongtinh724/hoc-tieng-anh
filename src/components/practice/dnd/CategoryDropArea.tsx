"use client";

import { useDroppable } from "@dnd-kit/core";
import type { ReactNode } from "react";

interface CategoryDropAreaProps {
  id: string;
  onClick?: () => void;
  children: ReactNode;
}

export function CategoryDropArea({ id, onClick, children }: CategoryDropAreaProps) {
  const { isOver, setNodeRef } = useDroppable({ id });

  return (
    <div
      ref={setNodeRef}
      className={`practice-category-drop${isOver ? " is-over" : ""}`}
      onClick={onClick}
      onKeyDown={() => undefined}
      role="presentation"
    >
      {children}
    </div>
  );
}
