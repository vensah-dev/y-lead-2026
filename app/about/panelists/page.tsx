import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import zephyrIcon from "@/public/icons/icon.svg";
import Image from "next/image";
import Link from 'next/link';

import { ScrollAnimation } from "@/components/scroll-animation";
import SplitSection from "@/components/split-section";

import { panelistData } from "@/lib/panelist-data";
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function AboutPanelists() {
  return (
      <div className="w-full bg-background-primary">
        <Navbar />
        <ScrollAnimation />
          <div className="max-w-7xl mx-auto px-8">
            <h1 data-animate className=" py-16 my-32 text-center font-display xl:text-7xl text-6xl max-sm:text-5xl font-bold text-font-primary w-full border-b border-background-tertiary">
              More About Our Panelists
            </h1>
          </div>

          {
            panelistData.map((data: any, index: any) => {

              return (
                <div key={index} className={`${index % 2 == 1 ? 'bg-background-secondary' : 'bg-background-primary'} py-32 w-screen`} data-animate>

                  <SplitSection
                    left={
                      <div className="relative w-[20vw] max-md:w-full aspect-square rounded-full overflow-hidden">
                        <Image
                          src={data.image}
                          alt={data.name}
                          fill
                          className="object-cover drop-shadow-[0_0px_50px_rgba(0,0,0,1)] drop-shadow-font-primary/7"
                        />
                      </div>
                    }
                    right={

                      <div>
                        <h1 data-animate className="font-display xl:text-7xl text-6xl max-sm:text-5xl mb-6 font-bold text-font-primary capitalize">
                          {data.name.toLowerCase()}
                        </h1>
                        <h2 data-animate className="font-display text-3xl mb-6 font-semibold text-font-primary">
                          {data.description}
                        </h2>
                      </div>

                    }
                    addClassName="w-screen p-0"
                  />

                  <div className="max-w-7xl mx-auto px-8 mt-32 border-b border-t border-background-tertiary">
                    <h1 data-animate className="py-8 text-font-primary">
                      {data.bio}
                    </h1>

                  </div>

                </div>
              );
            })
          }

        <Footer />

      </div>
  );
};

 
