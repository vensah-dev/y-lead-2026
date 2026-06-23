import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import zephyrIcon from "@/public/icons/icon.svg";
import Image from "next/image";
import Link from 'next/link';


const Footer = () => {
  return (
    <footer className="py-6 px-8 border-t border-border-color bg-footer-bg">

        <div className="flex gap-4 items-center justify-between sm:max-w-7xl sm:mx-auto w-full ">

          <div className="flex h-12 gap-2">
            <Image 
              src={zephyrIcon}
              alt="Y.LEAD Logo" 
              className="h-full w-auto"
            />

            <div className="flex flex-col justify-center px-4 max-sm:hidden ">
              <p className="text-footer-font text-bold text-2xl font-display">
                Y.LEAD 2026
              </p>
              <p className="text-footer-font/75 text-sm">
                Zephyr: Shaping the Winds of Change
              </p>
            </div>

          </div>



          <div className="h-12 items-center justify-center flex py-8">
            <div className="h-10 flex gap-5 px-4 items-center">
              
              {/* Instagram */}
              <Link href="https://www.instagram.com/y.leadofficial" target="_blank" className="h-full block text-footer-font hover:opacity-75 transition-opacity duration-300 scale-75">
                <svg className="h-full w-auto" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </Link>
              
              {/* YouTube */}
              <Link href="https://www.youtube.com/@y.leadseminar" target="_blank" className="h-full block text-footer-font hover:opacity-75 transition-opacity duration-300">
                <svg className="h-full w-auto" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </Link>
              
              {/* Mail (Heroicons style - perfectly balanced) */}
              <Link href="mailto:y.lead2016media@gmail.com" target="_blank" className="h-full block text-footer-font hover:opacity-75 transition-opacity duration-300 scale-75">
                <svg className="h-full w-auto" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0">
                  <path d="M15.61 12c0 1.99-1.62 3.61-3.61 3.61-1.99 0-3.61-1.62-3.61-3.61 0-1.99 1.62-3.61 3.61-3.61 1.99 0 3.61 1.62 3.61 3.61M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12c2.424 0 4.761-.722 6.76-2.087l.034-.024-1.617-1.879-.027.017A9.494 9.494 0 0 1 12 21.54c-5.26 0-9.54-4.28-9.54-9.54 0-5.26 4.28-9.54 9.54-9.54 5.26 0 9.54 4.28 9.54 9.54a9.63 9.63 0 0 1-.225 2.05c-.301 1.239-1.169 1.618-1.82 1.568-.654-.053-1.42-.52-1.426-1.661V12A6.076 6.076 0 0 0 12 5.93 6.076 6.076 0 0 0 5.93 12 6.076 6.076 0 0 0 12 18.07a6.02 6.02 0 0 0 4.3-1.792 3.9 3.9 0 0 0 3.32 1.805c.874 0 1.74-.292 2.437-.821.719-.547 1.256-1.336 1.553-2.285.047-.154.135-.504.135-.507l.002-.013c.175-.76.253-1.52.253-2.457 0-6.617-5.383-12-12-12" />
                </svg>
              </Link>

            </div>
          </div>

        </div>

    </footer>
  );
};

export default Footer;