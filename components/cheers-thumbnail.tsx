//React
import React from 'react'

//images
// import ScratchLogo from "@/public/images/about/scratch-logo.png"

//Next Stuff
import Image from "next/image";
import Link from "next/link";


export default function CheerThumbnail(
  {
    cheer,
  }:{
    cheer: any,
  }) 
  {

    return (
            <div className='flex-col bg-background-secondary rounded-3xl overflow-clip p-3 group-active:brightness-125  transition-all duration-350'>
                <Link href={`/cheers/${cheer.key}`} className='group w-full lg:hover:opacity-70 active:opacity-100' onClick={() => { console.log(cheer.image) }}>
                    <div className={`flex items-center justify-center w-full aspect-4/3 rounded-2xl overflow-clip group-active:opacity-70 lg:group-active:brightness-75 transition-all duration-350 ${cheer.bgColor}`}>
                        <h1 className='text-8xl'>
                            {cheer.emoji}
                        </h1>
                    </div>

                    <p className='whitespace-nowrap	pt-4 pl-2 text-h6 text-font-primary font-normal text-ellipsis overflow-hidden'>{cheer.title}</p>

                </Link>

            </div>
    )
}
