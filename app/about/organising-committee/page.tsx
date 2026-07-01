'use client'

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import React from "react";

import { SecondaryButton } from "@/components/secondary-button";
import { PrimaryButton } from "@/components/primary-button";

import Image from "next/image";

import adgi from "@/public/images/organising-committee/adgi.avif"
import cere from "@/public/images/organising-committee/cere.avif"
import chairs from "@/public/images/organising-committee/chairs.avif"
import empowerment from "@/public/images/organising-committee/empowerment.avif"
import engagement from "@/public/images/organising-committee/engagement.avif"
import exploration from "@/public/images/organising-committee/exploration.avif"
import fams from "@/public/images/organising-committee/fams.avif"
import media from "@/public/images/organising-committee/media.avif"


import { ScrollAnimation } from "@/components/scroll-animation";
import SplitSection from "@/components/split-section";
import GlowingImage from "@/components/glowing-image";

export default function Theme() {
  const prefix = process.env.NODE_ENV === 'production' ? '' : '';

  const creditsList = [
    {
      "source": chairs,
      "credits": (
        <>
          <p className="font-extrabold text-lg pb-2">
            Lee Boyan, Ong Yue Yu, Valerie, Phoebe Tan En Minn, Devendran Venkatesh
          </p>
        </>
      )
    },
    {
      "source": adgi,
      "credits": (
        <>
          <p className="font-extrabold text-lg pb-2">Jonell Chan Xin Ru, Tan Jing Le, Tok Ying Xuan</p> Alvin Tan Zhi Qian, Lim Yu Kai, Nikolas Jonathan Tjokrosusanto, Evonne Toh Yi Jun, Lai Ying Ying, Avery Ng Yi Wei, Zhang Enxin, Lim Mu Xi, Liu Zhao, Liew Rui Xin, Wee Hao En, Ho Kanna (He Kangna), Leong Tian En Etzel, Tan Xi En, Xander Toh Ik Rayy, Siew Jing Ern, Vienna Neo Kai Qi, Leow Hui Yu (Liao Huiyu), Lim Zheng Xuan, Lee Yoke Ying, Li Yudong
        </>
      )
    },
    {
      "source": cere,
      "credits": (
        <>
          <p className="font-extrabold text-lg pb-2">Chai Yong Qi, Quay Ru Hui, Megan</p> Ooi Hui Xun, Sim En Yu (Shen Enyu), Lim Zhi Xuan, Elsa, Teo Rui Yun, Ally (Zhang Ruiyun), Chat Yan Rou, Felix Herman Tanzil, Matilda Lim Xin Yu, Eileen Lim Yi Ling (Lin Yiling), Teng Yan Wen (Ding Yanwen), Zuo Yibing, Wong Jia Xuan, Tey Kay Yee, Angel Chew Si Ning, Gu Kai Xin, Averlene Wong Xuan Yi, Ooi Hui Li, Rachel
        </>
      )
    },
    {
      "source": fams,
      "credits": (
        <>
          <p className="font-extrabold text-lg pb-2">Ng Jing Xuan Alicia, Pour Yi Long (Pan Yilong), Tang Han Yin, Fionne Lim En Xuan</p>
        </>
      )
    },
    {
      "source": exploration,
      "credits": (
        <>
          <p className="font-extrabold text-lg pb-2">Grace Tan En-Yu, Cheam Kai Qi, Katina Zeng Sitian</p> Yong Xin Yu, Chloe, Cayden Chiam Da En, Lim Tze Ray, Claire Chang Ru Xin, Lim Bo Er, Lam Yu Fang, Valerie, Tan Zi Herng Clayton, Edeline Tiong Li Shen, Chew Jia Hui, Kiefer Kong Zhi Bin (Kang Zhibin), Aldrik Chu Chin Boon (Zhu Zhenwen), Ang Shao Kai, Hum Jing Ying, Eunice, Low Kai En (Liu Kai'en), Kayla Tay Wei Nee
        </>
      )
    },
    {
      "source": empowerment,
      "credits": (
        <>
          <p className="font-extrabold text-lg pb-2">Shania Quek Jing Xuan, Bryant Chia Kim Tee (Xie Jinzhi)</p> Tang Ray En (Chen Rui'en), Goh Rui Chun Sean, Janelle Tan Shing Le (Chen Xinle), Chen Yi Nuo, Torris, Claire Chuah Hui Qin (Cai Huiqin), Loh Bao Jun, Cherise Lee Zhi Xuan, Ng Hui Li Eunice, Tsang Hou Nok Isaac, Ang Keng Heng Zabriel (Hong Jingheng), Elaine Yong Xinyi, Li Yunxuan, Zhong Xintian, Liu Le Tian, Charles Ng Jun Siang (Huang Junxiang), Tan Chee Han, Asher (Chen Zhihan)
        </>
      )
    },
    {
      "source": media,
      "credits": (
        <>
          <p className="font-extrabold text-lg pb-2">Wong Rui Yi, Zachary Quek Jun</p> Coco Tan Jia Xin, Foo Yi Yun, Chua Cheng Yang, Liu Moshi, Tan Shao Han, Megan, Liew Yee Jie, Huang Huixing Annie, Andrea Claresta Hadi Wahono, Hu Haoshun, Goh Jia Hang, Lu Xin, Yung Ker Fung, Tan Yuan Yi, Tan En Yang, Tay Yi Xuan Zelia, Zoden Oon Yan Chong, Celeste Yaou Lin
        </>
      )
    },
    {
      "source": engagement,
      "credits": (
        <>
          <p className="font-extrabold text-lg pb-2">Wang Jiayi, Kok Yan Kit (Guo Enjie)</p> Stella Ee Xin En (Yu Xi'en), Chloe Lim Kye Xin, Cheah Rui Xi, Tan Li Wei Agnes, Teo Hoe Pheng, Tan Nan Rui, Verma Lavanya, Luo Ye, Thorn Phyo Zay, Tan Qi Jie, Hazel Heng Yee Jing (Wang Yijing), Tara Lumina, Cheong Zhi Qian, Wang Xihuaqian
        </>
      )
    }
  ];

  const teacherCreditsList = [
    {
      role: "Advisors",
      names: "Mdm Choy Wai Yin, Mr Alvin Lau Wai Chi, Mr Ng Hong Peng, Mr Tang Wei Lun Aaron, Mr Michael Lau"
    },
    {
      role: "Chairpersons",
      names: "Ms Carine Ng, Mr Alex Chan"
    },
    {
      role: "Admin & Logistics",
      names: "Mr Liu Gong Kai, Mr Lu Jiayu"
    },
    {
      role: "Ceremonies",
      names: "Ms Foo Xiao Chih, Ms Jessie Eu"
    },
    {
      role: "Facilitator Committee",
      names: "Mr Alex Chan, Mr Mark Cordiner"
    },
    {
      role: "Exploration",
      names: "Mr Tay Han Dong, Ms Lisa Khang"
    },
    {
      role: "Empowerment",
      names: "Ms Carine Ng, Ms Lau Shi Yun"
    },
    {
      role: "Media & Publicity",
      names: "Ms Corina Chang, Ms Carine Ng"
    },
    {
      role: "Engagement",
      names: "Ms Corina Chang, Ms Juansa Cheng"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background-primary">
      <ScrollAnimation />
      <Navbar/>

      <div className="w-screen py-32">
        <h1 className="max-w-7xl px-8 mx-auto text-7xl text-center text-font-primary font-display font-bold py-2.5">Meet the Organising Committee!</h1>

        <div className="flex flex-col">
          { 
            creditsList.map((credit:any, index:any) => (
              <div key={index}>
              <SplitSection
                left={
                  <div className=" aspect-5708/3805">
                    <Image
                    src={credit.source}
                    fill
                    className="object-cover rounded-3xl overflow-hidden"
                    alt="adgi comm picture"
                    quality={75}
                    />
                  </div>
                }
                right={
                  <div>
                    {credit.credits}
                  </div>
                }

                addClassName={`${index%2 == 0 ? "bg-background-primary" : "bg-background-secondary"} py-32`}

              />
              </div>

            ))

          }
        </div>

        <div className="flex flex-col bg-background-primary pt-24 max-w-7xl px-8 mx-auto">

          <div className="text-center border-t border-b border-background-secondary py-8">
            <h1 className="text-5xl max-md:text-4xl text-center text-font-primary font-display font-bold pb-8">Acknowledgements</h1>
            <p className="text-base font-light font-sans">
              We wish to thank our Guest-of-Honour, our invited speakers for the Panel Discussions, 
              teachers, students, partners, and others who have contributed to the seminar in one 
              way or another. We would also like to specially thank the following for supporting this event:
            </p>
          </div>

          <div className="md:mb-4">
            <h2 className="text-4xl max-md:text-2xl font-extrabold font-display pt-16 pb-6">Teacher Organising Committee</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-y-8 gap-y-1 gap-x-12 text-sm md:text-base items-center">
            {teacherCreditsList.map((item: any, index: any) => (
              <React.Fragment key={index}>

                <div className="text-xl font-sans font-semibold max-md:pt-4">
                  {item.role}
                </div>
                <div className="md:col-span-2">
                  {item.names}
                </div>

              </React.Fragment>
            ))}
          </div>
          
        </div>

      </div>

      {/* footer */}
      <Footer />
    </div>
  );
}
