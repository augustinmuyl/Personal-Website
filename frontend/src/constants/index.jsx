import Image from "next/image";
import {
    iperuranium,
    iperuranium_2,
    bostonhacks,
    bostonhacks_2,
    bualpha,
    bufc,
} from "../../public/assets";

const experiences = [
    {
        title: "Software Engineer",
        company: "Iperuranium",
        date: "February 2025 - Present",
        icon: <Image src={iperuranium_2} alt="Iperuranium" />,
        description: [
            "Engineering a web application for the company using Next.JS, Tailwind CSS, Go, and MongoDB.",
            "Collaborating within a group of 4 people, bridging the design team’s vision with the technical team’s development.",
        ],
    },
    {
        title: "Software Developer",
        company: "BostonHacks",
        date: "February 2025 - Present",
        icon: <Image src={bostonhacks_2} alt="BostonHacks" />,
        description: [
            "Developing a web app using NextJS, Tailwind, ExpressJS, and Prisma ORM to boost participant acquisition and deliver updates to partners.",
            "Building an archival website to display over 10 web apps from previous hackathons, giving exposure to previous winners.",
            "Designing and implementing a candidate ranking system to parse through 1,000+ applicants, streamlining the admissions process by 50%.",
        ],
    },
    {
        title: "Quantitative Analyst",
        company: "BUAlpha",
        date: "February 2025 - Present",
        icon: <Image src={bualpha} alt="BUAplha/BUFC" />,
        description: [
            "Participating in weekly workshops surrounding machine learning, programming, math, statistics, and finance.",
            "Developing APIs, frontend, and deploying various projects such as stock price predictions using Monte Carlo methods to gain practical experience of the topics learned.",
        ],
    },
];

export { experiences };
