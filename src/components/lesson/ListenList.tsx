import type { ListenItem } from "@/types/lesson";
import { speakEnglish } from "@/lib/speech";

interface ListenListProps {
  items: ListenItem[];
}

export function ListenList({ items }: ListenListProps) {
  return (
    <>
      <h3>Sáu câu nghe, phút 0–8</h3>
      <ul className="list">
        {items.map((item, index) => (
          <li key={`${index}-${item.en}`} className="listen-item">
            <span>
              <strong>{index + 1}.</strong>{" "}
              <span className="en">{item.en}</span>{" "}
              <span className="vi">— {item.vi}</span>
            </span>
            <button
              type="button"
              className="speak-btn"
              onClick={() => speakEnglish(item.en)}
            >
              Nghe
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
