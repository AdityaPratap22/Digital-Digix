'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';
import { GraphicDetailPage } from '@/views/GraphicDetailPage';

export const GraphicDetailClient: React.FC<{ slug: string }> = ({ slug }) => {
  const { onNavigate, openStrategyModal } = useApp();

  return (
    <GraphicDetailPage
      categoryId={slug}
      onNavigate={onNavigate}
      onOpenStrategyModal={openStrategyModal}
    />
  );
};
