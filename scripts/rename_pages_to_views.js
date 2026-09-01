import fs from 'fs';
import path from 'path';

// 1. Rename src/pages to src/views
if (fs.existsSync('src/pages')) {
  if (!fs.existsSync('src/views')) {
    fs.mkdirSync('src/views', { recursive: true });
  }

  const entries = fs.readdirSync('src/pages', { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join('src/pages', entry.name);
    const destPath = path.join('src/views', entry.name);
    if (entry.isDirectory()) {
      if (!fs.existsSync(destPath)) fs.mkdirSync(destPath, { recursive: true });
      // copy dir
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }

  fs.rmSync('src/pages', { recursive: true, force: true });
  console.log('Successfully renamed src/pages to src/views!');
}

// 2. Update imports across all files in src/
function updateImportsInDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      updateImportsInDir(fullPath);
    } else if (entry.name.endsWith('.tsx') || entry.name.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('/pages/') || content.includes('@/pages') || content.includes("from '../pages/") || content.includes("from '../../pages/")) {
        content = content.replace(/@\/pages\//g, '@/views/');
        content = content.replace(/from\s+['"]\.\.\/pages\/([^'"]+)['"]/g, "from '../views/$1'");
        content = content.replace(/from\s+['"]\.\.\/\.\.\/pages\/([^'"]+)['"]/g, "from '../../views/$1'");
        content = content.replace(/from\s+['"]\.\.\/\.\.\/\.\.\/pages\/([^'"]+)['"]/g, "from '../../../views/$1'");
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated imports in ${fullPath}`);
      }
    }
  }
}

updateImportsInDir('src');
console.log('Finished updating all imports to @/views/!');
