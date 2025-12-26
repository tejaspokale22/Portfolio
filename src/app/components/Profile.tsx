import Link from "next/link";

export default function Profile() {
  return (
    <section className="overflow-hidden relative py-10 text-center">
      <div className="relative z-10 px-6 mx-auto mt-28 max-w-5xl">
        <h1 className="jb mb-8 font-serif text-5xl font-bold tracking-tight text-gray-900 transition-colors duration-300 md:text-7xl dark:text-white">
          Tejas Pokale
        </h1>
        <p className="mb-2 font-normal text-gray-600 transition-colors duration-300 text-sm md:text-xl dark:text-gray-400 jb">
          B.Tech IT Student | Software Engineer | OSS Contributer | Problem
          Solver
        </p>
        <Link
          href="https://drive.google.com/file/d/1teX46M_MKTYblWmgLFQpCj5dfjRLxLvh/view?usp=sharing"
          target="_blank"
          className="jb inline-flex items-center px-3 py-1 mt-6 text-base font-medium text-gray-600 rounded-lg border border-gray-600 dark:text-gray-400 dark:border-gray-500 hover:text-black hover:border-black dark:hover:text-gray-300 dark:hover:border-gray-400"
        >
          Resume
        </Link>
      </div>
    </section>
  );
}
