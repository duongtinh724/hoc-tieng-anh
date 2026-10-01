import type { AppSection } from "@/types/lesson";
import { MENU_ITEMS } from "@/lib/constants";

interface SidebarNavProps {
  activeSection: AppSection;
  onNavigate: (section: AppSection) => void;
  onCloseMobile?: () => void;
}

export function SidebarNav({
  activeSection,
  onNavigate,
  onCloseMobile,
}: SidebarNavProps) {
  return (
    <nav className="sidebar-nav" aria-label="Menu chính">
      {MENU_ITEMS.map((item) => (
        <button
          key={item.id}
          type="button"
          className={`nav-item${activeSection === item.id ? " active" : ""}`}
          onClick={() => {
            onNavigate(item.id);
            onCloseMobile?.();
          }}
        >
          <span className="nav-icon" aria-hidden="true">
            {item.icon}
          </span>
          {item.label}
        </button>
      ))}
    </nav>
  );
}
