'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';
import { LocationPage } from '@/views/LocationPage';

export const LocationClient: React.FC<{ slug: string }> = ({ slug }) => {
  const decoded = decodeURIComponent(slug).toLowerCase();
  const cleanLocation = decoded
    .replace(/^digital-marketing-in-/, '')
    .replace(/^digital-marketing-for-/, '')
    .replace(/^digital-marketing-/, '')
    .replace(/-/g, ' ');

  const { onNavigate, openStrategyModal } = useApp();

  return (
    <LocationPage
      locationName={cleanLocation}
      onNavigate={onNavigate}
      onOpenStrategyModal={openStrategyModal}
    />
  );
};
