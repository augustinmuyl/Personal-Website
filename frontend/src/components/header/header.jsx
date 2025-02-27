import PurpleButton from "../buttons/purple-button";

function Header() {
    return (
        <header className="bg-slate-900 shadow">
            <nav className="mx-60 p-8 flex justify-between items-center">
                <a href="/" className="font-bold text-5xl text-violet-200">
                    Augustin Muyl
                </a>
                <a
                    href="/"
                    className="font-bold text-xl text-violet-300/80 hover:text-white"
                >
                    About
                </a>
                <a
                    href="/"
                    className="font-bold text-xl text-violet-300/80 hover:text-white"
                >
                    Experience
                </a>
                <a
                    href="/"
                    className="font-bold text-xl text-violet-300/80 hover:text-white"
                >
                    Projects
                </a>
            </nav>
        </header>
    );
}

export default Header;
