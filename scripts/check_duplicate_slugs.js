import fs from 'fs';
import path from 'path';

const blogDataPath = 'src/data/blogData.ts';
let content = fs.readFileSync(blogDataPath, 'utf8');

const slugs = [...content.matchAll(/slug:\s*['"]([^'"]+)['"]/g)].map(m => m[1]);
console.log('Total slug matches in blogData.ts:', slugs.length);

const counts = {};
slugs.forEach(s => {
  counts[s] = (counts[s] || 0) + 1;
});

const duplicates = Object.entries(counts).filter(([k, v]) => v > 1);
console.log('Total duplicate slugs:', duplicates.length);
console.log('Duplicates detail:', duplicates);
