import React from 'react';
import type { Metadata } from 'next';
import { ALL_BLOGS } from '@/data/blogData';
import { BlogPostClient } from './BlogPostClient';

export function generateStaticParams() {
  return ALL_BLOGS.map((b) => ({
    slug: b.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug: rawSlug } = await params;
  const slug = decodeURIComponent(rawSlug);
  const blog = ALL_BLOGS.find((b) => b.slug === slug || b.slug === rawSlug);

  if (!blog) {
    return {
      title: 'Article Not Found',
      description: 'Explore in-depth performance marketing, SEO, and digital strategy insights.',
      alternates: { canonical: 'https://digitaldigix.com/blog' },
    };
  }

  const title = blog.title;
  const description = blog.excerpt || 'Explore in-depth performance marketing, SEO, and digital strategy insights.';
  const canonicalUrl = `https://digitaldigix.com/blog/${blog.slug}`;
  const ogImage = 'https://digitaldigix.com/digital_digix_logo.png';

  return {
    title,
    description,
    keywords: [blog.keyword, blog.keyword2, ...blog.tags].filter(Boolean) as string[],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      type: 'article',
      url: canonicalUrl,
      siteName: 'Digital Digix',
      publishedTime: blog.date,
      authors: ['Digital Digix'],
      tags: blog.tags,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function BlogPostRoutePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug: rawSlug } = await params;
  const slug = decodeURIComponent(rawSlug);
  const blog = ALL_BLOGS.find((b) => b.slug === slug || b.slug === rawSlug);

  const articleSchema = blog
    ? {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: blog.title,
        description: blog.excerpt || '',
        datePublished: blog.date,
        dateModified: blog.date,
        author: {
          '@type': 'Organization',
          name: 'Digital Digix',
          url: 'https://digitaldigix.com',
        },
        publisher: {
          '@type': 'Organization',
          name: 'Digital Digix',
          logo: {
            '@type': 'ImageObject',
            url: 'https://digitaldigix.com/digital_digix_logo.png',
          },
        },
        url: `https://digitaldigix.com/blog/${blog.slug}`,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `https://digitaldigix.com/blog/${blog.slug}`,
        },
        keywords: [blog.keyword, blog.keyword2, ...blog.tags].filter(Boolean).join(', '),
        articleSection: blog.category || 'Digital Marketing',
      }
    : null;

  return (
    <>
      {articleSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      )}
      <BlogPostClient slug={rawSlug} />
    </>
  );
}
