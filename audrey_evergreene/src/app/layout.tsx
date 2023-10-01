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
      <body className="relative min-h-screen min-w-screen bg-gradient-to-b from-blue-950 to-green-950">
        <div className="fixed top-5 left-5 w-1/2 h-auto">
          <img src="/cornerGraphic/cornerGraphic.svg" alt="graphic" />
        </div>
        <div className="flex flex-col sm:flex-row p-5">
          <div>
            <Info />
          </div>
          <div className="relative">
            <Menu />
          </div>
        </div>
        <CornerGraphic />
      </body>
    </html>
  );
}
