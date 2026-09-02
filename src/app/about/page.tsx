import type { Metadata } from 'next';
import { AboutPageClient } from './AboutPageClient';

export const metadata: Metadata = {
  title: 'About Digital Digix — Founder-Led Performance Marketing Agency | India',
  description: 'Learn about Digital Digix — a founder-led, performance-first digital marketing agency from Noida, India. Meet the team, our growth philosophy, and why 100+ brands trust us with their digital future.',
  keywords: [
    'About Digital Digix',
    'Digital Marketing Agency India',
    'Performance Marketing Agency Noida',
    'Harsh Chaudhary Digital Marketing',
    'Founder Led Agency',
    'Why Choose Digital Digix',
    'Digital Agency Team India'
  ],
  alternates: {
    canonical: 'https://digitaldigix.com/about',
  },
  openGraph: {
    title: 'About Digital Digix — Founder-Led Performance Marketing Agency | India',
    description: 'Founder-led digital marketing agency from Noida, India. Meet the team and our growth philosophy.',
    url: 'https://digitaldigix.com/about',
    siteName: 'Digital Digix',
    type: 'website',
    images: [
      {
        url: 'https://digitaldigix.com/digital_digix_logo.png',
        width: 800,
        height: 600,
        alt: 'About Digital Digix',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Digital Digix | Founder-Led Marketing Agency',
    description: 'Meet the team behind Digital Digix — India\'s performance-first digital marketing agency.',
    images: ['https://digitaldigix.com/digital_digix_logo.png'],
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
