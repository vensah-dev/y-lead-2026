import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

import { SecondaryButton } from "@/components/secondary-button";
import { PrimaryButton } from "@/components/primary-button";

import Image from "next/image";
import heroBG from "@/public/images/hero-bg.webp";
import heroFG from "@/public/images/hero-fg.png";
import yleadIcon from "@/public/icons/ylead-icon.png";
import icon from "@/public/icons/icon.svg";
import { ScrollAnimation } from "@/components/scroll-animation";
import SplitSection from "@/components/split-section";
import GlowingImage from "@/components/glowing-image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background-primary">
      <ScrollAnimation />

      {/* Hero */}
      <div className="relative h-screen w-screen self-center self-justify">

        <div className="absolute z-0 h-screen w-screen">
          <Image src={heroBG} quality={100} alt="Hero Background" fill className="object-cover object-top self-start"/>
        </div>
        
        <section className="absolute items-start justify-center xl:pt-[4%] lg:pt-[10%] md:pt-[30%] max-lg:landscape:pt-[88px] pt-[calc(88px+5vh)] text-center h-full w-full flex">
        
          <div className="flex w-full justify-center z-10 opacity-90">
              <h1 
                className="text-center w-full text-[20vw] font-bold text-accent-primary mb-3 leading-[1.15] animate-[fade-in-up_0.6s_ease-out_forwards]"
              >
                Y.LEAD 2026
              </h1>
          </div>

        </section>

        <div className="absolute z-10 h-screen w-screen">
          <Image src={heroFG} quality={100} alt="Hero Foreground" fill className="object-cover object-top self-start"/>
        </div>

        <div className="relative z-50">
          <Navbar/>
        </div>
      </div>

      {/* about */}
      <SplitSection 
        left={
          <div className="relative h-full aspect-square">
            <GlowingImage image={yleadIcon} />
          </div>
        }
        right={
          <div className="flex flex-col">
            <h1 
              className="text-6xl font-bold mb-4 text-font-primary"
              data-animate
            >
              Y.LEAD 2026
            </h1>
            <h2 
              className="text-justify text-weight-light text-font-secondary"
              data-animate
            >
              Since 2013, the Y.LEAD (Youth. Leverage Educate Actuate Develop) Seminar has been
              one of River Valley High School's signature programmes, attracting more than 600
              participants from both local and overseas schools each year. The objective of the
              seminar is to empower young people aged 15 to 17 years old to create positive change
              in their community by equipping them with values-based leadership skills.
            </h2>
          </div>
        }
        
        addClassName="bg-background-primary"

      />

      {/* theme */}
      <SplitSection 
        left={
          <div className="relative h-full aspect-256/169">
            <GlowingImage image={icon} />
          </div>
        }
        right={
          <div className="flex flex-col items-start">
            <h1 data-animate className="text-6xl font-bold mb-4 text-font-primary">
              Theme
            </h1>

            <h1 data-animate className="text-[1.7rem] font-semibold mb-4 text-font-secondary">
              Zephyr: Shaping the Winds of Change
            </h1>

            <h2 
              className="text-justify text-weight-light text-font-secondary"
              data-animate
            >
              Y.LEAD aims to nurture our 
              participants who not only lead teams effectively but also think critically 
              about real-world challenges. Zephyr reflects this by encouraging participants 
              to recognise these evolving and uncertain “winds” and take ownership in 
              understanding and shaping them through informed dialogue and action as they 
              embark on their own leadership journeys.

            </h2>

            <div className="pt-8 xl:max-w-sm">
              <PrimaryButton 
                text={
                  <>More about the Theme</>
                } 
                href="/theme" 
              />
            </div>
          </div>
        }
      />

      {/* footer */}
      <Footer />
    </div>
  );
}
