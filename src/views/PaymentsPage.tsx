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
  currency: _currency,
  onCurrencyChange: _onCurrencyChange,
  onNavigate,
  onOpenStrategyModal: _onOpenStrategyModal
}) => {
  const [copiedLink, setCopiedLink] = useState<string | null>(null);

  const wiseLink = 'https://wise.com/pay/business/harshchaudhary3';
  const paypalLink = 'https://paypal.me/Harshvibes';

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedLink(type);
    setTimeout(() => {
      setCopiedLink(null);
    }, 2500);
  };

  return (
    <div style={{ padding: '3rem 0 6rem 0', minHeight: '90vh', backgroundColor: '#FDFBF7' }}>
      <div className="container" style={{ maxWidth: '1080px' }}>
        
        {/* Breadcrumb */}
        <div style={{ fontSize: '0.875rem', color: '#64748B', marginBottom: '1.5rem', textAlign: 'center' }}>
          <span style={{ cursor: 'pointer', color: 'var(--primary)' }} onClick={() => onNavigate('home')}>Home</span> / <span className="active" style={{ fontWeight: 700, color: '#0F172A' }}>Official Payment Options</span>
        </div>

        {/* Hero Header */}
        <div className="section-header" style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 3.5rem auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#FFF1EE', color: '#FF4E27', border: '1px solid rgba(255, 78, 39, 0.2)', padding: '0.4rem 1.1rem', borderRadius: '999px', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.08em', marginBottom: '1.25rem' }}>
            🔒 VERIFIED PAYMENT PORTAL
          </div>
          <h1 style={{ fontFamily: 'Outfit, serif', fontSize: '3.4rem', fontWeight: 900, marginBottom: '1rem', color: '#0F172A', lineHeight: 1.15 }}>
            Official Payment Methods
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#64748B', lineHeight: 1.6, margin: '0 auto' }}>
            We accept direct, secure payments exclusively through <strong>Wise</strong> and <strong>PayPal</strong>. Scan the official QR codes below or click the direct links to proceed.
          </p>
        </div>

        {/* 2 EXCLUSIVE PAYMENT METHODS GRID */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          
          {/* 1. WISE CARD */}
          <div style={{
            background: '#FFFFFF',
            border: '1px solid #E2E8F0',
            borderTop: '5px solid #2ED06E',
            borderRadius: '24px',
            padding: '2.5rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            boxShadow: '0 12px 35px rgba(11, 19, 42, 0.06)',
            position: 'relative'
          }}>
            <div style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', background: 'rgba(46, 208, 110, 0.12)', color: '#15803D', padding: '0.3rem 0.75rem', borderRadius: '999px', fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.05em' }}>
              LOWEST FX FEES
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
              <span style={{ fontSize: '1.8rem' }}>🌿</span>
              <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.75rem', fontWeight: 900, color: '#0F172A', margin: 0 }}>
                Wise
              </h2>
            </div>

            <p style={{ fontSize: '0.9rem', color: '#64748B', lineHeight: 1.5, marginBottom: '1.5rem', maxWidth: '320px' }}>
              Best for global bank transfers, multiple currencies (USD, EUR, GBP, AUD, CAD) with mid-market exchange rates.
            </p>

            {/* QR Code Display Container */}
            <div style={{
              background: '#F8FAFC',
              border: '2px dashed #CBD5E1',
              borderRadius: '20px',
              padding: '1.25rem',
              marginBottom: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              <img
                src="/payments/wise_qr.png"
                alt="Wise QR Code — Digital Digix"
                width="220"
                height="220"
                style={{
                  width: '220px',
                  height: '220px',
                  borderRadius: '12px',
                  objectFit: 'contain',
                  background: '#FFF'
                }}
              />
              <span style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: 600, marginTop: '0.75rem' }}>
                📷 Scan with your phone or banking app
              </span>
            </div>

            {/* Direct Link Action */}
            <a
              href={wiseLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{
                width: '100%',
                padding: '0.9rem',
                fontSize: '0.95rem',
                fontWeight: 800,
                backgroundColor: '#16A34A',
                borderColor: '#16A34A',
                marginBottom: '0.75rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                boxShadow: '0 6px 20px rgba(22, 163, 74, 0.3)'
              }}
            >
              Pay via Wise Link ➔
            </a>

            {/* Copy Link Button */}
            <button
              onClick={() => handleCopy(wiseLink, 'wise')}
              style={{
                width: '100%',
                padding: '0.65rem',
                borderRadius: '12px',
                fontSize: '0.82rem',
                fontWeight: 700,
                backgroundColor: copiedLink === 'wise' ? '#DCFCE7' : '#F1F5F9',
                color: copiedLink === 'wise' ? '#15803D' : '#475569',
                border: '1px solid #E2E8F0',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {copiedLink === 'wise' ? '✓ Link Copied to Clipboard!' : '📋 Copy Wise Payment URL'}
            </button>
          </div>

          {/* 2. PAYPAL CARD */}
          <div style={{
            background: '#FFFFFF',
            border: '1px solid #E2E8F0',
            borderTop: '5px solid #0070BA',
            borderRadius: '24px',
            padding: '2.5rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            boxShadow: '0 12px 35px rgba(11, 19, 42, 0.06)',
            position: 'relative'
          }}>
            <div style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', background: 'rgba(0, 112, 186, 0.12)', color: '#0070BA', padding: '0.3rem 0.75rem', borderRadius: '999px', fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.05em' }}>
              BUYER PROTECTION
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
              <span style={{ fontSize: '1.8rem' }}>💳</span>
              <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.75rem', fontWeight: 900, color: '#0F172A', margin: 0 }}>
                PayPal
              </h2>
            </div>

            <p style={{ fontSize: '0.9rem', color: '#64748B', lineHeight: 1.5, marginBottom: '1.5rem', maxWidth: '320px' }}>
              Instant global checkout using any Credit/Debit Card or your PayPal balance with full buyer protection.
            </p>

            {/* QR Code Display Container */}
            <div style={{
              background: '#F8FAFC',
              border: '2px dashed #CBD5E1',
              borderRadius: '20px',
              padding: '1.25rem',
              marginBottom: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              <img
                src="/payments/paypal_qr.png"
                alt="PayPal QR Code — Digital Digix"
                width="220"
                height="220"
                style={{
                  width: '220px',
                  height: '220px',
                  borderRadius: '12px',
                  objectFit: 'contain',
                  background: '#FFF'
                }}
              />
              <span style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: 600, marginTop: '0.75rem' }}>
                📷 Scan with PayPal app or camera
              </span>
            </div>

            {/* Direct Link Action */}
            <a
              href={paypalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{
                width: '100%',
                padding: '0.9rem',
                fontSize: '0.95rem',
                fontWeight: 800,
                backgroundColor: '#0070BA',
                borderColor: '#0070BA',
                marginBottom: '0.75rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                boxShadow: '0 6px 20px rgba(0, 112, 186, 0.3)'
              }}
            >
              Pay via PayPal.Me ➔
            </a>

            {/* Copy Link Button */}
            <button
              onClick={() => handleCopy(paypalLink, 'paypal')}
              style={{
                width: '100%',
                padding: '0.65rem',
                borderRadius: '12px',
                fontSize: '0.82rem',
                fontWeight: 700,
                backgroundColor: copiedLink === 'paypal' ? '#E0F2FE' : '#F1F5F9',
                color: copiedLink === 'paypal' ? '#0369A1' : '#475569',
                border: '1px solid #E2E8F0',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {copiedLink === 'paypal' ? '✓ Link Copied to Clipboard!' : '📋 Copy PayPal.Me URL'}
            </button>
          </div>

        </div>

        {/* 3-STEP CONFIRMATION PROCESS */}
        <div style={{
          background: '#FFFFFF',
          border: '1px solid #E2E8F0',
          borderRadius: '24px',
          padding: '2.5rem',
          marginBottom: '4rem',
          boxShadow: '0 8px 25px rgba(11, 19, 42, 0.04)'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#FF4E27', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              HOW IT WORKS
            </span>
            <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.8rem', fontWeight: 900, color: '#0F172A', marginTop: '0.35rem' }}>
              Simple 3-Step Payment & Confirmation
            </h3>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            <div style={{ background: '#F8FAFC', padding: '1.5rem', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#FF4E27', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, marginBottom: '0.75rem' }}>
                1
              </div>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.35rem' }}>Choose Wise or PayPal</h4>
              <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.5 }}>
                Scan either QR code using your mobile app or click the direct payment links above.
              </p>
            </div>

            <div style={{ background: '#F8FAFC', padding: '1.5rem', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#3B82F6', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, marginBottom: '0.75rem' }}>
                2
              </div>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.35rem' }}>Enter Amount & Reference</h4>
              <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.5 }}>
                Enter the agreed project or retainer amount with your name or invoice reference in the payment note.
              </p>
            </div>

            <div style={{ background: '#F8FAFC', padding: '1.5rem', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#10B981', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, marginBottom: '0.75rem' }}>
                3
              </div>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.35rem' }}>Confirm on WhatsApp</h4>
              <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.5 }}>
                Send your transaction screenshot to WhatsApp (+91 85869 89832) for instant receipt & onboarding kickoff.
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM FOUNDER SUPPORT & CONFIRMATION BANNER */}
        <div style={{
          background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
          borderRadius: '28px',
          padding: '3.5rem 3rem',
          color: '#FFF',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '2rem',
          boxShadow: 'var(--shadow-lg)',
          border: '1px solid rgba(255,255,255,0.1)',
          flexWrap: 'wrap'
        }}>
          <div style={{ maxWidth: '640px' }}>
            <span style={{
              background: 'rgba(255,78,39,0.2)',
              color: '#FF4E27',
              border: 'none',
              marginBottom: '0.75rem',
              display: 'inline-block',
              padding: '0.35rem 0.85rem',
              borderRadius: '999px',
              fontSize: '0.75rem',
              fontWeight: 800
            }}>
              DIRECT VERIFICATION
            </span>
            <h3 style={{ fontSize: '2.2rem', fontWeight: 900, color: '#FFF', marginBottom: '0.5rem', fontFamily: 'Outfit, sans-serif' }}>
              Completed a Payment?
            </h3>
            <p style={{ fontSize: '1rem', color: '#94A3B8', lineHeight: 1.6 }}>
              Send your payment confirmation or transaction receipt directly to our founder on WhatsApp for immediate invoice issuance and milestone clearance.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/918586989832?text=Hi%20Harsh%2C%20I%20have%20completed%20a%20payment%20via%20Wise%2FPayPal%20for%20Digital%20Digix"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ padding: '0.9rem 1.8rem', fontSize: '1rem', fontWeight: 800 }}
            >
              Confirm on WhatsApp 💬
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
