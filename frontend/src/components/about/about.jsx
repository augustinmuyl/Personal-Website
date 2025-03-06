"use client";

import { styles } from "../../app/styles";
import { pfp_1, pfp_2 } from "../../../public/assets";
import Image from "next/image";
import { motion } from "motion/react";
import GithubCardShiny from "../animata/card/github-card-shiny";

function About() {
    return (
        <div
            id="about"
            className="flex flex-col gap-8 sm:gap-10 md:gap-12 xl:gap-16 justify-center items-center pt-36"
        >
            <motion.h1
                className={`${styles.sectionHeadText}`}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                About Me
            </motion.h1>
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.85 }}
                transition={{ duration: 0.5 }}
            >
                <GithubCardShiny></GithubCardShiny>
            </motion.div>
        </div>
    );
}

export default About;
