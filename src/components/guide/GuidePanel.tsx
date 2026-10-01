import { GUIDE_STEPS } from "@/lib/constants";

export function GuidePanel() {
  return (
    <section className="panel guide-panel">
      <h2>Hướng dẫn học một buổi (30 phút)</h2>
      <p className="panel-lead">
        Mỗi ngày học theo đúng thứ tự 5 bước. Không bỏ qua bước nào.
      </p>

      <div className="guide-timeline">
        {GUIDE_STEPS.map((step, index) => (
          <div key={step.title} className="guide-step">
            <span className="guide-step-num">{index + 1}</span>
            <div>
              <div className="guide-step-head">
                <strong>{step.title}</strong>
                <span className="guide-step-time">{step.time}</span>
              </div>
              <p>{step.detail}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="guide-notes">
        <h3>Lưu ý quan trọng</h3>
        <ul>
          <li>Ngày <strong>7, 14, 21, 30</strong> là ngày kiểm tra — dùng cả buổi để ôn.</li>
          <li>Đọc <strong>Quy tắc & công thức</strong> trước khi làm bài tập.</li>
          <li>Tick «Đã học xong» chỉ khi hoàn thành cả 5 mục.</li>
          <li>Tháng 2–12 sẽ được mở dần — lộ trình lên đến 1 năm (12 tháng).</li>
        </ul>
      </div>
    </section>
  );
}
