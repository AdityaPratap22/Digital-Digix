import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const publicBlogsDir = path.join(rootDir, 'public', 'blogs');

const files = fs.readdirSync(publicBlogsDir).filter(f => f.endsWith('.md'));
const TARGET_URL = 'https://digitaldigix.com';

const CANDIDATE_PHRASES = [
  'Digital Digix',
  'full-funnel growth architecture',
  'Generative Engine Optimization (GEO)',
  'Conversion Rate Optimization (CRO)',
  'performance advertising',
  'high-converting digital ecosystems',
  'speed-to-lead automation',
  'custom scaling roadmap',
  'schedule a confidential consultation',
  'schedule an in-depth strategic consultation',
  'growth marketing strategists',
  'data-driven full-funnel strategy',
  'enterprise digital transformation',
  'AI search visibility engine',
  'strategic digital roadmap',
  'high-ticket customer acquisition',
  'topical authority content clusters',
  'omnichannel acquisition funnels'
];

let stats = {
  underFour: 0,
  exactFourOrFive: 0,
  overFive: 0
};

files.forEach((filename) => {
  const filePath = path.join(publicBlogsDir, filename);
  let content = fs.readFileSync(filePath, 'utf8');

  // Normalize any other variations of digitaldigix links
  content = content.replace(/\[([^\]]+)\]\(https?:\/\/(www\.)?(digitaldigix\.com|digital-digix\.vercel\.app)[^\)]*\)/gi, (m, anchor) => {
    return `[${anchor}](${TARGET_URL})`;
  });

  // Also convert any remaining [Internal Link: X] to [X](https://digitaldigix.com)
  content = content.replace(/\[Internal Link:\s*([^\]]+)\]/gi, (m, p1) => {
    return `[${p1.trim()}](${TARGET_URL})`;
  });

  // Count existing links to TARGET_URL
  const linkRegex = /\[([^\]]+)\]\(https:\/\/digitaldigix\.com\)/g;
  let matches = [...content.matchAll(linkRegex)];

  // If > 5 links, trim down to 5 by keeping the first 2, middle 1, and last 2
  if (matches.length > 5) {
    let keepIndices = new Set([0, 1, Math.floor(matches.length / 2), matches.length - 2, matches.length - 1]);
    let matchIdx = 0;
    content = content.replace(linkRegex, (fullMatch, anchorText) => {
      const shouldKeep = keepIndices.has(matchIdx);
      matchIdx++;
      return shouldKeep ? fullMatch : anchorText;
    });
  }

  // Recalculate
  matches = [...content.matchAll(linkRegex)];

  // If < 4 links, add more natural anchor links
  if (matches.length < 4) {
    const lines = content.split('\n');
    let inCodeBlock = false;
    let currentLinkCount = matches.length;

    for (let i = 0; i < lines.length && currentLinkCount < 5; i++) {
      let line = lines[i];
      if (line.trim().startsWith('```')) {
        inCodeBlock = !inCodeBlock;
        continue;
      }
      if (inCodeBlock) continue;
      if (line.trim().startsWith('#') || line.trim().startsWith('|') || line.trim().startsWith('![') || line.trim().startsWith('---')) {
        continue;
      }

      for (const phrase of CANDIDATE_PHRASES) {
        if (currentLinkCount >= 5) break;

        const regex = new RegExp(`(?<!\\[|\\()\\b(${phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})\\b(?!\\]|\\))`, 'i');
        if (regex.test(line)) {
          const matchPos = line.search(regex);
          const before = line.substring(0, matchPos);
          const openBracketsBefore = (before.match(/\[/g) || []).length;
          const closeBracketsBefore = (before.match(/\]/g) || []).length;
          if (openBracketsBefore === closeBracketsBefore) {
            line = line.replace(regex, `[$1](${TARGET_URL})`);
            lines[i] = line;
            currentLinkCount++;
          }
        }
      }
    }

    // If still < 4, inject into key sections (e.g. conclusion / intro)
    if (currentLinkCount < 4) {
      for (let i = lines.length - 1; i >= 0 && currentLinkCount < 4; i--) {
        if (lines[i].includes('Digital Digix') && !lines[i].includes(`](${TARGET_URL})`)) {
          lines[i] = lines[i].replace(/Digital Digix/g, `[Digital Digix](${TARGET_URL})`);
          currentLinkCount++;
        }
      }
    }

    if (currentLinkCount < 4) {
      lines.push(`\nExplore how [Digital Digix](${TARGET_URL}) provides [full-funnel growth architecture](${TARGET_URL}) and [strategic growth consultation](${TARGET_URL}) to accelerate your market expansion.`);
    }

    content = lines.join('\n');
  }

  // Final check
  const finalMatches = [...content.matchAll(linkRegex)];
  if (finalMatches.length < 4) stats.underFour++;
  else if (finalMatches.length <= 5) stats.exactFourOrFive++;
  else stats.overFive++;

  fs.writeFileSync(filePath, content, 'utf8');
});

console.log('Fine-tuning results across all blogs:');
console.log(stats);
