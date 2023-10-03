import Image from "next/image";
import Link from "next/link";
import SocialMediaLinks from "./SocialMediaLinks";

export default function Menu() {
  return (
    <>
      <div className="flex flex-col gap-5 text-2xl text-yellow-100">
        <SocialMediaLinks/>
        <div className="menu_items">
          <Image src="/bullet.svg" width={20} height={20} alt="List Marker" className="bulletPt"/>
          <Link href="/about" replace>About Audrey</Link>
        </div>
        <div className="menu_items">
          <Image src="/bullet.svg" width={20} height={20} alt="List Marker" className="bulletPt"/>
          <Link href="/projects" replace>Projects</Link>
        </div>
        <div className="menu_items">
          <Image src="/bullet.svg" width={20} height={20} alt="List Marker" className="bulletPt"/>
          <Link href="/code_design" replace>Code & Design</Link>
        </div>
        <div className="menu_items">
          <Image src="/bullet.svg" width={20} height={20} alt="List Marker" className="bulletPt"/>
          <Link href="/skills_tools" replace>Skills & Tools</Link>
        </div>
        <div className="menu_items">
          <Image src="/bullet.svg" width={20} height={20} alt="List Marker" className="bulletPt"/>
          <Link href="/testimonials" replace>Testimonials</Link>
        </div>
        <div className="menu_items">
          <Image src="/bullet.svg" width={20} height={20} alt="List Marker" className="bulletPt"/>
          <Link href="/resume" replace>Resume</Link>
        </div>
      </div>
    </>
  );
}
