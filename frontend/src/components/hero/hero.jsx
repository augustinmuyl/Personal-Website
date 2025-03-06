"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";
if (typeof window !== "undefined") {
    window.THREE = THREE;
}

function Hero() {
    const vantaRef = useRef(null);

    useEffect(() => {
        let vantaEffect;
        (async () => {
            const { default: VANTA_NET } = await import(
                "vanta/dist/vanta.net.min"
            );
            vantaEffect = VANTA_NET({
                el: vantaRef.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.0,
                minWidth: 200.0,
                scale: 1.0,
                scaleMobile: 1.0,
                color: 0xede9fe,
                backgroundColor: 0x020618,
                points: 20.0,
                maxDistance: 24.0,
                spacing: 20.0,
                showDots: true,
            });
        })();
        return () => vantaEffect && vantaEffect.destroy();
    }, []);

    return (
        <div
            ref={vantaRef}
            className="w-full h-full flex justify-center lg:justify-start items-center"
        >
            <motion.div
                className="flex flex-col items-center justify-center text-center lg:items-start lg:ml-56 gap-1"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: {
                            delay: 0.1,
                            delayChildren: 0.1,
                            staggerChildren: 1.1,
                        },
                    },
                }}
            >
                {/* Hello, I am */}
                <motion.div
                    className="flex text-lg sm:text-xl md:text-2xl xl:text-3xl"
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.1,
                            },
                        },
                    }}
                >
                    {Array.from("Hello, I am").map((char, index) => (
                        <motion.p
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: { duration: 0.1 },
                                },
                            }}
                        >
                            {char === " " ? "\u00A0" : char}
                        </motion.p>
                    ))}
                </motion.div>

                {/* Augustin Muyl */}
                <motion.div
                    className="font-bold text-3xl flex sm:text-4xl md:text-5xl xl:text-6xl"
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.1,
                            },
                        },
                    }}
                >
                    {[..."Augustin Muyl"].map((char, index) => (
                        <motion.h1
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: { duration: 0.1 },
                                },
                            }}
                        >
                            {char === " " ? "\u00A0" : char}
                        </motion.h1>
                    ))}
                </motion.div>

                {/* Boston University Student */}
                <motion.div
                    className="flex text-lg sm:text-xl md:text-2xl xl:text-3xl"
                    variants={{
                        hidden: { opacity: 0, x: -100 },
                        visible: {
                            opacity: 1,
                            x: 0,
                            transition: { staggerChildren: 0.1 },
                        },
                    }}
                >
                    {[..."Boston University Student"].map((char, index) => (
                        <motion.p
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: { duration: 0.1 },
                                },
                            }}
                        >
                            {char === " " ? "\u00A0" : char}
                        </motion.p>
                    ))}
                </motion.div>

                {/* Buttons */}
                <motion.ul
                    className="flex gap-5 mt-4"
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: { delay: 4.7, duration: 0.5 },
                        },
                    }}
                >
                    <a
                        href="https://linkedin.com/in/augustinmuyl"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                            alt="LinkedIn"
                            className="size-6 sm:size-7 md:size-8 lg:size-10 xl:size-12 hover:scale-125 transition-all duration-300"
                        />
                    </a>
                    <a
                        href="https://github.com/augustinmuyl"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                            alt="GitHub"
                            className="invert size-6 sm:size-7 md:size-8 lg:size-10 xl:size-12 hover:scale-125 transition-all duration-300"
                        />
                    </a>
                </motion.ul>
            </motion.div>
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-slate-950" />
        </div>
    );
}

export default Hero;
