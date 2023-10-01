import Image from "next/image";
import Link from "next/link";
import SM from "./SocialMediaLinks";

export default function Menu() {
  return (
    <>
      <div className="flex flex-col gap-5 text-2xl text-yellow-100 hover:text-3xl">
        <SM />
        <div className="flex flex-row items-center">
          <Image src="/bullet.svg" width={20} height={20} alt="List Marker" />
          <Link href="/about">About Audrey</Link>
        </div>
        <div className="flex flex-row items-center">
          <Image src="/bullet.svg" width={20} height={20} alt="List Marker" />
          <Link href="/projects">Projects</Link>
        </div>
        <div className="flex flex-row items-center">
          <Image src="/bullet.svg" width={20} height={20} alt="List Marker" />
          <Link href="/code_design">Code & Design</Link>
        </div>
        <div className="flex flex-row items-center">
          <Image src="/bullet.svg" width={20} height={20} alt="List Marker" />
          <Link href="/skills">Skills & Tools</Link>
        </div>
        <div className="flex flex-row items-center">
          <Image src="/bullet.svg" width={20} height={20} alt="List Marker" />
          <Link href="/testimonials">Testimonials</Link>
        </div>
        <div className="flex flex-row items-center">
          <Image src="/bullet.svg" width={20} height={20} alt="List Marker" />
          <Link href="/resume">Resume</Link>
        </div>
      </div>
    </>
  );
}
