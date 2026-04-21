import Button from "../ui/Button";
import Pill from "../ui/Pill";
import BackgroundDecorations from "./BackgroundDecorations";
import MobilePreview from "./MobilePreview";

function Hero() {
  return (
    <section className="relative pt-6 pb-24 md:pb-40 min-h-[calc(100vh-80px)]">
      <BackgroundDecorations />

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 pt-10 md:grid-cols-2 md:gap-10 md:pt-20">
        {/* Left column: content */}
        <div className="text-center md:text-left">
          <Pill
            leading={
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-4 h-4 text-orange-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 11h16l-1 8a2 2 0 01-2 2H7a2 2 0 01-2-2l-1-8zM9 11V7a3 3 0 116 0v4"
                />
              </svg>
            }
            className="mx-auto md:mx-0"
          >
            <span className="text-orange-500 font-bold">Browse thousands</span>
            <span className="text-forest-700/70 font-medium">of delicious options</span>
          </Pill>

          <h1 className="mt-8 font-display font-bold tracking-tight text-forest-700 text-5xl sm:text-6xl lg:text-7xl leading-[1.05]">
            The recipe app <br className="hidden sm:block" />
            for every home <br className="hidden sm:block" />
            <span className="relative inline-block">
              chef!
              <span className="absolute -right-6 top-2 w-5 h-5 rounded-full bg-orange-400/80" />
            </span>
          </h1>

          <p className="mt-6 max-w-md mx-auto md:mx-0 text-forest-600/80 text-base sm:text-lg leading-relaxed">
            Find delicious recipes, cook with confidence, and share your
            creations — all in one app.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3">
            <Button size="lg" variant="primary" className="w-full sm:w-auto">
              Download App
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="w-full sm:w-auto !bg-white hover:!bg-cream-50"
            >
              Join the waitlist
            </Button>
          </div>

          <div className="mt-10 flex items-center justify-center md:justify-start gap-3">
            <div className="flex -space-x-2">
              {[
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80",
                "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=80&q=80",
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80",
              ].map((src) => (
                <img
                  key={src}
                  src={src}
                  alt=""
                  className="h-9 w-9 rounded-full object-cover ring-2 ring-cream-100"
                />
              ))}
            </div>
            <div className="text-left">
              <div className="text-sm font-semibold text-forest-700">Our happy customers</div>
              <div className="flex items-center gap-1 text-xs text-forest-600/70">
                <span className="text-amber-500 tracking-tight">★★★★★</span>
                <span className="font-semibold text-forest-700">5.0</span>
                <span>(2.4k reviews)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right column: mobile preview */}
        <div className="relative flex justify-center md:justify-end">
          <MobilePreview />
        </div>
      </div>
    </section>
  );
}

export default Hero;
