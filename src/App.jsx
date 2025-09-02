import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="g-gray-200 dark:bg-black transition-colors duration-500">
      <Navbar />
      <main className="pt-16">
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="education"><Education /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </div>
  );
}
