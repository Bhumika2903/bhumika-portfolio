import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="relative bg-white/100 dark:bg-black/100 border-t border-gray-300 dark:border-white/20 p-6 text-gray-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start relative w-full space-y-4 md:space-y-0">

        {/* Left: Name + role + Done! */}
        <div className="flex flex-col text-left relative w-full md:w-auto">
          <p className="font-semibold text-black dark:text-white">Bhumika Pandey</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
            Computer Science Student
          </p>

          {/* Horizontal line extending to copyright */}
          <div
            className="absolute h-px bg-black/10 dark:bg-white/10"
            style={{
              top: '3.5rem',   // Computer Science Student ke neeche ka position
              left: 0,          // start from left of parent container
              right: -1115      // extend till end (full width of parent)
            }}
          ></div>

          {/* "Done!" below the horizontal line */}
          <p className="font-semibold text-black dark:text-white mb-2 mt-3">
            Done!
          </p>
        </div>

        {/* Center: Social icons (aligned to top) */}
        <div className="flex justify-center gap-6 self-start">
          <a
            href="https://github.com/Bhumika2903"
            target="_blank"
            rel="noreferrer"
            className="text-gray-600 dark:text-gray-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/bhumika2903"
            target="_blank"
            rel="noreferrer"
            className="text-gray-600 dark:text-gray-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://leetcode.com/BhumikaPandey901903"
            target="_blank"
            rel="noreferrer"
            className="text-gray-600 dark:text-gray-300"
          >
            <SiLeetcode />
          </a>
          <a
            href="mailto:imbhumikapandey1@gmail.com"
            className="text-gray-600 dark:text-gray-300"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Right bottom corner: copyright (aligned to top) */}
        <div className="text-sm text-gray-500 dark:text-gray-400 self-start">
          © {new Date().getFullYear()} Bhumika Pandey. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
