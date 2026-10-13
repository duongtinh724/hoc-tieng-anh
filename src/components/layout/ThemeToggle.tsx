"use client";

import { useSyncExternalStore } from "react";
import { readTheme, toggleTheme } from "@/lib/theme";

function subscribe(onChange: () => void) {
  window.addEventListener("theme-change", onChange);
  return () => window.removeEventListener("theme-change", onChange);
}

export function ThemeToggle() {
  const mode = useSyncExternalStore(subscribe, readTheme, () => "light" as const);
  const isDark = mode === "dark";

  return (
    <button type="button" className="theme-toggle" onClick={toggleTheme}>
      {isDark ? "Chế độ sáng" : "Chế độ tối"}
    </button>
  );
}
