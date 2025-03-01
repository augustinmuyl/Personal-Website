import Navbar from "../navbar/navbar";

function Home() {
    return (
        <div className="w-full h-full bg-gray-500 flex justify-start items-center">
            <ul className="flex flex-col items-start ml-56 gap-1">
                <p className="text-3xl">Hello, I am</p>
                <h1 className="font-bold text-6xl">Augustin Muyl</h1>
                <p className="text-3xl">Boston University Student</p>
                <ul className="flex gap-5 mt-4">
                    <a href="https://linkedin.com/in/augustinmuyl">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                            alt="LinkedIn"
                            className="size-12 hover:scale-125 transition-all duration-300"
                        />
                    </a>
                    <a href="https://github.com/augustinmuyl">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                            alt="GitHub"
                            className="invert size-12 hover:scale-125 transition-all duration-300"
                        />
                    </a>
                </ul>
            </ul>
        </div>
    );
}

export default Home;
