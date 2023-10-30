import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import CornerGraphic from "./components/CornerGraphic";
import Menu from "./components/MenuToggle";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-full w-full bg-gradient-to-b from-blue-950 to-green-950 text-white">
        <div className="fixed top-5 left-5 w-1/2 h-auto">
          <CornerGraphic />
        </div>
        <div>
          <Menu />
        </div>
        <div className="min-w-full md:pt-40 md:px-60 flex flex-row justify-between container">
          <div>{children}</div>
        </div>
        <p className="fixed bottom-3 text-white italic opacity-80">
          @2023 Created by Audrey Evergreene
        </p>
        <div className="fixed right-5 bottom-5 w-1/2 h-auto rotate-180">
          <CornerGraphic />
        </div>
      </body>
    </html>
  );
}
