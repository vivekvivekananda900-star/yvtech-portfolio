export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-slate-950">
      <div className="flex flex-col items-center">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-cyan-500 border-t-transparent"></div>

        <h2 className="mt-6 text-2xl font-bold text-cyan-400">
          YVTech
        </h2>

        <p className="mt-2 text-gray-400">
          Loading Portfolio...
        </p>
      </div>
    </div>
  );
}