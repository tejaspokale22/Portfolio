export default function Skills() {
  return (
    <section id="skills" className="space-y-8">
      <h2 className="flex items-center text-3xl font-bold text-gray-900 transition-colors duration-300 dark:text-white jb">
        Technical Skills
      </h2>

      <div className="p-2">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          {/* Programming Languages */}
          <div>
            <h3 className="mb-4 text-xl font-semibold text-gray-800 dark:text-gray-200 jb">
              Programming Languages
            </h3>
            <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
              <li>C & C++</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>Java</li>
              <li>SQL</li>
              <li>Python</li>
            </ul>
          </div>

          {/* Frameworks */}
          <div>
            <h3 className="mb-4 text-xl font-semibold text-gray-800 dark:text-gray-200 jb">
              Frameworks
            </h3>
            <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
              <li>Next.js</li>
              <li>React.js</li>
              <li>Spring Boot</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>

          {/* Databases & Platforms */}
          <div>
            <h3 className="mb-4 text-xl font-semibold text-gray-800 dark:text-gray-200 jb">
              Databases & Platforms
            </h3>
            <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
              <li>MySQL</li>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
              <li>Firebase</li>
              <li>Supabase</li>
              <li>Appwrite</li>
            </ul>
          </div>

          {/* Tools & Technologies */}
          <div>
            <h3 className="mb-4 text-xl font-semibold text-gray-800 dark:text-gray-200 jb">
              Tools & Technologies
            </h3>
            <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
              <li>Git & GitHub</li>
              <li>Docker</li>
              <li>AWS</li>
              <li>Linux</li>
              <li>VS Code / IntelliJ</li>
              <li>Figma</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
