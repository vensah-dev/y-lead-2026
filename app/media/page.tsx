'use client'

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import React from "react";

import { SecondaryButton } from "@/components/secondary-button";
import { PrimaryButton } from "@/components/primary-button";

import Image from "next/image";

import adgi from "@/public/images/organising-committee/adgi.avif"
import cere from "@/public/images/organising-committee/cere.avif"
import chairs from "@/public/images/organising-committee/chairs.avif"
import empowerment from "@/public/images/organising-committee/empowerment.avif"
import engagement from "@/public/images/organising-committee/engagement.avif"
import exploration from "@/public/images/organising-committee/exploration.avif"
import fams from "@/public/images/organising-committee/fams.avif"
import media from "@/public/images/organising-committee/media.avif"


import { ScrollAnimation } from "@/components/scroll-animation";
import SplitSection from "@/components/split-section";
import GlowingImage from "@/components/glowing-image";
import GlowingEmbed from "@/components/glowing-embed";

export default function Media() {

  return (
    <div className="min-h-screen flex flex-col bg-background-primary">
      <ScrollAnimation />
      <Navbar/>

      <div className="w-screen">
        {/* <h1 data-animate className="max-w-7xl px-8 mx-auto text-7xl text-center text-font-primary font-display font-bold py-2.5 pb-32">Media</h1> */}
        
        <div className="w-screen bg-background-primary">
          <div className="md:max-w-7xl w-full px-8 mx-auto py-32">
            <div className="flex flex-col items-center pb-32">
              <h1 data-animate className="font-display xl:text-7xl text-6xl max-sm:text-5xl font-bold text-font-primar text-center w-full">
                Y.LEAD Storyline Video
              </h1>
            </div>

            <GlowingEmbed embedUrl="https://www.youtube.com/embed/8c31JGhz_n0?si=QyAT-LpRoO2quYU3" />

            {/* <div className="w-fit mx-auto pt-24">
              <PrimaryButton text="More videos" href="/media"/>
            </div> */}

          </div>
        </div>

      </div>

      {/* footer */}
      <Footer />
    </div>
  );
}
