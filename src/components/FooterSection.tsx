import { logo, navLinks, socialLinks } from "../data";

export default function FooterSection() {
  return (
    <footer className="bg-black text-center flex flex-col lg:flex-row gap-8 py-16 items-center">
      <div className="lg:flex max-w-[1200px] lg:mx-auto lg:w-full lg:justify-between items-center">
        <div className="flex gap-6 flex-col items-center lg:items-start">
          <img src={logo} alt="LoopStudios" className="w-[10rem]" />

          <nav>
            <ul className="flex flex-col lg:flex-row gap-4 lg:gap-8 text-sm font-medium text-white">
              {navLinks.map((link) => {
                return (
                  <li key={`f_${link}`} className="">
                    <a href="/">{link}</a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <div className="flex flex-col lg:items-end items-center justify-items-center gap-6 mt-8 lg:mt-0">
          <ul aria-label="Social links" className="flex gap-6 items-center">
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
        </div>
      </div>
    </footer>
  );
}
