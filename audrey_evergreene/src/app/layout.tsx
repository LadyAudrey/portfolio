import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import Nav from "./components/Nav";
import Info from "./components/Info";
import Menu from "./components/Menu";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen w-screen bg-gradient-to-b from-blue-950 to-green-950 grid grid-cols-12 grid-rows-6">
        <div className="flex flex-row">
          <Image
            src="/cornerGraphic.svg"
            width={500}
            height={500}
            alt="graphic"
            className="p-5 absolute top-0 left-0"
          ></Image>
          <Nav />
        </div>
        <div className="col-start-2 col-span-10 row-start-2 row-span-4 grid grid-cols-4 gap-6 p-5">
          <div className="col-start-1 col-span-2">
            <Info/>
          </div>
          <div className="col-start-4">
            <Menu />
          </div>
        </div>
        <Image
          src="/cornerGraphic.svg"
          width={400}
          height={400}
          alt="graphic"
          className="opacity-20 p-5 rotate-180 absolute bottom-0 right-0"
        ></Image>
      </body>
    </html>
  );
}
