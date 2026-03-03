import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/site";

import "./globals.css";

const glorySerif = localFont({
  src: "../fonts/GlorySerif.otf",
  display: "swap",
  variable: "--font-glory-serif"
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans"
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono"
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://institutoestrelaazul.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  openGraph: {
    siteName: siteConfig.title,
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${glorySerif.variable} ${dmSans.variable} ${jetBrainsMono.variable} antialiased`}
    >
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/oix1dqk.css" />
        <link rel="alternate" type="application/rss+xml" title="Blog RSS" href="/feed.xml" />
      </head>
      <body className="font-sans">
        <div className="min-h-screen bg-background">
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}

