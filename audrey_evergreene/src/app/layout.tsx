import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import Nav from "./components/Nav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen w-screen bg-gradient-to-b from-blue-950 to-green-950">
        <div className="flex flex-row">
          <Image
            src="/cornerGraphic.svg"
            width={500}
            height={500}
            alt="graphic"
            className="p-5"
          ></Image>
          <Nav className="place-self-end"/>
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

// {children}
