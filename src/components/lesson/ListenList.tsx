import type { ListenItem } from "@/types/lesson";
import { speakEnglish } from "@/lib/speech";

interface ListenListProps {
  items: ListenItem[];
}

export function ListenList({ items }: ListenListProps) {
  return (
    <ul className="content-list listen-list">
      {items.map((item, index) => (
        <li key={`${index}-${item.en}`} className="listen-row">
          <span className="listen-index">{index + 1}</span>
          <div className="listen-content">
            <span className="en">{item.en}</span>
            <span className="vi">{item.vi}</span>
          </div>
          <button
            type="button"
            className="speak-btn"
            onClick={() => speakEnglish(item.en)}
            aria-label={`Nghe câu ${index + 1}`}
          >
            🔊 Nghe
          </button>
        </li>
      ))}
    </ul>
  );
}
