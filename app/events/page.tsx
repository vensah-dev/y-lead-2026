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
import ScheduleWidget from "@/components/schedule-widget";

export default function Events() {
  const prefix = process.env.NODE_ENV === 'production' ? '/y-lead-2026' : '';
  
  // Day 1 Dataset (Blue Theme)
  const scheduleDataBlue = [
    { time: '08 00', activities: ['Morning Assembly'] },
    { time: '08 20', activities: ['Icebreakers + Group Time'] },
    { time: '10 00', activities: ['Opening Ceremony'] },
    { time: '12 00', activities: ['Lunch'] },
    { time: '13 00', activities: ['Y.Lead Dance'] },
    { time: '14 40', activities: ['Wind Surfer'] },
    { time: '16 20', activities: ['Blow Wind Blow and Wind Chimes Briefing, Admin Briefing, Debrief'] },
    { time: '17 00', activities: ['Dismissal'] },

  ];

  // Day 2 Dataset - Track 1 (Green Theme)
  const scheduleDataGreen = [
    { time: '08 00', activities: ['Morning Assembly'] },
    { time: '08 20', activities: ['Admin Briefing, Cross Winds Briefing, Group Time'] },
    { time: '09 00', activities: ['Blow Wind Blow'] },
    { time: '12 40', activities: ['Lunch'] },
    { time: '13 40', activities: ['Wind Chimes Preparation'] },
    { time: '14 20', activities: ['Wind Chimes'] },
    { time: '15 40', activities: ['Group Time + Reflection'] },
    { time: '16 40', activities: ['Admin Briefing + Debrief'] },
    { time: '17 00', activities: ['Dismissal'] },

  ];

  // Day 2 Dataset - Track 2 (Purple Theme)
  const scheduleDataPurple = [
    { time: '08 00', activities: ['Morning Assembly'] },
    { time: '08 20', activities: ['Admin Briefing, Leadership Collaboration Briefing, Group Time'] },
    { time: '09 00', activities: ['Cross Winds'] },
    { time: '12 40', activities: ['Lunch'] },
    { time: '13 40', activities: ['Wind Chimes Preparation'] },
    { time: '14 20', activities: ['Wind Chimes'] },
    { time: '15 40', activities: ['Group Time + Reflection'] },
    { time: '16 40', activities: ['Admin Briefing + Debrief'] },
    { time: '17 00', activities: ['Dismissal'] },
  ];

  // Day 3 Dataset - Track 1 (Blue Theme)
  const scheduleDataBlueDay3 = [
    { time: '08 00', activities: ['Morning Assembly, Group Time + Admin Briefing'] },
    { time: '09 00', activities: ['Cross Winds'] },
    { time: '12 40', activities: ['Lunch'] },
    { time: '13 40', activities: ['Wind Breaker'] },
    { time: '16 20', activities: ['Y.Lead Display'] },
    { time: '17 20', activities: ['Admin Briefing, Debrief'] },
    { time: '17 40', activities: ['Dismissal'] },

  ];

  // Day 3 Dataset - Track 2 (Green Theme)
  const scheduleDataGreenDay3 = [
    { time: '08 00', activities: ['Morning Assembly, Group Time + Admin Briefing'] },
    { time: '09 00', activities: ['Blow Wind Blow'] },
    { time: '12 40', activities: ['Lunch'] },
    { time: '13 40', activities: ['Wind Breaker'] },
    { time: '16 20', activities: ['Y.Lead Display'] },
    { time: '17 20', activities: ['Admin Briefing, Debrief'] },
    { time: '17 40', activities: ['Dismissal'] },
  ];

  // Day 4 Dataset - Track 1 (Third separate Blue Theme extracted from your image)
  const scheduleDataBlueDay4 = [
    { time: '08 00', activities: ['Morning Assembly'] },
    { time: '08 20', activities: ['Wind Breaker'] },
    { time: '11 20', activities: ['Lunch + Freshen up for Commencement'] },
    { time: '12 40', activities: ['Reflection + Group Time, Photobooth'] },
    { time: '14 20', activities: ['Commencement Celebration'] },
    { time: '16 20', activities: ['Dismissal'] },

  ];

  return (
    <div className="min-h-screen flex flex-col bg-background-primary">
      <ScrollAnimation />
      <Navbar/>
      {/* <div className="h-32" /> */}

      <div className="max-w-7xl mx-auto">

      {/* ==================== DAY 1 SECTION (BLUE) ==================== */}
      <div className="text-center mb-10 mt-32 text-font-primary flex flex-col items-center gap-4">
        <h1 className="text-5xl md:text-6xl font-bold tracking-wide drop-shadow-md">
          Day 1
        </h1>
        <p className="text-4xl md:text-5xl font-semibold tracking-widest mt-2 text-font-primary/75 drop-shadow-sm">
          07-07-2026
        </p>
      </div>

      {/* Day 1 Schedule Widgets Container */}
      <div className="w-full flex flex-col items-center gap-4 mb-32">
        {scheduleDataBlue.map((item, index) => (
          <ScheduleWidget
            key={index}
            time={item.time}
            activities={item.activities}
            color="blue"
          />
        ))}
      </div>


      {/* ==================== DAY 2 SECTION (GREEN) ==================== */}
      <div className="text-center mb-10 text-font-primary flex flex-col items-center gap-4">
        <h1 className="text-5xl md:text-6xl font-bold tracking-wide drop-shadow-md">
          Day 2 - Fam L + E
        </h1>
        <p className="text-4xl md:text-5xl font-semibold tracking-widest mt-2 text-font-primary/75 drop-shadow-sm">
          08-07-2026
        </p>
      </div>

      {/* Day 2 Green Widgets Container */}
      <div className="w-full flex flex-col items-center gap-4 mb-32">
        {scheduleDataGreen.map((item, index) => (
          <ScheduleWidget
            key={index}
            time={item.time}
            activities={item.activities}
            color="green"
          />
        ))}
      </div>


      {/* ==================== DAY 2 SECTION (PURPLE) ==================== */}
      <div className="text-center mb-10 text-font-primary flex flex-col items-center gap-4">
        <h1 className="text-5xl md:text-6xl font-bold tracking-wide drop-shadow-md">
          Day 2 - Fam A + D
        </h1>
        <p className="text-4xl md:text-5xl font-semibold tracking-widest mt-2 text-font-primary/75 drop-shadow-sm">
          08-07-2026
        </p>
      </div>

      {/* Day 2 Purple Widgets Container */}
      <div className="w-full flex flex-col items-center gap-4 mb-32">
        {scheduleDataPurple.map((item, index) => (
          <ScheduleWidget
            key={index}
            time={item.time}
            activities={item.activities}
            color="purple"
          />
        ))}
      </div>


      {/* ==================== DAY 3 SECTION (BLUE) ==================== */}
      <div className="text-center mb-10 text-font-primary flex flex-col items-center gap-4">
        <h1 className="text-5xl md:text-6xl font-bold tracking-wide drop-shadow-md">
          Day 3 - Fam L + E
        </h1>
        <p className="text-4xl md:text-5xl font-semibold tracking-widest mt-2 text-font-primary/75 drop-shadow-sm">
          09-07-2026
        </p>
      </div>

      {/* Day 3 Blue Widgets Container */}
      <div className="w-full flex flex-col items-center gap-4 mb-32">
        {scheduleDataBlueDay3.map((item, index) => (
          <ScheduleWidget
            key={index}
            time={item.time}
            activities={item.activities}
            color="blue"
          />
        ))}
      </div>


      {/* ==================== DAY 3 SECTION (GREEN) ==================== */}
      <div className="text-center mb-10 text-font-primary flex flex-col items-center gap-4">
        <h1 className="text-5xl md:text-6xl font-bold tracking-wide drop-shadow-md">
          Day 3 - Fam A + D
        </h1>
        <p className="text-4xl md:text-5xl font-semibold tracking-widest mt-2 text-font-primary/75 drop-shadow-sm">
          09-07-2026
        </p>
      </div>

      {/* Day 3 Green Widgets Container */}
      <div className="w-full flex flex-col items-center gap-4 mb-32">
        {scheduleDataGreenDay3.map((item, index) => (
          <ScheduleWidget
            key={index}
            time={item.time}
            activities={item.activities}
            color="green"
          />
        ))}
      </div>


      {/* ==================== DAY 4 SECTION (BLUE) ==================== */}
      <div className="text-center mb-10 text-font-primary flex flex-col items-center gap-4">
        <h1 className="text-5xl md:text-6xl font-bold tracking-wide drop-shadow-md">
          Day 4
        </h1>
        <p className="text-4xl md:text-5xl font-semibold tracking-widest mt-2 text-font-primary/75 drop-shadow-sm">
          10-07-2026
        </p>
      </div>

      {/* Day 4 Separate Blue Widgets Container */}
      <div className="w-full flex flex-col items-center gap-4 mb-32">
        {scheduleDataBlueDay4.map((item, index) => (
          <ScheduleWidget
            key={index}
            time={item.time}
            activities={item.activities}
            color="blue"
          />
        ))}
      </div>
      </div>

      <Footer />
    </div>
  );
}