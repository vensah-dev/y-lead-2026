import React from 'react';
import SplitSection from './split-section';

interface TrackActivity {
  time: string;
  name: string;
}

interface Track {
  theme: string;
  maxPax?: number;
  activities?: TrackActivity[];
  info?: string;
  colorClass: string;
}

interface DayScheduleData {
  dayTitle: string;
  borderColor: string;
  titleColor: string;
  tracks: Track[];
}

export const BlowWindBlow = () => {

  return (
    <div className='w-screen'>
      <SplitSection
        left={

        }
        right={
          
        }
        addClassName=''
      />

    </div>
  );
}