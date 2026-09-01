import React, { useState, useEffect } from 'react';
import { all89IndustriesList } from './IndustriesPage';
import type { PageView } from '../types';

interface IndustryDetailPageProps {
  industryId: string;
  onNavigate: (page: PageView, slug?: string) => void;
  onOpenStrategyModal?: (note?: string) => void;
}

export const IndustryDetailPage: React.FC<IndustryDetailPageProps> = ({
  industryId,
  onNavigate,
  onOpenStrategyModal: _onOpenStrategyModal
}) => {
  const [activeTab, setActiveTab] = useState<string>('Overview');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [industryId]);

  const industry = all89IndustriesList.find(
    (item) => item.id === industryId || item.name.toLowerCase().replace(/[^a-z0-9]/g, '-') === industryId
  );

  if (!industry) {
    return (
      <div style={{ padding: '6rem 0', textAlign: 'center', backgroundColor: '#FDFBF7', minHeight: '80vh' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'Outfit, serif', fontSize: '2.5rem', fontWeight: 900, color: '#0F172A', marginBottom: '1.5rem' }}>
            Industry Not Found
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#64748B', marginBottom: '2rem' }}>
            The requested industry hub link is invalid or has been moved.
          </p>
          <button
            className="btn btn-primary"
            onClick={() => onNavigate('industries')}
            style={{ borderRadius: '999px', padding: '0.9rem 2.2rem' }}
          >
            Browse All 89 Industries
          </button>
        </div>
      </div>
    );
  }

  const whatsappMessage = encodeURIComponent(`Hi, I am interested in growth marketing for ${industry.name}`);

  return (
    <div style={{ backgroundColor: '#F0F4F8', color: '#1F2937', minHeight: '100vh', padding: '2.5rem 0 6rem 0' }}>
      <div className="container" style={{ maxWidth: '1140px', margin: '0 auto' }}>
        
        {/* BREADCRUMB & BACK BUTTON */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ fontSize: '0.85rem', color: '#64748B' }}>
            <span style={{ cursor: 'pointer', color: '#0F172A', fontWeight: 600 }} onClick={() => onNavigate('home')}>Home</span> ›{' '}
            <span style={{ cursor: 'pointer', color: '#0F172A', fontWeight: 600 }} onClick={() => onNavigate('industries')}>Industries</span> ›{' '}
            <span style={{ color: '#3B82F6', fontWeight: 700 }}>{industry.name} Hub</span>
          </div>

          <button
            onClick={() => onNavigate('industries')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.875rem',
              fontWeight: 800,
              color: '#0F172A',
              backgroundColor: '#FFFFFF',
              border: '1px solid #CBD5E1',
              padding: '0.55rem 1.25rem',
              borderRadius: '999px',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
              transition: 'all 0.25s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#F1F5F9';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#FFFFFF';
            }}
          >
            ← Back to All 89 Industries
          </button>
        </div>

        {/* 1. TOP HERO BANNER */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '24px',
            padding: '2.25rem 2.5rem',
            borderTop: '4px solid #3B82F6',
            boxShadow: '0 12px 35px rgba(0, 0, 0, 0.05)',
            marginBottom: '1.5rem',
            position: 'relative'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
              <div style={{ fontSize: '3.2rem', lineHeight: 1, backgroundColor: '#FAF6EE', padding: '0.85rem', borderRadius: '20px', border: '1px solid #EFE4D2' }}>
                {industry.icon}
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.35rem' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#3B82F6', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    {industry.category}
                  </span>
                  <span
                    style={{
                      backgroundColor: '#E0B56C',
                      color: '#FFFFFF',
                      fontSize: '0.625rem',
                      fontWeight: 900,
                      padding: '0.15rem 0.5rem',
                      borderRadius: '6px',
                      letterSpacing: '0.05em'
                    }}
                  >
                    LIVE HUB
                  </span>
                </div>

                <h1 style={{ fontFamily: 'Outfit, serif', fontSize: '2.6rem', fontWeight: 900, color: '#0F172A', margin: 0, lineHeight: 1.15 }}>
                  {industry.name}
                </h1>

                <p style={{ fontSize: '1.05rem', color: '#64748B', margin: '0.35rem 0 0 0' }}>
                  {industry.subtitle}
                </p>
              </div>
            </div>

            {/* REQUEST STRATEGY BUTTON VIA WHATSAPP */}
            <a
              href={`https://wa.me/918586989832?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-cta-animated"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                color: '#FFFFFF',
                padding: '0.95rem 2.2rem',
                borderRadius: '999px',
                fontWeight: 900,
                fontSize: '0.95rem',
                textDecoration: 'none',
                letterSpacing: '0.01em',
                boxShadow: '0 4px 15px rgba(37, 211, 102, 0.3)'
              }}
            >
              Request Strategy on WhatsApp 💬 ➔
            </a>
          </div>
        </div>

        {/* 2. SEO META INFO CARD */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '16px',
            padding: '1.25rem 1.75rem',
            border: '1px solid #E2E8F0',
            marginBottom: '1.75rem',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.02)'
          }}
        >
          <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.35rem' }}>
            {industry.category} Digital Marketing – Client & Revenue Growth for {industry.name} | Digital Digix
          </div>
          <div style={{ fontSize: '0.85rem', color: '#64748B', lineHeight: 1.5 }}>
            Digital marketing for {industry.name.toLowerCase()}: attract new clients, build local market trust online with tailored SEO, PPC & social media strategies by Digital Digix.
          </div>
        </div>

        {/* 3. NAVIGATION TABS BAR */}
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', paddingBottom: '0.5rem', marginBottom: '2rem' }}>
          {['Overview', 'Challenges', 'Services', 'Benefits & ROI', 'Blog Library', 'FAQs'].map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  backgroundColor: isActive ? '#0F172A' : '#FFFFFF',
                  color: isActive ? '#FFFFFF' : '#475569',
                  borderRadius: '999px',
                  padding: '0.6rem 1.4rem',
                  fontSize: '0.85rem',
                  fontWeight: isActive ? 800 : 600,
                  border: '1px solid #E2E8F0',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  boxShadow: isActive ? '0 4px 12px rgba(15,23,42,0.15)' : '0 2px 5px rgba(0,0,0,0.02)',
                  transition: 'all 0.2s ease'
                }}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* TAB CONTENT PANELS */}
        {activeTab === 'Overview' && (
          <>
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '24px',
                padding: '2.25rem',
                border: '1px solid #E2E8F0',
                boxShadow: '0 8px 25px rgba(0,0,0,0.03)',
                marginBottom: '1.75rem'
              }}
            >
              <h2 style={{ fontFamily: 'Outfit, serif', fontSize: '1.8rem', fontWeight: 900, color: '#0F172A', marginBottom: '1rem' }}>
                Industry Overview — {industry.name}
              </h2>
              <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.7, margin: 0 }}>
                {industry.overview}
              </p>
            </div>

            <div
              style={{
                backgroundColor: '#FDFBF7',
                borderRadius: '20px',
                padding: '1.75rem',
                border: '1px solid #F3EFE6',
                marginBottom: '2rem'
              }}
            >
              <h3 style={{ fontFamily: 'Outfit, serif', fontSize: '1.3rem', fontWeight: 900, color: '#991B1B', marginBottom: '1.25rem' }}>
                Did You Know? ({industry.name} Market Insights)
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
                {industry.didYouKnow.map((fact, fIdx) => (
                  <div
                    key={fIdx}
                    style={{
                      backgroundColor: '#FFFFFF',
                      borderRadius: '14px',
                      padding: '1.25rem',
                      borderLeft: '4px solid #3B82F6',
                      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.03)',
                      fontSize: '0.875rem',
                      color: '#334155',
                      lineHeight: 1.5,
                      fontWeight: 600
                    }}
                  >
                    {fact}
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {activeTab === 'Challenges' && (
          <div style={{ backgroundColor: '#FFFFFF', padding: '2.25rem', borderRadius: '24px', border: '1px solid #E2E8F0', marginBottom: '2rem', boxShadow: '0 8px 25px rgba(0,0,0,0.03)' }}>
            <h3 style={{ fontFamily: 'Outfit, serif', fontSize: '1.6rem', fontWeight: 900, color: '#0F172A', marginBottom: '1.25rem' }}>
              Core Growth Challenges in {industry.name}
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
              {industry.challenges.map((c, cIdx) => (
                <div key={cIdx} style={{ background: '#FFF5F5', padding: '1.25rem', borderRadius: '14px', borderLeft: '4px solid #EF4444' }}>
                  <div style={{ fontSize: '1rem', fontWeight: 800, color: '#991B1B', marginBottom: '0.4rem' }}>{c.title}</div>
                  <div style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.6 }}>{c.desc}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 6 CORE TAILORED SERVICE CARDS */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
            <h3 style={{ fontFamily: 'Outfit, serif', fontSize: '1.8rem', fontWeight: 900, color: '#0F172A', margin: '0 0 0.35rem 0' }}>
              6 Tailored Growth Engines for {industry.name}
            </h3>
            <p style={{ fontSize: '0.95rem', color: '#64748B', margin: 0 }}>
              Click any service card for an instant strategy breakdown & WhatsApp proposal for {industry.name}
            </p>
          </div>

          <div className="responsive-3-grid" style={{ gap: '1.5rem' }}>
            {/* CARD 1: SEO */}
            <a
              href={`https://wa.me/918586989832?text=${encodeURIComponent(`Hi, I am interested in SEO services for ${industry.name}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="industry-service-card-animated"
              style={{
                display: 'block',
                textDecoration: 'none',
                background: '#FFFFFF',
                borderTop: '4px solid #FF4E27',
                borderLeft: '1px solid #E2E8F0',
                borderRight: '1px solid #E2E8F0',
                borderBottom: '1px solid #E2E8F0',
                borderRadius: '20px',
                padding: '1.75rem 1.5rem',
                boxShadow: '0 8px 25px rgba(0,0,0,0.03)',
                cursor: 'pointer'
              }}
            >
              <div style={{ fontSize: '2.2rem', marginBottom: '0.75rem' }}>🔍</div>
              <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.5rem', fontFamily: 'Outfit, sans-serif' }}>
                Search Engine Optimisation (SEO)
              </h4>
              <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
                Rank your {industry.name} business at the top of Google and capture high-intent local searches.
              </p>
              <div style={{ marginTop: '1rem', fontSize: '0.8rem', fontWeight: 800, color: '#FF4E27' }}>
                Request SEO Strategy on WhatsApp 💬 ➔
              </div>
            </a>

            {/* CARD 2: GOOGLE ADS */}
            <a
              href={`https://wa.me/918586989832?text=${encodeURIComponent(`Hi, I am interested in Google Ads for ${industry.name}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="industry-service-card-animated"
              style={{
                display: 'block',
                textDecoration: 'none',
                background: '#FFFFFF',
                borderTop: '4px solid #FF4E27',
                borderLeft: '1px solid #E2E8F0',
                borderRight: '1px solid #E2E8F0',
                borderBottom: '1px solid #E2E8F0',
                borderRadius: '20px',
                padding: '1.75rem 1.5rem',
                boxShadow: '0 8px 25px rgba(0,0,0,0.03)',
                cursor: 'pointer'
              }}
            >
              <div style={{ fontSize: '2.2rem', marginBottom: '0.75rem' }}>🎯</div>
              <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.5rem', fontFamily: 'Outfit, sans-serif' }}>
                Google Ads (PPC)
              </h4>
              <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
                High-intent Search, Display & YouTube campaigns engineered for ROI in the {industry.name} market.
              </p>
              <div style={{ marginTop: '1rem', fontSize: '0.8rem', fontWeight: 800, color: '#FF4E27' }}>
                Request Google Ads Plan on WhatsApp 💬 ➔
              </div>
            </a>

            {/* CARD 3: META ADS */}
            <a
              href={`https://wa.me/918586989832?text=${encodeURIComponent(`Hi, I am interested in Meta Ads for ${industry.name}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="industry-service-card-animated"
              style={{
                display: 'block',
                textDecoration: 'none',
                background: '#FFFFFF',
                borderTop: '4px solid #FF4E27',
                borderLeft: '1px solid #E2E8F0',
                borderRight: '1px solid #E2E8F0',
                borderBottom: '1px solid #E2E8F0',
                borderRadius: '20px',
                padding: '1.75rem 1.5rem',
                boxShadow: '0 8px 25px rgba(0,0,0,0.03)',
                cursor: 'pointer'
              }}
            >
              <div style={{ fontSize: '2.2rem', marginBottom: '0.75rem' }}>📱</div>
              <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.5rem', fontFamily: 'Outfit, sans-serif' }}>
                Meta Ads (Facebook & Instagram)
              </h4>
              <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
                Targeted social campaigns that turn {industry.name} audiences into real leads.
              </p>
              <div style={{ marginTop: '1rem', fontSize: '0.8rem', fontWeight: 800, color: '#FF4E27' }}>
                Request Meta Ads Plan on WhatsApp 💬 ➔
              </div>
            </a>

            {/* CARD 4: SOCIAL MEDIA MARKETING */}
            <a
              href={`https://wa.me/918586989832?text=${encodeURIComponent(`Hi, I am interested in SMM services for ${industry.name}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="industry-service-card-animated"
              style={{
                display: 'block',
                textDecoration: 'none',
                background: '#FFFFFF',
                borderTop: '4px solid #FF4E27',
                borderLeft: '1px solid #E2E8F0',
                borderRight: '1px solid #E2E8F0',
                borderBottom: '1px solid #E2E8F0',
                borderRadius: '20px',
                padding: '1.75rem 1.5rem',
                boxShadow: '0 8px 25px rgba(0,0,0,0.03)',
                cursor: 'pointer'
              }}
            >
              <div style={{ fontSize: '2.2rem', marginBottom: '0.75rem' }}>📣</div>
              <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.5rem', fontFamily: 'Outfit, sans-serif' }}>
                Social Media Marketing
              </h4>
              <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
                Content, reels and community management that grow your {industry.name} brand.
              </p>
              <div style={{ marginTop: '1rem', fontSize: '0.8rem', fontWeight: 800, color: '#FF4E27' }}>
                Request SMM Proposal on WhatsApp 💬 ➔
              </div>
            </a>

            {/* CARD 5: WEBSITE DESIGN & DEVELOPMENT */}
            <a
              href={`https://wa.me/918586989832?text=${encodeURIComponent(`Hi, I am interested in Website Development for ${industry.name}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="industry-service-card-animated"
              style={{
                display: 'block',
                textDecoration: 'none',
                background: '#FFFFFF',
                borderTop: '4px solid #FF4E27',
                borderLeft: '1px solid #E2E8F0',
                borderRight: '1px solid #E2E8F0',
                borderBottom: '1px solid #E2E8F0',
                borderRadius: '20px',
                padding: '1.75rem 1.5rem',
                boxShadow: '0 8px 25px rgba(0,0,0,0.03)',
                cursor: 'pointer'
              }}
            >
              <div style={{ fontSize: '2.2rem', marginBottom: '0.75rem' }}>💻</div>
              <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.5rem', fontFamily: 'Outfit, sans-serif' }}>
                Website Design & Development
              </h4>
              <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
                Fast, SEO-ready, mobile-first websites built to convert {industry.name} visitors.
              </p>
              <div style={{ marginTop: '1rem', fontSize: '0.8rem', fontWeight: 800, color: '#FF4E27' }}>
                Request Website Quote on WhatsApp 💬 ➔
              </div>
            </a>

            {/* CARD 6: GRAPHIC DESIGN & BRANDING */}
            <a
              href={`https://wa.me/918586989832?text=${encodeURIComponent(`Hi, I am interested in Graphic Design for ${industry.name}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="industry-service-card-animated"
              style={{
                display: 'block',
                textDecoration: 'none',
                background: '#FFFFFF',
                borderTop: '4px solid #FF4E27',
                borderLeft: '1px solid #E2E8F0',
                borderRight: '1px solid #E2E8F0',
                borderBottom: '1px solid #E2E8F0',
                borderRadius: '20px',
                padding: '1.75rem 1.5rem',
                boxShadow: '0 8px 25px rgba(0,0,0,0.03)',
                cursor: 'pointer'
              }}
            >
              <div style={{ fontSize: '2.2rem', marginBottom: '0.75rem' }}>🎨</div>
              <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.5rem', fontFamily: 'Outfit, sans-serif' }}>
                Graphic Design & Branding
              </h4>
              <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
                Posters, logos, packaging and brand identity — with transparent pricing.
              </p>
              <div style={{ marginTop: '1rem', fontSize: '0.8rem', fontWeight: 800, color: '#FF4E27' }}>
                Request Graphic Design Pricing on WhatsApp 💬 ➔
              </div>
            </a>
          </div>
        </div>

        {activeTab === 'Services' && (
          <div style={{ backgroundColor: '#FFFFFF', padding: '2.25rem', borderRadius: '24px', border: '1px solid #E2E8F0', marginBottom: '2rem', boxShadow: '0 8px 25px rgba(0,0,0,0.03)' }}>
            <h3 style={{ fontFamily: 'Outfit, serif', fontSize: '1.6rem', fontWeight: 900, color: '#0F172A', marginBottom: '1.25rem' }}>
              Tailored Digital Marketing Solutions for {industry.name}
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
              {industry.services.map((s, sIdx) => (
                <div key={sIdx} style={{ background: '#ECFDF5', padding: '1.25rem', borderRadius: '14px', borderLeft: '4px solid #10B981' }}>
                  <div style={{ fontSize: '1rem', fontWeight: 800, color: '#065F46', marginBottom: '0.4rem' }}>{s.name}</div>
                  <div style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.6 }}>{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'Benefits & ROI' && (
          <div style={{ backgroundColor: '#FFFFFF', padding: '2.25rem', borderRadius: '24px', border: '1px solid #E2E8F0', marginBottom: '2rem', boxShadow: '0 8px 25px rgba(0,0,0,0.03)' }}>
            <h3 style={{ fontFamily: 'Outfit, serif', fontSize: '1.6rem', fontWeight: 900, color: '#0F172A', marginBottom: '1.25rem' }}>
              Expected ROI & Revenue Impact for {industry.name}
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
              <div style={{ backgroundColor: '#F8FAFC', padding: '1.5rem', borderRadius: '16px', borderTop: '3px solid #3B82F6', textAlign: 'center' }}>
                <div style={{ fontFamily: 'Outfit', fontSize: '2.2rem', fontWeight: 900, color: '#3B82F6' }}>+340%</div>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginTop: '0.3rem' }}>Inbound Inquiry Growth</div>
              </div>
              <div style={{ backgroundColor: '#F8FAFC', padding: '1.5rem', borderRadius: '16px', borderTop: '3px solid #10B981', textAlign: 'center' }}>
                <div style={{ fontFamily: 'Outfit', fontSize: '2.2rem', fontWeight: 900, color: '#10B981' }}>-45%</div>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginTop: '0.3rem' }}>CAC Reduction</div>
              </div>
              <div style={{ backgroundColor: '#F8FAFC', padding: '1.5rem', borderRadius: '16px', borderTop: '3px solid #8B5CF6', textAlign: 'center' }}>
                <div style={{ fontFamily: 'Outfit', fontSize: '2.2rem', fontWeight: 900, color: '#8B5CF6' }}>3.4x</div>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginTop: '0.3rem' }}>Review Conversion Lift</div>
              </div>
              <div style={{ backgroundColor: '#F8FAFC', padding: '1.5rem', borderRadius: '16px', borderTop: '3px solid #F59E0B', textAlign: 'center' }}>
                <div style={{ fontFamily: 'Outfit', fontSize: '2.2rem', fontWeight: 900, color: '#F59E0B' }}>98%</div>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginTop: '0.3rem' }}>Client Campaign Retention</div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'Blog Library' && (
          <div style={{ backgroundColor: '#FFFFFF', padding: '2.25rem', borderRadius: '24px', border: '1px solid #E2E8F0', marginBottom: '2rem', boxShadow: '0 8px 25px rgba(0,0,0,0.03)' }}>
            <h3 style={{ fontFamily: 'Outfit, serif', fontSize: '1.6rem', fontWeight: 900, color: '#0F172A', marginBottom: '1.25rem' }}>
              {industry.name} Industry Growth Guides & Articles
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
              <div style={{ padding: '1.25rem', borderRadius: '14px', border: '1px solid #E2E8F0', backgroundColor: '#F8FAFC' }}>
                <span style={{ fontSize: '0.725rem', color: '#FF4E27', fontWeight: 800, textTransform: 'uppercase' }}>CASE STUDY</span>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0F172A', margin: '0.4rem 0 0.5rem 0' }}>How Digital Marketing Transformed {industry.name} in 2026</h4>
                <p style={{ fontSize: '0.825rem', color: '#64748B', lineHeight: 1.5 }}>Proven blueprint for scaling customer acquisition and brand authority online.</p>
              </div>
              <div style={{ padding: '1.25rem', borderRadius: '14px', border: '1px solid #E2E8F0', backgroundColor: '#F8FAFC' }}>
                <span style={{ fontSize: '0.725rem', color: '#3B82F6', fontWeight: 800, textTransform: 'uppercase' }}>STRATEGY GUIDE</span>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0F172A', margin: '0.4rem 0 0.5rem 0' }}>SEO vs Meta Ads for {industry.name}: The ROI Breakdown</h4>
                <p style={{ fontSize: '0.825rem', color: '#64748B', lineHeight: 1.5 }}>Comparing search intent channels vs social ads for optimal budget allocation.</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'FAQs' && (
          <div style={{ backgroundColor: '#FFFFFF', padding: '2.25rem', borderRadius: '24px', border: '1px solid #E2E8F0', marginBottom: '2rem', boxShadow: '0 8px 25px rgba(0,0,0,0.03)' }}>
            <h3 style={{ fontFamily: 'Outfit, serif', fontSize: '1.6rem', fontWeight: 900, color: '#0F172A', marginBottom: '1.25rem' }}>
              Frequently Asked Questions ({industry.name})
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {industry.faqs.map((faq, fIdx) => (
                <div key={fIdx} style={{ backgroundColor: '#F8FAFC', padding: '1.25rem', borderRadius: '14px', border: '1px solid #E2E8F0' }}>
                  <div style={{ fontSize: '0.975rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.4rem' }}>{faq.question}</div>
                  <div style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.6 }}>{faq.answer}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* BOTTOM FULL CTA BANNER VIA WHATSAPP */}
        <a
          href={`https://wa.me/918586989832?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-cta-animated"
          style={{
            display: 'block',
            textAlign: 'center',
            textDecoration: 'none',
            width: '100%',
            color: '#FFFFFF',
            padding: '1.25rem 2rem',
            borderRadius: '999px',
            fontSize: '1.05rem',
            fontWeight: 900,
            letterSpacing: '0.02em',
            boxShadow: '0 8px 30px rgba(37, 211, 102, 0.35)'
          }}
        >
          Request Custom Digital Strategy Proposal for {industry.name} on WhatsApp 💬 ➔
        </a>

      </div>
    </div>
  );
};
