import {
  BulbOutlined,
  LeftOutlined,
  RedoOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { Button, Space, Typography } from "antd";

interface PracticeFooterProps {
  currentScreen: number;
  totalScreens: number;
  pendingCount: number;
  canCheck: boolean;
  canNext: boolean;
  canRevealAnswerKey: boolean;
  isSelfWriting: boolean;
  isQuiz: boolean;
  showSubmit?: boolean;
  passed: boolean;
  answerKeyRevealed: boolean;
  showAnswerKey: boolean;
  onReset: () => void;
  onToggleHint: () => void;
  onCheck: () => void;
  onRevealAnswerKey: () => void;
  onNext: () => void;
  onPrev: () => void;
  onShowAnswerKey: () => void;
}

export function PracticeFooter({
  currentScreen,
  totalScreens,
  pendingCount,
  canCheck,
  canNext,
  canRevealAnswerKey,
  isSelfWriting,
  isQuiz,
  showSubmit = true,
  passed,
  answerKeyRevealed,
  showAnswerKey,
  onReset,
  onToggleHint,
  onCheck,
  onRevealAnswerKey,
  onNext,
  onPrev,
  onShowAnswerKey,
}: PracticeFooterProps) {
  return (
    <footer className="practice-footer">
      <div className="practice-footer-left">
        <Button icon={<RedoOutlined />} onClick={onReset} aria-label="Làm lại" />
        <Button icon={<BulbOutlined />} onClick={onToggleHint}>
          Gợi ý
        </Button>
      </div>

      <Space className="practice-footer-center">
        <Button type="text" icon={<LeftOutlined />} onClick={onPrev} disabled={currentScreen <= 1} />
        <Typography.Text className="practice-pagination">
          {currentScreen} / {totalScreens}
        </Typography.Text>
        <Button type="text" icon={<RightOutlined />} onClick={onNext} disabled={!canNext} />
      </Space>

      <div className="practice-footer-right">
        {passed ? (
          <Space>
            {!answerKeyRevealed ? (
              <Button onClick={onShowAnswerKey}>
                {showAnswerKey ? "Ẩn đáp án" : "Đáp án"}
              </Button>
            ) : null}
            {canNext ? (
              <Button type="primary" onClick={onNext}>
                Tiếp
              </Button>
            ) : (
              <Button type="primary" disabled>
                Hoàn thành
              </Button>
            )}
          </Space>
        ) : (
          <Space>
            {canRevealAnswerKey ? (
              <Button onClick={onRevealAnswerKey}>Xem đáp án</Button>
            ) : null}
            {showSubmit ? (
            <Button type="primary" disabled={!canCheck} onClick={onCheck} size="large">
              {isSelfWriting ? "Nộp bài" : isQuiz ? "Nộp bài" : `Kiểm tra (${pendingCount})`}
            </Button>
            ) : null}
          </Space>
        )}
      </div>
    </footer>
  );
}
