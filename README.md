# @helpers/utils - Utility Helpers Library

A lightweight, zero-dependency utility library providing a comprehensive collection of helper functions, type checks, string manipulation utilities, and more for JavaScript/TypeScript projects. Framework-agnostic - works with any framework, library, or vanilla JavaScript.

## 📦 Installation

```bash
npm install @helpers/utils
# or
yarn add @helpers/utils
# or
pnpm add @helpers/utils
```

## 🎯 Features

### 1. Type Checks (31 Functions)
Robust type checking utilities for common JavaScript types and patterns.

#### Available Checks
- `isBool(value)` - Check if value is a boolean
- `isNegative(value)` - Check if number is negative
- `isPositive(value)` - Check if number is positive
- `isZero(value)` - Check if value equals zero
- `isNumber(value)` - Check if value is a number
- `isString(value)` - Check if value is a string
- `isArray(value)` - Check if value is an array
- `isObject(value)` - Check if value is a plain object
- `isNull(value)` - Check if value is null
- `isUndefined(value)` - Check if value is undefined
- `isNullOrUndefined(value)` - Check if value is null or undefined
- `isFunction(value)` - Check if value is a function
- `isDate(value)` - Check if value is a Date object
- `isRegex(value)` - Check if value is a RegExp
- `isPromise(value)` - Check if value is a Promise
- `isIterable(value)` - Check if value is iterable
- `isEmpty(value)` - Check if value is empty (string, array, object, null, undefined)
- `isFalsy(value)` - Check if value is falsy
- `isTruthy(value)` - Check if value is truthy
- `isEmail(value)` - Check if string is valid email format
- `isUrl(value)` - Check if string is valid URL format
- `isPhoneNumber(value)` - Check if string matches phone number pattern
- `isIpAddress(value)` - Check if string is valid IP address (IPv4 or IPv6)
- `isPalindrome(value)` - Check if string is a palindrome
- `isAlphanumeric(value)` - Check if string contains only alphanumeric characters
- `isNumeric(value)` - Check if value can be converted to a number
- `isInteger(value)` - Check if value is an integer
- `isFloat(value)` - Check if value is a floating-point number
- `isEven(value)` - Check if number is even
- `isOdd(value)` - Check if number is odd
- `isPrime(value)` - Check if number is prime

**Usage Example:**
```javascript
import { isBool, isNegative, isEmpty } from '@helpers/utils';

isBool(true); // true
isNegative(-5); // true
isEmpty(''); // true
isEmpty([]); // true
isEmail('user@example.com'); // true
```

---

### 2. String Casing & Manipulation (30 Functions)
Convert strings between different casing styles and manipulate text.

#### Available Methods
- `toCamelCase(string)` - Convert to camelCase
- `toSnakeCase(string)` - Convert to snake_case
- `toKebabCase(string)` - Convert to kebab-case
- `toPascalCase(string)` - Convert to PascalCase
- `toTitleCase(string)` - Convert to Title Case
- `toConstantCase(string)` - Convert to CONSTANT_CASE
- `toFlatCase(string)` - Convert to flatcase
- `toPathCase(string)` - Convert to path/case
- `toDotCase(string)` - Convert to dot.case
- `toSentenceCase(string)` - Convert to Sentence case
- `capitalize(string)` - Capitalize first letter
- `decapitalize(string)` - Remove capitalization from first letter
- `reverse(string)` - Reverse string characters
- `repeat(string, count)` - Repeat string n times
- `truncate(string, length, suffix)` - Truncate string with ellipsis
- `padStart(string, length, pad)` - Pad string from start
- `padEnd(string, length, pad)` - Pad string from end
- `trim(string)` - Remove leading/trailing whitespace (works like native trim)
- `trimStart(string)` - Remove leading whitespace
- `trimEnd(string)` - Remove trailing whitespace
- `slugify(string)` - Convert to URL-friendly slug
- `removeVowels(string)` - Remove all vowels from string
- `removeConsonants(string)` - Remove all consonants from string
- `removeWhitespace(string)` - Remove all whitespace
- `removeSpecialChars(string)` - Remove special characters
- `toCharArray(string)` - Convert string to character array
- `wordCount(string)` - Count words in string
- `charCount(string)` - Count unique characters
- `replaceLast(string, search, replace)` - Replace last occurrence
- `template(template, data)` - Simple template string replacement

