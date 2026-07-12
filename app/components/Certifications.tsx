export default function Certifications() {
  const certificates = [
    "ServiceNow Internship",
    "Web Development Training",
    "Corporate Training Program",
    "Future Certifications",
  ];

  return (
    <section className="py-20 px-6 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-cyan-400 text-center mb-10">
          Certifications
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {certificates.map((item) => (
            <div
              key={item}
              className="bg-slate-800 p-6 rounded-xl hover:bg-cyan-600 transition"
            >
              <h3 className="text-xl font-semibold">{item}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}