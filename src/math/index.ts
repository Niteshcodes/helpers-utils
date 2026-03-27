// ============================================================================
// Math Utilities Module
// ============================================================================

/**
 * Round to decimal places
 */
export function round(num: number, decimals: number = 0): number {
  return Math.round(num * Math.pow(10, decimals)) / Math.pow(10, decimals);
}

/**
 * Floor number
 */
export function floor(num: number): number {
  return Math.floor(num);
}

/**
 * Ceiling number
 */
export function ceil(num: number): number {
  return Math.ceil(num);
}

/**
 * Absolute value
 */
export function abs(num: number): number {
  return Math.abs(num);
}

/**
 * Square root
 */
export function sqrt(num: number): number {
  return Math.sqrt(num);
}

/**
 * Power function
 */
export function pow(base: number, exponent: number): number {
  return Math.pow(base, exponent);
}

/**
 * Find minimum
 */
export function minValue(...numbers: number[]): number {
  return Math.min(...numbers);
}

/**
 * Find maximum
 */
export function maxValue(...numbers: number[]): number {
  return Math.max(...numbers);
}

/**
 * Clamp value between min/max
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

/**
 * Random number in range
 */
export function random(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

/**
 * Random integer
 */
export function randomInt(min: number, max: number): number {
  return Math.floor(random(min, max + 1));
}

/**
 * Calculate percentage
 */
export function percentage(value: number, total: number): number {
  return (value / total) * 100;
}

/**
 * Calculate factorial
 */
export function factorial(n: number): number {
  if (n < 0) throw new Error("Factorial not defined for negative numbers");
  if (n === 0 || n === 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

/**
 * Get fibonacci number at index
 */
export function fibonacci(n: number): number {
  if (n < 0) throw new Error("Fibonacci index cannot be negative");
  if (n === 0) return 0;
  if (n === 1) return 1;
  let a = 0,
    b = 1;
  for (let i = 2; i <= n; i++) {
    [a, b] = [b, a + b];
  }
  return b;
}

/**
 * Calculate distance between points
 */
export function distance(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
): number {
  return sqrt(pow(x2 - x1, 2) + pow(y2 - y1, 2));
}

/**
 * Calculate average
 */
export function averageNum(...numbers: number[]): number {
  return numbers.length === 0
    ? 0
    : numbers.reduce((a, b) => a + b, 0) / numbers.length;
}

/**
 * Sum numbers
 */
export function sumNum(...numbers: number[]): number {
  return numbers.reduce((a, b) => a + b, 0);
}

/**
 * Get median value
 */
export function median(array: number[]): number {
  if (array.length === 0) return 0;
  const sorted = [...array].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 !== 0
    ? sorted[mid]
    : (sorted[mid - 1] + sorted[mid]) / 2;
}

/**
 * Get mode (most common value)
 */
export function mode(array: number[]): number | undefined {
  if (array.length === 0) return undefined;
  const frequency: Record<number, number> = {};
  let maxFreq = 0;
  let modeValue: number | undefined;

  for (const num of array) {
    frequency[num] = (frequency[num] || 0) + 1;
    if (frequency[num] > maxFreq) {
      maxFreq = frequency[num];
      modeValue = num;
    }
  }

  return modeValue;
}

/**
 * Calculate standard deviation
 */
export function standardDeviation(array: number[]): number {
  if (array.length === 0) return 0;
  const mean = averageNum(...array);
  const squareDiffs = array.map((val) => pow(val - mean, 2));
  const avgSquareDiff = averageNum(...squareDiffs);
  return sqrt(avgSquareDiff);
}

/**
 * Calculate variance
 */
export function variance(array: number[]): number {
  if (array.length === 0) return 0;
  const mean = averageNum(...array);
  const squareDiffs = array.map((val) => pow(val - mean, 2));
  return averageNum(...squareDiffs);
}

/**
 * Greatest common divisor
 */
export function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
}

/**
 * Least common multiple
 */
export function lcm(a: number, b: number): number {
  return (a * b) / gcd(a, b);
}

/**
 * Check if number is divisible
 */
export function isDivisibleBy(num: number, divisor: number): boolean {
  return num % divisor === 0;
}
