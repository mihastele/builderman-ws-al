import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ 
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({ 
  subsets: ["latin", "latin-ext"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Zidarstvo Lavrič | Profesionalna Gradbena Dela & Zidarska Storitev",
  description: "Zidarstvo Lavrič - družinsko podjetje z dolgoletnimi izkušnjami v gradbeništvu. Nudimo profesionalne zidarske storitve, gradnjo hiš, adaptacije in obnove. Kvalitetno delo in zanesljivost.",
  keywords: "zidarstvo, gradbena dela, zidarske storitve, gradnja hiš, adaptacije, obnove, Lavrič, Slovenija, družinsko podjetje, zidarski mojster",
  authors: [{ name: "Zidarstvo Lavrič" }],
  creator: "Zidarstvo Lavrič",
  openGraph: {
    title: "Zidarstvo Lavrič | Profesionalna Gradbena Dela",
    description: "Družinsko podjetje z dolgoletnimi izkušnjami v gradbeništvu. Kvalitetno delo in zanesljivost.",
    url: "https://zidarstvo-lavric.si",
    siteName: "Zidarstvo Lavrič",
    locale: "sl_SI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zidarstvo Lavrič | Profesionalna Gradbena Dela",
    description: "Družinsko podjetje z dolgoletnimi izkušnjami v gradbeništvu.",
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
    <html lang="sl" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="geo.region" content="SI" />
        <meta name="geo.placename" content="Slovenija" />
      </head>
      <body className="font-sans">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
