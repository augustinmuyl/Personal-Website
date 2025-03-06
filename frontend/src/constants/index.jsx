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
            "Engineering a scalable, full‐stack web application from the ground up using Next.js, Tailwind CSS, Go, and MongoDB; enhancing operational efficiency and user experience.",
            "Collaborating in a cross‐functional team of 8 to transform Figma prototypes into robust, production-ready code, ensuring seamless integration between design and development.",
        ],
    },
    {
        title: "Software Developer",
        company: "BostonHacks",
        date: "February 2025 - Present",
        icon: <Image src={bostonhacks_2} alt="BostonHacks" />,
        description: [
            "Developing a web application using Next.js and Tailwind CSS as an onboarding project.",
        ],
    },
    {
        title: "Quantitative Analyst",
        company: "BUAlpha",
        date: "February 2025 - Present",
        icon: <Image src={bualpha} alt="BUAplha/BUFC" />,
        description: [
            "Participating in weekly workshops surrounding machine learning, programming, math, statistics, and finance.",
        ],
    },
];

export { experiences };
