'use client'

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useState } from "react";

import { SecondaryButton } from "@/components/secondary-button";
import { PrimaryButton } from "@/components/primary-button";

import { Timeline } from "@/components/timeline"

import { ScrollAnimation } from "@/components/scroll-animation";
import SplitSection from "@/components/split-section";
import GlowingImage from "@/components/glowing-image";
import ScheduleWidget from "@/components/schedule-widget";
import type { DaySchedule } from "@/types/schedule"
import type { ScheduleColour } from "@/types/schedule"

import mrMockPic from "@/public/images/MrMock.png"

import Image from "next/image";

export default function Programmes() {

  const prefix = process.env.NODE_ENV === 'production' ? '' : '';

  var schedules: DaySchedule[] = [
    {
      title : "Day 1",
      date: "7 July",
      colour: "blue",
      times: [
        { time: '08 00', activities: ['Morning Assembly'] },
        { time: '08 20', activities: ["Icebreakers", "Group Time"] },
        { time: '10 00', activities: ['Opening Ceremony'] },
        { time: '12 00', activities: ['Lunch'] },
        { time: '13 00', activities: ['Y.Lead Dance'] },
        { time: '14 40', activities: ['Wind Surfer'] },
        { time: '16 20', activities: ["Blow Wind Blow and Wind Chimes Briefing", "Admin Briefing", "Debrief"] },
        { time: '17 00', activities: ['Dismissal'] },
      ]
    },
    {
      title: "Day 2 - Fam L + E",
      date: "8 July",
      colour: "green",
      times: [
        { time: '08 00', activities: ['Morning Assembly'] },
        { time: '08 20', activities: ['Admin Briefing', 'Cross Winds Briefing', 'Group Time'] },
        { time: '09 00', activities: ['Blow Wind Blow'] },
        { time: '12 40', activities: ['Lunch'] },
        { time: '13 40', activities: ['Wind Chimes Preparation'] },
        { time: '14 20', activities: ['Wind Chimes'] },
        { time: '15 40', activities: ['Group Time', 'Reflection'] },
        { time: '16 40', activities: ['Admin Briefing', 'Debrief'] },
        { time: '17 00', activities: ['Dismissal'] },
      ]
    },
    {
      title: "Day 2 - Fam A + D",
      date: "8 July",
      colour: "purple",
      times: [
        { time: '08 00', activities: ['Morning Assembly'] },
        { time: '08 20', activities: ['Admin Briefing', 'Leadership Collaboration Briefing', 'Group Time'] },
        { time: '09 00', activities: ['Cross Winds'] },
        { time: '12 40', activities: ['Lunch'] },
        { time: '13 40', activities: ['Wind Chimes Preparation'] },
        { time: '14 20', activities: ['Wind Chimes'] },
        { time: '15 40', activities: ['Group Time', 'Reflection'] },
        { time: '16 40', activities: ['Admin Briefing', 'Debrief'] },
        { time: '17 00', activities: ['Dismissal'] },
      ]
    },
    {
      title: "Day 3 - Fam L + E",
      date: "9 July",
      colour: "green",
      times: [
        { time: '08 00', activities: ['Morning Assembly'] },
        { time: '08 20', activities: ['Cross Winds', 'Group Time', 'Admin Briefing'] },
        { time: '12 40', activities: ['Lunch'] },
        { time: '13 40', activities: ['Wind Breaker'] },
        { time: '16 20', activities: ['Y.Lead Display'] },
        { time: '17 20', activities: ['Admin Briefing', 'Debrief'] },
        { time: '17 40', activities: ['Dismissal'] },
      ]
    },
    {
      title: "Day 3 - Fam A + D",
      date: "9 July",
      colour: "purple",
      times: [
        { time: '08 00', activities: ['Morning Assembly'] },
        { time: '08 20', activities: ['Blow Wind Blow', 'Group Time', 'Admin Briefing'] },
        { time: '12 40', activities: ['Lunch'] },
        { time: '13 40', activities: ['Wind Breaker'] },
        { time: '16 20', activities: ['Y.Lead Display'] },
        { time: '17 20', activities: ['Admin Briefing', 'Debrief'] },
        { time: '17 40', activities: ['Dismissal'] },
      ]
    },
    {
      title: "Day 4",
      date: "10 July",
      colour: "blue",
      times: [
        { time: '08 00', activities: ['Morning Assembly'] },
        { time: '08 20', activities: ['Wind Breaker'] },
        { time: '11 20', activities: ['Lunch', 'Freshen up for Commencement'] },
        { time: '12 40', activities: ['Reflection', 'Group Time', 'Photobooth'] },
        { time: '14 20', activities: ['Commencement Celebration'] },
        { time: '16 20', activities: ['Dismissal'] },
      ]
    }
  ];

  const [dateNo, setDateNo] = useState(0);
  var currentSchedule = schedules[dateNo];

  const scrollToTop = (): Promise<void> => {
    return new Promise((resolve) => {
      // Edge case: If the user is already at the very top, resolve instantly
      if (window.scrollY === 0) {
        resolve();
        return;
      }

      const handleScrollEnd = () => {
        window.removeEventListener("scrollend", handleScrollEnd);
        resolve();
      };

      // Listen for the native finish of the smooth scrolling physics
      window.addEventListener("scrollend", handleScrollEnd);
      
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
  };

  const handleNavigation = async (direction: 'next' | 'prev') => {
    await scrollToTop();
    
    if (direction === 'prev') {
      setDateNo((prev) => Math.max(0, prev - 1));
    } else {
      setDateNo((prev) => Math.min(schedules.length - 1, prev + 1));
    }
  };

  const timelineData = currentSchedule.times.map((item, index) => ({
    title: item.time,
    content: (
      <ScheduleWidget
        key={index}
        activities={item.activities}
        color={currentSchedule.colour as ScheduleColour}
      />
    )
  }));


  const backNextButtonStyles: string = 
  `
    text-3xl
    hover:opacity-50 sm:px-3 px-4 aspect-square rounded-full 
    disabled:opacity-15 disabled:brightness-75

    ${currentSchedule.colour === 'green' ? 'bg-green-300/40 text-green-400' : 
      currentSchedule.colour === 'purple' ? 'bg-pink-300/40 text-pink-400' : 
      'bg-blue-300/40  text-blue-400'
    } 
    select-none
  `;

  return (
    <div className="min-h-screen flex flex-col bg-background-primary ">
      <ScrollAnimation />
      <Navbar/>
      {/* <div className="h-32" /> */}

      <div className="xl:w-7xl w-full px-8 mx-auto my-32 ">

        {/* timetable */}

        <div>

          <div  className="text-center pb-48 pt-16 text-font-primary flex flex-col items-center gap-4" data-animate>
            <h1 className="font-display text-5xl md:text-6xl font-extrabold [word-spacing:0.3rem]">
              {currentSchedule.title}
            </h1>
            <p className="font-sans text-2xl font-thin mt-2 text-font-primary" data-animate>
              {currentSchedule.date}
            </p>

          </div>

          <Timeline key={dateNo} data={timelineData} colour={currentSchedule.colour}/>

          <div className="sticky bottom-0 flex w-full justify-center gap-10 py-6 z-100" data-animate>

            <button className={backNextButtonStyles} onClick={async () => handleNavigation('prev')} disabled={dateNo === 0}>
              <div className="pr-0.5">&lt;</div>
            </button>


            <button className={backNextButtonStyles} onClick={async () => handleNavigation('next')} disabled={dateNo === schedules.length - 1}>
              <div className="pl-0.5">&gt;</div>
            </button>

          </div>

        </div>

      </div>

      {/* keynote speaker */}
      <div className="w-full">

        <div className="max-w-7xl mx-auto px-8">
          <div className="border-t border-background-secondary max-w-7xl mx-auto px-8 mb-12"/>
          <h1 data-animate className="font-display xl:text-7xl text-6xl max-sm:text-5xl mb-6 font-bold text-font-primary w-full">
            Wind Chimes
          </h1>
          <h2 data-animate className="font-display text-3xl mb-12 font-semibold text-font-primary w-full">
            Panel Discussion
          </h2>
          <div className="border-t border-background-secondary max-w-7xl mx-auto px-8"/>
        </div>

        <SplitSection
          left={
            <div className="relative h-full aspect-875/700 ">
              <Image
                src={mrMockPic}
                alt="Y.LEAD Logo Glow"
                fill
                className="object-cover drop-shadow-[0_0px_50px_rgba(0,0,0,1)] drop-shadow-font-primary/15"
              />
            </div>
          }
          right={
            <div className="flex flex-col items-start">
              <h1 data-animate className="font-display xl:text-7xl text-6xl max-sm:text-5xl mb-6 font-bold text-font-primary w-full">
                Keynote Speaker
              </h1>
              <h2 data-animate className="font-display text-3xl mb-6 font-semibold text-font-primary w-full">
                Mr Mock Yi Jun
              </h2>
              <h2 data-animate className="tracking-tighter text-font-primary w-full">
                Co-founder and President of Advisory Singapore, <br/>Senior Manager of the Quantum Policy and Strategy Unit at MDDI        
              </h2>
            </div>
          }
          addClassName="bg-background-primary -mb-48"
        />

        <SplitSection 
          left={
            <div className="flex flex-col items-start border-t border-b border-background-secondary">
              <div data-animate className="text-base text-font-primary w-full py-8">
                  Since 2016, Mr Mock Yi Jun has been Co-Founder and President of Advisory Singapore, a fully youth-led charity that has helped over 278,000 young Singaporeans from all walks of life make informed career choices. Advisory Singapore runs Singapore's largest pro bono careers-based mentorship programme for students, having delivered over 15,000 hours of mentorship since 2020. Mr Mock currently serves as a Senior Manager of the Quantum Policy and Strategy Unit at the Ministry of Digital Development and Information. His remarkable career journey and distinguished recognitions — including being named a #Generation17 Young Leader and a Queen's Young Leader — speak to his deep and enduring passion for leadership and service. Participants at the Y.LEAD Seminar 2026 will have the opportunity to draw inspiration from Mr Mock's broad and varied experiences across leadership advisory, youth empowerment, and both local and global service. 
              </div>
            </div>
          }

          addClassName="bg-background-primary -mt-16"
        />
      </div>

      <Footer />
    </div>
  );
}