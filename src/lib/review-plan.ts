export interface ReviewMilestone {
  day: number;
  week: number;
  title: string;
  coversDays: string;
  aim: string;
  format: string;
  target: string;
  ifFail: string;
  topics: string[];
  prepChecklist: string[];
}

export interface PrepReview {
  beforeDay: number;
  label: string;
  tasks: string[];
}

export const REVIEW_MILESTONES: ReviewMilestone[] = [
  {
    day: 7,
    week: 1,
    title: "Kiểm tra tuần 1",
    coversDays: "Ngày 1–6",
    aim: "Làm được 16 ý trong 25 phút, không mở vở.",
    format: "A. Điền am/is/are (6 câu) · B. Điền a/an (6 câu) · C. Viết 4 câu về mình",
    target: "Đạt ≥ 12/16 ý",
    ifFail: "Dưới 8/16: học lại ngày 3 (am/is/are) và ngày 5 (a/an) trước khi sang tuần 2.",
    topics: [
      "Chào hỏi & tên",
      "Số 0–20 & tuổi",
      "am / is / are",
      "This / That",
      "a / an",
      "Màu & từ sở hữu",
    ],
    prepChecklist: [
      "Che vở, nói lại bảng I am / You are / He is…",
      "Nhẩm 5 câu: an apple, a book, My bag is black",
      "Tự viết 2 câu: I am … / My name is …",
    ],
  },
  {
    day: 14,
    week: 2,
    title: "Kiểm tra: Một ngày của tôi",
    coversDays: "Ngày 8–13",
    aim: "Viết 8 câu về một ngày thật, không nhìn bài cũ.",
    format: "Viết 8 câu — mỗi câu một mảnh: tên, tuổi, have, like, get up, go, evening, don't",
    target: "Đạt ≥ 6/8 câu đúng cấu trúc",
    ifFail: "Dưới 4/8: viết lại bài ngày hôm sau, chưa sang tuần 3.",
    topics: [
      "Gia đình",
      "have / has",
      "like / likes",
      "Một ngày của tôi",
      "Giờ & buổi",
      "Phủ định don't",
    ],
    prepChecklist: [
      "Tự viết thử 4 câu về một ngày (không nhìn vở)",
      "Nhẩm: I get up at… / I go to school / I don't…",
      "Đọc to 6 câu nghe của ngày 14 một vòng",
    ],
  },
  {
    day: 21,
    week: 3,
    title: "Kiểm tra tuần 3",
    coversDays: "Ngày 15–20",
    aim: "Làm 15 ý trong 25 phút.",
    format: "10 câu điền (have/has, -s, Do/Does, there is/are, giới từ) + 5 câu viết",
    target: "Đạt ≥ 11/15 ý",
    ifFail: "Dưới 8/15: làm lại ngày 15 và ngày 16.",
    topics: [
      "He/She + -s",
      "Do / Does",
      "Wh- questions",
      "Nơi chốn",
      "There is / There are",
      "Giới từ on, in, at",
    ],
    prepChecklist: [
      "Làm nhanh 5 câu: She has… / He goes… / Do you…?",
      "Viết 2 câu: There is… / The book is on…",
      "Khoanh chỗ sai trong 3 câu mẫu (tập chữa bài)",
    ],
  },
  {
    day: 30,
    week: 4,
    title: "Bài kiểm tra 30 ngày",
    coversDays: "Cả tháng 1",
    aim: "Làm bài 20 điểm trong 30 phút.",
    format: "A. Trắc nghiệm 10 điểm · B. Viết 5 câu · C. Đọc hiểu 2 điểm · D. Chia dạng từ 3 điểm",
    target: "≥ 12/20 → đạt, sang Tháng 2 · ≥ 15/20 → nền tốt",
    ifFail: "Dưới 12/20: ôn câu sai, học lại ngày 15, 16, 19. Chưa học quá khứ đơn.",
    topics: [
      "Tổng hợp am/is, a/an, have/has",
      "Hiện tại đơn -s, Do/Does, don't",
      "There is/are, giới từ, can/can't",
      "Đọc hiểu & dạng từ",
    ],
    prepChecklist: [
      "Ôn «Ba phút cuối» ngày 1, 9, 15, 22",
      "Tự làm 5 câu trắc nghiệm tổng hợp",
      "Đọc lại đoạn văn ngày 27 (chuẩn bị phần C)",
      "Ngủ đủ — ngày 30 không mở vở khi làm bài",
    ],
  },
];

export const PREP_REVIEWS: PrepReview[] = [
  {
    beforeDay: 7,
    label: "Tối ngày 6 — chuẩn bị kiểm tra tuần 1",
    tasks: [
      "Che vở, nói lại quy tắc ngày 3 & 5",
      "Nhẩm 6 câu am/is/are và a/an",
    ],
  },
  {
    beforeDay: 14,
    label: "Tối ngày 13 — chuẩn bị kiểm tra tuần 2",
    tasks: [
      "Tự viết 4 câu về một ngày (thử trước)",
      "Nhẩm have/has và like/likes",
    ],
  },
  {
    beforeDay: 21,
    label: "Tối ngày 20 — chuẩn bị kiểm tra tuần 3",
    tasks: [
      "Làm nhanh 5 câu have/has, Do/Does",
      "Viết 2 câu there is/are + giới từ",
    ],
  },
  {
    beforeDay: 30,
    label: "Tối ngày 29 — chuẩn bị kiểm tra tổng",
    tasks: [
      "Ôn recall ngày 1, 9, 15, 22",
      "Không học thêm từ mới — nghỉ ngơi",
    ],
  },
];

export const DAILY_REVIEW_LAYERS = [
  {
    title: "Ôn mỗi ngày",
    time: "Phút 27–30",
    detail: "Che vở, nhắc lại từ & câu — ôn tức thì cuối mỗi buổi học.",
  },
  {
    title: "Ôn theo tuần",
    time: "Ngày 7, 14, 21",
    detail: "Không học từ mới. Cả 30 phút dùng để kiểm tra & củng cố tuần vừa học.",
  },
  {
    title: "Kiểm tra cuối tháng",
    time: "Ngày 30",
    detail: "Bài thi tổng 20 điểm. ≥ 12 điểm mới sang Tháng 2.",
  },
];
