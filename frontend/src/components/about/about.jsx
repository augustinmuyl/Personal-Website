import { styles } from "@/app/styles";
import { pfp_1, pfp_2 } from "../../../public/assets";
import Image from "next/image";

function About() {
    return (
        <div id="about" className="flex justify-center items-center pt-32">
            <div className={`${styles.sectionBox} flex-col w-2/5 gap-8`}>
                <h1 className={styles.sectionHeadText}>About</h1>
                <div className="flex justify-center gap-16">
                    <Image
                        src={pfp_1}
                        alt="PFP"
                        className="rounded-full size-64"
                    />
                    <div className="text-lg/9 flex flex-col gap-4">
                        <p>
                            I'm a Math and Computer Science student at Boston
                            University with a background in full-stack
                            development, especially using React (Next.JS),
                            Tailwind CSS, Flask, MongoDB, and PostgreSQL.
                        </p>
                        <p>I am passionate about </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
