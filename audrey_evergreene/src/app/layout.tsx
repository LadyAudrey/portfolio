import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import CornerGraphic from "./components/CornerGraphic";
import MenuToggle from "./components/MenuToggle";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className="h-screen flex flex-col w-full
 text-white"
      >
        <div className="bg-gradient-to-b from-emerald-950 to-blue-950 overscroll-contain">
          <div className="fixed top-0 w-full h-44 z-10 bg-gradient-to-b from-emerald-950 via-emerald-950 to-transparent"></div>
          <div className="fixed top-5 left-5 w-1/2 h-auto z-20">
            <CornerGraphic />
          </div>
          <div>
            <MenuToggle />
          </div>
          <div className="min-w-full py-40 md:px-48 flex flex-row justify-between ">
            {children}
          </div>
          <p className="fixed bottom-5 left-5 text-white italic opacity-80 z-50">
            @2023 Created by Audrey Evergreene
          </p>
          <div className="fixed right-5 bottom-5 w-1/2 h-auto rotate-180 z-20">
            <CornerGraphic />
          </div>
          s
          <div className="fixed bottom-0 w-full h-48 z-10 bg-gradient-to-b from-transparent via-blue-950  to-blue-950"></div>
        </div>
      </body>
    </html>
  );
}

// bg-gradient-to-b from-blue-950 to-green-950

// {/* <div className="fixed top-0 w-full h-40 z-10 bg-gradient-to-b from-blue-950 via-blue-950 to-transparent"></div> */}
