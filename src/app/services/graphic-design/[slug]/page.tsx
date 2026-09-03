import React from 'react';
import type { Metadata } from 'next';
import { GraphicDesignSubClient } from './GraphicDesignSubClient';
import { graphicDesignPricingData, getGraphicServiceName } from '@/data/graphicDesignData';

export function generateStaticParams() {
  const slugs = new Set<string>();

  // Bundle and category slugs
  [
    'standard-creatives',
    'structured-design',
    'multi-page-documents',
    'social-media',
    'branding-identity',
    'print-collateral',
    'packaging-labels',
    'digital-ads',
    'illustrations',
    'all',
  ].forEach((s) => slugs.add(s));

  // All individual design service items from pricing data
  graphicDesignPricingData.forEach((cat) => {
    const catSlug = cat.title.split('—')[0].trim().toLowerCase().replace(' & ', '-').replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-');
    slugs.add(catSlug);
    cat.items.forEach((item) => {
      const itemSlug = item.name.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-');
      slugs.add(itemSlug);
    });
  });

  // Numeric card indices
  for (let i = 1; i <= 45; i++) {
    slugs.add(`card_${i}`);
    slugs.add(String(i));
  }

  return Array.from(slugs).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug: rawSlug } = await params;
  const serviceName = getGraphicServiceName(rawSlug);
  const title = `${serviceName} — Formats, Pricing & Turnaround`;
  const description = `Professional ${serviceName} services by Digital Digix. Premium visual assets, 24–48h turnaround, editable source files, and transparent pricing with zero lock-in contracts.`;
  const canonicalUrl = `https://digitaldigix.com/services/graphic-design/${rawSlug}`;

  return {
    title,
    description,
    keywords: [
      serviceName,
      `${serviceName} Design`,
      'Graphic Design Services',
      'Digital Digix Graphic Design',
      'Creative Design Agency',
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
          alt: `Digital Digix — ${serviceName}`,
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

export default async function GraphicDesignSubRoutePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const serviceName = getGraphicServiceName(slug);

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description: `Professional ${serviceName} by Digital Digix.`,
    provider: {
      '@type': 'Organization',
      name: 'Digital Digix',
      url: 'https://digitaldigix.com',
    },
    areaServed: 'Worldwide',
    url: `https://digitaldigix.com/services/graphic-design/${slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <GraphicDesignSubClient slug={slug} />
    </>
  );
}
