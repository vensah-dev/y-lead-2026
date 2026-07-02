import React from 'react';

interface Activity {
  title: string;
  description: string;
  objectives: string[];
}

interface TrackData {
  category: string;
  activities: Activity[];
}

export const BlowWindBlow = () => {
  const scheduleData: TrackData[] = [
    {
      category: "ARTS AND CULTURE",
      activities: [
        {
          title: "Telok Ayer Trail",
          description: "The Telok Ayer district covers a long stretch that served as the landing site for early immigrants, leading to a concentration of religious buildings and Chinese clan associations along the street. The trail includes landmarks such as the Telok Ayer Chinese Methodist Church and Masjib Al-Abrar, which hold great cultural and historical significance in Singapore.",
          objectives: [
            "The cultural and historical significance of the landmarks in Telok Ayer",
            "The architecture and design of buildings in Telok Ayer",
            "How students can take action today to contribute meaningfully to preserving culture and tradition"
          ]
        }
      ]
    },
    {
      category: "ENVIRONMENT AND SUSTAINABILITY",
      activities: [
        {
          title: "Earth Observatory Singapore",
          description: "The Earth Observatory of Singapore (EOS) was created to conduct fundamental research on natural disasters and climate change, towards safer and more sustainable societies. EOS helps to build the social compact for Singapore to tackle the challenges of climate change and sustainability.",
          objectives: [
            "The role EOS plays in Singapore and the region’s environmental developments",
            "The key skills youths should develop to support the environment",
            "How students can take action today to contribute meaningfully to sustainability and the environment in Singapore"
          ]
        }
      ]
    },
    {
      category: "REGIONAL AND GLOBAL AFFAIRS",
      activities: [
        {
          title: "8th July: National Museum",
          description: "The investigative journey consists of two exhibits: Once Upon a Tide and Singapore Odyssea, both of which will allow participants to delve deeper into Singapore’s 700-year history. They will explore how the sea plays a crucial role in shaping Singapore’s evolution, and uncover the many connections that have positioned Singapore at the crossroads of the world.",
          objectives: [
            "Learning about Singapore’s early history and the contributions of settlers",
            "Development and growth of Singapore as a trading port",
            "Understanding Singapore’s connections with the world"
          ]
        },
        {
          title: "9th July: Changi Airport Group",
          description: "The Changi Airport Group (CAG) manages Changi Airport and Seletar Airport, directing airport operations and air hub development, pioneering safe, secure and sustainable air hubs.",
          objectives: [
            "How Changi Airport builds global and regional connections",
            "How flights and air travel are affected by geopolitical tensions",
            "How Changi Airport has helped Singapore achieve its global standing."
          ]
        }
      ]
    },
    {
      category: "INNOVATION AND AI",
      activities: [
        {
          title: "8th July: Amazon Web Services",
          description: "Amazon Web Services (AWS) is the world’s most comprehensive and broadly adopted cloud platform, offering more than 200 fully featured services from data centers globally.",
          objectives: [
            "How new technologies and AI have impacted processes in AWS",
            "How AWS is innovating and redeploying manpower to maximise productivity",
            "How can youth take action to explore Innovation and AI"
          ]
        },
        {
          title: "9th July: Satellite Technology and Research (STAR) Centre",
          description: "The Satellite Technology and Research (STAR) Centre supports the advancement of Singapore's space industry by providing the industry with state of the art satellite technology to meet the scientific and engineering challenges for future innovative satellite programmes and applications.",
          objectives: [
            "How new technologies and AI have impacted new satellite technology",
            "How Singapore is innovating new satellites to stand out on the global front",
            "How can youth take action to explore Innovation and AI in the field of satellite research"
          ]
        }
      ]
    },
    {
      category: "SOCIAL COMPACT",
      activities: [
        {
          title: "National Community Leadership Institute (under People’s Association)",
          description: "As the community leadership development arm of the PA, NACLI develops community leaders, and offers a wide range of leadership development programmes to equip people with the skills and competencies to carry out their work in the community effectively.",
          objectives: [
            "The role People's Association plays in building Singapore's social compact",
            "The key skills youths should develop to support the building of Singapore's social fabric",
            "How students can take action today to contribute meaningfully to Singapore's society"
          ]
        }
      ]
    }
  ];

  return (
    <div>
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
        <section key={index} className={`${index%2 === 0 ? "bg-background-secondary" : "bg-background-primary"}`}>
          <div className={`max-w-7xl px-8 mx-auto ${index == 0 ? "pb-32 pt-12":"py-32"}`}>
            <h2 className="xl:text-5xl text-4xl font-display font-bold mb-4">{track.category}</h2>
            
            {track.activities.map((activity, activityIndex) => (
              <div key={activityIndex}>
                <h3 className="xl:text-4xl text-3xl mb-6 font-display text-font-primary pt-8">{activity.title}</h3>
                <p className="text-font-primary">{activity.description}</p>
            
                <div>
                  <h4 className="text-lg text-font-primary font-bold mt-4 mb-2">Objectives:</h4>
                  <ul className="list-disc list-inside pl-6">
                    {activity.objectives.map((objective, objectiveIndex) => (
                      <li key={objectiveIndex} className="text-font-primary">
                        {objective}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};