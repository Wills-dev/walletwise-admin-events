import type { Metadata } from "next";

import {
  Inter,
  Seaweed_Script,
  Cinzel_Decorative,
  Cinzel,
  Playfair_Display,
} from "next/font/google";
import "./globals.css";

import { Toaster } from "@/components/ui/sonner";
import QueryProvider from "@/components/QueryProvider";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const seaWeedScript = Seaweed_Script({
  subsets: ["latin"],
  variable: "--font-seaweed_script",
  weight: "400",
});
export const cinzelDecorative = Cinzel_Decorative({
  subsets: ["latin"],
  variable: "--font-cinzel_decorative",
  weight: ["400", "700", "900"],
});
export const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "700", "500", "600", "800", "900"],
});
export const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair_display",
  weight: ["400", "700", "500", "600", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "WalletWise Events",
    template: "%s | WalletWise Events",
  },
  description:
    "Buy tickets to WalletWise programs, workshops, and events designed to help individuals and businesses grow financially and digitally.",

  keywords: [
    "WalletWise",
    "WalletWise events",
    "buy event tickets",
    "finance workshops",
    "business programs",
    "financial literacy events",
    "Nigeria tech events",
  ],

  authors: [{ name: "WalletWise Team" }],

  openGraph: {
    title: "WalletWise Events",
    description:
      "Get tickets to WalletWise programs, workshops, and exclusive events focused on financial growth and digital innovation.",
    url: "https://events.walletwise.ng",
    siteName: "WalletWise Events",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "WalletWise Events",
    description:
      "Secure your ticket to WalletWise programs, workshops, and events.",
  },

  metadataBase: new URL("https://events.walletwise.ng"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <QueryProvider>
        <body
          className={`${inter.variable} ${seaWeedScript.variable} ${cinzelDecorative.variable} ${cinzel.variable} ${playfairDisplay.variable}`}
        >
          {children}
          <Toaster />
        </body>
      </QueryProvider>
    </html>
  );
}
