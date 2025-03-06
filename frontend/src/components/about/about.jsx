import { styles } from "../../app/styles";
import { pfp_1, pfp_2 } from "../../../public/assets";
import Image from "next/image";
import GithubCardShiny from "../animata/card/github-card-shiny";

function About() {
    return (
        <div
            id="about"
            className="flex flex-col gap-8 sm:gap-10 md:gap-12 xl:gap-16 justify-center items-center pt-36"
        >
            <h1 className={styles.sectionHeadText}>About Me</h1>
            <GithubCardShiny></GithubCardShiny>
        </div>
    );
}

export default About;
