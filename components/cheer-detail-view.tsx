import React from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import Navbar from './navbar';
import Footer from './footer';

const CheerDetailView = (
  {
    cheer,
  }:{
    cheer: any,
  }) => {
  return (
    <div>
        <Navbar />
        <div className="overflow-hidden relative min-h-screen">

            <div className={`h-[250vw] w-[250vw] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 grid xl:grid-cols-20 xl:grid-rows-20 grid-cols-10 grid-rows-10 gap-4 ${cheer.bgColor} opacity-25 origin-center rotate-45`}>
                {Array.from({ length: 400 }).map((_, i) => {
                    // Item indices above 99 only show on xl screens (20x20)
                    // Indices 0-99 show on all screens (10x10)
                    const isExtraItem = i >= 100;

                    return (
                        <div 
                            key={i} 
                            className={`items-center justify-center text-5xl md:text-7xl opacity-50 origin-center animate-[spin_20s_linear_infinite] select-none
                                ${isExtraItem ? 'hidden xl:flex' : 'flex'}
                            `}
                        >
                            {cheer.emoji}
                        </div>
                    );
                })}
            </div>

            <div className="relative h-full max-w-7xl w-wrap mx-auto mt-32 p-8">
                <h1 className="text-7xl font-bold mb-8">
                    {cheer.title}
                </h1>
                <h1 className="whitespace-pre-line text-base text-font-secondary w-wrap mb-32">
                    {cheer.content}
                </h1>
            </div>

        </div>
    </div>
  );
};

export default CheerDetailView;