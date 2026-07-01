'use client'

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
  const prefix = process.env.NODE_ENV === 'production' ? '' : '';

  const themeSections = [
    {
      title: "Arts, Culture & Heritage",
      image: artsMini,
      content: [
        "Learning how arts and culture manifest in new forms with the emergence of technology",
        "Loss of culture when traditions are becoming more modernised",
        "Actions, both the government and we can take, to maintain arts and culture as an integral part of society",
        "Strengthening our social identity through arts and culture"
      ]
    },
    {
      title: "Environment & Sustainability",
      image: sustainableMini,
      content: [
        "Progress in the green economy and technologies",
        "Governmental policies to ensure sustainable development",
        "Fostering environmental stewardship among citizens",
        "Lower SES groups may be disproportionately affected during the pursuit of environmental sustainability"
      ]
    },
    {
      title: "Regional and Global Affairs",
      image: miniAffair,
      content: [
        "Understanding how rising geopolitical tensions and conflicts shape global stability, and their impact on small, interconnected states such as Singapore",
        "Shift from multilateralism to unilaterism, and its implications on a rule-based world order",
        "Exploring the role of international cooperation in addressing global challenges",
        "How diplomacy and collective action can foster more stable and peaceful international relations",
        "Reflecting on the role of individuals in mitigating the impacts of global conflicts on Singapore"
      ]
    },
    {
      title: "Innovation & AI",
      image: techMini,
      content: [
        "AI boosts productivity in our economy and brings convenience to our daily lives",
        "Tech advancements displace jobs and also diminish critical thinking",
        "SG Smart Nation initiatives, and how we can innovate better ways to engage the elderly who were left behind, as they are unable to utilise new technologies",
        "Combating AI Deepfakes",
        "National AI Council being set up"
      ]
    },
    {
      title: "Social Compact",
      image: socialMini,
      content: [
        "Equipping and empowering more youths to be able to voice out, participate, and push out initiatives to benefit the wider community.",
        "Catalysing social mobility among marginalised groups",
        "Policies that reduce the rich-poor divide to alleviate poverty, such as:",
        "Education",
        "Grants & Subsidies",
        "Identifying the disconnect between the needs of the marginalised groups of society and the existing aid provided"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background-primary">
      <ScrollAnimation />

      {/* Hero */}
      <div className="flex h-screen w-screen self-center self-justify">
        <div className="absolute w-screen z-10">
          <Navbar/>
        </div>


        <div className="flex items-center justify-center h-screen portrait:w-full aspect-square max-w-3xl m-auto">
          
          <video
            autoPlay
            muted
            playsInline
            className=" h-full w-full image-cover pointer-events-none mix-blend-multiply"
            preload="auto"
          >
            {/* remember that the .MOV is case sensitive */}
            {/* mp4 will be main and fallback is quicktime for iOS and safari bs */}
            <source src={`${prefix}/images/zephyr-animation.MOV`} type="video/mp4" />
            <source src={`${prefix}/images/zephyr-animation.MOV`} type="video/quicktime" />

            Your browser does not support the video tag.
          </video>
        </div>
        
      </div>

      {/* Theme sections */}
      {themeSections.map((section, index) => (
      <SplitSection 
          key={index}
        left={
          <div className="relative md:h-full max-md:w-full aspect-square overflow-hidden rounded-4xl">
              <GlowingImage image={section.image} />
          </div>
        }
        right={
          <div className="flex flex-col">
            <h1 
              className="font-display text-6xl font-bold mb-12 text-font-primary"
              data-animate
            >
                {section.title}
            </h1>
            <h2 
              className="text-justify text-weight-light text-font-secondary"
              data-animate
            >
              <ul className="list-disc list-inside space-y-3 text-left">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
              </ul>
            </h2>
          </div>
        }
          addClassName={`${index % 2 === 0 ? "bg-background-secondary" : "bg-background-primary"} py-32`}
      />
      ))}

      {/* footer */}
      <Footer />
    </div>
  );
}

