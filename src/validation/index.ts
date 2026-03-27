// ============================================================================
// Validation Utilities Module
// ============================================================================

/**
 * Validate strong password
 */
export function isStrongPassword(password: string): boolean {
  if (password.length < 8) return false;
  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
  return hasUpper && hasLower && hasNumber && hasSpecial;
}

/**
 * Check if password is weak
 */
export function isWeakPassword(password: string): boolean {
  return !isStrongPassword(password);
}

/**
 * Validate credit card number (Luhn algorithm)
 */
export function isCreditCard(number: string): boolean {
  const cleaned = number.replace(/\D/g, "");
  if (cleaned.length < 13 || cleaned.length > 19) return false;

  let sum = 0;
  let isEven = false;

  for (let i = cleaned.length - 1; i >= 0; i--) {
    let digit = parseInt(cleaned[i], 10);

    if (isEven) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }

    sum += digit;
    isEven = !isEven;
  }

  return sum % 10 === 0;
}

/**
 * Validate postal code format
 */
export function isPostalCode(code: string, country: string = "US"): boolean {
  const patterns: Record<string, RegExp> = {
    US: /^\d{5}(-\d{4})?$/,
    CA: /^[A-Z]\d[A-Z]\s?\d[A-Z]\d$/,
    UK: /^[A-Z]{1,2}\d[A-Z\d]?\s?\d[A-Z]{2}$/i,
    DE: /^\d{5}$/,
    FR: /^\d{5}$/,
  };
  const pattern = patterns[country];
  return pattern ? pattern.test(code) : false;
}

/**
 * Validate currency format
 */
export function isCurrency(value: string): boolean {
  const currencyRegex = /^\$?[0-9]{1,3}(,[0-9]{3})*(\.[0-9]{2})?$/;
  return currencyRegex.test(value);
}

/**
 * Validate hex color
 */
export function isHexColor(value: string): boolean {
  return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(value);
}

/**
 * Validate RGB color
 */
export function isRgbColor(value: string): boolean {
  return /^rgb\(\s*\d{1,3}\s*,\s*\d{1,3}\s*,\s*\d{1,3}\s*\)$/.test(value);
}

/**
 * Validate username format
 */
export function isUsername(username: string): boolean {
  return /^[a-zA-Z0-9_-]{3,20}$/.test(username);
}

/**
 * Validate URL slug
 */
export function isSlug(slug: string): boolean {
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug);
}

/**
 * Validate UUID format
 */
export function isUuid(uuid: string): boolean {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(
    uuid,
  );
}

/**
 * Validate MD5 hash
 */
export function isMd5(hash: string): boolean {
  return /^[a-f0-9]{32}$/.test(hash);
}

/**
 * Validate SHA1 hash
 */
export function isSha1(hash: string): boolean {
  return /^[a-f0-9]{40}$/.test(hash);
}

/**
 * Validate SHA256 hash
 */
export function isSha256(hash: string): boolean {
  return /^[a-f0-9]{64}$/.test(hash);
}

/**
 * Validate JSON string
 */
export function isJSON(value: string): boolean {
  try {
    JSON.parse(value);
    return true;
  } catch {
    return false;
  }
}

/**
 * Validate Base64 string
 */
export function isBase64(value: string): boolean {
  try {
    return Buffer.from(value, "base64").toString("base64") === value;
  } catch {
    return /^[A-Za-z0-9+/]*={0,2}$/.test(value);
  }
}

/**
 * Validate URL
 */
export function isUrlValid(
  url: string,
  options: { requireProtocol?: boolean } = {},
): boolean {
  try {
    const parsed = new URL(url);
    if (options.requireProtocol && !parsed.protocol) return false;
    return true;
  } catch {
    return false;
  }
}

/**
 * Validate IP address
 */
export function isIpAddressValid(ip: string): boolean {
  const ipv4Regex = /^(\d{1,3}\.){3}\d{1,3}$/;
  const ipv6Regex = /^([0-9a-fA-F]{0,4}:){2,7}[0-9a-fA-F]{0,4}$/;
  return ipv4Regex.test(ip) || ipv6Regex.test(ip);
}

/**
 * Validate port number
 */
export function isPort(port: number | string): boolean {
  const p = typeof port === "string" ? parseInt(port, 10) : port;
  return p >= 0 && p <= 65535 && Number.isInteger(p);
}

/**
 * Validate MIME type
 */
export function isMimeType(type: string): boolean {
  return /^[a-z]+\/[a-z0-9\-\+\.]+$/i.test(type);
}

/**
 * Validate date string
 */
export function isDateString(value: string, format: string = "ISO"): boolean {
  if (format === "ISO") {
    return !isNaN(Date.parse(value));
  }
  // Add more format validations as needed
  return false;
}
