import type { Metadata } from 'next';
import { PortfolioPageClient } from './PortfolioPageClient';

export const metadata: Metadata = {
  title: 'Portfolio — Social Media & Performance Marketing Results | Digital Digix',
  description: 'Explore real campaign results, social media growth stories, ROAS metrics, and creative work from Digital Digix. 50+ brands scaled across India and international markets.',
  keywords: [
    'Digital Marketing Portfolio',
    'Social Media Marketing Results',
    'Performance Marketing Case Studies',
    'Digital Digix Work',
    'Marketing Agency Portfolio India',
    'ROAS Results',
    'Instagram Growth Agency'
  ],
  alternates: {
    canonical: 'https://digitaldigix.com/portfolio',
  },
  openGraph: {
    title: 'Portfolio — Real Marketing Results | Digital Digix',
    description: 'Real ROAS numbers, social media growth, and creative work from 50+ brands scaled by Digital Digix.',
    url: 'https://digitaldigix.com/portfolio',
    siteName: 'Digital Digix',
    type: 'website',
    images: [
      {
        url: 'https://digitaldigix.com/digital_digix_logo.png',
        width: 800,
        height: 600,
        alt: 'Digital Digix Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio — Real Marketing Results | Digital Digix',
    description: 'Real ROAS numbers and creative work from 50+ brands scaled by Digital Digix.',
    images: ['https://digitaldigix.com/digital_digix_logo.png'],
  },
};

export default function PortfolioOverviewPage() {
  return <PortfolioPageClient />;
}
