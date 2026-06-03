"use client";

import { useEffect, useRef } from 'react';

export function ScrollAnimation() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          
          // Add animation class to trigger the fade-in effect
          element.classList.add('animate-fade-in-up');
          element.classList.remove('opacity-0', 'translate-y-6');
          
          // Remove observer from this element to prevent re-triggering
          if (observerRef.current) {
            observerRef.current.unobserve(element);
          }
        }
      });
    };

    observerRef.current = new IntersectionObserver(handleIntersection, observerOptions);

    // Observe all elements with data-animate attribute
    const animatedElements = document.querySelectorAll('[data-animate]');
    
    // Add sequential delay to elements
    animatedElements.forEach((element, index) => {
      const delay = 100; // 100ms delay between each element
      element.setAttribute('style', `transition-delay: ${delay}ms; ${element.getAttribute('style') || ''}`);
      observerRef.current?.observe(element);
    });

    // Cleanup
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return null;
}