**Usage Example:**
```javascript
import { toCamelCase, toSnakeCase, capitalize } from '@helpers/utils';

toCamelCase('hello-world-example'); // 'helloWorldExample'
toSnakeCase('helloWorldExample'); // 'hello_world_example'
toPascalCase('hello_world'); // 'HelloWorld'
toTitleCase('hello world'); // 'Hello World'
capitalize('hello'); // 'Hello'
slugify('Hello World Example'); // 'hello-world-example'
truncate('This is a long string', 10); // 'This is...'
```

---

### 3. Array Utilities (27 Functions)
Helper functions for array manipulation and transformation.

#### Available Methods
- `chunk(array, size)` - Split array into chunks
- `compact(array)` - Remove falsy values
- `flatten(array, depth)` - Flatten nested arrays
- `unique(array)` - Get unique values
- `uniqueBy(array, key)` - Get unique values by property
- `difference(array1, array2)` - Find differences between arrays
- `intersection(array1, array2)` - Find common elements
- `union(array1, array2)` - Combine unique elements
- `shuffle(array)` - Randomly shuffle array
- `reverse(array)` - Reverse array (non-mutating)
- `first(array)` - Get first element
- `last(array)` - Get last element
- `nth(array, index)` - Get element at index
- `remove(array, value)` - Remove specific value
- `removeAt(array, index)` - Remove element at index
- `rotate(array, steps)` - Rotate array elements
- `sum(array)` - Sum all numbers in array
- `average(array)` - Get average of numbers
- `max(array)` - Get maximum value
- `min(array)` - Get minimum value
- `groupBy(array, key)` - Group array by property
- `sortBy(array, key, order)` - Sort array by property
- `filter(array, predicate)` - Filter array
- `map(array, callback)` - Map array
- `reduce(array, callback, initial)` - Reduce array
- `fill(array, value, start, end)` - Fill array with value
- `includes(array, value)` - Check if array includes value

**Usage Example:**
```javascript
import { chunk, flatten, unique, shuffle } from '@helpers/utils';

chunk([1,2,3,4,5], 2); // [[1,2], [3,4], [5]]
flatten([1, [2, [3, 4]]], 2); // [1, 2, 3, 4]
unique([1,2,2,3,3,3]); // [1, 2, 3]
shuffle([1,2,3,4,5]); // [3,1,4,5,2]
```

---

### 4. Object Utilities (25 Functions)
Helper functions for object manipulation and transformation.

#### Available Methods
- `keys(object)` - Get object keys
- `values(object)` - Get object values
- `entries(object)` - Get object entries
- `pick(object, keys)` - Pick specific properties
- `omit(object, keys)` - Omit specific properties
- `merge(target, source)` - Shallow merge objects
- `deepMerge(target, source)` - Deep merge objects
- `clone(object)` - Shallow clone object
- `deepClone(object)` - Deep clone object
- `hasProperty(object, key)` - Check if property exists
- `hasOwnProperty(object, key)` - Check own property
- `isEmpty(object)` - Check if object is empty
- `size(object)` - Get number of properties
- `invert(object)` - Invert keys and values
- `mapKeys(object, fn)` - Transform all keys
- `mapValues(object, fn)` - Transform all values
- `filterKeys(object, predicate)` - Filter by key names
- `filterValues(object, predicate)` - Filter by values
- `defaults(object, defaultObj)` - Set default values
- `findKey(object, predicate)` - Find key by condition
- `findValue(object, predicate)` - Find value by condition
- `toQueryString(object)` - Convert to URL query string
- `fromQueryString(string)` - Parse query string to object
- `getPath(object, path)` - Get nested value by path (lodash style)
- `setPath(object, path, value)` - Set nested value by path

**Usage Example:**
```javascript
import { pick, omit, merge, deepClone } from '@helpers/utils';

const user = { id: 1, name: 'John', email: 'john@example.com', password: '123' };
pick(user, ['id', 'name']); // { id: 1, name: 'John' }
omit(user, ['password']); // { id: 1, name: 'John', email: 'john@example.com' }
merge({ a: 1 }, { b: 2 }); // { a: 1, b: 2 }
deepClone(nestedObject); // Complete deep copy
```

