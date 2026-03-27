# Getting Started with @nitesh-upadhayay/helpers-utils

Welcome to @nitesh-upadhayay/helpers-utils! This quick start guide will help you get up and running.

## Installation

```bash
npm install @nitesh-upadhayay/helpers-utils
```

## First Steps

### 1. Import the Library

```typescript
// Import specific functions
import { toCamelCase, chunk, deepClone } from '@nitesh-upadhayay/helpers-utils';

// Or use namespaces
import { String, Array, Object } from '@nitesh-upadhayay/helpers-utils';
```

### 2. Use a Function

```typescript
// Check the type
import { isBool, isEmail } from '@nitesh-upadhayay/helpers-utils';

console.log(isBool(true)); // true
console.log(isEmail('user@example.com')); // true
```

### 3. Explore More

Visit [EXAMPLES.md](./EXAMPLES.md) for practical examples of all major features.

## Main Features

### 1️⃣ Type Checks
Check any JavaScript value type safely:
```typescript
import { isString, isArray, isEmpty } from '@nitesh-upadhayay/helpers-utils';

isString('hello'); // true
isEmpty([]); // true
```

### 2️⃣ String Manipulation
Convert between different string cases:
```typescript
import { toCamelCase, toSnakeCase, slugify } from '@nitesh-upadhayay/helpers-utils';

toCamelCase('hello-world'); // 'helloWorld'
toSnakeCase('helloWorld'); // 'hello_world'
```

### 3️⃣ Array Utilities
Work with arrays efficiently:
```typescript
import { chunk, flatten, unique, shuffle } from '@nitesh-upadhayay/helpers-utils';

chunk([1,2,3,4], 2); // [[1,2], [3,4]]
unique([1,1,2,2,3]); // [1,2,3]
```

### 4️⃣ Object Utilities
Manipulate objects safely:
```typescript
import { pick, omit, merge, deepClone } from '@nitesh-upadhayay/helpers-utils';

pick(user, ['id', 'name']);
merge(obj1, obj2);
deepClone(complexObject);
```

### 5️⃣ Math & Numbers
Math operations made easy:
```typescript
import { round, clamp, random, factorial } from '@nitesh-upadhayay/helpers-utils';

round(3.14159, 2); // 3.14
clamp(150, 0, 100); // 100
```

### 6️⃣ Date & Time
Work with dates easily:
```typescript
import { addDays, format, getAge } from '@nitesh-upadhayay/helpers-utils';

addDays(new Date(), 7);
format(new Date(), 'yyyy-MM-dd');
```

### 7️⃣ Async & Promise
Handle async operations:
```typescript
import { delay, retry, debounce } from '@nitesh-upadhayay/helpers-utils';

await delay(1000);
await retry(() => fetchData(), { attempts: 3 });
```

### 8️⃣ Validation
Validate data formats:
```typescript
import { isStrongPassword, isCreditCard, isUuid } from '@nitesh-upadhayay/helpers-utils';

isStrongPassword('P@ss123!'); // true
isCreditCard('4532-1111-1111-1111'); // true
```

### 9️⃣ Colors & Formatting
Work with colors and formats:
```typescript
import { hexToRgb, formatBytes, formatCurrency } from '@nitesh-upadhayay/helpers-utils';

hexToRgb('#ff0000'); // { r: 255, g: 0, b: 0 }
formatBytes(1024 * 1024); // '1 MB'
formatCurrency(1234.56, 'USD'); // '$1,234.56'
```

### 🔟 Browser/DOM (Frontend)
DOM and browser APIs:
```typescript
import { getQueryParam, setClipboard } from '@nitesh-upadhayay/helpers-utils';

const userId = getQueryParam('id');
setClipboard('Copied text!');
```

### 1️⃣1️⃣ Express/Server (Backend)
Express server helpers:
```typescript
import { sendSuccess, sendError, getClientIp } from '@nitesh-upadhayay/helpers-utils';

sendSuccess(res, data);
getClientIp(req); // Get client IP
```

## Next Steps

1. **Read the Full Documentation**: Check [README.md](./README.md) for complete API reference
2. **See More Examples**: Visit [EXAMPLES.md](./EXAMPLES.md) for practical use cases
3. **Contribute**: See [CONTRIBUTING.md](./CONTRIBUTING.md) if you want to help!

## Key Features

✨ **Zero Dependencies** - No external packages  
✨ **Full TypeScript** - Complete type definitions  
✨ **Tree-Shakeable** - Only ship what you use  
✨ **Well-Tested** - Comprehensive coverage  
✨ **Browser & Node.js** - Works everywhere  

## Common Patterns

### Express API
```typescript
import express from 'express';
import { sendSuccess, sendError, validateRequired } from '@nitesh-upadhayay/helpers-utils';

app.post('/api/users', (req, res) => {
  const validation = validateRequired(req.body, ['name', 'email']);
  if (!validation.isValid) {
    return sendError(res, 400, validation.errors.join(', '));
  }
  
  sendSuccess(res, { id: 1, ...req.body });
});
```

### Data Transformation
```typescript
import { pick, toCamelCase, deepClone } from '@nitesh-upadhayay/helpers-utils';

const user = { id: 1, first_name: 'John', last_name: 'Doe' };
const safe = pick(deepClone(user), ['id', 'first_name']);
```

### Form Validation
```typescript
import { isEmail, isStrongPassword } from '@nitesh-upadhayay/helpers-utils';

function validateForm(data) {
  const errors = [];
  if (!isEmail(data.email)) errors.push('Invalid email');
  if (!isStrongPassword(data.password)) errors.push('Weak password');
  return errors;
}
```

## Troubleshooting

### Types not working?
Make sure TypeScript is installed and your `tsconfig.json` has `"skipLibCheck": false`

### Missing a utility?
Check [README.md](./README.md) - it likely already exists! If not, [open an issue](https://github.com/yourusername/helpers-utils/issues)

## Support

- 📖 [Full Documentation](./README.md)
- 📝 [Examples](./EXAMPLES.md)
- 🐛 [Report Issues](https://github.com/NiteshCodes/helpers-utils/issues)
- 💡 [Suggest Features](https://github.com/NiteshCodes/helpers-utils/issues)
- 📧 Email: upadhayaynitesh94@gmail.com
- 🐙 GitHub: [@NiteshCodes](https://github.com/NiteshCodes)

---

Happy coding! 🚀
