'use client';

import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import type { PageView } from '../types';
import { ALL_BLOGS } from '../data/blogData';

interface BlogPostPageProps {
  slug: string;
  initialContent?: string;
  onNavigate: (page: PageView, slug?: string) => void;
  onOpenStrategyModal: (note?: string) => void;
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({ slug: rawSlug, initialContent, onNavigate, onOpenStrategyModal }) => {
  const slug = decodeURIComponent(rawSlug);
  const [content, setContent] = useState<string>(initialContent || '');
  const [loading, setLoading] = useState(!initialContent);
  const [error, setError] = useState(false);

  const blog = ALL_BLOGS.find(b => b.slug === slug || b.slug === rawSlug);

  useEffect(() => {
    if (initialContent) {
      setContent(initialContent);
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(false);

    const tryFetch = async () => {
      const paths = [
        `/blogs/${slug}.md`,
        `/blogs/${rawSlug}.md`,
        `/blogs/${slug.replace(/^strategy\//, '')}.md`,
        `/blogs/strategy/${slug}.md`
      ];

      for (const path of paths) {
        try {
          const res = await fetch(path);
          if (res.ok) {
            const text = await res.text();
            if (text && text.trim().length > 0 && !text.trim().startsWith('<!DOCTYPE')) {
              let processedText = text;
              if (blog && text.startsWith('#')) {
                const firstNewLine = text.indexOf('\n');
                if (firstNewLine !== -1) {
                  processedText = `# ${blog.title}\n` + text.substring(firstNewLine + 1);
                }
              }
              setContent(processedText);
              setLoading(false);
              return;
            }
          }
        } catch {
          // Continue to next path
        }
      }

      // If markdown file wasn't found, generate rich, in-depth global market content from blog metadata
      if (blog) {
        const fallback = [
          `# ${blog.title}`,
          '',
          `## Global Market Overview & Strategic Landscape (2026)`,
          '',
          `In today’s competitive global digital economy, **${blog.keyword || blog.title}** has transitioned from an optional growth initiative into an indispensable foundation for scalable customer acquisition. As enterprise search dynamics, [Generative Engine Optimization (GEO/AEO)](https://digitaldigix.com), and programmatic ad channels evolve, market leaders who implement integrated multi-touch acquisition funnels consistently outperform competitors reliant on fragmented legacy playbooks.`,
          '',
          blog.excerpt || '',
          '',
          '---',
          '',
          `## 1. Why ${blog.keyword || blog.title} Drives High-Value Outcomes Globally`,
          '',
          `Modern B2B and high-ticket customer journeys across international markets are multi-layered and non-linear. Whether in North America, Europe, the UK, the Middle East, or the Asia-Pacific region, prospective buyers and high-intent clients conduct rigorous research across multiple digital touchpoints prior to direct engagement:`,
          '',
          `- **Autonomous Pre-Purchase Research**: Over 82% of qualified enterprise and commercial decision-makers explore authoritative brand content, third-party industry validations, and AI search answers before submitting an RFP or booking a call.`,
          `- **Algorithmic Search Visibility**: Securing top-tier visibility across Google Search and conversational AI engines establishes instant brand credibility and drives predictable inbound pipeline.`,
          `- **Unit Economics & CAC Efficiency**: Synchronizing precision search intent with [high-converting digital ecosystems](https://digitaldigix.com) lowers blended Customer Acquisition Cost (CAC) by 30% to 55% while elevating Lifetime Customer Value (LTV).`,
          '',
          '---',
          '',
          `## 2. Core Pillars of Execution`,
          '',
          `### A. Frictionless Conversion Architecture`,
          `High-converting landing interfaces must eliminate cognitive friction through concise value propositions, lightning-fast load times (<1.2s), clear social proof, and direct consultation pathways.`,
          '',
          `### B. Topical Authority & [Conversion Rate Optimization (CRO)](https://digitaldigix.com)`,
          `By structuring comprehensive semantic content clusters, proprietary industry data, and robust schema architecture, your brand earns consistent citations across LLMs and traditional search indices.`,
          '',
          `### C. Automated Speed-to-Lead Response Systems`,
          `Deploying intelligent CRM routing and instant communication channels (WhatsApp Business API, automated meeting schedulers) ensures qualified inquiries are engaged within 60 seconds, maximizing close rates.`,
          '',
          '---',
          '',
          `## Partner With Digital Digix`,
          '',
          `At [Digital Digix](https://digitaldigix.com), we build and execute [full-funnel growth architecture](https://digitaldigix.com), [performance advertising](https://digitaldigix.com), and bespoke web solutions for ambitious businesses and global enterprises. Contact our senior growth strategists today to [schedule a confidential consultation](https://digitaldigix.com).`
        ].join('\n');

        setContent(fallback);
        setLoading(false);
      } else {
        setError(true);
        setLoading(false);
      }
    };

    tryFetch();
  }, [slug, blog]);

  // Dynamic Article & Breadcrumb JSON-LD Schema
  useEffect(() => {
    if (!blog) return;

    const pageTitle = `${blog.title} | Digital Digix`;
    document.title = pageTitle;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && blog.excerpt) {
      metaDesc.setAttribute('content', blog.excerpt);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', pageTitle);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc && blog.excerpt) ogDesc.setAttribute('content', blog.excerpt);

    // Inject Article Schema
    const scriptId = 'blog-post-schema';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    const postUrl = `https://digital-digix.vercel.app/blog/${encodeURIComponent(blog.slug)}`;
    const schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Article",
          "@id": `${postUrl}#article`,
          "isPartOf": {
            "@type": "WebPage",
            "@id": postUrl,
            "url": postUrl,
            "name": blog.title
          },
          "headline": blog.title,
          "description": blog.excerpt,
          "datePublished": blog.date || "2026-08-15",
          "dateModified": "2026-08-15",
          "author": {
            "@type": "Organization",
            "name": "Digital Digix",
            "url": "https://digital-digix.vercel.app"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Digital Digix",
            "logo": {
              "@type": "ImageObject",
              "url": "https://digital-digix.vercel.app/digital_digix_logo.png"
            }
          },
          "keywords": [blog.keyword, blog.keyword2, ...blog.tags].filter(Boolean).join(", ")
        },
        {
          "@type": "BreadcrumbList",
          "@id": `${postUrl}#breadcrumb`,
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://digital-digix.vercel.app/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Blog",
              "item": "https://digital-digix.vercel.app/blog"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": blog.title,
              "item": postUrl
            }
          ]
        }
      ]
    };

    script.textContent = JSON.stringify(schemaData);

    return () => {
      const existing = document.getElementById(scriptId);
      if (existing) existing.remove();
    };
  }, [blog]);

  // Related blogs from same category, primary tag, or sector
  const related = blog
    ? ALL_BLOGS.filter(b => {
        if (b.slug === slug) return false;
        if (blog.category && (b.category === blog.category || b.tags[0] === blog.category)) return true;
        if (blog.tags[0] && (b.tags[0] === blog.tags[0] || b.category === blog.tags[0])) return true;
        if (blog.sector && b.sector === blog.sector) return true;
        return false;
      }).slice(0, 3)
    : [];

  return (
    <div className="blog-post-page">
      {/* Back Button */}
      <div className="bpp-nav">
        <button className="bpp-back-btn" onClick={() => onNavigate('blog')}>
          ← Back to Blog
        </button>
        {blog && <span className="bpp-sector-badge">{blog.sector}</span>}
      </div>

      <div className="bpp-layout">
        {/* Main Content */}
        <main className="bpp-main">
          {loading && (
            <div className="bpp-loading">
              <div className="bpp-spinner" />
              <p>Loading article...</p>
            </div>
          )}

          {error && (
            <div className="bpp-error">
              <span>⚠️</span>
              <h2>Article not found</h2>
              <p>This article could not be loaded.</p>
              <button onClick={() => onNavigate('blog')}>← Go back to Blog</button>
            </div>
          )}

          {!loading && !error && (
            <div className="bpp-content">
              {blog && (
                <div className="bpp-meta">
                  <span className="bpp-read-time">⏱ {blog.readTime} read</span>
                  <div className="bpp-tags">
                    {blog.tags.map(t => <span key={t} className="bpp-tag">#{t}</span>)}
                  </div>
                </div>
              )}
              <div className="bpp-markdown">
                <ReactMarkdown
                  components={{
                    a: ({ href, children, ...props }) => (
                      <a
                        href={href}
                        target={href?.startsWith('http') ? '_blank' : undefined}
                        rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                        {...props}
                      >
                        {children}
                      </a>
                    )
                  }}
                >
                  {content}
                </ReactMarkdown>
              </div>
            </div>
          )}
        </main>

        {/* Sidebar */}
        <aside className="bpp-sidebar">
          {/* CTA Card */}
          <div className="bpp-cta-card">
            <div className="bpp-cta-icon">🚀</div>
            <h3>Free Strategy Session</h3>
            <p>Get a personalised digital marketing plan for your business. No lock-in. Post-pay available.</p>
            <button className="bpp-cta-btn" onClick={() => onOpenStrategyModal(blog?.title)}>
              Get Free Strategy Call
            </button>
            <a className="bpp-phone-link" href="tel:+918586989832">📞 +91 85869 89832</a>
          </div>

          {/* Related Articles */}
          {related.length > 0 && (
            <div className="bpp-related">
              <h3>Related Articles</h3>
              {related.map((r, idx) => (
                <button
                  key={`${r.slug}-${idx}`}
                  className="bpp-related-item"
                  onClick={() => onNavigate('blog-post', r.slug)}
                >
                  <span className="bri-title">{r.title}</span>
                  <span className="bri-time">⏱ {r.readTime}</span>
                </button>
              ))}
            </div>
          )}

          {/* Quick Links */}
          <div className="bpp-quick-links">
            <h3>Quick Links</h3>
            <a href="tel:+918586989832" className="bql-link">📞 Call Us Now</a>
            <a href="https://digital-digix.vercel.app" target="_blank" rel="noreferrer" className="bql-link">🌐 Our Website</a>
            <button className="bql-link" onClick={() => onNavigate('blog')}>📚 All Blogs</button>
            <button className="bql-link" onClick={() => onNavigate('services')}>⚡ Our Services</button>
          </div>
        </aside>
      </div>
    </div>
  );
};
