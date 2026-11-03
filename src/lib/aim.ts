const ABBREVIATIONS = new Set(["Poss", "Mr", "Mrs", "Ms", "Dr", "vs"]);

function hasVietnamese(text: string): boolean {
  return /[àáảãạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵđ]/i.test(
    text,
  );
}

function isEnglishExample(text: string): boolean {
  const trimmed = text.trim();
  if (!trimmed || hasVietnamese(trimmed)) return false;
  return /^[A-Za-z]/.test(trimmed);
}

function endsWithAbbreviation(text: string): boolean {
  const match = text.match(/([A-Za-z]+)\.$/);
  return Boolean(match && ABBREVIATIONS.has(match[1]));
}

function splitSentences(text: string): string[] {
  const tokens = text
    .split(/(?<=\.)\s+/)
    .map((part) => part.trim())
    .filter(Boolean);

  const lines: string[] = [];
  let current = "";

  for (const token of tokens) {
    if (!current) {
      current = token;
      continue;
    }

    if (
      endsWithAbbreviation(current) ||
      isEnglishExample(token) ||
      /^ví dụ/i.test(token) ||
      /^\d+\s*phút\.?$/i.test(token)
    ) {
      current = `${current} ${token}`;
      continue;
    }

    lines.push(current);
    current = token;
  }

  if (current) lines.push(current);
  return lines;
}

export function splitAim(aim: string): string[] {
  return aim
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean)
    .flatMap(splitSentences);
}