---

### 5. Math Utilities (24 Functions)
Scientific and mathematical helper functions.

#### Available Methods
- `round(number, decimals)` - Round to decimal places
- `floor(number)` - Floor number
- `ceil(number)` - Ceiling number
- `abs(number)` - Absolute value
- `sqrt(number)` - Square root
- `pow(base, exponent)` - Power function
- `min(...numbers)` - Find minimum
- `max(...numbers)` - Find maximum
- `clamp(value, min, max)` - Clamp value between min/max
- `random(min, max)` - Random number in range
- `randomInt(min, max)` - Random integer
- `percentage(value, total)` - Calculate percentage
- `factorial(number)` - Calculate factorial
- `fibonacci(n)` - Get fibonacci number
- `distance(x1, y1, x2, y2)` - Calculate distance between points
- `average(...numbers)` - Calculate average
- `sum(...numbers)` - Sum numbers
- `median(array)` - Get median value
- `mode(array)` - Get mode (most common value)
- `standardDeviation(array)` - Calculate standard deviation
- `variance(array)` - Calculate variance
- `gcd(a, b)` - Greatest common divisor
- `lcm(a, b)` - Least common multiple
- `isEven(number)` - Check if even
- `isOdd(number)` - Check if odd
- `isDivisibleBy(number, divisor)` - Check divisibility

**Usage Example:**
```javascript
import { round, clamp, random, percentage } from '@helpers/utils';

round(3.14159, 2); // 3.14
clamp(150, 0, 100); // 100
random(1, 10); // Random number between 1-10
percentage(25, 100); // 25
factorial(5); // 120
```

---

### 6. Date & Time Utilities (27 Functions)
Work with dates and time intervals easily.

#### Available Methods
- `now()` - Get current timestamp
- `today()` - Get today's date
- `yesterday()` - Get yesterday's date
- `tomorrow()` - Get tomorrow's date
- `addDays(date, days)` - Add days to date
- `subtractDays(date, days)` - Subtract days from date
- `addMonths(date, months)` - Add months to date
- `addYears(date, years)` - Add years to date
- `startOfDay(date)` - Get start of day
- `endOfDay(date)` - Get end of day
- `startOfMonth(date)` - Get start of month
- `endOfMonth(date)` - Get end of month
- `startOfYear(date)` - Get start of year
- `endOfYear(date)` - Get end of year
- `format(date, format)` - Format date as string
- `parse(dateString, format)` - Parse date string
- `difference(date1, date2, unit)` - Get difference between dates
- `isSameDay(date1, date2)` - Check if same day
- `isBefore(date1, date2)` - Check if before
- `isAfter(date1, date2)` - Check if after
- `isBetween(date, start, end)` - Check if between dates
- `isToday(date)` - Check if today
- `isLeapYear(year)` - Check if leap year
- `daysInMonth(year, month)` - Get days in month
- `weekOfYear(date)` - Get week number of year
- `dayOfYear(date)` - Get day number of year
- `getAge(birthDate)` - Calculate age from birth date

**Usage Example:**
```javascript
import { addDays, format, difference } from '@helpers/utils';

addDays(new Date(), 7); // Date 7 days from now
format(new Date(), 'yyyy-MM-dd'); // '2024-03-27'
difference(new Date('2024-01-01'), new Date(), 'days'); // Days elapsed
getAge('1990-05-15'); // Age in years
```

---

### 7. Promise & Async Utilities (11 Functions)
Helpers for working with promises and asynchronous code.

#### Available Methods
- `delay(ms)` - Create a promise that resolves after delay
- `timeout(promise, ms)` - Reject promise after timeout
- `retry(fn, options)` - Retry promise with exponential backoff
- `race(promises)` - Race multiple promises
- `all(promises)` - Wait for all promises
- `allSettled(promises)` - Wait for all promises (settled)
- `any(promises)` - Return first fulfilled promise
- `waterfall(tasks, initial)` - Execute tasks in sequence
- `parallel(tasks, limit)` - Execute tasks in parallel with limit
- `memoize(fn)` - Memoize async function results
- `debounce(fn, delay)` - Debounce function calls
- `throttle(fn, delay)` - Throttle function calls
- `once(fn)` - Execute function only once
- `cache(fn, ttl)` - Cache function results with TTL

