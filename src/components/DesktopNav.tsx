import { navLinks } from "../data";

export default function DesktopNav() {
  return (
    <nav>
      <ul className="flex gap-6 font-bold text-white items-center justify-center">
        {navLinks.map((link) => {
          return (
            <li key={`dh_${link}`}>
              <a href="#">{link}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
