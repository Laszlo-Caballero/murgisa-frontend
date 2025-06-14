import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./(dashboard)/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dashboard Murgisa",
  description: "Dashboard para la gestión de Murgisa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <div className="min-h-screen w-full flex flex-col">{children}</div>
      </body>
    </html>
  );
}
