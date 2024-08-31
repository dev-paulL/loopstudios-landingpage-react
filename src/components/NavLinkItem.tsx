export default function NavLinkItem({ link }: { link: string }) {
  return (
    <li className="relative">
      <a
        href="#"
        className="relative group text-white py-2" // Example text color change on hover
      >
        {link}
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-[50%] h-[2px] bg-white transition-all duration-300"></span>
      </a>
    </li>
  );
}
