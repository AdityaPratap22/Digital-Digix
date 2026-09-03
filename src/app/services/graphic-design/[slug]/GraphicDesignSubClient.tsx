'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';
import { GraphicDetailPage } from '@/views/GraphicDetailPage';
import { GraphicItemDetailPage } from '@/views/GraphicItemDetailPage';
import { graphicDesignPricingData } from '@/data/graphicDesignData';

interface GraphicDesignSubClientProps {
  slug: string;
}

export function GraphicDesignSubClient({ slug }: GraphicDesignSubClientProps) {
  const { onNavigate, openStrategyModal } = useApp();
  const cleanSlug = decodeURIComponent(slug).toLowerCase().trim();

  // Known category / bundle slugs
  const bundleSlugs = [
    'standard-creatives',
    'structured-design',
    'multi-page-documents',
    'social-media',
    'branding-identity',
    'print-collateral',
    'packaging-labels',
    'digital-ads',
    'illustrations',
    'all',
  ];

  // Check if slug matches a category or bundle
  const isBundle = bundleSlugs.includes(cleanSlug) || 
    graphicDesignPricingData.some(cat => {
      const catSlug = cat.title.split('—')[0].trim().toLowerCase().replace(' & ', '-').replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-');
      return catSlug === cleanSlug;
    });

  if (isBundle) {
    return (
      <GraphicDetailPage
        categoryId={cleanSlug}
        onNavigate={onNavigate}
        onOpenStrategyModal={openStrategyModal}
      />
    );
  }

  // Otherwise, it's an individual design service item (e.g. poster-design, flyer-design)
  return (
    <GraphicItemDetailPage
      itemId={cleanSlug}
      onNavigate={onNavigate}
      onOpenStrategyModal={openStrategyModal}
    />
  );
}
