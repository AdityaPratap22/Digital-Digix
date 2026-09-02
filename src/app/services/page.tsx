import type { Metadata } from 'next';
import { ServicesPageClient } from './ServicesPageClient';

export const metadata: Metadata = {
  title: 'Digital Marketing Services — Performance, SEO, SMM & Web Dev | Digital Digix',
  description: 'Explore Digital Digix\'s full suite of digital marketing services including Performance Marketing, SEO, Social Media Management, Website Development, Graphic Design, and more. Zero lock-in contracts.',
  keywords: [
    'Digital Marketing Services',
    'Performance Marketing Agency India',
    'SEO Services',
    'Social Media Management',
    'Website Development',
    'Google Ads Agency',
    'Meta Ads Agency',
    'WhatsApp Marketing',
    'Content Marketing',
    'Digital Digix Services'
  ],
  alternates: {
    canonical: 'https://digitaldigix.com/services',
  },
  openGraph: {
    title: 'Digital Marketing Services — Performance, SEO, SMM & Web Dev | Digital Digix',
    description: 'Full-suite digital marketing services with zero lock-in contracts. Performance marketing, SEO, SMM, web development, and more.',
    url: 'https://digitaldigix.com/services',
    siteName: 'Digital Digix',
    type: 'website',
    images: [
      {
        url: 'https://digitaldigix.com/digital_digix_logo.png',
        width: 800,
        height: 600,
        alt: 'Digital Digix Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Services | Digital Digix',
    description: 'Full-suite digital marketing services with zero lock-in contracts.',
    images: ['https://digitaldigix.com/digital_digix_logo.png'],
  },
};

export default function ServicesOverviewPage() {
  return <ServicesPageClient />;
}
