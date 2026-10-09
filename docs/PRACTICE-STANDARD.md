# Chuẩn Practice — lấy Ngày 3 (Tháng 1) làm mẫu

> Mỗi lần viết Practice cho **bài sau**, làm đúng file này.  
> Mẫu code: `src/data/practice/month-01/day-03.ts`  
> Bài học gốc: `src/data/curriculum/month-01/days.json` (ngày tương ứng).

## 8 màn (không tách Match thành 2 slide)

| # | `type` | Việc học sinh làm |
|---|--------|-------------------|
| 1 | `match` | **Một** slide nối hết từ vựng ngày đó |
| 2 | `categorize` | Kéo từ vào nhóm |
| 3 | `sentence-drag` | Kéo từ vào chỗ trống trong câu |
| 4 | `dropdown` | Chọn đáp án + **2 câu ôn** |
| 5 | `reorder` | Sắp từ **theo hàng ngang**, **nhiều câu** |
| 6 | `reading-fill` | Gõ từ vào **ô nằm cùng dòng** với câu |
| 7 | `dictation` | Nghe rồi chép **từng câu** (câu nghe của bài học) |
| 8 | `self-writing` | Viết về bản thân |

`meta.totalScreens` = **8**.

```ts
meta: { ...createPracticeMeta(day, "Tiêu đề bài"), totalScreens: 8 }
```

## Màn 1 — Match

- Gộp toàn bộ từ vựng vào **một** màn. Không còn match (1) + match (2).
- Ảnh **thật** (jpg) trong `public/images/practice/...`, thấy **trọn tấm** (`object-fit: contain`). Card cùng cỡ khi xuống dòng.
- Bấm ảnh → lật ra **nghĩa tiếng Việt**. Bấm lần nữa → về ảnh.
- Ô kéo thả từ nằm dưới ảnh, không lật theo thẻ.

## Màn 4 — Ôn bài trước

```
Practice ngày n = nội dung ngày n + vài câu từ (n−1) và (n−2)
```

- Ngày 1: không ôn. Ngày 2: một câu từ ngày 1.
- Từ ngày 3: **2 câu** dropdown, đầu câu ghi `Ôn:`.
- Chỉ kiến thức **đã học** (không to be trước ngày 8, không -s trước tháng 2).
- Câu được xáo mỗi lần vào bài.

## Màn 5 — Sắp xếp từ ngang

```ts
{
  type: "reorder",
  layout: "horizontal",
  sentences: [
    { id: "sen-1", label: "Câu 1", lines: [...], correctOrder: [...] },
  ],
  lines: [],
  correctOrder: [],
}
```

Ít nhất **4–5 câu** cùng cấu trúc bài hôm đó. Không dùng reorder dọc cho dạng sắp từ trong câu.

## Màn 6 — Điền cùng một dòng

Label có `___` thì ô nhập nằm giữa câu:

```ts
{ id: "rf1", label: "I ___ breakfast. (ăn)", correctAnswers: ["eat"] }
```

## Ngày kiểm tra (7, 14, 21, 30)

Không dùng 8 màn luyện tập. Một màn `quiz`: **20** câu ngữ pháp–từ vựng, **5** nghe, **5** đọc. Đồng hồ **30 phút**, nằm góc phải. Hết giờ hoặc bấm **Nộp bài** thì hiện điểm trên thang **10**. Đạt từ **6/10**. Câu sai hiện giải thích.

## Màn 7 — Nghe và chép

Một câu một lượt: **Nghe** → gõ vào ô → **Kiểm tra**.

- Đúng thì khóa câu đó và sang câu tiếp.
- Sai **3 lần** thì hiện `hint` (nghĩa tiếng Việt, hoặc chữ cái đầu nếu câu không có nghĩa).
- Sau gợi ý vẫn gõ và kiểm tra lại. Không hiện cả câu đáp án.
- Lấy câu từ `listen` của ngày đó. Ngày chỉ có từ vựng thì chép từ.

## Màn 8 — Viết về bản thân

- Trước khi **Nộp bài**: chỉ ô viết. Không hiện mẫu câu, không nút **Xem gợi ý**.
- Sau khi nộp: mới hiện mẫu và gợi ý.

## Gợi ý (nút Gợi ý)

- **Từ vựng:** chỉ tiếng Anh. Mỗi từ có 🔊 nghe và link [Oxford Learner's Dictionaries](https://www.oxfordlearnersdictionaries.com/).
- Không hiện nghĩa tiếng Việt trong bảng gợi ý (nghĩa nằm ở mặt sau thẻ Match).

## URL

Đang làm bài thì URL dạng:

`?month=1&page=practice&lesson=3`

Reload mở lại đúng bài, **slide 1**.
