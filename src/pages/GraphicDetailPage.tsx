import React, { useEffect, useState } from 'react';
import type { PageView } from '../types';
import { graphicDesignPricingData } from '../components/ServicesGrid';
import type { PricingCategory } from '../components/ServicesGrid';

interface GraphicDetailPageProps {
  categoryId?: string;
  onNavigate: (page: PageView, slug?: string) => void;
  onOpenStrategyModal: (serviceName?: string) => void;
}

const bundleExplanationData: Record<string, { desc: string; turnaround: string; formats: string; useCase: string }> = {
  'standard-creatives': {
    desc: 'Bespoke single-page visual content optimized for digital feed layouts and standard local prints. Features clean typography, premium assets, and high impact design.',
    turnaround: '24–48 Hours',
    formats: 'JPG, PNG, Print-Ready PDF (CMYK), Editable Source Files (PSD/AI)',
    useCase: 'Best for daily social media posts, festival greetings, simple flyers, digital ads, and announcement posters.'
  },
  'structured-design': {
    desc: 'Complex single-page layouts requiring precise alignment, grid system planning, custom margins, and clean data tables.',
    turnaround: '48 Hours',
    formats: 'AI, EPS, Print-Ready PDF with bleed layouts, vector source files',
    useCase: 'Best for business stationery, visiting cards, ID cards, official print certificates, quotations, and menus.'
  },
  'multi-page-documents': {
    desc: 'Multi-slide presentations, catalogs, annual reports, and brochures designed with layout styling and visual consistency.',
    turnaround: '3–5 Business Days',
    formats: 'PPTX, Keynote, Interactive PDF, Vector source files',
    useCase: 'Best for pitch decks, sales catalogs, school magazines, training decks, and business proposals.'
  }
};

const graphicFaqs = [
  { 
    q: 'How is graphic design priced?', 
    a: 'We offer transparent bundle pricing: Standard Creatives at $35, Structured Design at $50, and Multi-Page Documents at $25/page (Annual Report Design on Custom Quote). No hidden retainer traps or surprises.' 
  },
  { 
    q: 'Do you offer logo design and brand identity?', 
    a: 'Yes, we design scalable, high-impact vector logos and comprehensive brand guidelines with color palettes, typography, and source files included.' 
  },
  { 
    q: 'How fast is the turnaround time?', 
    a: 'Standard creatives take 24–48 hours. Structured designs take 48 hours. Multi-page presentations and catalogues take 3–5 business days.' 
  },
  { 
    q: 'Do prices include revisions and editable source files?', 
    a: 'Yes, all packages include revision rounds to ensure you love the final result, along with print-ready CMYK PDFs, high-res web PNG/JPGs, and editable source files (AI/PSD/PPTX).' 
  },
  { 
    q: 'Which industries do you design for?', 
    a: 'We design for over 89+ industries including E-commerce, Healthcare, Real Estate, SaaS, Hospitality, Education, Professional Services, and D2C brands.' 
  }
];

const deliverablesList = [
  'Custom Social Media Posts, Stories & Ad Creatives',
  'Corporate Pitch Decks, Sales Brochures & Banners',
  'Product Packaging, Labels & Retail Display Designs',
  '3D Product Mockups & Large-Format Flex Printing Assets',
  'Infographic Layouts, Ebook Design & Custom Illustrations',
  'Corporate Stationary, Letterheads & Invoice Design Templates'
];

