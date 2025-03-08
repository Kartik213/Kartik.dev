import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto_Mono, Dancing_Script } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"]
})

const dancing = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Kartik Gupta",
  description: "Building Web apps.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoMono.variable} antialiased bg-background`}
      >
        <Analytics />
        {children}
      </body>
    </html>
  );
}
