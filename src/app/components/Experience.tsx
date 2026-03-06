export default function Experience() {
  return (
    <section id="experience" className="space-y-8">
      <h2 className="flex items-center text-3xl font-bold text-gray-900 dark:text-white jb">
        Work Experience
      </h2>

      <div className="space-y-6">
        <div className="p-7 bg-black/5 rounded-2xl hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10">
          <p className="mb-1 text-lg font-semibold text-gray-800 dark:text-gray-200">
            Full Stack Developer Intern
          </p>
          <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
            Unihox Technologies | Remote | June 2025 – August 2025
          </p>
          <ul className="pl-5 mb-2 space-y-1 list-disc text-gray-700 dark:text-gray-300">
            <li>
              Worked on an{" "}
              <span className="font-bold">
                AI-powered fitness and wellness SaaS platform
              </span>{" "}
              using <span className="font-bold">TypeScript</span>,{" "}
              <span className="font-bold">Next.js</span>, and{" "}
              <span className="font-bold">Node.js</span>; developed and tested{" "}
              <span className="font-bold">APIs</span> to track and visualize
              users’ daily diet, yoga, workout, mindfulness, hydration, and
              sleep routines, computing multiple wellness metrics and an{" "}
              <span className="font-bold">overall wellness score</span> for
              daily, monthly, and yearly progress.
            </li>

            <li>
              Integrated an{" "}
              <span className="font-bold">AI assistant and agentic system</span>{" "}
              to deliver{" "}
              <span className="font-bold">personalized user experiences</span>{" "}
              and enable <span className="font-bold">workflow automation</span>.
            </li>

            <li>
              Developed an{" "}
              <span className="font-bold">
                interior design and furniture e-commerce platform
              </span>{" "}
              and enhanced the firm’s{" "}
              <span className="font-bold">official website</span>, improving{" "}
              <span className="font-bold">UI/UX</span> and{" "}
              <span className="font-bold">SEO</span>, optimizing performance
              with <span className="font-bold">Redis</span>, and ensuring
              reliable deployments using{" "}
              <span className="font-bold">Docker</span> and{" "}
              <span className="font-bold">CI/CD pipelines</span>.
            </li>
          </ul>

          <p className="text-gray-700 dark:text-gray-300">
            <span className="font-semibold">Tech Stack:</span> Next.js,
            React.js, Node.js, Redis, Docker, AWS, CI/CD, Figma
          </p>
        </div>
      </div>

      <div className="p-7 bg-black/5 rounded-2xl hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10">
        <p className="mb-1 text-lg font-semibold text-gray-800 dark:text-gray-200">
          Open Source Contributor
        </p>
        <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
          Hacktoberfest 2025 | Remote | October 2025
        </p>

        <ul className="pl-5 mb-2 space-y-1 list-disc text-gray-700 dark:text-gray-300">
          <li>
            Achieved{" "}
            <span className="font-bold">10+ meaningful merged PRs</span>,
            finishing among the{" "}
            <span className="font-bold">top 10,000 contributors globally</span>{" "}
            through consistent and high-quality open-source contributions.
          </li>

          <li>
            Contributed to{" "}
            <span className="font-bold">production-grade repositories</span> by
            fixing bugs, improving documentation, and enhancing features using{" "}
            <span className="font-bold">JavaScript</span>,{" "}
            <span className="font-bold">TypeScript</span>, and{" "}
            <span className="font-bold">React</span>, following industry best
            practices.
          </li>

          <li>
            Collaborated with{" "}
            <span className="font-bold">global maintainers</span> via code
            reviews, discussions, and issue triaging, strengthening{" "}
            <span className="font-bold">Git workflows</span>,{" "}
            <span className="font-bold">code quality</span>, and{" "}
            <span className="font-bold">open-source collaboration skills</span>.
          </li>
        </ul>

        <p className="text-gray-700 dark:text-gray-300">
          <span className="font-semibold">Tech Stack:</span> Git, GitHub,
          JavaScript, TypeScript, React, Open Source Tooling
        </p>
      </div>

      <div className="space-y-6 ">
        <div className="p-7 bg-black/5 rounded-2xl hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10">
          <p className="mb-1 text-lg font-semibold text-gray-800 dark:text-gray-200">
            Web Developer Intern
          </p>
          <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
            PCET Pune | September 2024 – December 2024
          </p>
          <ul className="pl-5 mb-2 space-y-1 list-disc text-gray-700 dark:text-gray-300">
            <li>
              Developed a <span className="font-bold">SaaS platform</span> with{" "}
              <span className="font-bold">MERN</span>, transforming academic
              assessment processes by improving{" "}
              <span className="font-bold">reliability by 50%</span>,
              <span className="font-bold">accuracy by 100%</span>, and overall
              system <span className="font-bold">scalability</span>.{" "}
              <span className="font-bold">Automated</span> student performance
              tracking with NBA accreditation workflows, reducing faculty{" "}
              <span className="font-bold">workload by 50%</span> and providing
              real-time data insights that improved decision-making.
            </li>
            <li>
              <span className="font-bold">Built a CO-PO mapping system</span> to
              enhance precision in evaluating{" "}
              <span className="font-bold">Knowledge, Skills, and Attitude</span>{" "}
              across <span className="font-bold">20+ courses</span> for enhanced
              academic insights.
            </li>
          </ul>
          <p className="text-gray-700 dark:text-gray-300">
            <span className="font-semibold">Tech Stack:</span> React.js,
            Node.js, Express.js, MongoDB Atlas
          </p>
        </div>
      </div>
    </section>
  );
}
