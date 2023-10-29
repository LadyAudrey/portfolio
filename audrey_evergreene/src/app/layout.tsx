import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import Nav from "./components/SocialMediaLinks";
import Info from "./components/Info";
import { MenuButton } from "./components/MenuButton";
import Menu from "./components/Menu";
import CornerGraphic from "./components/CornerGraphic";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-w-screen min-h-screen bg-gradient-to-b from-blue-950 to-green-950 text-white">
        <div className="absolute top-5 left-5 w-1/2 h-auto">
          <CornerGraphic />
        </div>
        <div className="absolute top-5 right-8">
          <MenuButton />
        </div>
        {children}
        <p className="fixed bottom-3 text-white italic opacity-80">
          @2023 Created by Audrey Evergreene
        </p>
        <div className="absolute right-5 bottom-5 w-2/3 h-auto rotate-180 opacity-40">
          <CornerGraphic />
        </div>
      </body>
    </html>
  );
}
