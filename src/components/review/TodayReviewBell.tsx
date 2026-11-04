"use client";

interface TodayReviewBellProps {
  count: number;
  onClick: () => void;
}

export function TodayReviewBell({ count, onClick }: TodayReviewBellProps) {
  const label = count > 0 ? `Ôn hôm nay, ${count} bài` : "Ôn hôm nay";

  return (
    <button
      type="button"
      className="today-review-bell"
      onClick={onClick}
      aria-label={label}
      title={label}
    >
      <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 22a2.4 2.4 0 0 0 2.4-2.4h-4.8A2.4 2.4 0 0 0 12 22Zm8-6v-5.2A8 8 0 0 0 13.2 3V2.4a1.2 1.2 0 1 0-2.4 0v.6A8 8 0 0 0 4 10.8V16l-1.6 1.6V19h19.2v-1.4L20 16Z"
        />
      </svg>
      {count > 0 ? <span className="today-review-badge">{count > 9 ? "9+" : count}</span> : null}
    </button>
  );
}
