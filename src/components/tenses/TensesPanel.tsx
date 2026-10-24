"use client";

import { useEffect, useMemo, useState } from "react";
import data from "@/data/tenses/twelve-tenses.json";

type Tense = (typeof data.tenses)[number];
type SpecificExercise = (typeof data.tense_specific_exercises)[number];
type MixedExercise = (typeof data.mixed_review.exercises)[number];

const STORAGE_KEY = "tieng-anh-tenses-visible";
const TYPE_LABEL: Record<string, string> = {
  multiple_choice: "Chọn một đáp án",
};

const GROUPS = ["Present", "Past", "Future"] as const;

const SKETCH: Record<string, string> = {
  present_simple: "/images/tenses/present-simple.jpg",
  present_continuous: "/images/tenses/present-continuous.jpg",
  present_perfect: "/images/tenses/present-perfect.jpg",
  present_perfect_continuous: "/images/tenses/present-perfect-continuous.jpg",
  past_simple: "/images/tenses/past-simple.jpg",
  past_continuous: "/images/tenses/past-continuous.jpg",
  past_perfect: "/images/tenses/past-perfect.jpg",
  past_perfect_continuous: "/images/tenses/past-perfect-continuous.jpg",
  future_simple: "/images/tenses/future-simple.jpg",
  future_continuous: "/images/tenses/future-continuous.jpg",
  future_perfect: "/images/tenses/future-perfect.jpg",
  future_perfect_continuous: "/images/tenses/future-perfect-continuous.jpg",
};

function loadVisible(ids: string[]): Set<string> {
  if (typeof window === "undefined") return new Set(ids);
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return new Set(ids);
    const saved = JSON.parse(raw) as string[];
    const known = new Set(ids);
    const next = saved.filter((id) => known.has(id));
    return new Set(next);
  } catch {
    return new Set(ids);
  }
}

