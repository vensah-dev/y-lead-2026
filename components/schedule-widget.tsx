// components/ScheduleWidget.tsx
import React from 'react';

import type { ScheduleColour } from "@/types/schedule"

interface ScheduleWidgetProps {
  activities: string[],
  color?: ScheduleColour
}


export default function ScheduleWidget({activities, color = 'blue' }: ScheduleWidgetProps) {
  const bgColor = color === 'green' ? 'bg-green-200/75' : color === 'purple' ? 'bg-purple-100' : 'bg-blue-100';

  return (
    <div className="xl:max-w-7xl w-full">
        <div className={`w-full ${bgColor ? bgColor : ''} p-8 rounded-2xl items-center gap-6 `}>
        
          <h1 className='font-bold text-2xl text-font-primary pb-4'>
            Activities
          </h1>

          <ul className='list-disc list-inside text-left space-y-3'>

            {activities.map((activity, index) => (
              <li key={index} className="text-sm md:text-base leading-tight">
                {activity}
              </li>
            ))}
          </ul>

        </div>
    </div>
  );
}