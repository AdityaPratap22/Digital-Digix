import type { Metadata } from 'next';
import { SmmPageClient } from './SmmPageClient';

export const metadata: Metadata = {
  title: 'Social Media Marketing (SMM) Services — Retainer-Based Growth | Digital Digix',
  description: 'Results-driven social media marketing retainers from Digital Digix. Instagram, Facebook, LinkedIn, and YouTube content, community management, paid ads, and analytics — all in one managed package.',
  keywords: [
    'Social Media Marketing Agency India',
    'SMM Retainer Services',
    'Instagram Marketing Agency',
    'Facebook Ads Management',
    'LinkedIn Marketing Agency',
    'YouTube Growth Agency',
    'Social Media Management Noida',
    'Digital Digix SMM'
  ],
  alternates: {
    canonical: 'https://digitaldigix.com/smm',
  },
  openGraph: {
    title: 'Social Media Marketing (SMM) Services | Digital Digix',
    description: 'Retainer-based social media marketing across Instagram, Facebook, LinkedIn & YouTube with transparent reporting.',
    url: 'https://digitaldigix.com/smm',
    siteName: 'Digital Digix',
    type: 'website',
    images: [
      {
        url: 'https://digitaldigix.com/digital_digix_logo.png',
        width: 800,
        height: 600,
        alt: 'Digital Digix Social Media Marketing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Social Media Marketing Services | Digital Digix',
    description: 'Retainer-based SMM services with transparent reporting and real results.',
    images: ['https://digitaldigix.com/digital_digix_logo.png'],
  },
};

export default function SocialMediaMarketingPage() {
  return <SmmPageClient />;
}
