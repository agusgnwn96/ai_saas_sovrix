export function Loader() {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <div className="w-10 h-10 relative">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 animate-spin [clip-path:inset(0_0_50%_0)]" />
        <div className="absolute inset-1 rounded-full bg-white dark:bg-background" />
      </div>
      <p className="text-sm text-muted-foreground">Sovrix AI is thinking...</p>
    </div>
  );
}
