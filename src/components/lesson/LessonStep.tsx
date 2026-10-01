import type { ReactNode } from "react";
import type { StepVariant } from "@/types/lesson";

interface LessonStepProps {
  step: number;
  title: string;
  time: string;
  hint: string;
  variant: StepVariant;
  className?: string;
  children: ReactNode;
}

export function LessonStep({
  step,
  title,
  time,
  hint,
  variant,
  className = "",
  children,
}: LessonStepProps) {
  return (
    <section className={`lesson-step lesson-step--${variant} ${className}`.trim()}>
      <div className="lesson-step-header">
        <span className="lesson-step-number" aria-hidden="true">
          {step}
        </span>
        <div className="lesson-step-meta">
          <div className="lesson-step-title-row">
            <h3>{title}</h3>
            <span className="lesson-step-time">{time}</span>
          </div>
          <p className="lesson-step-hint">{hint}</p>
        </div>
      </div>
      <div className="lesson-step-body">{children}</div>
    </section>
  );
}
