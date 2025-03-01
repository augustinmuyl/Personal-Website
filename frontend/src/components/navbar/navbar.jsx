function Navbar() {
    return (
        <header className="bg-slate-900 shadow w-full">
            <nav className="mx-60 p-6 flex justify-between items-center font-bold text-xl text-violet-300/80">
                <a href="/" className="font-bold text-3xl text-violet-200">
                    Augustin Muyl
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
