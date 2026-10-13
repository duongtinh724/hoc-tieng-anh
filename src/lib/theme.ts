export type ThemeMode = "light" | "dark";

const STORAGE_KEY = "tieng-anh-theme";

export function readTheme(): ThemeMode {
  if (typeof document === "undefined") return "light";
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

export function applyTheme(mode: ThemeMode) {
  document.documentElement.dataset.theme = mode;
  localStorage.setItem(STORAGE_KEY, mode);
  window.dispatchEvent(new Event("theme-change"));
}

export function toggleTheme() {
  applyTheme(readTheme() === "dark" ? "light" : "dark");
}
