import { ANNOUNCEMENT_MESSAGES } from "@/lib/constants";

const TICKER_TEXT = ANNOUNCEMENT_MESSAGES.join("   ★   ");

export function AnnouncementTicker() {
  return (
    <div className="announcement-ticker" role="marquee" aria-live="polite">
      <div className="announcement-track">
        <span className="announcement-text">{TICKER_TEXT}</span>
        <span className="announcement-text" aria-hidden="true">
          {TICKER_TEXT}
        </span>
      </div>
    </div>
  );
}
