import type { WordPair } from "@/types/lesson";

interface WordsListProps {
  words: WordPair[];
}

export function WordsList({ words }: WordsListProps) {
  return (
    <>
      <h3>Từ — chép nghĩa</h3>
      <ul className="list">
        {words.map((word) => (
          <li key={word.en}>
            <span className="en">{word.en}</span>{" "}
            <span className="vi">— {word.vi}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
