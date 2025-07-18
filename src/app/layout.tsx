import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./(dashboard)/globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { AuthProvider } from "@/context/AuthContext";
import { Toaster } from "sonner";
import { TableProvider } from "@/context/TableContext";
import "react-day-picker/style.css";
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
        <AuthProvider>
          <ThemeProvider>
            <TableProvider>
              <div className="min-h-screen w-full flex flex-col">
                {children}
              </div>
            </TableProvider>

            <Toaster richColors position="top-right" />
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
