import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GOATDRIVER – Serwis Motoryzacyjny | Maciej Kozieł",
  description: "Profesjonalny serwis motoryzacyjny GOATDRIVER – diagnostyka, naprawy mechaniczne, tuning i modyfikacje samochodów sportowych. Maciej Kozieł, ponad 15 lat doświadczenia.",
  keywords: "serwis motoryzacyjny, mechanik, tuning, chiptuning, naprawy samochodów, diagnostyka, GOATDRIVER, Maciej Kozieł",
  openGraph: {
    title: "GOATDRIVER – Serwis Motoryzacyjny",
    description: "Profesjonalny serwis motoryzacyjny – diagnostyka, naprawy i tuning.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/logo.ico',
  },
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
