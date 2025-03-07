"use client";

import Image from "next/image";
import { styles } from "../../app/styles";
import {
    outreachoutlet,
    outreachoutlet_screenshot,
} from "../../../public/assets";

import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import Tilt from "react-parallax-tilt";

function Projects() {
    const sectionRef = useRef(null);
    const [hasBeenVisible, setHasBeenVisible] = useState(false);

    const isInView = useInView(sectionRef, {
        triggerOnce: true,
        amount: 0.5,
    });

    useEffect(() => {
        if (isInView && !hasBeenVisible) {
            setHasBeenVisible(true);
        }
    }, [isInView, hasBeenVisible]);

    return (
        <motion.div
            ref={sectionRef}
            id="projects"
            className="flex flex-col justify-center gap-8 sm:gap-10 md:gap-12 xl:gap-16 items-center pt-36 pb-36"
            initial="hidden"
            animate={hasBeenVisible ? "visible" : "hidden"}
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.5 },
                },
            }}
        >
            {/* Section Header */}
            <motion.h1
                className={`${styles.sectionHeadText}`}
                variants={{
                    hidden: { opacity: 0, y: 100 },
                    visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.5 },
                    },
                }}
            >
                Projects
            </motion.h1>

            {/* Projects */}
            <div className="flex justify-center items-center">
                <Tilt>
                    <motion.div
                        className="w-full p-8 border-2 bg-gradient-to-bl from-slate-800 to-slate-900 rounded-3xl shadow max-w-64 md:max-w-80 xl:max-w-96"
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: {
                                opacity: 1,
                                x: 0,
                                transition: {
                                    duration: 0.75,
                                    type: "spring",
                                    stiffness: 200,
                                    damping: 10,
                                },
                            },
                        }}
                    >
                        <a
                            href="https://www.outreachoutlet.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col text-white"
                        >
                            <Image
                                src={outreachoutlet_screenshot}
                                alt="OutreachOutlet"
                                className="rounded-xl mb-6"
                            />
                            <h1 className="text-lg sm:text-xl md:text-2xl xl:text-3xl font-bold mb-0 sm:mb-[2px] md:mb-1 xl:mb-2">
                                OutreachOutlet
                            </h1>
                            <p className="text-xs/5 sm:text-sm/6 md:text-base/7 xl:text-lg/7 tracking-wider">
                                Web app that matches users with available
                                volunteering opportunities aligned with their
                                interests
                            </p>
                        </a>
                    </motion.div>
                </Tilt>
            </div>
        </motion.div>
    );
}

export default Projects;
