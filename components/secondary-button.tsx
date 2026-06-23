"use client";

import Link from "next/link";

export function SecondaryButton({ 
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
    className={`border ${colour ? colour : "border-accent-primary text-accent-primary"} ${disabled ? "opacity-25 pointer-events-none" : "opacity-100 pointer-events-auto"} px-8 py-1 rounded-lg font-medium text-sm md:text-base hover:bg-accent-primary/10 transition-colors"`} 
    href={href || "#"} >
      {text}
    </Link>
  );
}

