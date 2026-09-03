'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import type { Currency, PageView } from '../types';
import type { StatType } from '../components/StatCardModal';
import type { LeaderPerson } from '../components/LeadershipModal';

interface AppContextType {
  currency: Currency;
  setCurrency: (c: Currency) => void;
  theme: 'light' | 'dark';
  setTheme: (t: 'light' | 'dark') => void;
  toggleTheme: () => void;
  
  // Modals
  activeStatModal: StatType;
  setActiveStatModal: (s: StatType) => void;
  activeLeaderModal: LeaderPerson;
  setActiveLeaderModal: (l: LeaderPerson) => void;
  isStrategyModalOpen: boolean;
  setIsStrategyModalOpen: (o: boolean) => void;
  strategyModalNote: string;
  setStrategyModalNote: (n: string) => void;
  openStrategyModal: (note?: string) => void;
  isSearchModalOpen: boolean;
  setIsSearchModalOpen: (o: boolean) => void;
  isLocationsModalOpen: boolean;
  setIsLocationsModalOpen: (o: boolean) => void;
  
  // Universal Navigation
  onNavigate: (page: PageView, slug?: string) => void;
  prefetchRoute: (url: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

// ─── All routes to prefetch, in priority order ───────────────────────────────
const WAVE_1_ROUTES = [
  '/',
  '/about',
  '/services',
  '/blog',
  '/industries',
  '/portfolio',
  '/contact',
  '/locations',
  '/digital-marketing',
  '/smm',
  '/payments',
];

const WAVE_2_ROUTES = [
  '/about/harsh-chaudhary',
  '/about/khwahish-sahai',
  '/about/why-choose-us',
  '/about/team',
  '/services/social-media-marketing',
  '/services/seo-services',
  '/services/performance-marketing',
  '/services/website-development',
  '/services/graphic-design',
  '/services/content-marketing',
  '/services/lead-generation',
  '/services/email-marketing',
  '/services/whatsapp-marketing',
  '/services/ecommerce-growth',
  '/services/influencer-marketing',
  '/services/personal-branding',
  '/services/video-editing-production',
  '/services/brand-strategy',
  '/services/dashboard-kpi-systems',
  '/services/app-store-optimization',
  '/services/analytics-tracking',
];

const WAVE_3_ROUTES = [
  // Top industry pages
  '/industries/marketing-in-hospitals',
  '/industries/marketing-in-clinics',
  '/industries/marketing-in-real-estate',
  '/industries/marketing-in-restaurants',
  '/industries/marketing-in-ecommerce',
  '/industries/marketing-in-education',
  '/industries/marketing-in-law-firms',
  '/industries/marketing-in-hotels',
  '/industries/marketing-in-fashion',
  '/industries/marketing-in-fitness',
  '/industries/marketing-in-dental-clinics',
  '/industries/marketing-in-automobile-dealers',
  '/industries/marketing-in-startups',
  '/industries/marketing-in-it-companies',
  '/industries/marketing-in-insurance',
  // Top location pages
  '/digital-marketing/united-kingdom',
  '/digital-marketing/united-states',
  '/digital-marketing/dubai',
  '/digital-marketing/france',
  '/digital-marketing/germany',
  '/digital-marketing/singapore',
  '/digital-marketing/australia',
  '/digital-marketing/canada',
  '/digital-marketing/london',
  '/digital-marketing/new-york',
  '/digital-marketing/paris',
  '/digital-marketing/berlin',
  '/digital-marketing/toronto',
  '/digital-marketing/sydney',
];

// ─── Staggered prefetch scheduler ─────────────────────────────────────────────
function scheduleWave(routes: string[], prefetch: (r: string) => void, delayMs: number) {
  setTimeout(() => {
    // Spread each route 40ms apart within the wave to avoid burst network pressure
    routes.forEach((r, i) => {
      setTimeout(() => prefetch(r), i * 40);
    });
  }, delayMs);
}

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const router = useRouter();
  const [currency, setCurrency] = useState<Currency>('INR');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const [activeStatModal, setActiveStatModal] = useState<StatType>(null);
  const [activeLeaderModal, setActiveLeaderModal] = useState<LeaderPerson>(null);
  const [isStrategyModalOpen, setIsStrategyModalOpen] = useState(false);
  const [strategyModalNote, setStrategyModalNote] = useState<string>('');
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isLocationsModalOpen, setIsLocationsModalOpen] = useState(false);

