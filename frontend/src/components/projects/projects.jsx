import Image from "next/image";
import { styles } from "../../app/styles";
import { outreachoutlet } from "../../../public/assets";

function Projects() {
    return (
        <div
            id="projects"
            className="flex justify-center items-center pt-32 pb-96"
        >
            <div className={`${styles.sectionBox} flex flex-col gap-12`}>
                <h1 className={`${styles.sectionHeadText}`}>Projects</h1>
                <div>
                    <a
                        href="https://outreachoutlet.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src={outreachoutlet}
                            alt="OutreachOutlet"
                            className="w-60 hover:scale-110 transition-all duration-300 border-4 hover:border-violet-400"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Projects;
