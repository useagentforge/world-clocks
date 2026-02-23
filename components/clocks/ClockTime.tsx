type ClockTimeProps = {
  hours: string;
  minutes: string;
  seconds: string;
};

export function ClockTime({ hours, minutes, seconds }: ClockTimeProps) {
  return (
    <div className="flex items-end gap-1 font-mono" suppressHydrationWarning>
      <span className="text-6xl font-bold tabular-nums leading-none tracking-tight text-white">
        {hours}
      </span>
      <span className="mb-1 text-4xl font-bold text-white/60">:</span>
      <span className="text-6xl font-bold tabular-nums leading-none tracking-tight text-white">
        {minutes}
      </span>
      <span className="mb-1 text-4xl font-bold text-white/60">:</span>
      <span className="mb-1 text-3xl font-semibold tabular-nums leading-none text-white/50">
        {seconds}
      </span>
    </div>
  );
}
