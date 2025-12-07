import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components/layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Elan.az - Azərbaycanın ən böyük elan saytı",
  description: "Asan, sürətli və etibarlı alış-verişin ünvanı. Nəqliyyat, daşınmaz əmlak, elektronika və daha çox.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="az">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen bg-background-light dark:bg-background-dark`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
