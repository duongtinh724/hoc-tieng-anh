"use client";

import { useState, type ReactNode } from "react";
import type { AppSection } from "@/types/lesson";
import { AnnouncementTicker } from "@/components/layout/AnnouncementTicker";
import { SidebarNav } from "@/components/navigation/SidebarNav";
import { TodayReviewBell } from "@/components/review/TodayReviewBell";

interface AppShellProps {
  activeSection: AppSection;
  onNavigate: (section: AppSection) => void;
  sidebar: ReactNode;
  monthRail: ReactNode;
  children: ReactNode;
  reviewCount?: number;
  onOpenReview?: () => void;
}

export function AppShell({
  activeSection,
  onNavigate,
  sidebar,
  monthRail,
  children,
  reviewCount = 0,
  onOpenReview,
}: AppShellProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  function openReview() {
    setMobileOpen(false);
    onOpenReview?.();
  }

  return (
    <div className="app-wrapper">
      <AnnouncementTicker />
      <div className="app-shell">
        <header className="mobile-header">
          <button
            type="button"
            className="menu-toggle"
            onClick={() => setMobileOpen(true)}
            aria-label="Mở menu"
          >
            ☰
          </button>
          <span className="mobile-title">Học tiếng Anh</span>
          {onOpenReview ? <TodayReviewBell count={reviewCount} onClick={openReview} /> : null}
        </header>

        {mobileOpen ? (
          <button
            type="button"
            className="sidebar-backdrop"
            aria-label="Đóng menu"
            onClick={() => setMobileOpen(false)}
          />
        ) : null}

        <aside className={`sidebar${mobileOpen ? " open" : ""}`}>
          <div className="sidebar-brand">
            <span className="brand-icon" aria-hidden="true">
              📚
            </span>
            <div className="sidebar-brand-text">
              <strong>Học tiếng Anh</strong>
              <span>30 phút mỗi ngày</span>
            </div>
            {onOpenReview ? (
              <span className="sidebar-review-bell">
                <TodayReviewBell count={reviewCount} onClick={openReview} />
              </span>
            ) : null}
          </div>

          <SidebarNav
            activeSection={activeSection}
            onNavigate={onNavigate}
            onCloseMobile={() => setMobileOpen(false)}
          />

          <div className="sidebar-extra">{sidebar}</div>
        </aside>

        <div className="content-column">
          {monthRail}
          <main className="main-content">
            <div className="main-content-inner">{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
}
