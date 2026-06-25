import type { Metadata } from "next";
import { Antonio, Geist_Mono, Sen } from "next/font/google";
import "./globals.css";

const antonio = Antonio({
  variable: "--font-antonio",
  subsets: ["latin"],
});

const sen = Sen({
  subsets: ["latin"],
  variable: "--font-sen",
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://y-lead-2026.vercel.app"; 

export const metadata: Metadata = {
  title: "Y.LEAD 2026",
  description: "Youth Leverage Educate Actuate Develop Seminar 2026",
  
  openGraph: {
    title: "Y.LEAD 2026",
    description: "Youth Leverage Educate Actuate Develop Seminar 2026",
    url: siteUrl,
    siteName: "Y.LEAD Seminar",
    locale: "en_US",
    type: "website",
    // 2. Reference the public folder image with the base URL
    images: [
      {
        url: `${siteUrl}/og-image.png`, // Maps directly to public/og-image.png
        width: 1200,
        height: 630,
        alt: "Y.LEAD Seminar 2026",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Y.LEAD 2026",
    description: "Youth Leverage Educate Actuate Develop Seminar 2026",
    // 3. Do the same for Twitter
    images: [`${siteUrl}/og-image.png`], 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${antonio.variable} ${geistMono.variable} ${sen.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-gray-900">{children}</body>
    </html>
  );
}
