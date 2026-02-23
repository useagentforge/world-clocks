import { describe, it, expect } from "vitest";
import { formatTime } from "@/lib/formatTime";

describe("formatTime", () => {
  // Fixed point in time: 2025-06-10T12:00:00Z (UTC noon)
  const BASE_DATE = new Date("2025-06-10T12:00:00Z");

  it("returns correct hour for London (BST = UTC+1 in June)", () => {
    const result = formatTime(BASE_DATE, "Europe/London");
    expect(result.hours).toBe("13");
  });

  it("returns correct hour for Perth (AWST = UTC+8, no DST)", () => {
    const result = formatTime(BASE_DATE, "Australia/Perth");
    expect(result.hours).toBe("20");
  });

  it("returns correct hour for New York (EDT = UTC-4 in June)", () => {
    const result = formatTime(BASE_DATE, "America/New_York");
    expect(result.hours).toBe("08");
  });

  it("returns zero-padded minutes", () => {
    const result = formatTime(new Date("2025-06-10T12:05:00Z"), "Europe/London");
    expect(result.minutes).toBe("05");
  });

  it("returns a non-empty offset string", () => {
    const result = formatTime(BASE_DATE, "Europe/London");
    expect(result.offset.length).toBeGreaterThan(0);
  });

  it("returns a formatted date string containing the year", () => {
    const result = formatTime(BASE_DATE, "Europe/London");
    expect(result.date).toContain("2025");
  });
});
