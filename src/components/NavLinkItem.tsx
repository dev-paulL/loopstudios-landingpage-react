import UnderlineHover from "./UnderlineHover";

export default function NavLinkItem({ link }: { link: string }) {
  return (
    <li className="relative">
      <a
        href="#"
        className="relative group text-white py-2 !bg-transparent" 
      >
        {link}
        <UnderlineHover />
      </a>
    </li>
  );
}
