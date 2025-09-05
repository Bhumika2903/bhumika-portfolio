import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FiDownload } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="h-[92vh] flex flex-col justify-center items-center text-center px-4 sm:px-6 bg-[#FFF5F2] dark:bg-black transition-colors duration-500">
      
      {/* Circle with Inner Initials */}
      <div className="relative w-28 sm:w-32 h-28 sm:h-32 rounded-full flex items-center justify-center 
           bg-gradient-to-b from-[#FBD2C0] to-[#F2B998] border-[4px] border-[#E7A58B]">
        <span className="text-2xl sm:text-3xl font-display font-bold text-black">BP</span>
      </div>

      {/* Name */}
      <h1 className="mt-8 sm:mt-11 font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-snug">
        <span className="bg-gradient-to-r from-[#F5B199] to-[#E18B6E] bg-clip-text text-transparent">
          Bhumika
        </span>{" "}
        <span className="text-black dark:text-white">Pandey</span>
      </h1>

      {/* Tagline */}
      <p className="text-gray-500 dark:text-gray-400 mt-3 text-lg sm:text-xl transition-colors duration-500">
        Build. Break. Improve. Repeat.
      </p>

      {/* Resume Button + Icons */}
<div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center gap-4">
  {/* Download Resume button */}
  <a
    href="https://drive.google.com/file/d/1KKtGJUvNsbMC7tOtQ-EpiNjVbUVmis73/view?usp=drivesdk"
    download
    className="inline-flex items-center gap-2 bg-gradient-to-r from-[#E4967C] to-[#DE7F5F] text-white font-semibold px-4 sm:px-5 py-2.5 rounded-xl shadow-md hover:opacity-90 transition"
    title="Download Resume"
  >
    <FiDownload className="text-lg" /> Download Resume
  </a>

  {/* Social Icons */}
  <div className="flex items-center justify-center gap-3">
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
        className="flex items-center justify-center w-10 h-10 rounded-full 
                   ring-1 ring-black/10 dark:ring-white/20 
                   transition-colors duration-300 hover:bg-[#FFF1E6] dark:hover:bg-gray-400/20"
      >
        <Icon className="text-black dark:text-white" size={14} />
      </a>
    ))}
  </div>
</div>



      {/* Scroll to explore */}
      <div className="mt-10 sm:mt-12 text-gray-500 dark:text-gray-400 transition-colors duration-500">
        <p className="tracking-wide">Scroll to explore</p>
        <a
          href="#about"
          className="mt-2 flex justify-center animate-bounce"
        >
          <FaArrowDown 
            size={24}  // slightly smaller on mobile
            className="text-gray-400 dark:text-white"
          />
        </a>
      </div>
    </section>
  );
}
