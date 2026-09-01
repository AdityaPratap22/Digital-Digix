'use client';

import React, { use } from 'react';
import { useApp } from '@/context/AppContext';
import { IndustryDetailPage } from '@/views/IndustryDetailPage';

export default function IndustrySlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = use(params);
  const { onNavigate, openStrategyModal } = useApp();

  return (
    <IndustryDetailPage
      industryId={resolvedParams.slug}
      onNavigate={onNavigate}
      onOpenStrategyModal={openStrategyModal}
    />
  );
}
