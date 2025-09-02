import React from "react"; 
import { FaGraduationCap, FaMapMarkerAlt } from "react-icons/fa";

const Item = ({ title, org, meta, where, desc }) => (
  <div className="bg-white dark:bg-neutral-900/60 rounded-2xl border border-neutral-300 dark:border-white/20 p-6 transition-colors duration-500">
    <div className="flex justify-between items-start">
      <div className="max-w-2xl">
        <h3 className="text-2xl font-semibold flex items-center gap-3 whitespace-nowrap text-black dark:text-white">
          <span className="bg-orange-300/10 text-black dark:text-white rounded-full p-3 flex items-center justify-center">
            <FaGraduationCap className="w-5 h-5 text-orange-400" />
          </span>
          {title}
        </h3>
        <p className="text-gray-800 dark:text-gray-200 text-lg font-medium mt-1 ml-1">
          {org}
        </p>
        {desc && <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">{desc}</p>}
      </div>
      <div className="flex flex-col items-end text-sm text-gray-600 dark:text-gray-400 leading-normal">
        <p>📅 {meta}</p>
        <p className="flex items-center gap-1">
          <FaMapMarkerAlt className="text-orange-400" /> {where}
        </p>
      </div>
    </div>
  </div>
);

export default function Education() {
  return (
    <section
      id="education"
      className="scroll-mt-16 pt-32 px-4 pb-20 bg-white dark:bg-black transition-colors duration-500"
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-extrabold mb-8 border-b-4 border-orange-400/80 inline-block ml-20 text-black dark:text-white">
          Education
        </h2>
        <div className="space-y-6 gap-3 ml-20" style={{ maxWidth: "calc(100% - 9rem)" }}>
          <Item
            title="B.Tech in Computer Science and Engineering"
            org="Graphic Era Hill University, Bhimtal"
            meta="August 2022 - July 2026"
            where="Bhimtal, Uttarakhand"
            desc="Currently pursuing Bachelor's in Computer Science with a CGPA of 8.71/10. Focusing on software engineering fundamentals and full-stack development."
          />
          <Item
            title="Intermediate"
            org="Gangotri Garbyal Girls Inter College"
            meta="March 2022"
            where="Pithoragarh, Uttarakhand"
            desc="Completed Intermediate with 82.33% marks."
          />
          <Item
            title="Matriculation"
            org="Gangotri Garbyal Girls Inter College"
            meta="March 2020"
            where="Pithoragarh, Uttarakhand"
            desc="Completed Matriculation with 78.93% marks."
          />
        </div>
      </div>
    </section>
  );
}
