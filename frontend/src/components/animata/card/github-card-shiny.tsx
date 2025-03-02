"use client";

import { useCallback, useRef } from "react";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

import { useMousePosition } from "../../../hooks/use-mouse-position";
import { cn } from "../../../lib/utils";
import {
    outreachoutlet,
    outreachoutlet_screenshot,
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
                "group relative w-96 min-w-fit max-w-full overflow-hidden rounded-md border border-border bg-zinc-700 text-zinc-200 shadow-lg",
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

            <div className={styles.sectionBox}></div>
        </div>
    );
}
