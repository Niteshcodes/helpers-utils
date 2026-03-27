// ============================================================================
// Color & Format Utilities Module
// ============================================================================

// ============================================================================
// Color Utilities
// ============================================================================

/**
 * Convert hex to RGB
 */
export function hexToRgb(
  hex: string,
): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

/**
 * Convert RGB to hex
 */
export function rgbToHex(r: number, g: number, b: number): string {
  return `#${[r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("")}`;
}

/**
 * Convert hex to HSL
 */
export function hexToHsl(
  hex: string,
): { h: number; s: number; l: number } | null {
  const rgb = hexToRgb(hex);
  if (!rgb) return null;
  return rgbToHsl(rgb.r, rgb.g, rgb.b);
}

/**
 * Convert RGB to HSL
 */
export function rgbToHsl(
  r: number,
  g: number,
  b: number,
): { h: number; s: number; l: number } {
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0,
    s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
        break;
      case g:
        h = ((b - r) / d + 2) / 6;
        break;
      case b:
        h = ((r - g) / d + 4) / 6;
        break;
    }
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  };
}

/**
 * Convert HSL to hex
 */
export function hslToHex(h: number, s: number, l: number): string {
  const rgb = hslToRgb(h, s, l);
  return rgbToHex(rgb.r, rgb.g, rgb.b);
}

/**
 * Convert HSL to RGB
 */
export function hslToRgb(
  h: number,
  s: number,
  l: number,
): { r: number; g: number; b: number } {
  h = h / 360;
  s = s / 100;
  l = l / 100;

  let r, g, b;

  if (s === 0) {
    r = g = b = l;
  } else {
    const hue2rgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255),
  };
}

/**
 * Lighten color
 */
export function lighten(color: string, amount: number): string {
  const hsl = hexToHsl(color);
  if (!hsl) return color;
  hsl.l = Math.min(100, hsl.l + amount);
  return hslToHex(hsl.h, hsl.s, hsl.l);
}

/**
 * Darken color
 */
export function darken(color: string, amount: number): string {
  return lighten(color, -amount);
}

/**
 * Increase saturation
 */
export function saturate(color: string, amount: number): string {
  const hsl = hexToHsl(color);
  if (!hsl) return color;
  hsl.s = Math.min(100, hsl.s + amount);
  return hslToHex(hsl.h, hsl.s, hsl.l);
}

/**
 * Decrease saturation
 */
export function desaturate(color: string, amount: number): string {
  return saturate(color, -amount);
}

/**
 * Rotate hue
 */
export function rotateHue(color: string, degrees: number): string {
  const hsl = hexToHsl(color);
  if (!hsl) return color;
  hsl.h = (hsl.h + degrees) % 360;
  return hslToHex(hsl.h, hsl.s, hsl.l);
}

/**
 * Get complementary color
 */
export function complementColor(color: string): string {
  return rotateHue(color, 180);
}

/**
 * Find closest color match from array
 */
export function findSimilarColor(color: string, colors: string[]): string {
  const rgb = hexToRgb(color);
  if (!rgb) return colors[0];

  let closest = colors[0];
  let minDistance = Infinity;

  for (const candidate of colors) {
    const candidateRgb = hexToRgb(candidate);
    if (!candidateRgb) continue;

    const distance = Math.sqrt(
      Math.pow(rgb.r - candidateRgb.r, 2) +
        Math.pow(rgb.g - candidateRgb.g, 2) +
        Math.pow(rgb.b - candidateRgb.b, 2),
    );

    if (distance < minDistance) {
      minDistance = distance;
      closest = candidate;
    }
  }

  return closest;
}

// ============================================================================
// Format Utilities
// ============================================================================

/**
 * Format bytes to human readable
 */
export function formatBytes(bytes: number, decimals: number = 2): string {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return (
    Math.round((bytes / Math.pow(k, i)) * Math.pow(10, decimals)) /
      Math.pow(10, decimals) +
    " " +
    sizes[i]
  );
}

/**
 * Format number with separators
 */
export function formatNumber(
  num: number,
  options: { separators?: boolean; decimals?: number } = {},
): string {
  const { separators = true, decimals = 0 } = options;
  const fixed = num.toFixed(decimals);
  return separators ? fixed.replace(/\B(?=(\d{3})+(?!\d))/g, ",") : fixed;
}

/**
 * Format as currency
 */
export function formatCurrency(
  amount: number,
  currency: string = "USD",
): string {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  });
  return formatter.format(amount);
}

/**
 * Format as percentage
 */
export function formatPercent(value: number, decimals: number = 0): string {
  return `${value.toFixed(decimals)}%`;
}

/**
 * Format milliseconds to readable duration
 */
export function formatDuration(ms: number): string {
  const seconds = Math.floor((ms / 1000) % 60);
  const minutes = Math.floor((ms / (1000 * 60)) % 60);
  const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
  const days = Math.floor(ms / (1000 * 60 * 60 * 24));

  const parts = [];
  if (days > 0) parts.push(`${days}d`);
  if (hours > 0) parts.push(`${hours}h`);
  if (minutes > 0) parts.push(`${minutes}m`);
  if (seconds > 0 || parts.length === 0) parts.push(`${seconds}s`);

  return parts.join(" ");
}

/**
 * Format seconds to HH:MM:SS
 */
export function formatTime(seconds: number): string {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

/**
 * Format phone number
 */
export function formatPhone(phone: string, format: string = "US"): string {
  const cleaned = phone.replace(/\D/g, "");
  if (format === "US" && cleaned.length === 10) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  }
  return phone;
}

/**
 * Format social security number
 */
export function formatSSN(ssn: string): string {
  const cleaned = ssn.replace(/\D/g, "");
  if (cleaned.length === 9) {
    return `${cleaned.slice(0, 3)}-${cleaned.slice(3, 5)}-${cleaned.slice(5)}`;
  }
  return ssn;
}

/**
 * Format credit card number
 */
export function formatCreditCard(card: string): string {
  const cleaned = card.replace(/\D/g, "");
  return cleaned.replace(/(.{4})/g, "$1 ").trim();
}

/**
 * Format JSON with indentation
 */
export function formatJson(obj: any, space: number = 2): string {
  return JSON.stringify(obj, null, space);
}
