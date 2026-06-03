"use client";

import Link from "next/link";

export function PrimaryButton({ 
  text,
  href
}: { 
  text: React.ReactNode; 
  href: string;
}) {
  return (
    <Link className="flex px-8 py-4 bg-accent-secondary text-accent-secondary-dark text-center rounded-full md:text-base hover:opacity-65 transition-opacity duration-300" href={href}>
      {text}
    </Link>
  );
}

