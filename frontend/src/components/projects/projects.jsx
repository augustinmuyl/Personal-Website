"use client";

import Image from "next/image";
import { styles } from "../../app/styles";
import {
    outreachoutlet,
    outreachoutlet_screenshot,
} from "../../../public/assets";

import GithubCardSkew from "../animata/card/github-card-skew";
import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

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
                    transition: { staggerChildren: 1 },
                },
            }}
        >
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
            <motion.div className="flex">
                <a
                    href="https://outreachoutlet.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <GithubCardSkew />
                </a>
            </motion.div>
        </motion.div>
    );
}

export default Projects;