**Usage Example:**
```javascript
import { delay, retry, debounce } from '@helpers/utils';

await delay(1000); // Wait 1 second
await retry(apiCall, { attempts: 3, backoff: 'exponential' });
const debouncedSearch = debounce(search, 300);
```

---

### 8. Validation Utilities (20 Functions)
Input validation helpers for common data types.

#### Available Methods
- `isStrongPassword(password)` - Validate strong password
- `isWeakPassword(password)` - Check if password is weak
- `isCreditCard(number)` - Validate credit card number
- `isPostalCode(code, country)` - Validate postal code format
- `isCurrency(value)` - Validate currency format
- `isHexColor(value)` - Validate hex color
- `isRgbColor(value)` - Validate RGB color
- `isUsername(username)` - Validate username format
- `isSlug(slug)` - Validate URL slug
- `isUuid(uuid)` - Validate UUID format
- `isMd5(hash)` - Validate MD5 hash
- `isSha1(hash)` - Validate SHA1 hash
- `isSha256(hash)` - Validate SHA256 hash
- `isJSON(string)` - Validate JSON string
- `isBase64(string)` - Validate Base64 string
- `isUrl(url, options)` - Validate URL with options
- `isIpAddress(ip)` - Validate IP address
- `isPort(port)` - Validate port number
- `isMimeType(type)` - Validate MIME type
- `isDateString(string, format)` - Validate date string

**Usage Example:**
```javascript
import { isStrongPassword, isEmail, isCreditCard } from '@helpers/utils';

isStrongPassword('P@ssw0rd123!'); // true
isEmail('user@example.com'); // true
isCreditCard('4532111111111111'); // true
```

---

### 9. Color & Format Utilities (23 Functions)
Work with colors and format different data types.

#### Available Methods
**Color Utilities:**
- `hexToRgb(hex)` - Convert hex to RGB
- `rgbToHex(r, g, b)` - Convert RGB to hex
- `hexToHsl(hex)` - Convert hex to HSL
- `hslToHex(h, s, l)` - Convert HSL to hex
- `lighten(color, amount)` - Lighten color
- `darken(color, amount)` - Darken color
- `saturate(color, amount)` - Increase saturation
- `desaturate(color, amount)` - Decrease saturation
- `rotate(color, degrees)` - Rotate hue
- `complement(color)` - Get complementary color
- `findSimilarColor(color, array)` - Find closest color match

**Format Utilities:**
- `formatBytes(bytes)` - Format bytes to human readable
- `formatNumber(number, options)` - Format number with separators
- `formatCurrency(amount, currency)` - Format as currency
- `formatPercent(value, decimals)` - Format as percentage
- `formatDuration(ms)` - Format milliseconds to readable
- `formatTime(seconds)` - Format seconds to HH:MM:SS
- `formatPhone(phone, format)` - Format phone number
- `formatSSN(ssn)` - Format social security number
- `formatCreditCard(card)` - Format credit card number
- `formatJson(obj, space)` - Format JSON with indentation

**Usage Example:**
```javascript
import { hexToRgb, formatBytes, formatCurrency } from '@helpers/utils';

hexToRgb('#ff0000'); // { r: 255, g: 0, b: 0 }
formatBytes(1024 * 1024); // '1 MB'
formatCurrency(1234.56, 'USD'); // '$1,234.56'
formatPhone('1234567890', 'US'); // '(123) 456-7890'
```

---

### 10. Encoding & Encryption Utilities (12 Functions)
Encode, decode, and simple encryption operations.

#### Available Methods
- `toBase64(string)` - Encode to Base64
- `fromBase64(base64)` - Decode from Base64
- `toUrlEncoded(string)` - URL encode
- `fromUrlEncoded(string)` - URL decode
- `toHex(string)` - Convert to hexadecimal
- `fromHex(hex)` - Convert from hexadecimal
- `toMorse(string)` - Convert to Morse code
- `fromMorse(morse)` - Convert from Morse code
- `caesarCipher(string, shift)` - Simple Caesar cipher encoding
- `md5(string)` - Generate MD5 hash
- `sha1(string)` - Generate SHA1 hash
- `sha256(string)` - Generate SHA256 hash

