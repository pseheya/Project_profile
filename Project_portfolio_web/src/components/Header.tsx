import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-[#172121] text-white py-4 p-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center ">
        <Link to="/" className="text-white text-xl font-mono">
          Portfolio Web
        </Link>

        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <div className="hidden lg:flex space-x-4">
          <a
            href="/"
            className="text-white  hover:bg-white hover:text-black px-3 py-2 rounded font-mono"
          >
            Main Page
          </a>
          <a
            href="/about"
            className="text-white hover:bg-white hover:text-black px-3 py-2 rounded font-mono"
          >
            About
          </a>
          <a
            href="/projects"
            className="text-white  hover:bg-white hover:text-black px-3 py-2 rounded font-mono"
          >
            Projects
          </a>

          <a
            href="/contact"
            className="text-white hover:bg-white hover:text-black  px-3 py-2 rounded font-mono"
          >
            Contact me
          </a>
        </div>
      </div>
      <div className={`lg:hidden ${isOpen ? "block" : "hidden"} mt-4`}>
        <Link
          to="/"
          className="block text-white  hover:bg-white hover:text-black px-3 py-2 rounded font-mono"
        >
          Main Page
        </Link>
        <Link
          to="/about"
          className="block text-white  hover:bg-white hover:text-black px-3 py-2 rounded font-mono"
        >
          About
        </Link>
        <Link
          to="/projects"
          className="block text-white  hover:bg-white hover:text-black px-3 py-2 rounded font-mono"
        >
          Projects
        </Link>
        <Link
          to="/contact"
          className="block text-white  hover:bg-white hover:text-black  px-3 py-2 rounded font-mono"
        >
          Contact me
        </Link>
      </div>
    </nav>
  );
}

export default Header;
