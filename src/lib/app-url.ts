import type { AppSection } from "@/types/lesson";

const PAGES: AppSection[] = ["overview", "lesson", "practice", "review", "guide"];

export interface AppUrlView {
  month?: number;
  page?: AppSection;
  lesson?: number;
}

export function readAppUrl(): AppUrlView {
  if (typeof window === "undefined") return {};

  const params = new URLSearchParams(window.location.search);
  const month = Number(params.get("month"));
  const lesson = Number(params.get("lesson"));
  const page = params.get("page");

  return {
    month: Number.isInteger(month) && month > 0 ? month : undefined,
    page: PAGES.includes(page as AppSection) ? (page as AppSection) : undefined,
    lesson: Number.isInteger(lesson) && lesson > 0 ? lesson : undefined,
  };
}

export function writeAppUrl(view: {
  month: number;
  page: AppSection;
  lesson?: number | null;
}) {
  if (typeof window === "undefined") return;

  const params = new URLSearchParams();
  params.set("month", String(view.month));
  params.set("page", view.page);
  if (view.lesson) {
    params.set("lesson", String(view.lesson));
  }

  const next = `${window.location.pathname}?${params.toString()}`;
  const current = `${window.location.pathname}${window.location.search}`;
  if (next === current) return;

  window.history.replaceState(null, "", next);
}
