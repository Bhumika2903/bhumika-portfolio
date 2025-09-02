import React, { useState, useEffect } from "react";
import { BsMoonFill } from "react-icons/bs";
import { WiDaySunny } from "react-icons/wi";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(true); // default dark

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="fixed top-0 inset-x-0 z-50 h-16 bg-white/100 dark:bg-black/70 backdrop-blur border-b border-black/10 dark:border-white/10">
      <div className="mx-auto max-w-6xl px-4 h-full flex justify-between items-center">
        {/* Logo / Init */}
        <a
          href="#home"
          className="text-2xl font-bold tracking-wide text-black dark:text-white transition-colors duration-500"
        >
          Init
        </a>

        {/* Centered Links */}
        <div className="flex-1 flex justify-center gap-6">
          {["about", "education", "projects", "contact"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="text-black dark:text-white transition-colors duration-500 hover:text-pink-300 uppercase font-medium tracking-wide text-sm"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>

        {/* Toggle Button */}
        <div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full ring-1 ring-black/10 dark:ring-white/20"
          >
            {darkMode ? (
              <BsMoonFill className="text-lg text-white" />
            ) : (
              <WiDaySunny className="text-lg text-black" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
