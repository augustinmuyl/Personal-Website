"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import x_icon from "../../../public/assets/x_icon.svg";

function Navbar() {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    const buttonRef = useRef(null);
    const listRef = useRef(null);

    useEffect(() => {
        const button = buttonRef.current;
        const list = listRef.current;

        if (!button || !list) return;

        button.addEventListener("click", (e) => {
            e.stopPropagation();
            list.classList.toggle("hidden");
        });

        document.addEventListener("click", () => {
            list.classList.add("hidden");
        });
    }, []);

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
                    ref={buttonRef}
                    className="sm:hidden size-5 mt-[2px] mr-[-10px] hover:text-white"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        version="1.1"
                        width="currentWidth"
                        height="currentHeight"
                        viewBox="0 0 256 256"
                        xmlSpace="preserve"
                    >
                        <defs></defs>
                        <g
                            style={{
                                stroke: "none",
                                strokeWidth: 0,
                                strokeDasharray: "none",
                                strokeLinecap: "butt",
                                strokeLinejoin: "miter",
                                strokeMiterlimit: 10,
                                fillRule: "nonzero",
                                opacity: 1,
                            }}
                            transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
                        >
                            <path
                                d="M 8 90 c -2.047 0 -4.095 -0.781 -5.657 -2.343 c -3.125 -3.125 -3.125 -8.189 0 -11.314 l 74 -74 c 3.125 -3.124 8.189 -3.124 11.314 0 c 3.124 3.124 3.124 8.189 0 11.313 l -74 74 C 12.095 89.219 10.047 90 8 90 z"
                                fill="currentColor"
                                strokeLinecap="round"
                            />
                            <path
                                d="M 82 90 c -2.048 0 -4.095 -0.781 -5.657 -2.343 l -74 -74 c -3.125 -3.124 -3.125 -8.189 0 -11.313 c 3.124 -3.124 8.189 -3.124 11.313 0 l 74 74 c 3.124 3.125 3.124 8.189 0 11.314 C 86.095 89.219 84.048 90 82 90 z"
                                fill="currentColor"
                                strokeLinecap="round"
                            />
                        </g>
                    </svg>
                </button>
                <div
                    ref={listRef}
                    className="hidden sm:hidden absolute z-50 bg-slate-900 rounded-2xl p-6 right-4 top-14 text-sm font-semibold flex flex-col items-center gap-2 border"
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
