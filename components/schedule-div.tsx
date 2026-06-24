import React from 'react';

import type { DaySchedule } from "@/types/schedule"

import { SecondaryButton } from "@/components/secondary-button";

import ScheduleWidget from "@/components/schedule-widget";


interface ScheduleDIVProps {
  currentSchedule: DaySchedule;
}

export default function ScheduleDIV({ currentSchedule }: ScheduleDIVProps) {
    return (

        <div>
            <div  className="text-center mb-10 mt-32 text-font-primary flex flex-col items-center gap-4">
            <h1 className="font-display text-5xl md:text-6xl font-bold tracking-wide drop-shadow-md">
                {currentSchedule.title}
            </h1>
            <p className="text-4xl md:text-5xl font-semibold tracking-widest mt-2 text-font-primary/75 drop-shadow-sm">
                {currentSchedule.date}
            </p>

            {/* <div className="flex w-full justify-center gap-4 py-2">

                <SecondaryButton 
                colour={currentSchedule.colour === 'green' ? 'border-green-400 text-green-400' : 
                currentSchedule.colour === 'purple' ? 'border-purple-400 text-purple-400' : 
                'border-blue-400 text-blue-400'} 

                text={"Previous"} 
                onClick={() => setDateNo((prev) => Math.max(0, prev - 1))}
                disabled={dateNo === 0}/>

                <SecondaryButton 
                colour={currentSchedule.colour === 'green' ? 'border-green-400 text-green-400' : 
                currentSchedule.colour === 'purple' ? 'border-purple-400 text-purple-400' : 
                'border-blue-400 text-blue-400'} 

                text={"Next"} 
                onClick={() => setDateNo((prev) => Math.min(schedules.length - 1, prev + 1))} 
                disabled={dateNo === schedules.length - 1}/>

            </div> */}

            </div>



            {/* Day 1 Schedule Widgets Container */}
            <div className="w-full flex flex-col items-center gap-4 mb-32">
            {currentSchedule.times.map((item, index) => (
                <ScheduleWidget
                key={index}
                time={item.time}
                activities={item.activities}
                color={currentSchedule.colour as ScheduleColour}
                />
            ))}
            </div>
        </div>
    )
};