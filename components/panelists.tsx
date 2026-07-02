import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import zephyrIcon from "@/public/icons/icon.svg";
import Image from "next/image";
import Link from 'next/link';

import mrMockPic from "@/public/images/panelists/mock-yi-jun-cropped.avif"
import christy from "@/public/images/panelists/christy tan.avif"
import james from "@/public/images/panelists/James CK Kok.avif"
import keith from "@/public/images/panelists/keith yap.avif"
import khim from "@/public/images/panelists/Khim Tan.avif"
import PIRAGATHESH from "@/public/images/panelists/PIRAGATHESH SUBRAMANIAN.avif"
import royston from "@/public/images/panelists/ROYSTON PHANG.avif"
import SARAFIAN from "@/public/images/panelists/SARAFIAN SALLEH.avif"
import TANG from "@/public/images/panelists/TANG WANZHEN.avif"
import walid from "@/public/images/panelists/walid abdullah.avif"
import YONG from "@/public/images/panelists/YONG MIN HO.avif"
import ZOE from "@/public/images/panelists/ZOE TEE.avif"
import { PrimaryButton } from './primary-button';
import { SecondaryButton } from './secondary-button';

import { panelistData } from "@/lib/panelist-data";

export const Panelists = () => {

  return (

      <>
      <div className="w-full bg-background-secondary">
        <div className="max-w-7xl mx-auto px-8 pb-32">

          {/* title of panel discussion */}
          <div className="border-b border-background-tertiary max-w-7xl mx-auto px-8">

            <h1 data-animate className="font-display xl:text-7xl text-6xl max-sm:text-5xl mb-6 mt-16 font-bold text-font-primary w-full">
              Wind Chimes
            </h1>
            <h2 data-animate className="font-display text-3xl mb-8 font-semibold text-font-primary w-full">
              Panel Discussion
            </h2>

          </div>

          {/* Keynote speaker */}
          <div className="bg-background-secondary flex max-md:flex-col justify-between gap-8 items-center py-12" data-animate>
            <div className="relative w-[37vw] max-md:w-full aspect-875/700 ">
              <Image
                src={mrMockPic}
                alt="Keynote Speaker"
                fill
                className="object-cover drop-shadow-[0_0px_50px_rgba(0,0,0,1)] drop-shadow-font-primary/7"
              />
            </div>

            <div className="flex flex-col items-start">
              <h1 data-animate className="font-display xl:text-7xl text-6xl max-sm:text-5xl mb-6 font-bold text-font-primary w-full">
                Keynote Speaker
              </h1>
              <h2 data-animate className="font-display text-3xl mb-6 font-semibold text-font-primary w-full">
                Mr Mock Yi Jun
              </h2>
              <h2 data-animate className="tracking-tighter text-font-primary w-full">
                Co-founder and President of Advisory Singapore
              </h2>
            </div>

          </div>

          {/* Keynote speaker paragraph */}
          <div className="flex flex-col items-start border-t border-b border-background-tertiary w-full">
            <div data-animate className="text-base text-font-primary w-full py-8">
              Since 2016, Mr Mock Yi Jun has been Co-Founder and President of Advisory Singapore, a fully youth-led charity that has engaged over 278,000 young Singaporeans from all walks of life to make informed career choices. Advisory Singapore runs Singapore's largest pro bono careers-based mentorship programme for students, having delivered over 16,000 hours of mentorship since 2020. His remarkable career journey and distinguished recognitions — including being named a #Generation17 Young Leader and a Queen's Young Leader — speak to his deep and enduring passion for leadership and service. Participants at the Y.LEAD Seminar 2026 will have the opportunity to draw inspiration from Mr Mock's broad and varied experiences across leadership advisory, youth empowerment, and both local and global service. 
            </div>
          </div>

        </div>
      </div>
      <div className="w-full bg-background-primary">
        <div className="max-w-7xl mx-auto px-8">

          {/* Panelists title */}
          <div className="border-b border-background-tertiary max-w-7xl mx-auto px-8" >

            <h1 data-animate className="font-display xl:text-7xl text-6xl max-sm:text-5xl mt-16 mb-8 font-bold text-font-primary w-full">
              Panelists
            </h1>
            
          </div>

          {/* panelist cards */}
          <div className="grid md:grid-cols-2 grid-cols-1 xl:gap-32 gap-x-16 gap-y-32 justify-center items-center py-16 border-b border-background-tertiary">
            {
              panelistData.map((data: any, index: any) => {
                const isLoneLastElement = index === panelistData.length - 1 && index % 2 === 0;

                return (
                  <div data-animate key={index} className={`flex items-center gap-[6vw] justify-start ${isLoneLastElement ? "md:col-span-2 md:justify-center md:mx-auto md:max-w-xl" : ""}`}>

                    {/* Image Wrapper */}
                    <div className="relative h-[12vw] min-h-[100px] max-h-[200px] aspect-square rounded-full overflow-hidden shrink-0">
                      <Image
                        src={data.image}
                        alt="panelist"
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Text Wrapper */}
                    <div className={`flex flex-col items-start min-w-0 ${isLoneLastElement ? "w-auto" : "w-[calc(100%-6vw-12vw)]"}`} >
                      <h1 
                        className="font-display xl:text-5xl text-4xl max-sm:text-3xl xl:mb-6 mb-4 max-sm:mb-2 font-bold text-font-primary text-balance"
                      >
                        {data.name}
                      </h1>
                      <h2 
                        className="mb-6 text-font-primary text-balance"
                      >
                        {data.description} 
                      </h2>
                    </div>
                  </div>
                );
              })
            }
          </div>

          <div className="max-w-xl mx-auto flex justify-center items-center pb-32 pt-16" data-animate>
            <PrimaryButton
              text={
                <>More about the Panelists</>
              }
              href="/about/panelists"
            />
          </div>

        </div>
      </div>
      </>
  );
};

 
