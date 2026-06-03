// components/ScheduleWidget.tsx
import React from 'react';

interface ScheduleWidgetProps {
  time: string;
  activities: string[],
  color?: 'blue' | 'green' | 'purple', // Optional prop to specify color, defaults to blue
}

export default function ScheduleWidget({ time, activities, color = 'blue' }: ScheduleWidgetProps) {
  const bgColor = color === 'green' ? 'bg-green-200/75' : color === 'purple' ? 'bg-purple-300/50' : 'bg-blue-300/50';
  const timebgColor = color === 'green' ? 'bg-green-300/75' : color === 'purple' ? 'bg-purple-300/75' : 'bg-blue-300';

  return (
    <div className={`w-full max-w-xl ${bgColor ? bgColor : ''} backdrop-blur-sm rounded-full p-2 flex items-center gap-6`}>
      {/* Time Capsule */}
      <div className={`${timebgColor ? timebgColor : ''}  text-font-primary font-bold text-xl py-3 px-8 rounded-full min-w-[120px] text-center tracking-wide`}>
        {time}
      </div>
      
      {/* Activities Text */}
      <div className="flex flex-col text-font-primary font-semibold uppercase tracking-wider justify-center pr-6">
        {activities.map((activity, index) => (
          <p key={index} className="text-sm md:text-base leading-tight">
            {activity}
          </p>
        ))}
      </div>
    </div>
  );
}