import React from "react";

export default function UnderlineHover({ socials }: { socials?: boolean }) {
  return (
    <span
      className={`absolute  left-1/2 transform -translate-x-1/2 w-0 ${
        socials ? "group-hover:w-[100%] -bottom-4 " : "group-hover:w-[50%] bottom-0"
      } h-[2px] bg-white transition-all duration-300`}
    ></span>
  );
}
