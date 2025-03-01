import Navbar from "../navbar/navbar";
import Home from "../home/home";

function HomeLayout() {
    return (
        <div className="flex flex-col h-screen w-full">
            <div>
                <Navbar></Navbar>
            </div>

            <div className="flex-1">
                <Home></Home>
            </div>
        </div>
    );
}

export default HomeLayout;
