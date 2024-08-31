"use client";

import { useState } from "react";
import Hamburger from "../assets/images/icon-hamburger.svg";
import { logo } from "../data";
import MobileMenu from "./MobileMenu";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const openMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="py-10 px-6 flex justify-between items-center z-10 absolute w-full">
      <img src={logo} alt="" className="h-7" />
      <button aria-label="Open Navigation Menu" onClick={openMenu}>
        <img src={Hamburger} alt="" />
      </button>
      {isMenuOpen && <MobileMenu openMenu={openMenu} />}
    </header>
  );
}
