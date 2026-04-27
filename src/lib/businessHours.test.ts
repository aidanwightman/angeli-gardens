import { describe, it, expect } from "vitest";
import { isInBusinessHours } from "./businessHours";

// All dates constructed in UTC; Europe/London is UTC+0 in winter, UTC+1 in summer.
// Using January dates (UTC+0) so London time === UTC time for simplicity.

function londonDate(isoUtc: string): Date {
  return new Date(isoUtc);
}

describe("isInBusinessHours", () => {
  it("Mon 09:00 London → in hours", () => {
    // 2025-01-06 is a Monday
    expect(isInBusinessHours(londonDate("2025-01-06T09:00:00Z"))).toBe(true);
  });

  it("Mon 07:59 London → out of hours", () => {
    expect(isInBusinessHours(londonDate("2025-01-06T07:59:00Z"))).toBe(false);
  });

  it("Mon 20:00 London → out of hours (exclusive upper bound)", () => {
    expect(isInBusinessHours(londonDate("2025-01-06T20:00:00Z"))).toBe(false);
  });

  it("Sat 19:59 London → in hours", () => {
    // 2025-01-11 is a Saturday
    expect(isInBusinessHours(londonDate("2025-01-11T19:59:00Z"))).toBe(true);
  });

  it("Sun 12:00 London → out of hours", () => {
    // 2025-01-12 is a Sunday
    expect(isInBusinessHours(londonDate("2025-01-12T12:00:00Z"))).toBe(false);
  });
});
