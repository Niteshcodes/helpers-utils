// ============================================================================
// String Casing & Manipulation Module
// ============================================================================

/**
 * Convert string to camelCase
 * @example toCamelCase('hello-world') => 'helloWorld'
 */
export function toCamelCase(str: string): string {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) =>
      index === 0 ? word.toLowerCase() : word.toUpperCase(),
    )
    .replace(/[\s_-]+/g, "");
}

/**
 * Convert string to snake_case
 * @example toSnakeCase('helloWorld') => 'hello_world'
 */
export function toSnakeCase(str: string): string {
  return str
    .replace(/([a-z])([A-Z])/g, "$1_$2")
    .replace(/[\s-]+/g, "_")
    .toLowerCase();
}

/**
 * Convert string to kebab-case
 * @example toKebabCase('helloWorld') => 'hello-world'
 */
export function toKebabCase(str: string): string {
  return str
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase();
}

/**
 * Convert string to PascalCase
 * @example toPascalCase('hello_world') => 'HelloWorld'
 */
export function toPascalCase(str: string): string {
  return str
    .split(/[\s_-]+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("");
}

/**
 * Convert string to Title Case
 * @example toTitleCase('hello world') => 'Hello World'
 */
export function toTitleCase(str: string): string {
  return str.replace(
    /\w\S*/g,
    (txt) => txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase(),
  );
}

/**
 * Convert string to CONSTANT_CASE
 * @example toConstantCase('helloWorld') => 'HELLO_WORLD'
 */
export function toConstantCase(str: string): string {
  return toSnakeCase(str).toUpperCase();
}

/**
 * Convert string to flatcase (no separators)
 * @example toFlatCase('hello-world') => 'helloworld'
 */
export function toFlatCase(str: string): string {
  return str.replace(/[\s_-]+/g, "").toLowerCase();
}

/**
 * Convert string to path/case
 * @example toPathCase('helloWorld') => 'hello/world'
 */
export function toPathCase(str: string): string {
  return str
    .replace(/([a-z])([A-Z])/g, "$1/$2")
    .replace(/[\s_]+/g, "/")
    .toLowerCase();
}

/**
 * Convert string to dot.case
 * @example toDotCase('helloWorld') => 'hello.world'
 */
export function toDotCase(str: string): string {
  return str
    .replace(/([a-z])([A-Z])/g, "$1.$2")
    .replace(/[\s_-]+/g, ".")
    .toLowerCase();
}

/**
 * Convert string to Sentence case
 * @example toSentenceCase('helloWorld') => 'Hello world'
 */
export function toSentenceCase(str: string): string {
  const result = str
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/[\s_-]+/g, " ")
    .toLowerCase();
  return result.charAt(0).toUpperCase() + result.slice(1);
}

/**
 * Capitalize first letter of string
 * @example capitalize('hello') => 'Hello'
 */
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Remove capitalization from first letter
 * @example decapitalize('Hello') => 'hello'
 */
export function decapitalize(str: string): string {
  return str.charAt(0).toLowerCase() + str.slice(1);
}

/**
 * Reverse string characters
 * @example reverse('hello') => 'olleh'
 */
export function reverse(str: string): string {
  return str.split("").reverse().join("");
}

/**
 * Repeat string n times
 * @example repeat('ha', 3) => 'hahaha'
 */
export function repeat(str: string, count: number): string {
  return str.repeat(Math.max(0, count));
}

/**
 * Truncate string with ellipsis
 * @example truncate('This is a long string', 10) => 'This is...'
 */
export function truncate(
  str: string,
  length: number,
  suffix: string = "...",
): string {
  if (str.length <= length) return str;
  return str.slice(0, Math.max(0, length - suffix.length)) + suffix;
}

/**
 * Pad string from start
 * @example padStart('5', 3, '0') => '005'
 */
export function padStart(
  str: string,
  length: number,
  pad: string = " ",
): string {
  return str.padStart(length, pad);
}

/**
 * Pad string from end
 * @example padEnd('5', 3, '0') => '500'
 */
export function padEnd(str: string, length: number, pad: string = " "): string {
  return str.padEnd(length, pad);
}

/**
 * Trim whitespace (native trim wrapper)
 */
export function trim(str: string): string {
  return str.trim();
}

/**
 * Remove leading whitespace
 */
export function trimStart(str: string): string {
  return str.trimStart();
}

/**
 * Remove trailing whitespace
 */
export function trimEnd(str: string): string {
  return str.trimEnd();
}

/**
 * Convert to URL-friendly slug
 * @example slugify('Hello World Example') => 'hello-world-example'
 */
export function slugify(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Remove all vowels from string
 */
export function removeVowels(str: string): string {
  return str.replace(/[aeiouAEIOU]/g, "");
}

/**
 * Remove all consonants from string
 */
export function removeConsonants(str: string): string {
  return str.replace(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g, "");
}

/**
 * Remove all whitespace
 */
export function removeWhitespace(str: string): string {
  return str.replace(/\s+/g, "");
}

/**
 * Remove special characters
 */
export function removeSpecialChars(str: string): string {
  return str.replace(/[^\w\s]/g, "");
}

/**
 * Convert string to character array
 */
export function toCharArray(str: string): string[] {
  return str.split("");
}

/**
 * Count words in string
 */
export function wordCount(str: string): number {
  const matches = str.trim().match(/\S+/g);
  return matches ? matches.length : 0;
}

/**
 * Count unique characters
 */
export function charCount(str: string): number {
  return new Set(str).size;
}

/**
 * Replace last occurrence
 */
export function replaceLast(
  str: string,
  search: string,
  replace: string,
): string {
  const index = str.lastIndexOf(search);
  if (index === -1) return str;
  return str.slice(0, index) + replace + str.slice(index + search.length);
}

/**
 * Simple template string replacement
 * @example template('Hello {name}', { name: 'World' }) => 'Hello World'
 */
export function template(str: string, data: Record<string, any>): string {
  return str.replace(/\{(\w+)\}/g, (match, key) => String(data[key] ?? match));
}
