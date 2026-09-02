'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';
import { GraphicItemDetailPage } from '@/views/GraphicItemDetailPage';

export const DesignItemClient: React.FC<{ slug: string }> = ({ slug }) => {
  const { onNavigate, openStrategyModal } = useApp();

  return (
    <GraphicItemDetailPage
      itemId={slug}
      onNavigate={onNavigate}
      onOpenStrategyModal={openStrategyModal}
    />
  );
};
