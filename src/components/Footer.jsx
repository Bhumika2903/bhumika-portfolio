import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-[#FFF5F2] dark:bg-black border-t border-gray-300 dark:border-white/20 p-6 text-gray-400 transition-colors duration-500">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start w-full space-y-4 md:space-y-0">

        {/* Left: Name + role + Done! */}
        <div className="flex flex-col text-left w-full md:w-auto relative">
          <p className="font-semibold text-black dark:text-white">Bhumika Pandey</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
            Computer Science Student
          </p>

          {/* Horizontal line */}
          <div className="w-full h-px bg-black/10 dark:bg-white/10 my-2"></div>

          {/* "Done!" text */}
          <p className="font-semibold text-black dark:text-white mt-2">Done!</p>
        </div>

        {/* Center: Social icons */}
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/Bhumika2903"
            target="_blank"
            rel="noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-orange-400 transition-colors"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/bhumika2903"
            target="_blank"
            rel="noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-orange-400 transition-colors"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://leetcode.com/BhumikaPandey901903"
            target="_blank"
            rel="noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-orange-400 transition-colors"
          >
            <SiLeetcode size={20} />
          </a>
          <a
            href="mailto:imbhumikapandey1@gmail.com"
            className="text-gray-600 dark:text-gray-300 hover:text-orange-400 transition-colors"
          >
            <FaEnvelope size={20} />
          </a>
        </div>

        {/* Right: copyright */}
        <div className="text-sm text-gray-500 dark:text-gray-400 text-left md:text-right">
          © {new Date().getFullYear()} Bhumika Pandey. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
