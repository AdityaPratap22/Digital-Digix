import React from 'react';
import type { Metadata } from 'next';
import { ALL_COUNTRY_LOCATIONS } from '@/data/locationsData';
import { LocationClient } from './LocationClient';

export function generateStaticParams() {
  const slugs = new Set<string>();
  ALL_COUNTRY_LOCATIONS.forEach((c) => {
    slugs.add(c.country.toLowerCase().replace(/\s+/g, '-'));
    slugs.add(c.capital.toLowerCase().replace(/\s+/g, '-'));
    c.majorCities.forEach((city) => slugs.add(city.toLowerCase().replace(/\s+/g, '-')));
    c.regionalCities.forEach((city) => slugs.add(city.toLowerCase().replace(/\s+/g, '-')));
  });
  return Array.from(slugs).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug: rawSlug } = await params;
  const decoded = decodeURIComponent(rawSlug).toLowerCase();
  const cleanLocation = decoded
    .replace(/^digital-marketing-in-/, '')
    .replace(/^digital-marketing-for-/, '')
    .replace(/^digital-marketing-/, '')
    .replace(/-/g, ' ');

  const titleLocation = cleanLocation
    .split(' ')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  const title = `Digital Marketing in ${titleLocation} | Top Agency & Performance Growth | Digital Digix`;
  const description = `Scale your business in ${titleLocation} with Digital Digix. Performance marketing, SEO, Meta & Google Ads, Social Media retainers, and custom web development with zero lock-in contracts.`;

  return {
    title,
    description,
    keywords: [
      `Digital Marketing ${titleLocation}`,
      `SEO Agency ${titleLocation}`,
      `Social Media Marketing ${titleLocation}`,
      `Performance Marketing ${titleLocation}`,
      `Web Development ${titleLocation}`
    ],
    openGraph: {
      title,
      description,
      url: `https://digitaldigix.com/digital-marketing/${rawSlug}`,
      siteName: 'Digital Digix',
    },
  };
}

export default async function DigitalMarketingLocationRoutePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <LocationClient slug={slug} />;
}
