# AGENTS.md — Hướng dẫn cho AI khi làm việc với repo này

> **Bắt buộc:** Đọc file này **và** [`CURRICULUM-PLAN.md`](./CURRICULUM-PLAN.md) trước khi sửa code, thêm nội dung bài học, hoặc đề xuất thay đổi lớn. Mọi thay đổi phải phục vụ đúng mục tiêu bên dưới — không mở rộng scope tùy tiện.

---

## 1. Dự án là gì?

Web app học tiếng Anh cá nhân (**Next.js 15 + React 19 + TypeScript**), triển khai trên Vercel.

- Lịch học theo [`CURRICULUM-PLAN.md`](./CURRICULUM-PLAN.md): **60 phút / ngày**, 30 tuần + 16 ngày trước thi
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
| Thời gian | **60 phút / buổi**, học đều |
| Bắt đầu lộ trình | **12/10/2026** |
| Kỳ thi | **Thi tuyển sinh vào lớp 10** — mốc ôn đến **25/05/2027** (kỳ thi dự kiến sau đó) |
| Thời gian ôn thi | **30 tuần** (12/10/2026 → 09/05/2027) + **16 ngày** cuối (10/05–25/05/2027) |
| **Mục tiêu điểm thi** | **5–6/10 ổn định**. **Không** nhắm olympic / fluent. Cấu trúc đề 2027–2028 chờ Sở công bố |
| **Plan gốc** | Lịch 30 tuần trong [`CURRICULUM-PLAN.md`](./CURRICULUM-PLAN.md) |

### Ý nghĩa mục tiêu 5/10

- Trọng tâm **dạng đề hay ra điểm**: trắc nghiệm ngữ pháp cơ bản, điền dạng từ, đọc hiểu ngắn, viết vài câu đúng cấu trúc
- **Không** cần cover hết chương trình THCS 4 năm
- **Không** ưu tiên: email, thuyết trình, câu điều kiện nâng cao, perfect hoàn chỉnh, học 12 tháng kiểu dài hạn (tháng 8–12 trong `MONTHS` chỉ là placeholder tương lai, **không** dùng cho giai đoạn ôn thi)

---

## 3. Lộ trình — xem [`CURRICULUM-PLAN.md`](./CURRICULUM-PLAN.md)

Mỗi ngày **60 phút**: 10p từ vựng · 15p ngữ pháp · 15p bài tập · 10p kỹ năng đề · 10p nhớ lại. Chủ nhật ôn và kiểm tra, không thêm kiến thức mới. Ngày ôn giảm phần mới, tăng thời gian làm bài.

| Giai đoạn | Tuần | Thời gian |
|-----------|------|-----------|
| Nền tảng | 1–4 | 12/10–08/11/2026 |
| Các thì | 5–10 | 09/11–20/12/2026 |
| Ngữ pháp đề | 11–16 | 21/12/2026–31/01/2027 |
| Hoàn thiện + dạng bài | 17–22 | 01/02–14/03/2027 |
| Từ vựng, đọc, nghe | 23–26 | 15/03–11/04/2027 |
| Luyện đề | 27–30 | 12/04–09/05/2027 |
| 16 ngày cuối | — | 10/05–25/05/2027 |

**Quy tắc tiến độ:** &lt;50% → củng cố, không sang chủ đề mới · 50–69% → tiếp tục kèm ôn · ≥70% → tạm đạt, sang bài mới và ôn lại sau vài ngày.

**⚠️ Data app:** `month-01` viết theo plan cũ (Day 1–14). Bài mới viết theo lịch tuần trong `CURRICULUM-PLAN.md`, khi được yêu cầu.

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

## 6. Cấu trúc buổi học 60 phút (Lesson)

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
| `CURRICULUM-PLAN.md` | **Plan gốc: 30 tuần + 16 ngày cuối** |
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

- Giữ mỗi buổi **60 phút**, đúng 5 block trong `CURRICULUM-PLAN.md`
- Mỗi ngày: **aim**, **rule**, **words**, **listen** (~6 câu), **copy**, **exercise**, **recall**
- Khoảng **5 từ mới/ngày**, ôn từ cũ; ngày Chủ nhật không thêm từ mới
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
- [ ] Có vừa **60 phút/buổi** (5 block trong plan)?
- [ ] Lesson UI **tiếng Việt**, nội dung Anh đúng chỗ?
- [ ] Không lộ đáp án Lesson?
- [ ] Practice: luồng pass / 3 lần sai / self-writing còn đúng?
- [ ] Build không vỡ (`npm run build` nếu sửa lớn)

---

*Cập nhật lần cuối: 10/2026 — đồng bộ với quyết định mục tiêu 5/10 và lộ trình 7 tháng.*
