"use client";

function Navbar() {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header className="bg-slate-900 shadow-2xl w-full fixed top-0 left-0 z-50 border-b">
            <nav className="mx-60 p-6 flex justify-between items-center font-bold text-xl text-violet-300/80">
                <a href="/" className="font-bold text-3xl text-violet-200">
                    Augustin Muyl
                </a>
                <button
                    onClick={() => scrollToSection("about")}
                    className="hover:text-white"
                >
                    About
                </button>
                <button
                    onClick={() => scrollToSection("experience")}
                    className="hover:text-white"
                >
                    Experience
                </button>
                <button
                    onClick={() => scrollToSection("projects")}
                    className="hover:text-white"
                >
                    Projects
                </button>
                <a
                    href="https://linkedin.com/in/augustinmuyl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                >
                    Contact
                </a>
            </nav>
        </header>
    );
}

export default Navbar;
