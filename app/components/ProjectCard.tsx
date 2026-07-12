type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
};

export default function ProjectCard({
  title,
  description,
  tech,
  liveUrl,
  githubUrl,
}: ProjectCardProps) {
  return (
    <div className="group rounded-3xl border border-slate-700 bg-slate-900/70 backdrop-blur-md p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]">
      <div className="h-48 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-6">
        <span className="text-5xl">💻</span>
      </div>

      <h3 className="text-2xl font-bold text-white">{title}</h3>

      <p className="mt-4 text-gray-400">{description}</p>

      <div className="flex flex-wrap gap-2 mt-5">
        {tech.map((item) => (
          <span
            key={item}
            className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-sm"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="flex gap-3 mt-6">
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cyan-500 hover:bg-cyan-600 px-5 py-2 rounded-xl font-semibold"
          >
            Live Demo
          </a>
        )}

        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-cyan-400 hover:bg-cyan-500 hover:text-black px-5 py-2 rounded-xl font-semibold"
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  );
}