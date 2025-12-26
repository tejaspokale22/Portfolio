export default function Projects() {
  return (
    <section id="projects" className="space-y-6">
      <h2 className="flex items-center text-3xl font-bold text-gray-900 dark:text-white jb">
        Key Projects
      </h2>
      <div className="space-y-4">
        {/* QuickGigs Project */}
        <div className="p-7 bg-black/5 rounded-2xl hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10 cursor-pointer">
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
              <span className="font-bold">real-time gig management system</span>{" "}
              with <span className="font-bold">live chat</span>,
              <span className="font-bold">instant updates</span>,{" "}
              <span className="font-bold">Razorpay payment integration</span>,
              and an
              <span className="font-bold"> AI-powered</span> freelancers
              suggestion system for clients that analyzes candidate skills,
              reviews, past work to recommend the most suitable matches, using{" "}
              <span className="font-bold">embeddings</span>,{" "}
              <span className="font-bold">Vector DB(Qdrant)</span>, and{" "}
              <span className="font-bold">Gemini</span>, enhancing hiring
              accuracy.
            </li>
          </ul>
        </div>

        {/* Greenify Project */}
        <div className="p-7 bg-black/5 rounded-2xl hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10 cursor-pointer">
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
            Next.js, PostgreSQL, Drizzle ORM, Clerk Authentication, Gemini LLM
          </p>
          <ul className="pl-5 space-y-1 list-disc text-gray-700 dark:text-gray-300">
            <li>
              Developed an{" "}
              <span className="font-bold">
                AI-powered waste management platform
              </span>{" "}
              with
              <span className="font-bold">
                image-based waste reporting
              </span>, <span className="font-bold">geo-tagging</span>, and{" "}
              <span className="font-bold">AI-driven analysis</span> to classify
              waste types, estimate quantity, and assess environmental impact.
            </li>
            <li>
              Implemented{" "}
              <span className="font-bold">AI-driven verification</span> during
              waste collection by comparing reported and collected waste images
              with <span className="font-bold">90% accuracy</span>, and built a
              community cleanup system featuring leaderboards and rewards to
              boost participation.
            </li>
          </ul>
        </div>
      </div>

      {/* CipheDocs} */}
      <div className="p-7 bg-black/5 rounded-2xl hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10 cursor-pointer">
        <p className="flex justify-between items-center mb-1 text-lg font-semibold text-gray-800 dark:text-gray-200">
          CipherDocs
          <a
            href="https://github.com/tejaspokale22/CipherDocs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-purple-600 hover:underline dark:text-purple-400"
          >
            GitHub
          </a>
        </p>
        <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
          Blockchain, IPFS, Node.js, LLM, AI
        </p>
        <ul className="pl-5 mb-4 space-y-1 list-disc text-gray-700 dark:text-gray-300">
          <li>
            Developed a{" "}
            <span className="font-bold">
              academic certificate verification system
            </span>
            that eliminates document forgery and ensures data integrity using{" "}
            <span className="font-bold">blockchain</span>,
            <span className="font-bold"> IPFS</span>, and{" "}
            <span className="font-bold">hash functions</span>, creating an
            immutable, tamper-proof trail of records.
          </li>
          <li>
            Implemented role-based access for{" "}
            <span className="font-bold">issuers, verifiers, and students</span>{" "}
            for seamless document sharing and validation, integrated an{" "}
            <span className="font-bold">
              AI-based authenticity scoring engine
            </span>{" "}
            and{" "}
            <span className="font-bold">
              LLM-powered automated verification workflows
            </span>
            , significantly reducing manual effort while enhancing{" "}
            <span className="font-bold">
              trust, transparency, and efficiency
            </span>{" "}
            in academic and employment processes.
          </li>
        </ul>
      </div>
    </section>
  );
}
