const LEAF_ASSET = "/hero-leaf1.png";

function BackgroundDecorations() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* concentric plate rings radiating from the bottom center */}
      <div className="absolute left-1/2 top-[62%] -translate-x-1/2 h-[90vw] w-[90vw] max-h-[900px] max-w-[900px] rounded-full border border-forest-700/[0.05]" />
      <div className="absolute left-1/2 top-[68%] -translate-x-1/2 h-[72vw] w-[72vw] max-h-[720px] max-w-[720px] rounded-full border border-forest-700/[0.06]" />
      <div className="absolute left-1/2 top-[74%] -translate-x-1/2 h-[55vw] w-[55vw] max-h-[560px] max-w-[560px] rounded-full border border-orange-300/30" />
      <div className="absolute left-1/2 top-[80%] -translate-x-1/2 h-[38vw] w-[38vw] max-h-[400px] max-w-[400px] rounded-full bg-white/70 shadow-[inset_0_0_60px_rgba(255,200,150,0.15)]" />

      {/* bottom-left rice bowl + leaves asset from /public/hero-leaf1.png */}
      <img
        src={LEAF_ASSET}
        alt=""
        className="absolute -left-8 sm:-left-4 bottom-0 w-[320px] sm:w-[420px] md:w-[480px] lg:w-[520px] opacity-95 animate-floaty-slow"
      />

      {/* lone leaf bottom-right (crop of same asset via CSS) */}
      <div
        className="absolute bottom-6 right-4 sm:right-10 w-28 sm:w-36 md:w-44 h-20 sm:h-24 md:h-28 bg-no-repeat bg-right-bottom animate-floaty-slow"
        style={{
          backgroundImage: `url(${LEAF_ASSET})`,
          backgroundSize: "300% auto",
          backgroundPosition: "100% 100%",
          animationDelay: "1.2s",
        }}
      />

      {/* top-right soft peach blur */}
      <div className="absolute -top-24 right-[-10%] h-[480px] w-[480px] rounded-full bg-orange-200/30 blur-3xl" />
    </div>
  );
}

export default BackgroundDecorations;
