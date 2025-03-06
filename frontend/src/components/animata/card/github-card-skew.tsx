"use client";

import { useCallback, useRef } from "react";
import Image from "next/image";

import { useMousePosition } from "../../../hooks/use-mouse-position";
import { cn } from "../../../lib/utils";
import { outreachoutlet_screenshot } from "../../../../public/assets";
import { styles } from "../../../app/styles";

function calculateCardRotation({
    currentX,
    currentY,
    centerX,
    centerY,
    maxRotationX,
    maxRotationY,
}: {
    currentX: number;
    currentY: number;
    centerX: number;
    centerY: number;
    maxRotationX: number;
    maxRotationY: number;
}) {
    // Calculate the distance from the center
    const deltaX = currentX - centerX;
    const deltaY = currentY - centerY;

    // Calculate the maximum distance (assuming a rectangular area)
    const maxDistance = Math.sqrt(Math.pow(centerX, 2) + Math.pow(centerY, 2));
    // Calculate the actual distance
    const distance = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
    // Calculate the rotation factor (0 to 1)
    const rotationFactor = distance / maxDistance;

    // Calculate rotations (inverted for natural tilt effect)
    const rotationY = (
        (-deltaX / centerX) *
        maxRotationY *
        rotationFactor
    ).toFixed(2);
    const rotationX = (
        (deltaY / centerY) *
        maxRotationX *
        rotationFactor
    ).toFixed(2);
    return { rotationX, rotationY };
}

export default function GithubCardSkew({ className }: { className?: string }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const resetRef = useRef<NodeJS.Timeout | null>(null);

    const update = useCallback(({ x, y }: { x: number; y: number }) => {
        if (!containerRef.current) {
            return;
        }

        const { width, height } = containerRef.current.getBoundingClientRect();
        const { rotationX, rotationY } = calculateCardRotation({
            centerX: width / 2,
            centerY: height / 2,
            currentX: x,
            currentY: y,
            maxRotationX: 4,
            maxRotationY: 6,
        });
        containerRef.current.style.setProperty("--x", `${rotationX}deg`);
        containerRef.current.style.setProperty("--y", `${rotationY}deg`);
    }, []);

    useMousePosition(containerRef, update);

    return (
        <div
            ref={containerRef}
            className={cn(
                "bg-slate-900 rounded-3xl p-8 flex justify-center items-center max-w-64 md:max-w-80 xl:max-w-96 transform-gpu flex-col gap-4 border text-zinc-200 shadow-lg transition-transform ease-linear will-change-transform",
                className
            )}
            style={{
                transform:
                    "perspective(400px) rotateX(var(--x)) rotateY(var(--y))",
                transitionDuration: "50ms",
            }}
            onMouseEnter={() => {
                resetRef.current = setTimeout(() => {
                    if (!containerRef.current) {
                        return;
                    }

                    // Reset the transition duration to 0 so that the mouse movement is smooth
                    containerRef.current.style.transitionDuration = "0ms";
                }, 300);
            }}
            onMouseLeave={() => {
                clearTimeout(resetRef.current);
                if (!containerRef.current) {
                    return;
                }

                containerRef.current.style.transitionDuration = "50ms";
                containerRef.current.style.setProperty("--x", "0deg");
                containerRef.current.style.setProperty("--y", "0deg");
            }}
        >
            <div className="flex flex-col">
                <Image
                    src={outreachoutlet_screenshot}
                    alt="OutreachOutlet"
                    className="rounded-xl mb-6"
                />
                <h1 className="text-2xl font-bold mb-2">OutreachOutlet</h1>
                <p className="text-base/7">
                    Web app that matches users with available volunteering
                    opportunities aligned with their interests
                </p>
            </div>
        </div>
    );
}
