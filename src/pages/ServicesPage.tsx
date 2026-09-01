import React, { useState } from 'react';
import { detailed17Services } from '../components/ServicesGrid';
import type { PageView } from '../types';

interface ServicesPageProps {
  onNavigate: (page: PageView, slug?: string) => void;
  onOpenStrategyModal: (serviceName?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, onOpenStrategyModal }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  if (false && onOpenStrategyModal) onOpenStrategyModal();

  const categories = ['All', 'Social Growth', 'Design & Branding', 'Data & Analytics', 'Search Engine Rank', 'Web Engineering', 'Executive Branding'];

  const filteredServices = selectedCategory === 'All'
    ? detailed17Services
    : detailed17Services.filter(s => s.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <div style={{ padding: '3rem 0 6rem 0' }}>
      <div className="container">
        {/* Breadcrumb */}
        <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
          <span style={{ cursor: 'pointer' }} onClick={() => onNavigate('home')}>Home</span> / <span className="active">Services & Transparent Pricing</span>
        </div>

        {/* HEADER & SUBTITLE MATCHING SCREENSHOT */}
        <div className="section-header" style={{ textAlign: 'left', maxWidth: '850px', margin: '0 0 2.5rem 0' }}>
          <h1 style={{ fontFamily: 'Outfit, serif', fontSize: '3.4rem', fontWeight: 900, marginBottom: '1rem', color: '#0F172A' }}>
            Services & Transparent Pricing
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
            No lock-in contracts. No hidden fees. Click any service for the full breakdown: pain points, deliverables, approach and FAQs.
          </p>
        </div>

            {/* CATEGORY PILLS */}
            <div style={{ display: 'flex', gap: '0.6rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    padding: '0.5rem 1.25rem',
                    borderRadius: '999px',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: selectedCategory === cat ? '#FFF' : 'var(--text-muted)',
                    backgroundColor: selectedCategory === cat ? 'var(--secondary)' : 'var(--bg-subtle)',
                    border: '1px solid var(--border-color)'
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* 6 SERVICE CARDS GRID - 3x3 STYLE */}
            <div className="responsive-3-grid" style={{ gap: '1.5rem', marginBottom: '4.5rem' }}>
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  style={{
                    background: '#FFFFFF',
                    borderTop: '4px solid #FF4E27',
                    borderLeft: '1px solid #E2E8F0',
                    borderRight: '1px solid #E2E8F0',
                    borderBottom: '1px solid #E2E8F0',
                    borderRadius: '20px',
                    padding: '1.5rem 1.25rem',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '0 8px 25px rgba(11, 19, 42, 0.04)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 12px 30px rgba(11, 19, 42, 0.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(11, 19, 42, 0.04)';
                  }}
                  onClick={() => {
                    if (service.title === 'Social Media Marketing') {
                      onNavigate('smm');
                    } else if (service.title === 'Graphic Design') {
                      onNavigate('graphic-details');
                    } else {
                      onNavigate('service-details', service.id);
                    }
                  }}
                >
                  <div style={{ fontSize: '2rem', marginBottom: '0.6rem' }}>{service.icon}</div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '0.4rem', color: '#0F172A', fontFamily: 'Outfit, serif', lineHeight: 1.25 }}>{service.title}</h3>
                  <p style={{ fontSize: '0.85rem', color: '#64748B', marginBottom: '1rem', lineHeight: 1.45, flexGrow: 1 }}>
                    {service.description}
                  </p>

                  {/* PRICE TAG & FULL DETAILS LINK MATCHING SCREENSHOT */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.15rem', marginTop: 'auto' }}>
                    <div style={{ fontFamily: 'Outfit', fontSize: '1.05rem', fontWeight: 800, color: '#3B82F6' }}>
                      {service.pricing}
                    </div>
                    <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#3B82F6', letterSpacing: '0.05em' }}>
                      FULL DETAILS →
                    </div>
                  </div>
                </div>
              ))}
            </div>

        {/* BOTTOM CONSULTATION BANNER */}
        <div style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)', borderRadius: '28px', padding: '3.5rem 3rem', color: '#FFF', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '2rem', boxShadow: 'var(--shadow-lg)', border: '1px solid rgba(255,255,255,0.1)', flexWrap: 'wrap' }}>
          <div style={{ maxWidth: '640px' }}>
            <span className="section-tag" style={{ background: 'rgba(255,78,39,0.2)', color: '#FF4E27', border: 'none', marginBottom: '0.75rem' }}>
              TRANSPARENT GROWTH ENGINE
            </span>
            <h3 style={{ fontSize: '2.2rem', fontWeight: 900, color: '#FFF', marginBottom: '0.5rem' }}>
              Need a Custom Multi-Channel Growth Package?
            </h3>
            <p style={{ fontSize: '1rem', color: '#94A3B8', lineHeight: 1.6 }}>
              Book a zero-risk 30-minute strategy call with our founders. We provide custom proposals tailored to your budget with zero lock-in contracts.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/918586989832?text=Hi%2C%20I%20am%20interested%20in%20your%20services"
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
              onClick={() => window.open('https://wa.me/918586989832?text=Hi%2C%20I%20am%20interested%20in%20your%20services', '_blank')}
            >
              Get Custom Quote ➔
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
