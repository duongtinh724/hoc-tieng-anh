import { CloseOutlined } from "@ant-design/icons";
import { Button, Tag, Typography } from "antd";
import type { PracticeBreadcrumbItem } from "@/types/practice";

interface PracticeHeaderProps {
  breadcrumb: PracticeBreadcrumbItem[];
  currentScreen: number;
  totalScreens: number;
  completedScreens: number[];
  onGoToScreen: (screenNumber: number) => void;
  onClose: () => void;
}

export function PracticeHeader({
  breadcrumb,
  currentScreen,
  totalScreens,
  completedScreens,
  onGoToScreen,
  onClose,
}: PracticeHeaderProps) {
  return (
    <header className="practice-header">
      <div className="practice-header-brand">
        <Typography.Text strong className="practice-logo">
          Luyện tập tiếng Anh
        </Typography.Text>
      </div>

      <div className="practice-header-center">
        <nav className="practice-breadcrumb" aria-label="Vị trí luyện tập">
          {breadcrumb.map((item) =>
            item.highlight ? (
              <Tag key={item.label} color="purple" className="practice-breadcrumb-tag">
                {item.label}
              </Tag>
            ) : (
              <Typography.Text key={item.label} type="secondary" className="practice-breadcrumb-item">
                {item.label}
              </Typography.Text>
            ),
          )}
        </nav>
        <nav
          className="practice-progress-dots"
          aria-label="Chuyển màn luyện tập"
        >
          {Array.from({ length: totalScreens }, (_, index) => {
            const screenNumber = index + 1;
            const isCurrent = screenNumber === currentScreen;
            const isCompleted = completedScreens.includes(screenNumber);
            return (
              <button
                key={screenNumber}
                type="button"
                className={`practice-dot${isCurrent ? " is-current" : ""}${isCompleted ? " is-complete" : ""}`}
                aria-label={`Màn ${screenNumber}${isCurrent ? " (đang xem)" : ""}${isCompleted ? " (đã xong)" : ""}`}
                aria-current={isCurrent ? "step" : undefined}
                onClick={() => onGoToScreen(screenNumber)}
              />
            );
          })}
        </nav>
      </div>

      <div className="practice-header-actions">
        <Button type="text" icon={<CloseOutlined />} aria-label="Đóng" onClick={onClose} />
      </div>
    </header>
  );
}
