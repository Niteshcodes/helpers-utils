// ============================================================================
// universal-helper-functions - Main Export File
// ============================================================================

// Export all modules
export * as Checks from './checks';
export * as String from './string';
export * as Array from './array';
export * as Object from './object';
export * as Math from './math';
export * as Date from './date';
export * as Async from './async';
export * as Validation from './validation';
export * as Color from './color';
export * as Encoding from './encoding';
export * as Dom from './dom';
export * as Express from './express';
export * as File from './file';
export * as Env from './env';

// Export commonly used functions directly
export {
  // Checks
  isBool,
  isTrue,
  isFalse,
  isBooleanLike,
  toBoolean,
  isNumber,
  isString,
  isArray,
  isObject,
  isNull,
  isUndefined,
  isNullOrUndefined,
  isFunction,
  isDate,
  isRegex,
  isPromise,
  isIterable,
  isEmpty,
  isFalsy,
  isTruthy,
  isNegative,
  isPositive,
  isZero,
  isInteger,
  isFloat,
  isEven,
  isOdd,
  isPrime,
  isEmail,
  isUrl,
  isPhoneNumber,
  isIpAddress,
  isPalindrome,
  isAlphanumeric,
  isNumeric,
} from './checks';

export {
  // String
  toCamelCase,
  toSnakeCase,
  toKebabCase,
  toPascalCase,
  toTitleCase,
  toConstantCase,
  toFlatCase,
  toPathCase,
  toDotCase,
  toSentenceCase,
  capitalize,
  decapitalize,
  reverse,
  repeat,
  truncate,
  padStart,
  padEnd,
  trim,
  trimStart,
  trimEnd,
  slugify,
  removeVowels,
  removeConsonants,
  removeWhitespace,
  removeSpecialChars,
  toCharArray,
  wordCount,
  charCount,
  replaceLast,
  template,
} from './string';

export {
  // Array
  chunk,
  compact,
  flatten,
  unique,
  uniqueBy,
  difference,
  intersection,
  union,
  shuffle,
  reverseArray,
  first,
  last,
  nth,
  remove,
  removeAt,
  rotate,
  sum,
  average,
  max,
  min,
  groupBy,
  sortBy,
  filterArray,
  mapArray,
  reduceArray,
  fillArray,
  includesArray,
} from './array';

export {
  // Object
  keys,
  values,
  entries,
  pick,
  omit,
  merge,
  deepMerge,
  clone,
  deepClone,
  hasProperty,
  hasOwnProperty,
  isEmptyObject,
  size,
  invert,
  mapKeys,
  mapValues,
  filterKeys,
  filterValues,
  defaults,
  findKey,
  findValue,
  toQueryString,
  fromQueryString,
  getPath,
  setPath,
} from './object';

export {
  // Math
  round,
  floor,
  ceil,
  abs,
  sqrt,
  pow,
  minValue,
  maxValue,
  clamp,
  random,
  randomInt,
  percentage,
  factorial,
  fibonacci,
  distance,
  averageNum,
  sumNum,
  median,
  mode,
  standardDeviation,
  variance,
  gcd,
  lcm,
  isDivisibleBy,
} from './math';

export {
  // Date
  now,
  today,
  yesterday,
  tomorrow,
  addDays,
  subtractDays,
  addMonths,
  addYears,
  startOfDay,
  endOfDay,
  startOfMonth,
  endOfMonth,
  startOfYear,
  endOfYear,
  format,
  parse,
  difference as dateDistance,
  isSameDay,
  isBefore,
  isAfter,
  isBetween,
  isToday,
  isLeapYear,
  daysInMonth,
  weekOfYear,
  dayOfYear,
  getAge,
} from './date';

export {
  // Async
  delay,
  timeout,
  retry,
  racePromises,
  allPromises,
  allSettledPromises,
  anyPromise,
  waterfall,
  parallel,
  memoizeAsync,
  debounce,
  throttle,
  once,
  cache,
} from './async';

export {
  // Validation
  isStrongPassword,
  isWeakPassword,
  isCreditCard,
  isPostalCode,
  isCurrency,
  isHexColor,
  isRgbColor,
  isUsername,
  isSlug,
  isUuid,
  isMd5,
  isSha1,
  isSha256,
  isJSON,
  isBase64,
  isUrlValid,
  isIpAddressValid,
  isPort,
  isMimeType,
  isDateString,
} from './validation';

export {
  // Color
  hexToRgb,
  rgbToHex,
  hexToHsl,
  rgbToHsl,
  hslToHex,
  hslToRgb,
  lighten,
  darken,
  saturate,
  desaturate,
  rotateHue,
  complementColor,
  findSimilarColor,
  // Format
  formatBytes,
  formatNumber,
  formatCurrency,
  formatPercent,
  formatDuration,
  formatTime,
  formatPhone,
  formatSSN,
  formatCreditCard,
  formatJson,
} from './color';

export {
  // Encoding
  toBase64,
  fromBase64,
  toUrlEncoded,
  fromUrlEncoded,
  toHex,
  fromHex,
  toMorse,
  fromMorse,
  caesarCipher,
  md5,
  sha1,
  sha256,
} from './encoding';

export {
  // DOM
  getQueryParam,
  getQueryParams,
  setQueryParam,
  removeQueryParam,
  getHash,
  setHash,
  getHostname,
  getPathname,
  getOrigin,
  redirect,
  reloadPage,
  goBack,
  goForward,
  isLocalHost,
  isDevelopment as isDevelopmentBrowser,
  getScreenSize,
  getScrollPosition,
  scrollToTop,
  scrollToElement,
  getClipboard,
  setClipboard,
  isOnline,
  addEventListenerDom,
  removeEventListenerDom,
  stopPropagation,
  preventDefault,
  getLocalStorage,
  setLocalStorage,
  removeLocalStorage,
  getSessionStorage,
  setSessionStorage,
} from './dom';

export {
  // Express
  parseJsonBody,
  getClientIp,
  setResponseHeaders,
  sendError,
  sendSuccess,
  isJsonRequest,
  getContentType,
  generateRequestId,
  createErrorResponse,
  createSuccessResponse,
  validateRequired,
  sanitizeData,
  getCookie,
  setCookie,
  removeCookie,
  getAuthHeader,
  extractBearerToken,
  rateLimit,
} from './express';

export {
  // File
  basename,
  dirname,
  extname,
  join,
  resolve,
  normalize,
  relative,
  isAbsolute,
  getFileMimeType,
  getFileExtension,
  isValidPath,
  fileExists,
  readFile,
  writeFile,
  deleteFile,
  getFileSize,
} from './file';

export {
  // Env
  getEnv,
  isDevelopment,
  isProduction,
  isTesting,
  getNodeVersion,
  getPlatform,
  getArch,
  getCwd,
  getEnvPath,
  loadEnv,
} from './env';
