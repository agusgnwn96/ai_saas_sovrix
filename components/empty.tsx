import Image from "next/image";

interface EmptyProps {
  label: string;
}

export function Empty({ label }: EmptyProps) {
  return (
    <div className="h-full p-20 flex flex-col items-center justify-center">
      <div className="relative h-72 w-72">
        <div className="flex items-center justify-center w-72 h-72 rounded-full bg-gradient-to-br from-violet-500/20 to-indigo-500/20">
          <div className="text-6xl">🤖</div>
        </div>
      </div>
      <p className="text-muted-foreground text-sm text-center">{label}</p>
    </div>
  );
}
