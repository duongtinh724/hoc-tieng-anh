# AGENTS.md — Hướng dẫn cho AI khi làm việc với repo này

> **Bắt buộc:** Đọc file này **và** [`CURRICULUM-PLAN.md`](./CURRICULUM-PLAN.md) trước khi sửa code, thêm nội dung bài học, hoặc đề xuất thay đổi lớn. Mọi thay đổi phải phục vụ đúng mục tiêu bên dưới — không mở rộng scope tùy tiện.

---

## 1. Dự án là gì?

Web app học tiếng Anh cá nhân (**Next.js 15 + React 19 + TypeScript**), triển khai trên Vercel.

- Mỗi **tháng = 30 ngày**, mỗi ngày **30 phút**
- Tiến độ lưu **localStorage** trên trình duyệt
- Gồm 2 phần chính:
  - **Bài học (Lesson):** lý thuyết, nghe, chép, bài tập viết vào vở
  - **Luyện tập (Practice):** bài tập tương tác full-screen (kéo thả, điền, chọn…)

---

## 2. Học sinh & mục tiêu (KHÔNG ĐƯỢC LỆCH)

| Mục | Giá trị |
|-----|---------|
| Tên | **Nam** (trong code/announcement có thể ghi *Huy* — cùng một học sinh) |
| Tuổi / lớp | 15 tuổi, **lớp 9** |
| Xuất phát | Gần như **số 0** tại nhà (trường có thể đã nghe qua) |
| Thời gian | **30 phút / buổi**, học đều |
| Bắt đầu lộ trình | **Tháng 10/2026** |
| Kỳ thi | **Thi tuyển sinh vào lớp 10** — dự kiến **5–6/2027** |
| Thời gian ôn thi | **7 tháng học** (10/2026 → 4/2027) + vài tuần ôn nhẹ trước thi |
| **Mục tiêu điểm thi** | **5–6/10 ổn định** (Bắc Ninh: 40 câu/60 phút, có nghe). **Không** nhắm olympic / fluent |
| **Plan gốc** | **Day 1 → Day 210** — chi tiết trong [`CURRICULUM-PLAN.md`](./CURRICULUM-PLAN.md) |

### Ý nghĩa mục tiêu 5/10

- Trọng tâm **dạng đề hay ra điểm**: trắc nghiệm ngữ pháp cơ bản, điền dạng từ, đọc hiểu ngắn, viết vài câu đúng cấu trúc
- **Không** cần cover hết chương trình THCS 4 năm
- **Không** ưu tiên: email, thuyết trình, câu điều kiện nâng cao, perfect hoàn chỉnh, học 12 tháng kiểu dài hạn (tháng 8–12 trong `MONTHS` chỉ là placeholder tương lai, **không** dùng cho giai đoạn ôn thi)

---

## 3. Lộ trình 7 tháng — xem [`CURRICULUM-PLAN.md`](./CURRICULUM-PLAN.md)

| Tháng | Global Day | Trọng tâm (plan gốc) |
|-------|------------|----------------------|
| **1** | 1–30 | S+V, To be, mạo từ, Wh- questions |
| **2** | 31–60 | Present Simple → Continuous → Past → Future |
| **3** | 61–90 | Modal, giới từ, adj/adv, comparison |
| **4** | 91–120 | Present Perfect, gerund/infinitive, relative clauses |
| **5** | 121–150 | Conditional, passive, reported speech, vocab topics |
| **6** | 151–180 | Luyện dạng đề (grammar, word form, reading, listening) |
| **7** | 181–210 | Mock test, chữa lỗi, ổn định 5–6/10 |

**Thứ tự học bắt buộc:** Câu cơ bản → To be → Present Simple → Present Continuous → Past → Future → … → Luyện đề.

**Quy tắc tiến độ:** &lt;50% → ôn, không bài mới · 50–70% → tiếp tục · &gt;70% → sang bài mới.

**⚠️ Data app:** `month-01` đã **align** plan gốc Day 1–30. `month-02` **chưa có data** — viết theo Day 31–60 khi được yêu cầu.

---

## 4. Ngưỡng đạt trong app (khớp mục tiêu 5/10)

- Kiểm tra **tuần** (ngày 7, 14, 21): ≈ **≥ 60%** mới coi ổn
- Kiểm tra **cuối tháng** (ngày 30): **≥ 12/20** → được sang tháng tiếp theo
- **Practice:** phải **làm đúng** mới **Tiếp**; sai **3 lần** → nút **Xem đáp án** → sau đó được sang bài tiếp (không bắt làm lại)
- Tab **8/8** mỗi ngày Practice: **Viết về bản thân** (`self-writing`) — nộp bài khi đã viết, có nút **Xem gợi ý**

---

## 5. Quy ước ngôn ngữ UI

| Khu vực | Ngôn ngữ |
|---------|----------|
| **Lesson** (menu, bài học, quy tắc, hướng dẫn) | **Tiếng Việt** |
| **Practice** (hướng dẫn, nút, gợi ý) | **Tiếng Việt** |
| **Nội dung luyện Anh** (câu mẫu, hội thoại, điền từ, đáp án viết) | **Tiếng Anh** |
| **Match / nghĩa từ** | **Anh → Việt** |

