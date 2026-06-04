'use client'
import React, { useState, useEffect } from 'react'

//icons\
import { IoClose } from "react-icons/io5";
import { FaMagnifyingGlass } from "react-icons/fa6";

//Next stuff
import Link from 'next/link';
import { cheers } from '@/lib/cheers';
import CheerThumbnail from './cheers-thumbnail';

export function AllCheers({ cheers }: any) {
  const cheersAlphabetical = JSON.parse(JSON.stringify(cheers)).sort((a: any, b: any) => a.title.localeCompare(b.title))

  const [filteredCheers, setFilteredCheers] = useState(cheersAlphabetical);
  const [inputValue, setInputValue] = useState("")

  const handleSearch = () => {
    const searchTerm = inputValue.toLowerCase();

    const filtered = cheersAlphabetical.filter((item: any) => item.title.toLowerCase().includes(searchTerm));
    setFilteredCheers(filtered);
  }

  const handleChange = (event: any) => {
    const value = event.target.value;
    setInputValue(value);

    console.log(value);
  }

  useEffect(() => {
    handleSearch();
  }, [inputValue]);

  const handleKeyPress = (event: any) => {
    if (event.key === "Enter") return handleSearch()
  }

  return (
    <div className="flex-col max-w-7xl mx-auto my-32 p-8">

      <p className='text-7xl w-full text-center text-white100 font-bold mb-12'>All Cheers</p>

      <div className='flex flex-row items-center mb-12 bg-background-secondary rounded-full overflow-clip'>

        <div className='px-6'>
          <FaMagnifyingGlass className='w-5 h-5 fill-font-secondary' />
        </div>

        <input
          className="block w-full py-4 bg-background-secondary text-base focus:outline-none focus:ring-0 focus:ring-white25 placeholder:text-white50"
          placeholder={"Search for a cheer"}
          value={inputValue ?? ""}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
        />

        <div className='px-6'>
          <IoClose className={`w-5 h-5 fill-white75 ${inputValue == "" ? 'hidden' : ''}`} onClick={() => { setInputValue("") }} />
        </div>

      </div>

      <div className='grid lg:grid-cols-4 grid-cols-1 gap-8'>
        {
          filteredCheers.map((cheer:any, index:any) => (
            <CheerThumbnail key={index} cheer={cheer} />
          ))
        }
      </div>

    </div>
  )
}
