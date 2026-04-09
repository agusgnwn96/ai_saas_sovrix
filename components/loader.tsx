export function Loader() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="relative w-12 h-12">
        {/* Outer spinning ring */}
        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-violet-500 border-r-indigo-500 animate-spin" />
        {/* Inner dot */}
        <div className="absolute inset-3 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 animate-pulse" />
      </div>
      <p className="text-xs text-zinc-500 animate-pulse">Generating...</p>
    </div>
  );
}
