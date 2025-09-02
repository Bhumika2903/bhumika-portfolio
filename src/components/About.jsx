import { Mail, Globe, Sparkles, Code } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-16 pt-32 pb-16 bg-white text-black dark:bg-black dark:text-white transition-colors duration-500"
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Title outside the box */}
        <h2 className="text-3xl font-bold mb-6 border-b-4 border-orange-400 inline-block relative left-[-136px]">
          About Me
        </h2>
        {/* Card Box */}
        <div className="bg-white dark:bg-black border border-neutral-300 dark:border-neutral-700 rounded-2xl shadow-lg p-8 transition-colors duration-500">
          {/* Heading with icon */}
          <div className="flex items-center gap-3 mb-3">
            <Globe className="text-orange-300 w-6 h-6" />
            <h3 className="text-2xl font-semibold">Hey there, I&apos;m Bhumika!</h3>
          </div>
          {/* Tags */}
          <div className="flex gap-3 mb-4">
            <span className="bg-orange-300/10 text-orange-300 px-3 py-1 rounded-full text-sm font-medium">
              Problem Solver
            </span>
            <span className="bg-orange-300/10 text-orange-300 px-3 py-1 rounded-full text-sm font-medium">
              Tech Explorer
            </span>
          </div>
          {/* Main Description */}
          <p className="text-gray-800 dark:text-gray-300 mb-3">
            I&apos;m a third-year B.Tech student who loves coding and working with new
            tech stacks. From building sleek web applications to solving complex
            algorithms, I enjoy exploring different technologies and constantly
            challenging myself. I have solved more than 500 questions across
            various coding platforms, sharpening my problem-solving skills along
            the way.
          </p>
          {/* Contact */}
          <div className="flex items-center gap-2 mb-3">
            <Mail className="text-orange-300 w-5 h-5" />
            <p>
              Get in touch:{" "}
              <a
                href="mailto:imbhumikapandey1@gmail.com"
                className="text-orange-300 hover:underline"
              >
                imbhumikapandey1@gmail.com
              </a>
            </p>
          </div>
          {/* Extra Line with Icon */}
          <div className="flex items-start gap-3 mb-4">
            <Sparkles className="text-orange-300 w-5 h-5 mt-1" />
            <p className="text-gray-800 dark:text-gray-300">
              Apart from coding, I love learning about emerging technologies and
              experimenting with new frameworks. And when I&apos;m not glued to my
              screen, I&apos;m probably lost in a gripping drama or brainstorming
              my next project!
            </p>
          </div>
          {/* Tools */}
          <div className="flex items-center gap-2 mt-4 mb-2">
            <Code className="text-orange-300 w-6 h-6" />
            <h4 className="text-xl font-semibold">Tools and Technologies</h4>
          </div>
          <div className="flex flex-wrap gap-2 mt-3 text-gray-800 dark:text-gray-200">
            {[
              "C++",
              "Python",
              "JavaScript",
              "Java",
              "HTML",
              "CSS",
              "ReactJS",
              "Bootstrap",
              "Django",
              "SQLite",
              "PostgreSQL",
              "MySQL",
              "Git",
              "VSCode",
              "Android Studio",
            ].map((tool) => (
              <span
                key={tool}
                className="bg-neutral-200 dark:bg-neutral-700 px-3 py-1 rounded-lg text-sm transition-colors duration-500"
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
