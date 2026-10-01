const FORMULA_PATTERN = /([^→]+→[^→.]+|\+ [^,.]+|\([^)]+\))/g;

export function splitRuleSegments(rule: string): string[] {
  return rule
    .split(/(?<=[.!?])\s+/)
    .map((segment) => segment.trim())
    .filter(Boolean);
}

export function extractFormulas(segment: string): string[] {
  const matches = segment.match(FORMULA_PATTERN);
  return matches ? [...new Set(matches.map((item) => item.trim()))] : [];
}

export function isFormulaSegment(segment: string): boolean {
  return /→|\+|\/.+\//.test(segment) || extractFormulas(segment).length > 0;
}
