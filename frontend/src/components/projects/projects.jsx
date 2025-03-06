import Image from "next/image";
import { styles } from "../../app/styles";
import {
    outreachoutlet,
    outreachoutlet_screenshot,
} from "../../../public/assets";
import GithubCardSkew from "../animata/card/github-card-skew";

function Projects() {
    return (
        <div
            id="projects"
            className="flex flex-col justify-center gap-8 sm:gap-10 md:gap-12 xl:gap-16 items-center pt-36 pb-36"
        >
            <h1 className={`${styles.sectionHeadText}`}>Projects</h1>
            <div className="flex">
                <a
                    href="https://outreachoutlet.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <GithubCardSkew />
                </a>
            </div>
        </div>
    );
}

export default Projects;
