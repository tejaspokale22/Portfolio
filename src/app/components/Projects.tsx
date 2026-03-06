export default function Projects() {
  return (
    <section id="projects" className="space-y-6">
      <h2 className="flex items-center text-3xl font-bold text-gray-900 dark:text-white jb">
        Key Projects
      </h2>
      <div className="space-y-6">
        {/* CipherDocs Project */}
        <div className="p-7 bg-black/5 rounded-2xl hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10">
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
            Polygon Blockchain • IPFS • Next.js • Node.js • MongoDB • AI
          </p>

          <ul className="pl-5 mb-4 space-y-1 list-disc text-gray-700 dark:text-gray-300">
            <li>
              Built a{" "}
              <span className="font-bold">
                decentralized document issuance and verification platform
              </span>{" "}
              leveraging <span className="font-bold">Polygon blockchain</span>{" "}
              for immutable record keeping and{" "}
              <span className="font-bold">IPFS</span> for decentralized document
              storage, ensuring tamper-proof and verifiable digital records.
            </li>

            <li>
              Designed a secure workflow with{" "}
              <span className="font-bold">role-based access control</span> for
              issuers, users, and verifiers, along with{" "}
              <span className="font-bold">QR-based instant verification</span>{" "}
              and transparent auditability, enabling fast and reliable document
              authentication.
            </li>

            <li>
              Integrated an{" "}
              <span className="font-bold">AI-powered assistant</span> to guide
              users, simplify platform interaction, and support automated
              verification processes for improved usability and efficiency.
            </li>
          </ul>
        </div>

        {/* QuickGigs Project */}
        <div className="p-7 bg-black/5 rounded-2xl hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10">
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
              <span className="font-bold">freelancing platform</span> enabling
              college students to monetize their skills and gain hands-on
              experience through small-scale projects, addressing challenges of
              entering mainstream freelance markets.
            </li>
            <li>
              Built a{" "}
              <span className="font-bold">real-time gig management system</span>{" "}
              with <span className="font-bold">live chat</span>,{" "}
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
        <div className="p-7 bg-black/5 rounded-2xl hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10">
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

        {/* Google Form Autofill Extension Project */}
        <div className="p-7 bg-black/5 rounded-2xl hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10">
          <p className="flex justify-between items-center mb-1 text-lg font-semibold text-gray-800 dark:text-gray-200">
            Google Form Autofill Extension
            <a
              href="https://github.com/tejaspokale22/google-form-autofill"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-purple-600 hover:underline dark:text-purple-400"
            >
              GitHub
            </a>
          </p>

          <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
            JavaScript, React, Vite, Tailwind CSS, Chrome Extensions API
            (Manifest V3)
          </p>

          <ul className="pl-5 space-y-1 list-disc text-gray-700 dark:text-gray-300">
            <li>
              Built a{" "}
              <span className="font-bold">Chrome browser extension</span> to{" "}
              <span className="font-bold">
                auto-fill repetitive Google Forms
              </span>{" "}
              using saved user profiles, enabling{" "}
              <span className="font-bold">one-click autofill</span> with
              intelligent field detection supporting{" "}
              <span className="font-bold">
                text inputs, textareas, dropdowns, radio buttons, and checkboxes
              </span>
              .
            </li>

            <li>
              Implemented robust{" "}
              <span className="font-bold">profile management</span> with
              persistent <span className="font-bold">Chrome sync storage</span>,
              supporting standard and{" "}
              <span className="font-bold">custom fields</span>, real-time{" "}
              <span className="font-bold">search & filtering</span>, keyboard
              shortcuts, and quick field operations like copy-to-clipboard.
            </li>

            <li>
              Delivered advanced{" "}
              <span className="font-bold">data portability and security</span>{" "}
              features including{" "}
              <span className="font-bold">JSON import/export</span> with
              validation and duplicate handling,{" "}
              <span className="font-bold">PDF profile generation</span>, fully
              local data storage with minimal permissions, and{" "}
              <span className="font-bold">open-source</span> support across
              Chrome, Edge, Brave, and Chromium-based browsers.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
