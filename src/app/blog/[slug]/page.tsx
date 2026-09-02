import React from 'react';
import fs from 'fs';
import path from 'path';
import type { Metadata } from 'next';
import { ALL_BLOGS } from '@/data/blogData';
import { BlogPostClient } from './BlogPostClient';

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
      title: 'Article | Digital Digix',
      description: 'Explore in-depth performance marketing, SEO, and digital strategy insights.',
    };
  }

  const title = `${blog.title} | Digital Digix`;
  const description = blog.excerpt || 'Explore in-depth performance marketing, SEO, and digital strategy insights.';

  return {
    title,
    description,
    keywords: [blog.keyword, blog.keyword2, ...blog.tags].filter(Boolean) as string[],
    openGraph: {
      title,
      description,
      type: 'article',
      url: `https://digitaldigix.com/blog/${encodeURIComponent(blog.slug)}`,
      siteName: 'Digital Digix',
      publishedTime: blog.date,
      authors: ['Digital Digix'],
      tags: blog.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default async function BlogPostPageContainer({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug: rawSlug } = await params;
  const slug = decodeURIComponent(rawSlug);
  const blog = ALL_BLOGS.find((b) => b.slug === slug || b.slug === rawSlug);

  // Try reading markdown directly from filesystem during server render
  let initialContent = '';
  const possiblePaths = [
    path.join(process.cwd(), 'public', 'blogs', `${slug}.md`),
    path.join(process.cwd(), 'public', 'blogs', `${rawSlug}.md`),
    path.join(process.cwd(), 'dist', 'blogs', `${slug}.md`),
  ];

  for (const filePath of possiblePaths) {
    if (fs.existsSync(filePath)) {
      try {
        const text = fs.readFileSync(filePath, 'utf8');
        if (text && text.trim().length > 0) {
          if (blog && text.startsWith('#')) {
            const firstNewLine = text.indexOf('\n');
            if (firstNewLine !== -1) {
              initialContent = `# ${blog.title}\n` + text.substring(firstNewLine + 1);
            } else {
              initialContent = text;
            }
          } else {
            initialContent = text;
          }
          break;
        }
      } catch {}
    }
  }

  return <BlogPostClient slug={slug} initialContent={initialContent} />;
}
