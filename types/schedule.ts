export type ScheduleColour = 'blue' | 'green' | 'purple';

// 2. Define the structure of each item in the times array
export interface ScheduleTime {
  time: string;
  activities: string[];
}

// 3. Define the structure of a single day's schedule
export interface DaySchedule {
  title: string;
  date: string;
  colour: ScheduleColour; // Explicitly typed to only allow the valid colors
  times: ScheduleTime[];
}