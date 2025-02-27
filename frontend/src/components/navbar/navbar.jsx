import PurpleButton from "../buttons/purple-button";

function Navbar() {
    return (
        <header className="bg-slate-900 shadow">
            <nav className="mx-60 p-8 flex justify-between items-center font-bold text-xl text-violet-300/80">
                <a href="/" className="font-bold text-5xl text-violet-200">
                    Name
                </a>
                <a href="/" className="hover:text-white">
                    About
                </a>
                <a href="/" className="hover:text-white">
                    Experience
                </a>
                <a href="/" className="hover:text-white">
                    Projects
                </a>
                <a href="/" className="hover:text-white">
                    Contact
                </a>
            </nav>
        </header>
    );
}

export default Navbar;
