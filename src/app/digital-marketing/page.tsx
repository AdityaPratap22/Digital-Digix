import type { Metadata } from 'next';
import { DigitalMarketingPageClient } from './DigitalMarketingPageClient';

export const metadata: Metadata = {
  title: 'Digital Marketing Services Worldwide — Local SEO & Performance Growth | Digital Digix',
  description: 'Digital Digix delivers expert digital marketing services across 1,384+ global markets. From London to Dubai to São Paulo — performance marketing, SEO, social media, and web development tailored to your city.',
  keywords: [
    'Digital Marketing Agency',
    'International Digital Marketing',
    'Local SEO Services',
    'Performance Marketing Global',
    'Digital Marketing London',
    'Digital Marketing Dubai',
    'Digital Marketing Singapore',
    'Global Performance Agency',
    'Digital Digix International'
  ],
  alternates: {
    canonical: 'https://digitaldigix.com/digital-marketing',
  },
  openGraph: {
    title: 'Digital Marketing Services Worldwide | Digital Digix',
    description: 'Expert digital marketing across 1,384+ global markets — tailored to your city and industry.',
    url: 'https://digitaldigix.com/digital-marketing',
    siteName: 'Digital Digix',
    type: 'website',
    images: [
      {
        url: 'https://digitaldigix.com/digital_digix_logo.png',
        width: 800,
        height: 600,
        alt: 'Digital Digix Global Digital Marketing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Worldwide | Digital Digix',
    description: 'Performance marketing, SEO, and SMM across 1,384+ global cities.',
    images: ['https://digitaldigix.com/digital_digix_logo.png'],
  },
};

export default function DigitalMarketingDirectoryOverviewPage() {
  return <DigitalMarketingPageClient />;
}
