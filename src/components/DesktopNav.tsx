import { navLinks } from "../data";
import NavLinkItem from "./NavLinkItem";

export default function DesktopNav() {
  return (
    <nav>
      <ul className="flex gap-6 font-bold text-white items-center justify-center">
        {navLinks.map((link) => {
          return (
           <NavLinkItem key={`dh_${link}`} link={link} />
          );
        })}
      </ul>
    </nav>
  );
}
