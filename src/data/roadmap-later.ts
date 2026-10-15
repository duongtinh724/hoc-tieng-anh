export interface RoadmapWeek {
  title: string;
  range: string;
  days: string[];
}

export interface RoadmapMonth {
  title: string;
  range: string;
  summary: string;
  weeks: RoadmapWeek[];
}

const d = (title: string, range: string, days: string[]): RoadmapWeek => ({
  title,
  range,
  days,
});

export const LATER_MONTHS: RoadmapMonth[] = [
  {
    title: "Tháng 3",
    range: "07/12 – 03/01 · Tuần 9–12",
    summary: "Củng cố các thì, câu hỏi, động từ khuyết thiếu và giới từ.",
    weeks: [
      d("Tuần 9 — Củng cố các thì", "07/12–13/12", ["Ôn hiện tại đơn", "Ôn hiện tại tiếp diễn", "Ôn quá khứ đơn", "Ôn tương lai", "Phân biệt các thì", "Bài tập trộn thì", "Kiểm tra và phân loại lỗi"]),
      d("Tuần 10 — Câu hỏi", "14/12–20/12", ["Ôn do/does/did", "Câu hỏi Yes/No", "Câu hỏi Wh-", "Trật tự từ khẳng định và phủ định", "Sửa lỗi câu", "Đọc đoạn có nhiều thì", "Kiểm tra tổng hợp"]),
      d("Tuần 11 — Động từ khuyết thiếu", "21/12–27/12", ["Can/can't", "Should/shouldn't", "Must/mustn't", "Have to / don't have to", "Ôn khuyết thiếu", "Trắc nghiệm và viết câu", "Kiểm tra"]),
      d("Tuần 12 — Giới từ và từ loại", "28/12–03/01", ["in / on / at", "Giới từ nơi chốn", "Giới từ đi với động từ", "Danh từ và tính từ", "Động từ và trạng từ", "Nhận biết từ loại", "Kiểm tra"]),
    ],
  },
  {
    title: "Tháng 4",
    range: "04/01 – 31/01 · Tuần 13–16",
    summary: "So sánh, lượng từ, hiện tại hoàn thành, V-ing, to V và liên từ.",
    weeks: [
      d("Tuần 13 — So sánh", "04/01–10/01", ["So sánh hơn, tính từ ngắn", "So sánh hơn, tính từ dài", "So sánh nhất", "Bất quy tắc", "As…as", "So sánh trong đoạn văn", "Kiểm tra"]),
      d("Tuần 14 — Lượng từ", "11/01–17/01", ["Some/any", "Much/many/a lot of", "Đếm được và không đếm được", "Đại từ sở hữu", "Số nhiều và lỗi hay gặp", "Điền từ, chọn đáp án", "Kiểm tra"]),
      d("Tuần 15 — Hiện tại hoàn thành", "18/01–24/01", ["Have/has + V3", "Phủ định và câu hỏi", "Ever/never", "Just/already/yet", "Since/for", "Phân biệt với quá khứ đơn", "Kiểm tra"]),
      d("Tuần 16 — V-ing, to V, liên từ", "25/01–31/01", ["V-ing sau động từ", "To + V", "And, but, or, so, because", "Although và because", "Nối hai câu đơn", "Viết lại câu", "Kiểm tra"]),
    ],
  },
  {
    title: "Tháng 5",
    range: "01/02 – 14/03 · Tuần 17–22",
    summary: "Mệnh đề quan hệ, điều kiện loại 1, bị động, tường thuật, phát âm và giao tiếp.",
    weeks: [
      d("Tuần 17 — Mệnh đề quan hệ", "01/02–07/02", ["Who, which, that", "Người và vật được nhắc", "Nối hai câu", "Nhận diện trong đoạn văn", "Chọn đáp án", "Bài tổng hợp", "Kiểm tra"]),
      d("Tuần 18 — Điều kiện loại 1", "08/02–14/02", ["If + hiện tại đơn", "Mệnh đề chính với will", "Phủ định và câu hỏi", "Điều kiện và kết quả", "Điền từ, chọn đáp án", "Viết câu điều kiện", "Kiểm tra"]),
      d("Tuần 19 — Câu bị động", "15/02–21/02", ["Chủ động và bị động", "be + V3", "Bị động hiện tại đơn", "Bị động quá khứ đơn", "Chủ ngữ và tân ngữ", "Chuyển câu", "Kiểm tra"]),
      d("Tuần 20 — Câu tường thuật", "22/02–28/02", ["Say và tell", "Tường thuật câu kể", "Đại từ và thì", "Từ chỉ thời gian", "Nhận diện câu tường thuật", "Ôn bị động và điều kiện", "Kiểm tra"]),
      d("Tuần 21 — Phát âm và giao tiếp", "01/03–07/03", ["Đuôi -s/-es", "Đuôi -ed", "Trọng âm", "Từ loại trong ngữ cảnh", "Đáp lời", "Trắc nghiệm", "Kiểm tra dạng đề"]),
      d("Tuần 22 — Củng cố", "08/03–14/03", ["Các thì cơ bản", "Giới từ và mạo từ", "So sánh và khuyết thiếu", "Hiện tại hoàn thành", "Bị động và điều kiện", "Viết lại câu", "5 lỗi sai phổ biến"]),
    ],
  },
  {
    title: "Tháng 6",
    range: "15/03 – 11/04 · Tuần 23–26",
    summary: "Từ vựng theo chủ đề, word form, đọc, nghe và viết lại câu.",
    weeks: [
      d("Tuần 23 — Từ vựng chủ đề", "15/03–21/03", ["Trường học", "Gia đình", "Sức khỏe", "Môi trường", "Công nghệ", "Học từ trong câu", "Kiểm tra từ vựng"]),
      d("Tuần 24 — Word form", "22/03–28/03", ["Nhận diện từ loại", "Hậu tố", "Chọn từ đúng ngữ cảnh", "Điền từ vào câu", "Điền vào đoạn văn", "Trộn từ vựng và ngữ pháp", "Kiểm tra"]),
      d("Tuần 25 — Đọc và nghe", "29/03–04/04", ["Đọc câu hỏi trước", "Tìm thông tin", "Ý chính", "Đoán nghĩa từ", "Nghe câu ngắn", "Nghe đoạn ngắn", "Kiểm tra đọc và nghe"]),
      d("Tuần 26 — Viết lại câu", "05/04–11/04", ["Because / although", "Câu so sánh", "Câu điều kiện", "Câu bị động", "Hoàn thành câu", "Một phần đề có giờ", "Kiểm tra tổng hợp"]),
    ],
  },
  {
    title: "Tháng 7",
    range: "12/04 – 09/05 · Tuần 27–30",
    summary: "Luyện từng dạng đề, rồi làm đề có bấm giờ và chữa lỗi.",
    weeks: [
      d("Tuần 27 — Từng dạng câu hỏi", "12/04–18/04", ["Phát âm và trọng âm", "Ngữ pháp và từ vựng", "Giao tiếp, sắp xếp câu", "Điền đoạn văn", "Đọc hiểu", "Viết lại câu", "Kiểm tra kết hợp"]),
      d("Tuần 28 — Đề có hướng dẫn", "19/04–25/04", ["Làm theo nhóm câu", "Loại đáp án sai", "Ôn câu ngữ pháp sai", "Ôn word form", "Đọc và nghe", "Một đề có giờ", "Danh sách phần yếu"]),
      d("Tuần 29 — Luyện đề", "26/04–02/05", ["Ngữ pháp ngắn", "Từ vựng và phát âm", "Đọc và điền từ", "Nghe", "Sửa đề trước", "Đề 60 phút", "Chỉnh nội dung ôn"]),
      d("Tuần 30 — Sẵn sàng thi", "03/05–09/05", ["5 chủ điểm yếu nhất", "Ôn từ đã học", "Phát âm và giao tiếp", "Đọc và điền từ", "Viết lại câu", "Đề 60 phút", "Chọn 3 nhóm lỗi cuối"]),
    ],
  },
  {
    title: "16 ngày cuối",
    range: "10/05 – 25/05",
    summary: "Không học lại từ đầu. Mỗi ngày sửa một nhóm lỗi đang mất điểm.",
    weeks: [
      d("10/05 – 17/05", "Tuần chữa lỗi", ["Kiểm tra xác định điểm yếu", "Các thì và chia động từ", "Phát âm, trọng âm, -s/-ed", "Từ vựng, word form, giới từ", "Giao tiếp và sắp xếp câu", "Điền đoạn văn", "Đọc hiểu", "So sánh, điều kiện, bị động"]),
      d("18/05 – 25/05", "Đề và nghỉ", ["Viết lại câu", "Nghe và sửa lỗi nghe", "Đề tổng hợp 60 phút", "Chữa từng lỗi", "Đề tổng hợp thứ hai", "Ôn lỗi lặp lại", "Ôn nhẹ theo dạng", "Ôn công thức và nghỉ ngơi"]),
    ],
  },
];
