function About() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-8 py-20 bg-gradient-to-b from-black  to-blue-950 text-blue-100 text-center" id="about">
      <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 tracking-tight">
        Hey, I’m <span className="text-blue-400">Asharib Hashmi</span>
      </h1>

      <p className="max-w-2xl text-lg sm:text-xl leading-relaxed text-blue-200">
        A full-stack developer who engineers products that are fast, scalable,
        and beautifully built. I design intuitive frontends with React and
        develop efficient, maintainable backends with Node.js. My work bridges
        logic and design, ensuring performance meets precision in every
        deployment.
      </p>

      <p className="max-w-2xl text-lg sm:text-xl leading-relaxed text-blue-300 mt-6">
        I focus on building clean architectures, seamless user experiences, and
        robust systems that evolve gracefully with scale. Every project I touch
        aims for clarity, consistency, and technical elegance.
      </p>

      <div className="mt-10">
        <a
          href="#projects"
          className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full shadow-lg transition-all duration-300"
        >
          Explore My Work
        </a>
      </div>
    </section>
  );
}

export default About;
