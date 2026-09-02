'use client';

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export const ScrollAnimationProvider: React.FC = () => {
  const pathname = usePathname();

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Auto-tag sections and interactive cards with reveal classes if not already tagged
    const autoTagSelectors = [
      '.section-header',
      '.hero-grid > *',
      '.responsive-3-grid > *',
      '.responsive-4-grid > *',
      '.responsive-2-grid > *',
      '.bv-card',
      '.work-showcase-card',
      '.stats-counter-card',
      '.interactive-stats-bar',
      '.footer-main-grid > *',
      '[data-animate]'
    ];

    const elementsToObserve: HTMLElement[] = [];

    // Find all explicitly tagged elements
    document.querySelectorAll<HTMLElement>('.reveal-on-scroll, .reveal-fade, .reveal-slide-left, .reveal-slide-right, .reveal-scale').forEach(el => {
      elementsToObserve.push(el);
    });

    // Auto-discover and apply smooth reveal classes
    autoTagSelectors.forEach(selector => {
      const found = document.querySelectorAll<HTMLElement>(selector);
      found.forEach((el, idx) => {
        if (!el.classList.contains('reveal-on-scroll') && 
            !el.classList.contains('reveal-fade') && 
            !el.classList.contains('reveal-slide-left') && 
            !el.classList.contains('reveal-slide-right') &&
            !el.classList.contains('is-revealed')) {
          
          el.classList.add('reveal-on-scroll');
          
          // Apply stagger delays for grid items (up to 4 in a row)
          const delayMod = (idx % 4) * 80;
          if (delayMod > 0) {
            el.style.transitionDelay = `${delayMod}ms`;
          }
          
          elementsToObserve.push(el);
        }
      });
    });

    // Intersection Observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          // Once revealed, unobserve to maintain high performance
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.08
    });

    // Observe all elements
    elementsToObserve.forEach(el => {
      // If element is already in viewport on initial load, reveal immediately
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('is-revealed');
      } else {
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  return null;
};
