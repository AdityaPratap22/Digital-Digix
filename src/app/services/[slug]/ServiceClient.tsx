'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';
import { ServiceDetailPage } from '@/views/ServiceDetailPage';

export const ServiceClient: React.FC<{ slug: string }> = ({ slug }) => {
  const { onNavigate, openStrategyModal } = useApp();

  return (
    <ServiceDetailPage
      serviceId={slug}
      onNavigate={onNavigate}
      onOpenStrategyModal={openStrategyModal}
    />
  );
};
