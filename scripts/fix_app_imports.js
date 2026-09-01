import fs from 'fs';
import path from 'path';

function fixFileImports(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace relative paths with clean @/ aliases
  content = content.replace(/from\s+['"]\.\.\/\.\.\/\.\.\/src\/([^'"]+)['"]/g, "from '@/$1'");
  content = content.replace(/from\s+['"]\.\.\/\.\.\/src\/([^'"]+)['"]/g, "from '@/$1'");
  content = content.replace(/from\s+['"]\.\.\/src\/([^'"]+)['"]/g, "from '@/$1'");
  content = content.replace(/import\s+['"]\.\.\/src\/index\.css['"]/g, "import '@/index.css'");
  content = content.replace(/import\s+['"]\.\.\/\.\.\/src\/index\.css['"]/g, "import '@/index.css'");

  fs.writeFileSync(filePath, content, 'utf8');
}

function walkDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkDir(fullPath);
    } else if (entry.name.endsWith('.tsx') || entry.name.endsWith('.ts')) {
      fixFileImports(fullPath);
    }
  }
}

walkDir('src/app');
console.log('Successfully normalized all imports in src/app!');
