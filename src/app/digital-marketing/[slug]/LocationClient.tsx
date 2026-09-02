'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';
import { LocationPage } from '@/views/LocationPage';
import { formatLocationName } from '@/data/locationsData';

export const LocationClient: React.FC<{ slug: string }> = ({ slug }) => {
  const locationName = formatLocationName(slug);
  const { onNavigate, openStrategyModal } = useApp();

  return (
    <LocationPage
      locationName={locationName}
      onNavigate={onNavigate}
      onOpenStrategyModal={openStrategyModal}
    />
  );
};
