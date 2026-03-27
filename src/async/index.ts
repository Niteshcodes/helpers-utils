// ============================================================================
// Promise & Async Utilities Module
// ============================================================================

/**
 * Create a promise that resolves after delay
 */
export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Reject promise after timeout
 */
export function timeout<T>(promise: Promise<T>, ms: number): Promise<T> {
  return Promise.race([
    promise,
    delay(ms).then(() => {
      throw new Error(`Promise timeout after ${ms}ms`);
    }),
  ]);
}

/**
 * Retry promise with exponential backoff
 */
export async function retry<T>(
  fn: () => Promise<T>,
  options: {
    attempts?: number;
    delay?: number;
    backoff?: 'linear' | 'exponential';
    onRetry?: (attempt: number, error: Error) => void;
  } = {}
): Promise<T> {
  const { attempts = 3, delay: initialDelay = 1000, backoff = 'exponential', onRetry } = options;

  let lastError: Error;
  for (let i = 0; i < attempts; i++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error as Error;
      if (onRetry) onRetry(i + 1, lastError);
      if (i < attempts - 1) {
        const waitTime =
          backoff === 'exponential' ? initialDelay * Math.pow(2, i) : initialDelay * (i + 1);
        await delay(waitTime);
      }
    }
  }
  throw lastError!;
}

/**
 * Race multiple promises
 */
export function racePromises<T>(promises: Promise<T>[]): Promise<T> {
  return Promise.race(promises);
}

/**
 * Wait for all promises
 */
export function allPromises<T>(promises: Promise<T>[]): Promise<T[]> {
  return Promise.all(promises);
}

/**
 * Wait for all promises (settled)
 */
export function allSettledPromises<T>(promises: Promise<T>[]): Promise<PromiseSettledResult<T>[]> {
  return Promise.allSettled(promises);
}

/**
 * Return first fulfilled promise
 */
export function anyPromise<T>(promises: Promise<T>[]): Promise<T> {
  if (promises.length === 0) {
    return Promise.reject(new Error('No promises provided'));
  }

  // ES2020-compatible Promise.any behavior.
  return new Promise<T>((resolve, reject) => {
    let rejectedCount = 0;
    const errors: any[] = [];

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(resolve)
        .catch((error) => {
          errors[index] = error;
          rejectedCount += 1;
          if (rejectedCount === promises.length) {
            reject(new Error('All promises were rejected'));
          }
        });
    });
  });
}

/**
 * Execute tasks in sequence
 */
export async function waterfall<T>(tasks: Array<(arg: T) => Promise<T>>, initial: T): Promise<T> {
  let result = initial;
  for (const task of tasks) {
    result = await task(result);
  }
  return result;
}

/**
 * Execute tasks in parallel with concurrency limit
 */
export async function parallel<T>(
  tasks: Array<() => Promise<T>>,
  limit: number = Infinity
): Promise<T[]> {
  const results: T[] = [];
  const executing: Promise<void>[] = [];

  for (const [index, task] of tasks.entries()) {
    const promise = Promise.resolve()
      .then(() => task())
      .then((result) => {
        results[index] = result;
      });

    executing.push(promise);

    if (executing.length >= limit) {
      await Promise.race(executing);
      executing.splice(
        executing.findIndex((p) => p === promise),
        1
      );
    }
  }

  await Promise.all(executing);
  return results;
}

/**
 * Memoize async function results
 */
export function memoizeAsync<T extends (...args: any[]) => Promise<any>>(
  fn: T,
  options: { ttl?: number } = {}
): T {
  const cache = new Map<string, { value: any; expires: number }>();

  return (async (...args: any[]) => {
    const key = JSON.stringify(args);
    const cached = cache.get(key);

    if (cached && cached.expires > Date.now()) {
      return cached.value;
    }

    const value = await fn(...args);
    cache.set(key, {
      value,
      expires: Date.now() + (options.ttl || Infinity),
    });

    return value;
  }) as T;
}

/**
 * Debounce function calls
 */
export function debounce<T extends (...args: any[]) => any>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout | null = null;

  return (...args: Parameters<T>) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
}

/**
 * Throttle function calls
 */
export function throttle<T extends (...args: any[]) => any>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let lastCall = 0;

  return (...args: Parameters<T>) => {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      fn(...args);
    }
  };
}

/**
 * Execute function only once
 */
export function once<T extends (...args: any[]) => any>(fn: T): T {
  let called = false;
  let result: any;

  return ((...args: Parameters<T>) => {
    if (!called) {
      called = true;
      result = fn(...args);
    }
    return result;
  }) as T;
}

/**
 * Cache function results with TTL
 */
export function cache<T extends (...args: any[]) => any>(fn: T, ttl: number = Infinity): T {
  const cache = new Map<string, { value: any; expires: number }>();

  return ((...args: Parameters<T>) => {
    const key = JSON.stringify(args);
    const cached = cache.get(key);

    if (cached && cached.expires > Date.now()) {
      return cached.value;
    }

    const value = fn(...args);
    cache.set(key, {
      value,
      expires: Date.now() + ttl,
    });

    return value;
  }) as T;
}
