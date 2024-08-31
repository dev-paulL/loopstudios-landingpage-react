"use client";

import { useEffect, useState } from "react";
import Hamburger from "../assets/images/icon-hamburger.svg";
import { logo } from "../data";
import MobileMenu from "./MobileMenu";
import DesktopNav from "./DesktopNav";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    // Cleanup function to remove the class when component unmounts
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isMenuOpen]);
  return (
    <header className="py-10 px-6 flex  z-10 absolute min-w-full ">
      <div className="w-full flex justify-between items-center max-w-[1200px] mx-auto">
        <img src={logo} alt="" className="h-7" />

        <button aria-label="Open Navigation Menu" onClick={toggleMenu} className="mobile-hamburger">
          <img src={Hamburger} alt="" />
        </button>
        {isMenuOpen && <MobileMenu toggleMenu={toggleMenu} />}
        <div className="desktop-nav">
          <DesktopNav />
        </div>
      </div>
    </header>
  );
}
