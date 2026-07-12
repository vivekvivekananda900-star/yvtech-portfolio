export default function Skills() {
  const skills = [
    { name: "Next.js", level: 90 },
    { name: "React", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "Firebase", level: 85 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Java", level: 75 },
    { name: "Python", level: 80 },
    { name: "Git & GitHub", level: 85 },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-slate-950 text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-cyan-400 text-center mb-12">
          My Skills
        </h2>

        <div className="space-y-6">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-2">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>

              <div className="w-full h-3 bg-gray-700 rounded-full">
                <div
                  className="h-3 bg-cyan-400 rounded-full"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}