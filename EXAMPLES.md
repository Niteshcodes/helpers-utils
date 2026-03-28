# universal-helper-functions Examples

This file contains practical examples of using the universal-helper-functions library.

## Installation

```bash
npm install universal-helper-functions
```

## Quick Start Examples

### Type Checking

```typescript
import { isBool, isEmail, isPrime } from 'universal-helper-functions';

console.log(isBool(true)); // true
console.log(isEmail('test@example.com')); // true
console.log(isPrime(17)); // true
```

### String Manipulation

```typescript
import {
  toCamelCase,
  toSnakeCase,
  toPascalCase,
  capitalize,
  slugify
} from 'universal-helper-functions';

const text = 'hello world';
console.log(toCamelCase(text)); // 'helloWorld'
console.log(toSnakeCase(text)); // 'hello_world'
console.log(toPascalCase(text)); // 'HelloWorld'
console.log(capitalize(text)); // 'Hello world'
console.log(slugify('Hello World Example')); // 'hello-world-example'
```

### Array Operations

```typescript
import { 
  chunk, 
  flatten, 
  unique, 
  shuffle, 
  groupBy 
} from 'universal-helper-functions';

// Chunking
const arr = [1, 2, 3, 4, 5];
console.log(chunk(arr, 2)); // [[1, 2], [3, 4], [5]]

// Flattening
console.log(flatten([1, [2, [3, 4]], 5], 2)); // [1, 2, 3, 4, 5]

// Getting unique values
console.log(unique([1, 2, 2, 3, 3, 3])); // [1, 2, 3]

// Shuffling
console.log(shuffle([1, 2, 3, 4, 5])); // Random order

// Grouping
const users = [
  { name: 'Alice', role: 'admin' },
  { name: 'Bob', role: 'user' },
  { name: 'Charlie', role: 'user' }
];
console.log(groupBy(users, 'role'));
// { admin: [...], user: [...] }
```

### Object Utilities

```typescript
import { pick, omit, merge, deepClone, getPath } from 'universal-helper-functions';

const user = {
  id: 1,
  name: 'John',
  email: 'john@example.com',
  password: 'secret123'
};

// Pick properties
const publicUser = pick(user, ['id', 'name', 'email']);

// Omit properties
const safeUser = omit(user, ['password']);

// Merge objects
const updated = merge(user, { name: 'John Doe' });

// Deep clone
const clone = deepClone(user);

// Get nested value
const nested = { user: { profile: { age: 30 } } };
console.log(getPath(nested, 'user.profile.age')); // 30
```

### Math Operations

```typescript
import { 
  round, 
  clamp, 
  random, 
  factorial, 
  fibonacci 
} from 'universal-helper-functions';

console.log(round(3.14159, 2)); // 3.14
console.log(clamp(150, 0, 100)); // 100
console.log(random(1, 10)); // Random number 1-10
console.log(factorial(5)); // 120
console.log(fibonacci(10)); // 55
```

### Date Operations

```typescript
import { 
  addDays, 
  format, 
  getAge, 
  isSameDay 
} from 'universal-helper-functions';

const date = new Date();

console.log(addDays(date, 7)); // Date 7 days from now
console.log(format(date, 'yyyy-MM-dd')); // '2024-03-27'
console.log(getAge('1990-05-15')); // Age in years
console.log(isSameDay(date, new Date())); // true
```

### Promise & Async

```typescript
import { 
  delay, 
  retry, 
  debounce, 
  throttle 
} from 'universal-helper-functions';

// Delay
async function delayedLog() {
  await delay(1000);
  console.log('After 1 second');
}

// Retry with exponential backoff
async function fetchWithRetry() {
  const result = await retry(
    () => fetch('https://api.example.com/data'),
    { attempts: 3, backoff: 'exponential' }
  );
  return result;
}

// Debounce search input
const search = debounce((query: string) => {
  console.log('Searching for:', query);
}, 500);

// Throttle scroll handler
const handleScroll = throttle(() => {
  console.log('Scrolling...');
}, 200);
```

### Validation

```typescript
import { 
  isStrongPassword, 
  isCreditCard, 
  isUuid 
} from 'universal-helper-functions';

console.log(isStrongPassword('P@ssw0rd123!')); // true
console.log(isCreditCard('4532111111111111')); // true
console.log(isUuid('550e8400-e29b-41d4-a716-446655440000')); // true
```

### Color Operations

```typescript
import { 
  hexToRgb, 
  lighten, 
  darken, 
  complementColor 
} from 'universal-helper-functions';

console.log(hexToRgb('#ff0000')); // { r: 255, g: 0, b: 0 }
console.log(lighten('#333333', 20)); // Lighter shade
console.log(darken('#cccccc', 20)); // Darker shade
console.log(complementColor('#ff0000')); // Complementary color
```

### Format Utilities

```typescript
import { 
  formatBytes, 
  formatCurrency, 
  formatPhone 
} from 'universal-helper-functions';

console.log(formatBytes(1024 * 1024)); // '1 MB'
console.log(formatCurrency(1234.56, 'USD')); // '$1,234.56'
console.log(formatPhone('1234567890', 'US')); // '(123) 456-7890'
```

### DOM/Browser Utilities

```typescript
import { 
  getQueryParam, 
  setClipboard, 
  getScreenSize,
  getLocalStorage 
} from 'universal-helper-functions';

// Get URL query parameter
const id = getQueryParam('id');

// Copy to clipboard
setClipboard('Some text');

// Get viewport size
const { width, height } = getScreenSize();

// Work with localStorage
const theme = getLocalStorage('theme') || 'light';
```

### Express Server Example

```typescript
import express from 'express';
import {
  sendSuccess,
  sendError,
  validateRequired,
  getClientIp,
  sanitizeData
} from 'universal-helper-functions';

const app = express();
app.use(express.json());

app.post('/api/users', (req, res) => {
  // Validate required fields
  const validation = validateRequired(req.body, ['name', 'email']);
  if (!validation.isValid) {
    return sendError(res, 400, validation.errors.join(', '));
  }

  try {
    const user = { id: 1, ...req.body };
    
    // Sanitize before response (remove sensitive fields)
    const safe = sanitizeData(user, ['password']);
    
    // Get client IP
    const clientIp = getClientIp(req);
    console.log(`User created from ${clientIp}`);
    
    sendSuccess(res, safe, 201);
  } catch (error) {
    sendError(res, 500, 'Internal server error');
  }
});

app.listen(3000);
```

### Using Namespaces

```typescript
import { String, Array, Object } from 'universal-helper-functions';

// Use as namespaces
String.toCamelCase('hello-world'); // 'helloWorld'
Array.chunk([1, 2, 3, 4], 2); // [[1, 2], [3, 4]]
Object.pick({ a: 1, b: 2 }, ['a']); // { a: 1 }
```

## More Examples

For more comprehensive examples, please refer to:
- [README.md](./README.md) - Complete API documentation
- Individual test files in `src/**/*.test.ts`

## Support

For issues, questions, or suggestions, please:
- Open an issue on [GitHub](https://github.com/NiteshCodes/universal-helper-functions/issues)
- Email: upadhayaynitesh94@gmail.com
- GitHub: [@NiteshCodes](https://github.com/NiteshCodes)
