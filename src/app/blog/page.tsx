import type { Metadata } from 'next';
import { BlogPageClient } from './BlogPageClient';

export const metadata: Metadata = {
  title: 'Digital Marketing Blog — SEO, Performance & Growth Insights | Digital Digix',
  description: 'Explore 1,500+ expert articles on performance marketing, SEO, generative engine optimization (GEO/AEO), paid ads, social media, and digital growth strategies from the Digital Digix team.',
  keywords: [
    'Digital Marketing Blog',
    'SEO Tips',
    'Performance Marketing Articles',
    'GEO AEO Insights',
    'Social Media Marketing Blog',
    'Google Ads Guide',
    'Meta Ads Strategy',
    'Digital Digix Blog'
  ],
  alternates: {
    canonical: 'https://digitaldigix.com/blog',
  },
  openGraph: {
    title: 'Digital Marketing Blog — SEO, Performance & Growth Insights | Digital Digix',
    description: 'Explore 1,500+ expert articles on performance marketing, SEO, GEO/AEO, and digital growth strategies.',
    url: 'https://digitaldigix.com/blog',
    siteName: 'Digital Digix',
    type: 'website',
    images: [
      {
        url: 'https://digitaldigix.com/digital_digix_logo.png',
        width: 800,
        height: 600,
        alt: 'Digital Digix Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Blog — SEO, Performance & Growth Insights | Digital Digix',
    description: 'Explore 1,500+ expert articles on performance marketing, SEO, and digital growth.',
    images: ['https://digitaldigix.com/digital_digix_logo.png'],
  },
};

export default function BlogDirectoryPage() {
  return <BlogPageClient />;
}
