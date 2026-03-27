// ============================================================================
// Browser/DOM Utilities Module
// ============================================================================

/**
 * Get URL query parameter
 */
export function getQueryParam(name: string): string | null {
  if (typeof window === 'undefined') return null;
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

/**
 * Get all query parameters
 */
export function getQueryParams(): Record<string, string> {
  if (typeof window === 'undefined') return {};
  const obj: Record<string, string> = {};
  new URLSearchParams(window.location.search).forEach((value, key) => {
    obj[key] = value;
  });
  return obj;
}

/**
 * Set URL query parameter
 */
export function setQueryParam(name: string, value: string): void {
  if (typeof window === 'undefined') return;
  const params = new URLSearchParams(window.location.search);
  params.set(name, value);
  window.history.replaceState({}, '', `${window.location.pathname}?${params.toString()}`);
}

/**
 * Remove query parameter
 */
export function removeQueryParam(name: string): void {
  if (typeof window === 'undefined') return;
  const params = new URLSearchParams(window.location.search);
  params.delete(name);
  window.history.replaceState({}, '', `${window.location.pathname}?${params.toString()}`);
}

/**
 * Get URL hash/fragment
 */
export function getHash(): string {
  return typeof window !== 'undefined' ? window.location.hash.slice(1) : '';
}

/**
 * Set URL hash
 */
export function setHash(hash: string): void {
  if (typeof window !== 'undefined') {
    window.location.hash = hash;
  }
}

/**
 * Get current hostname
 */
export function getHostname(): string {
  return typeof window !== 'undefined' ? window.location.hostname : '';
}

/**
 * Get current pathname
 */
export function getPathname(): string {
  return typeof window !== 'undefined' ? window.location.pathname : '';
}

/**
 * Get origin URL
 */
export function getOrigin(): string {
  return typeof window !== 'undefined' ? window.location.origin : '';
}

/**
 * Redirect to URL
 */
export function redirect(url: string): void {
  if (typeof window !== 'undefined') {
    window.location.href = url;
  }
}

/**
 * Reload current page
 */
export function reloadPage(): void {
  if (typeof window !== 'undefined') {
    window.location.reload();
  }
}

/**
 * Go back in history
 */
export function goBack(): void {
  if (typeof window !== 'undefined') {
    window.history.back();
  }
}

/**
 * Go forward in history
 */
export function goForward(): void {
  if (typeof window !== 'undefined') {
    window.history.forward();
  }
}

/**
 * Check if running on localhost
 */
export function isLocalHost(): boolean {
  return typeof window !== 'undefined'
    ? window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
    : false;
}

/**
 * Check if in development
 */
export function isDevelopment(): boolean {
  return typeof process !== 'undefined' && process.env?.NODE_ENV === 'development';
}

/**
 * Get viewport dimensions
 */
export function getScreenSize(): { width: number; height: number } {
  if (typeof window === 'undefined') {
    return { width: 0, height: 0 };
  }
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
}

/**
 * Get current scroll position
 */
export function getScrollPosition(): { x: number; y: number } {
  if (typeof window === 'undefined') {
    return { x: 0, y: 0 };
  }
  return {
    x: window.scrollX || window.pageXOffset,
    y: window.scrollY || window.pageYOffset,
  };
}

/**
 * Scroll to top
 */
export function scrollToTop(): void {
  if (typeof window !== 'undefined') {
    window.scrollTo(0, 0);
  }
}

/**
 * Scroll to element
 */
export function scrollToElement(selector: string): void {
  if (typeof document === 'undefined') return;
  const element = document.querySelector(selector);
  element?.scrollIntoView({ behavior: 'smooth' });
}

/**
 * Get clipboard content
 */
export async function getClipboard(): Promise<string> {
  try {
    return await navigator.clipboard.readText();
  } catch {
    return '';
  }
}

/**
 * Copy text to clipboard
 */
export async function setClipboard(text: string): Promise<void> {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    // Fallback
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  }
}

/**
 * Check internet connectivity
 */
export function isOnline(): boolean {
  return typeof navigator !== 'undefined' ? navigator.onLine : false;
}

/**
 * Add event listener
 */
export function addEventListenerDom(
  target: EventTarget | null,
  event: string,
  handler: EventListener
): void {
  target?.addEventListener(event, handler);
}

/**
 * Remove event listener
 */
export function removeEventListenerDom(
  target: EventTarget | null,
  event: string,
  handler: EventListener
): void {
  target?.removeEventListener(event, handler);
}

/**
 * Stop event propagation
 */
export function stopPropagation(event: Event): void {
  event.stopPropagation();
}

/**
 * Prevent default action
 */
export function preventDefault(event: Event): void {
  event.preventDefault();
}

/**
 * Get from localStorage
 */
export function getLocalStorage(key: string): string | null {
  if (typeof window === 'undefined') return null;
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

/**
 * Set in localStorage
 */
export function setLocalStorage(key: string, value: string): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // Storage quota exceeded or private browsing
  }
}

/**
 * Remove from localStorage
 */
export function removeLocalStorage(key: string): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.removeItem(key);
  } catch {
    // Storage not available
  }
}

/**
 * Get from sessionStorage
 */
export function getSessionStorage(key: string): string | null {
  if (typeof window === 'undefined') return null;
  try {
    return window.sessionStorage.getItem(key);
  } catch {
    return null;
  }
}

/**
 * Set in sessionStorage
 */
export function setSessionStorage(key: string, value: string): void {
  if (typeof window === 'undefined') return;
  try {
    window.sessionStorage.setItem(key, value);
  } catch {
    // Storage not available
  }
}
