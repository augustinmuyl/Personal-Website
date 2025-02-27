import Profile from "@/components/profile/profile";
import Experience from "@/components/experience/experience";

export default function Home() {
    return (
        <div className="flex flex-col justify-center items-center gap-8">
            <Profile></Profile>
            <Experience></Experience>
        </div>
    );
}
