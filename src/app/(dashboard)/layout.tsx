import "./globals.css";
import Aside from "@/components/layout/aside/Aside";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex w-full flex-1">
      <main className="flex-1 flex w-full">
        <Aside />
        {children}
      </main>
    </div>
  );
}
