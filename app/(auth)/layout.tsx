export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-[#0a0a0f] overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-violet-600/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-indigo-600/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
