import { splitRuleSegments } from "@/lib/format-rule";

interface RuleBoxProps {
  rule: string;
}

export function RuleBox({ rule }: RuleBoxProps) {
  const items = splitRuleSegments(rule);

  return (
    <div className="rule-box">
      <div className="rule-box-header">
        <span className="rule-box-icon" aria-hidden="true">
          🌿
        </span>
        <div>
          <strong>Quy tắc & công thức hôm nay</strong>
          <p>Ghi nhớ trước khi làm bài — đây là phần quan trọng nhất của ngày.</p>
        </div>
      </div>

      <ol className="rule-list">
        {items.map((item, index) => (
          <li key={item} className="rule-item">
            <span className="rule-num">{index + 1}</span>
            <p className="rule-item-text">{item}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
