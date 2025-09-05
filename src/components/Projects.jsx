import React from "react";
import { FaGithub } from "react-icons/fa";
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
    github: "https://github.com/Bhumika2903/E-Waste-Management_System"
  },
  {
    title: "Multi Disease Prediction Platform",
    img: multiDiseaseImg,
    desc: "Developed a platform integrating ML models for heart disease, lung cancer, and breast cancer prediction with a React frontend. Users can input personal health parameters, upload medical images, and get predictive insights. Integrated real-time data visualization and accuracy metrics for each prediction model.",
    tech: ["React.js","Python","ML","Logistic Regression","CNN"],
    date: "March 2025",
    github: "https://github.com/Bhumika2903/Multi_Disease_Detection"
  },
  {
    title: "Drive Alert",
    img: driveImg,
    desc: "Developed a driver drowsiness detection system leveraging OpenCV and Dlib to identify signs of fatigue. Achieved 90% accuracy in detecting driver drowsiness using facial landmark and eye-blink analysis. Validated system performance through extensive testing, demonstrating its potential to reduce driving accidents.",
    tech: ["Python","OpenCV","Dlib","NumPy"],
    date: "May 2025",
    github: "https://github.com/Bhumika2903/Drive_Alert"
  },
  {
    title: "Smart Shopee",
    img: smartShopeeImg,
    desc: "An intelligent e-commerce platform with AI-powered product recommendations. Users can browse products, add items to cart, and checkout seamlessly. Integrated user behavior tracking to enhance recommendation accuracy and improve user experience across devices.",
    tech: ["React.js","HTML","CSS","JavaScript","Web Scrapping"],
    date: "June 2025",
    github: "https://github.com/vimalchilkoti01/PriceCompare"
  }
];

const Card = ({ p }) => (
  <div className="bg-white dark:bg-neutral-900/60 rounded-2xl border border-neutral-300 dark:border-white/10 overflow-hidden hover:scale-105 transition-transform duration-300 shadow-md flex flex-col h-full">
    {p.img && (
  <img 
    src={p.img} 
    alt={p.title} 
    className="w-full h-36 sm:h-40 md:h-64 object-cover" 
  />
)}
    <div className="p-3 sm:p-4 flex flex-col flex-1">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-2">
        <h3 className="text-lg sm:text-lg font-semibold text-black dark:text-white">{p.title}</h3>
        <span className="text-xs px-2 py-1 rounded-full bg-[#FFF1E6] dark:bg-[#FFDACC] text-[#B85F40] border border-[#f5dcdc]">
          {p.date}
        </span>
      </div>

      <p className="mt-2 text-gray-700 dark:text-gray-300 text-xs sm:text-sm leading-snug flex-1">
        {p.desc.split('. ').map((sentence, i) => (
          <span key={i} className="block mb-1">{sentence}.</span>
        ))}
      </p>

      <div className="mt-2 flex flex-wrap gap-1 sm:gap-2">
        {p.tech.map(t => (
          <span 
            key={t} 
            className="text-xs px-2 py-0.5 rounded-full border border-neutral-300 dark:border-white/20 
                      bg-[#FFF1E6] text-black 
                      dark:bg-[#1a1a1a] dark:text-white 
                      transition-colors duration-300"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-3 flex justify-center">
        <a
          href={p.github}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1 px-2 py-0.5 rounded-full border border-neutral-300 dark:border-white/20 bg-[#FFF1E6] text-black dark:bg-black dark:text-white transition-colors duration-300 text-xs"
        >
          <FaGithub className="w-3 h-3" />
          <span>View on GitHub</span>
        </a>
      </div>
    </div>
  </div>
);


export default function Projects() {
  return (
    <section 
      id="projects"
      className="scroll-mt-14 pt-20 sm:pt-32 pb-32 px-4 sm:px-6 bg-[#FFF5F2] dark:bg-black transition-colors duration-500"
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-8 border-b-4 border-orange-400/80 inline-block text-black dark:text-white">
          Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
  {data.map(p => (
    <Card key={p.title} p={p} />
  ))}
</div>
      </div>
    </section>
  );
}
