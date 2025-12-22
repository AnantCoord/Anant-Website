import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/sections/Header";
import { GlobalEffects } from "@/components/effects";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Team Anant | BITS Pilani Student Satellite Team",
  description:
    "Team Anant is BITS Pilani's student satellite team building a compact hyperspectral imaging CubeSat for vegetation monitoring and analysis.",
  keywords: [
    "Team Anant",
    "BITS Pilani",
    "Nanosatellite",
    "CubeSat",
    "Hyperspectral Imaging",
    "Student Satellite",
  ],
  icons: {
    icon: '/assets/logos/anant-logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}>
        {/* Starry space background */}
        <div className="space-bg" aria-hidden="true" />
        {/* Global interactive effects */}
        <GlobalEffects />
        <Header />
        <main className="relative">{children}</main>
      </body>
    </html>
  );
}
