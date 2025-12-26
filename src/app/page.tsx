"use client";

import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Extracurricular from "./components/Extracurricular";
import Contact from "./components/Contact";
import Profile from "./components/Profile";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    // Update localStorage and class
    if (newMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Header darkMode={darkMode} toggleTheme={toggleTheme} activeSection="" />
      <Profile />
      <main className="p-6 mx-auto space-y-14 max-w-5xl">
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Extracurricular />
        <Contact />
      </main>
    </div>
  );
}
