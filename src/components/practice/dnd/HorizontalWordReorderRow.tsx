"use client";

import {
  DndContext,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  horizontalListSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { HolderOutlined } from "@ant-design/icons";
import { FeedbackIcon } from "@/components/practice/shared/FeedbackIcon";
import { getItemState } from "@/lib/practice/validate-screen";
import type { ItemState, ReorderLine } from "@/types/practice";

interface HorizontalWordReorderRowProps {
  label?: string;
  lines: ReorderLine[];
  order: string[];
  feedback: Record<string, ItemState>;
  lockedIds: string[];
  onMove: (fromIndex: number, toIndex: number) => void;
}

function SortableWordChip({
  id,
  text,
  state,
  locked,
}: {
  id: string;
  text: string;
  state: ReturnType<typeof getItemState>;
  locked: boolean;
}) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({ id, disabled: locked });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`practice-word-reorder-chip-wrap${isDragging ? " is-dragging" : ""}`}
    >
      <div className={`practice-word-reorder-chip practice-word-reorder-chip--${state}`}>
        {locked ? (
          <span className="practice-word-reorder-handle is-locked" aria-hidden="true">
            <HolderOutlined />
          </span>
        ) : (
          <button
            type="button"
            className="practice-word-reorder-handle"
            {...attributes}
            {...listeners}
            aria-label={`Kéo từ "${text}"`}
          >
            <HolderOutlined />
          </button>
        )}
        <span className="practice-word-reorder-text">{text}</span>
        <FeedbackIcon state={state} />
      </div>
    </div>
  );
}

export function HorizontalWordReorderRow({
  label,
  lines,
  order,
  feedback,
  lockedIds,
  onMove,
}: HorizontalWordReorderRowProps) {
  const lineMap = Object.fromEntries(lines.map((line) => [line.id, line.text]));
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 6 } }),
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const fromIndex = order.indexOf(String(active.id));
    const toIndex = order.indexOf(String(over.id));
    if (fromIndex === -1 || toIndex === -1) return;

    onMove(fromIndex, toIndex);
  };

  return (
    <section className="practice-word-reorder-row">
      {label ? <p className="practice-word-reorder-label">{label}</p> : null}
      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={order} strategy={horizontalListSortingStrategy}>
          <div className="practice-word-reorder-list">
            {order.map((lineId) => (
              <SortableWordChip
                key={lineId}
                id={lineId}
                text={lineMap[lineId]}
                state={getItemState(feedback, lineId)}
                locked={lockedIds.includes(lineId)}
              />
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </section>
  );
}
