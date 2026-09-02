'use client';

import React from 'react';
import type { PageView } from '../types';
import { LeadershipModal, type LeaderPerson } from '../components/LeadershipModal';

interface LeaderDetailPageProps {
  slug: string;
  onNavigate: (page: PageView, slug?: string) => void;
  onOpenStrategyModal: (note?: string) => void;
}

export const LeaderDetailPage: React.FC<LeaderDetailPageProps> = ({
  slug,
  onNavigate,
  onOpenStrategyModal
}) => {
  const normalizedSlug = decodeURIComponent(slug).toLowerCase();

  let person: LeaderPerson = 'harsh';
  let title = 'Founder — Harsh Chaudhary';

  if (normalizedSlug.includes('khwahish') || normalizedSlug.includes('co-founder')) {
    person = 'khwahish';
    title = 'Co-Founder — Khwahish Sahai';
  } else if (normalizedSlug.includes('why') || normalizedSlug.includes('why-us') || normalizedSlug.includes('why-choose-us')) {
    person = 'why-us';
    title = 'Why Choose Digital Digix';
  } else if (normalizedSlug.includes('team') || normalizedSlug.includes('our-team')) {
    person = 'team';
    title = 'Our Global Team';
  } else {
    person = 'harsh';
    title = 'Founder — Harsh Chaudhary';
  }

  return (
    <div style={{ backgroundColor: '#F8FAFC', minHeight: '100vh', padding: '2.5rem 0 6rem 0' }}>
      <div className="container" style={{ maxWidth: '1140px', margin: '0 auto' }}>
        
        {/* Breadcrumb */}
        <div style={{ fontSize: '0.875rem', color: '#64748B', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
          <span style={{ cursor: 'pointer', color: 'var(--primary)' }} onClick={() => onNavigate('home')}>Home</span>
          <span>/</span>
          <span style={{ cursor: 'pointer', color: '#3B82F6' }} onClick={() => onNavigate('about')}>About Us</span>
          <span>/</span>
          <span style={{ color: '#0F172A', fontWeight: 700 }}>{title}</span>
        </div>

        {/* Embedded standalone page wrapper */}
        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '24px',
          border: '1px solid #E2E8F0',
          boxShadow: '0 10px 30px rgba(11, 19, 42, 0.05)',
          overflow: 'hidden'
        }}>
          <div style={{ padding: '0 0.5rem' }}>
            <LeadershipModal
              person={person}
              onClose={() => onNavigate('about')}
              onOpenStrategyModal={onOpenStrategyModal}
              onNavigate={onNavigate}
            />
          </div>
        </div>

      </div>
    </div>
  );
};
