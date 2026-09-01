import fs from 'fs';
import path from 'path';

const blogDataPath = 'src/data/blogData.ts';
let content = fs.readFileSync(blogDataPath, 'utf8');

const publicBlogsDir = 'public/blogs';
const distBlogsDir = 'dist/blogs';

const seenSlugs = new Map();
let duplicateCount = 0;

// Regex to match slug: '...'
content = content.replace(/slug:\s*['"]([^'"]+)['"]/g, (match, slug) => {
  if (seenSlugs.has(slug)) {
    const count = seenSlugs.get(slug) + 1;
    seenSlugs.set(slug, count);
    const newSlug = `${slug}_${count}`;
    duplicateCount++;
    console.log(`Renaming duplicate slug: ${slug} -> ${newSlug}`);

    // Ensure .md file exists for newSlug
    const oldMdPath = path.join(publicBlogsDir, `${slug}.md`);
    const newMdPath = path.join(publicBlogsDir, `${newSlug}.md`);
    if (fs.existsSync(oldMdPath) && !fs.existsSync(newMdPath)) {
      fs.copyFileSync(oldMdPath, newMdPath);
    }

    return `slug: '${newSlug}'`;
  } else {
    seenSlugs.set(slug, 1);
    return match;
  }
});

fs.writeFileSync(blogDataPath, content, 'utf8');
console.log(`Total duplicate slugs resolved: ${duplicateCount}`);

// Verify all slugs in blogData are now 100% unique
const finalSlugs = [...content.matchAll(/slug:\s*['"]([^'"]+)['"]/g)].map(m => m[1]);
const uniqueFinalSlugs = new Set(finalSlugs);
console.log(`Final check: Total slugs = ${finalSlugs.length}, Unique slugs = ${uniqueFinalSlugs.size}`);
