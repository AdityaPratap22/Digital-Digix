import React from 'react';
import type { Metadata } from 'next';
import { ServiceClient } from './ServiceClient';

const SERVICE_MAP: Record<string, { title: string; description: string; keywords: string[] }> = {
  'social-media-marketing': {
    title: 'Social Media Marketing Services',
    description: 'Data-driven social media marketing services to grow your brand on Instagram, Facebook, LinkedIn and YouTube with measurable ROI.',
    keywords: ['Social Media Marketing', 'Instagram Marketing', 'Facebook Ads', 'LinkedIn Marketing'],
  },
  'graphic-design': {
    title: 'Graphic Design Services — Per-Design Rates & Fast Turnaround',
    description: 'High-impact graphic design with transparent per-design rates, 24–48 hour turnaround, source files included, and zero lock-in contracts.',
    keywords: ['Graphic Design Agency', 'Brand Identity Design', 'Social Media Design', 'Logo Design', 'Per-Design Rates', 'Fast Turnaround Design'],
  },
  'dashboard-kpi-systems': {
    title: 'Dashboard & KPI Systems',
    description: 'Custom marketing dashboards and KPI tracking systems that give you real-time visibility into campaign performance and business metrics.',
    keywords: ['Marketing Dashboard', 'KPI Tracking', 'Analytics Dashboard', 'Business Intelligence'],
  },
  'seo-services': {
    title: 'SEO Services',
    description: 'Comprehensive SEO services including technical SEO, on-page optimization, link building, and Generative Engine Optimization (GEO/AEO) to dominate search rankings.',
    keywords: ['SEO Services India', 'Technical SEO', 'On-Page SEO', 'Link Building', 'GEO AEO'],
  },
  'website-development': {
    title: 'Website Development Services',
    description: 'Custom website development using Next.js, React, and modern web technologies. Fast, SEO-ready, and conversion-optimized websites.',
    keywords: ['Website Development India', 'Next.js Development', 'React Website', 'Web Development Agency'],
  },
  'performance-marketing': {
    title: 'Performance Marketing Services',
    description: 'Full-funnel performance marketing with Google Ads, Meta Ads, and retargeting systems engineered for maximum ROAS and customer acquisition.',
    keywords: ['Performance Marketing India', 'Google Ads Agency', 'Meta Ads Management', 'ROAS Optimization'],
  },
};

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
  const serviceData = SERVICE_MAP[slug];
  const titleSlug = slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  const title = slug === 'graphic-design'
    ? 'Graphic Design Services — Per-Design Rates & Fast Turnaround'
    : serviceData?.title
      ? `${serviceData.title} — Zero Lock-In Agency`
      : `${titleSlug} — Zero Lock-In Agency`;
  const description = serviceData?.description
    ? serviceData.description
    : `High-ROI ${titleSlug} services with Digital Digix. Zero lock-in contracts, founder-led strategy, and transparent pricing.`;
  const keywords = serviceData?.keywords || [titleSlug, 'Digital Marketing', 'Digital Digix'];
  const canonicalUrl = `https://digitaldigix.com/services/${slug}`;

  return {
    title,
    description,
    keywords,
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

export default async function ServiceRoutePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const serviceData = SERVICE_MAP[slug];
  const titleSlug = slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceData?.title || titleSlug,
    description: serviceData?.description || `${titleSlug} services from Digital Digix.`,
    provider: {
      '@type': 'Organization',
      name: 'Digital Digix',
      url: 'https://digitaldigix.com',
    },
    areaServed: 'Worldwide',
    url: `https://digitaldigix.com/services/${slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ServiceClient slug={slug} />
    </>
  );
}
