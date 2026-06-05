'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import icon from '@/public/icons/icon.svg';

const Navbar = () => {
  const navItems = [
    { name: 'About', href: '/' },
    { name: 'Theme', href: '/theme' },
    { name: 'Programmes', href: '/programmes' },
    { name: 'Cheers', href: '/cheers' },
    // { name: 'Media', href: '/media' },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="px-4 sm:px-8 ">
      <div className="h-22 mx-4 flex justify-between items-center">
        <div className="relative h-full aspect-square flex items-center">
          <Image 
            src={icon}
            alt="Y.LEAD Logo" 
            fill
            className="mr-2"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link 
              key={item.name}
              href={item.href}
              className={`font-display text-sm ${
                pathname === item.href 
                  ? 'text-accent-primary' 
                  : 'text-gray-600 hover:text-accent-primary transition-colors'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger Menu */}
        <button 
          className="md:hidden text-gray-600"
          onClick={() => setIsMenuOpen(true)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Modal */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
          <button 
            className="absolute top-6 right-6 text-gray-600"
            onClick={() => setIsMenuOpen(false)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="flex flex-col items-center space-y-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-2xl ${
                  pathname === item.href 
                    ? 'text-accent-primary' 
                    : 'text-gray-900 hover:text-accent-primary transition-colors'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;