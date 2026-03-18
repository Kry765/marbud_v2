"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import MarbudLogo from "../../ui/MarbudLogo";
import FacebookIcon from "../../ui/FacebookIcon";
import Navigation from "./Navigation";
import InstagramIcon from "../../ui/InstagramIcon";
import { Links } from "@/assets/links";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <div className="fixed top-0 w-full h-16 px-4 flex justify-between items-center text-white bg-black uppercase">
      <MarbudLogo />
      <Navigation
        openDropdown={openDropdown}
        setOpenDropdown={setOpenDropdown}
        Links={Links}
        className="hidden md:flex flex-row items-center justify-end gap-4"
      />

      {/* Mobile */}
      {isOpen ? (
        <div>
          <X className="md:hidden z-30" onClick={() => setIsOpen(!isOpen)} />
          <div>
            <Navigation
              openDropdown={openDropdown}
              setOpenDropdown={setOpenDropdown}
              Links={Links}
              className="md:hidden fixed w-4/6 h-full top-0 left-0 flex flex-col justify-center p-12 gap-4 bg-black"
            />
          </div>
        </div>
      ) : (
        <Menu className="md:hidden  z-30" onClick={() => setIsOpen(!isOpen)} />
      )}
    </div>
  );
}
