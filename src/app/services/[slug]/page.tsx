import React from 'react';
import type { Metadata } from 'next';
import { ServiceClient } from './ServiceClient';

export function generateStaticParams() {
  return [
    { slug: 'social-media-marketing' },
    { slug: 'graphic-design' },
    { slug: 'dashboard-kpi-systems' },
    { slug: 'seo-services' },
    { slug: 'website-development' },
    { slug: 'personal-branding' },
    { slug: 'performance-marketing' },
    { slug: 'content-marketing' },
    { slug: 'influencer-marketing' },
    { slug: 'lead-generation' },
    { slug: 'video-editing-production' },
    { slug: 'email-marketing' },
    { slug: 'ecommerce-growth' },
    { slug: 'brand-strategy' },
    { slug: 'whatsapp-marketing' },
    { slug: 'app-store-optimization' },
    { slug: 'analytics-tracking' },
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const titleSlug = slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  const title = `${titleSlug} | Performance Digital Agency | Digital Digix`;
  const description = `Explore high-ROI ${titleSlug} services with Digital Digix. Zero lock-in contracts, founder-led strategy, and transparent pricing.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://digitaldigix.com/services/${slug}`,
      siteName: 'Digital Digix',
    },
  };
}

export default async function ServiceRoutePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <ServiceClient slug={slug} />;
}
