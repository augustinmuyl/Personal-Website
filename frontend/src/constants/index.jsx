import Image from "next/image";
import {
    iperuranium,
    iperuranium_2,
    bostonhacks,
    bostonhacks_2,
    bualpha,
    bufc,
} from "../assets";

const experiences = [
    {
        title: "Software Engineer",
        company: "Iperuranium",
        date: "February 2025 - Present",
        icon: <Image src={iperuranium_2} alt="Iperuranium" />,
        description: [
            "Working with Next.JS, Tailwind CSS, and MongoDB to create a web application for the company.",
            "Implemented A, B, C.",
        ],
    },
    {
        title: "Software Developer",
        company: "BostonHacks",
        date: "February 2025 - Present",
        icon: <Image src={bostonhacks_2} alt="BostonHacks" />,
        description: [
            "Developing a web app with NextJS, Tailwind, ExpressJS, and Prisma ORM for next year's hackathon alongside an archival website to store all previous web apps.",
            "Designing and implementing a candidate ranking system to parse through 1,000+ applicants.",
        ],
    },
    {
        title: "Quantitative Analyst",
        company: "BUAlpha",
        date: "February 2025 - Present",
        icon: <Image src={bualpha} alt="BUAplha/BUFC" />,
        description: [
            "Participating in weekly workshops on a variety of topics surrounding machine learning, programming, math, statistics, finance, etc.",
            "Developing APIs, frontend, and deploying various projects such as stock price predictions using Monte Carlo methods.",
        ],
    },
];

export { experiences };
