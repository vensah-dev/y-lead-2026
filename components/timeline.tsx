"use client";
import { useScroll, useTransform, useSpring, motion, MotionValue } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

import type { ScheduleColour } from "@/types/schedule"

// 1. Define the shape of individual timeline data items
export interface TimelineItemData {
  title: string;
  content: React.ReactNode;
}

// 2. Define props for the row sub-component
interface TimelineRowProps {
  item: TimelineItemData;
  isEven: boolean;
  scrollYProgress: MotionValue<number>;
  timelineHeight: number;
  colour: ScheduleColour;
}

// Inline helper to safely use animation hooks per item without breaking React rules
const TimelineRow: React.FC<TimelineRowProps> = ({ item, isEven, scrollYProgress, timelineHeight, colour}) => {
  const timelineColour = colour === 'green' ? 'bg-green-300 ring-3 ring-green-200/50' : colour === 'purple' ? 'bg-pink-300 ring-3 ring-pink-200/50' : 'bg-blue-300 ring-3 ring-blue-200/50';

  const rowRef = useRef<HTMLDivElement>(null);
  const [rowPercent, setRowPercent] = useState<number>(0);

  useEffect(() => {
    if (rowRef.current && timelineHeight > 0) {
      // Calculate exactly where this row sits as a percentage of the total track height
      const exactPercent = (rowRef.current.offsetTop +1) / timelineHeight;
      setRowPercent(exactPercent);
    }
  }, [timelineHeight]);

  // Perfect sync: Dot lights up from 20% to 100% opacity the exact millimeter the line passes it
  const dotOpacity = useTransform(
    scrollYProgress,
    [Math.max(0, rowPercent - 0.01), Math.min(1, rowPercent + 0.005)],
    [0.2, 1]
  );

  // Optional: Gives the dot a subtle, clean scale-pop when activated
  const baseScale = useTransform(
    scrollYProgress,
    [Math.max(0, rowPercent - 0.015), Math.max(0, rowPercent)],
    [0.7, 1.0]
  );

  // Pipe it into useSpring to add micro-recoil mechanics
  const dotScale = useSpring(baseScale, {
    stiffness: 300, // Higher numbers = snappier, faster activation
    damping: 8,    // Lower numbers = more elastic bounce oscillation
    mass: 0.4       // Lighter mass makes it react instantly
  });

  return (
    <div ref={rowRef} className={`relative flex flex-col w-full items-start ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}>
      {/* 1. TITLE BLOCK (Desktop Only) */}
      <div className={`hidden md:flex md:w-1/2 px-12 top-40 z-10 ${isEven ? "justify-end text-right" : "justify-start text-left"}`}>
        <h3 className="text-3xl font-bold text-font-primary">
          {item.title}
        </h3>
      </div>

      {/* 2. CONTENT CARD BLOCK */}
      <div className={`w-[calc(100vw-5rem)] md:w-1/2 max-md:pl-12 ${isEven ? "md:pl-12" : "md:pr-12"} `}>
        <p className="block md:hidden text-2xl mb-4 font-bold text-font-primary">
          {item.title}
        </p>

        <div className="w-full relative">
          {item.content}
        </div>
      </div>

      {/* 3. INDIVIDUAL TIMELINE NODE DOTS */}
      <div className="absolute inset-x-0 top-5 flex justify-start md:justify-center px-4 md:px-0 pointer-events-none z-20">
        <div className="w-1 flex justify-center items-center relative">
          <motion.div 
            style={{ opacity: dotOpacity, scale: dotScale }}
            className={`absolute w-4 h-4 rounded-full bg-blue-300 ring-3 ring-blue-200/50 ${timelineColour ? timelineColour : ''} shrink-0 shadow-[0_0_10px_rgba(255,255,255,0.4)]`}
          />
        </div>
      </div>
    </div>
  );
};

// 3. Define props for the main Timeline component
interface TimelineProps {
  data: TimelineItemData[];
  colour: ScheduleColour;
}
// MAIN COMPONENT
export const Timeline: React.FC<TimelineProps> = ({ data, colour }) => {
  var timelineColour = colour === 'green' ? 'from-green-300 to-green-200/50' : colour === 'purple' ? 'from-pink-300 to-pink-200/50' : 'from-blue-300 to-blue-100';

  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [timelineHeight, setTimelineHeight] = useState<number>(0);

  useEffect(() => {
    if (!contentRef.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setTimelineHeight(entry.contentRect.height);
      }
    });

    resizeObserver.observe(contentRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 25%", "end 75%"],
  });

  const activeLineHeight = useTransform(scrollYProgress, [0, 1], [0, timelineHeight]);
  const activeLineOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  if (!data || data.length === 0) return null;

  return (
    <div ref={containerRef} className="w-full relative">
      <div ref={contentRef} className="relative flex flex-col gap-24 bottom-5 w-full">
        
        {data.map((item, index) => (
          <TimelineRow 
            key={index}
            item={item}
            isEven={index % 2 === 0}
            scrollYProgress={scrollYProgress}
            timelineHeight={timelineHeight}
            colour={colour}
          />
        ))}

        {/* SINGLE MASTER TIMELINE TRACK */}
        <div key={colour} className="absolute inset-y-0 left-0 right-0 flex justify-start md:justify-center px-4 md:px-0 pointer-events-none z-0">
          <div style={{ height: `${timelineHeight}px` }} className="relative w-1">
        
            {/* Background Static Line Track */}
            <div className="absolute inset-0 w-full bg-linear-to-b from-transparent via-font-primary/5 to-transparent mask-[linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]" />
        
            {/* Active Moving Scroll Progress Line */}
            <motion.div
              style={{
                height: activeLineHeight,
                opacity: activeLineOpacity,
              }}
              className={`absolute top-5 w-full bg-linear-to-b  from-blue-300 to-blue-100  ${timelineColour ? timelineColour : ''} rounded-full`}
            />
          </div>
        </div>

      </div>
    </div>
  );
};