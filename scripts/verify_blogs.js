import fs from 'fs';
import path from 'path';

const content = fs.readFileSync('src/data/blogData.ts', 'utf8');
const slugs = [...content.matchAll(/slug:\s*['"]([^'"]+)['"]/g)].map(m => m[1]);
console.log('Total blogs in blogData.ts:', slugs.length);

const uniqueSlugs = new Set(slugs);
console.log('Unique slugs count:', uniqueSlugs.size);

const publicDir = 'public/blogs';
const files = fs.readdirSync(publicDir).filter(f => f.endsWith('.md'));
console.log('Total .md files in public/blogs:', files.length);

let missingCount = 0;
slugs.forEach(s => {
  const filePath = path.join(publicDir, s + '.md');
  if (!fs.existsSync(filePath)) {
    missingCount++;
  }
});
console.log('Missing .md files for slugs in blogData.ts:', missingCount);

// Check sample word counts of newly generated files
const sampleSlugs = slugs.slice(-10);
console.log('Sample newly added blogs:');
let sumWords = 0;
sampleSlugs.forEach(s => {
  const p = path.join(publicDir, s + '.md');
  if (fs.existsSync(p)) {
    const text = fs.readFileSync(p, 'utf8');
    const words = text.trim().split(/\s+/).length;
    sumWords += words;
    console.log(` - Slug: ${s} | Words: ${words}`);
  }
});
console.log(`Average sample word count: ${Math.round(sumWords / sampleSlugs.length)} words.`);
