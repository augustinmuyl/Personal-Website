import Image from "next/image";
import { styles } from "../../app/styles";
import {
    outreachoutlet,
    outreachoutlet_screenshot,
} from "../../../public/assets";
import GithubCardShiny from "../animata/card/github-card-shiny";
import GithubCardSkew from "../animata/card/github-card-skew";

function Projects() {
    return (
        <div
            id="projects"
            className="flex flex-col gap-12 justify-center items-center pt-48 pb-96"
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
