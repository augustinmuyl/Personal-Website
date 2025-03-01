import Navbar from "../navbar/navbar";
import Hero from "../hero/hero";

function HomeLayout() {
    return (
        <div className="flex flex-col h-screen w-full">
            <div>
                <Navbar />
            </div>

            <div className="flex-1">
                <Hero />
            </div>
        </div>
    );
}

export default HomeLayout;
