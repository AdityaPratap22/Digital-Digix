import React from 'react';
import type { Metadata } from 'next';
import { PaymentsClient } from './PaymentsClient';

export const metadata: Metadata = {
  title: 'Secure Payments & Transparent Billing Portal | Digital Digix',
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
  openGraph: {
    title: 'Secure Payments & Transparent Billing Portal | Digital Digix',
    description: 'Flexible, secure payment portal for Digital Digix services with zero lock-in contracts and verified tax invoicing.',
    url: 'https://digitaldigix.com/payments',
    siteName: 'Digital Digix',
  },
};

export default function PaymentsRoutePage() {
  return <PaymentsClient />;
}
