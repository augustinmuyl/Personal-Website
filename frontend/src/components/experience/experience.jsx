"use client";

import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../../app/styles";
import { experiences } from "../../constants";

function ExperienceCard({ experience, index }) {
    return (
        <VerticalTimelineElement
            contentStyle={{
                background: "rgb(15 23 42 / var(--tw-bg-opacity, 1))",
                borderRadius: "1.5rem",
                padding: "2rem",
                maxWidth: 425,
            }}
            contentArrowStyle={{ borderRight: "7px solid #232631" }}
            date={experience.date}
            dateClassName="min-[1170px]:mx-28"
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
                <h1 className="text-lg sm:text-xl md:text-2xl xl:text-3xl font-bold">
                    {experience.title}
                </h1>
                <p className="text-violet-200/50" style={{ margin: 0 }}>
                    {experience.company}
                </p>
            </div>

            <ul className="list-disc ml-5 tracking-wider text-white text-xs/5 sm:text-sm/6 md:text-base/7 xl:text-lg/7 mt-4 space-y-2">
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
            <h1
                id="experience"
                className={`${styles.sectionHeadText} flex justify-center items-center pt-36 pb-8 sm:pb-10 md:pb-12 xl:pb-16`}
            >
                Experience
            </h1>
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
