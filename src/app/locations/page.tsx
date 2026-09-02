import type { Metadata } from 'next';
import { LocationsPageClient } from './LocationsPageClient';

export const metadata: Metadata = {
  title: 'Digital Marketing Locations — Global Markets We Serve | Digital Digix',
  description: 'Digital Digix serves 1,384+ international markets across Europe, North America, Middle East, and beyond. Find your city and explore tailored digital marketing strategies for your local market.',
  keywords: [
    'Digital Marketing International',
    'Global Digital Agency',
    'Digital Marketing UK',
    'Digital Marketing UAE',
    'Digital Marketing USA',
    'Digital Marketing France',
    'Digital Marketing Germany',
    'International SEO Agency',
    'Digital Digix Locations'
  ],
  alternates: {
    canonical: 'https://digitaldigix.com/locations',
  },
  openGraph: {
    title: 'Digital Marketing Locations — 1,384+ Markets Worldwide | Digital Digix',
    description: 'Explore Digital Digix\'s reach across 1,384+ international markets in Europe, North America, Middle East and beyond.',
    url: 'https://digitaldigix.com/locations',
    siteName: 'Digital Digix',
    type: 'website',
    images: [
      {
        url: 'https://digitaldigix.com/digital_digix_logo.png',
        width: 800,
        height: 600,
        alt: 'Digital Digix Global Locations',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Global Digital Marketing Locations | Digital Digix',
    description: '1,384+ markets served worldwide. Find your city.',
    images: ['https://digitaldigix.com/digital_digix_logo.png'],
  },
};

export default function LocationsDirectoryOverviewPage() {
  return <LocationsPageClient />;
}
