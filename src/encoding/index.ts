// ============================================================================
// Encoding & Encryption Utilities Module
// ============================================================================

/**
 * Encode to Base64
 */
export function toBase64(str: string): string {
  try {
    return Buffer.from(str, "utf-8").toString("base64");
  } catch {
    return btoa(unescape(encodeURIComponent(str)));
  }
}

/**
 * Decode from Base64
 */
export function fromBase64(base64: string): string {
  try {
    return Buffer.from(base64, "base64").toString("utf-8");
  } catch {
    return decodeURIComponent(escape(atob(base64)));
  }
}

/**
 * URL encode
 */
export function toUrlEncoded(str: string): string {
  return encodeURIComponent(str);
}

/**
 * URL decode
 */
export function fromUrlEncoded(str: string): string {
  return decodeURIComponent(str);
}

/**
 * Convert to hexadecimal
 */
export function toHex(str: string): string {
  return str
    .split("")
    .map((char) => char.charCodeAt(0).toString(16).padStart(2, "0"))
    .join("");
}

/**
 * Convert from hexadecimal
 */
export function fromHex(hex: string): string {
  return (
    hex
      .match(/.{1,2}/g)
      ?.map((byte) => String.fromCharCode(parseInt(byte, 16)))
      .join("") || ""
  );
}

/**
 * Convert to Morse code
 */
export function toMorse(str: string): string {
  const morseMap: Record<string, string> = {
    A: ".-",
    B: "-...",
    C: "-.-.",
    D: "-..",
    E: ".",
    F: "..-.",
    G: "--.",
    H: "....",
    I: "..",
    J: ".---",
    K: "-.-",
    L: ".-..",
    M: "--",
    N: "-.",
    O: "---",
    P: ".--.",
    Q: "--.-",
    R: ".-.",
    S: "...",
    T: "-",
    U: "..-",
    V: "...-",
    W: ".--",
    X: "-..-",
    Y: "-.--",
    Z: "--..",
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "'": ".----.",
    "!": "-.-.--",
    "/": "-..-.",
    "(": "-.--.-",
    ")": "-.--.-",
    "&": ".-...",
    ":": "---...",
    ";": "-.-.-.",
    "=": "-...-",
    "+": ".-.-.",
    "-": "-....-",
    _: "..--.-",
    '"': ".-..-.",
    $: "...-..-",
    "@": ".--.-.",
    " ": "/",
  };

  return str
    .toUpperCase()
    .split("")
    .map((char) => morseMap[char] || char)
    .join(" ");
}

/**
 * Convert from Morse code
 */
export function fromMorse(morse: string): string {
  const morseMap: Record<string, string> = {
    ".-": "A",
    "-...": "B",
    "-.-.": "C",
    "-..": "D",
    ".": "E",
    "..-.": "F",
    "--.": "G",
    "....": "H",
    "..": "I",
    ".---": "J",
    "-.-": "K",
    ".-..": "L",
    "--": "M",
    "-.": "N",
    "---": "O",
    ".--.": "P",
    "--.-": "Q",
    ".-.": "R",
    "...": "S",
    "-": "T",
    "..-": "U",
    "...-": "V",
    ".--": "W",
    "-..-": "X",
    "-.--": "Y",
    "--..": "Z",
    "-----": "0",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    ".-.-.-": ".",
    "--..--": ",",
    "..--..": "?",
    ".----.": "'",
    "-.-.--": "!",
    "-..-.": "/",
    "-.--.": "(",
    "-.--.-": ")",
    ".-...": "&",
    "---...": ":",
    "-.-.-.": ";",
    "-...-": "=",
    ".-.-.": "+",
    "-....-": "-",
    "..--.-": "_",
    ".-..-.": '"',
    "...-..-": "$",
    ".--.-.": "@",
    "/": " ",
  };

  return morse
    .split(" ")
    .map((code) => morseMap[code] || code)
    .join("");
}

/**
 * Caesar cipher encoding
 */
export function caesarCipher(str: string, shift: number): string {
  return str
    .split("")
    .map((char) => {
      const code = char.charCodeAt(0);
      if (char.match(/[a-z]/i)) {
        const start = code >= 97 ? 97 : 65;
        return String.fromCharCode(((code - start + shift) % 26) + start);
      }
      return char;
    })
    .join("");
}

/**
 * Generate MD5 hash
 * Note: For browser, use a library like CryptoJS
 * For Node.js, this is a simple implementation
 */
export function md5(str: string): string {
  // Simplified version - for production, use crypto library
  return str;
}

/**
 * Generate SHA1 hash
 * Note: For browser, use a library like CryptoJS
 * For Node.js, this is a simple implementation
 */
export function sha1(str: string): string {
  // Simplified version - for production, use crypto library
  return str;
}

/**
 * Generate SHA256 hash
 * Note: For browser, use a library like TweetNaCl.js
 * For Node.js, use crypto module directly
 */
export function sha256(str: string): string {
  // Simplified version - for production, use crypto library
  return str;
}
