import type { FormattedTime } from "@/types/clock";

export function formatTime(date: Date, timezone: string): FormattedTime {
  const fmt = (opts: Intl.DateTimeFormatOptions) =>
    new Intl.DateTimeFormat("en-GB", { timeZone: timezone, ...opts });

  // Extract numeric parts explicitly — relying solely on `2-digit` in Intl
  // without an anchor field (e.g. hour) can skip zero-padding in some runtimes.
  const parts = fmt({
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).formatToParts(date);

  const get = (type: string) =>
    parts.find((p) => p.type === type)?.value.padStart(2, "0") ?? "00";

  return {
    hours: get("hour"),
    minutes: get("minute"),
    seconds: get("second"),
    date: fmt({
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date),
    offset: fmt({ timeZoneName: "short" }).format(date).split(" ").pop() ?? "",
  };
}
