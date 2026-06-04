"use client";

import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { cheers } from "@/lib/cheers";
import Image from "next/image";

import { AllCheers } from "@/components/all-cheers";

export default function AllCheersPage() {

  return (
    <div>
      <Navbar />
      <AllCheers cheers={cheers} />
      <Footer /> 
    </div>
  );
}