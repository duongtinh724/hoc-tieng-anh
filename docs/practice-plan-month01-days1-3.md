# Plan Practice — Tháng 1, Ngày 1–3

> Bám [`month-01/days.json`](../src/data/curriculum/month-01/days.json) · UI Practice tiếng Việt · Nội dung Anh

## Nguyên tắc

| # | Quy tắc |
|---|---------|
| 1 | **Chỉ** kiến thức đã học trong ngày (không to be trước ngày 8, không -s/he/she chia động từ trước tháng 2) |
| 2 | Mỗi ngày **8 màn** — đủ dạng bài, không nhồi grammar chưa dạy |
| 3 | **5–8 từ** trong gợi ý = từ vựng bài học |
| 4 | **Hình ảnh** ở màn match / dropdown / dialogue (SVG trong `public/images/practice/`) |
| 5 | Câu mới **mở rộng ngữ cảnh** (Nam, Lan, lớp 9) nhưng **cùng cấu trúc** bài học |

## Cấu trúc 8 màn (chung)

| # | Dạng | Vai trò |
|---|------|---------|
| 1–2 | **Match** | Từ vựng Anh ↔ Việt (+ hình) |
| 3 | **Categorize** | Phân loại (người/vật, người/đồ vật, v.v.) |
| 4 | **Sentence drag** | Điền từ vào câu (chủ điểm ngày) |
| 5 | **Dropdown** | Chọn đúng từ / đại từ / động từ |
| 6 | **Reorder** | Sắp xếp từ / câu ngắn |
| 7 | **Reading fill** | Đoạn ngắn + điền (hoặc **dialogue-fill** nếu phù hợp) |
| 8 | **Self-writing** | Viết 3–5 câu, có gợi ý mẫu |

---

## Ngày 1 — Đại từ nhân xưng

**Bài học:** I, You, He, She, It, We, They

| Màn | Dạng | Nội dung |
|-----|------|----------|
| 1 | Match | I, You, He, She ↔ nghĩa Việt · hình `day01-pronouns.svg` |
| 2 | Match | We, They, It ↔ nghĩa Việt |
| 3 | Categorize | **Người** (I/You/He/She/We/They) vs **Vật** (It) |
| 4 | Sentence drag | ___ study English / ___ go to school / ___ read books |
| 5 | Dropdown | Gợi ý Việt → chọn đại từ |
| 6 | Reorder | Sắp xếp: I → You → He → She → It → We → They |
| 7 | Reading fill | Đoạn Nam & bạn · điền He/She/I/They |
| 8 | Self-writing | Viết 3 câu có I, We, They + động từ đơn (study/go) |

**Hình:** `day01-pronouns.svg` — sơ đồ người trong lớp

---

## Ngày 2 — Danh từ cơ bản

**Bài học:** book, student, teacher, house, school, pen, bag

| Màn | Dạng | Nội dung |
|-----|------|----------|
| 1 | Match | book, student, teacher, school + hình từng đồ vật |
| 2 | Match | house, pen, bag |
| 3 | Categorize | **Người** (student, teacher) vs **Đồ vật & nơi** (book, pen, bag, house, school) |
| 4 | Sentence drag | We go to ___. / My ___ and my ___. |
| 5 | Dropdown | Gợi ý Việt → chọn danh từ |
| 6 | Reorder | Sắp xếp câu: We / go / to / school |
| 7 | Dialogue fill | Nam & Lan giới thiệu nghề (student/teacher) — chỉ điền danh từ |
| 8 | Self-writing | Viết 3 câu có school, pen, book |

**Hình:** `day02-nouns.svg` + icon `nouns/book.svg`, `school.svg`, …

---

## Ngày 3 — Động từ cơ bản

**Bài học:** eat, go, work, study, like, play, read · S + V (I/You/We/They)

| Màn | Dạng | Nội dung |
|-----|------|----------|
| 1 | Match | eat, go, study, like ↔ Việt |
| 2 | Match | work, play, read |
| 3 | Categorize | **Học tập** (study, read) vs **Vui / ăn uống** (eat, play, like) |
| 4 | Sentence drag | I ___ English. / You ___ to school. / We ___ football. |
| 5 | Dropdown | Chọn động từ đúng |
| 6 | Reorder | I / study / English . |
| 7 | Reading fill | Một ngày của Nam — điền động từ |
| 8 | Self-writing | Viết 4 câu I + V (eat, go, study, like) |

**Hình:** `day03-verbs.svg`

---

## File triển khai

```
src/data/practice/month-01/day-01.ts   ← rewrite
src/data/practice/month-01/day-02.ts   ← new
src/data/practice/month-01/day-03.ts   ← new
src/data/practice/index.ts             ← register 1-1, 1-2, 1-3
public/images/practice/day01-pronouns.svg
public/images/practice/day02-nouns.svg
public/images/practice/day03-verbs.svg
public/images/practice/nouns/*.svg     ← match icons
```

---

## Ngày 4 — Tính từ cơ bản

**Bài học:** good, bad, big, small, new, old, happy · a + adj + noun

| Màn | Dạng | Nội dung |
|-----|------|----------|
| 1–2 | Match | 7 tính từ ↔ Việt |
| 3 | Categorize | Kích thước (big/small) vs Tính chất (good/bad/new/old/happy) |
| 4 | Sentence drag | a ___ book / a ___ house / happy students |
| 5 | Dropdown | Gợi ý Việt → chọn adj |
| 6 | Reorder | a / good / book |
| 7 | Reading fill | Phòng của Nam — điền tính từ |
| 8 | Self-writing | 3 cụm a + adj + noun |

**Hình:** `day04-adjectives.svg`

---

## Ngày 5 — Cấu trúc S + V

**Bài học:** subject, verb, sentence, simple, every day, morning

| Màn | Dạng | Nội dung |
|-----|------|----------|
| 1–2 | Match | Thuật ngữ S/V + every day, morning |
| 3 | Categorize | Chủ ngữ (I/You/We/They) vs Động từ |
| 4 | Sentence drag | I ___. / I study every day. |
| 5 | Dropdown | Chọn V đúng |
| 6 | Reorder | I / study / every / day / . |
| 7 | Dialogue fill | Nam & Lan — lịch học |
| 8 | Self-writing | 4 câu S + V |

**Hình:** `day05-sv.svg`

---

## Ngày 6 — Cấu trúc S + V + O

**Bài học:** object, music, English, football, rice, water, homework

| Màn | Dạng | Nội dung |
|-----|------|----------|
| 1–2 | Match | Tân ngữ + từ vựng O |
| 3 | Categorize | Ghép O với like / study / play / eat |
| 4 | Sentence drag | I like ___. / We study ___. |
| 5 | Dropdown | Chọn O đúng |
| 6 | Reorder | We / study / English / . |
| 7 | Reading fill | Sở thích của Nam |
| 8 | Self-writing | 4 câu S + V + O |

**Hình:** `day06-svo.svg`

---

## Ngày 7+

Ngày 7 = kiểm tra tuần (chưa có Practice). Ngày 8+ lặp pattern trên.
