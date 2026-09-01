import fs from 'fs';
import path from 'path';

const dirs = ['src/components', 'src/pages'];

dirs.forEach(dir => {
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));
  files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Check if it already has 'use client'
    if (!content.trim().startsWith("'use client'") && !content.trim().startsWith('"use client"')) {
      // Add 'use client' at top
      content = `'use client';\n\n` + content;
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Added 'use client' to ${filePath}`);
    }
  });
});

console.log('Finished updating client components.');
