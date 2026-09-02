'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';
import { IndustryDetailPage } from '@/views/IndustryDetailPage';

export const IndustryClient: React.FC<{ slug: string }> = ({ slug }) => {
  const { onNavigate, openStrategyModal } = useApp();

  return (
    <IndustryDetailPage
      industryId={slug}
      onNavigate={onNavigate}
      onOpenStrategyModal={openStrategyModal}
    />
  );
};
