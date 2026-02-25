import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://goatdriver.pl'),
  title: "GOATDRIVER – Serwis Motoryzacyjny | Maciej Kozieł",
  description: "Profesjonalny serwis motoryzacyjny GOATDRIVER – diagnostyka, naprawy mechaniczne, tuning i modyfikacje samochodów sportowych. Maciej Kozieł, ponad 15 lat doświadczenia.",
  keywords: "serwis motoryzacyjny, mechanik, tuning, chiptuning, naprawy samochodów, diagnostyka, GOATDRIVER, Maciej Kozieł, Warszawa",
  authors: [{ name: "Maciej Kozieł" }],
  creator: "Maciej Kozieł",
  publisher: "GOATDRIVER",
  alternates: {
    canonical: 'https://goatdriver.pl',
  },
  openGraph: {
    title: "GOATDRIVER – Serwis Motoryzacyjny | Maciej Kozieł",
    description: "Profesjonalny serwis motoryzacyjny – diagnostyka, naprawy i tuning w Warszawie.",
    url: 'https://goatdriver.pl',
    siteName: 'GOATDRIVER',
    locale: 'pl_PL',
    type: 'website',
    images: [
      {
        url: '/logo.ico',
        width: 512,
        height: 512,
        alt: 'GOATDRIVER Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "GOATDRIVER – Serwis Motoryzacyjny",
    description: "Profesjonalny serwis motoryzacyjny – diagnostyka, naprawy i tuning.",
    images: ['/logo.ico'],
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
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/logo.ico', type: 'image/x-icon' },
    ],
    shortcut: '/favicon.ico',
    apple: '/logo.ico',
  },
};

export const viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link href="https://fonts.cdnfonts.com/css/altruism" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
