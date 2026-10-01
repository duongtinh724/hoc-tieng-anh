interface TextListSectionProps {
  title: string;
  items: string[];
}

export function TextListSection({ title, items }: TextListSectionProps) {
  return (
    <>
      <h3>{title}</h3>
      <ul className="list">
        {items.map((item, index) => (
          <li key={`${index}-${item.slice(0, 24)}`}>{item}</li>
        ))}
      </ul>
    </>
  );
}
