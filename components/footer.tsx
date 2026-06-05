import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Link from 'next/link';


const Footer = () => {
  return (
    <footer className="py-6 px-4 sm:px-8 border-t border-border-color bg-footer-bg">

        <div className="flex gap-4 items-center justify-center max-w-7xl mx-auto w-full divide-x-[0.1rem] divide-background-primary/50 divide-solid">

          <div className="h-12 items-center justify-center flex px-4 py-8">
            <div className="h-8 flex gap-4 px-4">
              <Link href="https://www.instagram.com/y.leadofficial" target="_blank">
                <FaInstagram className="h-full w-auto text-footer-font hover:opacity-75 transition-opacity duration-300" />
              </Link>
              <Link href="https://www.youtube.com/@y.leadseminar" target="_blank">
                <FaYoutube className="h-full w-auto aspect-10/7 text-footer-font hover:opacity-75 transition-opacity duration-300" />
              </Link>
            </div>
          </div>

          <div className="h-12 flex flex-col justify-center px-4">
            
            <p className="text-footer-font text-bold text-2xl font-display">
              Y.LEAD 2026
            </p>

            <p className="text-footer-font/75 text-sm">
              Zephyr: Shaping the Winds of Change
            </p>

          </div>

        </div>

    </footer>
  );
};

export default Footer;