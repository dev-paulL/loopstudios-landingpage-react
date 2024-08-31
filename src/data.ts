import deepMobile from "./assets/images/mobile/image-deep-earth.jpg";
import nightMobile from "./assets/images/mobile/image-night-arcade.jpg";
import soccerMobile from "./assets/images/mobile/image-soccer-team.jpg";
import gridMobile from "./assets/images/mobile/image-grid.jpg";
import fromAboveMobile from "./assets/images/mobile/image-from-above.jpg";
import borealisMobile from "./assets/images/mobile/image-pocket-borealis.jpg";
import curiosityMobile from "./assets/images/mobile/image-curiosity.jpg";
import fisheyeMobile from "./assets/images/mobile/image-fisheye.jpg";

import facebook from "./assets/images/icon-facebook.svg";
import twitter from "./assets/images/icon-twitter.svg";
import pinterest from "./assets/images/icon-pinterest.svg";
import instagram from "./assets/images/icon-instagram.svg";

import Logo from "./assets/images/logo.svg";
import close from "./assets/images/icon-close.svg";

export const logo: string = Logo;
export const closeIcon: string = close;
type creation = {
  name: string;
  imgMobile: string;
  imgDesktop?: string;
  href?: string;
};

export const creations: creation[] = [
  {
    name: "Deep Earth",
    imgMobile: deepMobile,
    imgDesktop: "",
    href: "/",
  },
  {
    name: "Night Arcade",
    imgMobile: nightMobile,
  },
  {
    name: "Soccer Team VR",
    imgMobile: soccerMobile,
  },
  {
    name: `The Grid`,
    imgMobile: gridMobile,
  },
  {
    name: "From up Above VR",
    imgMobile: fromAboveMobile,
  },
  {
    name: "Pocket Borealis",
    imgMobile: borealisMobile,
  },
  {
    name: "The Curiosity",
    imgMobile: curiosityMobile,
  },
  {
    name: "Make It Fisheye",
    imgMobile: fisheyeMobile,
  },
];

export const navLinks: Array<string> = ["About", "Careers", "Events", "Products", "Support"];

type socialLink = {
  name: string;
  href: string;
  icon: string;
};
export const socialLinks: socialLink[] = [
  {
    name: "Facebook",
    href: "/",
    icon: facebook,
  },
  {
    name: "Twitter",
    href: "/",
    icon: twitter,
  },
  {
    name: "Pinterest",
    href: "/",
    icon: pinterest,
  },
  {
    name: "Instagram",
    href: "/",
    icon: instagram,
  },
];
