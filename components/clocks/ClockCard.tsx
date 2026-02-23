import { formatTime } from "@/lib/formatTime";
import type { ClockConfig } from "@/types/clock";
import { ClockTime } from "./ClockTime";

type ClockCardProps = {
  config: ClockConfig;
  now: Date;
};

export function ClockCard({ config, now }: ClockCardProps) {
  const { hours, minutes, seconds, date, offset } = formatTime(
    now,
    config.timezone
  );

  return (
    <div className="flex flex-col gap-4 rounded-2xl bg-white/5 p-8 ring-1 ring-white/10 backdrop-blur-sm transition-all hover:bg-white/10 hover:ring-white/20">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-3xl" role="img" aria-label={config.country}>
            {config.flagEmoji}
          </span>
          <div>
            <h2 className="text-lg font-semibold text-white">{config.label}</h2>
            <p className="text-sm text-white/50">{config.country}</p>
          </div>
        </div>
        <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/70 ring-1 ring-white/10">
          {offset}
        </span>
      </div>

      {/* Analog clock face — parse strings to numbers for SVG hand angles */}
      <ClockTime hours={parseInt(hours, 10)} minutes={parseInt(minutes, 10)} seconds={parseInt(seconds, 10)} />

      {/* Digital time — smaller, sits under the analog face */}
      <p
        className="text-center text-sm font-mono font-medium tabular-nums text-white/60"
        suppressHydrationWarning
      >
        {String(hours).padStart(2, "0")}:{String(minutes).padStart(2, "0")}:
        <span className="text-white/40">{String(seconds).padStart(2, "0")}</span>
      </p>

      {/* Date */}
      <p className="text-center text-xs text-white/40" suppressHydrationWarning>
        {date}
      </p>
    </div>
  );
}
