import React from 'react';

//Next Stuff

//Data
import { cheers } from "@/lib/cheers";
// import { Allcheers } from '@/components/all-cheers';
// import { cheersDetailView } from '@/components/cheer-detail-view';
import Head from 'next/head';
import CheerDetailView from '@/components/cheer-detail-view';

import { AllCheers } from '@/components/all-cheers';
import Footer from '@/components/footer';

export const generateStaticParams = async () => {

    const paths = [
        { key: "all" },
        ...cheers
    ]

    return paths.map((p) => ({
        key: p.key
    }))
};

export default async function cheersDetailPage({ params }:{ params: any }) {

// 1. You MUST destructure or assign the awaited value
    const resolvedParams = await params; 
    const key = resolvedParams.key;

    // 2. Use the resolved 'key' to find the cheer
    const cheer = cheers.find((p) => p.key === key);

    return (
        <>
            {
                key === "all" ? (
                    <div>
                        <AllCheers cheers={cheers} />
                    </div>
                ) : (
                    // <cheersDetailView cheer={cheer} />
                    <div>
                        <div className="min-h-screen">
                            <CheerDetailView cheer={cheer} />
                        </div>
                        <Footer />
                    </div>

                )
            }
        </>
    );
}