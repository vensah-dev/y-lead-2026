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
import Link from "next/link";

export function EmbedWithTitle(
  {
    title,
    href,
  }:{
    title: string,
    href: string,
  }
  ){

  return(
    <div>


      <div className="z-0">
        <GlowingEmbed embedUrl={href} />
      </div>

      <div className="flex flex-col items-center pt-12">
        <Link data-animate className="text font-display xl:text-5xl text-4xl max-sm:text-3xl font-bold hover:text-font-primary/50 text-center w-full underline"
        href={href}>
          {title}
        </Link>
      </div>
    </div>
  )
}

export default function Media() {

  return (
    <div className="min-h-screen flex flex-col bg-background-primary">
      <ScrollAnimation />
      <Navbar/>

      {/* <h1 data-animate className="max-w-7xl px-8 mx-auto text-7xl text-center text-font-primary font-display font-bold py-2.5 pb-32">Media</h1> */}
      
      <div className="w-screen bg-background-primary">

        <h1 className="xl:text-7xl text-6xl max-sm:text-5xl font-bold text-center py-32 font-display">
          Media
        </h1>

        <div className="max-w-7xl px-8 mx-auto py-32 grid grid-cols-2 max-md:grid-cols-1 gap-48">

          <EmbedWithTitle title="Y.LEAD Storyline Video" href="https://www.youtube.com/embed/DZLfYOHS7zw?si=pRAk2kAK45Ik-RoG&amp;controls=0"/>
          <EmbedWithTitle title="Y.LEAD Storyline Video" href="https://www.youtube.com/embed/8c31JGhz_n0?si=QyAT-LpRoO2quYU3"/>
          <EmbedWithTitle title="L+E Padlet" href="https://padlet.com/phoebe_tan_en_minn/l-e-y-lead-2026-collaborative-inquiry-ajb2ixnua615vpkh"/>
          <EmbedWithTitle title="A+D Padlet" href="https://padlet.com/phoebe_tan_en_minn/a-d-y-lead-2026-collaborative-inquiry-i98oa4sxk37p4sru"/>

        </div>

      </div>


      {/* footer */}
      <Footer />
    </div>
  );
}
