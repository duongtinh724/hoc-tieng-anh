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
    aim: "Làm bài đại từ và to be, không mở vở.",
    format: "Đại từ · am/is/are · khẳng định · phủ định · câu hỏi · giới thiệu bản thân",
    target: "Đạt từ 6/10",
    ifFail: "Dưới 5/10: học lại ngày 2 và ngày 5 trước khi sang tuần 2.",
    topics: [
      "I, you, he, she, it, we, they",
      "am / is / are",
      "Câu khẳng định và phủ định với to be",
      "Câu hỏi Yes/No và câu trả lời ngắn",
    ],
    prepChecklist: [
      "Nhẩm: I am, You are, He is, We are, They are",
      "Viết 2 câu phủ định và 2 câu hỏi",
      "Giới thiệu: I am Nam. I am a student.",
    ],
  },
  {
    day: 14,
    week: 2,
    title: "Kiểm tra tuần 2",
    coversDays: "Ngày 8–13",
    aim: "Làm bài danh từ và mạo từ, không mở vở.",
    format: "Danh từ · số ít/nhiều · a/an/the · this/that/these/those",
    target: "Đạt từ 6/10",
    ifFail: "Dưới 5/10: học lại ngày 10 và ngày 12 trước khi sang tuần 3.",
    topics: [
      "Danh từ người, vật, nơi",
      "Số ít và số nhiều",
      "a / an / the",
      "this, that, these, those",
    ],
    prepChecklist: [
      "Viết 4 cặp số ít/số nhiều",
      "Chọn a hoặc an cho 5 từ",
      "Viết 2 câu: This is… / Those are…",
    ],
  },
  {
    day: 21,
    week: 3,
    title: "Kiểm tra tuần 3",
    coversDays: "Ngày 15–20",
    aim: "Làm bài cấu trúc câu, không mở vở.",
    format: "S+V · S+V+O · have/has · there is/are · tính từ",
    target: "Đạt từ 6/10",
    ifFail: "Dưới 5/10: học lại ngày 16 và ngày 18.",
    topics: [
      "Chủ ngữ + động từ",
      "Chủ ngữ + động từ + tân ngữ",
      "have / has",
      "There is / There are",
    ],
    prepChecklist: [
      "Viết 2 câu S+V và 2 câu S+V+O",
      "Điền have hoặc has cho I, he, they",
      "Viết 1 câu There is và 1 câu There are",
    ],
  },
  {
    day: 28,
    week: 4,
    title: "Kiểm tra nền tảng",
    coversDays: "Ngày 1–27",
    aim: "Kiểm tra tổng hợp 4 tuần đầu, không mở vở.",
    format: "To be · mạo từ · câu cơ bản · What/Where/Who · giới từ",
    target: "Đạt từ 6/10",
    ifFail: "Dưới 5/10: ôn ngày 5, 12, 22 trước khi sang hiện tại đơn.",
    topics: [
      "To be và câu hỏi Yes/No",
      "a/an/the, this/that/these/those",
      "S+V, S+V+O, have/has, there is/are",
      "What, who, where, when, why, how",
      "Giới từ nơi chốn và thời gian",
    ],
    prepChecklist: [
      "Nhẩm 4 câu hỏi Wh- với to be",
      "Viết 2 câu có in/on/at",
      "Đọc lại câu sai của tuần 4",
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
    beforeDay: 28,
    label: "Tối ngày 27 — chuẩn bị kiểm tra nền tảng",
    tasks: [
      "Đọc lại đoạn ngày 27 và trả lời không nhìn",
      "Không học thêm từ mới — nghỉ ngơi",
    ],
  },
];

export const DAILY_REVIEW_LAYERS = [
  {
    title: "Ôn mỗi ngày",
    time: "Phút 50–60",
    detail: "Che vở, nhắc lại từ và câu sai cuối mỗi buổi.",
  },
  {
    title: "Ôn theo tuần",
    time: "Ngày 7, 14, 21, 28",
    detail: "Chủ nhật không học kiến thức mới. Dùng buổi để kiểm tra và sửa lỗi.",
  },
  {
    title: "Sau ngày 28",
    time: "Ngày 29–30",
    detail: "Bắt đầu hiện tại đơn. Sang tháng 2 khi tuần 4 đạt từ 6/10.",
  },
];
