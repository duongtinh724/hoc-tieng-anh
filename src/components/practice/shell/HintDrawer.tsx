import { CloseOutlined } from "@ant-design/icons";
import { Button, Card, Typography } from "antd";
import { getOxfordDictionaryUrl, isSingleEnglishWord } from "@/lib/dictionary";
import { speakEnglish } from "@/lib/speech";
import type { PracticeHints } from "@/types/practice";

interface HintDrawerProps {
  open: boolean;
  hints: PracticeHints;
  onClose: () => void;
}

export function HintDrawer({ open, hints, onClose }: HintDrawerProps) {
  if (!open) return null;

  return (
    <aside className="practice-hint-drawer" aria-label="Gợi ý">
      <div className="practice-hint-header">
        <Typography.Title level={5} style={{ margin: 0 }}>
          Gợi ý
        </Typography.Title>
        <Button type="text" icon={<CloseOutlined />} onClick={onClose} aria-label="Đóng" />
      </div>

      {hints.grammarNotes && hints.grammarNotes.length > 0 ? (
        <Card size="small" title="Ngữ pháp" className="practice-hint-card">
          <ul className="practice-hint-list">
            {hints.grammarNotes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </Card>
      ) : null}

      {hints.rules && hints.rules.length > 0 ? (
        <Card size="small" title="Quy tắc" className="practice-hint-card">
          <ol className="practice-hint-list">
            {hints.rules.map((rule) => (
              <li key={rule.text}>
                <strong>{rule.text}</strong>
                <Typography.Paragraph type="secondary" style={{ marginBottom: 0 }}>
                  Ví dụ: {rule.example}
                  {rule.exampleVi ? ` — ${rule.exampleVi}` : ""}
                </Typography.Paragraph>
              </li>
            ))}
          </ol>
        </Card>
      ) : null}

      {hints.vocabulary && hints.vocabulary.length > 0 ? (
        <Card size="small" title="Từ vựng" className="practice-hint-card">
          <ul className="practice-hint-vocab">
            {hints.vocabulary.map((word) => {
              const dictionaryWord = word.en.replace(/\s*\([^)]*\)\s*/g, " ").trim();
              const href = isSingleEnglishWord(dictionaryWord)
                ? getOxfordDictionaryUrl(dictionaryWord)
                : `https://www.oxfordlearnersdictionaries.com/search/english/?q=${encodeURIComponent(dictionaryWord)}`;

              return (
                <li key={word.en} className="practice-hint-vocab-item">
                  <button
                    type="button"
                    className="speak-btn speak-btn--compact"
                    onClick={() => speakEnglish(dictionaryWord)}
                    aria-label={`Nghe từ ${dictionaryWord}`}
                  >
                    🔊
                  </button>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="practice-hint-vocab-link"
                    title="Tra Oxford Learner's Dictionary (mở tab mới)"
                  >
                    {word.en}
                  </a>
                </li>
              );
            })}
          </ul>
        </Card>
      ) : null}
    </aside>
  );
}
