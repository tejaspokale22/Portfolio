"use client";

import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Header from "./components/Header";
import Loading from "./components/Loading";
import {
  Github as GithubIcon,
  Linkedin as LinkedinIcon,
  MapPin,
  Twitter,
} from "lucide-react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(Boolean);
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user has a theme preference in localStorage
    const isDark = localStorage.getItem("theme") === "dark";
    setDarkMode(isDark);

    // Apply the theme class to the HTML element
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 400);
  }, []);
  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);

    // Update localStorage and class
    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Header darkMode={darkMode} toggleTheme={toggleTheme} activeSection="" />

      <header className="overflow-hidden relative py-10 text-center">
        <div className="relative z-10 px-6 mx-auto mt-28 max-w-5xl">
          <h1 className="jb mb-8 font-serif text-5xl font-bold tracking-tight text-gray-900 transition-colors duration-300 md:text-7xl dark:text-white">
            Tejas Pokale
          </h1>
          <p className="mb-2 font-normal text-gray-600 transition-colors duration-300 text-sm md:text-xl dark:text-gray-400 jb">
            B.Tech IT Student | Full Stack Developer | DevOps Enthusiast |
            Problem Solver
          </p>
          <Link
            href="https://drive.google.com/file/d/1FjAxuguOMdW31ln9c0vlAbk8RrZ6dv5o/view?usp=sharing"
            target="_blank"
            className="jb inline-flex items-center px-3 py-1 mt-6 text-base font-medium text-gray-600 rounded-lg border border-gray-600 dark:text-gray-400 dark:border-gray-500 hover:text-black hover:border-black dark:hover:text-gray-300 dark:hover:border-gray-400"
          >
            Resume
          </Link>
        </div>
      </header>

      <main className="p-6 mx-auto space-y-14 max-w-5xl">
        <section id="about" className="space-y-4">
          <h2 className="flex items-center text-3xl font-bold text-gray-900 dark:text-white">
            About Me
          </h2>
          <div className="p-2">
            <p className="leading-relaxed text-gray-600 text-md dark:text-gray-300">
              I am a Final year <span className="font-bold">IT student</span> at
              PCCoE Pune, a Full Stack Developer (
              <span className="font-bold">Next.js</span>,{" "}
              <span className="font-bold">MERN</span>), and actively working
              with <span className="font-bold">DevOps</span> practices (
              <span className="font-bold">Docker</span>,{" "}
              <span className="font-bold">AWS</span>). I&apos;ve solved{" "}
              <span className="font-bold">350+</span> DSA problems across
              LeetCode, GFG, and CodeChef, with a LeetCode contest rating of{" "}
              <span className="font-bold">1570+</span>, and have strong
              problem-solving skills.
            </p>
          </div>
        </section>

        <section id="skills" className="space-y-8">
          <h2 className="flex items-center text-3xl font-bold text-gray-900 transition-colors duration-300 dark:text-white">
            Technical Skills
          </h2>

          <div className="p-2">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {/* Programming Languages */}
              <div>
                <h3 className="mb-4 text-xl font-semibold text-gray-800 dark:text-gray-200">
                  Programming Languages
                </h3>
                <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                  <li>C / C++</li>
                  <li>JavaScript / TypeScript</li>
                  <li>Python</li>
                  <li>Java</li>
                  <li>SQL</li>
                  <li>Go</li>
                </ul>
              </div>

              {/* Frameworks */}
              <div>
                <h3 className="mb-4 text-xl font-semibold text-gray-800 dark:text-gray-200">
                  Frameworks
                </h3>
                <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                  <li>React / Next.js</li>
                  <li>Node.js / Express</li>
                  <li>Tailwind CSS</li>
                  <li>Flask</li>
                  <li>Vue.js</li>
                </ul>
              </div>

              {/* Tools & Technologies */}
              <div>
                <h3 className="mb-4 text-xl font-semibold text-gray-800 dark:text-gray-200">
                  Tools & Technologies
                </h3>
                <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                  <li>Git & GitHub</li>
                  <li>Linux</li>
                  <li>Docker</li>
                  <li>PostgreSQL / MongoDB / MySQL</li>
                  <li>AWS</li>
                  <li>Firebase / Supabase / Appwrite</li>
                  <li>VS Code</li>
                  <li>Figma</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="space-y-8">
          <h2 className="flex items-center text-3xl font-bold text-gray-900 dark:text-white">
            Work Experience
          </h2>
          <div className="space-y-6">
            <div className="p-6 bg-white rounded-xl hover:bg-gray-50 dark:bg-black dark:hover:bg-white/5">
              <p className="mb-1 text-lg font-semibold text-gray-800 dark:text-gray-200">
                Web Developer Intern
              </p>
              <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
                PCET Pune | Sept 2024 – Jan 2025
              </p>
              <ul className="pl-5 mb-2 space-y-1 list-disc text-gray-700 dark:text-gray-300">
                <li>
                  Developed a <span className="font-bold">SaaS platform</span>{" "}
                  with <span className="font-bold">MERN</span>, transforming
                  academic assessment processes by improving{" "}
                  <span className="font-bold">reliability by 50%</span>,
                  <span className="font-bold">accuracy by 100%</span>, and
                  overall system <span className="font-bold">scalability</span>{" "}
                  of the system. <span className="font-bold">Automated</span>{" "}
                  student performance tracking with NBA accreditation workflows,
                  reducing faculty{" "}
                  <span className="font-bold">workload by 50%</span> and
                  providing real-time data insights that improved
                  decision-making.
                </li>
                <li>
                  <span className="font-bold">
                    Pioneered a technology-driven CO-PO mapping system
                  </span>{" "}
                  to enhance precision in evaluating{" "}
                  <span className="font-bold">
                    Knowledge, Skills, and Attitude
                  </span>
                  across <span className="font-bold">20+ courses</span> for
                  enhanced academic insights.
                </li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Tech Stack:</span> React,
                Node.js, Express.js, MongoDB
              </p>
            </div>
          </div>
        </section>

        <section id="projects" className="space-y-6">
          <h2 className="flex items-center text-3xl font-bold text-gray-900 dark:text-white">
            Key Projects
          </h2>
          <div className="space-y-4">
            {/* QuickGigs Project */}
            <div className="p-6 bg-white rounded-xl hover:bg-gray-50 dark:bg-black dark:hover:bg-white/5">
              <p className="flex justify-between items-center mb-1 text-lg font-semibold text-gray-800 dark:text-gray-200">
                QuickGigs
                <a
                  href="https://github.com/tejaspokale22/QuickGigs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-purple-600 hover:underline dark:text-purple-400"
                >
                  GitHub
                </a>
              </p>
              <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
                Next.js, Firebase, Appwrite, HuggingFace
              </p>
              <ul className="pl-5 mb-4 space-y-1 list-disc text-gray-700 dark:text-gray-300">
                <li>
                  Developed a{" "}
                  <span className="font-bold">micro-freelancing platform</span>{" "}
                  enabling college students to monetize their skills and gain
                  hands-on experience through small-scale projects, addressing
                  challenges of entering mainstream freelance markets.
                </li>
                <li>
                  Built a{" "}
                  <span className="font-bold">
                    real-time gig management system
                  </span>{" "}
                  with <span className="font-bold">live chat</span>,
                  <span className="font-bold">instant updates</span>,{" "}
                  <span className="font-bold">
                    Razorpay payment integration
                  </span>
                  , and an
                  <span className="font-bold"> AI-powered</span> freelancers
                  suggestion system for clients that analyzes candidate skills,
                  reviews, past work to recommend the most suitable matches,
                  using <span className="font-bold">embeddings</span>,{" "}
                  <span className="font-bold">Vector DB(Qdrant)</span>, and{" "}
                  <span className="font-bold">Gemini</span>, enhancing hiring
                  accuracy.
                </li>
              </ul>
            </div>

            {/* Greenify Project */}
            <div className="p-6 bg-white rounded-xl hover:bg-gray-50 dark:bg-black dark:hover:bg-white/5">
              <p className="flex justify-between items-center mb-1 text-lg font-semibold text-gray-800 dark:text-gray-200">
                Greenify
                <a
                  href="https://github.com/tejaspokale22/Greenify"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-purple-600 hover:underline dark:text-purple-400"
                >
                  GitHub
                </a>
              </p>
              <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
                Next.js, PostgreSQL, Drizzle ORM, Clerk Authentication, Gemini
                LLM
              </p>
              <ul className="pl-5 space-y-1 list-disc text-gray-700 dark:text-gray-300">
                <li>
                  Developed an{" "}
                  <span className="font-bold">
                    AI-powered waste management platform
                  </span>{" "}
                  with
                  <span className="font-bold">image-based waste reporting</span>
                  , <span className="font-bold">geo-tagging</span>, and{" "}
                  <span className="font-bold">AI-driven analysis</span> to
                  classify waste types, estimate quantity, and assess
                  environmental impact.
                </li>
                <li>
                  Implemented{" "}
                  <span className="font-bold">AI-driven verification</span>{" "}
                  during waste collection by comparing reported and collected
                  waste images with{" "}
                  <span className="font-bold">90% accuracy</span>, and built a
                  community cleanup system featuring leaderboards and rewards to
                  boost participation.
                </li>
              </ul>
            </div>

            {/* Django Project */}
            <div className="p-6 bg-white rounded-xl hover:bg-gray-50 dark:bg-black dark:hover:bg-white/5">
              <p className="flex justify-between items-center mb-1 text-lg font-semibold text-gray-800 dark:text-gray-200">
                Django App Containerization
                <a
                  href="https://github.com/tejaspokale22/django-app-containerization"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-purple-600 hover:underline dark:text-purple-400"
                >
                  GitHub
                </a>
              </p>
              <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
                Docker, Django, React, Python, MySQL, Nginx
              </p>
              <ul className="pl-5 mb-4 space-y-1 list-disc text-gray-700 dark:text-gray-300">
                <li>
                  Containerized a full-stack{" "}
                  <span className="font-bold">three-tier application</span> with{" "}
                  <span className="font-bold">Django</span>,{" "}
                  <span className="font-bold">React</span>, and{" "}
                  <span className="font-bold">MySQL</span>, using{" "}
                  <span className="font-bold">Nginx</span> as a reverse proxy,
                  custom <span className="font-bold">Dockerfiles</span>, and
                  automated deployment via{" "}
                  <span className="font-bold">Docker Compose</span> with
                  dedicated docker{" "}
                  <span className="font-bold">networks and volumes</span>.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="achievements" className="space-y-8">
          <h2 className="flex items-center text-3xl font-bold text-gray-900 dark:text-white">
            Achievements
          </h2>
          <div className="p-2 bg-white rounded-xl dark:bg-black">
            <ul className="pl-6 space-y-3 list-disc text-gray-700 dark:text-gray-300">
              <li>Achieved a LeetCode contest rating of 1570+.</li>
              <li>
                Solved over 450+ DSA problems across LeetCode, GFG, and
                CodeChef.
              </li>
            </ul>
          </div>
        </section>

        <section id="extracurricular" className="space-y-6">
          <h2 className="flex items-center text-3xl font-bold text-gray-900 dark:text-white">
            Extra-curricular
          </h2>
          <div className="p-2 bg-white rounded-xl dark:bg-black">
            <ul className="pl-6 space-y-3 list-disc text-gray-700 dark:text-gray-300">
              <li>
                DevOps Lead at GDGC PCCoE - Led Full Stack and DevOps workshops,
                training 100+ participants on CI/CD and cloud tools, organized a
                successful 36-hour national hackathon fostering innovation.
              </li>
              <li>
                Web Developer Lead at Rocketry Club (Anantam) - Developed and
                launched the official club website, showcasing research
                initiatives with enhanced UI/UX and responsive design to boost
                engagement.
              </li>
            </ul>
          </div>
        </section>

        <section id="contact" className="py-16 bg-white dark:bg-black">
          <div className="px-4 mx-auto max-w-2xl sm:max-w-3xl">
            <div className="mb-10 text-center">
              <h2 className="mb-3 text-3xl font-bold text-gray-900 dark:text-white jb">
                Get in Touch
              </h2>
              <p className="text-base text-gray-600 dark:text-gray-400 sm:text-lg">
                Let&apos;s connect and explore how we can create something
                impactful together.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {/* Contact Info Card */}
              <div className="flex flex-col gap-5 p-6 rounded-2xl border border-gray-100 shadow-sm bg-white/80 dark:bg-black/60 dark:border-gray-800">
                <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                  Contact Information
                </h3>
                <div className="flex gap-3 items-center">
                  <span className="inline-flex justify-center items-center w-9 h-9 bg-purple-100 rounded-lg dark:bg-purple-900/30">
                    <MapPin className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  </span>
                  <span className="text-base text-gray-700 dark:text-gray-300">
                    Pune, India
                  </span>
                </div>
                <div className="flex gap-3 items-center">
                  <span className="inline-flex justify-center items-center w-9 h-9 bg-purple-100 rounded-lg dark:bg-purple-900/30">
                    <svg
                      className="w-5 h-5 text-purple-600 dark:text-purple-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </span>
                  <a
                    href="mailto:tejaspokale22@gmail.com"
                    className="text-base text-gray-700 transition-colors dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                  >
                    tejaspokale22@gmail.com
                  </a>
                </div>
                <div className="flex gap-3 items-center">
                  <span className="inline-flex justify-center items-center w-9 h-9 bg-purple-100 rounded-lg dark:bg-purple-900/30">
                    <svg
                      className="w-5 h-5 text-purple-600 dark:text-purple-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                  </span>
                  <a
                    href="tel:+918767486904"
                    className="text-base text-gray-700 transition-colors dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                  >
                    +91 8767486904
                  </a>
                </div>
              </div>
              {/* Social Links Card */}
              <div className="flex flex-col gap-5 p-6 rounded-2xl border border-gray-100 shadow-sm bg-white/80 dark:bg-black/60 dark:border-gray-800">
                <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                  Connect with me
                </h3>
                <a
                  href="https://github.com/tejaspokale22"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-3 items-center px-2 py-2 rounded-lg transition-colors hover:bg-purple-50 dark:hover:bg-gray-900/40"
                >
                  <span className="inline-flex justify-center items-center w-9 h-9 bg-purple-100 rounded-lg dark:bg-purple-900/30">
                    <GithubIcon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  </span>
                  <span className="text-base font-medium text-gray-700 dark:text-gray-300">
                    GitHub
                  </span>
                </a>
                <a
                  href="https://www.linkedin.com/in/tejaspokale22"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-3 items-center px-2 py-2 rounded-lg transition-colors hover:bg-purple-50 dark:hover:bg-gray-900/40"
                >
                  <span className="inline-flex justify-center items-center w-9 h-9 bg-purple-100 rounded-lg dark:bg-purple-900/30">
                    <LinkedinIcon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  </span>
                  <span className="text-base font-medium text-gray-700 dark:text-gray-300">
                    LinkedIn
                  </span>
                </a>
                <a
                  href="https://x.com/tejaspokale4466"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-3 items-center px-2 py-2 rounded-lg transition-colors hover:bg-purple-50 dark:hover:bg-gray-900/40"
                >
                  <span className="inline-flex justify-center items-center w-9 h-9 bg-purple-100 rounded-lg dark:bg-purple-900/30">
                    <Twitter className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  </span>
                  <span className="text-base font-medium text-gray-700 dark:text-gray-300">
                    Twitter
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
