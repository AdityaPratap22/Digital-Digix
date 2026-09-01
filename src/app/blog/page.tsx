'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';
import { BlogPage } from '@/views/BlogPage';

export default function BlogDirectoryPage() {
  const { onNavigate, openStrategyModal } = useApp();

  return (
    <BlogPage
      onNavigate={onNavigate}
      onOpenStrategyModal={openStrategyModal}
    />
  );
}
