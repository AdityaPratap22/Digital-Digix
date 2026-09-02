'use client';

import React from 'react';
import { useApp } from '../context/AppContext';
import { Header } from './Header';
import { Footer } from './Footer';
import { LocationsModal } from './LocationsModal';
import { StatCardModal } from './StatCardModal';
import { LeadershipModal } from './LeadershipModal';
import { StrategyModal } from './StrategyModal';
import { GlobalSearchModal } from './GlobalSearchModal';
import { FloatingSocials } from './FloatingSocials';
import { CursorLightRay } from './CursorLightRay';
import { ScrollAnimationProvider } from './ScrollAnimationProvider';

export const ClientLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const {
    currency,
    setCurrency,
    theme,
    toggleTheme,
    activeStatModal,
    setActiveStatModal,
    activeLeaderModal,
    setActiveLeaderModal,
    isStrategyModalOpen,
    setIsStrategyModalOpen,
    strategyModalNote,
    openStrategyModal,
    isSearchModalOpen,
    setIsSearchModalOpen,
    isLocationsModalOpen,
    setIsLocationsModalOpen,
    onNavigate,
  } = useApp();

  const handleSelectLocation = (loc: string) => {
    setIsLocationsModalOpen(false);
    onNavigate('location', loc);
  };

  return (
    <div className="app">
      {/* Global Scroll Animation Observer */}
      <ScrollAnimationProvider />

      {/* HEADER */}
      <Header
        onNavigate={onNavigate}
        currency={currency}
        onCurrencyChange={setCurrency}
        theme={theme}
        onThemeToggle={toggleTheme}
        onOpenStrategyModal={() => openStrategyModal()}
        onOpenLeaderModal={setActiveLeaderModal}
        onOpenSearchModal={() => setIsSearchModalOpen(true)}
        onOpenLocationsModal={() => setIsLocationsModalOpen(true)}
      />

      {/* MAIN CONTENT */}
      <main className="main-content" style={{ minHeight: '80vh' }}>
        {children}
      </main>

      {/* FOOTER */}
      <Footer
        onNavigate={onNavigate}
        onSelectLocation={handleSelectLocation}
        onOpenLocationsModal={() => setIsLocationsModalOpen(true)}
      />

      {/* POP-UP MODALS */}
      <LocationsModal
        isOpen={isLocationsModalOpen}
        onClose={() => setIsLocationsModalOpen(false)}
        onSelectLocation={handleSelectLocation}
      />

      <StatCardModal
        statType={activeStatModal}
        onClose={() => setActiveStatModal(null)}
        onOpenStrategyModal={openStrategyModal}
      />

      <LeadershipModal
        person={activeLeaderModal}
        onClose={() => setActiveLeaderModal(null)}
        onOpenStrategyModal={openStrategyModal}
        onNavigate={onNavigate}
      />

      <StrategyModal
        isOpen={isStrategyModalOpen}
        onClose={() => setIsStrategyModalOpen(false)}
        planName={strategyModalNote}
      />

      <GlobalSearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
      />

      {/* Floating social media quick contact icons */}
      <FloatingSocials />

      {/* Atmospheric Cursor Light Ray Follower */}
      <CursorLightRay />
    </div>
  );
};
