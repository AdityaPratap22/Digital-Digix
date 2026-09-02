'use client';

import React, { useState } from 'react';
import type { Currency, PageView } from '../types';

interface PaymentsPageProps {
  currency: Currency;
  onCurrencyChange: (c: Currency) => void;
  onNavigate: (page: PageView) => void;
  onOpenStrategyModal: (note?: string) => void;
}

export const PaymentsPage: React.FC<PaymentsPageProps> = ({
  currency,
  onCurrencyChange,
  onNavigate,
  onOpenStrategyModal
}) => {
  const [activeTab, setActiveTab] = useState<'methods' | 'calculator' | 'faqs'>('methods');
  const [selectedService, setSelectedService] = useState('Graphic Design');
  const [customAmount, setCustomAmount] = useState('');
  const [invoiceNumber, setInvoiceNumber] = useState('');
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');

  const currencySymbols = {
    INR: '₹',
    USD: '$',
    EUR: '€'
  };

  const currencyMultiplier = {
    INR: 83,
    USD: 1,
    EUR: 0.92
  };

  const sampleRetainers = [
    {
      title: 'Graphic Design Per Design',
      baseUsd: 35,
      description: 'Single high-conversion graphic creative, flyer, social post, or pitch slide.',
      tag: 'Pay Per Asset'
    },
    {
      title: 'Starter SMM Retainer',
      baseUsd: 750,
      description: '12 multi-platform posts, caption copywriting, visual grid design, monthly analytics.',
      tag: 'Monthly Retainer'
    },
    {
      title: 'Growth Performance Retainer',
      baseUsd: 1500,
      description: '20 high-engagement posts, Meta/Google ad campaign management, A/B testing & weekly optimization.',
      tag: 'Most Popular'
    },
    {
      title: 'Full-Funnel Scale Retainer',
      baseUsd: 4000,
      description: 'Daily content, viral short video editing, executive branding, multi-channel ad spend pacing.',
      tag: 'Enterprise Scale'
    },
    {
      title: 'Custom Website Engineering',
      baseUsd: 3200,
      description: 'Ultra-fast Next.js / React web application with responsive UI, SEO architecture, WhatsApp CRM.',
      tag: 'Milestone 50/50'
    }
  ];

  const formatPrice = (usd: number) => {
    if (currency === 'INR') {
      const inrVal = Math.round(usd * currencyMultiplier.INR);
      return `₹${inrVal.toLocaleString('en-IN')}`;
    }
    if (currency === 'EUR') {
      const eurVal = Math.round(usd * currencyMultiplier.EUR);
      return `€${eurVal.toLocaleString('de-DE')}`;
    }
    return `$${usd.toLocaleString('en-US')}`;
  };

  const handleQuickPaySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanAmt = customAmount || 'Custom';
    const textMsg = `Hi Digital Digix Team,%0A%0AI want to make a payment for:${encodeURIComponent(`
• Service: ${selectedService}
• Amount: ${currencySymbols[currency]}${cleanAmt}
• Client Name: ${clientName || 'N/A'}
• Email: ${clientEmail || 'N/A'}
• Invoice/Ref: ${invoiceNumber || 'New Payment'}
`)}`;
    window.open(`https://wa.me/918586989832?text=${textMsg}`, '_blank');
  };

  return (
    <div style={{ padding: '3rem 0 6rem 0', minHeight: '90vh' }}>
      <div className="container" style={{ maxWidth: '1140px' }}>
        
        {/* Breadcrumb */}
        <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1.5rem', textAlign: 'center' }}>
          <span style={{ cursor: 'pointer', color: 'var(--primary)' }} onClick={() => onNavigate('home')}>Home</span> / <span className="active">Payments & Billing Portal</span>
        </div>

        {/* Hero Header */}
        <div className="section-header" style={{ textAlign: 'center', maxWidth: '880px', margin: '0 auto 3rem auto' }}>
          <div className="section-tag" style={{ background: '#FFF1EE', color: 'var(--primary)', border: '1px solid rgba(255, 78, 39, 0.2)', marginBottom: '1rem', display: 'inline-flex', padding: '0.4rem 1rem', borderRadius: '999px', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.08em' }}>
            🔒 SECURE TRANSACTIONS & BILLING
          </div>
          <h1 style={{ fontFamily: 'Outfit, serif', fontSize: '3.3rem', fontWeight: 900, marginBottom: '1.1rem', color: 'var(--secondary)', lineHeight: 1.15 }}>
            Transparent Payments & Flexible Billing
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: 1.6, maxWidth: '780px', margin: '0 auto' }}>
            Zero lock-in contracts, 100% post-delivery review milestones, and transparent multi-currency billing. Support for UPI, NetBanking, Credit Cards, Wire Transfers, and International Invoicing.
          </p>
        </div>

        {/* Currency Selector Bar */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.75rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-muted)' }}>Display Currency:</span>
          {(['INR', 'USD', 'EUR'] as Currency[]).map((c) => (
            <button
              key={c}
              onClick={() => onCurrencyChange(c)}
              style={{
                padding: '0.45rem 1.1rem',
                borderRadius: '999px',
                fontSize: '0.85rem',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                backgroundColor: currency === c ? 'var(--primary)' : 'var(--bg-card)',
                color: currency === c ? '#FFF' : 'var(--text-main)',
                border: currency === c ? '1px solid var(--primary)' : '1px solid var(--border-color)',
                boxShadow: currency === c ? '0 4px 12px rgba(255, 78, 39, 0.25)' : 'none'
              }}
            >
              {c === 'INR' ? '₹ INR (India)' : c === 'USD' ? '$ USD (Global)' : '€ EUR (Europe)'}
            </button>
          ))}
        </div>

        {/* 4 Trust Highlights */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem', marginBottom: '4rem' }}>
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '18px', padding: '1.6rem', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>🛡️</div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '0.4rem' }}>Zero Lock-In Contracts</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
              Pause, modify, or cancel monthly retainers at any time with zero termination penalties.
            </p>
          </div>

          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '18px', padding: '1.6rem', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>📄</div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '0.4rem' }}>GST & VAT Compliant</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
              Official tax invoices provided with corporate GSTIN / Tax ID details for full input tax credit.
            </p>
          </div>

          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '18px', padding: '1.6rem', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>⚡</div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '0.4rem' }}>Milestone Escrow Terms</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
              For custom software and web development, payments are staged strictly per milestone completion.
            </p>
          </div>

          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '18px', padding: '1.6rem', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>🔐</div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '0.4rem' }}>128-Bit SSL Encrypted</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
              All transactions are processed through certified PCI-DSS Level 1 compliant gateway partners.
            </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
          <button
            onClick={() => setActiveTab('methods')}
            style={{
              padding: '0.65rem 1.4rem',
              borderRadius: '999px',
              fontSize: '0.9rem',
              fontWeight: 700,
              cursor: 'pointer',
              backgroundColor: activeTab === 'methods' ? 'var(--secondary)' : 'var(--bg-subtle)',
              color: activeTab === 'methods' ? '#FFF' : 'var(--text-muted)',
              border: '1px solid var(--border-color)',
              transition: 'all 0.2s'
            }}
          >
            💳 Accepted Payment Methods
          </button>
          <button
            onClick={() => setActiveTab('calculator')}
            style={{
              padding: '0.65rem 1.4rem',
              borderRadius: '999px',
              fontSize: '0.9rem',
              fontWeight: 700,
              cursor: 'pointer',
              backgroundColor: activeTab === 'calculator' ? 'var(--secondary)' : 'var(--bg-subtle)',
              color: activeTab === 'calculator' ? '#FFF' : 'var(--text-muted)',
              border: '1px solid var(--border-color)',
              transition: 'all 0.2s'
            }}
          >
            🧾 Quick Invoice / Custom Pay
          </button>
          <button
            onClick={() => setActiveTab('faqs')}
            style={{
              padding: '0.65rem 1.4rem',
              borderRadius: '999px',
              fontSize: '0.9rem',
              fontWeight: 700,
              cursor: 'pointer',
              backgroundColor: activeTab === 'faqs' ? 'var(--secondary)' : 'var(--bg-subtle)',
              color: activeTab === 'faqs' ? '#FFF' : 'var(--text-muted)',
              border: '1px solid var(--border-color)',
              transition: 'all 0.2s'
            }}
          >
            ❓ Billing & Payment FAQs
          </button>
        </div>

        {/* TAB 1: ACCEPTED METHODS */}
        {activeTab === 'methods' && (
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem', marginBottom: '3.5rem' }}>
              
              {/* Card 1: Domestic UPI & Cards */}
              <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderTop: '4px solid #FF4E27', borderRadius: '20px', padding: '2rem', boxShadow: '0 8px 25px rgba(11,19,42,0.04)' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#FF4E27', letterSpacing: '0.08em', textTransform: 'uppercase' }}>DOMESTIC (INDIA)</span>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0F172A', marginTop: '0.4rem', marginBottom: '0.75rem' }}>
                  UPI, Cards & NetBanking
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#64748B', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                  Instant verification for Indian businesses and founders with instant zero-fee settlement.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem', color: '#334155' }}>
                  <li>✓ <strong>UPI Apps:</strong> Google Pay, PhonePe, Paytm, BHIM, CRED</li>
                  <li>✓ <strong>Debit & Credit:</strong> Visa, MasterCard, RuPay, Corporate Amex</li>
                  <li>✓ <strong>Net Banking:</strong> HDFC, ICICI, SBI, Axis, Kotak, 50+ Banks</li>
                  <li>✓ <strong>GST Invoice:</strong> Instant 18% GST receipt issued</li>
                </ul>
                <button
                  onClick={() => window.open('https://wa.me/918586989832?text=Hi%2C%20I%20want%20to%20request%20a%20UPI%20%2F%20Razorpay%20payment%20link', '_blank')}
                  className="btn btn-primary"
                  style={{ width: '100%', padding: '0.75rem' }}
                >
                  Request UPI / Payment Link ➔
                </button>
              </div>

              {/* Card 2: International Wire & Stripe */}
              <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderTop: '4px solid #3B82F6', borderRadius: '20px', padding: '2rem', boxShadow: '0 8px 25px rgba(11,19,42,0.04)' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#3B82F6', letterSpacing: '0.08em', textTransform: 'uppercase' }}>INTERNATIONAL (GLOBAL)</span>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0F172A', marginTop: '0.4rem', marginBottom: '0.75rem' }}>
                  SWIFT, SEPA, ACH & Stripe
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#64748B', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                  Seamless cross-border invoicing for US, UK, EU, UAE, Singapore, Australia, and Canadian clients.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem', color: '#334155' }}>
                  <li>✓ <strong>Currencies:</strong> USD ($), EUR (€), GBP (£), AED (د.إ), AUD, CAD</li>
                  <li>✓ <strong>International Cards:</strong> Global Visa, Mastercard, American Express</li>
                  <li>✓ <strong>Wire Transfers:</strong> Direct SWIFT / IBAN / ACH account details</li>
                  <li>✓ <strong>Wise & PayPal:</strong> Escrow & cross-border merchant options</li>
                </ul>
                <button
                  onClick={() => window.open('https://wa.me/918586989832?text=Hi%2C%20I%20need%20International%20Wire%20%2F%20Stripe%20Invoice%20details%20for%20my%20company', '_blank')}
                  className="btn btn-secondary"
                  style={{ width: '100%', padding: '0.75rem', borderColor: '#3B82F6', color: '#1D4ED8' }}
                >
                  Request International Wire Invoice ➔
                </button>
              </div>

              {/* Card 3: Milestone & Escrow */}
              <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderTop: '4px solid #10B981', borderRadius: '20px', padding: '2rem', boxShadow: '0 8px 25px rgba(11,19,42,0.04)' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#10B981', letterSpacing: '0.08em', textTransform: 'uppercase' }}>CUSTOM PROJECTS</span>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0F172A', marginTop: '0.4rem', marginBottom: '0.75rem' }}>
                  50/50 & Milestone Escrow
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#64748B', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                  Protect your budget with transparent staging for web apps, platforms, and major brand overhauls.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem', color: '#334155' }}>
                  <li>✓ <strong>Stage 1 (Kickoff):</strong> Scope alignment, design system & Figma approval</li>
                  <li>✓ <strong>Stage 2 (Development):</strong> Functional prototype staging on test server</li>
                  <li>✓ <strong>Stage 3 (Final Release):</strong> QA signoff, code handover & live deployment</li>
                  <li>✓ <strong>100% Satisfaction Guarantee:</strong> Revisions included until approval</li>
                </ul>
                <button
                  onClick={() => onOpenStrategyModal('Milestone Project Contract Terms')}
                  className="btn btn-secondary"
                  style={{ width: '100%', padding: '0.75rem' }}
                >
                  Discuss Project Milestones ➔
                </button>
              </div>

            </div>

            {/* Standard Service Retainers Pricing Grid */}
            <div style={{ marginTop: '3rem', marginBottom: '3rem' }}>
              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--secondary)', fontFamily: 'Outfit' }}>
                  Standard Retainer & Service Pricing Reference
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>
                  Transparent baseline pricing in {currency} ({currencySymbols[currency]}). Custom proposals available based on exact scope.
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
                {sampleRetainers.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border-color)',
                      borderRadius: '16px',
                      padding: '1.5rem',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      boxShadow: 'var(--shadow-sm)'
                    }}
                  >
                    <div>
                      <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--primary)', background: 'var(--bg-subtle)', padding: '0.2rem 0.6rem', borderRadius: '6px' }}>
                        {item.tag}
                      </span>
                      <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--secondary)', marginTop: '0.6rem', marginBottom: '0.35rem' }}>
                        {item.title}
                      </h4>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.45, marginBottom: '1rem' }}>
                        {item.description}
                      </p>
                    </div>

                    <div>
                      <div style={{ fontFamily: 'Outfit', fontSize: '1.35rem', fontWeight: 900, color: '#3B82F6', marginBottom: '0.75rem' }}>
                        {formatPrice(item.baseUsd)}
                      </div>
                      <button
                        onClick={() => {
                          setSelectedService(item.title);
                          setCustomAmount(String(currency === 'INR' ? Math.round(item.baseUsd * 83) : item.baseUsd));
                          setActiveTab('calculator');
                          window.scrollTo({ top: 400, behavior: 'smooth' });
                        }}
                        className="btn btn-secondary"
                        style={{ width: '100%', fontSize: '0.8rem', padding: '0.5rem' }}
                      >
                        Pay For This Plan ➔
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: INVOICE / QUICK CHECKOUT FORM */}
        {activeTab === 'calculator' && (
          <div style={{ maxWidth: '720px', margin: '0 auto 4rem auto', background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '24px', padding: '2.5rem', boxShadow: '0 15px 35px rgba(11,19,42,0.06)' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <span className="section-tag" style={{ background: '#FFF1EE', color: 'var(--primary)', border: 'none', marginBottom: '0.5rem' }}>
                DIRECT INVOICE CHECKOUT
              </span>
              <h2 style={{ fontFamily: 'Outfit, serif', fontSize: '2rem', fontWeight: 900, color: '#0F172A' }}>
                Make a Secure Payment
              </h2>
              <p style={{ fontSize: '0.95rem', color: '#64748B' }}>
                Enter your details or invoice number to receive an instant verified payment link with GST invoice confirmation.
              </p>
            </div>

            <form onSubmit={handleQuickPaySubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '0.4rem' }}>
                  Client Name / Company Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Doe / Acme Healthcare Corp"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '12px', border: '1px solid #CBD5E1', fontSize: '0.95rem', outline: 'none' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '0.4rem' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@company.com"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '12px', border: '1px solid #CBD5E1', fontSize: '0.95rem', outline: 'none' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '0.4rem' }}>
                    Invoice / Reference # (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. DD-2026-089"
                    value={invoiceNumber}
                    onChange={(e) => setInvoiceNumber(e.target.value)}
                    style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '12px', border: '1px solid #CBD5E1', fontSize: '0.95rem', outline: 'none' }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '0.4rem' }}>
                  Service / Retainer *
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '12px', border: '1px solid #CBD5E1', fontSize: '0.95rem', outline: 'none', background: '#FFF' }}
                >
                  <option value="Graphic Design">Graphic Design ($35 / ₹2,900+)</option>
                  <option value="Social Media Marketing Retainer">Social Media Marketing Retainer ($750 - $4,000/mo)</option>
                  <option value="Performance Ads & Google Ads Management">Performance Ads & Google Ads Management</option>
                  <option value="SEO & Generative Engine Optimization (GEO)">SEO & Generative Engine Optimization (GEO)</option>
                  <option value="Custom Website & Web Application">Custom Website & Web Application ($3,200+)</option>
                  <option value="Executive Personal Branding">Executive Personal Branding</option>
                  <option value="Custom Invoice Payment">Custom Invoice Amount</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '0.4rem' }}>
                  Payment Amount ({currencySymbols[currency]}) *
                </label>
                <div style={{ position: 'relative' }}>
                  <span style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', fontWeight: 700, color: '#64748B' }}>
                    {currencySymbols[currency]}
                  </span>
                  <input
                    type="number"
                    placeholder="Enter amount"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    style={{ width: '100%', padding: '0.75rem 1rem 0.75rem 2.5rem', borderRadius: '12px', border: '1px solid #CBD5E1', fontSize: '0.95rem', outline: 'none' }}
                  />
                </div>
              </div>

              <div style={{ background: '#F8FAFC', padding: '1rem', borderRadius: '12px', fontSize: '0.85rem', color: '#64748B' }}>
                🔒 <strong>Payment Security Guarantee:</strong> Upon submission, you will be connected directly with our billing team for immediate link generation and GST invoice issuance.
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%', padding: '0.9rem', fontSize: '1rem', fontWeight: 800, marginTop: '0.5rem' }}
              >
                Proceed to Secure Payment ➔
              </button>
            </form>
          </div>
        )}

        {/* TAB 3: BILLING FAQS */}
        {activeTab === 'faqs' && (
          <div style={{ maxWidth: '850px', margin: '0 auto 4rem auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <h2 style={{ fontFamily: 'Outfit, serif', fontSize: '2.2rem', fontWeight: 900, color: 'var(--secondary)' }}>
                Frequently Asked Billing & Payment Questions
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                {
                  q: 'Do you offer a post-pay model or trial period?',
                  a: 'Yes! For eligible performance retainers and graphic design assets, we offer milestone post-pay terms. You review the completed deliverables and verify work quality before final invoice clearance.'
                },
                {
                  q: 'Are there any hidden fees or lock-in contracts?',
                  a: 'Never. Digital Digix operates with 100% transparent pricing. You can scale ad budgets up or down, modify retainers, or pause services with zero hidden cancellation fees.'
                },
                {
                  q: 'Do you provide formal GST / Tax invoices?',
                  a: 'Yes, we issue verified 18% GST tax invoices for Indian companies with full input tax credit entitlement, as well as zero-rated international export invoices for global enterprises.'
                },
                {
                  q: 'Which international currencies do you accept?',
                  a: 'We accept USD ($), EUR (€), GBP (£), AED, AUD, CAD, and SGD via international wire transfer (SWIFT / SEPA / ACH) and global credit cards through Stripe.'
                },
                {
                  q: 'How are website and software development projects billed?',
                  a: 'Web engineering projects are split into clear milestones: 50% upon architectural kickoff and UI approval, and 50% upon final QA testing and deployment signoff.'
                }
              ].map((faq, i) => (
                <div
                  key={i}
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '16px',
                    padding: '1.5rem 1.75rem',
                    boxShadow: 'var(--shadow-sm)'
                  }}
                >
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '0.5rem' }}>
                    {faq.q}
                  </h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* BOTTOM FOUNDER SUPPORT BANNER */}
        <div style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)', borderRadius: '28px', padding: '3.5rem 3rem', color: '#FFF', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '2rem', boxShadow: 'var(--shadow-lg)', border: '1px solid rgba(255,255,255,0.1)', flexWrap: 'wrap' }}>
          <div style={{ maxWidth: '640px' }}>
            <span className="section-tag" style={{ background: 'rgba(255,78,39,0.2)', color: '#FF4E27', border: 'none', marginBottom: '0.75rem', display: 'inline-block', padding: '0.35rem 0.85rem', borderRadius: '999px', fontSize: '0.75rem', fontWeight: 800 }}>
              DIRECT BILLING ASSISTANCE
            </span>
            <h3 style={{ fontSize: '2.2rem', fontWeight: 900, color: '#FFF', marginBottom: '0.5rem' }}>
              Need Custom Billing or Corporate Escrow?
            </h3>
            <p style={{ fontSize: '1rem', color: '#94A3B8', lineHeight: 1.6 }}>
              Speak directly with our finance and leadership team. We can structure custom milestone payment terms, annual discount retainers, or wire instructions.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/918586989832?text=Hi%2C%20I%20have%20a%20billing%20%2F%20payment%20inquiry%20for%20Digital%20Digix"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ padding: '0.9rem 1.8rem' }}
            >
              Chat with Finance 💬
            </a>
            <button
              className="btn btn-secondary"
              style={{ color: '#FFF', borderColor: 'rgba(255,255,255,0.3)', padding: '0.9rem 1.8rem' }}
              onClick={() => onOpenStrategyModal('Custom Billing & Payment Structure')}
            >
              Schedule Call ➔
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
