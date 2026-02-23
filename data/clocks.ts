import type { ClockConfig } from "@/types/clock";

export const CLOCKS: ClockConfig[] = [
  {
    id: "london",
    label: "London",
    timezone: "Europe/London",
    country: "United Kingdom",
    flagEmoji: "🇬🇧",
  },
  {
    id: "perth",
    label: "Perth",
    timezone: "Australia/Perth",
    country: "Australia",
    flagEmoji: "🇦🇺",
  },
  {
    id: "new-york",
    label: "New York",
    timezone: "America/New_York",
    country: "United States",
    flagEmoji: "🇺🇸",
  },
];
