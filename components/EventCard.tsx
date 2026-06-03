import React from 'react';

interface EventCardProps {
  title: string;
  description: string;
  date: string;
  location: string;
}

const EventCard: React.FC<EventCardProps> = ({ title, description, date, location }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <span className="bg-accent-yellow text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
          {date}
        </span>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex items-center text-gray-500 text-sm">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        {location}
      </div>
    </div>
  );
};

export default EventCard;