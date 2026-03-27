// ============================================================================
// Object Utilities Module
// ============================================================================

/**
 * Get object keys
 */
export function keys<T extends Record<string, any>>(obj: T): (keyof T)[] {
  return Object.keys(obj) as (keyof T)[];
}

/**
 * Get object values
 */
export function values<T extends Record<string, any>>(obj: T): any[] {
  return Object.values(obj);
}

/**
 * Get object entries
 */
export function entries<T extends Record<string, any>>(
  obj: T,
): [keyof T, any][] {
  return Object.entries(obj) as [keyof T, any][];
}

/**
 * Pick specific properties from object
 */
export function pick<T extends Record<string, any>, K extends keyof T>(
  obj: T,
  keys: K[],
): Pick<T, K> {
  const result = {} as Pick<T, K>;
  keys.forEach((key) => {
    result[key] = obj[key];
  });
  return result;
}

/**
 * Omit specific properties from object
 */
export function omit<T extends Record<string, any>, K extends keyof T>(
  obj: T,
  keys: K[],
): Omit<T, K> {
  const result = { ...obj };
  keys.forEach((key) => {
    delete result[key];
  });
  return result as Omit<T, K>;
}

/**
 * Shallow merge objects
 */
export function merge<T extends Record<string, any>>(
  target: T,
  source: Partial<T>,
): T {
  return { ...target, ...source };
}

/**
 * Deep merge objects
 */
export function deepMerge<T extends Record<string, any>>(
  target: T,
  source: Partial<T>,
): T {
  const result = { ...target };
  for (const key in source) {
    if (source.hasOwnProperty(key)) {
      const sourceValue = source[key];
      const targetValue = result[key];
      if (
        sourceValue &&
        typeof sourceValue === "object" &&
        !Array.isArray(sourceValue) &&
        targetValue &&
        typeof targetValue === "object" &&
        !Array.isArray(targetValue)
      ) {
        result[key] = deepMerge(targetValue, sourceValue);
      } else {
        result[key] = sourceValue as any;
      }
    }
  }
  return result;
}

/**
 * Shallow clone object
 */
export function clone<T extends Record<string, any>>(obj: T): T {
  return { ...obj };
}

/**
 * Deep clone object
 */
export function deepClone<T>(obj: T): T {
  if (obj === null || typeof obj !== "object") return obj;
  if (obj instanceof Date) return new Date(obj.getTime()) as T;
  if (obj instanceof Array) {
    return obj.map((item) => deepClone(item)) as T;
  }
  if (obj instanceof Object) {
    const clonedObj: any = {};
    for (const key in obj) {
      clonedObj[key] = deepClone((obj as any)[key]);
    }
    return clonedObj;
  }
  return obj;
}

/**
 * Check if object has property
 */
export function hasProperty(obj: any, key: string): boolean {
  return key in obj;
}

/**
 * Check own property
 */
export function hasOwnProperty(obj: any, key: string): boolean {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

/**
 * Check if object is empty
 */
export function isEmptyObject(obj: Record<string, any>): boolean {
  return Object.keys(obj).length === 0;
}

/**
 * Get number of properties
 */
export function size(obj: Record<string, any>): number {
  return Object.keys(obj).length;
}

/**
 * Invert keys and values
 */
export function invert(obj: Record<string, any>): Record<string, any> {
  const result: Record<string, any> = {};
  for (const [key, val] of Object.entries(obj)) {
    result[val] = key;
  }
  return result;
}

/**
 * Transform all keys
 */
export function mapKeys<T extends Record<string, any>>(
  obj: T,
  fn: (key: string) => string,
): Record<string, any> {
  const result: Record<string, any> = {};
  for (const [key, val] of Object.entries(obj)) {
    result[fn(key)] = val;
  }
  return result;
}

/**
 * Transform all values
 */
export function mapValues<T extends Record<string, any>>(
  obj: T,
  fn: (val: any) => any,
): Record<string, any> {
  const result: Record<string, any> = {};
  for (const [key, val] of Object.entries(obj)) {
    result[key] = fn(val);
  }
  return result;
}

/**
 * Filter by key names
 */
export function filterKeys<T extends Record<string, any>>(
  obj: T,
  predicate: (key: string) => boolean,
): Partial<T> {
  const result: Partial<T> = {};
  for (const [key, val] of Object.entries(obj)) {
    if (predicate(key)) {
      result[key as keyof T] = val;
    }
  }
  return result;
}

/**
 * Filter by values
 */
export function filterValues<T extends Record<string, any>>(
  obj: T,
  predicate: (val: any) => boolean,
): Partial<T> {
  const result: Partial<T> = {};
  for (const [key, val] of Object.entries(obj)) {
    if (predicate(val)) {
      result[key as keyof T] = val;
    }
  }
  return result;
}

/**
 * Set default values
 */
export function defaults<T extends Record<string, any>>(
  obj: T,
  defaultObj: Partial<T>,
): T {
  const result = { ...obj };
  for (const key in defaultObj) {
    if (!(key in result)) {
      result[key] = defaultObj[key]!;
    }
  }
  return result;
}

/**
 * Find key by condition
 */
export function findKey<T extends Record<string, any>>(
  obj: T,
  predicate: (val: any) => boolean,
): string | undefined {
  for (const [key, val] of Object.entries(obj)) {
    if (predicate(val)) return key;
  }
  return undefined;
}

/**
 * Find value by condition
 */
export function findValue<T extends Record<string, any>>(
  obj: T,
  predicate: (val: any) => boolean,
): any {
  for (const val of Object.values(obj)) {
    if (predicate(val)) return val;
  }
  return undefined;
}

/**
 * Convert to URL query string
 */
export function toQueryString(obj: Record<string, any>): string {
  return Object.entries(obj)
    .map(
      ([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`,
    )
    .join("&");
}

/**
 * Parse query string to object
 */
export function fromQueryString(queryString: string): Record<string, any> {
  const obj: Record<string, any> = {};
  const params = new URLSearchParams(queryString);
  params.forEach((val, key) => {
    obj[key] = val;
  });
  return obj;
}

/**
 * Get nested value by path (lodash style)
 */
export function getPath(
  obj: any,
  path: string | string[],
  defaultValue?: any,
): any {
  const keys = typeof path === "string" ? path.split(".") : path;
  let result = obj;
  for (const key of keys) {
    result = result?.[key];
    if (result === undefined) return defaultValue;
  }
  return result;
}

/**
 * Set nested value by path
 */
export function setPath(obj: any, path: string | string[], value: any): any {
  const keys = typeof path === "string" ? path.split(".") : path;
  const lastKey = keys.pop()!;
  let current = obj;
  for (const key of keys) {
    if (!(key in current) || typeof current[key] !== "object") {
      current[key] = {};
    }
    current = current[key];
  }
  current[lastKey] = value;
  return obj;
}
