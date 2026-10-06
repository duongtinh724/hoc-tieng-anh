const OXFORD_BASE =
  "https://www.oxfordlearnersdictionaries.com/definition/english";

/** Một từ đơn (book, isn't) — không mở từ điển cho cụm như "every day" hay "subject (S)". */
export function isSingleEnglishWord(text: string): boolean {
  return /^[a-zA-Z]+(?:[-'][a-zA-Z]+)*$/.test(text.trim());
}

export function getOxfordDictionaryUrl(word: string): string {
  const trimmed = word.trim();
  const slug = trimmed.toLowerCase();
  return `${OXFORD_BASE}/${encodeURIComponent(slug)}?q=${encodeURIComponent(trimmed)}`;
}
