import type { RuleItem } from "@/types/lesson";
import { splitRuleSegments } from "@/lib/format-rule";

export const DAY_RULES: Record<number, RuleItem[]> = {
  1: [
    { text: "Present Simple = thói quen, sự thật, lịch trình.", example: "I study every day." },
    { text: "Dấu hiệu: every day, always, usually, sometimes.", example: "She usually reads books." },
  ],
  2: [
    { text: "I / You / We / They + V (nguyên mẫu).", example: "I study. They play." },
    { text: "Không thêm -s với 4 đại từ này.", example: "We live in Bắc Ninh." },
  ],
  3: [
    { text: "He / She / It + V-s.", example: "He goes. She studies." },
    { text: "Quy tắc -es: watch → watches, go → goes.", example: "She watches TV." },
    { text: "study → studies (-y đổi thành -ies).", example: "He studies English." },
  ],
  4: [
    { text: "Do + I/you/we/they + V.", example: "Do you study?" },
    { text: "Does + he/she/it + V (V không -s).", example: "Does she like music?" },
  ],
  5: [
    { text: "I/You/We/They + don't + V.", example: "I don't like coffee." },
    { text: "He/She/It + doesn't + V.", example: "She doesn't play games." },
  ],
  6: [
    { text: "Wh- + do/does + S + V?", example: "What do you study?" },
    { text: "Where does she live?", example: "She lives in Bắc Ninh." },
  ],
  7: [
    { text: "Kiểm tra Present Simple — không mở vở.", example: "≥ 14/20 ý để sang tuần 2." },
    { text: "Sai nhiều → ôn ngày 3, 4, 5.", example: "Chép lại câu đúng 2 lần." },
  ],
  8: [
    { text: "Present Continuous = am/is/are + V-ing.", example: "I am studying now." },
    { text: "Dùng khi đang làm NGAY BÂY GIỜ.", example: "She is reading at the moment." },
  ],
  9: [
    { text: "I am + V-ing.", example: "I am doing my homework." },
    { text: "V-ing: write → writing, run → running.", example: "I am writing in my notebook." },
  ],
  10: [
    { text: "He / She / It + is + V-ing.", example: "He is studying." },
    { text: "She is cooking dinner.", example: "Cô ấy đang nấu bữa tối." },
  ],
  11: [
    { text: "You / We / They + are + V-ing.", example: "They are playing games." },
    { text: "We are learning English.", example: "Chúng tôi đang học tiếng Anh." },
  ],
  12: [
    { text: "Phủ định: am not / isn't / aren't + V-ing.", example: "She isn't studying." },
    { text: "They aren't playing.", example: "Họ không đang chơi." },
  ],
  13: [
    { text: "Am/Is/Are + S + V-ing?", example: "Are you studying?" },
    { text: "What is she doing?", example: "She is cooking." },
  ],
  14: [
    { text: "PS = thói quen (every day). PC = now.", example: "I study every day. / I am studying now." },
    { text: "Kiểm tra — ≥ 14/20 ý.", example: "Sai nhiều → ôn ngày 8, 12, 13." },
  ],
  15: [
    { text: "Past Simple = việc đã xong trong quá khứ.", example: "I studied yesterday." },
    { text: "Dấu hiệu: yesterday, last week, ago.", example: "She went to school last week." },
  ],
  16: [
    { text: "Regular verbs: thêm -ed.", example: "play → played, study → studied" },
    { text: "live → lived, stop → stopped.", example: "I visited my friend." },
  ],
  17: [
    { text: "Irregular verbs — học thuộc.", example: "go → went, eat → ate, see → saw" },
    { text: "come → came, get → got, have → had, do → did.", example: "I went to school." },
  ],
  18: [
    { text: "I/He/She/It → was.", example: "I was tired." },
    { text: "You/We/They → were.", example: "They were happy." },
  ],
  19: [
    { text: "Did + S + V (nguyên mẫu)? — mọi chủ ngữ.", example: "Did you study?" },
    { text: "Trả lời: Yes, I did. / No, I didn't.", example: "Did she go? — Yes, she did." },
  ],
  20: [
    { text: "S + didn't + V (nguyên mẫu).", example: "I didn't study." },
    { text: "She didn't go to school.", example: "Cô ấy không đi học." },
  ],
  21: [
    { text: "Kiểm tra Past Simple — không mở vở.", example: "≥ 14/20 ý sang tuần 4." },
    { text: "Sai nhiều → ôn ngày 16, 17, 18.", example: "Chép lại câu đúng 2 lần." },
  ],
  22: [
    { text: "Will + V = tương lai.", example: "I will study tomorrow." },
    { text: "Quyết định lúc nói hoặc dự đoán.", example: "It will rain." },
  ],
  23: [
    { text: "Won't = will not.", example: "I won't go." },
    { text: "S + won't + V.", example: "She won't study tonight." },
  ],
  24: [
    { text: "Will + S + V?", example: "Will you study?" },
    { text: "What will you do?", example: "I will study English." },
  ],
  25: [
    { text: "Be going to + V = kế hoạch đã định.", example: "I am going to study tonight." },
    { text: "She is going to visit her friend.", example: "Cô ấy sắp thăm bạn." },
  ],
  26: [
    { text: "Will = quyết định/dự đoán.", example: "I'll help you!" },
    { text: "Going to = kế hoạch đã có.", example: "I am going to study tonight." },
  ],
  27: [
    { text: "PC + thời gian tương lai = kế hoạch cố định.", example: "I am meeting Tom tomorrow." },
    { text: "She is leaving next week.", example: "Cô ấy sẽ đi tuần sau." },
  ],
  28: [
    { text: "Ôn 4 cách tương lai: will, won't, going to, PC.", example: "≥ 16/20 ý trước ngày 29–30." },
  ],
  29: [
    { text: "30 câu tổng hợp tháng 2.", example: "≥ 24/30 trước ngày 30." },
    { text: "PS · PC · Past · Future.", example: "Làm chậm, đúng cấu trúc." },
  ],
  30: [
    { text: "Không mở vở.", example: "Gấp vở trước khi làm bài kiểm tra." },
    { text: "Chỉ kiến thức tháng 2.", example: "≥ 12/20 sang tháng 3." },
    { text: "Dưới 12: ôn ngày 3, 8, 16, 22.", example: "Chữa bài 10 phút sáng hôm sau." },
  ],
};

export function getRulesForDay(day: number, fallbackRule: string): RuleItem[] {
  const rules = DAY_RULES[day];
  if (rules) return rules;

  return splitRuleSegments(fallbackRule).map((text) => ({
    text,
    example: "—",
  }));
}
