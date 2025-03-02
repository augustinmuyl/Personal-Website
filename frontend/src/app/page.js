import Profile from "../components/profile/profile";
import Experience from "../components/experience/experience";
import HomeLayout from "../components/layout/layout";
import About from "../components/about/about";
import Projects from "../components/projects/projects";

export default function Page() {
    return (
        <>
            <HomeLayout />
            <div className="flex flex-col justify-center items-center gap-16 mt-16">
                <About />
                <Experience />
                <Projects/>
            </div>
        </>
    );
}
