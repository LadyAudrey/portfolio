import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import Nav from "./components/SocialMediaLinks";
import Info from "./components/Info";
import Menu from "./components/Menu";
import CornerGraphic from "./components/CornerGraphic";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative min-h-screen min-w-screen bg-gradient-to-b from-blue-950 to-green-950 text-white">
        <div className="fixed top-5 left-5 w-1/2 h-auto">
          <img src="/cornerGraphic/cornerGraphic.svg" alt="graphic" />
        </div>
        <div className="w-5/6 m-auto my-10 md:pt-40 md:pl-20 flex flex-row justify-between">
          {children}
          <div>
            <Menu />
          </div>
        </div>
        <p className="absolute bottom-3 text-white italic opacity-80">
          @2023 Created by Audrey Evergreene
        </p>
        <CornerGraphic />
      </body>
    </html>
  );
}
