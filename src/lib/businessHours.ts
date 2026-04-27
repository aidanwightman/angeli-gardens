export function isInBusinessHours(now: Date = new Date()): boolean {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/London",
    weekday: "long",
    hour: "2-digit",
    hour12: false,
  }).formatToParts(now);

  const weekday = parts.find((p) => p.type === "weekday")?.value ?? "";
  const hour = parseInt(parts.find((p) => p.type === "hour")?.value ?? "0", 10);

  const workdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return workdays.includes(weekday) && hour >= 8 && hour < 20;
}

// Dev override via URL: ?callback=force → always show modal; ?callback=skip → always dial
export function shouldShowCallback(now?: Date): boolean {
  if (typeof window !== "undefined") {
    const params = new URLSearchParams(window.location.search);
    if (params.get("callback") === "force") return true;
    if (params.get("callback") === "skip") return false;
  }
  return !isInBusinessHours(now);
}
