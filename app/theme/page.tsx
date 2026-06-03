import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

import { SecondaryButton } from "@/components/secondary-button";
import { PrimaryButton } from "@/components/primary-button";

import Image from "next/image";
import heroBG from "@/public/images/hero-bg.png";
import heroFG from "@/public/images/hero-fg.png";
import yleadIcon from "@/public/icons/ylead-icon.png";
import icon from "@/public/icons/icon.svg";
import artsMini from "@/public/images/arts-mini.png";
import socialMini from "@/public/images/social-mini.png";
import sustainableMini from "@/public/images/sustainable-mini.png";
import miniAffair from "@/public/images/mini-affair.png";
import techMini from "@/public/images/tech-mini.png";


import { ScrollAnimation } from "@/components/scroll-animation";
import SplitSection from "@/components/split-section";
import GlowingImage from "@/components/glowing-image";

export default function Theme() {
  const prefix = process.env.NODE_ENV === 'production' ? '/y-lead-2026/public' : '';
  return (
    <div className="min-h-screen flex flex-col bg-background-primary">
      <ScrollAnimation />

      {/* Hero */}
      <div className="flex h-screen w-screen self-center self-justify">
        <div className="absolute w-screen z-10 opacity-0 animate-[fade-in_0.6s_ease-out_3.5s_forwards]">
          <Navbar/>
        </div>


        <div className="flex items-center justify-center w-screen aspect-square max-w-3xl m-auto">
          
          <video
            autoPlay
            muted
            playsInline
            className=" h-full w-full image-cover pointer-events-none mix-blend-multiply"
            preload="auto"
          >
            <source src="vensah.dev/y-lead-2026/public/images/zephyr-animation.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        
      </div>

      {/* arts mini */}
      <SplitSection 
        left={
          <div className="relative h-full aspect-square overflow-hidden rounded-4xl">
            <GlowingImage image={artsMini} />
          </div>
        }
        right={
          <div className="flex flex-col">
            <h1 
              className="text-6xl font-bold mb-6 text-font-primary"
              data-animate
            >
              Arts, Culture, & Heritage
            </h1>
            <h2 
              className="text-justify text-weight-light text-font-secondary"
              data-animate
            >
              <ul className="list-disc list-inside space-y-3">
                <li>Learning how arts and culture manifest in new forms with the emergence of technology</li>
                <li>Loss of culture when traditions are becoming more modernised</li>
                <li>Actions, both the government and we can take, to maintain arts and culture as an integral part of society</li>
                <li>Strengthening our social identity through arts and culture</li>
              </ul>

            </h2>
          </div>
        }
      />

      {/* environment mini */}
      <SplitSection 
        left={
          <div className="relative h-full aspect-square overflow-hidden rounded-4xl">
            <GlowingImage image={sustainableMini} />
          </div>
        }
        right={
          <div className="flex flex-col">
            <h1 
              className="text-6xl font-bold mb-6 text-font-primary"
              data-animate
            >
              Environment & Sustainability
            </h1>
            <h2 
              className="text-justify text-weight-light text-font-secondary"
              data-animate
            >
              <ul className="list-disc list-inside space-y-3">
                <li>Progress in the green economy and technologies</li>
                <li>Governmental policies to ensure sustainable development</li>
                <li>Fostering environmental stewardship among citizens</li>
                <li>Lower SES groups may be disproportionately affected during the pursuit of environmental sustainability</li>
              </ul>
            </h2>
          </div>
        }
        
        addClassName="bg-background-primary"
      />

      {/* regional and global affairs mini */}
      <SplitSection 
        left={
          <div className="relative h-full aspect-square overflow-hidden rounded-4xl">
            <GlowingImage image={miniAffair} />
          </div>
        }
        right={
          <div className="flex flex-col">
            <h1 
              className="text-6xl font-bold mb-6 text-font-primary"
              data-animate
            >
              Regional and Global Affairs
            </h1>
            <h2 
              className="text-justify text-weight-light text-font-secondary"
              data-animate
            >
              <ul className="list-disc list-inside space-y-3">
                <li>Understanding how rising geopolitical tensions and conflicts shape global stability, and their impact on small, interconnected states such as Singapore</li>
                <li>Shift from multilateralism to unilaterism, and its implications on a rule-based world order</li>
                <li>Exploring the role of international cooperation in addressing global challenges</li>
                <li>How diplomacy and collective action can foster more stable and peaceful international relations</li>
                <li>Reflecting on the role of individuals in mitigating the impacts of global conflicts on Singapore</li>
              </ul>
            </h2>
          </div>
        }
      />

      {/* innovation mini */}
      <SplitSection 
        left={
          <div className="relative h-full aspect-square overflow-hidden rounded-4xl">
            <GlowingImage image={techMini} />
          </div>
        }
        right={
          <div className="flex flex-col">
            <h1 
              className="text-6xl font-bold mb-6 text-font-primary"
              data-animate
            >
              Innovation & AI
            </h1>
            <h2 
              className="text-justify text-weight-light text-font-secondary"
              data-animate
            >
              <ul className="list-disc list-inside space-y-3">
                <li>AI boosts productivity in our economy and brings convenience to our daily lives</li>
                <li>Tech advancements displace jobs and also diminish critical thinking</li>
                <li>SG Smart Nation initiatives, and how we can innovate better ways to engage the elderly who were left behind, as they are unable to utilise new technologies</li>
                <li>Combating AI Deepfakes</li>
                <li>National AI Council being set up</li>
              </ul>
            </h2>
          </div>
        }
        
        addClassName="bg-background-primary"
      />

      {/* social mini */}
      <SplitSection 
        left={
          <div className="relative h-full aspect-square overflow-hidden rounded-4xl">
            <GlowingImage image={socialMini} />
          </div>
        }
        right={
          <div className="flex flex-col">
            <h1 
              className="text-6xl font-bold mb-6 text-font-primary"
              data-animate
            >
              Social Compact
            </h1>
            <h2 
              className="text-justify text-weight-light text-font-secondary"
              data-animate
            >
              <ul className="list-disc list-inside space-y-3">
                <li>Equipping and empowering more youths to be able to voice out, participate, and push out initiatives to benefit the wider community.</li>
                <li>Catalysing social mobility among marginalised groups</li>
                <li>Policies that reduce the rich-poor divide to alleviate poverty, such as:
                  <ul className="list-disc marker:text-font-tertiary/50 list-inside pl-6 space-y-1">
                    <li>Education</li>
                    <li>Grants & Subsidies</li>
                  </ul>
                </li>
                <li>Identifying the disconnect between the needs of the marginalised groups of society and the existing aid provided</li>
              </ul>
            </h2>
          </div>
        }
      />

      {/* footer */}
      <Footer />
    </div>
  );
}
