import React from 'react';
import type { Metadata } from 'next';
import { all89IndustriesList } from '@/data/industriesData';
import { IndustryClient } from './IndustryClient';

export function generateStaticParams() {
  const params: { slug: string }[] = [];
  all89IndustriesList.forEach((ind) => {
    params.push({ slug: `marketing-in-${ind.id}` });
    params.push({ slug: ind.id });
  });
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug: rawSlug } = await params;
  const decoded = decodeURIComponent(rawSlug).toLowerCase();
  const cleanId = decoded
    .replace(/^marketing-in-/, '')
    .replace(/^marketing-for-/, '')
    .replace(/^marketing-/, '')
    .replace(/^digital-marketing-for-/, '')
    .replace(/^digital-marketing-in-/, '')
    .replace(/^digital-marketing-/, '');

  const industry = all89IndustriesList.find(
    (item) => item.id === cleanId || item.name.toLowerCase().replace(/[^a-z0-9]/g, '-') === cleanId
  );

  const title = industry
    ? `Digital Marketing & Growth Playbook for ${industry.name} | Digital Digix`
    : 'Industry Growth Playbook | Digital Digix';

  const description = industry
    ? `Proven performance marketing, SEO, Meta/Google ads, and WhatsApp CRM systems engineered for ${industry.name} scaling.`
    : 'Custom digital growth strategies across 89+ global industries.';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://digitaldigix.com/industries/${rawSlug}`,
      siteName: 'Digital Digix',
    },
  };
}

export default async function IndustryRoutePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <IndustryClient slug={slug} />;
}
