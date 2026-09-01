'use client';

import React, { use } from 'react';
import { useApp } from '@/context/AppContext';
import { GraphicDetailPage } from '@/views/GraphicDetailPage';

export default function GraphicCategorySlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = use(params);
  const { onNavigate, openStrategyModal } = useApp();

  return (
    <GraphicDetailPage
      categoryId={resolvedParams.slug}
      onNavigate={onNavigate}
      onOpenStrategyModal={openStrategyModal}
    />
  );
}
