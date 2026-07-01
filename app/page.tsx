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
import chairspic from "@/public/images/chairs-pic.avif";

import Link from "next/link";

import { InstagramButton } from "@/components/social-buttons";

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

              <div className="pt-8 flex h-[5rem] gap-2">
                <PrimaryButton 
                  text={
                    <>More about the theme</>
                  } 
                  href="/about/organising-committee" 
                />
                
                <InstagramButton href="https://www.instagram.com/p/DZrD5LpD7ZE/?img_index=2"/>
                
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

              <div className="pt-8 flex gap-2 h-[5rem]">
                <PrimaryButton 
                  text={
                    <>More about us</>
                  } 
                  href="/about/organising-committee" 
                />

                <InstagramButton href="https://www.instagram.com/p/DZ61QSevApK/"/>

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