export const GraphicDetailPage: React.FC<GraphicDetailPageProps> = ({ categoryId, onNavigate, onOpenStrategyModal }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categoryId]);

  const getBundleSlug = (cat: PricingCategory) => {
    return cat.title.split('—')[0].trim().toLowerCase().replace(' & ', '-').replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-');
  };

  // Find active bundle if a category slug is in the URL
  const activeBundle = categoryId ? graphicDesignPricingData.find(cat => {
    const slug = getBundleSlug(cat);
    return slug === categoryId || categoryId.includes(slug) || slug.includes(categoryId);
  }) : null;

  // -------------------------------------------------------------
  // VIEW 1: DEDICATED SEPARATE BUNDLE EXPLANATION PAGE
  // -------------------------------------------------------------
  if (activeBundle) {
    const bundleSlug = getBundleSlug(activeBundle);
    const explanation = bundleExplanationData[bundleSlug] || {
      desc: activeBundle.subtitle,
      turnaround: '24–48 Hours',
      formats: 'JPG, PNG, Print-Ready PDF, Vector Source Files',
      useCase: 'Custom digital and print marketing creatives.'
    };

    const otherBundles = graphicDesignPricingData.filter(cat => getBundleSlug(cat) !== bundleSlug);

    return (
      <div style={{ backgroundColor: '#FDFBF7', minHeight: '100vh', padding: '2rem 0 6rem 0' }}>
        <div className="container" style={{ maxWidth: '1100px' }}>
          
          {/* Breadcrumb */}
          <div style={{ fontSize: '0.875rem', color: '#64748B', marginBottom: '1.5rem' }}>
            <span style={{ cursor: 'pointer', color: '#3B82F6' }} onClick={() => onNavigate('home')}>Home</span> /{' '}
            <span style={{ cursor: 'pointer', color: '#3B82F6' }} onClick={() => onNavigate('services')}>Services</span> /{' '}
            <span style={{ cursor: 'pointer', color: '#3B82F6' }} onClick={() => onNavigate('graphic-details')}>Graphic Design</span> /{' '}
            <span style={{ color: '#0F172A', fontWeight: 700 }}>{activeBundle.title}</span>
          </div>

          {/* Back Button */}
          <div style={{ marginBottom: '2.5rem' }}>
            <button
              onClick={() => onNavigate('graphic-details')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.9rem',
                fontWeight: 800,
                color: '#0F172A',
                backgroundColor: '#FFFFFF',
                border: '1px solid #CBD5E1',
                padding: '0.6rem 1.25rem',
                borderRadius: '999px',
                cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#F1F5F9'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#FFFFFF'; }}
            >
              ← Back to All Graphic Design Bundles
            </button>
          </div>

          {/* Bundle Hero Header Card */}
          <div style={{ 
            background: '#FFFFFF', 
            borderTop: '4px solid #FF4E27', 
            borderLeft: '1px solid #E2E8F0', 
            borderRight: '1px solid #E2E8F0', 
            borderBottom: '1px solid #E2E8F0', 
            borderRadius: '24px', 
            padding: '3.5rem 3rem', 
            marginBottom: '3.5rem', 
            boxShadow: '0 15px 35px rgba(11,19,42,0.05)',
            position: 'relative'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <span style={{ width: '30px', height: '1px', background: '#FF4E27' }}></span>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#FF4E27', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                DESIGN BUNDLE SPECIFICATION
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
              <div style={{ fontSize: '3.5rem' }}>🎨</div>
              <h1 style={{ fontFamily: 'Outfit, serif', fontSize: '3.2rem', fontWeight: 900, color: '#0F172A', lineHeight: 1.1, margin: 0 }}>
                {activeBundle.title}
              </h1>
            </div>

            <p style={{ fontSize: '1.15rem', color: '#475569', lineHeight: 1.7, maxWidth: '850px', marginBottom: '2.5rem' }}>
              {explanation.desc}
            </p>

            {/* Quick Specs Grid */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(3, 1fr)', 
              gap: '1.5rem', 
              background: '#F8FAFC', 
              border: '1px solid #E2E8F0', 
              borderRadius: '20px', 
              padding: '2rem 1.5rem', 
              marginBottom: '2.5rem' 
            }} className="graphics-pricing-grid">
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 800, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Turnaround Time</div>
                <div style={{ fontSize: '1.25rem', fontWeight: 900, color: '#0F172A', marginTop: '0.35rem', fontFamily: 'Outfit, sans-serif' }}>
                  {explanation.turnaround}
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', borderLeft: '1px solid #E2E8F0', borderRight: '1px solid #E2E8F0', padding: '0 1rem' }}>
                <div style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 800, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Deliverable Formats</div>
                <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#0F172A', marginTop: '0.35rem', lineHeight: 1.4 }}>
                  {explanation.formats}
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 800, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Primary Use-Cases</div>
                <div style={{ fontSize: '0.85rem', color: '#475569', marginTop: '0.35rem', lineHeight: 1.4 }}>
                  {explanation.useCase}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a
                href={`https://wa.me/918586989832?text=${encodeURIComponent(`Hi, I am interested in ${activeBundle.title}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  backgroundColor: '#25D366',
                  color: '#FFFFFF',
                  padding: '0.9rem 2rem',
                  borderRadius: '999px',
                  fontWeight: 800,
                  fontSize: '0.95rem',
                  textDecoration: 'none',
                  boxShadow: '0 8px 20px rgba(37,211,102,0.2)',
                  transition: 'all 0.3s ease'
                }}
              >
                Order on WhatsApp 💬
              </a>
              <button
                onClick={() => onOpenStrategyModal(`${activeBundle.title} Project`)}
                style={{
                  backgroundColor: '#0F172A',
                  color: '#FFFFFF',
                  border: 'none',
                  padding: '0.9rem 2rem',
                  borderRadius: '999px',
                  fontWeight: 800,
                  fontSize: '0.95rem',
                  cursor: 'pointer',
                  boxShadow: '0 8px 20px rgba(15,23,42,0.1)',
                  transition: 'all 0.3s ease'
                }}
              >
                Request Custom Quote →
              </button>
            </div>
          </div>

          {/* Included Services Section in this Bundle */}
          <div style={{ marginBottom: '4.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
              <span style={{ width: '50px', height: '1px', background: '#3B82F6', opacity: 0.6 }}></span>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#3B82F6', letterSpacing: '0.15em', textTransform: 'uppercase' }}>INCLUDED SERVICES</span>
              <span style={{ width: '50px', height: '1px', background: '#3B82F6', opacity: 0.6 }}></span>
            </div>
            <h2 style={{ fontFamily: 'Outfit, serif', fontSize: '2.2rem', fontWeight: 900, color: '#0F172A', textAlign: 'center', marginBottom: '0.5rem' }}>
              Services Included in {activeBundle.title.split('—')[0].trim()} ({activeBundle.items.length})
            </h2>
            <p style={{ fontSize: '0.95rem', color: '#64748B', textAlign: 'center', marginBottom: '2.5rem', maxWidth: '650px', margin: '0 auto 2.5rem auto', lineHeight: 1.5 }}>
              Click any service item below to view its individual technical specifications, sizing requirements, and print guide.
            </p>

            {/* 3-Column Card Grid of Services in this bundle */}
            <div className="responsive-3-grid" style={{ gap: '1.25rem', marginBottom: '3.5rem' }}>
              {activeBundle.items.map((item, itemIdx) => {
                const itemSlug = item.name.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-');
                return (
                  <div
                    key={itemIdx}
                    onClick={() => onNavigate('design-item', itemSlug)}
                    style={{
                      background: '#FFFFFF',
                      border: '1px solid #E2E8F0',
                      borderRadius: '16px',
                      padding: '1.5rem 1.25rem',
                      display: 'flex',
                      flexDirection: 'column',
                      boxShadow: '0 4px 15px rgba(11, 19, 42, 0.02)',
                      cursor: 'pointer',
                      transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-3px)';
                      e.currentTarget.style.boxShadow = '0 10px 25px rgba(11, 19, 42, 0.06)';
                      e.currentTarget.style.borderColor = '#BFDBFE';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 15px rgba(11, 19, 42, 0.02)';
                      e.currentTarget.style.borderColor = '#E2E8F0';
                    }}
                  >
                    <div style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>🎨</div>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.4rem', fontFamily: 'Outfit, sans-serif' }}>
                      {item.name}
                    </h3>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid #F1F5F9' }}>
                      <span style={{ fontSize: '1.1rem', fontWeight: 900, color: item.price === 'Custom Quote' ? '#D97706' : '#3B82F6', fontFamily: 'Outfit, sans-serif' }}>
                        {item.price}
                      </span>
                      <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#FF4E27' }}>
                        View Specs →
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Explore Other Bundles Section */}
          <div style={{ marginBottom: '4.5rem', background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '24px', padding: '2.5rem' }}>
            <h3 style={{ fontFamily: 'Outfit, serif', fontSize: '1.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '1.25rem', textAlign: 'center' }}>
              Explore Other Graphic Design Bundles
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {otherBundles.map((cat, idx) => {
                const slug = getBundleSlug(cat);
                return (
                  <div
                    key={idx}
                    onClick={() => onNavigate('graphic-details', slug)}
                    style={{
                      background: '#FFFFFF',
                      borderTop: '3px solid #3B82F6',
                      borderLeft: '1px solid #E2E8F0',
                      borderRight: '1px solid #E2E8F0',
                      borderBottom: '1px solid #E2E8F0',
                      borderRadius: '16px',
                      padding: '1.5rem',
                      cursor: 'pointer',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.02)',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-3px)';
                      e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.06)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.02)';
                    }}
                  >
                    <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.35rem', fontFamily: 'Outfit, sans-serif' }}>
                      {cat.title}
                    </h4>
                    <p style={{ fontSize: '0.825rem', color: '#64748B', marginBottom: '1rem', lineHeight: 1.45 }}>
                      {cat.subtitle} ({cat.items.length} services included)
                    </p>
                    <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#3B82F6' }}>
                      View Bundle Breakdown →
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* FAQs */}
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#64748B', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
              — COMMON QUESTIONS —
            </div>
            <h2 style={{ fontFamily: 'Outfit, serif', fontSize: '2.5rem', fontWeight: 900, color: '#0F172A', marginBottom: '0.75rem' }}>
              Graphic Design FAQs
            </h2>
          </div>

          <div style={{ maxWidth: '850px', margin: '0 auto 5rem auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {graphicFaqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '16px',
                    border: '1px solid #E2E8F0',
                    overflow: 'hidden',
                    boxShadow: isOpen ? '0 10px 25px rgba(0, 0, 0, 0.03)' : 'none',
                    transition: 'box-shadow 0.3s ease'
                  }}
                >
                  <div
                    style={{
                      cursor: 'pointer',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '1.25rem 1.75rem',
                      fontWeight: 700,
                      color: '#0F172A'
                    }}
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  >
                    <span>{faq.q}</span>
                    <span style={{ fontSize: '1.25rem', fontWeight: 400, color: '#64748B', transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)', transition: 'transform 0.25s' }}>
                      ＋
                    </span>
                  </div>
                  {isOpen && (
                    <div style={{ padding: '1rem 1.75rem 1.5rem 1.75rem', borderTop: '1px solid #F1F5F9', backgroundColor: '#FFFFFF' }}>
                      <p style={{ margin: 0, fontSize: '0.925rem', color: '#475569', lineHeight: 1.6 }}>
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Global CTA Consultation Banner */}
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
              <span className="section-tag" style={{ background: 'rgba(255,78,39,0.2)', color: '#FF4E27', border: 'none', marginBottom: '0.75rem' }}>
                TRANSPARENT CREATIVE ENGINE
              </span>
              <h3 style={{ fontSize: '2.2rem', fontWeight: 900, color: '#FFF', marginBottom: '0.5rem' }}>
                Need a Custom Design Proposal?
              </h3>
              <p style={{ fontSize: '1rem', color: '#94A3B8', lineHeight: 1.6 }}>
                Enjoy transparent per-design pricing or book a monthly design retainer package with zero lock-in contracts. Custom proposals ready within 24h.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a
                href={`https://wa.me/918586989832?text=${encodeURIComponent(`Hi, I am interested in ${activeBundle.title}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ padding: '0.9rem 1.8rem' }}
              >
                Chat on WhatsApp 💬
              </a>
              <button
                className="btn btn-secondary"
                style={{ color: '#FFF', borderColor: 'rgba(255,255,255,0.3)', padding: '0.9rem 1.8rem' }}
                onClick={() => onOpenStrategyModal(`${activeBundle.title} Partnership`)}
              >
                Book Custom Quote ➔
              </button>
            </div>
          </div>

        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // VIEW 2: MAIN 3-CARD OVERVIEW & PRICE LIST PAGE
  // -------------------------------------------------------------
  return (
    <div style={{ backgroundColor: '#FDFBF7', minHeight: '100vh', padding: '2rem 0 6rem 0' }}>
      <div className="container" style={{ maxWidth: '1100px' }}>
        
        {/* Breadcrumb */}
        <div style={{ fontSize: '0.875rem', color: '#64748B', marginBottom: '1.5rem' }}>
          <span style={{ cursor: 'pointer', color: '#3B82F6' }} onClick={() => onNavigate('home')}>Home</span> /{' '}
          <span style={{ cursor: 'pointer', color: '#3B82F6' }} onClick={() => onNavigate('services')}>Services</span> /{' '}
          <span style={{ color: '#0F172A', fontWeight: 700 }}>Graphic Design</span>
        </div>

        {/* Back Button */}
        <div style={{ marginBottom: '2.5rem' }}>
          <button
            onClick={() => onNavigate('services')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.9rem',
              fontWeight: 800,
              color: '#0F172A',
              backgroundColor: '#FFFFFF',
              border: '1px solid #CBD5E1',
              padding: '0.6rem 1.25rem',
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
            ← Back to All Services
          </button>
        </div>

        {/* Hero Section Card */}
        <div style={{ 
          background: '#FFFFFF', 
          borderTop: '4px solid #FF4E27', 
          borderLeft: '1px solid #E2E8F0', 
          borderRight: '1px solid #E2E8F0', 
          borderBottom: '1px solid #E2E8F0', 
          borderRadius: '24px', 
          padding: '3.5rem 3rem', 
          marginBottom: '4rem', 
          boxShadow: '0 15px 35px rgba(11,19,42,0.05)',
          position: 'relative'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
            <span style={{ width: '30px', height: '1px', background: '#3B82F6' }}></span>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#3B82F6', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              DESIGN & BRANDING
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            <div style={{ fontSize: '3.5rem' }}>🎨</div>
            <h1 style={{ fontFamily: 'Outfit, serif', fontSize: '3.4rem', fontWeight: 900, color: '#0F172A', lineHeight: 1.1, margin: 0 }}>
              Graphic Design
            </h1>
          </div>

          <p style={{ fontSize: '1.15rem', color: '#475569', lineHeight: 1.7, maxWidth: '820px', marginBottom: '2rem' }}>
            Premium, custom visual assets tailored for B2B and D2C brands. We design social media ad creatives, corporate pitch decks, sales brochures, packaging labels, retail banners, and 3D product mockups with transparent bundle pricing and ultra-fast 24-hour turnaround times.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap', borderTop: '1px solid #F1F5F9', paddingTop: '2rem' }}>
            <div>
              <div style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 800, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Price Range</div>
              <div style={{ fontFamily: 'Outfit', fontSize: '2rem', fontWeight: 900, color: '#3B82F6', marginTop: '0.2rem' }}>
                From $35
              </div>
            </div>

            <div style={{ marginLeft: 'auto', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a
                href="https://wa.me/918586989832?text=Hi%2C%20I%20am%20interested%20in%20your%20graphic%20design%20services"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  backgroundColor: '#25D366',
                  color: '#FFFFFF',
                  padding: '0.9rem 2rem',
                  borderRadius: '999px',
                  fontWeight: 800,
                  fontSize: '0.95rem',
                  textDecoration: 'none',
                  boxShadow: '0 8px 20px rgba(37,211,102,0.2)',
                  transition: 'all 0.3s ease'
                }}
              >
                Chat on WhatsApp 💬
              </a>
              <button
                onClick={() => onOpenStrategyModal('Graphic Design Project')}
                style={{
                  backgroundColor: '#0F172A',
                  color: '#FFFFFF',
                  border: 'none',
                  padding: '0.9rem 2rem',
                  borderRadius: '999px',
                  fontWeight: 800,
                  fontSize: '0.95rem',
                  cursor: 'pointer',
                  boxShadow: '0 8px 20px rgba(15,23,42,0.1)',
                  transition: 'all 0.3s ease'
                }}
              >
                Book Growth Call →
              </button>
            </div>
          </div>
        </div>

        {/* TRANSPARENT PRICING SECTION HEADER */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
            <span style={{ width: '50px', height: '1px', background: '#3B82F6', opacity: 0.6 }}></span>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#3B82F6', letterSpacing: '0.15em', textTransform: 'uppercase' }}>TRANSPARENT PRICING</span>
            <span style={{ width: '50px', height: '1px', background: '#3B82F6', opacity: 0.6 }}></span>
          </div>
          <h2 style={{ fontFamily: 'Outfit, serif', fontSize: '2.2rem', fontWeight: 900, color: '#0F172A', textAlign: 'center', marginBottom: '0.5rem' }}>
            Graphic Design Price List
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#64748B', textAlign: 'center', marginBottom: '2.5rem', maxWidth: '650px', margin: '0 auto 2.5rem auto', lineHeight: 1.5 }}>
            Clear per-design pricing across every format — no hidden charges. GST applicable as per norms; prices subject to change.
          </p>

          {/* THREE CARD TREE GRID (3x3 STYLE) */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '4rem' }} className="graphics-pricing-grid">
            {graphicDesignPricingData.map((cat, catIdx) => {
              const slug = getBundleSlug(cat);
              
              return (
                <div
                  key={catIdx}
                  id={slug}
                  style={{
                    background: '#FFFFFF',
                    borderTop: '4px solid #FF4E27',
                    borderLeft: '1px solid #E2E8F0',
                    borderRight: '1px solid #E2E8F0',
                    borderBottom: '1px solid #E2E8F0',
                    borderRadius: '20px',
                    padding: '1.5rem 1.25rem 1.75rem 1.25rem',
                    boxShadow: '0 8px 25px rgba(11, 19, 42, 0.03)',
                    display: 'flex',
                    flexDirection: 'column',
                    cursor: 'pointer',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 12px 30px rgba(11, 19, 42, 0.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(11, 19, 42, 0.03)';
                  }}
                  onClick={() => {
                    onNavigate('graphic-details', slug);
                  }}
                >
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0F172A', margin: '0 0 0.25rem 0', fontFamily: 'Outfit, sans-serif' }}>
                    {cat.title}
                  </h3>
                  <p style={{ fontSize: '0.78rem', color: '#64748B', margin: '0 0 1.25rem 0', lineHeight: 1.4 }}>
                    {cat.subtitle}
                  </p>
                  
                  {/* Tree List of items with prices */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                    {cat.items.map((item, itemIdx) => {
                      const itemSlug = item.name.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-');
                      return (
                        <div
                          key={itemIdx}
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            fontSize: '0.81rem',
                            color: '#334155',
                            padding: '0.4rem 0.5rem',
                            borderBottom: '1px solid #F1F5F9',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            transition: 'background-color 0.2s ease'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#F8FAFC';
                            e.currentTarget.style.textDecoration = 'underline';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                            e.currentTarget.style.textDecoration = 'none';
                          }}
                          onClick={(e) => {
                            e.stopPropagation();
                            onNavigate('design-item', itemSlug);
                          }}
                        >
                          <span style={{ fontWeight: 500, flex: 1, paddingRight: '0.5rem', lineHeight: 1.3, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                            {item.name}
                          </span>
                          {item.price && (
                            <span style={{ 
                              fontWeight: 700, 
                              color: item.price === 'Custom Quote' ? '#D97706' : '#3B82F6', 
                              whiteSpace: 'nowrap', 
                              flexShrink: 0, 
                              textAlign: 'right' 
                            }}>
                              {item.price}
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                  
                  {/* View Explanation & Details Button -> Opens dedicated separate page */}
                  <div 
                    onClick={(e) => {
                      e.stopPropagation();
                      onNavigate('graphic-details', slug);
                    }}
                    style={{ 
                      marginTop: 'auto', 
                      paddingTop: '1.25rem', 
                      fontSize: '0.8rem', 
                      fontWeight: 800, 
                      color: '#FF4E27', 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '0.25rem',
                      cursor: 'pointer'
                    }}
                  >
                    <span>View Explanation & Details</span>
                    <span style={{ fontSize: '0.9rem' }}>➔</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* APPROACH & TYPICAL RESULTS (2 COLUMNS) */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem', marginBottom: '4rem' }} className="graphics-info-blocks">
            <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '20px', padding: '1.75rem 2rem', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#3B82F6', letterSpacing: '0.08em', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                —— Our Approach
              </div>
              <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.6, margin: 0 }}>
                Share your brief on WhatsApp, choose the design type, and we deliver print- and web-ready files with revisions. Transparent per-design pricing means you know the cost before we start — no surprises.
              </p>
            </div>
            <div style={{ background: '#0F172A', borderRadius: '20px', padding: '1.75rem 2rem', color: '#FFF' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#FBBF24', letterSpacing: '0.08em', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                —— Typical Results
              </div>
              <p style={{ fontSize: '0.9rem', color: '#94A3B8', lineHeight: 1.6, margin: 0 }}>
                Brands get consistent, conversion-focused creatives delivered fast — often within 24–48 hours for standard formats — at a fraction of typical agency rates.
              </p>
            </div>
          </div>
        </div>

        {/* WHAT WE OFFER & DELIVER */}
        <div style={{ marginBottom: '4.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
            <span style={{ width: '50px', height: '1px', background: '#3B82F6', opacity: 0.6 }}></span>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#3B82F6', letterSpacing: '0.15em', textTransform: 'uppercase' }}>DELIVERABLES</span>
            <span style={{ width: '50px', height: '1px', background: '#3B82F6', opacity: 0.6 }}></span>
          </div>
          <h3 style={{ fontFamily: 'Outfit, serif', fontSize: '2rem', fontWeight: 900, color: '#0F172A', textAlign: 'center', marginBottom: '1.5rem' }}>
            What We Offer & Deliver
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center', marginBottom: '3.5rem', maxWidth: '900px', margin: '0 auto 3.5rem auto' }}>
            {deliverablesList.map((item, idx) => (
              <div 
                key={idx} 
                style={{ 
                  background: '#FFF1EE', 
                  border: '1px solid rgba(255,78,39,0.2)', 
                  padding: '0.75rem 1.25rem', 
                  borderRadius: '14px', 
                  fontSize: '0.9rem', 
                  fontWeight: 600, 
                  color: '#0F172A', 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.5rem', 
                  boxShadow: '0 2px 8px rgba(255,78,39,0.03)' 
                }}
              >
                <span style={{ color: '#FF4E27', fontWeight: 900 }}>✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* COMMON QUESTIONS ACCORDION */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#64748B', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
            — COMMON QUESTIONS —
          </div>
          <h2 style={{ fontFamily: 'Outfit, serif', fontSize: '2.5rem', fontWeight: 900, color: '#0F172A', marginBottom: '0.75rem' }}>
            Graphic Design FAQs
          </h2>
        </div>

        <div style={{ maxWidth: '850px', margin: '0 auto 5rem auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {graphicFaqs.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={index}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  border: '1px solid #E2E8F0',
                  overflow: 'hidden',
                  boxShadow: isOpen ? '0 10px 25px rgba(0, 0, 0, 0.03)' : 'none',
                  transition: 'box-shadow 0.3s ease'
                }}
              >
                <div
                  style={{
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '1.25rem 1.75rem',
                    fontWeight: 700,
                    color: '#0F172A'
                  }}
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                >
                  <span>{faq.q}</span>
                  <span style={{ fontSize: '1.25rem', fontWeight: 400, color: '#64748B', transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)', transition: 'transform 0.25s' }}>
                    ＋
                  </span>
                </div>
                {isOpen && (
                  <div style={{ padding: '1rem 1.75rem 1.5rem 1.75rem', borderTop: '1px solid #F1F5F9', backgroundColor: '#FFFFFF' }}>
                    <p style={{ margin: 0, fontSize: '0.925rem', color: '#475569', lineHeight: 1.6 }}>
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Global CTA Consultation Banner */}
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
            <span className="section-tag" style={{ background: 'rgba(255,78,39,0.2)', color: '#FF4E27', border: 'none', marginBottom: '0.75rem' }}>
              TRANSPARENT CREATIVE ENGINE
            </span>
            <h3 style={{ fontSize: '2.2rem', fontWeight: 900, color: '#FFF', marginBottom: '0.5rem' }}>
              Need a Custom Design Proposal?
            </h3>
            <p style={{ fontSize: '1rem', color: '#94A3B8', lineHeight: 1.6 }}>
              Enjoy transparent per-design pricing or book a monthly design retainer package with zero lock-in contracts. Custom proposals ready within 24h.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/918586989832?text=Hi%2C%20I%20am%20interested%20in%20your%20graphic%20design%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ padding: '0.9rem 1.8rem' }}
            >
              Chat on WhatsApp 💬
            </a>
            <button
              className="btn btn-secondary"
              style={{ color: '#FFF', borderColor: 'rgba(255,255,255,0.3)', padding: '0.9rem 1.8rem' }}
              onClick={() => onOpenStrategyModal('Graphic Design Partnership')}
            >
              Book Custom Quote ➔
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
