import type { WordPair } from "@/types/lesson";

interface WordsListProps {
  words: WordPair[];
}

export function WordsList({ words }: WordsListProps) {
  return (
    <div className="vocab-table-wrap">
      <table className="vocab-table">
        <thead>
          <tr>
            <th>Tiếng Anh</th>
            <th>Nghĩa tiếng Việt</th>
          </tr>
        </thead>
        <tbody>
          {words.map((word) => (
            <tr key={word.en}>
              <td className="en">{word.en}</td>
              <td className="vi">{word.vi}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
