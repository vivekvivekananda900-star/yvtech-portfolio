type SectionTitleProps = {
  title: string;
  subtitle?: string;
};

export default function SectionTitle({
  title,
  subtitle,
}: SectionTitleProps) {
  return (
    <div className="text-center mb-14">
      <h2 className="text-4xl md:text-5xl font-bold">
        <span className="text-cyan-400">{title}</span>
      </h2>

      {subtitle && (
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}

      <div className="w-24 h-1 bg-cyan-400 mx-auto mt-5 rounded-full"></div>
    </div>
  );
}