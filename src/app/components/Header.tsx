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
    `text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white dark:active:text-gray-400 active:text-gray-700 ${
      activeSection === section
        ? "text-purple-600 dark:text-purple-400 font-medium"
        : ""
    }`;

  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-white border-b border-gray-200 dark:bg-black dark:border-gray-800">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex justify-start items-center h-16 md:justify-center">
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
              className="p-3 text-gray-600 rounded-lg cursor-pointer hover:bg-black/5 dark:text-gray-300 dark:hover:bg-white/10 group"
              aria-label="Toggle theme"
            >
              {!darkMode ? (
                <Moon
                  size={20}
                  className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white"
                />
              ) : (
                <Sun
                  size={20}
                  className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white"
                />
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
        className={`fixed top-0 left-0 right-0 bg-white dark:bg-neutral-950 shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Header Bar */}
        <div className="flex justify-between items-center px-5 h-14 border-b border-gray-200 dark:border-gray-800">
          <span className="text-sm font-medium tracking-wide text-gray-400 uppercase dark:text-gray-500">Menu</span>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-1.5 text-gray-500 rounded-md transition-colors hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="px-3 py-2">
          <Link
            href="#skills"
            className={`block px-3 py-3 rounded-lg text-base transition-colors hover:bg-gray-100 dark:hover:bg-white/5 ${getLinkClass("skills")}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Skills
          </Link>
          <Link
            href="#experience"
            className={`block px-3 py-3 rounded-lg text-base transition-colors hover:bg-gray-100 dark:hover:bg-white/5 ${getLinkClass("experience")}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Experience
          </Link>
          <Link
            href="#projects"
            className={`block px-3 py-3 rounded-lg text-base transition-colors hover:bg-gray-100 dark:hover:bg-white/5 ${getLinkClass("projects")}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Projects
          </Link>
        </nav>

        {/* Theme Toggle */}
        <div className="px-1 mx-2 border-t border-gray-200 dark:border-gray-800">
          <button
            onClick={toggleTheme}
            className="flex items-center px-3 py-3 w-full text-gray-600 rounded-lg transition-colors cursor-pointer hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-white/5 group"
            aria-label="Toggle theme"
          >
            {darkMode ? (
              <>
                <Moon
                  size={18}
                  className="mr-3 text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-200"
                />
                <span className="text-base">Dark Mode</span>
              </>
            ) : (
              <>
                <Sun
                  size={18}
                  className="mr-3 text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-200"
                />
                <span className="text-base">Light Mode</span>
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
