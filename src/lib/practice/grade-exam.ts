import type { ExamExerciseConfig, ExamQuestion, ScreenState } from "@/types/practice";

export interface ExamQuestionResult {
  id: string;
  number: number;
  kind: ExamQuestion["kind"];
  prompt: string;
  source?: string;
  topic: string;
  userAnswer: string;
  correctAnswer: string;
  explanation: string;
  status: "correct" | "incorrect" | "unanswered";
  earned: number;
  max: number;
}

export interface ExamWritingBreakdown {
  info: number;
  toBe: number;
  articles: number;
  structure: number;
  length: number;
  notes: string[];
  rubric?: "intro" | "family";
}

export interface ExamSectionScore {
  id: string;
  title: string;
  earned: number;
  max: number;
}

export interface ExamGrade {
  total: number;
  maxScore: number;
  passed: boolean;
  correctCount: number;
  incorrectCount: number;
  unansweredCount: number;
  sections: ExamSectionScore[];
  questions: ExamQuestionResult[];
  writing?: ExamWritingBreakdown;
  weakTopics: string[];
}

export function countWords(text: string): number {
  const trimmed = text.trim();
  if (!trimmed) return 0;
  return trimmed.split(/\s+/).length;
}

export function normalizeExamText(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/[.!?,;:'"]/g, "")
    .replace(/\s+/g, " ");
}

function optionLabel(question: ExamQuestion, optionId: string): string {
  const option = question.options?.find((item) => item.id === optionId);
  if (!option) return optionId;
  return `${optionId} – ${option.label}`;
}

function acceptedList(raw: string | string[] | undefined): string[] {
  if (!raw) return [];
  return Array.isArray(raw) ? raw : [raw];
}

function matchesAccepted(value: string, accepted: string[]): boolean {
  const normalized = normalizeExamText(value);
  return accepted.some((item) => normalizeExamText(item) === normalized);
}

function roundScore(value: number): number {
  return Math.round(value * 100) / 100;
}

/** Month 01 Week 3 — family / school / house (max 2.0). */
function gradeFamilyWriting(text: string): { earned: number; breakdown: ExamWritingBreakdown } {
  const notes: string[] = [];
  const lower = text.toLowerCase();
  const words = countWords(text);
  const sentences = text
    .split(/[.!?]+/)
    .map((item) => item.trim())
    .filter(Boolean).length;

  let info = 0.5;
  const topicHits = [
    /family|father|mother|sister|brother|parents/.test(lower),
    /school|study|class|teacher|student/.test(lower),
    /house|home|room|bedroom/.test(lower),
  ].filter(Boolean).length;
  if (sentences < 4) {
    info = sentences >= 2 ? 0.25 : 0;
    notes.push("Nên viết 4–5 câu về gia đình, trường và nhà.");
  } else if (topicHits < 2) {
    info = 0.35;
    notes.push("Thêm ý về gia đình, trường học hoặc ngôi nhà.");
  }

  const beErrors = [
    /\bi is\b/,
    /\bi are\b/,
    /\bthey is\b/,
    /\bwe is\b/,
    /\bshe are\b/,
    /\bhe are\b/,
  ].filter((pattern) => pattern.test(lower)).length;
  let toBe = 0.5;
  if (beErrors > 0) {
    toBe = Math.max(0, 0.5 - beErrors * 0.15);
    notes.push("Kiểm tra chủ ngữ và động từ (I am, she is, they are…).");
  }

  let articles = 0.5;
  const grammarHits = [
    /\bhave\b|\bhas\b/.test(lower),
    /\bthere is\b|\bthere are\b/.test(lower),
    /\bmy\b|\bhis\b|\bher\b|\bour\b|\btheir\b/.test(lower),
  ].filter(Boolean).length;
  if (grammarHits < 2) {
    articles = grammarHits === 1 ? 0.25 : 0;
    notes.push("Dùng have/has, there is/there are hoặc tính từ sở hữu (my, his…).");
  }

  let structure = 0.5;
  if (words < 12) {
    structure = 0.2;
    notes.push("Câu còn quá ngắn — thêm vài từ cho rõ nghĩa.");
  } else if (sentences < 3) {
    structure = 0.3;
  }

  const earned = roundScore(info + toBe + articles + structure);
  return {
    earned,
    breakdown: {
      info,
      toBe,
      articles,
      structure,
      length: 0,
      notes,
      rubric: "family",
    },
  };
}

function gradeWriting(text: string): { earned: number; breakdown: ExamWritingBreakdown } {
  const notes: string[] = [];
  const lower = text.toLowerCase();
  const words = countWords(text);

  const checks = [
    { ok: /my name is\b/.test(lower), label: "tên (My name is)" },
    { ok: /years old|\bi am \d+/.test(lower), label: "tuổi" },
    { ok: /\bi am from\b|\bi'm from\b/.test(lower), label: "quê (I am from)" },
    { ok: /\bi live in\b/.test(lower), label: "nơi ở (I live in)" },
    { ok: /family|father|mother|brother|sister|parents/.test(lower), label: "gia đình" },
    { ok: /hobby/.test(lower), label: "sở thích (hobby)" },
  ];
  const infoHits = checks.filter((item) => item.ok).length;
  const info = roundScore((infoHits / checks.length) * 0.25);
  checks.filter((item) => !item.ok).forEach((item) => notes.push(`Thiếu: ${item.label}.`));

  const beErrors = [
    /\bi is\b/,
    /\bi are\b/,
    /\bshe are\b/,
    /\bhe are\b/,
    /\bthey is\b/,
    /\bwe is\b/,
    /\byou is\b/,
    /\bit are\b/,
    /\bdon't am\b/,
    /\bdon't is\b/,
    /\bdon't are\b/,
  ].filter((pattern) => pattern.test(lower)).length;
  const hasIAm = /\bi am\b|\bi'm\b/.test(lower);
  let toBe = 0.25;
  if (!hasIAm) {
    toBe -= 0.1;
    notes.push("Nên dùng I am / I'm.");
  }
  if (beErrors > 0) {
    toBe -= Math.min(0.25, beErrors * 0.08);
    notes.push("Có chỗ am / is / are chưa khớp với chủ ngữ.");
  }
  toBe = roundScore(Math.max(0, toBe));

  let articles = 0.2;
  if (/\bi am (student|teacher|doctor|engineer)\b/.test(lower)) {
    articles -= 0.1;
    notes.push("Danh từ nghề/người số ít cần a / an: I am a student.");
  }
  if (/\ba engineer\b|\ba apple\b|\ba hour\b|\ban university\b/.test(lower)) {
    articles -= 0.1;
    notes.push("a / an nhìn theo âm đầu, không chỉ chữ cái.");
  }
  if (!/\ba |\ban |\bthe /.test(` ${lower} `) && words >= 20) {
    articles -= 0.05;
  }
  articles = roundScore(Math.max(0, articles));

  const sentences = text
    .split(/[.!?]+/)
    .map((item) => item.trim())
    .filter(Boolean).length;
  let structure = 0.2;
  if (sentences < 2) {
    structure = 0.06;
    notes.push("Nên viết thành nhiều câu ngắn, đủ chủ ngữ và to be.");
  } else if (sentences < 4) {
    structure = 0.12;
  }
  structure = roundScore(structure);

  let length = 0.1;
  if (words < 40 || words > 60) {
    length = words >= 30 && words <= 80 ? 0.05 : 0;
    notes.push(`Độ dài ${words} từ. Yêu cầu 40–60 từ.`);
  }

  const earned = roundScore(info + toBe + articles + structure + length);
  return {
    earned,
    breakdown: { info, toBe, articles, structure, length, notes, rubric: "intro" },
  };
}

function displayCorrectAnswer(question: ExamQuestion, raw: string | string[] | undefined): string {
  if (question.kind === "writing") {
    if (question.writingRubric === "family") {
      return "4–5 câu về gia đình, trường và nhà (have/has, there is/are, my…).";
    }
    return "Đoạn 40–60 từ: tên, tuổi, quê, nơi ở, gia đình, sở thích.";
  }
  if (question.options && typeof raw === "string") {
    return optionLabel(question, raw);
  }
  return acceptedList(raw).join(" / ");
}

export function gradeExam(config: ExamExerciseConfig, state: ScreenState): ExamGrade {
  let writing: ExamWritingBreakdown | undefined;
  const results: ExamQuestionResult[] = config.questions.map((question) => {
    const rawAnswer = (state.answers[question.id] ?? "").trim();
    const key = config.key.answers[question.id];
    const unanswered = rawAnswer.length === 0;
    let correct = false;
    let earned = 0;

    if (!unanswered) {
      if (question.kind === "writing") {
        const graded =
          question.writingRubric === "family"
            ? gradeFamilyWriting(rawAnswer)
            : gradeWriting(rawAnswer);
        writing = graded.breakdown;
        earned =
          question.writingRubric === "family"
            ? graded.earned
            : roundScore(graded.earned * question.points);
        correct = earned >= question.points * 0.6;
      } else if (question.options && typeof key === "string") {
        correct = rawAnswer === key;
        earned = correct ? question.points : 0;
      } else {
        correct = matchesAccepted(rawAnswer, acceptedList(key));
        earned = correct ? question.points : 0;
      }
    }

    const userAnswer =
      unanswered
        ? "—"
        : question.options
          ? optionLabel(question, rawAnswer)
          : rawAnswer;

    return {
      id: question.id,
      number: question.number,
      kind: question.kind,
      prompt: question.prompt,
      source: question.source,
      topic: question.topic,
      userAnswer,
      correctAnswer: displayCorrectAnswer(question, key),
      explanation: config.key.explanations[question.id] ?? "",
      status: unanswered ? "unanswered" : correct ? "correct" : "incorrect",
      earned: roundScore(earned),
      max: question.points,
    };
  });

  const sections = config.sections.map((section) => {
    const earned = results
      .filter((item) => section.questionIds.includes(item.id))
      .reduce((sum, item) => sum + item.earned, 0);
    return {
      id: section.id,
      title: section.title,
      earned: roundScore(earned),
      max: section.maxScore,
    };
  });

  const total = roundScore(results.reduce((sum, item) => sum + item.earned, 0));
  const weakTopics = [
    ...new Set(
      results
        .filter((item) => item.status !== "correct")
        .map((item) => item.topic),
    ),
  ];

  return {
    total,
    maxScore: config.maxScore,
    passed: total >= config.passScore,
    correctCount: results.filter((item) => item.status === "correct").length,
    incorrectCount: results.filter((item) => item.status === "incorrect").length,
    unansweredCount: results.filter((item) => item.status === "unanswered").length,
    sections,
    questions: results,
    writing,
    weakTopics,
  };
}

export function isExamAnswered(value: string | undefined): boolean {
  return Boolean(value && value.trim());
}
