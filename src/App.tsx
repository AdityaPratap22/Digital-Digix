import React, { useState, useEffect } from 'react';
import type { Currency, PageView } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { ServicesGrid } from './components/ServicesGrid';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

import { InteractiveStatsBar } from './components/InteractiveStatsBar';
import { ClientVoices } from './components/ClientVoices';
import { FloatingSocials } from './components/FloatingSocials';
import { WorkShowcaseMarquee } from './components/WorkShowcaseMarquee';
import { CursorLightRay } from './components/CursorLightRay';

// Modals
import { StatCardModal } from './components/StatCardModal';
import type { StatType } from './components/StatCardModal';
import { LeadershipModal } from './components/LeadershipModal';
import type { LeaderPerson } from './components/LeadershipModal';
import { StrategyModal } from './components/StrategyModal';
import { GlobalSearchModal } from './components/GlobalSearchModal';
import { LocationsModal } from './components/LocationsModal';

// Dedicated Pages
import { ServicesPage } from './pages/ServicesPage';
import { SmmPage } from './pages/SmmPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { IndustryDetailPage } from './pages/IndustryDetailPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { LocationPage } from './pages/LocationPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { GraphicDetailPage } from './pages/GraphicDetailPage';
import { GraphicItemDetailPage } from './pages/GraphicItemDetailPage';
import { LocationsDirectoryPage } from './pages/LocationsDirectoryPage';

