'use client';

import React, { use } from 'react';
import { useApp } from '@/context/AppContext';
import { LocationPage } from '@/views/LocationPage';

export default function LocationSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = use(params);
  const locationFormatted = decodeURIComponent(resolvedParams.slug).replace(/-/g, ' ');
  const { onNavigate, openStrategyModal } = useApp();

  return (
    <LocationPage
      locationName={locationFormatted}
      onNavigate={onNavigate}
      onOpenStrategyModal={openStrategyModal}
    />
  );
}
