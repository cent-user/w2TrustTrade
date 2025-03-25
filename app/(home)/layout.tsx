import type { Metadata } from "next";
import localFont from 'next/font/local'
import HeadNavigation from "../../components/ui/HeadNavigation";
import { GoogleAnalyticsTracking } from '../../components/GoogleAnalytics'
import "../globals.css";


 
const PlayfairDisplay = localFont({
  src: '../../public/fonts/PlayfairDisplay-VariableFont_wght.ttf',
  variable: '--font-pd',
},
);

const EBGaramond = localFont({
  src: '../../public/fonts/EBGaramond-VariableFont_wght.ttf',
  variable: '--font-garamond',
},
);


const IBM_Plex_Mono = localFont({
  src: '../../public/fonts/IBMPlexMono-Regular.ttf',
  variable: '--font-ibmmono',
},
);


export const metadata: Metadata = {
  title: 'WilNWin Furniture - Your Perfect Furniture, Designed Just for You',
  description: 'Discover our carefully crafted furniture, built with quality in mind and designed to fit your unique style. Whether you’re looking for a new set or a custom piece, we`re here to bring your vision to life.',
  keywords: 'furniture, custom furniture, home decor, interior design, high-quality furniture, sustainable furniture',
  openGraph: {
    title: 'WilNWin Furniture - Your Perfect Furniture, Designed Just for You',
    description: 'Discover our carefully crafted furniture, built with quality in mind and designed to fit your unique style. Whether you’re looking for a new set or a custom piece, we`re here to bring your vision to life.',
    images: 'https://unijywgetgmmouifnrhj.supabase.co/storage/v1/object/public/w2trusttrade-furniture/photoset/set_1.jpg', // Make sure to use a good-sized image
    url: 'https://www.furniture.w2trusttrade.com',
    type: 'website', // Type of content
    siteName: 'WilNWin Furniture',
  },
  robots: {
    index: true,
    follow: true, // Allow search engines to index and follow links on this page
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleAnalyticsTracking />
      <body
         className={`${PlayfairDisplay.variable} ${EBGaramond.variable} ${IBM_Plex_Mono.variable} antialiased`}
      >
        <header className="fixed z-[5] w-screen">
          <HeadNavigation />
        </header>
        {children}
      </body>
    </html>
  );
}