"use client";

import {
  DndContext,
  DragOverlay,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
  type DragStartEvent,
} from "@dnd-kit/core";
import { useState, type ReactNode } from "react";

interface WordDragProviderProps {
  children: ReactNode;
  onDrop: (targetId: string, wordId: string) => void;
  getLabel: (wordId: string) => string | undefined;
}

export function WordDragProvider({
  children,
  onDrop,
  getLabel,
}: WordDragProviderProps) {
  const [activeWordId, setActiveWordId] = useState<string | null>(null);
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 6 },
    }),
  );

  const handleDragStart = (event: DragStartEvent) => {
    setActiveWordId(String(event.active.id));
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    setActiveWordId(null);

    if (!over) return;

    onDrop(String(over.id), String(active.id));
  };

  const activeLabel = activeWordId ? getLabel(activeWordId) : undefined;

  return (
    <DndContext
      sensors={sensors}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      {children}
      <DragOverlay dropAnimation={null}>
        {activeLabel ? (
          <div className="practice-drag-overlay">
            <span className="practice-word-chip-handle" aria-hidden="true">
              ⠿
            </span>
            <span>{activeLabel}</span>
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
}
