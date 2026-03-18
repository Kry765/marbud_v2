import { NavLink } from "@/types";

export const Links: NavLink[] = [
  { href: "/galeria", text: "galeria" },
  {
    text: "oferta",
    children: [
      { href: "/domki-sezonowe", text: "domki sezonowe" },
      { href: "/domki-letniskowe", text: "domki letniskowe" },
    ],
  },
  { href: "/kontakt", text: "kontakt" },
  { href: "/o-nas", text: "o nas" },
  { href: "/jak-dzialamy", text: "jak działamy" },
];
