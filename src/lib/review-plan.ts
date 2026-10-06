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
    aim: "Làm được 20 ý cơ bản trong 25 phút, không mở vở.",
    format: "A. Đại từ & S+V (8) · B. S+V+O (6) · C. Viết 6 câu",
    target: "Đạt ≥ 12/20 ý",
    ifFail: "Dưới 10/20: học lại ngày 3 (động từ) và ngày 5 (S+V) trước khi sang tuần 2.",
    topics: [
      "Đại từ I/You/He/She/It/We/They",
      "Danh từ, động từ, tính từ",
      "Cấu trúc S + V",
      "Cấu trúc S + V + O",
    ],
    prepChecklist: [
      "Che vở, nói lại 6 đại từ",
      "Nhẩm 5 câu: I study English. / We like music.",
      "Tự viết 2 câu S+V+O về mình",
    ],
  },
  {
    day: 14,
    week: 2,
    title: "Kiểm tra: To be",
    coversDays: "Ngày 8–13",
    aim: "Làm bài to be trong 25 phút, không mở vở.",
    format: "Điền am/is/are · phủ định · câu hỏi · viết 4 câu giới thiệu",
    target: "Đạt ≥ 12/16 ý",
    ifFail: "Dưới 8/16: học lại ngày 8 và ngày 12, chưa sang tuần 3.",
    topics: [
      "am / is / are",
      "I am / You are / He is / They are",
      "Phủ định not, isn't, aren't",
      "Câu hỏi Am/Is/Are",
    ],
    prepChecklist: [
      "Nhẩm bảng: I am, You are, He is, We are, They are",
      "Tự viết 3 câu phủ định và 3 câu hỏi",
      "Đọc to: I am a student. She is not tired.",
    ],
  },
  {
    day: 21,
    week: 3,
    title: "Kiểm tra tuần 3",
    coversDays: "Ngày 15–20",
    aim: "Làm 15 ý trong 25 phút.",
    format: "Số ít/nhiều · a/an/the · this/that/these/those · some/any",
    target: "Đạt ≥ 11/15 ý",
    ifFail: "Dưới 8/15: làm lại ngày 15 và ngày 17.",
    topics: [
      "Singular / Plural",
      "a / an / the",
      "some / any",
      "this / that / these / those",
    ],
    prepChecklist: [
      "Làm nhanh 5 câu: an apple, the book, these pens",
      "Viết 2 câu: This is… / Those are…",
      "Ôn man/men, child/children",
    ],
  },
  {
    day: 30,
    week: 4,
    title: "Bài kiểm tra 30 ngày",
    coversDays: "Cả tháng 1",
    aim: "Làm bài 20 điểm trong 30 phút.",
    format: "A. Trắc nghiệm 10 điểm · B. Viết 5 câu · C. Đọc hiểu 3 điểm · D. Sửa lỗi 2 điểm",
    target: "≥ 12/20 → đạt, sang Tháng 2 · ≥ 15/20 → nền tốt",
    ifFail: "Dưới 12/20: ôn câu sai, học lại ngày 8, 16, 22. Chưa sang tháng 2.",
    topics: [
      "To be, a/an/the, this/that/these/those",
      "Câu hỏi What/Where/Who/How",
      "S+V, S+V+O cơ bản",
    ],
    prepChecklist: [
      "Ôn recall ngày 22–27 (Wh- questions)",
      "Tự làm ngày 29 (30 câu) trước khi thi",
      "Ngủ đủ — ngày 30 không mở vở khi làm bài",
    ],
  },
];

export const PREP_REVIEWS: PrepReview[] = [
  {
    beforeDay: 7,
    label: "Tối ngày 6 — chuẩn bị kiểm tra tuần 1",
    tasks: [
      "Che vở, nói lại 6 đại từ",
      "Nhẩm 5 câu S+V và S+V+O",
    ],
  },
  {
    beforeDay: 14,
    label: "Tối ngày 13 — chuẩn bị kiểm tra tuần 2",
    tasks: [
      "Nhẩm am/is/are cho I, he, they",
      "Viết 4 câu: khẳng định, phủ định, hỏi, trả lời",
    ],
  },
  {
    beforeDay: 21,
    label: "Tối ngày 20 — chuẩn bị kiểm tra tuần 3",
    tasks: [
      "Làm nhanh a/an/the",
      "Viết 2 câu this/that/these/those",
    ],
  },
  {
    beforeDay: 30,
    label: "Tối ngày 29 — chuẩn bị kiểm tra tổng",
    tasks: [
      "Làm xong bài 30 câu ngày 29",
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
