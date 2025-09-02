import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FiDownload } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="h-[92vh] flex flex-col justify-center items-center text-center px-4 bg-white dark:bg-black transition-colors duration-500">
      
      {/* Rounded Circle with Inner Rings + Initials */}
      <div className="relative w-36 h-36 rounded-full flex items-center justify-center 
        bg-gradient-to-br from-[#E18B6E] to-[#DE7F5F] shadow-lg
        before:absolute before:inset-0.5 before:rounded-full before:bg-gradient-to-r before:from-pink-200/50 before:to-purple-200/50 before:z-0
        after:absolute after:inset-1 after:rounded-full after:border-2 after:border-white/40 after:z-10">
        <span className="relative text-black text-5xl font-extrabold font-serif tracking-wide z-20">BP</span>
      </div>

      {/* Name */}
      <h1 className="mt-8 text-5xl md:text-6xl font-extrabold leading-tight text-black dark:text-white transition-colors duration-500">
        <span className="text-[#E18B6E]">Bhumika</span>{" "}
        <span className="text-gray-800 dark:text-gray-200">Pandey</span>
      </h1>

      {/* Tagline */}
      <p className="text-gray-500 dark:text-gray-400 mt-3 text-xl italic transition-colors duration-500">
        Build. Break. Improve. Repeat.
      </p>

      {/* Resume Button + Icons */}
      <div className="mt-8 flex items-center gap-4">
        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-2 bg-gradient-to-r from-[#E4967C] to-[#DE7F5F] text-white font-semibold px-5 py-2.5 rounded-xl shadow-md hover:opacity-90 transition"
          title="Download Resume"
        >
          <FiDownload className="text-lg" /> Download Resume
        </a>

        {[ 
          { href: "https://github.com/Bhumika2903", icon: FaGithub },
          { href: "https://linkedin.com/in/bhumika2903", icon: FaLinkedin },
          { href: "https://leetcode.com/u/bhumika2903", icon: SiLeetcode },
          { href: "mailto:imbhumikapandey1@gmail.com", icon: FaEnvelope },
        ].map(({ href, icon: Icon }) => (
          <a
            key={href}
            href={href}
            target={href.startsWith("mailto:") ? "_self" : "_blank"}
            rel={href.startsWith("mailto:") ? "" : "noreferrer"}
            className="p-3 rounded-full bg-gray-300 dark:bg-gray-800 transition-colors duration-500 hover:opacity-90"
          >
            <Icon className="text-black dark:text-white" size={18} />
          </a>
        ))}
      </div>

      {/* Scroll to explore */}
      <div className="mt-12 text-gray-500 dark:text-gray-400 transition-colors duration-500">
        <p className="tracking-wide">Scroll to explore</p>
        <a
          href="#about"
          className="mt-2 flex justify-center animate-bounce text-[#FFB87C]"
        >
          <FaArrowDown size={40} />
        </a>
      </div>
    </section>
  );
}
