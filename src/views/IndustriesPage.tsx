'use client';

import React, { useState, useMemo } from 'react';

import { IndustryItem, industryCategories, all89IndustriesList } from '../data/industriesData';
export { type IndustryItem, industryCategories, all89IndustriesList };

interface IndustriesPageProps {
  onNavigate: (page: any, slug?: string) => void;
  onOpenStrategyModal: (note?: string) => void;
}

export const IndustriesPage: React.FC<IndustriesPageProps> = ({ onNavigate, onOpenStrategyModal: _onOpenStrategyModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredIndustries = useMemo(() => {
    return all89IndustriesList.filter((item) => {
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div style={{ backgroundColor: '#F0F4F8', color: '#1F2937', minHeight: '100vh', padding: '2.5rem 0 6rem 0' }}>
      <div className="container">
        
        {/* BREADCRUMB */}
        <div style={{ fontSize: '0.825rem', color: '#64748B', marginBottom: '2rem' }}>
          <span style={{ cursor: 'pointer', color: '#0F172A', fontWeight: 600 }} onClick={() => onNavigate('home')}>Home</span> › <span style={{ color: '#64748B', fontWeight: 600 }}>Industries</span>
        </div>

        {/* HEADER SECTION - UNIQUE PREMIUM DIGITAL DIGIX COPY */}
        <div style={{ textAlign: 'center', maxWidth: '880px', margin: '0 auto 2.5rem auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.65rem', fontSize: '0.78rem', fontWeight: 800, color: '#3B82F6', letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            <span style={{ width: '35px', height: '1.5px', background: '#3B82F6' }}></span>
            <span>INDUSTRY-SPECIFIC GROWTH ENGINES</span>
            <span style={{ width: '35px', height: '1.5px', background: '#3B82F6' }}></span>
          </div>

          <h1 style={{ fontFamily: 'Outfit, serif', fontSize: '3.4rem', fontWeight: 900, color: '#0F172A', marginBottom: '1rem', letterSpacing: '-0.02em', lineHeight: 1.15 }}>
            89 Sectors Scaled. Zero Generic Marketing.
          </h1>

          <p style={{ fontSize: '1.1rem', color: '#64748B', lineHeight: 1.6, maxWidth: '750px', margin: '0 auto' }}>
            Every niche has its own rules. Explore our 89 dedicated authority hubs powered by real Indian market intelligence, verified acquisition funnels, and battle-tested digital playbooks.
          </p>
        </div>

        {/* CAPSULE SEARCH BAR */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: '450px' }}>
            <input
              type="text"
              placeholder="Search industries..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '0.85rem 1.75rem',
                borderRadius: '999px',
                border: '1px solid #E2E8F0',
                backgroundColor: '#FFFFFF',
                fontSize: '0.925rem',
                color: '#1F2937',
                outline: 'none',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.05)',
                transition: 'all 0.25s ease'
              }}
              onFocus={(e) => e.target.style.borderColor = '#3B82F6'}
              onBlur={(e) => e.target.style.borderColor = '#E2E8F0'}
            />
          </div>
        </div>

        {/* CATEGORY FILTER PILLS */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.5rem',
            maxWidth: '1100px',
            margin: '0 auto 2.25rem auto'
          }}
        >
          {industryCategories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  backgroundColor: isActive ? '#0F172A' : '#FFFFFF',
                  color: isActive ? '#FFFFFF' : '#475569',
                  border: isActive ? '1px solid #0F172A' : '1px solid #E2E8F0',
                  borderRadius: '999px',
                  padding: '0.45rem 1.1rem',
                  fontSize: '0.825rem',
                  fontWeight: isActive ? 800 : 600,
                  cursor: 'pointer',
                  boxShadow: isActive ? '0 4px 15px rgba(0,0,0,0.12)' : '0 2px 8px rgba(0,0,0,0.02)',
                  transition: 'all 0.2s ease'
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* COUNTER SUBTEXT */}
        <div style={{ textAlign: 'center', fontSize: '0.75rem', fontWeight: 800, color: '#94A3B8', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '2.5rem' }}>
          {filteredIndustries.length} INDUSTRIES SHOWN
        </div>

        {/* 5-COLUMN GRID OF INDUSTRY CARDS */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))',
            gap: '1.25rem'
          }}
        >
          {filteredIndustries.map((item) => (
            <div
              key={item.id}
              onClick={() => onNavigate('industry-detail', item.id)}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '20px',
                padding: '1.25rem 1.1rem',
                border: '1px solid #F1F5F9',
                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.04)',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
                transition: 'transform 0.25s ease, boxShadow 0.25s ease, borderColor 0.25s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.1)';
                e.currentTarget.style.borderColor = '#FDE68A';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.04)';
                e.currentTarget.style.borderColor = '#F1F5F9';
              }}
            >
              {/* TOP ROW: ICON ON LEFT, LIVE BADGE ON RIGHT */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%', marginBottom: '0.85rem' }}>
                <span style={{ fontSize: '1.75rem', lineHeight: 1 }}>{item.icon}</span>
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
                  LIVE
                </span>
              </div>

              {/* INDUSTRY NAME */}
              <h3
                style={{
                  fontFamily: 'Outfit, serif',
                  fontSize: '1rem',
                  fontWeight: 900,
                  color: '#0F172A',
                  marginBottom: '0.2rem',
                  lineHeight: 1.3
                }}
              >
                {item.name}
              </h3>

              {/* CATEGORY SUBTEXT */}
              <div style={{ fontSize: '0.75rem', color: '#94A3B8', fontWeight: 600, marginBottom: '1rem' }}>
                {item.category}
              </div>

              {/* EXPLORE LINK AT BOTTOM LEFT */}
              <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#3B82F6', fontSize: '0.78rem', fontWeight: 800 }}>
                <span>Explore</span>
                <span>→</span>
              </div>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
};
