export interface AlphabetEntry {
  letter: string;
  ipa: string;
  vi: string;
}

/** IPA quốc tế + cách đọc theo phiên âm tiếng Việt (trong ngoặc) */
export const ALPHABET_ENTRIES: AlphabetEntry[] = [
  { letter: "A", ipa: "/eɪ/", vi: "ây" },
  { letter: "B", ipa: "/biː/", vi: "bi" },
  { letter: "C", ipa: "/siː/", vi: "xi" },
  { letter: "D", ipa: "/diː/", vi: "đi" },
  { letter: "E", ipa: "/iː/", vi: "i" },
  { letter: "F", ipa: "/ɛf/", vi: "ép" },
  { letter: "G", ipa: "/dʒiː/", vi: "ji" },
  { letter: "H", ipa: "/eɪtʃ/", vi: "ếch" },
  { letter: "I", ipa: "/aɪ/", vi: "ai" },
  { letter: "J", ipa: "/dʒeɪ/", vi: "jây" },
  { letter: "K", ipa: "/keɪ/", vi: "khây" },
  { letter: "L", ipa: "/ɛl/", vi: "eo" },
  { letter: "M", ipa: "/ɛm/", vi: "em" },
  { letter: "N", ipa: "/ɛn/", vi: "en" },
  { letter: "O", ipa: "/oʊ/", vi: "âu" },
  { letter: "P", ipa: "/piː/", vi: "pi" },
  { letter: "Q", ipa: "/kjuː/", vi: "khiu" },
  { letter: "R", ipa: "/ɑːr/", vi: "a" },
  { letter: "S", ipa: "/ɛs/", vi: "ét" },
  { letter: "T", ipa: "/tiː/", vi: "ti" },
  { letter: "U", ipa: "/juː/", vi: "du" },
  { letter: "V", ipa: "/viː/", vi: "vi" },
  { letter: "W", ipa: "/ˈdʌbəl.juː/", vi: "đấp-b-liu" },
  { letter: "X", ipa: "/ɛks/", vi: "ẹt-sờ" },
  { letter: "Y", ipa: "/waɪ/", vi: "quoai" },
  { letter: "Z", ipa: "/zed/ · /ziː/", vi: "dét" },
];
