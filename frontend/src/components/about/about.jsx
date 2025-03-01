import { styles } from "@/app/styles";

function About() {
    return (
        <>
            <div className={`${styles.sectionBox} flex-col gap-8`}>
                <h1 className={styles.sectionHeadText}>About</h1>
                <p>Hello</p>
            </div>
        </>
    );
}

export default About;
