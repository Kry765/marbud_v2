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
    <nav>
      <MarbudLogo />
      <Navigation
        openDropdown={openDropdown}
        setOpenDropdown={setOpenDropdown}
        Links={Links}
        className="hidden md:flex flex-row justify-end gap-4"
      />
      {/* Mobile */}
      {isOpen ? (
        <div>
          <X
            className="fixed top-0 right-0 m-4 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          />
          <div>
            <Navigation
              openDropdown={openDropdown}
              setOpenDropdown={setOpenDropdown}
              Links={Links}
              className="md:hidden flex flex-col justify-end gap-4"
            />
            <FacebookIcon />
            <InstagramIcon />
          </div>
        </div>
      ) : (
        <Menu
          className="fixed top-0 right-0 m-4 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        />
      )}
    </nav>
  );
}
