'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';
import { Hero } from '@/components/Hero';
import { InteractiveStatsBar } from '@/components/InteractiveStatsBar';
import { ServicesGrid } from '@/components/ServicesGrid';
import { AboutUs } from '@/components/AboutUs';
import { WorkShowcaseMarquee } from '@/components/WorkShowcaseMarquee';
import { ClientVoices } from '@/components/ClientVoices';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { ContactSection } from '@/components/ContactSection';

export default function HomePage() {
  const {
    setActiveStatModal,
    setActiveLeaderModal,
    openStrategyModal,
    onNavigate,
  } = useApp();

  const handleSelectLocation = (loc: string) => {
    onNavigate('location', loc);
  };

  return (
    <>
      <Hero
        onOpenStatModal={setActiveStatModal}
        onOpenStrategyModal={() => openStrategyModal()}
        onNavigateServices={() => onNavigate('services')}
        onNavigatePortfolio={() => onNavigate('portfolio')}
      />
      <div style={{ backgroundColor: 'var(--bg-main)', paddingTop: '4rem', paddingBottom: '2rem' }}>
        <InteractiveStatsBar
          onSelectLocation={handleSelectLocation}
          onOpenStrategyModal={openStrategyModal}
        />
      </div>
      <ServicesGrid
        onOpenStrategyModal={openStrategyModal}
        onNavigate={onNavigate}
        backgroundColor="#FFFFFF"
      />
      <AboutUs
        onOpenLeaderModal={setActiveLeaderModal}
        onOpenStrategyModal={openStrategyModal}
        onSelectLocation={handleSelectLocation}
        backgroundColor="var(--bg-main)"
      />
      <WorkShowcaseMarquee backgroundColor="#FFFFFF" />
      <ClientVoices backgroundColor="var(--bg-main)" />
      <WhyChooseUs
        onSelectLocation={handleSelectLocation}
        onOpenStrategyModal={openStrategyModal}
        backgroundColor="#FFFFFF"
      />
      <ContactSection backgroundColor="var(--bg-main)" />
    </>
  );
}
