import type { MonthConfig } from "@/types/lesson";

interface PageHeaderProps {
  monthConfig: MonthConfig;
}

export function PageHeader({ monthConfig }: PageHeaderProps) {
  return (
    <header className="page-header">
      <p className="page-eyebrow">{monthConfig.title} · {monthConfig.subtitle}</p>
      <h1>Chương trình học tiếng Anh</h1>
      <p className="lead">
        30 phút mỗi ngày, bắt đầu từ số 0. Mỗi buổi có <strong>5 mục</strong>{" "}
        cần hoàn thành. Tiến độ được lưu trên trình duyệt này.
      </p>
    </header>
  );
}
