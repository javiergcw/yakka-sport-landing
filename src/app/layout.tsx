import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { MetaDataUseCase } from "@/core/use-case/metaData/meta_data_use_case";
import { getCurrentFlavor } from "@/utils/flavors/current-flavor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  try {
    const metaDataUseCase = new MetaDataUseCase();
    const metaData = await metaDataUseCase.getMetaDataItem();
    
    if (!metaData) {
      // Fallback metadata si no se pueden obtener los datos
      return {
        title: "YAKKA SPORT - Coming Soon | Revolutionary Sports Experience",
        description: "Something amazing is coming soon! YAKKA SPORT is revolutionizing the world of sports. Get ready for the ultimate sports experience. Join our community and be the first to know when we launch.",
        keywords: ["YAKKA SPORT", "sports", "coming soon", "revolutionary", "sports experience", "launch", "notify me"],
        authors: [{ name: "YAKKA SPORT Team" }],
        creator: "YAKKA SPORT",
        publisher: "YAKKA SPORT",
        formatDetection: {
          email: false,
          address: false,
          telephone: false,
        },
        metadataBase: new URL('https://yakkasport.com'),
        alternates: {
          canonical: '/',
        },
        robots: {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
          },
        },
        verification: {
          google: 'your-google-verification-code',
        },
      };
    }

    return {
      title: metaData.title,
      description: metaData.description,
      keywords: metaData.keywords,
      authors: [{ name: metaData.authors.name }],
      creator: metaData.creator,
      publisher: metaData.publisher,
      formatDetection: {
        email: metaData.format_detection_email ? true : false,
        address: metaData.format_detection_address ? true : false,
        telephone: metaData.format_detection_telephone ? true : false,
      },
      metadataBase: new URL(metaData.metadata_base),
      alternates: {
        canonical: metaData.canonical,
      },
      robots: {
        index: metaData.robots_index,
        follow: metaData.robots_follow,
        googleBot: {
          index: metaData.googlebot_json.index,
          follow: metaData.googlebot_json.follow,
          'max-video-preview': metaData.googlebot_json['max-video-preview'],
          'max-image-preview': metaData.googlebot_json['max-image-preview'] as "none" | "standard" | "large",
          'max-snippet': metaData.googlebot_json['max-snippet'],
        },
      },
      verification: {
        google: metaData.verification_google,
      },
      icons: {
        icon: [
          ...(metaData.favicon_ico ? [{ url: `https://cms.yakkasport.com.au/assets/${metaData.favicon_ico}.jpg`, sizes: 'any' }] : []),
          ...(metaData.favicon_svg ? [{ url: `https://cms.yakkasport.com.au/assets/${metaData.favicon_svg}.jpg`, type: 'image/jpeg' }] : []),
        ],
        apple: [
          ...(metaData.apple_touch_icon ? [{ url: `https://cms.yakkasport.com.au/assets/${metaData.apple_touch_icon}.jpg`, sizes: '180x180' }] : []),
        ],
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    // Fallback metadata en caso de error
    return {
      title: "YAKKA SPORT",
      description: "Something amazing is coming soon! YAKKA SPORT is revolutionizing the world of sports. Get ready for the ultimate sports experience. Join our community and be the first to know when we launch.",
      keywords: ["YAKKA SPORT", "sports", "coming soon", "revolutionary", "sports experience", "launch", "notify me"],
      authors: [{ name: "YAKKA SPORT Team" }],
      creator: "YAKKA SPORT",
      publisher: "YAKKA SPORT",
      formatDetection: {
        email: false,
        address: false,
        telephone: false,
      },
      metadataBase: new URL('https://yakkasport.com'),
      alternates: {
        canonical: '/',
      },
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
      },
      verification: {
        google: 'your-google-verification-code',
      },
      icons: {
        icon: [
          { url: `/favicon-${getCurrentFlavor()}.ico`, sizes: 'any' },
          { url: `/icon-${getCurrentFlavor()}.svg`, type: 'image/svg+xml' },
        ],
        apple: [
          { url: `/apple-icon-${getCurrentFlavor()}.svg`, sizes: '180x180' },
        ],
      },
    };
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Obtener metadatos para los favicons
  let metaData = null;
  try {
    const metaDataUseCase = new MetaDataUseCase();
    metaData = await metaDataUseCase.getMetaDataItem();
  } catch (error) {
    console.error('Error fetching meta data for favicons:', error);
  }

  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#10b981" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="YAKKA SPORT" />
        {metaData?.apple_touch_icon && (
          <link rel="apple-touch-icon" href={`https://cms.yakkasport.com.au/assets/${metaData.apple_touch_icon}.jpg`} />
        )}
        {metaData?.favicon_svg && (
          <link rel="icon" type="image/jpeg" href={`https://cms.yakkasport.com.au/assets/${metaData.favicon_svg}.jpg`} />
        )}
        {metaData?.favicon_ico && (
          <link rel="icon" type="image/jpeg" href={`https://cms.yakkasport.com.au/assets/${metaData.favicon_ico}.jpg`} />
        )}
        {/* Fallback favicons */}
        {!metaData?.apple_touch_icon && (
          <link rel="apple-touch-icon" href={`/apple-icon-${getCurrentFlavor()}.svg`} />
        )}
        {!metaData?.favicon_svg && (
          <link rel="icon" type="image/svg+xml" href={`/icon-${getCurrentFlavor()}.svg`} />
        )}
        {!metaData?.favicon_ico && (
          <link rel="icon" type="image/x-icon" href={`/favicon-${getCurrentFlavor()}.ico`} />
        )}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main >
          {children}
        </main>
        <Footer /> 
      </body>
    </html>
  );
}
