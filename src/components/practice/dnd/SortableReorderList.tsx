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
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Card } from "antd";
import { HolderOutlined } from "@ant-design/icons";
import { FeedbackIcon } from "@/components/practice/shared/FeedbackIcon";
import { getItemState } from "@/lib/practice/validate-screen";
import type { ReorderExerciseConfig, ScreenState } from "@/types/practice";

interface SortableReorderListProps {
  config: ReorderExerciseConfig;
  state: ScreenState;
  onMove: (fromIndex: number, toIndex: number) => void;
}

function SortableLine({
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
      className={`practice-reorder-card-wrap${isDragging ? " is-dragging" : ""}`}
    >
      <Card
        size="small"
        className={`practice-reorder-card practice-reorder-card--${state}`}
      >
      <div className="practice-reorder-row">
        {locked ? (
          <span className="practice-reorder-handle is-locked">
            <HolderOutlined />
          </span>
        ) : (
          <button
            type="button"
            className="practice-reorder-handle"
            {...attributes}
            {...listeners}
            aria-label="Kéo để sắp xếp"
          >
            <HolderOutlined />
          </button>
        )}
        <span className="practice-reorder-text">{text}</span>
        <FeedbackIcon state={state} />
      </div>
      </Card>
    </div>
  );
}

export function SortableReorderList({
  config,
  state,
  onMove,
}: SortableReorderListProps) {
  const order = state.order ?? config.lines.map((line) => line.id);
  const lineMap = Object.fromEntries(config.lines.map((line) => [line.id, line.text]));
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
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={order} strategy={verticalListSortingStrategy}>
        <div className="practice-reorder-list">
          {order.map((lineId) => (
            <SortableLine
              key={lineId}
              id={lineId}
              text={lineMap[lineId]}
              state={getItemState(state.feedback, lineId)}
              locked={state.lockedIds.includes(lineId)}
            />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
}
