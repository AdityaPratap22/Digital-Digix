'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';
import { AboutUs } from '@/components/AboutUs';

export default function AboutPage() {
  const { setActiveLeaderModal, openStrategyModal, onNavigate } = useApp();

  return (
    <div style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
      <AboutUs
        onOpenLeaderModal={setActiveLeaderModal}
        onOpenStrategyModal={openStrategyModal}
        onSelectLocation={(loc) => onNavigate('location', loc)}
      />
    </div>
  );
}
