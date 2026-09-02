import type { Metadata, Viewport } from 'next';
import React from 'react';
import '@/index.css';
import { AppProvider } from '@/context/AppContext';
import { ClientLayout } from '@/components/ClientLayout';

export const metadata: Metadata = {
  metadataBase: new URL('https://digitaldigix.com'),
  title: {
    default: 'Digital Digix — Performance Marketing, Generative Engine Optimization & Web Applications',
    template: '%s | Digital Digix'
  },
  description: "Digital Digix is India's leading digital growth agency specializing in Performance Marketing, Generative Engine Optimization (GEO/AEO), high-converting web applications, and B2B growth funnels.",
  keywords: [
    'Digital Marketing Agency India',
    'Performance Marketing',
    'SEO Agency India',
    'Generative Engine Optimization',
    'GEO',
    'AEO',
    'Web Development Agency',
    'Google Ads Agency',
    'Meta Ads Management',
    'WhatsApp Marketing',
    'Social Media Marketing India',
    'Digital Digix'
  ],
  authors: [{ name: 'Digital Digix', url: 'https://digitaldigix.com' }],
  creator: 'Digital Digix',
  publisher: 'Digital Digix',
  icons: {
    icon: '/digital_digix_logo.png',
    apple: '/digital_digix_logo.png',
    shortcut: '/digital_digix_logo.png',
  },
  alternates: {
    canonical: 'https://digitaldigix.com',
  },
  openGraph: {
    type: 'website',
    url: 'https://digitaldigix.com',
    title: 'Digital Digix — Performance Marketing & Generative Engine Optimization',
    description: 'Scale your business with data-driven performance marketing, generative engine optimization (GEO/AEO), custom web apps, and automated growth funnels.',
    siteName: 'Digital Digix',
    images: [
      {
        url: 'https://digitaldigix.com/digital_digix_logo.png',
        width: 800,
        height: 600,
        alt: 'Digital Digix — Performance Marketing Agency',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Digix — Performance Marketing & Generative Engine Optimization',
    description: 'Scale your business with data-driven performance marketing, generative engine optimization (GEO/AEO), custom web apps, and automated growth funnels.',
    images: ['https://digitaldigix.com/digital_digix_logo.png'],
    creator: '@digitaldigix',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '',
  },
};

export const viewport: Viewport = {
  themeColor: '#0F172A',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* ── DNS prefetch for external origins ───────────────────────── */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* ── Preconnect for critical third-party origins ──────────────── */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* ── Preload: Hero LCP image (highest priority) ───────────────── */}
        <link
          rel="preload"
          as="image"
          href="/building.jpg"
          fetchPriority="high"
        />

        {/* ── Preload: Logo (used in header + OG) ─────────────────────── */}
        <link
          rel="preload"
          as="image"
          href="/digital_digix_logo.png"
        />

        {/* ── Google Fonts with font-display=swap ─────────────────────── */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />

        {/* ── Prefetch likely next pages ───────────────────────────────── */}
        <link rel="prefetch" href="/services" as="document" />
        <link rel="prefetch" href="/blog" as="document" />
        <link rel="prefetch" href="/about" as="document" />
        <link rel="prefetch" href="/industries" as="document" />
        <link rel="prefetch" href="/contact" as="document" />
        <link rel="prefetch" href="/portfolio" as="document" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://digitaldigix.com/#organization",
                  "name": "Digital Digix",
                  "url": "https://digitaldigix.com",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://digitaldigix.com/digital_digix_logo.png",
                    "width": 512,
                    "height": 512,
                  },
                  "description": "Full-service digital marketing and software development agency specializing in SEO, GEO/AEO, Paid Ads, and Web Applications.",
                  "telephone": "+918586989832",
                  "foundingDate": "2023",
                  "numberOfEmployees": "10-50",
                  "sameAs": [
                    "https://www.instagram.com/thebusinessvolunteers/",
                    "https://www.linkedin.com/company/business-volunteers1",
                    "https://www.facebook.com/people/BusinessVolunteers/61579138254807/",
                    "https://www.youtube.com/@TheBusinessVolunteers"
                  ],
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Sector 62",
                    "addressLocality": "Noida",
                    "addressRegion": "Uttar Pradesh",
                    "postalCode": "201309",
                    "addressCountry": "IN"
                  },
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+918586989832",
                    "contactType": "customer service",
                    "availableLanguage": ["English", "Hindi"]
                  }
                },
                {
                  "@type": "WebSite",
                  "@id": "https://digitaldigix.com/#website",
                  "url": "https://digitaldigix.com",
                  "name": "Digital Digix",
                  "description": "India's leading performance marketing and GEO/AEO agency",
                  "publisher": {
                    "@id": "https://digitaldigix.com/#organization"
                  },
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": {
                      "@type": "EntryPoint",
                      "urlTemplate": "https://digitaldigix.com/blog?q={search_term_string}"
                    },
                    "query-input": "required name=search_term_string"
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body>
        <AppProvider>
          <ClientLayout>
            {children}
          </ClientLayout>
        </AppProvider>
      </body>
    </html>
  );
}
