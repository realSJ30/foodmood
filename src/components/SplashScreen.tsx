function SplashScreen() {
  return (
    <div className="h-screen w-full grid place-items-center bg-cream-100 font-display relative overflow-hidden">
      {/* concentric plate rings */}
      <div className="absolute h-[60vmin] w-[60vmin] rounded-full border border-forest-700/10" />
      <div className="absolute h-[45vmin] w-[45vmin] rounded-full border border-forest-700/10 animate-ripple" style={{ animationDelay: "0.2s" }} />
      <div className="absolute h-[30vmin] w-[30vmin] rounded-full border border-orange-300/40 animate-ripple" style={{ animationDelay: "0.6s" }} />
      <div className="absolute h-[20vmin] w-[20vmin] rounded-full bg-white shadow-[0_20px_60px_-20px_rgba(19,41,26,0.25)]" />

      {/* logo */}
      <div className="relative z-10 text-center">
        <div className="font-display font-bold text-5xl sm:text-6xl text-forest-700 tracking-tight">
          Food<span className="text-orange-400">mood</span>
        </div>
        <div className="mt-3 flex items-center justify-center gap-1.5 text-xs text-forest-600/60 tracking-[0.3em] uppercase">
          <span className="h-px w-6 bg-forest-600/30" />
          Setting the table
          <span className="h-px w-6 bg-forest-600/30" />
        </div>

        {/* dots */}
        <div className="mt-6 flex items-center justify-center gap-1.5">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="h-1.5 w-1.5 rounded-full bg-forest-700/60 animate-pulse"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SplashScreen;
