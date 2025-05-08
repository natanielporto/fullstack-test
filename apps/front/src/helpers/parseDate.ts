export function parseDate(val: string): Date | null {
  const [month, day, year] = val.split("/").map(Number);
  const parsed = new Date(year, month - 1, day);
  return isNaN(parsed.getTime()) ? null : parsed;
}
