import React, { useState, useEffect } from "react";
import { BsMoonFill } from "react-icons/bs";
import { WiDaySunny } from "react-icons/wi";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const sections = ["about", "education", "projects", "contact"];

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-[#FFF5F2] dark:bg-black transition-colors duration-500 backdrop-blur border-b border-black/10 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 flex justify-between items-center h-16">

        {/* Logo */}
        <a
          href="#home"
          className="text-xl sm:text-2xl md:text-2xl font-display tracking-wide text-black dark:text-white transition-colors duration-500"
        >
          Init
        </a>

        {/* Desktop Links */}
        <div className="hidden sm:flex flex-1 justify-center gap-10 md:gap-12">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="text-black dark:text-white uppercase font-medium tracking-wide text-sm transition-colors duration-500 hover:text-orange-400"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>

        {/* Right: Dark mode + Hamburger */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full ring-1 ring-black/10 dark:ring-white/20 transition-colors duration-300"
          >
            {darkMode ? (
              <BsMoonFill className="text-lg text-white" />
            ) : (
              <WiDaySunny className="text-lg text-black" />
            )}
          </button>

          {/* Hamburger toggle for mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="sm:hidden p-2 rounded-md text-black dark:text-white transition-colors duration-300"
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#FFF5F2] dark:bg-black shadow-lg z-40 transform transition-transform duration-300 ease-in-out
          ${menuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex flex-col items-center mt-20 gap-6">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={() => setMenuOpen(false)} // close menu on click
              className="text-black dark:text-white uppercase font-medium text-lg transition-colors duration-300 hover:text-orange-400"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>
      </div>

      {/* Overlay when menu is open */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-30"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </nav>
  );
}