---

## 6. Cấu trúc buổi học 30 phút (Lesson)

Theo `src/lib/constants.ts` → `GUIDE_STEPS`:

| Phút | Việc |
|------|------|
| 0–8 | Nghe & nhắc lại (6 câu, 3 vòng) |
| 8–20 | Chép vào vở (Anh | Việt) |
| 20–27 | Làm bài tập vào vở |
| 27–30 | Ba phút cuối — che vở, recall |

**Không hiển thị đáp án** cho học sinh trên UI Lesson (phụ huynh/GV chấm riêng). File data có thể giữ `answers` cho nội bộ nhưng **không** render ra màn hình bài học.

---

## 7. Practice — kiến trúc & quy ước

```
src/components/practice/     # UI Practice
src/data/practice/           # Data theo tháng/ngày
src/hooks/usePracticeSession.ts
src/lib/practice/            # validate, state, answer key
src/types/practice.ts
```

- **8 màn / ngày** (mặc định): match → dialogue-fill → sentence-drag → categorize → dropdown → reorder → reading-fill → **self-writing**
- Ảnh hội thoại mặc định: `public/images/practice/dialogue-default.png` (`PracticeSceneImage`)
- Chỉ **Tháng 1 / Ngày 1** có Practice data đầy đủ hiện tại — mở rộng tháng khác theo cùng pattern
- Dùng **Ant Design** trong Practice; kéo thả: **@dnd-kit**

---

## 8. Data & file quan trọng

| File | Vai trò |
|------|---------|
| `src/data/curriculum/month-01/days.json` | 30 ngày Tháng 1 (plan Day 1–30) |
| `src/data/curriculum/month-01/day-rules.ts` | Quy tắc theo ngày (RuleBox) |
| `src/data/curriculum/index.ts` | Danh sách tháng (`MONTHS`) |
| `CURRICULUM-PLAN.md` | **Plan gốc Day 1–210** |
| `src/data/curriculum/master-plan.ts` | Map tháng ↔ global day, ngưỡng tiến độ |
| `src/data/practice/month-01/day-01.ts` | Practice ngày 1 |
| `src/lib/review-plan.ts` | Milestone kiểm tra tuần / tháng |
| `src/types/lesson.ts`, `src/types/practice.ts` | Types |

Thêm tháng mới:

1. `src/data/curriculum/month-XX/days.json` + `day-rules.ts`
2. Đăng ký trong `src/data/curriculum/index.ts` (`DAY_DATA`, `status: "available"`)
3. (Tuỳ chọn) `src/data/practice/month-XX/day-YY.ts` + `src/data/practice/index.ts`

---

## 9. Việc AI **NÊN** làm

- Giữ mỗi buổi **≤ 30 phút** nội dung, chia rõ 4 block thời gian
- Mỗi ngày: **aim**, **rule**, **words**, **listen** (~6 câu), **copy**, **exercise**, **recall**
- **5–8 từ/ngày** (không 30–50 từ)
- Ngày 7 / 14 / 21 / 30: **kiểm tra**, không thêm từ mới (ngày 30)
- Tra **Global Day** trong `src/data/curriculum/master-plan.ts` + `CURRICULUM-PLAN.md`
- Code: component nhỏ, tái dùng pattern hiện có, **diff tối thiểu**
- Commit / PR **chỉ khi user yêu cầu**

---

## 10. Việc AI **KHÔNG** làm (trừ khi user yêu cầu rõ)

- ❌ Mở rộng scope sang app đa người dùng, auth, backend
- ❌ Hiện đáp án bài Lesson trên UI học sinh
- ❌ Đổi mục tiêu sang “fluent / IELTS / giao tiếp nâng cao”
- ❌ Nhồi ngữ pháp vượt mức thi 5/10 vào một ngày
- ❌ Viết lại toàn bộ kiến trúc khi chỉ cần sửa nhỏ
- ❌ Tạo file markdown / docs mới không được yêu cầu (ngoại trừ file này)
- ❌ Push git / commit nếu user không bảo

---

## 11. Tech stack & chạy project

- Node **>= 20.9** (xem `.nvmrc`)
- `yarn dev` / `npm run dev` — deploy **Vercel**
- CSS chủ yếu trong `src/app/globals.css` (class `practice-*`, lesson components)

---

## 12. Checklist nhanh trước khi hoàn thành task

- [ ] Có phục vụ mục tiêu **thi vào 10, điểm ≥ 5/10**?
- [ ] Có vừa **30 phút/buổi**?
- [ ] Lesson UI **tiếng Việt**, nội dung Anh đúng chỗ?
- [ ] Không lộ đáp án Lesson?
- [ ] Practice: luồng pass / 3 lần sai / self-writing còn đúng?
- [ ] Build không vỡ (`npm run build` nếu sửa lớn)

---

*Cập nhật lần cuối: 10/2026 — đồng bộ với quyết định mục tiêu 5/10 và lộ trình 7 tháng.*
