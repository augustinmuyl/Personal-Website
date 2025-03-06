import Profile from "../components/profile/profile";
import Experience from "../components/experience/experience";
import Hero from "../components/hero/hero";
import Navbar from "../components/navbar/navbar";
import About from "../components/about/about";
import Projects from "../components/projects/projects";

export default function Page() {
    return (
        <div>
            <div className="h-screen">
                <Navbar></Navbar>
                <Hero></Hero>
            </div>
            <About />
            <Experience />
            <Projects />
        </div>
    );
}
