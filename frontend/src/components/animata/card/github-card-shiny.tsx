"use client";

import { useCallback, useRef } from "react";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

import { useMousePosition } from "../../../hooks/use-mouse-position";
import { cn } from "../../../lib/utils";
import {
    outreachoutlet,
    outreachoutlet_screenshot,
    pfp_1,
} from "../../../../public/assets";
import { styles } from "../../../app/styles.js";

export default function GithubCardShiny({ className }: { className?: string }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);

    const update = useCallback(({ x, y }: { x: number; y: number }) => {
        if (!overlayRef.current) {
            return;
        }

        const { width, height } =
            overlayRef.current?.getBoundingClientRect() ?? {};
        const xOffset = x - width / 2;
        const yOffset = y - height / 2;

        overlayRef.current?.style.setProperty("--x", `${xOffset}px`);
        overlayRef.current?.style.setProperty("--y", `${yOffset}px`);
    }, []);

    useMousePosition(containerRef, update);

    return (
        <div
            ref={containerRef}
            className={cn(
                "group relative w-2/3 xl:w-1/2 max-w-full overflow-hidden rounded-3xl border text-zinc-200 shadow-lg",
                className
            )}
        >
            <div
                ref={overlayRef}
                // Adjust height & width as required
                className="-z-1 absolute h-64 w-64 rounded-full bg-white opacity-0 bg-blend-soft-light blur-3xl transition-opacity group-hover:opacity-20"
                style={{
                    transform: "translate(var(--x), var(--y))",
                }}
            />

            <div className={styles.sectionBox}>
                <div className="flex flex-col lg:flex-row justify-center items-center gap-6 md:gap-12">
                    <Image
                        src={pfp_1}
                        alt="PFP"
                        className="rounded-full size-24 sm:size-40 md:size-56 lg:size-64"
                    />
                    <div className="flex flex-col gap-4 max-w-prose text-center lg:text-left">
                        <p className="text-xs/5 sm:text-sm/6 md:text-base/7 xl:text-lg/7">
                            I'm a Mathematics and Computer Science student at
                            Boston University with a background in full-stack
                            development, especially using React (Next.JS),
                            Tailwind CSS, Flask, MongoDB, and PostgreSQL.
                        </p>
                        <p className="text-xs/5 sm:text-sm/6 md:text-base/7 xl:text-lg/7">
                            I am passionate about web development and its
                            intersection with social impact.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
