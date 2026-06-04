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
        <div className="relative h-full max-w-7xl w-wrap mx-auto mt-32 p-8">
            <h1 className="text-7xl font-bold mb-8">
                {cheer.title}
            </h1>
            <h1 className="whitespace-pre-line text-base text-font-secondary w-wrap mb-32">
                {cheer.content}
            </h1>
        </div>

        <Footer />
    </div>
  );
};

export default CheerDetailView;