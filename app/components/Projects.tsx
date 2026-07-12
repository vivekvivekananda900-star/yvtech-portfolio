export default function Projects() {
  const projects = [
    {
      title: "Nithesh Cosmetics",
      description:
        "A modern e-commerce website built with Next.js, Tailwind CSS, TypeScript and Firebase.",
      tech: "Next.js • TypeScript • Firebase",
      link: "https://nitheshcosmetics.sbs",
    },
    {
      title: "YVTech Portfolio",
      description:
        "A personal portfolio website showcasing my skills, education and projects.",
      tech: "Next.js • Tailwind CSS",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-cyan-400 text-center mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-slate-800 rounded-2xl p-6 hover:scale-105 transition duration-300"
            >
              <h3 className="text-2xl font-bold">{project.title}</h3>

              <p className="text-gray-300 mt-4">
                {project.description}
              </p>

              <p className="text-cyan-400 mt-4 font-semibold">
                {project.tech}
              </p>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}