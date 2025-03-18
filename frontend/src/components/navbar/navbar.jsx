"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const listRef = useRef(null);

    useEffect(() => {
        const list = listRef.current;
        if (!list) return;

        const outsideClick = () => {
            setIsMenuOpen(false);
        };

        document.addEventListener("click", outsideClick);

        return () => {
            document.removeEventListener("click", outsideClick);
        };
    });

    const toggleMenu = (e) => {
        e.stopPropagation();
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <header className="fixed bg-slate-900 shadow-2xl w-full z-50 border-b p-2 sm:p-3 md:p-4 lg:p-5 xl:p-6">
            {/* Regular Navbar */}
            <nav className="mx-5 sm:mx-16 md:mx-30 lg:mx-40 xl:mx-60 flex justify-between items-center text-violet-300/80 font-bold">
                <a
                    href="/"
                    className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-violet-200"
                >
                    Augustin Muyl
                </a>
                <a
                    href="#about"
                    className="hover:text-white
                    hidden sm:block text-sm md:text-base lg:text-lg xl:text-xl"
                >
                    About
                </a>
                <a
                    href="#experience"
                    className="hover:text-white
                    hidden sm:block text-sm md:text-base lg:text-lg xl:text-xl"
                >
                    Experience
                </a>
                <a
                    href="#projects"
                    className="hover:text-white
                    hidden sm:block text-sm md:text-base lg:text-lg xl:text-xl"
                >
                    Projects
                </a>
                <a
                    href="https://linkedin.com/in/augustinmuyl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white
                    hidden sm:block text-sm md:text-base lg:text-lg xl:text-xl"
                >
                    Contact
                </a>

                {/* Mobile Navbar */}
                <button
                    onClick={toggleMenu}
                    className="sm:hidden mt-[2px] mr-[-10px]"
                >
                    <motion.img
                        src={
                            isMenuOpen
                                ? "https://cdn3.iconfinder.com/data/icons/minimal-website-ui-kit/100/ld_menu_open-512.png"
                                : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/640px-Hamburger_icon.svg.png"
                        }
                        initial={{ rotate: 0 }}
                        animate={{
                            rotate: isMenuOpen ? 180 : 0,
                        }}
                        alt="Menu"
                        className="invert size-7"
                    />
                </button>
                <div
                    ref={listRef}
                    className={`${
                        isMenuOpen ? "" : "hidden"
                    } sm:hidden absolute z-50 bg-slate-900 rounded-2xl p-6 right-2 top-14 text-sm font-semibold flex flex-col items-center gap-2 border`}
                >
                    <a href="#about" className="hover:text-white">
                        About
                    </a>
                    <a href="#experience" className="hover:text-white">
                        Experience
                    </a>
                    <a href="#projects" className="hover:text-white">
                        Projects
                    </a>
                    <a
                        href="https://linkedin.com/in/augustinmuyl"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white"
                    >
                        Contact
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
