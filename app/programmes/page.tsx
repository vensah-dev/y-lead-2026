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

export default function Programmes() {

  const prefix = process.env.NODE_ENV === 'production' ? '' : '';

  var schedules: DaySchedule[] = [
    {
      title : "Day 1",
      date: "07-07-2026",
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
      date: "08-07-2026",
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
      date: "08-07-2026",
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
      date: "09-07-2026",
      colour: "blue",
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
      date: "09-07-2026",
      colour: "green",
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
      date: "10-07-2026",
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Animates the scroll smoothly
    });
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
  `;

  return (
    <div className="min-h-screen flex flex-col bg-background-primary ">
      <ScrollAnimation />
      <Navbar/>
      {/* <div className="h-32" /> */}

      <div className="xl:w-7xl w-full px-8 mx-auto my-32">

        {/* timetable */}

        <div>

          <div  className="text-center pb-48 pt-16 text-font-primary flex flex-col items-center gap-4">
            <h1 className="font-display text-5xl md:text-6xl font-bold">
              {currentSchedule.title}
            </h1>
            <p className="font-display text-4xl md:text-5xl font-light mt-2 text-font-primary/80">
              {currentSchedule.date}
            </p>

          </div>

          <Timeline key={dateNo} data={timelineData} colour={currentSchedule.colour}/>

          <div className="sticky bottom-0 flex w-full justify-center gap-10 py-6 z-100">

            <button className={backNextButtonStyles} onClick={() => {scrollToTop(); setDateNo((prev) => Math.max(0, prev - 1));}} disabled={dateNo === 0}>
              <div className="pr-0.5">&lt;</div>
            </button>


            <button className={backNextButtonStyles} onClick={() => {scrollToTop(); setDateNo((prev) => Math.min(schedules.length - 1, prev + 1));}} disabled={dateNo === schedules.length - 1}>
              <div className="pl-0.5">&gt;</div>
            </button>

          </div>

        </div>
        


      </div>

      <Footer />
    </div>
  );
}