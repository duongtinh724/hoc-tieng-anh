"use client";

import { useState, type ReactNode } from "react";
import type { AppSection } from "@/types/lesson";
import { AnnouncementTicker } from "@/components/layout/AnnouncementTicker";
import { SidebarNav } from "@/components/navigation/SidebarNav";

interface AppShellProps {
  activeSection: AppSection;
  onNavigate: (section: AppSection) => void;
  sidebar: ReactNode;
  children: ReactNode;
}

export function AppShell({
  activeSection,
  onNavigate,
  sidebar,
  children,
}: AppShellProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

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
      </header>

      {mobileOpen && (
        <button
          type="button"
          className="sidebar-backdrop"
          aria-label="Đóng menu"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside className={`sidebar${mobileOpen ? " open" : ""}`}>
        <div className="sidebar-brand">
          <span className="brand-icon" aria-hidden="true">
            📚
          </span>
          <div>
            <strong>Học tiếng Anh</strong>
            <span>30 phút mỗi ngày</span>
          </div>
        </div>

        <SidebarNav
          activeSection={activeSection}
          onNavigate={onNavigate}
          onCloseMobile={() => setMobileOpen(false)}
        />

        <div className="sidebar-extra">{sidebar}</div>
      </aside>

      <main className="main-content">
        <div className="main-content-inner">{children}</div>
      </main>
      </div>
    </div>
  );
}
