"use client";

import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { Tag } from "antd";
import { HolderOutlined } from "@ant-design/icons";
import type { WordBankItem } from "@/types/practice";

interface DraggableWordChipProps {
  word: WordBankItem;
  used?: boolean;
  selected?: boolean;
  onClick?: () => void;
}

export function DraggableWordChip({
  word,
  used = false,
  selected = false,
  onClick,
}: DraggableWordChipProps) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: word.id,
    disabled: used,
    data: { wordId: word.id, label: word.label },
  });

  const style = transform
    ? { transform: CSS.Translate.toString(transform) }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`practice-word-chip-wrap${used ? " is-used" : ""}${selected ? " is-selected" : ""}${isDragging ? " is-dragging" : ""}`}
      {...listeners}
      {...attributes}
      onClick={used ? undefined : onClick}
    >
      <Tag
        className="practice-word-chip-ant"
        icon={
          <span className="practice-drag-handle" aria-hidden="true">
            <HolderOutlined />
          </span>
        }
      >
        {word.label}
      </Tag>
    </div>
  );
}
