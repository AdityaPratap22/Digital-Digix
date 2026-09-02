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
    ? `Digital Marketing for ${industry.name} — Growth Playbook`
    : 'Industry Growth Playbook';
  const description = industry
    ? `Proven performance marketing, SEO, Meta/Google ads, and WhatsApp CRM systems engineered for ${industry.name} scaling. Explore our dedicated ${industry.name} growth playbook.`
    : 'Custom digital growth strategies across 89+ global industries.';

  const canonicalSlug = industry ? `marketing-in-${industry.id}` : rawSlug;
  const canonicalUrl = `https://digitaldigix.com/industries/${canonicalSlug}`;

  return {
    title,
    description,
    keywords: industry
      ? [
          `Digital Marketing ${industry.name}`,
          `SEO for ${industry.name}`,
          `Performance Marketing ${industry.name}`,
          `Google Ads ${industry.name}`,
          `${industry.name} Growth Strategy`,
        ]
      : ['Industry Digital Marketing', 'Niche Marketing'],
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
          alt: `Digital Digix — ${title}`,
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

export default async function IndustryRoutePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
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

  const professionalServiceSchema = industry
    ? {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        name: `Digital Marketing for ${industry.name}`,
        description: `Specialized digital marketing, SEO, and performance growth strategies for the ${industry.name} industry.`,
        provider: {
          '@type': 'Organization',
          name: 'Digital Digix',
          url: 'https://digitaldigix.com',
        },
        areaServed: 'Worldwide',
        serviceType: 'Digital Marketing',
        url: `https://digitaldigix.com/industries/marketing-in-${industry.id}`,
      }
    : null;

  return (
    <>
      {professionalServiceSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
        />
      )}
      <IndustryClient slug={rawSlug} />
    </>
  );
}
