import type { WordPair } from "@/types/lesson";
import { getOxfordDictionaryUrl, isSingleEnglishWord } from "@/lib/dictionary";
import { speakEnglish } from "@/lib/speech";

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
          {words.map((word) => {
            const canOpenDictionary = isSingleEnglishWord(word.en);

            return (
              <tr key={word.en}>
                <td className="en">
                  <div className="vocab-en-row">
                    <button
                      type="button"
                      className="speak-btn speak-btn--compact"
                      onClick={() => speakEnglish(word.en)}
                      aria-label={`Nghe từ ${word.en}`}
                    >
                      🔊
                    </button>
                    {canOpenDictionary ? (
                      <a
                        href={getOxfordDictionaryUrl(word.en)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="vocab-dict-link"
                        title="Tra Oxford Learner's Dictionary (mở tab mới)"
                      >
                        {word.en}
                      </a>
                    ) : (
                      <span className="vocab-word-text">{word.en}</span>
                    )}
                  </div>
                </td>
                <td className="vi">{word.vi}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
