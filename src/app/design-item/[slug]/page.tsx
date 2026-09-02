import React from 'react';
import type { Metadata } from 'next';
import { DesignItemClient } from './DesignItemClient';

export function generateStaticParams() {
  const params: { slug: string }[] = [];
  for (let i = 1; i <= 45; i++) {
    params.push({ slug: `card_${i}` });
    params.push({ slug: String(i) });
  }
  return params;
}

export const metadata: Metadata = {
  title: 'Design Asset Detail & Production Showcase | Digital Digix',
  description: 'Verified creative asset, packaging mockup, and performance marketing creative sample.',
};

export default async function DesignItemSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <DesignItemClient slug={slug} />;
}
