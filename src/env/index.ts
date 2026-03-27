// ============================================================================
// Environment Utilities Module
// ============================================================================

/**
 * Get environment variable
 */
export function getEnv(key: string, defaultValue?: any): any {
  if (typeof process !== "undefined" && process.env) {
    return process.env[key] ?? defaultValue;
  }
  return defaultValue;
}

/**
 * Check if development mode
 */
export function isDevelopment(): boolean {
  return getEnv("NODE_ENV") === "development";
}

/**
 * Check if production mode
 */
export function isProduction(): boolean {
  return getEnv("NODE_ENV") === "production";
}

/**
 * Check if testing mode
 */
export function isTesting(): boolean {
  return getEnv("NODE_ENV") === "test";
}

/**
 * Get Node.js version
 */
export function getNodeVersion(): string {
  if (typeof process !== "undefined" && process.version) {
    return process.version;
  }
  return "unknown";
}

/**
 * Get OS platform
 */
export function getPlatform(): string {
  if (typeof process !== "undefined" && process.platform) {
    return process.platform;
  }
  return "unknown";
}

/**
 * Get CPU architecture
 */
export function getArch(): string {
  if (typeof process !== "undefined" && process.arch) {
    return process.arch;
  }
  return "unknown";
}

/**
 * Get current working directory
 */
export function getCwd(): string {
  if (typeof process !== "undefined" && process.cwd) {
    return process.cwd();
  }
  return "/";
}

/**
 * Get path to .env file
 */
export function getEnvPath(): string {
  return `${getCwd()}/.env`;
}

/**
 * Load environment from file (basic implementation)
 */
export function loadEnv(path: string): Record<string, string> {
  try {
    const fs = require("fs");
    const content = fs.readFileSync(path, "utf-8");
    const env: Record<string, string> = {};
    content.split("\n").forEach((line: string) => {
      const [key, ...valueParts] = line.split("=");
      if (key && key.trim() && !key.startsWith("#")) {
        env[key.trim()] = valueParts.join("=").trim();
      }
    });
    return env;
  } catch {
    return {};
  }
}
