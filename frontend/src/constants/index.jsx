import Image from "next/image";
import {
    iperuranium,
    iperuranium_2,
    bostonhacks,
    bostonhacks_2,
    bualpha,
    bufc,
    cma_cgm_logo,
} from "../../public/assets";

const experiences = [
    {
        title: "Data Science Intern",
        company: "CMA CGM",
        date: "May 2025 - Aug 2025",
        icon: <Image src={cma_cgm_logo} alt="Iperuranium" />,
        description: ["Group Security & Intelligence team"]
    },
    {
        title: "Software Engineer",
        company: "Iperuranium",
        date: "Feb 2025 - Present",
        icon: <Image src={iperuranium_2} alt="Iperuranium" />,
        description: [
            "Led frontend development with TypeScript, Next.js, and Tailwind CSS for core user-facing pages, aligning UI to Figma designs and ensuring a mobile-first responsive interface",
            "Implemented interactive UI animations with Motion (Framer Motion) across critical signup flows, enhancing UX engagement through clear animated feedback",
        ],
    },
    {
        title: "Software Developer",
        company: "BostonHacks",
        date: "Feb 2025 - Present",
        icon: <Image src={bostonhacks_2} alt="BostonHacks" />,
        description: [
            "Archived legacy hackathon web applications (2017-Present) as static HTML and collaborated with design to launch a unified, on-brand portal, enabling students and sponsors to explore them in a centralized, zero-maintenance archive.",
        ],
    },
];

export { experiences };
