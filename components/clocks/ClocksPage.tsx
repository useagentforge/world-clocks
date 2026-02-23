"use client";

import { CLOCKS } from "@/data/clocks";
import { useWorldClock } from "@/hooks/useWorldClock";
import { ClockCard } from "./ClockCard";

export function ClocksPage() {
  const now = useWorldClock();

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4 py-16">
      {/* Page header */}
      <div className="mx-auto mb-12 max-w-5xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          World Clocks
        </h1>
        <p className="mt-3 text-base text-white/40">
          Live time across three cities — ticking every second.
        </p>
      </div>

      {/* Clock grid */}
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {CLOCKS.map((config) => (
          <ClockCard key={config.id} config={config} now={now} />
        ))}
      </div>
    </main>
  );
}
