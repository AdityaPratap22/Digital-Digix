'use client';

import React, { use } from 'react';
import { useApp } from '@/context/AppContext';
import { GraphicItemDetailPage } from '@/views/GraphicItemDetailPage';

export default function DesignItemSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = use(params);
  const { onNavigate, openStrategyModal } = useApp();

  return (
    <GraphicItemDetailPage
      itemId={resolvedParams.slug}
      onNavigate={onNavigate}
      onOpenStrategyModal={openStrategyModal}
    />
  );
}
