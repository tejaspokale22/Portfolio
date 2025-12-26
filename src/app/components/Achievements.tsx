export default function Achievements() {
  return (
    <section id="achievements" className="space-y-8">
      <h2 className="flex items-center text-3xl font-bold text-gray-900 dark:text-white jb">
        Achievements & Certifications
      </h2>
      <div className="p-2 bg-white rounded-xl dark:bg-black">
        <ul className="pl-6 space-y-3 list-disc text-gray-700 dark:text-gray-300">
          <li>
            Solved <span className="font-bold">500+ DSA problems</span> across
            LeetCode, GFG, CodeChef, and CodeForces; achieved a{" "}
            <span className="font-bold">LeetCode contest rating of 1570+</span>{" "}
            and earned SQL proficiency badge.
          </li>
          <li>
            Contributed to{" "}
            <span className="font-bold">multiple open source projects</span>{" "}
            with merged PRs; have{" "}
            <span className="font-bold">700+ GitHub contributions</span>,
            demonstrating consistent collaboration and code quality.
          </li>
          <li>
            Featured as a{" "}
            <span className="font-bold">
              Super Contributor @ Hacktoberfest 2025
            </span>{" "}
            for impactful open source contributions.
          </li>
          <li>
            Certified in{" "}
            <span className="font-bold">AWS Educate Cloud Computing</span>,{" "}
            <span className="font-bold">C++ (Udemy)</span>, and{" "}
            <span className="font-bold">
              Python Programming by GeeksforGeeks
            </span>
            .
          </li>
        </ul>
      </div>
    </section>
  );
}
