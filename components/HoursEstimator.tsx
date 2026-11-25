"use client";

import { useState } from "react";
import Link from "next/link";
import { handOffTasks } from "@/lib/content";

const WEEKS_PER_MONTH = 4.33;

const formatRate = ([low, high]: [number, number]) => (low === high ? `$${low}/hr` : `$${low}–${high}/hr`);

// Describe the monthly hours in workdays/workweeks so the claim stays true for any selection.
function timeBack(monthly: number) {
  const tail = "every month you could get back to focus on growing your business.";
  if (monthly >= 46) return `That's about ${Math.round((monthly / 40) * 10) / 10} workweeks ${tail}`;
  if (monthly >= 40) return `That's a full workweek ${tail}`;
  if (monthly >= 34) return `That's nearly a full workweek ${tail}`;
  return `That's about ${Math.round((monthly / 8) * 10) / 10} workdays ${tail}`;
}

export function HoursEstimator() {
  const [picked, setPicked] = useState(new Set(["social", "design"]));

  const toggle = (id: string) => {
    const next = new Set(picked);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setPicked(next);
  };

  const chosen = handOffTasks.filter((t) => picked.has(t.id));
  const weekly = chosen.reduce((sum, t) => sum + t.hours, 0);
  const monthly = Math.round(weekly * WEEKS_PER_MONTH);
  // Monthly cost range from each task's hours and rate, rounded to the nearest $10.
  const [costLow, costHigh] = [0, 1].map(
    (end) => Math.round(chosen.reduce((sum, t) => sum + t.hours * WEEKS_PER_MONTH * t.rate[end], 0) / 10) * 10,
  );

  return (
    <div className="mt-14 grid gap-8 lg:grid-cols-[3fr_2fr]">
      <ul className="border-b border-rule">
        {handOffTasks.map((t) => (
          <li key={t.id} className="border-t border-rule">
            <label className="flex cursor-pointer items-center gap-4 py-5">
              <span className="relative flex h-6 w-6 shrink-0">
                <input
                  type="checkbox"
                  checked={picked.has(t.id)}
                  onChange={() => toggle(t.id)}
                  className="peer h-6 w-6 cursor-pointer appearance-none border-2 border-ink transition checked:border-tangerine checked:bg-tangerine focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                />
                <svg viewBox="0 0 24 24" className="pointer-events-none absolute inset-0 hidden p-1 text-onyx peer-checked:block" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M4 12l5 5L20 6" />
                </svg>
              </span>
              <span className="flex-1 text-lg">{t.label}</span>
              <span className="label shrink-0 text-right text-muted">
                ~{t.hours} h/wk
                <span className="mt-1 block text-ink">{formatRate(t.rate)}</span>
              </span>
            </label>
          </li>
        ))}
      </ul>

      <div className="light-scope flex flex-col justify-between bg-ink p-8 text-paper lg:sticky lg:top-24 lg:self-start">
        <div>
          <p className="label text-paper/60">Time back every month</p>
          <p className="mt-4 font-wide text-7xl font-extrabold text-tangerine sm:text-8xl" aria-live="polite">
            {monthly}h
          </p>
          <p className="mt-4 text-lg leading-relaxed text-paper/80">
            {weekly > 0
              ? timeBack(monthly)
              : "Tick a task to see the estimate."}
          </p>
          {weekly > 0 && (
            <div className="mt-8 flex items-baseline justify-between gap-4 border-t border-rule pt-5">
              <span className="label text-paper/60">Estimated cost</span>
              <span className="font-wide text-2xl font-extrabold">
                {costLow === costHigh ? `$${costLow}` : `$${costLow}–${costHigh}`}
                <span className="text-base font-normal text-paper/60">/mo</span>
              </span>
            </div>
          )}
          <p className="mt-4 text-sm text-paper/70">
            Prefer a fixed price?{" "}
            <a href="#project-based" className="text-paper underline decoration-tangerine decoration-2 underline-offset-4 hover:text-tangerine">
              Get a project quote
            </a>
          </p>
        </div>
        <Link href="#contact" className="label mt-10 bg-tangerine px-6 py-4 text-center text-ink transition hover:bg-paper">
          Let&apos;s get that time back →
        </Link>
      </div>
    </div>
  );
}
