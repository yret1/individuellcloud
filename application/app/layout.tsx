import type { Metadata } from "next";
import { PT_Sans } from "next/font/google";
import "./globals.css";
import Tag from "@/components/Tag";
import Addbutton from "@/components/Addbutton";
import Searchbutton from "@/components/searchButton";

const geistSans = PT_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
  style: "normal",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans} antialiased bg-mainbg`}>
        <Tag />
        <Searchbutton />
        {children}
        <Addbutton />
      </body>
    </html>
  );
}
