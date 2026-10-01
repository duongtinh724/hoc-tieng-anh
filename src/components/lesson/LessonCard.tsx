"use client";

import type { DayLesson } from "@/types/lesson";
import { AnswersToggle } from "@/components/lesson/AnswersToggle";
import { ListenList } from "@/components/lesson/ListenList";
import { RecallSection } from "@/components/lesson/RecallSection";
import { TextListSection } from "@/components/lesson/TextListSection";
import { WordsList } from "@/components/lesson/WordsList";

interface LessonCardProps {
  lesson: DayLesson;
  isDone: boolean;
  onToggleDone: (done: boolean) => void;
}

export function LessonCard({ lesson, isDone, onToggleDone }: LessonCardProps) {
  return (
    <div className="card">
      <div className="card-header">
        <span>
          Ngày {lesson.day} — {lesson.title}
        </span>
        <span className={`badge ${isDone ? "done" : "pending"}`}>
          {isDone ? "Đã xong" : "Chưa xong"}
        </span>
      </div>

      <div className="card-body">
        <label className="check-row">
          <input
            type="checkbox"
            checked={isDone}
            onChange={(event) => onToggleDone(event.target.checked)}
          />
          Đã học xong ngày này
        </label>

        <p>{lesson.aim}</p>

        <div className="rule">
          <strong>Quy tắc của ngày:</strong> {lesson.rule}
        </div>

        <WordsList words={lesson.words} />
        <ListenList items={lesson.listen} />
        <TextListSection title="Chép vào vở, phút 8–20" items={lesson.copy} />
        <TextListSection title="Bài tập, phút 20–27" items={lesson.exercise} />
        <RecallSection recall={lesson.recall} />
        <AnswersToggle answers={lesson.answers} />
      </div>
    </div>
  );
}
