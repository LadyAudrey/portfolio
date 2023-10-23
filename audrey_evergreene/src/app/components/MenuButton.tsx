"use client";

import Image from "next/image";
import Menu from "./Menu";

import { useState } from "react";

export function MenuButton() {
  const [navOpen, setNavOpen] = useState(false);
  function toggleNav() {
    setNavOpen(!navOpen);
  }
  return (
    <div onClick={toggleNav}>
      {navOpen ? (
        <div className="flex items-start bg-gradient-to-b from-green-950 to-blue-950 border-2 border-amber-950 p-5">
          <Menu />
          <Image
            src={"/Arrow.svg"}
            height={50}
            width={50}
            alt="Menu Dropdown"
          />
        </div>
      ) : (
        <Image src={"/bullet.svg"} height={75} width={75} alt="Menu Dropdown" />
      )}
    </div>
  );
}
