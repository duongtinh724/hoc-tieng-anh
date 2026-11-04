"use client";

import { useEffect, useState } from "react";
import { getTodayReview, type TodayReview } from "@/lib/today-review";
import { loadVocabStore } from "@/lib/vocab-study";

export function useTodayReview(args: {
  month: number;
  nextDay: number;
  selectedDay: number;
  doneDays: number[];
  ready: boolean;
}) {
  const [review, setReview] = useState<TodayReview | null>(null);
  const [open, setOpen] = useState(false);
  const doneKey = args.doneDays.join(",");

  useEffect(() => {
    if (!args.ready) return;
    const next = getTodayReview({
      month: args.month,
      nextDay: args.nextDay,
      selectedDay: args.selectedDay,
      doneDays: args.doneDays,
      store: loadVocabStore(),
    });
    setReview(next);
  }, [args.ready, args.month, args.nextDay, args.selectedDay, doneKey, args.doneDays]);

  function openReview() {
    if (!args.ready) return;
    setReview(
      getTodayReview({
        month: args.month,
        nextDay: args.nextDay,
        selectedDay: args.selectedDay,
        doneDays: args.doneDays,
        store: loadVocabStore(),
      }),
    );
    setOpen(true);
  }

  return { review, open, setOpen, openReview };
}
