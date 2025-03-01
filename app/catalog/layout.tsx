import type { Metadata } from "next";
import localFont from 'next/font/local'
import HeadNavigation from "../../components/ui/HeadNavigation";
import BreadCrumb from "../../components/ui/BreadCrumb";
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
  title: 'Furniture Catalog - WilNWin Furniture',
  description: 'Browse our collection of stylish furniture sets, perfect for any room in your home.',
  keywords: 'furniture sets, home furniture, living room furniture, bedroom sets, dining sets, custom furniture',
  openGraph: {
    title: 'Furniture Catalog - WilNWin Furniture',
    description: 'Explore various furniture sets that suit your home`s needs. From modern to traditional, find the perfect set for you.',
    images: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/w2trusttrade-furniture/photoset/set_1.jpg`, // Make sure to use a good-sized image
    url: 'https://www.furniture.w2trusttrade.com/catalog',
    type: 'website', // This tells social media that it's a product page
    siteName: 'WilNWin Furniture',
  },
  robots: {
    index: true,
    follow: true,
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
         className={`${PlayfairDisplay.variable} ${EBGaramond.variable} ${IBM_Plex_Mono.variable} antialiased`}
      >
        <header>
          <HeadNavigation />
          <BreadCrumb></BreadCrumb>
        </header>
        {children}
      </body>
    </html>
  );
}