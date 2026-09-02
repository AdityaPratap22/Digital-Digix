import React from 'react';
import type { Metadata } from 'next';
import { GraphicDetailClient } from './GraphicDetailClient';

export function generateStaticParams() {
  return [
    { slug: 'social-media' },
    { slug: 'branding-identity' },
    { slug: 'print-collateral' },
    { slug: 'packaging-labels' },
    { slug: 'digital-ads' },
    { slug: 'illustrations' },
    { slug: 'all' },
  ];
}

export const metadata: Metadata = {
  title: 'Graphic Design & Creative Production | Digital Digix',
  description: 'High-conversion visual creatives, brand identity packages, pitch decks, social media templates, and retail packaging design with transparent pricing.',
};

export default async function GraphicCategorySlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <GraphicDetailClient slug={slug} />;
}
