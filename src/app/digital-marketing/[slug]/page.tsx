import React from 'react';
import type { Metadata } from 'next';
import { ALL_COUNTRY_LOCATIONS, formatLocationName } from '@/data/locationsData';
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
  const titleLocation = formatLocationName(rawSlug);

  const title = `Digital Marketing in ${titleLocation} — Top Performance Agency`;
  const description = `Scale your business in ${titleLocation} with Digital Digix. Performance marketing, SEO, Meta & Google Ads, Social Media retainers, and custom web development with zero lock-in contracts.`;
  const canonicalUrl = `https://digitaldigix.com/digital-marketing/${rawSlug}`;

  return {
    title,
    description,
    keywords: [
      `Digital Marketing ${titleLocation}`,
      `SEO Agency ${titleLocation}`,
      `Social Media Marketing ${titleLocation}`,
      `Performance Marketing ${titleLocation}`,
      `Web Development ${titleLocation}`,
      `Google Ads ${titleLocation}`,
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: 'Digital Digix',
      type: 'website',
      images: [
        {
          url: 'https://digitaldigix.com/digital_digix_logo.png',
          width: 800,
          height: 600,
          alt: `Digital Digix — ${titleLocation}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://digitaldigix.com/digital_digix_logo.png'],
    },
  };
}

export default async function DigitalMarketingLocationRoutePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug: rawSlug } = await params;
  const titleLocation = formatLocationName(rawSlug);

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `Digital Digix — Digital Marketing in ${titleLocation}`,
    description: `Top-rated digital marketing agency serving ${titleLocation}. Performance marketing, SEO, Social Media, and web development.`,
    url: `https://digitaldigix.com/digital-marketing/${rawSlug}`,
    telephone: '+918586989832',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Sector 62',
      addressLocality: 'Noida',
      addressRegion: 'Uttar Pradesh',
      postalCode: '201309',
      addressCountry: 'IN',
    },
    areaServed: titleLocation,
    priceRange: '$$',
    openingHours: 'Mo-Sa 09:00-19:00',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <LocationClient slug={rawSlug} />
    </>
  );
}
