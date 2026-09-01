import fs from 'fs';
import path from 'path';

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // remove special chars like ?, !, :, ,, (, ), ', "
    .trim()
    .replace(/[\s_]+/g, '-') // replace spaces and underscores with hyphens
    .replace(/-+/g, '-'); // collapse multiple hyphens
}

const blogDataPath = 'src/data/blogData.ts';
let blogDataContent = fs.readFileSync(blogDataPath, 'utf8');

const publicBlogsDir = 'public/blogs';
const distBlogsDir = 'dist/blogs';

// We want to match all blog objects in blogData.ts
// An object has `slug: '...',` and `title: '...',` or `title: "...",`
const blogItemRegex = /{\s*slug:\s*['"]([^'"]+)['"],\s*title:\s*(["'`])([\s\S]*?)\2/g;

const slugMap = new Map(); // oldSlug -> newSlug
const seenNewSlugs = new Map();

let totalMatches = 0;

let updatedContent = blogDataContent.replace(blogItemRegex, (match, oldSlug, quote, title) => {
  totalMatches++;
  let baseNewSlug = slugify(title);
  if (!baseNewSlug || baseNewSlug.length === 0) {
    baseNewSlug = slugify(oldSlug.replace(/^blog_/, ''));
  }

  let finalNewSlug = baseNewSlug;
  if (seenNewSlugs.has(baseNewSlug)) {
    const count = seenNewSlugs.get(baseNewSlug) + 1;
    seenNewSlugs.set(baseNewSlug, count);
    finalNewSlug = `${baseNewSlug}-${count}`;
  } else {
    seenNewSlugs.set(baseNewSlug, 1);
  }

  slugMap.set(oldSlug, finalNewSlug);

  return `{\n    slug: '${finalNewSlug}',\n    title: ${quote}${title}${quote}`;
});

console.log(`Matched and processed ${totalMatches} blogs.`);
console.log(`Generated ${seenNewSlugs.size} unique slug bases.`);

// Write updated blogData.ts
fs.writeFileSync(blogDataPath, updatedContent, 'utf8');
console.log('Updated src/data/blogData.ts with clean title-based slugs!');

// Now rename / copy corresponding .md files in public/blogs and dist/blogs
let renamedPublicCount = 0;
let renamedDistCount = 0;

for (const [oldSlug, newSlug] of slugMap.entries()) {
  if (oldSlug === newSlug) continue;

  const oldPublicMd = path.join(publicBlogsDir, `${oldSlug}.md`);
  const newPublicMd = path.join(publicBlogsDir, `${newSlug}.md`);

  if (fs.existsSync(oldPublicMd)) {
    if (!fs.existsSync(newPublicMd)) {
      fs.copyFileSync(oldPublicMd, newPublicMd);
      renamedPublicCount++;
    }
  }

  if (fs.existsSync(distBlogsDir)) {
    const oldDistMd = path.join(distBlogsDir, `${oldSlug}.md`);
    const newDistMd = path.join(distBlogsDir, `${newSlug}.md`);
    if (fs.existsSync(oldDistMd)) {
      if (!fs.existsSync(newDistMd)) {
        fs.copyFileSync(oldDistMd, newDistMd);
        renamedDistCount++;
      }
    }
  }
}

console.log(`Created ${renamedPublicCount} renamed markdown files in public/blogs/`);
if (fs.existsSync(distBlogsDir)) {
  console.log(`Created ${renamedDistCount} renamed markdown files in dist/blogs/`);
}

// Sample verification
console.log('\nSample title-based URLs:');
const sampleEntries = Array.from(slugMap.entries()).slice(0, 5);
for (const [oldSlug, newSlug] of sampleEntries) {
  console.log(`  http://localhost:3000/blog/${newSlug}`);
}
