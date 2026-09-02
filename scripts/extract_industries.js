import fs from 'fs';

const content = fs.readFileSync('src/views/IndustriesPage.tsx', 'utf8');
const startIdx = content.indexOf('export interface IndustryItem');
const endIdx = content.indexOf('export const IndustriesPage:');

if (startIdx !== -1 && endIdx !== -1) {
  const dataBlock = content.substring(startIdx, endIdx);
  fs.writeFileSync('src/data/industriesData.ts', dataBlock.trim() + '\n');
  
  const replacement = `import { IndustryItem, industryCategories, all89IndustriesList } from '../data/industriesData';
export { type IndustryItem, industryCategories, all89IndustriesList };

interface IndustriesPageProps {
  onNavigate: (page: any, slug?: string) => void;
  onOpenStrategyModal: (note?: string) => void;
}

`;
  
  const newContent = content.substring(0, startIdx) + replacement + content.substring(endIdx);
  fs.writeFileSync('src/views/IndustriesPage.tsx', newContent);
  console.log('Successfully extracted industriesData.ts and updated IndustriesPage.tsx');
} else {
  console.error('Indices not found:', startIdx, endIdx);
}
