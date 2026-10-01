interface TextListSectionProps {
  items: string[];
  numbered?: boolean;
}

export function TextListSection({ items, numbered = false }: TextListSectionProps) {
  return (
    <ul className={`content-list text-list${numbered ? " text-list--numbered" : ""}`}>
      {items.map((item, index) => (
        <li key={`${index}-${item.slice(0, 24)}`}>
          {numbered && <span className="item-index">{index + 1}</span>}
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
