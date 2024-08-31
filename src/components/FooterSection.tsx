import { logo, navLinks, socialLinks } from "../data";

export default function FooterSection() {
  return (
    <footer className="bg-black text-center flex flex-col items-center gap-8 py-16">
      <img src={logo} alt="LoopStudios" className="w-[10rem]" />

      <nav>
        <ul className="flex flex-col gap-4 text-sm font-medium text-white">
          {navLinks.map((link) => {
            return (
              <li key={`f_${link}`} className="">
                <a href="/">{link}</a>
              </li>
            );
          })}
        </ul>
      </nav>
      <ul aria-label="Social links" className="flex gap-4 mt-6">
        {socialLinks.map((socialLink) => {
          return (
            <li key={`f_${socialLink.name}`}>
              <a href={socialLink.href}>
                <img src={socialLink.icon} alt={socialLink.name} />
              </a>
            </li>
          );
        })}
      </ul>

      <p className="text-veryDarkGray font-bold">©️ 2021 Loopstudios. All right reserved.</p>
    </footer>
  );
}
