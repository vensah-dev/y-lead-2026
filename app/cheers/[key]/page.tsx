import React from 'react';

//Next Stuff

//Data
import { cheers } from "@/lib/cheers";
// import { Allcheers } from '@/components/all-cheers';
// import { cheersDetailView } from '@/components/cheer-detail-view';
import Head from 'next/head';
import CheerDetailView from '@/components/cheer-detail-view';

import { AllCheers } from '@/components/all-cheers';

export const generateStaticParams = async () => {

    const paths = [
        { key: "all" },
        ...cheers
    ]

    return paths.map((p) => ({
        key: p.key
    }))
};

export async function generateMetadata({params}:{params: any}) {
    const cheer = cheers.find((p) => p.key === params.key)

    return {
        title: `${cheer ? `${cheer.title} | cheers ` : "All cheers"}`,
        icons: {
            icon: `${cheer ? cheer.image : "/icons/favicon.ico"}`,
        },
        openGraph: {
            title: cheer ? `${cheer.title} | cheers | Venkatesh` : "All cheers | cheers | Venkatesh",
            description: cheer ? cheer.title.replace(/[\n\r\t]/gm, "") : "Check out all the cheers I was involved in over the years!",
            url: "https://vensah.dev/y-lead-2026/cheers/" + params.key,
            type: "website",
            logo: 'https://vensah.dev/y-lead-2026/icons/open-graph-image.png',
            images: [
                (
                    cheer ?
                        ({
                            width: 1080,
                            height: 600,
                            url: "https://vensah.dev/y-lead-2026" + cheer.image,
                        })
                        :
                        ({
                            width: 1900,
                            height: 1900,
                            url: `https://vensah.dev/y-lead-2026/icons/open-graph-image.png`,
                        })
                )
            ]
        },
    };
}


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
                        <CheerDetailView cheer={cheer} />
                    </div>
                )
            }
        </>
    );
}