import {
  Github as GithubIcon,
  Linkedin as LinkedinIcon,
  MapPin,
  Twitter,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-16 bg-black/5 rounded-4xl dark:bg-white/5 jb"
    >
      <div className="px-4 mx-auto max-w-3xl">
        <div className="mb-10 text-center">
          <h2 className="mb-7 text-3xl font-bold text-gray-900 dark:text-white">
            Get in Touch
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400">
            Let&apos;s connect and explore how we can create something impactful
            together.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {/* Contact Info Card */}
          <div className="flex flex-col gap-5 p-6 rounded-3xl bg-white/80 dark:bg-black/60">
            <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
              Contact Information
            </h3>
            <div className="flex gap-3 items-center hover:bg-purple-50 dark:hover:bg-gray-900/40 px-2 py-2 rounded-lg cursor-pointer">
              <span className="inline-flex justify-center items-center w-9 h-9 bg-purple-100 rounded-lg dark:bg-purple-900/30">
                <MapPin className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </span>
              <span className="text-base text-gray-700 dark:text-gray-300">
                Pune, India
              </span>
            </div>
            <div className="flex gap-3 items-center hover:bg-purple-50 dark:hover:bg-gray-900/40 px-2 py-2 rounded-lg cursor-pointer">
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
                className="text-base text-gray-700 transition-colors dark:text-gray-300"
              >
                tejaspokale22@gmail.com
              </a>
            </div>
            <div className="flex gap-3 items-center hover:bg-purple-50 dark:hover:bg-gray-900/40 px-2 py-2 rounded-lg cursor-pointer">
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
                className="text-base text-gray-700 transition-colors dark:text-gray-300"
              >
                +91 8767486904
              </a>
            </div>
          </div>
          {/* Social Links Card */}
          <div className="flex flex-col gap-5 p-6 rounded-3xl bg-white/80 dark:bg-black/60">
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
  );
}
