"use client";

import { styles } from "../../app/styles";
import { pfp_1, pfp_2 } from "../../../public/assets";
import Image from "next/image";
import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import GithubCardShiny from "../animata/card/github-card-shiny";

function About() {
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
            id="about"
            className="scroll-mt-16 flex flex-col gap-8 sm:gap-10 md:gap-12 xl:gap-16 justify-center items-center pt-36"
            initial="hidden"
            animate={hasBeenVisible ? "visible" : "hidden"}
            variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.4 } },
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
                About Me
            </motion.h1>

            {/* PFP + Paragraph */}
            <motion.div
                className="flex w-full justify-center items-center"
                variants={{
                    hidden: { opacity: 0, x: -100 },
                    visible: {
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.5 },
                    },
                }}
            >
                <GithubCardShiny></GithubCardShiny>
            </motion.div>
        </motion.div>
    );
}

export default About;
