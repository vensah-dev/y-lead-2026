"use client";

import Link from "next/link";

export function PrimaryButton({ 
  text, 
  href,
  onClick,
  disabled = false,
  colour
}: { 
  text: React.ReactNode; 
  href?: string;
  onClick: any;
  disabled?: any,
  colour?: string;
}) {
  return (
    <Link onClick={onClick} 
    className={`flex px-6 py-3 ${colour ? colour : "bg-accent-secondary text-accent-secondary-dark"} ${disabled ? "opacity-25 pointer-events-none" : "opacity-100 pointer-events-auto"} text-center rounded-full md:text-base hover:opacity-65 transition-opacity duration-300`} 
    href={href || "#"} >
      {text}
    </Link>
  );
}

