"use client";

import { useEffect, useRef } from "react";
import { Button, Result } from "antd";
import { HintDrawer } from "@/components/practice/shell/HintDrawer";
import { PracticeFooter } from "@/components/practice/shell/PracticeFooter";
import { PracticeHeader } from "@/components/practice/shell/PracticeHeader";
import { PracticeAntdProvider } from "@/components/practice/PracticeAntdProvider";
import { ScreenRenderer } from "@/components/practice/exercises/ScreenRenderer";
import { hasPracticeLesson } from "@/data/practice";
import { usePracticeSession } from "@/hooks/usePracticeSession";

interface PracticePageProps {
  month: number;
  day: number;
  onClose: () => void;
  onComplete?: () => void;
}

export function PracticePage({ month, day, onClose, onComplete }: PracticePageProps) {
  const session = usePracticeSession(month, day);
  const completionRecordedRef = useRef(false);

  useEffect(() => {
    completionRecordedRef.current = false;
  }, [month, day]);

  useEffect(() => {
    if (!session.allScreensPassed || completionRecordedRef.current) return;
    completionRecordedRef.current = true;
    onComplete?.();
  }, [session.allScreensPassed, onComplete]);

  return (
    <PracticeAntdProvider>
      {!hasPracticeLesson(month, day) || !session.lesson || !session.screen || !session.state ? (
        <div className="practice-overlay">
          <Result
            status="info"
            title="Bài luyện tập cho ngày này chưa có."
            extra={
              <Button type="primary" onClick={onClose}>
                Quay lại bài học
              </Button>
            }
          />
        </div>
      ) : (
        <div className="practice-overlay">
          <div className={`practice-app${session.hintOpen ? " hint-open" : ""}`}>
            <PracticeHeader
              breadcrumb={session.lesson.meta.breadcrumb}
              currentScreen={session.currentScreen + 1}
              totalScreens={session.lesson.meta.totalScreens}
              completedScreens={session.completedScreens}
              onGoToScreen={(screenNumber) =>
                session.goToScreen(screenNumber - 1)
              }
              onClose={onClose}
            />

            <main className="practice-main">
              <ScreenRenderer
                screen={session.screen}
                state={session.state}
                selectedWordId={session.selectedWordId}
                onSelectWord={session.setSelectedWordId}
                onAssign={session.assignAnswer}
                onClear={session.clearAnswer}
                onTextChange={session.setTextAnswer}
                onReorder={session.reorderLines}
              />
            </main>

            <PracticeFooter
              currentScreen={session.currentScreen + 1}
              totalScreens={session.lesson.meta.totalScreens}
              pendingCount={session.pendingCount}
              canCheck={session.canCheck}
              canNext={session.canNext}
              canRevealAnswerKey={session.canRevealAnswerKey}
              isSelfWriting={session.isSelfWriting}
              passed={session.state.passed}
              answerKeyRevealed={session.state.answerKeyRevealed}
              showAnswerKey={session.showAnswerKey}
              onReset={session.resetScreen}
              onToggleHint={() => session.setHintOpen(!session.hintOpen)}
              onCheck={session.checkAnswers}
              onRevealAnswerKey={session.revealAnswerKey}
              onNext={session.goNext}
              onPrev={session.goPrev}
              onShowAnswerKey={() => session.setShowAnswerKey(!session.showAnswerKey)}
            />

            <HintDrawer
              open={session.hintOpen}
              hints={session.lesson.hints}
              onClose={() => session.setHintOpen(false)}
            />
          </div>
        </div>
      )}
    </PracticeAntdProvider>
  );
}
