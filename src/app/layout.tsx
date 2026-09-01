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
    'Digital Marketing',
    'SEO',
    'Performance Marketing',
    'Generative Engine Optimization',
    'GEO',
    'AEO',
    'Web Development',
    'Google Ads',
    'Meta Ads',
    'WhatsApp API',
    'India',
    'Digital Digix'
  ],
  authors: [{ name: 'Digital Digix', url: 'https://digitaldigix.com' }],
  creator: 'Digital Digix',
  publisher: 'Digital Digix',
  icons: {
    icon: '/digital_digix_logo.png',
    apple: '/digital_digix_logo.png',
  },
  openGraph: {
    type: 'website',
    url: 'https://digitaldigix.com',
    title: 'Digital Digix — Performance Marketing & Generative Engine Optimization',
    description: 'Scale your business with data-driven performance marketing, generative engine optimization (GEO/AEO), custom web apps, and automated growth funnels.',
    siteName: 'Digital Digix',
    images: [
      {
        url: '/digital_digix_logo.png',
        width: 800,
        height: 600,
        alt: 'Digital Digix Logo',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Digix — Performance Marketing & Generative Engine Optimization',
    description: 'Scale your business with data-driven performance marketing, generative engine optimization (GEO/AEO), custom web apps, and automated growth funnels.',
    images: ['/digital_digix_logo.png'],
  },
  robots: {
    index: true,
    follow: true,
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
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
                  "logo": "https://digitaldigix.com/digital_digix_logo.png",
                  "description": "Full-service digital marketing and software development agency specializing in SEO, GEO/AEO, Paid Ads, and Web Applications.",
                  "telephone": "+918586989832",
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
                  }
                },
                {
                  "@type": "WebSite",
                  "@id": "https://digitaldigix.com/#website",
                  "url": "https://digitaldigix.com",
                  "name": "Digital Digix",
                  "publisher": {
                    "@id": "https://digitaldigix.com/#organization"
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
