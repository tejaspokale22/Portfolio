export default function Experience() {
  return (
    <section id="experience" className="space-y-8">
      <h2 className="flex items-center text-3xl font-bold text-gray-900 dark:text-white jb">
        Work Experience
      </h2>
      <div className="space-y-6">
        <div className="p-7 bg-black/5 rounded-2xl hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10 cursor-pointer">
          <p className="mb-1 text-lg font-semibold text-gray-800 dark:text-gray-200">
            Full Stack Developer Intern
          </p>
          <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
            Unihox Technologies | Remote | June 2025 – August 2025
          </p>
          <ul className="pl-5 mb-2 space-y-1 list-disc text-gray-700 dark:text-gray-300">
            <li>
              Worked on an end-to-end{" "}
              <span className="font-bold">
                AI-Powered fitness and wellness SaaS platform{" "}
              </span>
              using <span className="font-bold">Next.js</span>,{" "}
              <span className="font-bold">React Native</span>, and
              <span className="font-bold"> Node.js</span>. Integrated AI chatbot
              and agent systems to track yoga, workouts, mindfulness, hydration,
              and sleep routines, delivering{" "}
              <span className="font-bold">personalized experiences</span>
              and streamlining workflows for enhanced{" "}
              <span className="font-bold">user retention</span>.
            </li>
            <li>
              Developed a{" "}
              <span className="font-bold">
                interior design and furniture e-comm platform for a client{" "}
              </span>
              along with the company&apos;s official website emphasized on{" "}
              <span className="font-bold">intuitive UI/UX</span>, applied
              <span className="font-bold"> advanced SEO techniques</span>, and
              optimized performance with
              <span className="font-bold"> valkey caching</span>, resulting in{" "}
              <span className="font-bold">faster load times </span>
              and improved google search rankings.
            </li>
            <li>
              Implemented automated{" "}
              <span className="font-bold">CI/CD pipelines</span> to accelerate
              deployments, ensuring
              <span className="font-bold"> reliable</span>,{" "}
              <span className="font-bold">scalable delivery</span>, and reducing
              deployment time by <span className="font-bold">40%</span>.
            </li>
          </ul>
          <p className="text-gray-700 dark:text-gray-300">
            <span className="font-semibold">Tech Stack:</span> Next.js,
            React.js, Node.js, Redis, Docker, AWS, CI/CD, Figma
          </p>
        </div>
      </div>

      <div className="space-y-6 ">
        <div className="p-7 bg-black/5 rounded-2xl hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10 cursor-pointer">
          <p className="mb-1 text-lg font-semibold text-gray-800 dark:text-gray-200">
            Web Developer Intern
          </p>
          <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
            PCET Pune | Sept 2024 – Dec 2024
          </p>
          <ul className="pl-5 mb-2 space-y-1 list-disc text-gray-700 dark:text-gray-300">
            <li>
              Developed a <span className="font-bold">SaaS platform</span> with{" "}
              <span className="font-bold">MERN</span>, transforming academic
              assessment processes by improving{" "}
              <span className="font-bold">reliability by 50%</span>,
              <span className="font-bold">accuracy by 100%</span>, and overall
              system <span className="font-bold">scalability</span> of the
              system. <span className="font-bold">Automated</span> student
              performance tracking with NBA accreditation workflows, reducing
              faculty <span className="font-bold">workload by 50%</span> and
              providing real-time data insights that improved decision-making.
            </li>
            <li>
              <span className="font-bold">
                Pioneered a technology-driven CO-PO mapping system
              </span>{" "}
              to enhance precision in evaluating{" "}
              <span className="font-bold">Knowledge, Skills, and Attitude</span>
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
