import { Mail, Globe, Sparkles, Code } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-16 pt-20 sm:pt-32 pb-16 bg-[#FFF5F2] text-black dark:bg-black dark:text-white transition-colors duration-500"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 border-b-4 border-orange-400 inline-block">
          About Me
        </h2>

        {/* Card */}
        <div className="bg-white dark:bg-black border border-neutral-300 dark:border-neutral-700 rounded-2xl shadow-lg p-6 sm:p-8 transition-colors duration-500">
          
          {/* Heading */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3">
            <Globe className="text-orange-300 w-5 h-5 sm:w-6 sm:h-6" />
            <h3 className="text-xl sm:text-2xl font-semibold">Hey there, I&apos;m Bhumika!</h3>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-orange-300/10 text-orange-300 px-3 py-1 rounded-full text-sm font-medium">
              Problem Solver
            </span>
            <span className="bg-orange-300/10 text-orange-300 px-3 py-1 rounded-full text-sm font-medium">
              Tech Explorer
            </span>
          </div>

          {/* Main Description */}
          <p className="text-gray-800 dark:text-gray-300 mb-3 text-sm sm:text-base">
            I&apos;m a passionate fourth-year B.Tech student driven by curiosity for coding and technology. From crafting intuitive web applications to tackling challenging algorithms, I thrive on solving problems and creating impactful solutions. With 500+ problems solved across competitive programming platforms, I’ve built strong problem-solving skills while exploring modern tech stacks like React, and more. Always eager to learn, I enjoy transforming ideas into functional, elegant solutions.
          </p>

          {/* Contact */}
          <div className="flex items-center gap-2 mb-3">
            <Mail className="text-orange-300 w-4 h-4 sm:w-5 sm:h-5" />
            <p className="text-sm sm:text-base">
              Get in touch:{" "}
              <a
                href="mailto:imbhumikapandey1@gmail.com"
                className="text-orange-300 hover:underline"
              >
                imbhumikapandey1@gmail.com
              </a>
            </p>
          </div>

          {/* Extra line */}
          <div className="flex items-start gap-2 sm:gap-3 mb-4">
            <Sparkles className="text-orange-300 w-4 h-4 sm:w-5 sm:h-5 mt-1" />
            <p className="text-gray-800 dark:text-gray-300 text-sm sm:text-base">
              Apart from coding, I enjoy exploring cutting-edge innovations and experimenting with creative ideas. When away from my laptop, you’ll usually find me binge-watching thought-provoking dramas or scribbling down concepts for my next big project.
            </p>
          </div>

          {/* Tools */}
          <div className="flex items-center gap-2 mt-4 mb-2">
            <Code className="text-orange-300 w-5 h-5 sm:w-6 sm:h-6" />
            <h4 className="text-lg sm:text-xl font-semibold">Tools and Technologies</h4>
          </div>
          <div className="font-semibold flex flex-wrap gap-2 mt-3 text-gray-800 dark:text-gray-200">
            {[
              "C++",
              "Python",
              "JavaScript",
              "Java",
              "HTML",
              "CSS",
              "ReactJS",
              "PostgreSQL",
              "MySQL",
              "Git",
              "VSCode",
              "Android Studio",
            ].map((tool) => (
              <span
                key={tool}
                className="text-xs sm:text-sm px-3 py-1 rounded-full border border-neutral-300 dark:border-white/40 text-black dark:text-white transition-colors duration-300 hover:bg-[#FFF1E6] dark:hover:bg-gray-400/20"
              >
                {tool}
              </span>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
