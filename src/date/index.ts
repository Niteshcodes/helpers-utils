// ============================================================================
// Date & Time Utilities Module
// ============================================================================

/**
 * Get current timestamp
 */
export function now(): number {
  return Date.now();
}

/**
 * Get today's date
 */
export function today(): Date {
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  return date;
}

/**
 * Get yesterday's date
 */
export function yesterday(): Date {
  return addDays(today(), -1);
}

/**
 * Get tomorrow's date
 */
export function tomorrow(): Date {
  return addDays(today(), 1);
}

/**
 * Add days to date
 */
export function addDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

/**
 * Subtract days from date
 */
export function subtractDays(date: Date, days: number): Date {
  return addDays(date, -days);
}

/**
 * Add months to date
 */
export function addMonths(date: Date, months: number): Date {
  const result = new Date(date);
  result.setMonth(result.getMonth() + months);
  return result;
}

/**
 * Add years to date
 */
export function addYears(date: Date, years: number): Date {
  const result = new Date(date);
  result.setFullYear(result.getFullYear() + years);
  return result;
}

/**
 * Get start of day
 */
export function startOfDay(date: Date): Date {
  const result = new Date(date);
  result.setHours(0, 0, 0, 0);
  return result;
}

/**
 * Get end of day
 */
export function endOfDay(date: Date): Date {
  const result = new Date(date);
  result.setHours(23, 59, 59, 999);
  return result;
}

/**
 * Get start of month
 */
export function startOfMonth(date: Date): Date {
  const result = new Date(date);
  result.setDate(1);
  result.setHours(0, 0, 0, 0);
  return result;
}

/**
 * Get end of month
 */
export function endOfMonth(date: Date): Date {
  const result = new Date(date);
  result.setMonth(result.getMonth() + 1);
  result.setDate(0);
  result.setHours(23, 59, 59, 999);
  return result;
}

/**
 * Get start of year
 */
export function startOfYear(date: Date): Date {
  const result = new Date(date);
  result.setMonth(0, 1);
  result.setHours(0, 0, 0, 0);
  return result;
}

/**
 * Get end of year
 */
export function endOfYear(date: Date): Date {
  const result = new Date(date);
  result.setMonth(11, 31);
  result.setHours(23, 59, 59, 999);
  return result;
}

/**
 * Format date as string
 * @example format(new Date(), 'yyyy-MM-dd') => '2024-03-27'
 */
export function format(date: Date, formatStr: string): string {
  const map: Record<string, any> = {
    yyyy: date.getFullYear(),
    MM: String(date.getMonth() + 1).padStart(2, "0"),
    dd: String(date.getDate()).padStart(2, "0"),
    HH: String(date.getHours()).padStart(2, "0"),
    mm: String(date.getMinutes()).padStart(2, "0"),
    ss: String(date.getSeconds()).padStart(2, "0"),
  };
  return formatStr.replace(/yyyy|MM|dd|HH|mm|ss/g, (matched) => map[matched]);
}

/**
 * Parse date string
 */
export function parse(dateString: string, formatStr: string): Date {
  const date = new Date(dateString);
  return date;
}

/**
 * Get difference between dates
 */
export function difference(
  date1: Date,
  date2: Date,
  unit: "ms" | "seconds" | "minutes" | "hours" | "days" = "ms",
): number {
  const diff = Math.abs(date1.getTime() - date2.getTime());
  switch (unit) {
    case "seconds":
      return Math.floor(diff / 1000);
    case "minutes":
      return Math.floor(diff / 60000);
    case "hours":
      return Math.floor(diff / 3600000);
    case "days":
      return Math.floor(diff / 86400000);
    default:
      return diff;
  }
}

/**
 * Check if same day
 */
export function isSameDay(date1: Date, date2: Date): boolean {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
}

/**
 * Check if before
 */
export function isBefore(date1: Date, date2: Date): boolean {
  return date1.getTime() < date2.getTime();
}

/**
 * Check if after
 */
export function isAfter(date1: Date, date2: Date): boolean {
  return date1.getTime() > date2.getTime();
}

/**
 * Check if between dates
 */
export function isBetween(date: Date, start: Date, end: Date): boolean {
  return date.getTime() >= start.getTime() && date.getTime() <= end.getTime();
}

/**
 * Check if today
 */
export function isToday(date: Date): boolean {
  return isSameDay(date, new Date());
}

/**
 * Check if leap year
 */
export function isLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

/**
 * Get days in month
 */
export function daysInMonth(year: number, month: number): number {
  return new Date(year, month, 0).getDate();
}

/**
 * Get week number of year
 */
export function weekOfYear(date: Date): number {
  const firstDay = new Date(date.getFullYear(), 0, 1);
  const diff = date.getTime() - firstDay.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay / 7) + 1;
}

/**
 * Get day number of year
 */
export function dayOfYear(date: Date): number {
  const firstDay = new Date(date.getFullYear(), 0, 1);
  const diff = date.getTime() - firstDay.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay) + 1;
}

/**
 * Calculate age from birth date
 */
export function getAge(birthDate: Date | string): number {
  const birth = typeof birthDate === "string" ? new Date(birthDate) : birthDate;
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
}
