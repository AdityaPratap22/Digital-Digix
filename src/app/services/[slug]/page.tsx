'use client';

import React, { use } from 'react';
import { useApp } from '@/context/AppContext';
import { ServiceDetailPage } from '@/views/ServiceDetailPage';

export default function ServiceSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = use(params);
  const { onNavigate, openStrategyModal } = useApp();

  return (
    <ServiceDetailPage
      serviceId={resolvedParams.slug}
      onNavigate={onNavigate}
      onOpenStrategyModal={openStrategyModal}
    />
  );
}
