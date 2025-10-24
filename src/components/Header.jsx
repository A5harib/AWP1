import { useState, useEffect } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-blue-950/95 backdrop-blur-xl shadow-blue-900/40 shadow-md border-b border-blue-800/50"
          : "bg-transparent backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-extrabold text-blue-100 tracking-tight hover:text-blue-400 transition-colors duration-300 cursor-pointer">
          Asharib <span className="text-blue-400">Hashmi</span>
        </div>

        <div className="hidden md:flex items-center space-x-10">
          <a
            href="#about"
            className="relative text-blue-200 hover:text-blue-400 font-medium transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-blue-400 hover:after:w-full after:transition-all after:duration-300"
          >
            About
          </a>
          <a
            href="#projects"
            className="relative text-blue-200 hover:text-blue-400 font-medium transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-blue-400 hover:after:w-full after:transition-all after:duration-300"
          >
            Projects
          </a>

          <a
            href="https://github.com/A5harib"
            className="bg-blue-500/90 hover:bg-blue-600 text-white px-6 py-2 rounded-full shadow-md shadow-blue-900/40 font-semibold transition-all duration-300 hover:shadow-blue-700/40"
          >
            Get Started
          </a>
        </div>

        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-7 h-7 text-blue-200 hover:text-blue-400 transition-colors"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-blue-950/95 backdrop-blur-md border-t border-blue-800/50 shadow-lg animate-fadeIn">
          <a
            href="#about"
            className="block py-3 text-blue-200 hover:text-blue-400 text-center transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#projects"
            className="block py-3 text-blue-200 hover:text-blue-400 text-center transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </a>

          <a
            href="https://github.com/A5harib"
            className="w-11/12 mx-auto my-3 bg-blue-500/90 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-all duration-300 shadow-md shadow-blue-900/40"
          >
            Get Started
          </a>
        </div>
      )}
    </header>
  );
}

export default Header;
