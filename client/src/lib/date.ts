// Dates in the data files are plain ISO days (YYYY-MM-DD). Formatting them in UTC
// keeps the displayed day stable for readers in every time zone.
export function formatDay(iso: string, month: "long" | "short" = "long"): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    month,
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}
