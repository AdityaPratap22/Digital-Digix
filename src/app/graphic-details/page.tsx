'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';
import { GraphicDetailPage } from '@/views/GraphicDetailPage';

export default function GraphicDetailsOverviewPage() {
  const { onNavigate, openStrategyModal } = useApp();

  return (
    <GraphicDetailPage
      categoryId="all"
      onNavigate={onNavigate}
      onOpenStrategyModal={openStrategyModal}
    />
  );
}
