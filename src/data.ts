import deepMobile from "./assets/images/mobile/image-deep-earth.jpg";
import nightMobile from "./assets/images/mobile/image-night-arcade.jpg";
import soccerMobile from "./assets/images/mobile/image-soccer-team.jpg";
import gridMobile from "./assets/images/mobile/image-grid.jpg";
import fromAboveMobile from "./assets/images/mobile/image-from-above.jpg";
import borealisMobile from "./assets/images/mobile/image-pocket-borealis.jpg";
import curiosityMobile from "./assets/images/mobile/image-curiosity.jpg";
import fisheyeMobile from "./assets/images/mobile/image-fisheye.jpg";

import deepDesktop from "./assets/images/desktop/image-deep-earth.jpg";
import nightDesktop from "./assets/images/desktop/image-night-arcade.jpg";
import soccerDesktop from "./assets/images/desktop/image-soccer-team.jpg";
import gridDesktop from "./assets/images/desktop/image-grid.jpg";
import fromAboveDesktop from "./assets/images/desktop/image-from-above.jpg";
import borealisDesktop from "./assets/images/desktop/image-pocket-borealis.jpg";
import curiosityDesktop from "./assets/images/desktop/image-curiosity.jpg";
import fisheyeDesktop from "./assets/images/desktop/image-fisheye.jpg";

import facebook from "./assets/images/icon-facebook.svg";
import twitter from "./assets/images/icon-twitter.svg";
import pinterest from "./assets/images/icon-pinterest.svg";
import instagram from "./assets/images/icon-instagram.svg";

import Logo from "./assets/images/logo.svg";
import close from "./assets/images/icon-close.svg";

export const logo: string = Logo;
export const closeIcon: string = close;
export const heroTextContent = ["Immersive", "Experiences", "That", "Deliver"];

type creation = {
  name: string;
  imgMobile: string;
  imgDesktop: string;
  href?: string;
};

export const creations: creation[] = [
  {
    name: "Deep Earth",
    imgMobile: deepMobile,
    imgDesktop: deepDesktop,
    href: "/",
  },
  {
    name: "Night Arcade",
    imgMobile: nightMobile,
    imgDesktop: nightDesktop,
  },
  {
    name: "Soccer Team VR",
    imgMobile: soccerMobile,
    imgDesktop: soccerDesktop,
  },
  {
    name: `The Grid`,
    imgMobile: gridMobile,
    imgDesktop: gridDesktop,
  },
  {
    name: "From up Above VR",
    imgMobile: fromAboveMobile,
    imgDesktop: fromAboveDesktop,
  },
  {
    name: "Pocket Borealis",
    imgMobile: borealisMobile,
    imgDesktop: borealisDesktop,
  },
  {
    name: "The Curiosity",
    imgMobile: curiosityMobile,
    imgDesktop: curiosityDesktop,
  },
  {
    name: "Make It Fisheye",
    imgMobile: fisheyeMobile,
    imgDesktop: fisheyeDesktop,
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
