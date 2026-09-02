import React from 'react';
import type { Metadata } from 'next';
import { AboutClient } from './AboutClient';

export function generateStaticParams() {
  return [
    { slug: 'harsh-chaudhary' },
    { slug: 'khwahish-sahai' },
    { slug: 'why-choose-us' },
    { slug: 'team' },
    { slug: 'founder' },
    { slug: 'co-founder' },
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug: rawSlug } = await params;
  const slug = decodeURIComponent(rawSlug).toLowerCase();

  let title = 'Leadership & Team';
  let description = 'Learn more about Digital Digix leadership, founders, and why businesses choose us for digital growth.';

  if (slug.includes('khwahish') || slug.includes('co-founder')) {
    title = 'Khwahish Sahai — Co-Founder & Creative Director';
    description = 'Meet Khwahish Sahai, Co-Founder & Creative Director at Digital Digix leading visual brand storytelling, UI/UX design, and social media architecture.';
  } else if (slug.includes('why') || slug.includes('why-us') || slug.includes('why-choose-us')) {
    title = 'Why Choose Digital Digix — Results-Driven Marketing & Zero Lock-in';
    description = 'Discover why 100+ businesses partner with Digital Digix for performance marketing, SEO, SMM retainers, and transparent milestone delivery.';
  } else if (slug.includes('team') || slug.includes('our-team')) {
    title = 'Our Global Team';
    description = 'Meet the designers, performance media buyers, and engineers scaling brands globally with Digital Digix.';
  } else {
    title = 'Harsh Chaudhary — Founder & CEO';
    description = 'Meet Harsh Chaudhary, Founder & CEO at Digital Digix specializing in performance marketing, growth architecture, and scaling enterprise ROI.';
  }

  const canonicalUrl = `https://digitaldigix.com/about/${rawSlug}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: 'Digital Digix',
      type: 'profile',
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

export default async function AboutRoutePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <AboutClient slug={slug} />;
}
