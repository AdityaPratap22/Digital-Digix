'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';
import { BlogPostPage } from '@/views/BlogPostPage';

export const BlogPostClient: React.FC<{ slug: string; initialContent?: string }> = ({ slug, initialContent }) => {
  const { onNavigate, openStrategyModal } = useApp();

  return (
    <BlogPostPage
      slug={slug}
      initialContent={initialContent}
      onNavigate={onNavigate}
      onOpenStrategyModal={openStrategyModal}
    />
  );
};
