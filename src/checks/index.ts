// ============================================================================
// Type Checks Module
// ============================================================================

/**
 * Check if value is a boolean
 */
export function isBool(value: any): value is boolean {
  return typeof value === 'boolean';
}

/**
 * Check if value represents true (boolean or common string/number forms)
 */
export function isTrue(value: any): boolean {
  if (isBool(value)) return value;
  if (isNumber(value)) return value === 1;
  if (!isString(value)) return false;

  const normalized = value.trim().toLowerCase();
  return (
    normalized === 'true' ||
    normalized === '1' ||
    normalized === 'yes' ||
    normalized === 'y' ||
    normalized === 'on'
  );
}

/**
 * Check if value represents false (boolean or common string/number forms)
 */
export function isFalse(value: any): boolean {
  if (isBool(value)) return !value;
  if (isNullOrUndefined(value)) return true;
  if (isNumber(value)) return value === 0;
  if (!isString(value)) return false;

  const normalized = value.trim().toLowerCase();
  return (
    normalized === '' ||
    normalized === 'false' ||
    normalized === '0' ||
    normalized === 'no' ||
    normalized === 'n' ||
    normalized === 'off' ||
    normalized === 'null' ||
    normalized === 'undefined'
  );
}

/**
 * Check if value can be interpreted as a boolean-like input
 */
export function isBooleanLike(value: any): boolean {
  return isTrue(value) || isFalse(value);
}

/**
 * Convert boolean-like input to a boolean. Returns fallback for unknown values.
 */
export function toBoolean(value: any, fallback = false): boolean {
  if (isTrue(value)) return true;
  if (isFalse(value)) return false;
  return fallback;
}

/**
 * Check if value is a number
 */
export function isNumber(value: any): value is number {
  return typeof value === 'number' && !isNaN(value);
}

/**
 * Check if value is a string
 */
export function isString(value: any): value is string {
  return typeof value === 'string';
}

/**
 * Check if value is an array
 */
export function isArray(value: any): value is any[] {
  return Array.isArray(value);
}

/**
 * Check if value is a plain object
 */
export function isObject(value: any): value is Record<string, any> {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

/**
 * Check if value is null
 */
export function isNull(value: any): value is null {
  return value === null;
}

/**
 * Check if value is undefined
 */
export function isUndefined(value: any): value is undefined {
  return value === undefined;
}

/**
 * Check if value is null or undefined
 */
export function isNullOrUndefined(value: any): value is null | undefined {
  return value === null || value === undefined;
}

/**
 * Check if value is a function
 */
export function isFunction(value: any): value is Function {
  return typeof value === 'function';
}

/**
 * Check if value is a Date object
 */
export function isDate(value: any): value is Date {
  return value instanceof Date;
}

/**
 * Check if value is a RegExp
 */
export function isRegex(value: any): value is RegExp {
  return value instanceof RegExp;
}

/**
 * Check if value is a Promise
 */
export function isPromise(value: any): value is Promise<any> {
  return value instanceof Promise;
}

/**
 * Check if value is iterable
 */
export function isIterable(value: any): boolean {
  return isObject(value) && typeof (value as any)[Symbol.iterator] === 'function';
}

/**
 * Check if value is empty (string, array, object, null, undefined)
 */
export function isEmpty(value: any): boolean {
  if (isNullOrUndefined(value)) return true;
  if (isString(value) || isArray(value)) return value.length === 0;
  if (isObject(value)) return Object.keys(value).length === 0;
  return false;
}

/**
 * Check if value is falsy
 */
export function isFalsy(value: any): boolean {
  return !value;
}

/**
 * Check if value is truthy
 */
export function isTruthy(value: any): boolean {
  return !!value;
}

/**
 * Check if value is a negative number
 */
export function isNegative(value: any): boolean {
  return isNumber(value) && value < 0;
}

/**
 * Check if value is a positive number
 */
export function isPositive(value: any): boolean {
  return isNumber(value) && value > 0;
}

/**
 * Check if value equals zero
 */
export function isZero(value: any): boolean {
  return isNumber(value) && value === 0;
}

/**
 * Check if value is an integer
 */
export function isInteger(value: any): boolean {
  return Number.isInteger(value);
}

/**
 * Check if value is a floating-point number
 */
export function isFloat(value: any): boolean {
  return isNumber(value) && !Number.isInteger(value);
}

/**
 * Check if number is even
 */
export function isEven(value: any): boolean {
  return isInteger(value) && value % 2 === 0;
}

/**
 * Check if number is odd
 */
export function isOdd(value: any): boolean {
  return isInteger(value) && value % 2 !== 0;
}

/**
 * Check if number is prime
 */
export function isPrime(value: any): boolean {
  if (!isInteger(value) || value < 2) return false;
  if (value === 2) return true;
  if (value % 2 === 0) return false;
  for (let i = 3; i * i <= value; i += 2) {
    if (value % i === 0) return false;
  }
  return true;
}

/**
 * Check if string is valid email format
 */
export function isEmail(value: any): boolean {
  if (!isString(value)) return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value);
}

/**
 * Check if string is valid URL format
 */
export function isUrl(value: any): boolean {
  if (!isString(value)) return false;
  try {
    new URL(value);
    return true;
  } catch {
    return false;
  }
}

/**
 * Check if string matches phone number pattern
 */
export function isPhoneNumber(value: any): boolean {
  if (!isString(value)) return false;
  const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
  return phoneRegex.test(value);
}

/**
 * Check if string is valid IP address (IPv4 or IPv6)
 */
export function isIpAddress(value: any): boolean {
  if (!isString(value)) return false;
  const ipv4Regex = /^(\d{1,3}\.){3}\d{1,3}$/;
  const ipv6Regex = /^([0-9a-fA-F]{0,4}:){2,7}[0-9a-fA-F]{0,4}$/;
  return ipv4Regex.test(value) || ipv6Regex.test(value);
}

/**
 * Check if string is a palindrome
 */
export function isPalindrome(value: any): boolean {
  if (!isString(value)) return false;
  const cleaned = value.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleaned === cleaned.split('').reverse().join('');
}

/**
 * Check if string contains only alphanumeric characters
 */
export function isAlphanumeric(value: any): boolean {
  if (!isString(value)) return false;
  return /^[a-zA-Z0-9]+$/.test(value);
}

/**
 * Check if value can be converted to a number
 */
export function isNumeric(value: any): boolean {
  return !isNaN(parseFloat(value)) && isFinite(value);
}
