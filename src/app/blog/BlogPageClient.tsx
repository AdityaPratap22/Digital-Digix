'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';
import { BlogPage } from '@/views/BlogPage';

export function BlogPageClient() {
  const { onNavigate, openStrategyModal } = useApp();
  return (
    <BlogPage
      onNavigate={onNavigate}
      onOpenStrategyModal={openStrategyModal}
    />
  );
}
