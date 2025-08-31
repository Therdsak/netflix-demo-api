export function getYearFromDate(dateString: string): string {
  return new Date(dateString).getFullYear().toString();
}
