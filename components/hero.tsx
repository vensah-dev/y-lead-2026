"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

// import { PrimaryButton } from "@/components/primary-button";
// import { SecondaryButton } from "@/components/secondary-button";

export function Hero(
  {
    title,
    tagline,
    buttons,
  }:{
    title: React.ReactNode,
    tagline: React.ReactNode,
    buttons?: React.ReactNode[]
  }
  ){

  const titleRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set up scroll animation for hero elements
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          element.classList.add('animate-fade-in-up');
          element.classList.remove('opacity-0', 'translate-y-6');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }
    if (taglineRef.current) {
      observer.observe(taglineRef.current);
    }
    if (buttonsRef.current) {
      observer.observe(buttonsRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
      <section className="flex items-center px-8 text-left h-[calc(100vh-88px)] relative">
        
        <div className="w-7xl 2xl:w-360 mx-auto z-10">

          
            <h1 
              ref={titleRef}
              className="text-5xl md:text-8xl 2xl:text-9xl font-bold text-font-primary mb-3 leading-[1.15]"
              data-animate
            >
              {title}
            </h1>
          

          
            <p 
              ref={taglineRef}
              className="md:max-w-2xl 2xl:max-w-3xl text-base md:text-xl 2xl:text-2xl text-font-secondary mb-8 leading-relaxed w-[70%]"
              data-animate
            >
              {tagline}
            </p>
          

          {buttons && (
            
              <div 
                ref={buttonsRef}
                className="flex flex-col md:flex-row gap-4"
                data-animate
              >
                {buttons}
              </div>
            
          )}

        </div>
      </section>
  );
}