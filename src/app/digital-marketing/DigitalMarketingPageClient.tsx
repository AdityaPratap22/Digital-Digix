'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';
import { LocationsDirectoryPage } from '@/views/LocationsDirectoryPage';

export function DigitalMarketingPageClient() {
  const { onNavigate } = useApp();
  return (
    <LocationsDirectoryPage
      onNavigate={onNavigate}
      onSelectLocation={(loc) => onNavigate('location', loc)}
    />
  );
}
