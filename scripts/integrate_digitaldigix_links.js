import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const publicBlogsDir = path.join(rootDir, 'public', 'blogs');

console.log('Public blogs directory:', publicBlogsDir);
const files = fs.readdirSync(publicBlogsDir).filter(f => f.endsWith('.md'));
console.log('Total markdown files to process:', files.length);

const TARGET_URL = 'https://digitaldigix.com';

// Candidate anchor phrases for natural integration across marketing and industry topics
const ANCHOR_CANDIDATES = [
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
  'advanced performance marketing',
  'high-ticket customer acquisition',
  'strategic digital roadmap'
];

let processedCount = 0;
let totalLinksAdded = 0;
let fileStats = {
  zeroLinks: 0,
  oneToThree: 0,
  fourToFive: 0,
  moreThanFive: 0
};

files.forEach((filename) => {
  const filePath = path.join(publicBlogsDir, filename);
  let content = fs.readFileSync(filePath, 'utf8');

  // 1. Clean up any broken or legacy placeholder internal links
  content = content.replace(/\[Internal Link:\s*([^\]]+)\]/gi, (match, p1) => {
    return `[${p1.trim()}](${TARGET_URL})`;
  });

  // 2. Count current links to digitaldigix.com or other markdown links
  const existingMatches = content.match(/\[([^\]]+)\]\((https?:\/\/[^\)]+|#[^\)]+)\)/g) || [];
  let existingDigitalDigixLinks = (content.match(/\[([^\]]+)\]\(https:\/\/digitaldigix\.com\/?\)/g) || []).length;

  // 3. We want 4 to 5 integrated links in every blog.
  const targetLinkCount = 5;

  if (existingDigitalDigixLinks < targetLinkCount) {
    // Break content into lines to avoid modifying code blocks or H1 headings
    const lines = content.split('\n');
    let inCodeBlock = false;
    let addedInThisFile = existingDigitalDigixLinks;

    for (let i = 0; i < lines.length && addedInThisFile < targetLinkCount; i++) {
      let line = lines[i];

      // Track code blocks
      if (line.trim().startsWith('```')) {
        inCodeBlock = !inCodeBlock;
        continue;
      }
      if (inCodeBlock) continue;

      // Avoid headings (lines starting with #) or tables or image tags
      if (line.trim().startsWith('#') || line.trim().startsWith('|') || line.trim().startsWith('![') || line.trim().startsWith('---')) {
        continue;
      }

      // Try replacing candidates in this line (only if candidate isn't already inside a markdown link)
      for (const candidate of ANCHOR_CANDIDATES) {
        if (addedInThisFile >= targetLinkCount) break;

        // Check if candidate exists in line
        const regex = new RegExp(`(?<!\\[|\\()\\b(${candidate.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})\\b(?!\\]|\\))`, 'i');
        
        if (regex.test(line)) {
          // Check that it's not already inside a link
          const matchPos = line.search(regex);
          const before = line.substring(0, matchPos);
          const after = line.substring(matchPos);
          
          // Simple check: make sure brackets are balanced in before string
          const openBracketsBefore = (before.match(/\[/g) || []).length;
          const closeBracketsBefore = (before.match(/\]/g) || []).length;
          if (openBracketsBefore === closeBracketsBefore) {
            line = line.replace(regex, `[$1](${TARGET_URL})`);
            lines[i] = line;
            addedInThisFile++;
            totalLinksAdded++;
          }
        }
      }
    }

    // If still under 4 links (e.g. very specialized phrasing), add high-context links in key sections
    if (addedInThisFile < 4) {
      for (let i = lines.length - 1; i >= 0 && addedInThisFile < 4; i--) {
        let line = lines[i];
        if (line.includes('Digital Digix') && !line.includes(`](${TARGET_URL})`)) {
          line = line.replace(/Digital Digix/g, `[Digital Digix](${TARGET_URL})`);
          lines[i] = line;
          addedInThisFile++;
          totalLinksAdded++;
        }
      }
    }

    // If still under 4, ensure the closing section has clear integrated links
    if (addedInThisFile < 4) {
      const closingCtaIndex = lines.findIndex(l => l.includes('Partner With Digital Digix') || l.includes('## Partner With'));
      if (closingCtaIndex !== -1) {
        // Append an integrated strategic consultation link if not already present
        lines.splice(closingCtaIndex + 3, 0, `\nDiscover how [Digital Digix full-funnel solutions](${TARGET_URL}) and our [strategic growth consultation](${TARGET_URL}) accelerate your market expansion.`);
        addedInThisFile += 2;
        totalLinksAdded += 2;
      }
    }

    content = lines.join('\n');
  }

  // Count final links
  const finalLinkMatches = (content.match(/\[([^\]]+)\]\(https:\/\/digitaldigix\.com\/?\)/g) || []).length;
  if (finalLinkMatches === 0) fileStats.zeroLinks++;
  else if (finalLinkMatches <= 3) fileStats.oneToThree++;
  else if (finalLinkMatches <= 5) fileStats.fourToFive++;
  else fileStats.moreThanFive++;

  fs.writeFileSync(filePath, content, 'utf8');
  processedCount++;
});

console.log(`Processed ${processedCount} markdown files.`);
console.log(`Total integrated digitaldigix.com links added: ${totalLinksAdded}`);
console.log('Final link distribution per blog:', fileStats);