**Usage Example:**
```javascript
import { toBase64, fromBase64, toHex } from '@helpers/utils';

toBase64('hello'); // 'aGVsbG8='
fromBase64('aGVsbG8='); // 'hello'
toHex('hello'); // '68656c6c6f'
```

---

### 11. Browser/DOM Utilities (29 Functions)
Utilities designed for browser and DOM manipulation in any JavaScript environment.

#### Available Methods
- `getQueryParam(name)` - Get URL query parameter
- `getQueryParams()` - Get all query parameters
- `setQueryParam(name, value)` - Set URL query parameter
- `removeQueryParam(name)` - Remove query parameter
- `getHash()` - Get URL hash/fragment
- `setHash(hash)` - Set URL hash
- `getHostname()` - Get current hostname
- `getPathname()` - Get current pathname
- `getOrigin()` - Get origin URL
- `redirect(url)` - Redirect to URL
- `reloadPage()` - Reload current page
- `goBack()` - Go back in history
- `goForward()` - Go forward in history
- `isLocalHost()` - Check if running on localhost
- `isDevelopment()` - Check if in development
- `getScreenSize()` - Get viewport dimensions
- `getScrollPosition()` - Get current scroll position
- `scrollToTop()` - Scroll to top
- `scrollToElement(selector)` - Scroll to element
- `getClipboard()` - Get clipboard content
- `setClipboard(text)` - Copy text to clipboard
- `isOnline()` - Check internet connectivity
- `addEventListener(target, event, handler)` - Add event listener
- `removeEventListener(target, event, handler)` - Remove event listener
- `stopPropagation(event)` - Stop event propagation
- `preventDefault(event)` - Prevent default action
- `getLocalStorage(key)` - Get from localStorage
- `setLocalStorage(key, value)` - Set in localStorage
- `removeLocalStorage(key)` - Remove from localStorage
- `getSessionStorage(key)` - Get from sessionStorage
- `setSessionStorage(key, value)` - Set in sessionStorage

**Usage Example:**
```javascript
import { getQueryParam, setClipboard, getScreenSize } from '@helpers/utils';

getQueryParam('id'); // Get 'id' from URL params
setClipboard('copied text'); // Copy to clipboard
getScreenSize(); // { width: 1920, height: 1080 }
```

---

### 12. Express/Server Utilities (18 Functions)
Utilities specifically designed for Express applications.

#### Available Methods
- `parseJsonBody(body)` - Safely parse JSON body
- `getClientIp(req)` - Extract client IP address
- `setResponseHeaders(res, headers)` - Set multiple response headers
- `sendError(res, statusCode, message)` - Send error response
- `sendSuccess(res, data, statusCode)` - Send success response
- `isJsonRequest(req)` - Check if request is JSON
- `getContentType(req)` - Get request content type
- `generateRequestId()` - Generate unique request ID
- `createErrorResponse(error)` - Format error for response
- `createSuccessResponse(data)` - Format data for response
- `validateRequired(data, fields)` - Validate required fields
- `sanitizeData(data)` - Remove sensitive fields
- `getCookie(req, name)` - Get cookie value
- `setCookie(res, name, value, options)` - Set cookie
- `removeCookie(res, name)` - Remove cookie
- `getAuthHeader(req)` - Get authorization header
- `extractBearerToken(req)` - Extract Bearer token
- `rateLimit(req, options)` - Simple rate limiting

**Usage Example:**
```javascript
import { sendSuccess, sendError, getClientIp } from '@helpers/utils';

// In Express route handler
app.get('/api/users/:id', (req, res) => {
  const clientIp = getClientIp(req);
  try {
    sendSuccess(res, { id: 1, name: 'John' });
  } catch (error) {
    sendError(res, 500, 'Internal server error');
  }
});
```

---

### 13. File & Path Utilities (16 Functions)
Work with file paths and file operations.

