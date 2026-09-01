'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';
import { ServicesPage } from '@/views/ServicesPage';

export default function ServicesOverviewPage() {
  const { onNavigate, openStrategyModal } = useApp();

  return (
    <ServicesPage
      onNavigate={onNavigate}
      onOpenStrategyModal={openStrategyModal}
    />
  );
}
