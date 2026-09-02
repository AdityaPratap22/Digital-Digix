import React from 'react';
import type { Metadata } from 'next';
import { PaymentsClient } from './PaymentsClient';

export const metadata: Metadata = {
  title: 'Secure Payments & Transparent Billing Portal',
  description: 'Flexible, secure payment portal for Digital Digix services. Support for UPI, NetBanking, Credit Cards, International Wire (SWIFT/SEPA), and milestone escrow billing with zero lock-in.',
  keywords: [
    'Digital Digix Payments',
    'Marketing Agency Billing',
    'UPI Payment Digital Digix',
    'Wire Transfer Invoicing',
    'GST Tax Invoice Marketing',
    'Post-Pay Digital Marketing',
    'Zero Lock-In Contracts'
  ],
  alternates: {
    canonical: 'https://digitaldigix.com/payments',
  },
  openGraph: {
    title: 'Secure Payments & Transparent Billing Portal | Digital Digix',
    description: 'Flexible, secure payment portal for Digital Digix services with zero lock-in contracts and verified tax invoicing.',
    url: 'https://digitaldigix.com/payments',
    siteName: 'Digital Digix',
    images: [
      {
        url: 'https://digitaldigix.com/digital_digix_logo.png',
        width: 800,
        height: 600,
        alt: 'Digital Digix Payments',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Secure Payments | Digital Digix',
    description: 'Flexible payment options with zero lock-in contracts.',
    images: ['https://digitaldigix.com/digital_digix_logo.png'],
  },
};

export default function PaymentsRoutePage() {
  return <PaymentsClient />;
}