export const App: React.FC = () => {
  const [activePage, setActivePage] = useState<PageView>('home');
  const [currency, setCurrency] = useState<Currency>('INR');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // Modals state
  const [activeStatModal, setActiveStatModal] = useState<StatType>(null);
  const [activeLeaderModal, setActiveLeaderModal] = useState<LeaderPerson>(null);
  const [isStrategyModalOpen, setIsStrategyModalOpen] = useState(false);
  const [strategyModalNote, setStrategyModalNote] = useState<string>('');
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isLocationsModalOpen, setIsLocationsModalOpen] = useState(false);

  // Selected Location for location landing page
  const [selectedLocation, setSelectedLocation] = useState<string>('United States');

  // Selected Blog Slug for blog post page
  const [selectedBlogSlug, setSelectedBlogSlug] = useState<string>('');

  const [selectedServiceId, setSelectedServiceId] = useState<string>('');
  const [selectedIndustrySlug, setSelectedIndustrySlug] = useState<string>('');
  const [selectedGraphicCat, setSelectedGraphicCat] = useState<string>('');
  const [selectedDesignItem, setSelectedDesignItem] = useState<string>('');

  const buildCleanUrl = (page: PageView, slug?: string): string => {
    switch (page) {
      case 'home':
        return '/';
      case 'about':
        return '/about';
      case 'services':
        return '/services';
      case 'smm':
        return '/smm';
      case 'graphic-details':
        return slug ? `/graphic-details/${slug}` : '/graphic-details';
      case 'design-item':
        return slug ? `/design-item/${slug}` : '/graphic-details';
      case 'service-details':
        return slug ? `/services/${slug}` : '/services';
      case 'industries':
        return '/industries';
      case 'industry-detail':
        return slug ? `/industries/${slug}` : '/industries';
      case 'portfolio':
        return '/portfolio';
      case 'contact':
        return '/contact';
      case 'all-locations':
        return '/locations';
      case 'location':
        return slug ? `/location/${slug.toLowerCase().replace(/\s+/g, '-')}` : '/locations';
      case 'blog':
        return '/blog';
      case 'blog-post':
        return slug ? `/blog/${slug}` : '/blog';
      default:
        return '/';
    }
  };

  useEffect(() => {
    const syncRoute = () => {
      const rawPath = window.location.pathname.replace(/\/+$/, '').toLowerCase();
      const params = new URLSearchParams(window.location.search);
      const pageParam = params.get('page');
      const idParam = params.get('id') || params.get('service') || '';

      const segments = rawPath.split('/').filter(Boolean);

      // 1. Check clean path routing
      if (segments.length === 0) {
        if (pageParam) {
          applyRoute(pageParam as PageView, idParam);
        } else {
          setActivePage('home');
        }
        return;
      }

      const rootSegment = segments[0];
      const subSegment = segments[1] || '';

      if (rootSegment === 'about') {
        setActivePage('about');
      } else if (rootSegment === 'services') {
        if (!subSegment) {
          setActivePage('services');
        } else if (subSegment === 'smm' || subSegment === 'social-media-marketing') {
          setActivePage('smm');
        } else if (subSegment === 'graphic-details' || subSegment === 'graphic-design') {
          setSelectedGraphicCat(segments[2] || '');
          setActivePage('graphic-details');
        } else {
          setSelectedServiceId(subSegment);
          setActivePage('service-details');
        }
      } else if (rootSegment === 'smm') {
        setActivePage('smm');
      } else if (rootSegment === 'graphic-details' || rootSegment === 'graphic-design') {
        setSelectedGraphicCat(subSegment);
        setActivePage('graphic-details');
      } else if (rootSegment === 'design-item') {
        setSelectedDesignItem(subSegment);
        setActivePage('design-item');
      } else if (rootSegment === 'service-details') {
        setSelectedServiceId(subSegment);
        setActivePage('service-details');
      } else if (rootSegment === 'industries') {
        if (subSegment) {
          setSelectedIndustrySlug(subSegment);
          setActivePage('industry-detail');
        } else {
          setActivePage('industries');
        }
      } else if (rootSegment === 'industry-detail') {
        setSelectedIndustrySlug(subSegment);
        setActivePage('industry-detail');
      } else if (rootSegment === 'portfolio' || rootSegment === 'case-studies') {
        setActivePage('portfolio');
      } else if (rootSegment === 'contact') {
        setActivePage('contact');
      } else if (rootSegment === 'locations' || rootSegment === 'all-locations') {
        setActivePage('all-locations');
      } else if (rootSegment === 'location') {
        const locFormatted = subSegment.replace(/-/g, ' ');
        const capLoc = locFormatted.charAt(0).toUpperCase() + locFormatted.slice(1);
        setSelectedLocation(capLoc || 'Lucknow');
        setActivePage('location');
      } else if (rootSegment === 'blog') {
        if (subSegment) {
          setSelectedBlogSlug(subSegment);
          setActivePage('blog-post');
        } else {
          setActivePage('blog');
        }
      } else if (pageParam) {
        applyRoute(pageParam as PageView, idParam);
      } else {
        setActivePage('home');
      }
    };

    const applyRoute = (page: PageView, id: string) => {
      if (page === 'service-details') {
        setSelectedServiceId(id);
      } else if (page === 'graphic-details') {
        setSelectedGraphicCat(id);
      } else if (page === 'design-item') {
        setSelectedDesignItem(id);
      } else if (page === 'blog-post') {
        setSelectedBlogSlug(id);
      } else if (page === 'industry-detail') {
        setSelectedIndustrySlug(id);
      } else if (page === 'location') {
        setSelectedLocation(id || 'Lucknow');
      }
      setActivePage(page);
    };

    syncRoute();
    window.addEventListener('popstate', syncRoute);
    return () => window.removeEventListener('popstate', syncRoute);
  }, []);

  // Dynamic SEO Metadata Manager
  useEffect(() => {
    let title = 'Digital Digix — Performance Marketing, Generative Engine Optimization & Web Applications';
    let description = 'Digital Digix is India\'s leading digital growth agency specializing in Performance Marketing, Generative Engine Optimization (GEO/AEO), high-converting web applications, and B2B growth funnels.';

    switch (activePage) {
      case 'services':
        title = 'Digital Marketing & Software Services — SEO, GEO, Ads & Development | Digital Digix';
        description = 'Explore full-suite digital marketing services: Performance Marketing, Generative Engine Optimization (GEO), Google/Meta Ads, Custom Web Applications, and WhatsApp Automation.';
        break;
      case 'industries':
        title = '89+ Industry Digital Marketing & Growth Solutions | Digital Digix';
        description = 'Tailored digital marketing, SEO, and lead generation frameworks customized for 89+ industries including Healthcare, Real Estate, E-Commerce, Education, and Tech.';
        break;
      case 'industry-detail':
        const indName = selectedIndustrySlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        title = `${indName || 'Industry'} Digital Marketing & Growth Hub | Digital Digix`;
        description = `Specialized digital marketing, SEO, Meta/Google ads, and revenue acquisition funnels tailored for ${indName || 'your'} industry by Digital Digix.`;
        break;
      case 'portfolio':
        title = 'Client Case Studies & Verified Growth Results | Digital Digix';
        description = 'Discover real-world case studies and ROI metrics from 2,700+ clients scaled across SEO, Google Ads, Meta Ads, and bespoke software development.';
        break;
      case 'blog':
        title = 'Digital Marketing, SEO & Generative AI Insights Blog | Digital Digix';
        description = 'Read 564+ expert articles and pillar guides on SEO, AI search optimization (GEO/AEO), paid media scaling, and digital business strategies.';
        break;
      case 'location':
        title = `Digital Marketing & SEO Agency in ${selectedLocation} | Digital Digix`;
        description = `Local SEO, Performance Marketing, and Google Maps optimization services for businesses in ${selectedLocation} and surrounding regions.`;
        break;
      case 'all-locations':
        title = 'Global Locations & Digital Marketing Centers | Digital Digix';
        description = 'Explore Digital Digix domestic and international marketing offices serving clients across India, the Middle East, the UK, and North America.';
        break;
      case 'smm':
        title = 'Social Media Marketing (SMM) & Viral Reels Strategy | Digital Digix';
        description = 'Full-funnel organic and paid social media management for Instagram, LinkedIn, YouTube, and Facebook designed to build brand authority and generate leads.';
        break;
      case 'about':
        title = 'About Digital Digix — Leadership, Mission & AI-Powered Growth';
        description = 'Learn about Digital Digix leadership, engineering philosophy, and performance-first methodology driving 2,700+ successful brand transformations.';
        break;
      case 'contact':
        title = 'Contact Digital Digix — Free 30-Min Strategy Consultation';
        description = 'Schedule a free 30-minute growth strategy session with Digital Digix marketing experts. No lock-in contracts, post-pay options available.';
        break;
      default:
        break;
    }

    document.title = title;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Update OpenGraph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

    // Update Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    const currentUrl = window.location.origin + window.location.pathname;
    canonical.setAttribute('href', currentUrl);
  }, [activePage, selectedLocation]);

  const handleThemeToggle = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

  const handleNavigate = (page: PageView, slug?: string) => {
    if (page === 'blog-post' && slug) {
      setSelectedBlogSlug(slug);
    }
    if (page === 'service-details' && slug) {
      setSelectedServiceId(slug);
    }
    if (page === 'industry-detail' && slug) {
      setSelectedIndustrySlug(slug);
    }
    if (page === 'graphic-details' && slug) {
      setSelectedGraphicCat(slug);
    }
    if (page === 'design-item' && slug) {
      setSelectedDesignItem(slug);
    }
    if (page === 'location' && slug) {
      setSelectedLocation(slug);
    }

    const cleanUrl = buildCleanUrl(page, slug);
    window.history.pushState(null, '', cleanUrl);
    
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectLocation = (loc: string) => {
    setSelectedLocation(loc);
    handleNavigate('location', loc);
  };

  const handleOpenStrategyModal = (note?: string) => {
    setStrategyModalNote(note || '');
    setIsStrategyModalOpen(true);
  };

  return (
    <div className="app-container" data-theme={theme}>
      {/* GLASSMORPHIC HEADER */}
      <Header
        activePage={activePage}
        onNavigate={handleNavigate}
        currency={currency}
        onCurrencyChange={setCurrency}
        theme={theme}
        onThemeToggle={handleThemeToggle}
        onOpenStrategyModal={() => handleOpenStrategyModal()}
        onOpenLeaderModal={setActiveLeaderModal}
      />

      {/* MAIN ROUTER BODY */}
      <main>
        {activePage === 'home' && (
          <>
            <Hero
              onOpenStatModal={setActiveStatModal}
              onOpenStrategyModal={() => handleOpenStrategyModal()}
              onNavigateServices={() => handleNavigate('services')}
              onNavigatePortfolio={() => handleNavigate('portfolio')}
            />
            <div style={{ backgroundColor: 'var(--bg-main)', paddingTop: '4rem', paddingBottom: '2rem' }}>
              <InteractiveStatsBar
                onSelectLocation={handleSelectLocation}
                onOpenStrategyModal={handleOpenStrategyModal}
              />
            </div>
            <ServicesGrid
              onOpenStrategyModal={handleOpenStrategyModal}
              onNavigate={handleNavigate}
              backgroundColor="#FFFFFF"
            />
            <AboutUs
              onOpenLeaderModal={setActiveLeaderModal}
              onOpenStrategyModal={handleOpenStrategyModal}
              onSelectLocation={handleSelectLocation}
              backgroundColor="var(--bg-main)"
            />
            <WorkShowcaseMarquee backgroundColor="#FFFFFF" />
            <ClientVoices backgroundColor="var(--bg-main)" />
            <WhyChooseUs
              onSelectLocation={handleSelectLocation}
              onOpenStrategyModal={handleOpenStrategyModal}
              backgroundColor="#FFFFFF"
            />
            <ContactSection backgroundColor="var(--bg-main)" />
          </>
        )}

        {activePage === 'about' && (
          <AboutUs
            onOpenLeaderModal={setActiveLeaderModal}
            onOpenStrategyModal={handleOpenStrategyModal}
          />
        )}

        {activePage === 'services' && (
          <ServicesPage
            onNavigate={handleNavigate}
            onOpenStrategyModal={handleOpenStrategyModal}
          />
        )}

        {activePage === 'industries' && (
          <IndustriesPage
            onNavigate={handleNavigate}
            onOpenStrategyModal={handleOpenStrategyModal}
          />
        )}

        {activePage === 'industry-detail' && (
          <IndustryDetailPage
            industryId={selectedIndustrySlug}
            onNavigate={handleNavigate}
            onOpenStrategyModal={handleOpenStrategyModal}
          />
        )}

        {activePage === 'portfolio' && (
          <PortfolioPage
            onNavigate={handleNavigate}
            onOpenStrategyModal={handleOpenStrategyModal}
          />
        )}

        {activePage === 'smm' && (
          <SmmPage
            onNavigate={handleNavigate}
            onOpenStrategyModal={handleOpenStrategyModal}
          />
        )}

        {activePage === 'contact' && (
          <ContactSection />
        )}

        {activePage === 'location' && (
          <LocationPage
            locationName={selectedLocation}
            onNavigate={handleNavigate}
            onOpenStrategyModal={handleOpenStrategyModal}
          />
        )}

        {activePage === 'blog' && (
          <BlogPage
            onNavigate={handleNavigate}
            onOpenStrategyModal={handleOpenStrategyModal}
          />
        )}

        {activePage === 'blog-post' && (
          <BlogPostPage
            slug={selectedBlogSlug}
            onNavigate={handleNavigate}
            onOpenStrategyModal={handleOpenStrategyModal}
          />
        )}

        {activePage === 'service-details' && (
          <ServiceDetailPage
            serviceId={selectedServiceId}
            onNavigate={handleNavigate}
            onOpenStrategyModal={handleOpenStrategyModal}
          />
        )}

        {activePage === 'graphic-details' && (
          <GraphicDetailPage
            categoryId={selectedGraphicCat}
            onNavigate={handleNavigate}
            onOpenStrategyModal={handleOpenStrategyModal}
          />
        )}

        {activePage === 'design-item' && (
          <GraphicItemDetailPage
            itemId={selectedDesignItem}
            onNavigate={handleNavigate}
            onOpenStrategyModal={handleOpenStrategyModal}
          />
        )}

        {activePage === 'all-locations' && (
          <LocationsDirectoryPage
            onNavigate={handleNavigate}
            onSelectLocation={handleSelectLocation}
          />
        )}
      </main>

      {/* FOOTER WITH DOMESTIC & INTERNATIONAL LOCATIONS */}
      <Footer
        onNavigate={handleNavigate}
        onSelectLocation={handleSelectLocation}
        onOpenLocationsModal={() => setIsLocationsModalOpen(true)}
      />

      {/* POP-UP MODALS */}
      <LocationsModal
        isOpen={isLocationsModalOpen}
        onClose={() => setIsLocationsModalOpen(false)}
        onSelectLocation={handleSelectLocation}
      />

      <StatCardModal
        statType={activeStatModal}
        onClose={() => setActiveStatModal(null)}
        onOpenStrategyModal={handleOpenStrategyModal}
      />

      <LeadershipModal
        person={activeLeaderModal}
        onClose={() => setActiveLeaderModal(null)}
        onOpenStrategyModal={handleOpenStrategyModal}
        onNavigate={handleNavigate}
      />

      <StrategyModal
        isOpen={isStrategyModalOpen}
        onClose={() => setIsStrategyModalOpen(false)}
        planName={strategyModalNote}
      />

      <GlobalSearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
      />

      {/* Floating social media quick contact icons */}
      <FloatingSocials />

      {/* Atmospheric Cursor Light Ray Follower */}
      <CursorLightRay />
    </div>
  );
};
export default App;
