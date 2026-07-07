import React from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';

const GlowingEmbed = (
  {
    embedUrl,
    aspect,
    glowBrightness,
  }:{
    embedUrl: string,
    aspect?: string,
    glowBrightness?: string
  }) => {
  return (
    <div className={`relative ${aspect || "aspect-video w-full"} mx-auto`}> 
      <div className={`absolute z-0 iframe-container mx-auto ${aspect || "aspect-video w-full"} ${glowBrightness || ""} rounded-2xl overflow-hidden blur-3xl pointer-events-none`} data-animate>
        <iframe
          src={embedUrl}
          title="External Content Layout"
          width="100%"
          height="100%"
          loading="lazy"
          sandbox="allow-scripts allow-same-origin"
          style={{ border: 'none' }}
        />
      </div>

      <div className={`z-10 iframe-container mx-auto ${aspect || "aspect-video w-full"} rounded-3xl overflow-hidden`} data-animate>
        <iframe
          src={embedUrl}
          title="External Content Layout"
          width="100%"
          height="100%"
          loading="eager"
          sandbox="allow-scripts allow-same-origin"
          style={{ border: 'none' }}
        />
      </div>

    </div>
  );
};

export default GlowingEmbed;