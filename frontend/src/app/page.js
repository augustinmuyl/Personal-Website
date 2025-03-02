import Profile from "@/components/profile/profile";
import Experience from "@/components/experience/experience";
import About from "@/components/about/about";
import HomeLayout from "@/components/layout/layout";

export default function Page() {
    return (
        <>
            <HomeLayout />
            <div>
                <About />
                <Experience />
            </div>
        </>
    );
}
