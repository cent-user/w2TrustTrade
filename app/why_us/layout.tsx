import type { Metadata } from "next";
import localFont from 'next/font/local'
import HeadNavigation from "../../components/ui/HeadNavigation";
import BreadCrumb from "../../components/ui/BreadCrumb";
import "../globals.css";
import { GoogleAnalyticsTracking } from '../../components/GoogleAnalytics'

const PlayfairDisplay = localFont({
  src: '../../public/fonts/PlayfairDisplay-VariableFont_wght.ttf',
  variable: '--font-pd',
});

const EBGaramond = localFont({
  src: '../../public/fonts/EBGaramond-VariableFont_wght.ttf',
  variable: '--font-garamond',
});

const IBM_Plex_Mono = localFont({
  src: '../../public/fonts/IBMPlexMono-Regular.ttf',
  variable: '--font-ibmmono',
});

export const metadata: Metadata = {
  title: 'Why Us - WilNWin Furniture',
  description: 'Discover what sets WilNWin Furniture apart — expert finishing, years of export experience, and fully customizable designs tailored to your needs.',
  keywords: 'high-quality furniture, custom furniture, export experience, premium finishing, bespoke furniture design',
  openGraph: {
    title: 'Why Us - WilNWin Furniture',
    description: 'We specialize in expert furniture finishing, seamless international export, and fully customizable designs to bring your vision to life.',
    images: 'https://unijywgetgmmouifnrhj.supabase.co/storage/v1/object/public/w2trusttrade-furniture/photoset/set_1.jpg', // Make sure to use a good-sized image
    url: 'https://www.furniture.w2trusttrade.com/whyus',
    type: 'website',
    siteName: 'WilNWin Furniture',
  },
  robots: {
    index: true,
    follow: true,
  },
};

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
        <header>
          <HeadNavigation />
          <BreadCrumb />
        </header>
        {children}
      </body>
    </html>
  );
}
