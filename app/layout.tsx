import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CookieConsent } from "@/components/legal/CookieConsent";
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://premiumconstruction.uk"),
  title: "Premium Construction UK | Whole House Renovations & Extensions",
  description: "Premium Construction UK: Premier whole-house renovations, luxury kitchens, and licensed trades. High-end craftsmanship for your home. Get a free quote today.",
  icons: {
    icon: [
      { url: '/favicon/favicon.ico' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon/favicon-96x96.png', type: 'image/png', sizes: '96x96' },
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png' },
    ],
  },
  openGraph: {
    title: "Premium Construction UK | Whole House Renovations & Extensions",
    description: "Premium Construction UK: Premier whole-house renovations, luxury kitchens, and licensed trades. High-end craftsmanship for your home. Get a free quote today.",
    url: "https://premiumconstruction.uk",
    siteName: "Premium Construction UK",
    images: [
      {
        url: "https://premiumconstruction.uk/socialsharing.jpg",
        width: 1200,
        height: 630,
        alt: "Premium Construction UK | Luxury Renovations",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Construction UK | Luxury Renovations",
    description: "Expert whole-house renovations and licensed trades. High-end craftsmanship for modern luxury living. Get a quote today.",
    images: ["https://premiumconstruction.uk/socialsharing.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body
        className={`${inter.variable} antialiased text-primary bg-white`}
      >
        <LocalBusinessSchema />
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
