import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { AudioPlayer } from "@/components/ui/AudioPlayer";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-anton",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Kimberly Chege | Social Media Marketer — I Make You Un-Boring",
  description:
    "Kimberly Chege is a social media marketer turning static brands into living, breathing communities. Content creation, executive branding, and digital outreach.",
  keywords: [
    "social media marketer",
    "content creator",
    "digital marketing",
    "Kimberly Chege",
    "brand strategy",
    "social media management",
  ],
  openGraph: {
    title: "Kimberly Chege | I Make You Un-Boring",
    description:
      "Social Media Marketer turning static brands into living, breathing communities.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${inter.variable} antialiased`}
    >
      <body className="min-h-screen bg-bg text-text font-body overflow-x-hidden">
        <CustomCursor />
        <AudioPlayer />
        {children}
      </body>
    </html>
  );
}
