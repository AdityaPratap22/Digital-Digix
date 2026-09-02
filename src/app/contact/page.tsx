import React from 'react';
import type { Metadata } from 'next';
import { ContactSection } from '@/components/ContactSection';

export const metadata: Metadata = {
  title: 'Contact Digital Digix — Get a Free Strategy Session',
  description: 'Ready to scale? Contact Digital Digix for a free growth strategy session. Reach us via WhatsApp, email, or our contact form. Based in Noida, India. Serving clients worldwide.',
  keywords: [
    'Contact Digital Digix',
    'Digital Marketing Agency Contact',
    'Free Strategy Session',
    'Digital Marketing Consultation',
    'Digital Digix Noida',
    'Hire Digital Marketing Agency'
  ],
  alternates: {
    canonical: 'https://digitaldigix.com/contact',
  },
  openGraph: {
    title: 'Contact Digital Digix — Free Strategy Session',
    description: 'Contact Digital Digix for a free digital marketing strategy session. WhatsApp, email, or form.',
    url: 'https://digitaldigix.com/contact',
    siteName: 'Digital Digix',
    type: 'website',
    images: [
      {
        url: 'https://digitaldigix.com/digital_digix_logo.png',
        width: 800,
        height: 600,
        alt: 'Contact Digital Digix',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Digital Digix | Free Strategy Session',
    description: 'Get a free strategy session with Digital Digix — India\'s performance-first digital marketing agency.',
    images: ['https://digitaldigix.com/digital_digix_logo.png'],
  },
};

export default function ContactUsPage() {
  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Digital Digix',
    description: 'Full-service digital marketing and software development agency specializing in Performance Marketing, SEO, GEO/AEO, Paid Ads, and Web Applications.',
    url: 'https://digitaldigix.com',
    telephone: '+918586989832',
    email: 'contact@digitaldigix.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Sector 62',
      addressLocality: 'Noida',
      addressRegion: 'Uttar Pradesh',
      postalCode: '201309',
      addressCountry: 'IN',
    },
    priceRange: '$$',
    openingHours: 'Mo-Sa 09:00-19:00',
    sameAs: [
      'https://www.instagram.com/thebusinessvolunteers/',
      'https://www.linkedin.com/company/business-volunteers1',
      'https://www.facebook.com/people/BusinessVolunteers/61579138254807/',
      'https://www.youtube.com/@TheBusinessVolunteers',
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <div style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
        <ContactSection />
      </div>
    </>
  );
}
