"use client";

import Image from "next/image";
import Link from "next/link";

import SocialMediaLinks from "./SocialMediaLinks";
import BulletPt from "./BulletPt";

import { useState } from "react";

export default function MenuToggle() {
  const [menuOpen, setMenuOpen] = useState(false);
  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }
  return (
    <>
      <div className="fixed top-5 right-10 z-40">
        <div onClick={toggleMenu}>
          {menuOpen ? (
            <div className="flex flex-row-reverse gap-5 bg-gradient-to-tr from-green-950 to-blue-950 text-white bg-amber-700 p-5 border-2">
              <div>
                <Image
                  src="/ExitMenu.svg"
                  width={80}
                  height={80}
                  alt="Hamburger Menu"
                  className=""
                />
              </div>
              <div>
                <SocialMediaLinks />
                <div className="flex flex-col gap-5">
                  <div className="menu_items">
                    <BulletPt />
                    <Link href="/about" replace>
                      About Audrey
                    </Link>
                  </div>
                  <div className="menu_items">
                    <BulletPt />
                    <Link href="/projects" replace>
                      Projects
                    </Link>
                  </div>
                  <div className="menu_items">
                    <BulletPt />
                    <Link href="/code_design" replace>
                      Code & Design
                    </Link>
                  </div>
                  <div className="menu_items">
                    <BulletPt />
                    <Link href="/skills_tools" replace>
                      Skills & Tools
                    </Link>
                  </div>
                  {/* <div className="menu_items">
                    <BulletPt />
                    <Link href="/testimonials" replace>
                      Testimonials
                    </Link>
                  </div> */}
                  {/* <div className="menu_items">
                    <BulletPt />
                    <Link href="/resume" replace>
                      Resume
                    </Link>
                  </div> */}
                  <div className="menu_items">
                    <BulletPt />
                    <Link href="/blog" replace={false}>
                      Blog
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <Image
                src="/HamburgerMenu.svg"
                width={80}
                height={80}
                alt="Hamburger Menu"
                className=""
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
