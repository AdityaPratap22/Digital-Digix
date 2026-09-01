'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';
import { IndustriesPage } from '@/views/IndustriesPage';

export default function IndustriesOverviewPage() {
  const { onNavigate, openStrategyModal } = useApp();

  return (
    <IndustriesPage
      onNavigate={onNavigate}
      onOpenStrategyModal={openStrategyModal}
    />
  );
}
