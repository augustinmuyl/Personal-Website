"use client";

import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "@/app/styles";
import { experiences } from "@/constants";

function ExperienceCard({ experience, index }) {
    return (
        <VerticalTimelineElement
            contentStyle={{
                background: "rgb(15 23 42 / var(--tw-bg-opacity, 1))",
                borderRadius: "1.5rem",
                padding: "2rem",
                width: 425,
            }}
            contentArrowStyle={{ borderRight: "7px solid #232631" }}
            date={experience.date}
            dateClassName="mx-28"
            icon={
                <div className="flex justify-center items-center w-full h-full">
                    <em className="w-[55%] object-contain">
                        {experience.icon}
                    </em>
                </div>
            }
            iconClassName="bg-white"
        >
            <div>
                <h1 className="text-2xl font-bold">{experience.title}</h1>
                <p
                    className="text-xl text-violet-200/50 font-semibold"
                    style={{ margin: 0 }}
                >
                    {experience.company}
                </p>
            </div>

            <ul className="list-disc ml-5 text-white mt-4 space-y-2">
                {experience.description.map((description, index) => (
                    <li key={index}>{description}</li>
                ))}
            </ul>
        </VerticalTimelineElement>
    );
}

function Experience() {
    return (
        <>
            <h1 className={styles.sectionHeadText}>Experience</h1>
            <VerticalTimeline>
                {experiences.map((experience, index) => (
                    <ExperienceCard
                        experience={experience}
                        key={index}
                    ></ExperienceCard>
                ))}
            </VerticalTimeline>
        </>
    );
}

export default Experience;
