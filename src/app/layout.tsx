import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
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
  openGraph: {
    title: "YAKKA SPORT - Coming Soon",
    description: "Something amazing is coming soon! YAKKA SPORT is revolutionizing the world of sports. Get ready for the ultimate sports experience.",
    url: 'https://yakkasport.com',
    siteName: 'YAKKA SPORT',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'YAKKA SPORT - Coming Soon',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "YAKKA SPORT - Coming Soon",
    description: "Something amazing is coming soon! YAKKA SPORT is revolutionizing the world of sports. Get ready for the ultimate sports experience.",
    images: ['/twitter-image.png'],
    creator: '@yakkasport',
    site: '@yakkasport',
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#10b981" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="YAKKA SPORT" />
        <link rel="apple-touch-icon" href="/apple-icon.svg" />
        <link rel="icon" type="image/svg+xml" href="/icon.svg" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
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
