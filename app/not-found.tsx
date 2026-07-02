'use client';

import Link from 'next/link'
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function NotFound() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className='flex flex-col w-screen h-screen items-center justify-center gap-8 text-center bg-background-tertiary'>

            <div className="text-6xl font-bold font-sans text-accent-dark">404</div>

            <Link href="/" className='text-accent-dark'>Go to About</Link>
        </div>
    )
}