  // ─── Multi-wave aggressive route preloading ──────────────────────────────
  useEffect(() => {
    const prefetch = (r: string) => { try { router.prefetch(r); } catch (_) {} };

    // Wave 1: Core nav routes — fire as soon as the browser has a free moment
    const runWaves = () => {
      // Wave 1 — immediately on idle (or after 100ms fallback)
      WAVE_1_ROUTES.forEach((r, i) => setTimeout(() => prefetch(r), i * 30));

      // Wave 2 — service + about sub-pages, start after 1.5s
      scheduleWave(WAVE_2_ROUTES, prefetch, 1500);

      // Wave 3 — top industry + location pages, start after 4s
      scheduleWave(WAVE_3_ROUTES, prefetch, 4000);
    };

    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      (window as any).requestIdleCallback(runWaves, { timeout: 200 });
    } else {
      setTimeout(runWaves, 100);
    }
  }, [router]);

  const prefetchRoute = (url: string) => {
    try { router.prefetch(url); } catch (_) {}
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const openStrategyModal = (note?: string) => {
    if (note) setStrategyModalNote(note);
    setIsStrategyModalOpen(true);
  };

  const onNavigate = (page: PageView, slug?: string) => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }

    switch (page) {
      case 'home':
        router.push('/');
        break;
      case 'about':
        router.push(slug ? `/about/${slug}` : '/about');
        break;
      case 'services':
        router.push('/services');
        break;
      case 'smm':
        router.push('/smm');
        break;
      case 'graphic-details':
        router.push(slug ? `/services/graphic-design/${slug}` : '/services/graphic-design');
        break;
      case 'design-item':
        router.push(slug ? `/services/graphic-design/${slug}` : '/services/graphic-design');
        break;
      case 'service-details':
        router.push(slug ? `/services/${slug}` : '/services');
        break;
      case 'industries':
        router.push('/industries');
        break;
      case 'industry-detail':
        if (slug) {
          const cleanSlug = slug.toLowerCase().replace(/\s+/g, '-');
          const stripped = cleanSlug
            .replace(/^marketing-in-/, '')
            .replace(/^marketing-for-/, '')
            .replace(/^digital-marketing-for-/, '')
            .replace(/^digital-marketing-in-/, '')
            .replace(/^digital-marketing-/, '');
          const finalSlug = `marketing-in-${stripped}`;
          router.push(`/industries/${finalSlug}`);
        } else {
          router.push('/industries');
        }
        break;
      case 'portfolio':
        router.push('/portfolio');
        break;
      case 'contact':
        router.push('/contact');
        break;
      case 'payments':
        router.push('/payments');
        break;
      case 'all-locations':
        router.push('/locations');
        break;
      case 'location':
        if (slug) {
          const cleanSlug = slug
            .toLowerCase()
            .replace(/^digital-marketing-in-/, '')
            .replace(/^digital-marketing-for-/, '')
            .replace(/^digital-marketing-/, '')
            .replace(/\s+/g, '-');
          router.push(`/digital-marketing/${cleanSlug}`);
        } else {
          router.push('/locations');
        }
        break;
      case 'blog':
        router.push('/blog');
        break;
      case 'blog-post':
        router.push(slug ? `/blog/${slug}` : '/blog');
        break;
      default:
        router.push('/');
        break;
    }
  };

  return (
    <AppContext.Provider
      value={{
        currency,
        setCurrency,
        theme,
        setTheme,
        toggleTheme,
        activeStatModal,
        setActiveStatModal,
        activeLeaderModal,
        setActiveLeaderModal,
        isStrategyModalOpen,
        setIsStrategyModalOpen,
        strategyModalNote,
        setStrategyModalNote,
        openStrategyModal,
        isSearchModalOpen,
        setIsSearchModalOpen,
        isLocationsModalOpen,
        setIsLocationsModalOpen,
        onNavigate,
        prefetchRoute,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
