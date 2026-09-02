'use client';

import React, { use } from 'react';
import { useApp } from '@/context/AppContext';
import { LocationPage } from '@/views/LocationPage';
import { formatLocationName } from '@/data/locationsData';

export default function LocationSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = use(params);
  const locationName = formatLocationName(resolvedParams.slug);
  const { onNavigate, openStrategyModal } = useApp();

  return (
    <LocationPage
      locationName={locationName}
      onNavigate={onNavigate}
      onOpenStrategyModal={openStrategyModal}
    />
  );
}
