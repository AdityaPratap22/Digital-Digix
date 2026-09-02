'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';
import { SmmPage } from '@/views/SmmPage';

export function SmmPageClient() {
  const { onNavigate, openStrategyModal } = useApp();
  return (
    <SmmPage
      onNavigate={onNavigate}
      onOpenStrategyModal={openStrategyModal}
    />
  );
}
