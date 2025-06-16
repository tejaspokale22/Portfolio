import React, { useState } from "react";
import Link from "next/link";
import { Sun, Moon, Menu, X } from "lucide-react";

interface HeaderProps {
  darkMode: boolean;
  toggleTheme: () => void;
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({
  darkMode,
  toggleTheme,
  activeSection,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getLinkClass = (section: string) =>
    `text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 ${
      activeSection === section
        ? "text-purple-600 dark:text-purple-400 font-medium"
        : ""
    }`;

  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-white border-b border-gray-200 dark:bg-black dark:border-gray-800">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold text-gray-900 dark:text-white"
          >
            TP
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-8 md:flex">
            <Link href="#skills" className={getLinkClass("skills")}>
              Skills
            </Link>
            <Link href="#experience" className={getLinkClass("experience")}>
              Experience
            </Link>
            <Link href="#projects" className={getLinkClass("projects")}>
              Projects
            </Link>
            {/* Desktop Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-3 text-gray-600 rounded-lg cursor-pointer hover:bg-black/5 dark:text-gray-300 dark:hover:bg-white/10"
              aria-label="Toggle theme"
              title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? (
                <Sun size={20} className="w-5 h-5" />
              ) : (
                <Moon size={20} className="w-5 h-5" />
              )}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-gray-600 rounded-lg hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 md:hidden"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 right-0 bg-white dark:bg-black shadow-lg transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col">
          {/* Mobile Menu Header */}
          <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-800">
            <Link
              href="/"
              className="text-xl font-bold text-gray-900 dark:text-white"
            >
              TP
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-gray-600 rounded-lg hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Mobile Menu Navigation */}
          <nav className="p-6 space-y-6 border-b border-gray-200 dark:border-gray-800">
            <Link
              href="#skills"
              className={`block text-lg ${getLinkClass("skills")}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Skills
            </Link>
            <Link
              href="#experience"
              className={`block text-lg ${getLinkClass("experience")}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Experience
            </Link>
            <Link
              href="#projects"
              className={`block text-lg ${getLinkClass("projects")}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Projects
            </Link>
          </nav>

          {/* Mobile Theme Toggle */}
          <div className="p-6 border-t border-gray-200 dark:border-gray-800">
            <button
              onClick={toggleTheme}
              className="flex items-center p-2 w-full text-gray-600 rounded-lg cursor-pointer hover:bg-white/10 dark:text-gray-300 dark:hover:bg-white/10"
              aria-label="Toggle theme"
            >
              {darkMode ? (
                <>
                  <Sun size={20} className="mr-3 w-5 h-5" />
                  <span className="text-lg">Light Mode</span>
                </>
              ) : (
                <>
                  <Moon size={20} className="mr-3 w-5 h-5" />
                  <span className="text-lg">Dark Mode</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
