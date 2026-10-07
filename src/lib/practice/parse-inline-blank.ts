const BLANK_MARKER = "___";

export interface InlineBlankParts {
  before: string;
  after: string;
}

export function hasInlineBlank(label: string): boolean {
  return label.includes(BLANK_MARKER);
}

export function parseInlineBlank(label: string): InlineBlankParts | null {
  const index = label.indexOf(BLANK_MARKER);
  if (index === -1) return null;

  return {
    before: label.slice(0, index),
    after: label.slice(index + BLANK_MARKER.length),
  };
}
