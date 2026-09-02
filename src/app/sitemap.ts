import type { MetadataRoute } from 'next';
import { ALL_BLOGS } from '@/data/blogData';
import { all89IndustriesList } from '@/data/industriesData';
import { ALL_COUNTRY_LOCATIONS } from '@/data/locationsData';

const BASE_URL = 'https://digitaldigix.com';

const SERVICE_SLUGS = [
  'social-media-marketing',
  'graphic-design',
  'dashboard-kpi-systems',
  'seo-services',
  'website-development',
  'personal-branding',
  'performance-marketing',
  'content-marketing',
  'influencer-marketing',
  'lead-generation',
  'video-editing-production',
  'email-marketing',
  'ecommerce-growth',
  'brand-strategy',
  'whatsapp-marketing',
  'app-store-optimization',
  'analytics-tracking',
];

const ABOUT_SLUGS = [
  'harsh-chaudhary',
  'khwahish-sahai',
  'why-choose-us',
  'team',
  'founder',
  'co-founder',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  // ─── Core pages ──────────────────────────────────────────────────────────
  const corePages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/industries`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/portfolio`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/locations`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/digital-marketing`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/smm`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/payments`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ];

  // ─── About sub-pages ─────────────────────────────────────────────────────
  const aboutPages: MetadataRoute.Sitemap = ABOUT_SLUGS.map((slug) => ({
    url: `${BASE_URL}/about/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // ─── Service detail pages ────────────────────────────────────────────────
  const servicePages: MetadataRoute.Sitemap = SERVICE_SLUGS.map((slug) => ({
    url: `${BASE_URL}/services/${slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }));

  // ─── Industry detail pages ────────────────────────────────────────────────
  const industryPages: MetadataRoute.Sitemap = all89IndustriesList.map((ind) => ({
    url: `${BASE_URL}/industries/marketing-in-${ind.id}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  // ─── Blog post pages ─────────────────────────────────────────────────────
  const blogPages: MetadataRoute.Sitemap = ALL_BLOGS.map((blog) => ({
    url: `${BASE_URL}/blog/${blog.slug}`,
    lastModified: blog.date ? new Date(blog.date).toISOString() : now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // ─── Location pages (/digital-marketing/[slug]) ───────────────────────────
  const locationSlugs = new Set<string>();
  ALL_COUNTRY_LOCATIONS.forEach((c) => {
    locationSlugs.add(c.country.toLowerCase().replace(/\s+/g, '-'));
    locationSlugs.add(c.capital.toLowerCase().replace(/\s+/g, '-'));
    c.majorCities.forEach((city) =>
      locationSlugs.add(city.toLowerCase().replace(/\s+/g, '-'))
    );
    c.regionalCities.forEach((city) =>
      locationSlugs.add(city.toLowerCase().replace(/\s+/g, '-'))
    );
  });

  const locationPages: MetadataRoute.Sitemap = Array.from(locationSlugs).map((slug) => ({
    url: `${BASE_URL}/digital-marketing/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.65,
  }));

  return [
    ...corePages,
    ...aboutPages,
    ...servicePages,
    ...industryPages,
    ...blogPages,
    ...locationPages,
  ];
}
