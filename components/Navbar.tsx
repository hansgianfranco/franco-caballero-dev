"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { useNav } from "@/hooks/useNav";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {

    const [open, setOpen] = useState(false);
    const { data: nav } = useNav();

    return (
        <header className="sticky top-0 z-40 backdrop-blur bg-[#16161F]/70 border-b border-[#2a2a3a]">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Desktop menu */}
                <nav className="hidden md:flex gap-6 text-sm">
                    <a href="#about" className="hover:text-[#9e68ff]">
                        {nav?.about}
                    </a>
                    <a href="#experience" className="hover:text-[#9e68ff]">
                        {nav?.experience}
                    </a>
                    <a href="#projects" className="hover:text-[#9e68ff]">
                        {nav?.projects}
                    </a>
                    <a href="#skills" className="hover:text-[#9e68ff]">
                        {nav?.skills}
                    </a>
                    <a href="#contact" className="hover:text-[#9e68ff]">
                        {nav?.contact}
                    </a>
                </nav>
                <div className="flex items-center justify-between w-full md:w-auto gap-4">
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden text-white"
                    >
                        <Menu />
                    </button>
                    <LanguageSwitcher />
                </div>
            </div>

            {/* Mobile menu */}
            {open && (
                <div className="md:hidden border-t border-[#2a2a3a] bg-[#16161F]">
                    <nav className="flex flex-col gap-4 px-6 py-4 text-sm">
                        <a href="#about" onClick={() => setOpen(false)}>
                            {nav?.about}
                        </a>
                        <a href="#experience" onClick={() => setOpen(false)}>
                            {nav?.experience}
                        </a>
                        <a href="#projects" onClick={() => setOpen(false)}>
                            {nav?.projects}
                        </a>
                        <a href="#skills" onClick={() => setOpen(false)}>
                            {nav?.skills}
                        </a>
                        <a href="#contact" onClick={() => setOpen(false)}>
                            {nav?.contact}
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
}