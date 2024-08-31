"use client";

import { closeIcon, logo, navLinks } from "../data";
import NavLinkItem from "./NavLinkItem";

export default function MobileMenu({ toggleMenu }: { toggleMenu: () => void }) {
  return (
    <div className="absolute bg-black inset-0 min-h-screen p-8">
      <div className="flex justify-between">
        <img src={logo} alt="" className="w-36" />
        <button aria-label="Close Mobile Menu" onClick={toggleMenu}>
          <img src={closeIcon} alt="" />
        </button>
      </div>
      <nav>
        <ul className="text-white uppercase text-2xl font-light font-josefin mt-32 flex flex-col gap-4">
          {navLinks.map((nL) => {
            return (
             <NavLinkItem link={nL}key={`h_${nL}`} />
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
