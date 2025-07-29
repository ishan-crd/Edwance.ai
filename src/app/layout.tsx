import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import Navbar from "../components/Navbar";
import FloatingIcons from "../components/FloatingIcons";
import FooterPage from "./footer/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Edwance.AI",
  description: "The future of Edwance learning is here.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="font-plak bg-neutral-white text-neutral-black min-h-screen relative flex flex-col min-h-screen">
        <FloatingIcons />
        <Navbar />
        <main className="pt-8 flex-1">{children}</main>
        <FooterPage />
      </body>
    </html>
  );
}
