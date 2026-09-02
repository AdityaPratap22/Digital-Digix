'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';
import { PortfolioPage } from '@/views/PortfolioPage';

export function PortfolioPageClient() {
  const { onNavigate, openStrategyModal } = useApp();
  return (
    <PortfolioPage
      onNavigate={onNavigate}
      onOpenStrategyModal={openStrategyModal}
    />
  );
}
