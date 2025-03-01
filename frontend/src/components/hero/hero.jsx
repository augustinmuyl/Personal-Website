"use client";

import { useEffect, useRef } from "react";
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
            className="w-full h-full flex justify-start items-center"
        >
            <ul className="flex flex-col items-start ml-56 gap-1">
                <p className="text-3xl">Hello, I am</p>
                <h1 className="font-bold text-6xl">Augustin Muyl</h1>
                <p className="text-3xl">Boston University Student</p>
                <ul className="flex gap-5 mt-4">
                    <a href="https://linkedin.com/in/augustinmuyl">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                            alt="LinkedIn"
                            className="size-12 hover:scale-125 transition-all duration-300"
                        />
                    </a>
                    <a href="https://github.com/augustinmuyl">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                            alt="GitHub"
                            className="invert size-12 hover:scale-125 transition-all duration-300"
                        />
                    </a>
                </ul>
            </ul>
        </div>
    );
}

export default Hero;
