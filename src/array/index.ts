// ============================================================================
// Array Utilities Module
// ============================================================================

/**
 * Split array into chunks of specified size
 * @example chunk([1,2,3,4,5], 2) => [[1,2], [3,4], [5]]
 */
export function chunk<T>(array: T[], size: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

/**
 * Remove falsy values from array
 */
export function compact<T>(array: (T | null | undefined | false)[]): T[] {
  return array.filter(Boolean) as T[];
}

/**
 * Flatten nested arrays
 * @param depth - How many levels deep to flatten (default: Infinity)
 */
export function flatten<T>(array: any[], depth: number = Infinity): T[] {
  if (depth <= 0) return array;
  return array.reduce((acc: T[], val: any) => {
    return acc.concat(Array.isArray(val) ? flatten(val, depth - 1) : val);
  }, []);
}

/**
 * Get unique values from array
 */
export function unique<T>(array: T[]): T[] {
  return [...new Set(array)];
}

/**
 * Get unique values by property
 */
export function uniqueBy<T>(array: T[], key: keyof T): T[] {
  const seen = new Set();
  return array.filter((item) => {
    const val = item[key];
    if (seen.has(val)) return false;
    seen.add(val);
    return true;
  });
}

/**
 * Find differences between two arrays
 */
export function difference<T>(array1: T[], array2: T[]): T[] {
  return array1.filter((item) => !array2.includes(item));
}

/**
 * Find common elements between arrays
 */
export function intersection<T>(array1: T[], array2: T[]): T[] {
  return array1.filter((item) => array2.includes(item));
}

/**
 * Combine unique elements from multiple arrays
 */
export function union<T>(...arrays: T[][]): T[] {
  return unique(arrays.flat());
}

/**
 * Randomly shuffle array (non-mutating)
 */
export function shuffle<T>(array: T[]): T[] {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/**
 * Reverse array (non-mutating)
 */
export function reverseArray<T>(array: T[]): T[] {
  return [...array].reverse();
}

/**
 * Get first element of array
 */
export function first<T>(array: T[]): T | undefined {
  return array[0];
}

/**
 * Get last element of array
 */
export function last<T>(array: T[]): T | undefined {
  return array[array.length - 1];
}

/**
 * Get element at index
 */
export function nth<T>(array: T[], index: number): T | undefined {
  return array[index < 0 ? array.length + index : index];
}

/**
 * Remove specific value from array
 */
export function remove<T>(array: T[], value: T): T[] {
  return array.filter((item) => item !== value);
}

/**
 * Remove element at index
 */
export function removeAt<T>(array: T[], index: number): T[] {
  return array.filter((_, i) => i !== index);
}

/**
 * Rotate array elements
 * @example rotate([1,2,3,4], 1) => [4,1,2,3]
 */
export function rotate<T>(array: T[], steps: number = 1): T[] {
  if (array.length === 0) return array;
  const normalized = steps % array.length;
  return [...array.slice(-normalized), ...array.slice(0, -normalized)];
}

/**
 * Sum all numbers in array
 */
export function sum(array: number[]): number {
  return array.reduce((acc, val) => acc + val, 0);
}

/**
 * Get average of numbers
 */
export function average(array: number[]): number {
  return array.length === 0 ? 0 : sum(array) / array.length;
}

/**
 * Get maximum value
 */
export function max(array: number[]): number {
  return Math.max(...array);
}

/**
 * Get minimum value
 */
export function min(array: number[]): number {
  return Math.min(...array);
}

/**
 * Group array by property
 */
export function groupBy<T>(array: T[], key: keyof T): Record<string, T[]> {
  return array.reduce((result: Record<string, T[]>, item: T) => {
    const groupKey = String(item[key]);
    (result[groupKey] = result[groupKey] || []).push(item);
    return result;
  }, {});
}

/**
 * Sort array by property
 */
export function sortBy<T>(
  array: T[],
  key: keyof T,
  order: "asc" | "desc" = "asc",
): T[] {
  const sorted = [...array].sort((a, b) => {
    const aVal = a[key];
    const bVal = b[key];
    if (aVal < bVal) return order === "asc" ? -1 : 1;
    if (aVal > bVal) return order === "asc" ? 1 : -1;
    return 0;
  });
  return sorted;
}

/**
 * Filter array by predicate
 */
export function filterArray<T>(
  array: T[],
  predicate: (item: T, index: number) => boolean,
): T[] {
  return array.filter(predicate);
}

/**
 * Map array values
 */
export function mapArray<T, U>(
  array: T[],
  callback: (item: T, index: number) => U,
): U[] {
  return array.map(callback);
}

/**
 * Reduce array
 */
export function reduceArray<T, U>(
  array: T[],
  callback: (acc: U, item: T, index: number) => U,
  initial: U,
): U {
  return array.reduce(callback, initial);
}

/**
 * Fill array with value
 */
export function fillArray<T>(
  array: T[],
  value: T,
  start: number = 0,
  end?: number,
): T[] {
  return array.fill(value, start, end);
}

/**
 * Check if array includes value
 */
export function includesArray<T>(array: T[], value: T): boolean {
  return array.includes(value);
}
