// ============================================================================
// File & Path Utilities Module
// ============================================================================

/**
 * Get filename from path
 */
export function basename(path: string): string {
  return path.split("/").pop() || "";
}

/**
 * Get directory from path
 */
export function dirname(path: string): string {
  const parts = path.split("/");
  parts.pop();
  return parts.join("/") || ".";
}

/**
 * Get file extension
 */
export function extname(path: string): string {
  const filename = basename(path);
  const index = filename.lastIndexOf(".");
  return index > 0 ? filename.slice(index) : "";
}

/**
 * Join path segments
 */
export function join(...paths: string[]): string {
  return paths
    .join("/")
    .split("/")
    .filter((p) => p && p !== ".")
    .join("/");
}

/**
 * Resolve absolute path
 */
export function resolve(...paths: string[]): string {
  let result = "";
  for (const path of paths) {
    if (path.startsWith("/")) {
      result = path;
    } else if (result) {
      result = join(result, path);
    } else {
      result = path;
    }
  }
  return result;
}

/**
 * Normalize path
 */
export function normalize(path: string): string {
  return path
    .replace(/\/{2,}/g, "/")
    .replace(/\/\.\//, "/")
    .replace(/\/\.(?=\/)|\/$/g, "");
}

/**
 * Get relative path from one path to another
 */
export function relative(from: string, to: string): string {
  const fromParts = from.split("/").filter(Boolean);
  const toParts = to.split("/").filter(Boolean);
  let common = 0;
  for (let i = 0; i < Math.min(fromParts.length, toParts.length); i++) {
    if (fromParts[i] === toParts[i]) common++;
    else break;
  }
  const ups = fromParts.length - common;
  const result = [...Array(ups).fill(".."), ...toParts.slice(common)].join("/");
  return result || ".";
}

/**
 * Check if path is absolute
 */
export function isAbsolute(path: string): boolean {
  return path.startsWith("/");
}

/**
 * Get MIME type from filename
 */
export function getFileMimeType(filename: string): string {
  const ext = extname(filename).toLowerCase();
  const mimeTypes: Record<string, string> = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "application/javascript",
    ".json": "application/json",
    ".xml": "application/xml",
    ".pdf": "application/pdf",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".gif": "image/gif",
    ".svg": "image/svg+xml",
    ".ico": "image/x-icon",
    ".mp3": "audio/mpeg",
    ".mp4": "video/mp4",
    ".txt": "text/plain",
    ".csv": "text/csv",
    ".zip": "application/zip",
  };
  return mimeTypes[ext] || "application/octet-stream";
}

/**
 * Get file extension (alias)
 */
export function getFileExtension(filename: string): string {
  return extname(filename);
}

/**
 * Validate path format
 */
export function isValidPath(path: string): boolean {
  // Check for invalid characters
  const invalidChars = /[<>:"|?*\x00-\x1f]/;
  return !invalidChars.test(path);
}

/**
 * Check if file exists (Node.js)
 */
export function fileExists(path: string): boolean {
  try {
    // This requires fs module in Node.js
    const fs = require("fs");
    return fs.existsSync(path);
  } catch {
    return false;
  }
}

/**
 * Read file contents (Node.js)
 */
export function readFile(
  path: string,
  encoding: string = "utf-8",
): string | null {
  try {
    const fs = require("fs");
    return fs.readFileSync(path, encoding);
  } catch {
    return null;
  }
}

/**
 * Write to file (Node.js)
 */
export function writeFile(path: string, data: string): boolean {
  try {
    const fs = require("fs");
    fs.writeFileSync(path, data);
    return true;
  } catch {
    return false;
  }
}

/**
 * Delete file (Node.js)
 */
export function deleteFile(path: string): boolean {
  try {
    const fs = require("fs");
    fs.unlinkSync(path);
    return true;
  } catch {
    return false;
  }
}

/**
 * Get file size (Node.js)
 */
export function getFileSize(path: string): number | null {
  try {
    const fs = require("fs");
    const stats = fs.statSync(path);
    return stats.size;
  } catch {
    return null;
  }
}
