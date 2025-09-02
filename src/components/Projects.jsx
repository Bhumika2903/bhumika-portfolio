import React from "react";
import multiDiseaseImg from "../assets/multidisease.png";
import ewasteImg from "../assets/e-waste.png";
import driveImg from "../assets/drivealert.png";
import smartShopeeImg from "../assets/shopee.png";

const data = [
  {
    title: "E-Waste Facility Locator",
    img: ewasteImg,
    desc: "Built a web app to locate e-waste recycling facilities using React.js, Flask, PostgreSQL with PostGIS, and geolocation APIs. Users can search nearby facilities, get directions, and view recycling options for different types of e-waste. Implemented responsive design for mobile and desktop use.",
    tech: ["React.js","Flask","PostgreSQL","PostGIS","Geolocation API"],
    date: "April 2025",
    github: "https://github.com/yourusername/your-repo-3"
  },
  {
    title: "Multi Disease Prediction Platform",
    img: multiDiseaseImg,
    desc: "Developed a platform integrating ML models for heart disease, lung cancer, and breast cancer prediction with a React frontend. Users can input personal health parameters, upload medical images, and get predictive insights. Integrated real-time data visualization and accuracy metrics for each prediction model.",
    tech: ["React.js","Python","ML","Logistic Regression","CNN"],
    date: "March 2025",
    github: "https://github.com/yourusername/your-repo-4"
  },
  {
    title: "Drive Alert",
    img: driveImg,
    desc: "Developed a driver drowsiness detection system leveraging OpenCV and Dlib to identify signs of fatigue. Implemented facial landmark detection, eye-blink analysis, and an alert system to enhance driver safety. System performance validated through extensive testing in various lighting and road conditions.",
    tech: ["Python","OpenCV","Dlib","NumPy"],
    date: "May 2025",
    github: "https://github.com/yourusername/drive-alert"
  },
  {
    title: "Smart Shopee",
    img: smartShopeeImg,
    desc: "An intelligent e-commerce platform with AI-powered product recommendations. Users can browse products, add items to cart, and checkout seamlessly. Integrated user behavior tracking to enhance recommendation accuracy and improve user experience across devices.",
    tech: ["React.js","Node.js","Express","MongoDB","AI Recommendation"],
    date: "June 2025",
    github: "https://github.com/yourusername/smart-shopee"
  }
];

const Card = ({ p }) => (
  <div className="bg-white dark:bg-neutral-900/60 rounded-2xl border border-neutral-300 dark:border-white/10 overflow-hidden hover:scale-105 transition-transform duration-300 shadow-lg flex flex-col h-full">
    {p.img && (
      <img src={p.img} alt={p.title} className="w-full h-48 md:h-52 object-cover" />
    )}
    <div className="p-6 flex flex-col flex-1">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-black dark:text-white">{p.title}</h3>
        <span className="text-xs bg-neutral-200 dark:bg-neutral-800 px-3 py-1 rounded-full border border-neutral-300 dark:border-white/10 text-black dark:text-white">{p.date}</span>
      </div>

      <p className="mt-3 text-gray-700 dark:text-gray-300 text-sm leading-relaxed flex-1">
        {p.desc.split('. ').map((sentence, i) => (
          <span key={i} className="block mb-2">{sentence}.</span>
        ))}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {p.tech.map(t => (
          <span key={t} className="text-xs px-2 py-1 rounded-full bg-orange-400/20 border border-orange-400 text-orange-300">
            {t}
          </span>
        ))}
      </div>

      <a
        href={p.github}
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-block text-pink-500 dark:text-pink-300 underline font-medium hover:text-pink-400 dark:hover:text-pink-400 text-sm"
      >
        View on GitHub
      </a>
    </div>
  </div>
);

export default function Projects() {
  return (
    <section 
      id="projects"
      className="scroll-mt-14 pt-32 pb-32 px-4 bg-white dark:bg-black transition-colors duration-500"
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-extrabold mb-8 border-b-4 border-orange-400/80 inline-block ml-20 text-black dark:text-white">
          Projects
        </h2>

        <div className="ml-20 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1133px]">
          {data.map(p => (
            <div key={p.title} className="w-full">
              <Card p={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
