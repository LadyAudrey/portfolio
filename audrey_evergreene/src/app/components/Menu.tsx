import Image from "next/image";
import Link from "next/link";

export default function Menu() {
  return (
    <>
      <div className="flex flex-col space-y-3 text-2xl text-yellow-100 hover:text-3xl">
        <div className="flex flex-row items-center">
          <Image
            src="/bullet.svg"
            width={20}
            height={20}
            alt="List Marker"
            className="m-5"
          />
          <Link href="/about">About Audrey</Link>
        </div>
        <div className="flex flex-row items-center">
          <Image
            src="/bullet.svg"
            width={20}
            height={20}
            alt="List Marker"
            className="m-5"
          />
          <Link href="/projects">Projects</Link>
        </div>
        <div className="flex flex-row items-center">
          <Image
            src="/bullet.svg"
            width={20}
            height={20}
            alt="List Marker"
            className="m-5"
          />
          <Link href="/code_design">Code & Design</Link>
        </div>
        <div className="flex flex-row items-center">
          <Image
            src="/bullet.svg"
            width={20}
            height={20}
            alt="List Marker"
            className="m-5"
          />
          <Link href="/skills">Skills & Tools</Link>
        </div>
        <div className="flex flex-row items-center">
          <Image
            src="/bullet.svg"
            width={20}
            height={20}
            alt="List Marker"
            className="m-5"
          />
          <Link href="/testimonials">Testimonials</Link>
        </div>
        <div className="flex flex-row items-center">
          <Image
            src="/bullet.svg"
            width={20}
            height={20}
            alt="List Marker"
            className="m-5"
          />
          <Link href="/resume">Resume</Link>
        </div>
      </div>
    </>
  );
}
