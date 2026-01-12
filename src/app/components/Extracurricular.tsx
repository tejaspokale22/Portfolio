export default function Extracurricular() {
  return (
    <section id="extracurricular" className="space-y-6">
      <h2 className="flex items-center text-3xl font-bold text-gray-900 dark:text-white jb">
        Extra-curricular
      </h2>
      <div className="p-2 bg-white rounded-xl dark:bg-black">
        <ul className="pl-6 space-y-3 list-disc text-gray-700 dark:text-gray-300">
          <li>
            <span className="font-bold">DevOps Lead</span> at GDGC PCCoE – Led
            Full Stack and DevOps workshops, training{" "}
            <span className="font-bold">100+ participants</span> on{" "}
            <span className="font-bold">CI/CD</span> and cloud tools, and
            organized a{" "}
            <span className="font-bold">36-hour national hackathon</span>.
          </li>
          <li>
            <span className="font-bold">Web Developer Lead</span> at Rocketry
            Club (Anantam) – Developed, deployed, and launched the official club
            website on <span className="font-bold">AWS</span> with enhanced{" "}
            <span className="font-bold">UI/UX</span> and{" "}
            <span className="font-bold">responsive design</span>.
          </li>
        </ul>
      </div>
    </section>
  );
}
