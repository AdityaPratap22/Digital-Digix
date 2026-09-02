'use client';

import React from 'react';
import Image from 'next/image';
import type { StatType } from './StatCardModal';

interface HeroProps {
  onOpenStrategyModal: () => void;
  onNavigateServices: () => void;
  onNavigatePortfolio: () => void;
  onOpenStatModal: (type: StatType) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onNavigateServices,
  onNavigatePortfolio,
  onOpenStatModal
}) => {
  return (
    <section className="hero-section">
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="hero-tag">
            ⚡ FULL-FUNNEL GROWTH &amp; PERFORMANCE AGENCY
          </div>
          <h1 className="hero-title">
            Being Average Is a <br className="hero-desktop-br" />
            <span className="text-red">Branding Problem.</span>
          </h1>
          <p className="hero-subtext">
            From data-driven performance marketing and high-converting web applications to scroll-stopping visual design, we build scalable digital systems that turn market interest into long-term revenue.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={onNavigateServices}>
              Accelerate Your Growth ➔
            </button>
            <button className="btn btn-secondary" onClick={onNavigatePortfolio}>
              Explore Our Portfolio ➔
            </button>
          </div>
        </div>

        {/* Hero Building Visual Container */}
        <div className="hero-building-wrapper">
          <Image
            src="/building.jpg"
            alt="Digital Digix — Performance Marketing Agency Headquarters"
            className="hero-building-img"
            priority
            fetchPriority="high"
            width={540}
            height={400}
            style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
          />

          {/* Floating Stat Card 1: Revenue (Clickable Pop-Up) */}
          <div
            className="hero-stat-card card-revenue"
            onClick={() => onOpenStatModal('revenue')}
            style={{ cursor: 'pointer' }}
            title="Click to view Revenue Breakdown"
            role="button"
            aria-label="View Revenue Breakdown"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && onOpenStatModal('revenue')}
          >
            <div className="hero-stat-icon-box">📈</div>
            <div>
              <div className="hero-stat-label">Pipeline Revenue Generated</div>
              <div className="hero-stat-value">$8.7M+</div>
              <div style={{ fontSize: '0.7rem', color: 'var(--primary)', fontWeight: 700, marginTop: '0.2rem' }}>Click breakdown ➔</div>
            </div>
          </div>

          {/* Floating Stat Card 2: Clicks (Clickable Pop-Up) */}
          <div
            className="hero-stat-card card-clicks"
            onClick={() => onOpenStatModal('clicks')}
            style={{ cursor: 'pointer' }}
            title="Click to view Click Analytics"
            role="button"
            aria-label="View Click Analytics"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && onOpenStatModal('clicks')}
          >
            <div className="hero-stat-icon-box">⚡</div>
            <div>
              <div className="hero-stat-label">High-Intent Traffic Driven</div>
              <div className="hero-stat-value">1.4M+</div>
              <div style={{ fontSize: '0.7rem', color: 'var(--primary)', fontWeight: 700, marginTop: '0.2rem' }}>Click breakdown ➔</div>
            </div>
          </div>

          {/* Floating Stat Card 3: Conversions (Clickable Pop-Up) */}
          <div
            className="hero-stat-card card-conversions"
            onClick={() => onOpenStatModal('conversions')}
            style={{ cursor: 'pointer' }}
            title="Click to view Conversion Rates"
            role="button"
            aria-label="View Conversion Rates"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && onOpenStatModal('conversions')}
          >
            <div className="hero-stat-icon-box">🎯</div>
            <div>
              <div className="hero-stat-label">Average ROAS Multiplier</div>
              <div className="hero-stat-value">4.71x ROAS</div>
              <div style={{ fontSize: '0.7rem', color: 'var(--primary)', fontWeight: 700, marginTop: '0.2rem' }}>Click breakdown ➔</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
