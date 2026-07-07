import React from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';

const GlowingImage = (
  {
    image,
    glow = 0.0,
    rounded,
  }:{
    image: StaticImageData,
    glow?: number,
    rounded?: string,
  }) => {
  return (
    <div className="relative h-full w-full">

      <div className={`w-full h-full flex items-center justify-center blur-2xl overflow-hidden rounded-3xl ${rounded}`}>
        <Image
          src={image}
          alt="Y.LEAD Logo Glow"
          fill
          className={`object-cover rounded-3xl overflow-clip ${rounded}`} 
        />
      </div>

      <div className={`absolute inset-0 flex items-center justify-center`} style={{ transform: `scale(${(100 - (glow || 0))/100})` }}>
        <Image
          src={image}
          alt="Y.LEAD Logo"
          fill
          className={`object-cover rounded-3xl overflow-clip ${rounded}`} 
        />
      </div>

    </div>
  );
};

export default GlowingImage;