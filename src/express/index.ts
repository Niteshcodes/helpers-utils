// ============================================================================
// Express/Server Utilities Module
// ============================================================================

/**
 * Safely parse JSON body
 */
export function parseJsonBody(body: any): any {
  try {
    return typeof body === 'string' ? JSON.parse(body) : body;
  } catch {
    return null;
  }
}

/**
 * Extract client IP address from request
 */
export function getClientIp(req: any): string {
  return (
    req.ip ||
    req.connection?.remoteAddress ||
    req.socket?.remoteAddress ||
    req.headers?.['x-forwarded-for']?.split(',')[0] ||
    'unknown'
  );
}

/**
 * Set multiple response headers
 */
export function setResponseHeaders(res: any, headers: Record<string, string>): void {
  Object.entries(headers).forEach(([key, value]) => {
    res.setHeader(key, value);
  });
}

/**
 * Send error response
 */
export function sendError(res: any, statusCode: number, message: string): void {
  res.status(statusCode).json({
    success: false,
    error: {
      code: statusCode,
      message,
    },
  });
}

/**
 * Send success response
 */
export function sendSuccess(res: any, data: any, statusCode: number = 200): void {
  res.status(statusCode).json({
    success: true,
    data,
  });
}

/**
 * Check if request is JSON
 */
export function isJsonRequest(req: any): boolean {
  const contentType = req.headers['content-type'];
  return contentType ? contentType.includes('application/json') : false;
}

/**
 * Get request content type
 */
export function getContentType(req: any): string {
  return req.headers['content-type'] || 'application/octet-stream';
}

/**
 * Generate unique request ID
 */
export function generateRequestId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Format error for response
 */
export function createErrorResponse(error: any): {
  success: boolean;
  error: { message: string; stack?: string };
} {
  return {
    success: false,
    error: {
      message: error?.message || 'Internal server error',
      stack: process.env.NODE_ENV === 'development' ? error?.stack : undefined,
    },
  };
}

/**
 * Format data for success response
 */
export function createSuccessResponse(data: any): {
  success: boolean;
  data: any;
} {
  return {
    success: true,
    data,
  };
}

/**
 * Validate required fields
 */
export function validateRequired(
  data: any,
  fields: string[]
): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];
  fields.forEach((field) => {
    if (
      !(field in data) ||
      data[field] === null ||
      data[field] === undefined ||
      data[field] === ''
    ) {
      errors.push(`${field} is required`);
    }
  });
  return {
    isValid: errors.length === 0,
    errors,
  };
}

/**
 * Remove sensitive fields from data
 */
export function sanitizeData(
  data: any,
  sensitiveFields: string[] = ['password', 'token', 'secret']
): any {
  const sanitized = { ...data };
  sensitiveFields.forEach((field) => {
    delete sanitized[field];
  });
  return sanitized;
}

/**
 * Get cookie value from request
 */
export function getCookie(req: any, name: string): string | undefined {
  const cookies = parseCookies(req.headers.cookie);
  return cookies[name];
}

/**
 * Parse cookies
 */
function parseCookies(cookieHeader: string = ''): Record<string, string> {
  const cookies: Record<string, string> = {};
  cookieHeader.split(';').forEach((cookie) => {
    const [name, value] = cookie.trim().split('=');
    if (name && value) {
      cookies[name] = decodeURIComponent(value);
    }
  });
  return cookies;
}

/**
 * Set cookie in response
 */
type CookieOptions = {
  maxAge?: number;
  httpOnly?: boolean;
  secure?: boolean;
  path?: string;
  domain?: string;
  sameSite?: 'Strict' | 'Lax' | 'None';
};

export function setCookie(
  res: any,
  name: string,
  value: string,
  options: CookieOptions = {}
): void {
  const defaults: CookieOptions = {
    maxAge: 3600000,
    httpOnly: true,
    secure: false,
  };
  const opts: CookieOptions = { ...defaults, ...options };
  let cookieStr = `${name}=${encodeURIComponent(value)}`;
  if (opts.maxAge) cookieStr += `; Max-Age=${opts.maxAge}`;
  if (opts.path) cookieStr += `; Path=${opts.path}`;
  if (opts.domain) cookieStr += `; Domain=${opts.domain}`;
  if (opts.secure) cookieStr += '; Secure';
  if (opts.httpOnly) cookieStr += '; HttpOnly';
  if (opts.sameSite) cookieStr += `; SameSite=${opts.sameSite}`;
  res.setHeader('Set-Cookie', cookieStr);
}

/**
 * Remove cookie
 */
export function removeCookie(res: any, name: string): void {
  setCookie(res, name, '', { maxAge: 0 });
}

/**
 * Get authorization header
 */
export function getAuthHeader(req: any): string | undefined {
  return req.headers.authorization;
}

/**
 * Extract Bearer token from authorization header
 */
export function extractBearerToken(req: any): string | null {
  const authHeader = getAuthHeader(req);
  if (!authHeader || !authHeader.startsWith('Bearer ')) return null;
  return authHeader.slice(7);
}

/**
 * Simple rate limiting middleware helper
 */
export function rateLimit(
  req: any,
  options: { windowMs?: number; maxRequests?: number } = {}
): boolean {
  const { windowMs = 60000, maxRequests = 100 } = options;
  const ip = getClientIp(req);
  const now = Date.now();
  const key = `ratelimit:${ip}`;

  // In production, use Redis or similar
  // This is a simple in-memory implementation
  const store = ((global as any).__rateLimit = (global as any).__rateLimit || {});
  const record = store[key];

  if (!record || now - record.startTime > windowMs) {
    store[key] = { startTime: now, count: 1 };
    return true;
  }

  if (record.count < maxRequests) {
    record.count++;
    return true;
  }

  return false;
}
