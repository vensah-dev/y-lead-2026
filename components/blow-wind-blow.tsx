import React from 'react';
import { ScrollAnimation } from './scroll-animation';
import SplitSection from './split-section';
import GlowingImage from './glowing-image';
import type { StaticImageData } from 'next/image';

import NTU from '@/public/images/BWB-locations/NTU.avif';
import telokAyer from '@/public/images/BWB-locations/telok-ayer.avif';
import EOS from '@/public/images/BWB-locations/EOS.avif';
import nationalMueseum from '@/public/images/BWB-locations/national-mueseum.avif';
import airport from '@/public/images/BWB-locations/airport.avif';
import NCL from '@/public/images/BWB-locations/NCL.avif';
import STAR from '@/public/images/BWB-locations/STAR.avif';

interface Activity {
  title: string;
  image: StaticImageData;
  description: string;
  details: string[];
}

interface TrackData {
  category: string;
  activities: Activity[];
}

export const BlowWindBlow = () => {
  const scheduleData: TrackData[] = [
    {
      category: "Arts & Culture",
      activities: [
        {
          title: "8th & 9th July: Telok Ayer Trail",
          image: telokAyer,
          description: "Through the Telok Ayer Trail, participants will explore the rich culture and heritage of Singapore. Delve into how early Chinese immigrants arrived and established places of worship to find their identities and a sense of belonging. By exploring these hidden architectural gems, wall murals, and cultural landmarks, students will understand how history is preserved and be inspired to sustain a culture that Singaporeans are proud of.",
          details: [
            "09 40 - 11 00 (Self-guided) \n 11 00 - 12 00 (Guided Church Tour)",
            "09 00",
            "12 10"
          ]
        },
      ]
    },
    {
      category: "Environment & Sustainability",
      activities: [
        {
          title: "8th & 9th July: Earth Observatory Singapore",
          image: EOS,
          description: "Participants will tour the Earth Observatory of Singapore (EOS) facilities, including hazard monitoring setups, sedimentation labs, and coral reef restoration labs. The program highlights how fundamental research in natural disasters and climate change supports Singapore’s green technologies, environmental regulations, and policymaking, while fostering youth environmental stewardship.",
          details: [
            "10 10 - 10 45 (Intro & Q&A) \n 10 45 - 11 45 (Facility/Lab Tour)",
            "TBA",
            "Dismissal: 11 45"
          ]
        },
      ]
    },
    {
      category: "Regional & Global Affairs",
      activities: [
        {
          title: "8th July: National Museum",
          image: nationalMueseum,
          description: "An investigative journey through 4 key exhibition zones mapping out Singapore’s 700-year history and its road to globalisation. Participants will explore how the sea played a critical role in shaping Singapore's evolution as a trading hub, the efforts of our forefathers, and how modern youth can develop leadership skills to actively contribute to regional and global relations.",
          details: [
            "09 30 - 10 50 (Exhibit Exploration & Free Roam)",
            "08 00",
            "11 00"
          ]
        },
        {
          title: "9th July: Changi Airport Group",
          image: airport,
          description: "A seminar-style sharing designed to help participants learn about the regional and global ties that Changi Airport builds. Gain deep insights into how Changi expands its flight network to remain one of the world's largest and most competitive air hubs, handles strategic international relations, and navigates geopolitical dynamics.",
          details: [
            "10 30 - 11 30 (Seminar-style sharing)",
            "09 00",
            "11 40"
          ]
        }
      ]
    },
    {
      category: "Innovation & AI",
      activities: [
        {
          title: "8th July: NTU, UOB Innovation Hub",
          image: NTU,
          description: "Exploring NTU Education Transformation: An inside look at innovation and AI frameworks in higher education. Participants will discover how NTU integrates AI into teaching and learning methodologies, explore the governance guiding AI development, and discuss how active classroom research can be seamlessly implemented in schools.",
          details: [
            "10 00 - 12 00 (Guided tour)",
            "09 30",
            "12 10"
          ]
        },
        {
          title: "9th July: Satellite Technology & Research (STAR) Centre",
          image: STAR,
          description: "A guided tour around the STAR centre focusing on state-of-the-art innovations in satellite technology. As Singapore expands its presence in space, participants will explore how the nation develops cutting-edge technologies to stay competitive in the aerospace industry, inspiring youth to contribute to future scientific research and development.",
          details: [
            "10 30 - 11 30 (Guided tour & Q&A)",
            "09 45",
            "11 40"
          ]
        }
      ]
    },
    {
      category: "Social Compact",
      activities: [
        {
          title: "8th & 9th July: National Community Leadership Institute (NACLI)",
          image: NCL,
          description: "Focused on community leadership and Singapore's social fabric, this session teaches participants about the structures built to empower community leaders. Students will reflect on their personal leadership journeys, discover actionable pathways in social work, and learn how to make meaningful decisions that strengthen society.",
          details: [
            "10 00 - 12 00 (Guided tour by NACLI)",
            "09 15",
            "12 10"
          ]
        },
      ]
    }
  ];

  return (
    <section>
      <ScrollAnimation />

      <div className="w-screen bg-background-secondary">
        <div className="max-w-7xl px-8 mx-auto">
          <h1 data-animate className="font-display xl:text-7xl text-6xl max-sm:text-5xl pt-16 pb-6 font-bold text-font-primary w-full">
            Blow Wind Blow
          </h1>
          <h2 data-animate className="font-display text-3xl mb-6 font-semibold text-font-primary w-full">
            Investigative Journey
          </h2>
          <div className="bg-background-secondary border-b border-background-tertiary" />
        </div>
      </div>

      {scheduleData.map((track, index) => (
        <div key={index}>
          <div data-animate className={`${index == 0 ? "pb-32 pt-12":"py-32"} ${index % 2 === 0 ? "bg-background-secondary" : "bg-background-primary"}`}>

            <h2 data-animate className="xl:text-6xl text-5xl font-display font-bold mb-24 max-w-7xl mx-auto px-8">{track.category}</h2>

            <div className="flex flex-col gap-16">
              {track.activities.map((activity, activityIndex) => (
                <div key={activityIndex}>
                  <SplitSection
                  left={
                    <div className="relative sm:h-[25vw] sm:w-full aspect-4/3">
                      <GlowingImage image={activity.image} />
                    </div>
                  }
                  right={
                    <>
                      <h3 className="xl:text-4xl text-3xl mb-6 font-display text-font-primary font-bold" data-animate>{activity.title}</h3>
                      <p className="text-font-primary whitespace-pre-line" data-animate>{activity.description + "\n\n"}</p>
            
                      <div data-animate>
                        <ul data-animate className="space-y-1">

                          <li className="text-font-primary flex whitespace-pre-line">
                            <p className="whitespace-pre-line font-bold">Duration:&nbsp;</p>
                            {activity.details[0]}
                          </li>

                          <li className="text-font-primary flex whitespace-pre-line">
                            <p className="whitespace-pre-line font-bold">Departure time:&nbsp;</p>
                            {activity.details[1]}
                          </li>

                          <li className="text-font-primary flex whitespace-pre-line">
                            <p className="whitespace-pre-line font-bold">Pickup time:&nbsp;</p>
                            {activity.details[2]}
                          </li>

                        </ul>
                      </div>
                    </>
                  }
                  addClassName={`${index % 2 === 0 ? "bg-background-secondary" : "bg-background-primary"}`}
                  />
                </div>
              ))}
            </div>

          </div>
        </div>
      ))}

    </section>
  );
};