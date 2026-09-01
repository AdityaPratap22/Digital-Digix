import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const publicBlogsDir = path.join(rootDir, 'public', 'blogs');

const files = fs.readdirSync(publicBlogsDir).filter(f => f.endsWith('.md'));
const TARGET_URL = 'https://digitaldigix.com';
const linkRegex = /\[([^\]]+)\]\(https:\/\/digitaldigix\.com\)/g;

let stats = {
  underFour: 0,
  exactFourOrFive: 0,
  overFive: 0
};

files.forEach((filename) => {
  const filePath = path.join(publicBlogsDir, filename);
  let content = fs.readFileSync(filePath, 'utf8');

  let matches = [...content.matchAll(linkRegex)];

  if (matches.length > 5) {
    let count = 0;
    content = content.replace(linkRegex, (fullMatch, anchorText) => {
      count++;
      if (count <= 5) {
        return fullMatch;
      } else {
        return anchorText;
      }
    });
  }

  const finalMatches = [...content.matchAll(linkRegex)];
  if (finalMatches.length < 4) stats.underFour++;
  else if (finalMatches.length <= 5) stats.exactFourOrFive++;
  else stats.overFive++;

  fs.writeFileSync(filePath, content, 'utf8');
});

console.log('Final strictly 4-5 links distribution:');
console.log(stats);
