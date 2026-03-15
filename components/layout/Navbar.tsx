"use client";

import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Nav } from "@/types/ui";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar({ nav }: { nav: Nav }) {

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return (
    <header 
    className={`sticky top-0 z-40 border-b transition-all duration-300 
      ${scrolled
          ? "backdrop-blur bg-surface/70 border-[#2a2a3a]"
          : "bg-transparent border-transparent"
      }`}>
      <div className={`max-w-6xl mx-auto px-6  flex font-mono justify-between items-center transition-all ease-in ${scrolled ? "py-4" : "py-6"}`}>
        <nav aria-label="Main navigation">
          <ul className="hidden md:flex gap-6 text-sm">
            <li>
              <a href="#about" className="text-accent hover:text-primary">
                {nav?.about}
              </a>
            </li>
            <li>
              <a href="#projects" className="text-accent hover:text-primary">
                {nav?.projects}
              </a>
            </li>
            <li>
              <a href="#experience" className="text-accent hover:text-primary">
                {nav?.experience}
              </a>
            </li>
            <li>
              <a href="#skills" className="text-accent hover:text-primary">
                {nav?.skills}
              </a>
            </li>
            <li>
              <a href="#contact" className="text-accent hover:text-primary">
                {nav?.contact}
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex items-center justify-between w-full md:w-auto gap-4">
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white"
            aria-label="Open menu"
            aria-expanded="false"
            aria-controls="mobile-menu"
          >
            <Menu />
          </button>
          <LanguageSwitcher />
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-[#2a2a3a] bg-surface">
          <nav aria-label="Mobile navigation">
            <ul className="flex flex-col gap-4 px-6 py-4 text-sm">
              <li>
                <a href="#about" className="text-accent" onClick={() => setOpen(false)}>
                  {nav?.about}
                </a>
              </li>
              <li>
                <a href="#projects" className="text-accent" onClick={() => setOpen(false)}>
                  {nav?.projects}
                </a>
              </li>
              <li>
                <a href="#experience" className="text-accent" onClick={() => setOpen(false)}>
                  {nav?.experience}
                </a>
              </li>
              <li>
                <a href="#skills" className="text-accent" onClick={() => setOpen(false)}>
                  {nav?.skills}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-accent" onClick={() => setOpen(false)}>
                  {nav?.contact}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}