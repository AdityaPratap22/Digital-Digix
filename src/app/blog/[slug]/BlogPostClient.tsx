'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';
import { BlogPostPage } from '@/views/BlogPostPage';

export const BlogPostClient: React.FC<{ slug: string }> = ({ slug }) => {
  const { onNavigate, openStrategyModal } = useApp();

  return (
    <BlogPostPage
      slug={slug}
      onNavigate={onNavigate}
      onOpenStrategyModal={openStrategyModal}
    />
  );
};
