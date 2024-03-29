import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title:  {
    absolute:'',
    default:'Portfolio',
    template:'%s | Portfoio'
  },
  description: "Abhisheks Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="lg:flex">
        <Sidebar />
        <div className="lg:w-4/5 w-full lg:mt-0 ">{children}</div>
      </body>
    </html>
  );
}