export function TensesPanel() {
  const tenses = data.tenses;
  const [tab, setTab] = useState<"theory" | "practice">("theory");
  const [visible, setVisible] = useState<Set<string>>(() => new Set(tenses.map((tense) => tense.id)));
  const [ready, setReady] = useState(false);
  const [picks, setPicks] = useState<Record<string, string>>({});
  const [posterOpen, setPosterOpen] = useState<string | null>(null);
  const [openTenseId, setOpenTenseId] = useState<string | null>(null);
  const [extraOn, setExtraOn] = useState(false);

  useEffect(() => {
    if (!posterOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setPosterOpen(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [posterOpen]);

  useEffect(() => {
    setVisible(loadVisible(tenses.map((tense) => tense.id)));
    setReady(true);
  }, [tenses]);

  useEffect(() => {
    if (!ready) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify([...visible]));
  }, [ready, visible]);

  const shown = useMemo(() => tenses.filter((tense) => visible.has(tense.id)), [tenses, visible]);
  const shownIds = useMemo(() => new Set(shown.map((tense) => tense.id)), [shown]);
  const nameById = useMemo(() => new Map(tenses.map((tense) => [tense.id, tense.name])), [tenses]);

  const specific = data.tense_specific_exercises.filter((item) => shownIds.has(item.tense));
  const mixed = data.mixed_review.exercises.filter((item) => {
    const match = tenses.find((tense) => tense.name === item.tense);
    return match ? shownIds.has(match.id) : false;
  });

  const toggle = (id: string) => {
    setVisible((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const setAll = (on: boolean) => {
    setVisible(on ? new Set(tenses.map((tense) => tense.id)) : new Set());
  };

  return (
    <section className="panel tenses-panel">
      <header className="tenses-header">
        <div>
          <h2>12 thì</h2>
          <p>Bật hoặc tắt từng thì. Tab chỉ hiện những thì đang được chọn.</p>
        </div>
        <div className="tenses-bulk">
          <button type="button" onClick={() => setAll(true)}>
            Hiện tất cả
          </button>
          <button type="button" onClick={() => setAll(false)}>
            Ẩn tất cả
          </button>
        </div>
      </header>

      <div className="tenses-filters">
        {GROUPS.map((group) => (
          <div key={group} className="tenses-group">
            <p>{group === "Present" ? "Hiện tại" : group === "Past" ? "Quá khứ" : "Tương lai"}</p>
            <ul>
              {tenses
                .filter((tense) => tense.group === group)
                .map((tense) => (
                  <li key={tense.id}>
                    <label>
                      <input
                        type="checkbox"
                        checked={visible.has(tense.id)}
                        onChange={() => toggle(tense.id)}
                      />
                      <span>
                        <strong>{tense.name_vi}</strong>
                        <small>{tense.name}</small>
                      </span>
                    </label>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>

      <label className="tenses-extra-toggle">
        <input type="checkbox" checked={extraOn} onChange={(event) => setExtraOn(event.target.checked)} />
        <span>Nội dung thêm</span>
      </label>

      {extraOn ? <ExtraContent /> : null}

      <div className="tenses-tabs" role="tablist" aria-label="Nội dung 12 thì">
        <button
          type="button"
          role="tab"
          aria-selected={tab === "theory"}
          className={tab === "theory" ? "is-active" : ""}
          onClick={() => setTab("theory")}
        >
          Lý thuyết
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={tab === "practice"}
          className={tab === "practice" ? "is-active" : ""}
          onClick={() => setTab("practice")}
        >
          Bài tập vận dụng
        </button>
      </div>

      {posterOpen ? (
        <div
          className="tenses-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Sketchnote"
          onClick={() => setPosterOpen(null)}
        >
          <button type="button" className="tenses-lightbox-close" onClick={() => setPosterOpen(null)}>
            Đóng
          </button>
          <img
            src={posterOpen}
            alt="Sketchnote thì tiếng Anh"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      ) : null}

      {shown.length === 0 ? (
        <p className="tenses-empty">Chưa chọn thì nào. Bật ít nhất một ô ở trên.</p>
      ) : tab === "theory" ? (
        <div className="tenses-theory">
          {shown.map((tense) => (
            <TenseCard
              key={tense.id}
              tense={tense}
              open={openTenseId === tense.id}
              onToggle={() => setOpenTenseId((current) => (current === tense.id ? null : tense.id))}
              onOpenSketch={SKETCH[tense.id] ? () => setPosterOpen(SKETCH[tense.id]) : undefined}
            />
          ))}
        </div>
      ) : (
        <div className="tenses-practice">
          <h3>Bài theo từng thì</h3>
          <ol className="tenses-exercise-list">
            {specific.map((item, index) => (
              <ExerciseCard
                key={item.id}
                index={index + 1}
                title={nameById.get(item.tense) ?? item.tense}
                item={item}
                picked={picks[item.id]}
                onPick={(value) => setPicks((current) => ({ ...current, [item.id]: value }))}
              />
            ))}
          </ol>
          <h3>Ôn trộn</h3>
          <ol className="tenses-exercise-list">
            {mixed.map((item, index) => (
              <ExerciseCard
                key={item.id}
                index={index + 1}
                title={item.tense}
                item={item}
                picked={picks[item.id]}
                onPick={(value) => setPicks((current) => ({ ...current, [item.id]: value }))}
              />
            ))}
          </ol>
        </div>
      )}
    </section>
  );
}

const PAIRS: { title: string; items: { en: string; vi: string }[] }[] = [
  {
    title: "Present Simple vs Present Continuous",
    items: [
      { en: "I work from home.", vi: "Tôi thường làm việc ở nhà." },
      { en: "I am working from home today.", vi: "Hôm nay tôi đang làm việc ở nhà." },
    ],
  },
  {
    title: "Past Simple vs Present Perfect",
    items: [
      { en: "I saw that movie last week.", vi: "Tôi xem phim đó tuần trước." },
      { en: "I have seen that movie.", vi: "Tôi đã xem phim đó rồi (nói về trải nghiệm)." },
    ],
  },
  {
    title: "Past Simple vs Past Continuous",
    items: [
      { en: "I cooked dinner.", vi: "Tôi đã nấu bữa tối." },
      { en: "I was cooking dinner when he arrived.", vi: "Tôi đang nấu bữa tối thì anh ấy đến." },
    ],
  },
  {
    title: "Present Perfect vs Present Perfect Continuous",
    items: [
      { en: "I have written five emails.", vi: "Tôi đã viết năm email." },
      { en: "I have been writing emails for two hours.", vi: "Tôi đã viết email trong hai tiếng." },
    ],
  },
  {
    title: "Past Perfect vs Past Perfect Continuous",
    items: [
      { en: "I had finished the report before the meeting.", vi: "Tôi đã hoàn thành báo cáo trước cuộc họp." },
      {
        en: "I had been working on the report for two hours before the meeting.",
        vi: "Tôi đã làm báo cáo được hai tiếng trước cuộc họp.",
      },
    ],
  },
  {
    title: "Will vs Be going to",
    items: [
      { en: "I'll help you.", vi: "Tôi sẽ giúp bạn (quyết định ngay lúc nói)." },
      { en: "I'm going to learn English tonight.", vi: "Tôi dự định học tiếng Anh tối nay." },
    ],
  },
];

const EXTRA_RULES: { title: string; lines: { mark?: "ok" | "no"; en: string; vi?: string }[] }[] = [
  {
    title: "Sau giới từ, dùng danh từ hoặc V-ing.",
    lines: [
      { mark: "ok", en: "I am interested in learning English." },
      { mark: "no", en: "I am interested in learn English." },
    ],
  },
  {
    title: "Sau động từ khuyết thiếu, dùng V1.",
    lines: [
      { mark: "ok", en: "I can speak English." },
      { mark: "no", en: "I can to speak English." },
    ],
  },
  {
    title: "Động từ chỉ trạng thái thường không dùng tiếp diễn.",
    lines: [
      { mark: "ok", en: "I have known him for five years." },
      { mark: "no", en: "I have been knowing him for five years." },
    ],
  },
  {
    title: "Mệnh đề thời gian nói về tương lai thường dùng hiện tại đơn.",
    lines: [
      { mark: "ok", en: "I will call you when I arrive." },
      { mark: "no", en: "I will call you when I will arrive." },
    ],
  },
  {
    title: "Không phải cứ thấy dấu hiệu thời gian là chọn một thì cố định.",
    lines: [
      { en: "I studied for two hours yesterday.", vi: "Quá khứ đơn." },
      { en: "I have studied for two hours.", vi: "Hiện tại hoàn thành." },
      { en: "I have been studying for two hours.", vi: "Hiện tại hoàn thành tiếp diễn." },
    ],
  },
];

function ExtraContent() {
  return (
    <div className="tenses-extra">
      <section>
        <h3>Những cặp thì B1 bắt buộc phải phân biệt</h3>
        <p>
          Đây là phần quan trọng nhất. Biết công thức nhưng không phân biệt được ý nghĩa thì em vẫn dễ chọn sai thì khi nói.
        </p>
        <ol className="tenses-extra-pairs">
          {PAIRS.map((pair) => (
            <li key={pair.title}>
              <strong>{pair.title}</strong>
              <ul>
                {pair.items.map((item) => (
                  <li key={item.en}>
                    <span>{item.en}</span>
                    <em>{item.vi}</em>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>
      <section>
        <h3>Năm quy tắc quan trọng ngoài công thức 12 thì</h3>
        <ol className="tenses-extra-rules">
          {EXTRA_RULES.map((rule) => (
            <li key={rule.title}>
              <strong>{rule.title}</strong>
              <ul>
                {rule.lines.map((line) => (
                  <li key={line.en} className={line.mark ? `is-${line.mark}` : undefined}>
                    {line.mark ? <b>{line.mark === "ok" ? "Đúng" : "Sai"}</b> : null}
                    <span>{line.en}</span>
                    {line.vi ? <em>{line.vi}</em> : null}
                  </li>
                ))}
              </ul>
              {rule.title.startsWith("Không phải") ? (
                <p>Em phải nhìn toàn bộ ý nghĩa của câu, không chỉ nhìn một từ khóa.</p>
              ) : null}
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}

function TenseCard({
  tense,
  open,
  onToggle,
  onOpenSketch,
}: {
  tense: Tense;
  open: boolean;
  onToggle: () => void;
  onOpenSketch?: () => void;
}) {
  return (
    <article className={`tense-card${open ? " is-open" : ""}`}>
      <header>
        <button type="button" className="tense-card-toggle" onClick={onToggle} aria-expanded={open}>
          <h3>{tense.name_vi}</h3>
          <span>{tense.name}</span>
          <em>{open ? "Thu gọn" : "Xem"}</em>
        </button>
        {onOpenSketch ? (
          <button
            type="button"
            className="tense-sketch-btn"
            onClick={onOpenSketch}
            aria-label={`Xem sketchnote ${tense.name_vi}`}
          >
            Sơ đồ
          </button>
        ) : null}
      </header>
      {open ? (
      <>
      <dl className="tense-forms">
        <div>
          <dt>Khẳng định</dt>
          <dd>{tense.forms.affirmative}</dd>
        </div>
        <div>
          <dt>Phủ định</dt>
          <dd>{tense.forms.negative}</dd>
        </div>
        <div>
          <dt>Câu hỏi Yes/No</dt>
          <dd>{tense.forms.yes_no_question}</dd>
        </div>
      </dl>
      <div className="tense-block">
        <h4>Dùng khi</h4>
        <ul className="tense-uses">
          {tense.uses.map((use) => (
            <li key={use.text}>
              <strong>{use.text}</strong>
              <span>{use.example.en}</span>
              <em>{use.example.vi}</em>
            </li>
          ))}
        </ul>
      </div>
      <div className="tense-block">
        <h4>Từ hay gặp</h4>
        <p className="tense-markers">{tense.markers.join(" · ")}</p>
      </div>
      <p className="tense-example">
        <strong>{tense.example.en}</strong>
        <span>{tense.example.vi}</span>
      </p>
      </>
      ) : null}
    </article>
  );
}

function ExerciseCard({
  index,
  title,
  item,
  picked,
  onPick,
}: {
  index: number;
  title: string;
  item: SpecificExercise | MixedExercise;
  picked?: string;
  onPick: (value: string) => void;
}) {
  const checked = picked !== undefined;
  const correct = picked === item.answer;

  return (
    <li className="tense-exercise">
      <div className="tense-exercise-meta">
        <span>{index}</span>
        <strong>{title}</strong>
        <em>{TYPE_LABEL[item.type] ?? "Chọn một đáp án"}</em>
      </div>
      <p className="tense-question">{item.question}</p>
      <div className="tense-options" role="radiogroup" aria-label={item.question}>
        {item.options.map((option) => {
          const chosen = picked === option;
          const mark = !checked ? "" : option === item.answer ? " is-correct" : chosen ? " is-wrong" : "";
          return (
            <label key={option} className={`tense-option${mark}`}>
              <input
                type="radio"
                name={item.id}
                value={option}
                checked={chosen}
                onChange={() => onPick(option)}
              />
              <span>{option}</span>
            </label>
          );
        })}
      </div>
      {checked ? (
        <div className="tense-answer">
          <p>
            <strong>{correct ? "Đúng." : "Chưa đúng."}</strong> {item.full_sentence}
          </p>
          <p>{item.explanation}</p>
        </div>
      ) : null}
    </li>
  );
}
