'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';
import { LeaderDetailPage } from '@/views/LeaderDetailPage';

export const AboutClient: React.FC<{ slug: string }> = ({ slug }) => {
  const { onNavigate, openStrategyModal } = useApp();

  return (
    <LeaderDetailPage
      slug={slug}
      onNavigate={onNavigate}
      onOpenStrategyModal={openStrategyModal}
    />
  );
};
