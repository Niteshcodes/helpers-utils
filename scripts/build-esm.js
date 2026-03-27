const fs = require('fs');
const path = require('path');

const DIST_DIR = path.resolve(__dirname, '../dist');

function walk(dir, files = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath, files);
    } else {
      files.push(fullPath);
    }
  }

  return files;
}

function main() {
  if (!fs.existsSync(DIST_DIR)) {
    console.error('dist directory not found. Run TypeScript build first.');
    process.exit(1);
  }

  const files = walk(DIST_DIR);
  let generated = 0;

  for (const file of files) {
    if (!file.endsWith('.js') || file.endsWith('.esm.js')) {
      continue;
    }

    const esmFile = file.replace(/\.js$/, '.esm.js');
    fs.copyFileSync(file, esmFile);
    generated += 1;
  }

  console.log(`Generated ${generated} ESM compatibility files.`);
}

main();
