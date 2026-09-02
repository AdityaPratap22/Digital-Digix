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
}

const AppContext = createContext<AppContextType | undefined>(undefined);

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
        router.push(slug ? `/graphic-details/${slug}` : '/graphic-details');
        break;
      case 'design-item':
        router.push(slug ? `/design-item/${slug}` : '/graphic-details');
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
