'use client';

import React, { useState } from 'react';
import { ALL_COUNTRY_LOCATIONS, formatLocationName } from '../data/locationsData';
import { WorkShowcaseMarquee } from '../components/WorkShowcaseMarquee';

interface LocationPageProps {
  locationName: string;
  onNavigate: (page: any, slug?: string) => void;
  onOpenStrategyModal: (note?: string) => void;
}

export const LocationPage: React.FC<LocationPageProps> = ({ locationName: rawLocationName, onNavigate, onOpenStrategyModal }) => {
  const locationName = formatLocationName(rawLocationName);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Find country matching locationName directly or by city
  const countryObj = ALL_COUNTRY_LOCATIONS.find(c => 
    c.country.toLowerCase() === locationName.toLowerCase() ||
    c.capital.toLowerCase() === locationName.toLowerCase() ||
    c.majorCities.some(city => city.toLowerCase() === locationName.toLowerCase()) ||
    c.regionalCities.some(city => city.toLowerCase() === locationName.toLowerCase())
  );

  const parentCountry = countryObj ? formatLocationName(countryObj.country) : 'International Market';
  const currencyInfo = countryObj ? countryObj.currency : 'USD ($)';
  const regionInfo = countryObj ? countryObj.region : 'Global Markets';

  const faqs = [
    {
      q: 'Do you provide digital marketing and web services in ' + locationName + '?',
      a: 'Yes! Digital Digix provides full-spectrum performance marketing, SEO, Google & Meta Ads, Social Media Management (SMM retainers), and bespoke web development directly tailored for businesses operating in ' + locationName + ' and across ' + parentCountry + '.'
    },
    {
      q: 'How are services priced for ' + locationName + ' businesses?',
      a: 'We provide transparent, outcome-focused pricing in USD (' + currencyInfo + '): Graphic Design from $35, Social Media Marketing retainers from $750/mo to $4,000/mo, and Custom Website Creation packages from $3,200 to $14,000+ with zero lock-in contracts.'
    },
    {
      q: 'Which industries do you partner with in ' + locationName + '?',
      a: 'We scale 89+ industries in ' + locationName + ' and ' + parentCountry + ' including Private Healthcare, Real Estate, E-commerce & D2C, B2B Technology & SaaS, Financial Services, Hospitality & Luxury Travel, Education, and Professional Services.'
    },
    {
      q: 'How soon can our ' + locationName + ' campaigns launch?',
      a: 'We onboard your brand and launch your digital strategy, social content calendars, and advertising funnels within 24 to 48 hours of onboarding.'
    }
  ];

  return (
    <div style={{ backgroundColor: '#FDFBF7', minHeight: '100vh', padding: '2rem 0 6rem 0' }}>
      <div className="container" style={{ maxWidth: '1100px' }}>
        
        {/* 1. BREADCRUMB */}
        <div style={{ fontSize: '0.875rem', color: '#64748B', marginBottom: '1.5rem' }}>
          <span style={{ cursor: 'pointer', color: '#3B82F6' }} onClick={() => onNavigate('home')}>Home</span> /{' '}
          <span style={{ cursor: 'pointer', color: '#3B82F6' }} onClick={() => onNavigate('all-locations')}>Locations</span> /{' '}
          <span className="active" style={{ color: '#0F172A', fontWeight: 700 }}>Digital Marketing in {locationName}</span>
        </div>

        {/* 2. TOP SUMMARY NOTIFICATION BOX */}
        <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '16px', padding: '1.5rem 2rem', marginBottom: '2.5rem', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.4rem' }}>
            Digital Marketing & Growth Agency for {locationName} | Digital Digix
          </h3>
          <p style={{ fontSize: '0.925rem', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
            Looking for a high-ROI performance marketing partner in {locationName}? Digital Digix builds custom acquisition funnels, local SEO & Google Map Pack rankings, Meta & Google PPC campaigns, executive personal branding, and custom Next.js web applications for brands in {locationName}.
          </p>
        </div>

        {/* 3. MAIN HERO BANNER */}
        <div className="responsive-hero-card" style={{ background: '#FFFFFF', borderTop: '4px solid #FF4E27', borderLeft: '1px solid #E2E8F0', borderRight: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0', borderRadius: '24px', padding: '3.5rem 3rem', marginBottom: '4rem', boxShadow: '0 15px 35px rgba(11,19,42,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
            <span style={{ width: '30px', height: '1px', background: '#3B82F6' }}></span>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#3B82F6', letterSpacing: '0.12em' }}>
              {regionInfo} · {parentCountry}
            </span>
            {countryObj && (
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#D97706', backgroundColor: 'rgba(217, 119, 6, 0.1)', padding: '0.2rem 0.6rem', borderRadius: '999px' }}>
                💱 {countryObj.currency}
              </span>
            )}
          </div>

          <h1 style={{ fontFamily: 'Outfit, serif', fontSize: '3.4rem', fontWeight: 900, color: '#0F172A', lineHeight: 1.15, marginBottom: '1.5rem' }}>
            Digital Marketing & Performance Growth in {locationName}
          </h1>

          <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.7, maxWidth: '820px', marginBottom: '2rem' }}>
            Digital Digix is a founder-led growth agency helping commercial enterprises and high-growth brands in {locationName} command market authority online. We combine localized market intent, algorithmic AI search optimization (GEO/AEO), high-converting paid media architecture, and rapid execution to turn prospective buyers into revenue.
          </p>

          <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
            <a
              href={'https://wa.me/918586989832?text=' + encodeURIComponent('Hi, I am interested in your digital marketing services in ' + locationName)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              style={{ backgroundColor: '#0F172A', color: '#FFFFFF', padding: '0.9rem 1.8rem', borderRadius: '999px', fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none' }}
            >
              Get a Free {locationName} Quote →
            </a>
            <button
              onClick={() => onOpenStrategyModal('Digital Marketing Strategy Consultation for ' + locationName)}
              className="btn"
              style={{ backgroundColor: '#FFFFFF', color: '#0F172A', border: '1px solid #CBD5E1', padding: '0.9rem 1.8rem', borderRadius: '999px', fontWeight: 700, fontSize: '0.95rem', cursor: 'pointer' }}
            >
              Book Strategy Session
            </button>
          </div>
        </div>

        {/* 4. "WHAT WE OFFER" SECTION */}
        <div style={{ marginBottom: '5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
              <span style={{ width: '40px', height: '1px', background: '#3B82F6', opacity: 0.6 }}></span>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#3B82F6', letterSpacing: '0.15em', textTransform: 'uppercase' }}>CORE CAPABILITIES</span>
              <span style={{ width: '40px', height: '1px', background: '#3B82F6', opacity: 0.6 }}></span>
            </div>
            <h2 style={{ fontFamily: 'Outfit, serif', fontSize: '2.8rem', fontWeight: 900, color: '#0F172A', marginBottom: '0.5rem' }}>
              Full-Stack Digital Solutions for {locationName}
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#64748B' }}>
              Full-service execution for {locationName} enterprises — one accountable, founder-led team.
            </p>
          </div>

          {/* 6 SERVICE CARDS */}
          <div className="responsive-3-grid" style={{ gap: '1.75rem' }}>
            
            <div style={{ background: '#FFFFFF', borderTop: '4px solid #FF4E27', borderLeft: '1px solid #E2E8F0', borderRight: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0', borderRadius: '18px', padding: '2rem 1.5rem', boxShadow: '0 8px 20px rgba(0,0,0,0.03)' }}>
              <div style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>🔍</div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.5rem' }}>Search Engine Optimization (SEO)</h3>
              <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
                Rank your {locationName} business at the top of organic Google search and AI answer engines (ChatGPT & Perplexity).
              </p>
            </div>

            <div style={{ background: '#FFFFFF', borderTop: '4px solid #FF4E27', borderLeft: '1px solid #E2E8F0', borderRight: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0', borderRadius: '18px', padding: '2rem 1.5rem', boxShadow: '0 8px 20px rgba(0,0,0,0.03)' }}>
              <div style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>🎯</div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.5rem' }}>Google Ads & Paid Search (PPC)</h3>
              <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
                Capture high-intent commercial searches in {locationName} with precision negative keywords and high-converting landing pages.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', borderTop: '4px solid #FF4E27', borderLeft: '1px solid #E2E8F0', borderRight: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0', borderRadius: '18px', padding: '2rem 1.5rem', boxShadow: '0 8px 20px rgba(0,0,0,0.03)' }}>
              <div style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>📱</div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.5rem' }}>Meta Ads (Instagram & Facebook)</h3>
              <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
                Targeted visual campaigns with viral reel hooks that turn {locationName} prospects into qualified customer inquiries.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', borderTop: '4px solid #FF4E27', borderLeft: '1px solid #E2E8F0', borderRight: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0', borderRadius: '18px', padding: '2rem 1.5rem', boxShadow: '0 8px 20px rgba(0,0,0,0.03)' }}>
              <div style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>📣</div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.5rem' }}>Social Media Retainers (SMM)</h3>
              <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
                Foundation ($750/mo), Growth ($2,000/mo) and Premium ($4,000/mo) packages with viral reels, graphics & multi-platform coverage.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', borderTop: '4px solid #FF4E27', borderLeft: '1px solid #E2E8F0', borderRight: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0', borderRadius: '18px', padding: '2rem 1.5rem', boxShadow: '0 8px 20px rgba(0,0,0,0.03)' }}>
              <div style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>💻</div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.5rem' }}>Website Creation Packages</h3>
              <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
                Foundation ($3,200), Growth ($6,500) and Premium ($14,000+) custom responsive builds with 95+ Google speed scores.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', borderTop: '4px solid #FF4E27', borderLeft: '1px solid #E2E8F0', borderRight: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0', borderRadius: '18px', padding: '2rem 1.5rem', boxShadow: '0 8px 20px rgba(0,0,0,0.03)' }}>
              <div style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>🎨</div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.5rem' }}>Graphic Design & Branding</h3>
              <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
                Standard Creatives ($35), Structured Design ($50), and Multi-Page Documents ($25/page) with full source files included.
              </p>
            </div>

          </div>
        </div>

        {/* 5. COUNTRY CITIES / MARKET HUBS DIRECTORY */}
        {countryObj && (countryObj.majorCities.length > 0 || countryObj.regionalCities.length > 0) && (
          <div style={{ marginBottom: '5rem', backgroundColor: '#FFFFFF', borderRadius: '24px', padding: '2.5rem', border: '1px solid #E2E8F0', boxShadow: '0 8px 25px rgba(0,0,0,0.03)' }}>
            <h2 style={{ fontFamily: 'Outfit, serif', fontSize: '2rem', fontWeight: 900, color: '#0F172A', marginBottom: '0.5rem' }}>
              📍 Regional Market Hubs in {countryObj.country}
            </h2>
            <p style={{ fontSize: '0.95rem', color: '#64748B', marginBottom: '2rem' }}>
              We deploy localized search optimization and multi-channel campaigns targeting high-intent buyers across all major districts:
            </p>

            {countryObj.majorCities.length > 0 && (
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#3B82F6', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>
                  Primary Commercial Cities & Metros
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem' }}>
                  {countryObj.majorCities.map(c => (
                    <button
                      key={c}
                      onClick={() => onNavigate('location', c)}
                      style={{
                        backgroundColor: c.toLowerCase() === locationName.toLowerCase() ? '#0F172A' : '#F8FAFC',
                        color: c.toLowerCase() === locationName.toLowerCase() ? '#FFFFFF' : '#0F172A',
                        border: '1px solid #CBD5E1',
                        borderRadius: '999px',
                        padding: '0.5rem 1.25rem',
                        fontSize: '0.875rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      {c} →
                    </button>
                  ))}
                </div>
              </div>
            )}

            {countryObj.regionalCities.length > 0 && (
              <div>
                <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>
                  Regional Towns & District Hubs
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {countryObj.regionalCities.map(c => (
                    <button
                      key={c}
                      onClick={() => onNavigate('location', c)}
                      style={{
                        backgroundColor: c.toLowerCase() === locationName.toLowerCase() ? '#0F172A' : '#FFFFFF',
                        color: c.toLowerCase() === locationName.toLowerCase() ? '#FFFFFF' : '#475569',
                        border: '1px solid #E2E8F0',
                        borderRadius: '999px',
                        padding: '0.4rem 1rem',
                        fontSize: '0.825rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* 6. "WHY BUSINESSES CHOOSE US" */}
        <div style={{ marginBottom: '5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
              <span style={{ width: '40px', height: '1px', background: '#3B82F6', opacity: 0.6 }}></span>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#3B82F6', letterSpacing: '0.15em', textTransform: 'uppercase' }}>THE DIGITAL DIGIX ADVANTAGE</span>
              <span style={{ width: '40px', height: '1px', background: '#3B82F6', opacity: 0.6 }}></span>
            </div>
            <h2 style={{ fontFamily: 'Outfit, serif', fontSize: '2.8rem', fontWeight: 900, color: '#0F172A' }}>
              Why {locationName} Businesses Choose Digital Digix
            </h2>
          </div>

          <div className="responsive-3-grid" style={{ gap: '1.5rem' }}>
            <div style={{ background: '#F8F6F0', borderRadius: '18px', padding: '2rem 1.75rem', border: '1px solid #EFECE6' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.6rem' }}>Localized Intent & Global Scale</h3>
              <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
                We tailor every campaign to {locationName}'s regional search volume, consumer psychology, and competitor dynamics.
              </p>
            </div>

            <div style={{ background: '#F8F6F0', borderRadius: '18px', padding: '2rem 1.75rem', border: '1px solid #EFECE6' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.6rem' }}>Transparent Scope & Pricing</h3>
              <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
                Transparent milestone pricing with no hidden fees — from single design assets at $35 to enterprise web apps and SMM retainers.
              </p>
            </div>

            <div style={{ background: '#F8F6F0', borderRadius: '18px', padding: '2rem 1.75rem', border: '1px solid #EFECE6' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.6rem' }}>Founder-Led Accountability</h3>
              <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
                Hands-on execution with direct founder oversight on ad budgets, creative direction, and technical architectures.
              </p>
            </div>
          </div>
        </div>

        {/* 7. FAQS */}
        <div style={{ marginBottom: '4rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="section-tag" style={{ color: '#D97706', background: 'rgba(217, 119, 6, 0.1)' }}>QUESTIONS & CLARIFICATIONS</span>
            <h3 style={{ fontFamily: 'Outfit, serif', fontSize: '2.2rem', fontWeight: 900, color: '#0F172A', marginTop: '0.5rem' }}>
              Frequently Asked Questions in {locationName}
            </h3>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', maxWidth: '850px', margin: '0 auto' }}>
            {faqs.map((faq, fIdx) => {
              const isOpen = openFaqIndex === fIdx;
              return (
                <div
                  key={fIdx}
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #E2E8F0',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 12px rgba(11, 19, 42, 0.03)',
                    transition: 'all 0.25s ease'
                  }}
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : fIdx)}
                    style={{
                      width: '100%',
                      padding: '1.15rem 1.25rem',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left'
                    }}
                  >
                    <span style={{ fontSize: '1.025rem', fontWeight: 800, color: '#0F172A' }}>
                      Q: {faq.q}
                    </span>
                    <span
                      style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        backgroundColor: isOpen ? '#FF4E27' : '#F1F5F9',
                        color: isOpen ? '#FFFFFF' : '#475569',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1rem',
                        fontWeight: 800,
                        transition: 'all 0.25s ease',
                        marginLeft: '1rem',
                        flexShrink: 0
                      }}
                    >
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  {isOpen && (
                    <div style={{ padding: '0 1.25rem 1.25rem 1.25rem', color: '#475569', fontSize: '0.925rem', lineHeight: 1.6, borderTop: '1px solid #F1F5F9', paddingTop: '0.75rem' }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>

      <WorkShowcaseMarquee locationName={locationName} />

      {/* 8. BOTTOM WHATSAPP CTA BOX */}
      <div className="container" style={{ maxWidth: '1100px' }}>
        <div style={{ background: '#181311', borderRadius: '24px', padding: '3.5rem 2rem', textAlign: 'center', color: '#FFFFFF', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}>
          <h2 style={{ fontFamily: 'Outfit, serif', fontSize: '2.5rem', fontWeight: 900, color: '#FFFFFF', marginBottom: '0.5rem' }}>
            Ready to scale your brand in {locationName}?
          </h2>
          <p style={{ fontSize: '1rem', color: '#94A3B8', marginBottom: '2rem' }}>
            Book a confidential 30-minute growth session with our founders to build your {locationName} acquisition roadmap.
          </p>

          <a
            href={'https://wa.me/918586989832?text=' + encodeURIComponent('Hi, I am interested in your digital marketing services in ' + locationName)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            style={{ backgroundColor: '#25D366', color: '#FFFFFF', padding: '0.95rem 2.5rem', borderRadius: '999px', fontWeight: 900, fontSize: '1rem', textDecoration: 'none', display: 'inline-block', boxShadow: '0 10px 30px rgba(37, 211, 102, 0.3)' }}
          >
            Chat on WhatsApp 💬 →
          </a>
        </div>
      </div>
    </div>
  );
};