#### Available Methods
- `basename(path)` - Get filename from path
- `dirname(path)` - Get directory from path
- `extname(path)` - Get file extension
- `join(...paths)` - Join path segments
- `resolve(...paths)` - Resolve absolute path
- `normalize(path)` - Normalize path
- `relative(from, to)` - Get relative path
- `isAbsolute(path)` - Check if path is absolute
- `getFileMimeType(filename)` - Get MIME type
- `getFileExtension(filename)` - Get file extension
- `isValidPath(path)` - Validate path format
- `fileExists(path)` - Check if file exists (Node.js)
- `readFile(path)` - Read file contents (Node.js)
- `writeFile(path, data)` - Write to file (Node.js)
- `deleteFile(path)` - Delete file (Node.js)
- `getFileSize(path)` - Get file size (Node.js)

**Usage Example:**
```javascript
import { basename, dirname, extname } from '@helpers/utils';

basename('/home/user/file.txt'); // 'file.txt'
dirname('/home/user/file.txt'); // '/home/user'
extname('file.txt'); // '.txt'
```

---

### 14. Environment Utilities (10 Functions)
Work with environment variables and environment detection.

#### Available Methods
- `getEnv(key, defaultValue)` - Get environment variable
- `isDevelopment()` - Check if development mode
- `isProduction()` - Check if production mode
- `isTesting()` - Check if testing mode
- `getNodeVersion()` - Get Node.js version
- `getPlatform()` - Get OS platform
- `getArch()` - Get CPU architecture
- `getCwd()` - Get current working directory
- `getEnvPath()` - Get path to .env file
- `loadEnv(path)` - Load environment from file

**Usage Example:**
```javascript
import { isDevelopment, getEnv } from '@helpers/utils';

const apiUrl = isDevelopment() ? 'http://localhost:3000' : getEnv('API_URL');
```

---

## 📚 Full Usage Examples

### Express.js API Example
```javascript
import express from 'express';
import {
  sendSuccess,
  sendError,
  validateRequired,
  getClientIp,
  generateRequestId
} from '@helpers/utils';

const app = express();
app.use(express.json());

app.post('/api/users', (req, res) => {
  const requestId = generateRequestId();
  const clientIp = getClientIp(req);
  
  // Validate required fields
  const validation = validateRequired(req.body, ['name', 'email']);
  if (!validation.isValid) {
    return sendError(res, 400, validation.errors.join(', '));
  }

  try {
    const user = { id: 1, ...req.body };
    sendSuccess(res, user);
  } catch (error) {
    console.error(`[${requestId}] Error from ${clientIp}:`, error);
    sendError(res, 500, 'Internal server error');
  }
});
```

---

## 🚀 Quick Start

```javascript
// Import individual utilities
import { toCamelCase, chunk, isEmail } from '@helpers/utils';

// Or use namespaces
import { String, Array, Validation } from '@helpers/utils';

String.toCamelCase('hello-world'); // 'helloWorld'
Array.chunk([1,2,3,4], 2); // [[1,2], [3,4]]
Validation.isEmail('user@example.com'); // true
```

---

## 📖 API Documentation

See [API.md](./API.md) for detailed API documentation and type definitions.

---

## 💡 Features Highlights

✅ **Zero Dependencies** - No external packages required  
✅ **TypeScript Support** - Full type definitions included  
✅ **Tree-Shakeable** - Import only what you need  
✅ **Lightweight** - Minimal bundle size  
✅ **Well-Tested** - Comprehensive test coverage  
✅ **Browser & Node.js** - Works in all environments  
✅ **ESM & CommonJS** - Multiple module formats  
✅ **Chainable** - Many utilities support method chaining  
✅ **Extensible** - Easy to add custom utilities  

---

## 📦 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Node.js 14+

---

## 📄 License

MIT - Copyright (c) 2024 Nitesh Upadhayay

---

## 🤝 Contributing

Contributions are welcome! Please see CONTRIBUTING.md for guidelines.

---

## 📞 Support & Contact

For issues, questions, or suggestions, please:
- Open an issue on [GitHub](https://github.com/NiteshCodes/helpers-utils/issues)
- Email: upadhayaynitesh94@gmail.com
- GitHub: [@NiteshCodes](https://github.com/NiteshCodes)

**Author:** Nitesh Upadhayay
