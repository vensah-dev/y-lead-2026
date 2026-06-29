import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

import { SecondaryButton } from "@/components/secondary-button";
import { PrimaryButton } from "@/components/primary-button";

import Image from "next/image";
import heroBG from "@/public/images/hero-bg.avif";
import heroFG from "@/public/images/hero-fg.avif";
import potraitHeroBG from "@/public/images/potrait-hero-bg.avif";
import potraitHeroFG from "@/public/images/potrait-hero-fg.avif";
import yleadIcon from "@/public/icons/ylead-icon.png";
import icon from "@/public/icons/icon.svg";
import { ScrollAnimation } from "@/components/scroll-animation";
import SplitSection from "@/components/split-section";
import GlowingImage from "@/components/glowing-image";
import chairspic from "@/public/images/chairs-pic.png";

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background-primary">
      <ScrollAnimation />
      {/* Hero */}
      <div className="relative h-screen w-screen self-center self-justify">

        <div className="absolute inset-0 z-0 h-screen w-screen">
          <picture>
            <source srcSet={heroBG.src} media="(min-width: 1024px)" />
            <source srcSet={heroBG.src} media="(max-width: 1000px) and (orientation: landscape)" />
            <Image
              src={potraitHeroBG}
              alt="Hero Background"
              fill
              priority
              className="object-cover self-start object-top"
            />
          </picture>
        </div>

        {/* start of hero text */}
        
        <section className="
        absolute items-start justify-center 
        xl:pt-[4%] lg:pt-[10%] md:pt-[30%]
        max-lg:landscape:pt-22 pt-[calc(88px+5vh)] max-lg:portrait:pt-[calc(10vh)] 
        text-center h-full w-full flex">
        
          <div className="flex w-full justify-center z-10 opacity-90">
              <h1 
                className="
                font-display text-center w-full 
                text-[20vw] max-lg:portrait:text-[37vw] 
                font-bold text-accent-primary mb-3 leading-[1.15] animate-[fade-in-up_0.6s_ease-out_forwards]"
              >
                Y.LEAD 2026
              </h1>
          </div>

        </section>

        {/* end of hero text */}

        <div className="absolute inset-0 z-10 h-screen w-screen">
          <picture>
            <source srcSet={heroFG.src} media="(min-width: 1024px)" />
            <source srcSet={heroFG.src} media="(max-width: 1000px) and (orientation: landscape)" />
            <Image
              src={potraitHeroFG}
              alt="Hero Foreground"
              fill
              priority
              className="object-cover object-top self-start"
            />
          </picture>
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
                className="font-display text-6xl font-bold mb-8 text-font-primary"
                data-animate
              >
                Y.LEAD 2026
              </h1>
              <h3 
                className="font-sans text-justify text-weight-light text-font-secondary"
                data-animate
              >
                Since 2013, the Y.LEAD (Youth. Leverage Educate Actuate Develop) Seminar has been
                one of River Valley High School's signature programmes, attracting more than 600
                participants from both local and overseas schools each year. The objective of the
                seminar is to empower young people aged 15 to 17 years old to create positive change
                in their community by equipping them with values-based leadership skills.
              </h3>
            </div>
          }
          
          addClassName="bg-background-primary py-32 "

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
              <h1 data-animate className="font-display text-6xl font-bold mb-6  text-font-primary">
                Theme
              </h1>

              <h1 data-animate className="text-[1.7rem] font-display font-semibold mb-8  text-font-secondary">
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

              <div className="pt-8 grid grid-flow-col auto-cols-max gap-2">
                <PrimaryButton 
                  text={
                    <>More about the theme</>
                  } 
                  href="/about/organising-committee" 
                />

                <Link href="https://www.instagram.com/p/DZrD5LpD7ZE/?img_index=2" target="_blank" className="flex items-center justify-center aspect-square text-accent-secondary hover:opacity-65 transition-opacity duration-300 scale-75">
                  <svg className="h-full w-auto" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </Link>
                
              </div>

            </div>
          }
          addClassName="bg-background-secondary py-32 "
        />

        {/* Chairs note */}
        <SplitSection 
          left={
            <div className="relative h-full aspect-256/169">
              <GlowingImage image={chairspic} />
            </div>
          }
          right={
            <div className="flex flex-col items-start">
              <h1 data-animate className="font-display xl:text-7xl text-6xl max-sm:text-5xl font-bold text-font-primary w-full">
                Chairpersons’ Address
              </h1>
            </div>
          }

          addClassName="bg-background-primary pt-32 pb-12 "
        />
        {/* Chairs note */}
        <SplitSection 
          left={
            <div className="flex flex-col items-start">
              <div data-animate className="text-base text-font-primary w-full py-8 border-t border-b border-background-secondary">
                <p>Dear participants,</p><br/>

                <p>Welcome to Y.LEAD 2026, Zephyr: Shaping the winds of change. We are excited to have all of you join us for four meaningful days of learning, growth, and connection through this seminar.</p><br/>

                <p>Like a zephyr, change may seem subtle at first, yet it possesses the power to shape the world around us. Through our subtheme, AERIS, we hope to broaden your perspectives and deepen your understanding of the evolving social, technological, and global landscape we live in today.</p><br/>

                <p>Through team-based activities, we hope all of you can strengthen your leadership skills, and grow both as individuals and as a team.</p><br/>

                <p>At Y.LEAD, we believe that leadership is not defined solely by titles or positions, but by the willingness to step up, support others, and create positive impact in our communities. Every one of us holds the potential to be a changemaker, and we hope you enter this seminar with an open mind, a curious spirit, and the courage to try.</p><br/>

                <p>Gathering leaders with diverse backgrounds, we encourage everyone to learn from one another, build innovative solutions together, and forge lasting friendships.</p><br/>

                <p>To our future changemakers, we are looking forward to seeing you at Y.LEAD!</p><br/>

                <p>Warmest regards,<br/>
                Lee Boyan, Phoebe Tan En Minn, Ong Yue Yu Valerie, Devendran Venkatesh</p>
              </div>

              <div className="pt-8 grid grid-flow-col auto-cols-max gap-2">
                <PrimaryButton 
                  text={
                    <>More about us</>
                  } 
                  href="/about/organising-committee" 
                />

                <Link href="https://www.instagram.com/p/DZ61QSevApK/" target="_blank" className="flex items-center justify-center aspect-square text-accent-secondary hover:opacity-65 transition-opacity duration-300 scale-75">
                  <svg className="h-full w-auto" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </Link>

              </div>

            </div>
          }

          addClassName="bg-background-primary pb-32 "
        />


      {/* footer */}
      <Footer />
    </div>
  );
}
